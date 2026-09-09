import { useState, useEffect } from 'react'
import { Calendar, User, Clock, ArrowRight, Tag, TrendingUp } from 'lucide-react'
import { Btn, Card, Badge } from '../components/ui.jsx'

const CATEGORIES = ['All', 'Reviews', 'Maintenance', 'Travel Stories', 'Gear', 'Safety', 'Routes']

export default function BlogPage({ showToast, navigate }) {
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedArticle, setSelectedArticle] = useState(null)
    const [articleContent, setArticleContent] = useState('')
    const [loading, setLoading] = useState(false)
    const [articles, setArticles] = useState([])
    const [manifestLoading, setManifestLoading] = useState(true)

    useEffect(() => {
        let cancelled = false

        const loadManifest = async () => {
            try {
                const response = await fetch('/blogs/index.json')
                if (!response.ok) throw new Error('Could not load blog manifest')
                const data = await response.json()
                if (!cancelled) setArticles(data)
            } catch (error) {
                console.error('Error loading blog manifest:', error)
            } finally {
                if (!cancelled) setManifestLoading(false)
            }
        }

        loadManifest()
        return () => { cancelled = true }
    }, [])

    const filteredArticles = articles.filter(article => {
        const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    const featuredArticles = filteredArticles.filter(article => article.featured)
    const regularArticles = filteredArticles.filter(article => !article.featured)

    const loadArticle = async (article) => {
        setLoading(true)
        setSelectedArticle(article)
        setArticleContent('')

        try {
            const response = await fetch(article.mdFile)
            if (!response.ok) throw new Error(`Article not found: ${article.mdFile}`)
            const markdown = await response.text()
            setArticleContent(markdown)
        } catch (error) {
            console.error('Error loading article:', error)
            setArticleContent('# Failed to load\n\nCould not load this article. Please check the file exists.')
        } finally {
            setLoading(false)
        }
    }

    const closeArticle = () => {
        setSelectedArticle(null)
        setArticleContent('')
    }

    const renderMarkdown = (markdown) => {
        const lines = markdown.split('\n')
        const elements = []

        lines.forEach((line, i) => {
            if (line.trim() === '') {
                elements.push(<div key={`br-${i}`} className="h-4" />)
                return
            }

            if (line.startsWith('### ')) {
                elements.push(
                    <h3 key={i} className="font-heading text-2xl mb-4 mt-8 text-[#e8611a]">
                        {line.replace('### ', '').replace(/\\/g, '')}
                    </h3>
                )
            } else if (line.startsWith('## ')) {
                elements.push(
                    <h2 key={i} className="font-heading text-3xl mb-4 mt-10 text-[#e8611a]">
                        {line.replace('## ', '').replace(/\\/g, '')}
                    </h2>
                )
            } else if (line.startsWith('# ')) {
                elements.push(
                    <h1 key={i} className="font-heading text-4xl mb-6 mt-8">
                        {line.replace('# ', '').replace(/\\/g, '')}
                    </h1>
                )
            } else if (line.match(/^\s*[-*]\s+/)) {
                const indent = line.search(/\S/)
                const content = line.replace(/^\s*[-*]\s+/, '').replace(/\\/g, '')
                elements.push(
                    <li
                        key={i}
                        className="text-[#d4cdc3] mb-2 list-disc leading-relaxed"
                        style={{ marginLeft: `${indent * 8}px` }}
                    >
                        {processInlineFormatting(content)}
                    </li>
                )
            } else {
                elements.push(
                    <p key={i} className="text-[#d4cdc3] leading-relaxed mb-4">
                        {processInlineFormatting(line.replace(/\\/g, ''))}
                    </p>
                )
            }
        })

        return elements
    }

    const processInlineFormatting = (text) => {
        const parts = []
        let currentIndex = 0
        const boldRegex = /(__|\*\*)(.*?)\1/g
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
        let match
        const matches = []

        while ((match = boldRegex.exec(text)) !== null) {
            matches.push({ type: 'bold', start: match.index, end: match.index + match[0].length, text: match[2] })
        }
        while ((match = linkRegex.exec(text)) !== null) {
            matches.push({ type: 'link', start: match.index, end: match.index + match[0].length, text: match[1], url: match[2] })
        }

        matches.sort((a, b) => a.start - b.start)

        matches.forEach((m, idx) => {
            if (m.start > currentIndex) parts.push(text.substring(currentIndex, m.start))
            if (m.type === 'bold') {
                parts.push(<strong key={`bold-${idx}`} className="font-semibold text-white">{m.text}</strong>)
            } else if (m.type === 'link') {
                parts.push(
                    <a key={`link-${idx}`} href={m.url} target="_blank" rel="noopener noreferrer" className="text-[#e8611a] hover:underline">
                        {m.text}
                    </a>
                )
            }
            currentIndex = m.end
        })

        if (currentIndex < text.length) parts.push(text.substring(currentIndex))
        return parts.length > 0 ? parts : text
    }

    // Article full view
    if (selectedArticle) {
        return (
            <div className="min-h-screen bg-[#0a0a0a]">
                <div className="sticky top-0 z-50 bg-[#0a0a0a] border-b border-[rgba(232,97,26,0.2)] backdrop-blur-sm">
                    <div className="container mx-auto px-8 max-w-[900px] py-4">
                        <Btn variant="secondary" size="sm" onClick={closeArticle}>
                            <ArrowRight size={16} className="rotate-180" /> Back to Blog
                        </Btn>
                    </div>
                </div>

                <div className="container mx-auto px-8 max-w-[900px] py-8">
                    <article>
                        <div className="mb-8">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <Badge color="orange">{selectedArticle.category}</Badge>
                                {selectedArticle.tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 rounded-full text-xs font-bold bg-[rgba(232,97,26,0.12)] text-[#e8611a]">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h1 className="font-heading text-4xl md:text-5xl mb-4 leading-tight">
                                {selectedArticle.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-[#8a8078] mb-6">
                                <div className="flex items-center gap-2">
                                    <User size={16} className="text-[#e8611a]" /> {selectedArticle.author}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} className="text-[#e8611a]" /> {selectedArticle.date}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} className="text-[#e8611a]" /> {selectedArticle.readTime}
                                </div>
                            </div>

                            <div className="relative h-[400px] rounded-[12px] overflow-hidden mb-8">
                                <img
                                    src={selectedArticle.image}
                                    alt={selectedArticle.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => { e.target.src = selectedArticle.fallbackImage }}
                                />
                            </div>
                        </div>

                        <Card className="p-8 md:p-12">
                            {loading ? (
                                <div className="flex justify-center items-center py-12">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#e8611a]"></div>
                                </div>
                            ) : (
                                <div className="prose prose-invert max-w-none">
                                    {renderMarkdown(articleContent)}
                                </div>
                            )}
                        </Card>

                        <div className="mt-8 text-center">
                            <Btn className="btn-glow" onClick={() => showToast('Article link copied to clipboard!')}>
                                Share This Article
                            </Btn>
                        </div>
                    </article>
                </div>
            </div>
        )
    }

    // Blog listing view
    return (
        <div className="container mx-auto px-8 max-w-[1400px] py-12">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="font-heading text-4xl md:text-5xl mb-2">Rider's Blog</h1>
                    <p className="text-[#8a8078] text-lg">Stories, tips, and insights from the automotive community</p>
                </div>

                {/* Loading state */}
                {manifestLoading ? (
                    <div className="flex justify-center items-center py-24">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#e8611a]"></div>
                    </div>
                ) : (
                    <>
                        {/* Search and Filter */}
                        <div className="mb-12">
                            <Card className="p-6">
                                <div className="flex flex-col md:flex-row gap-4">
                                    <div className="flex-1">
                                        <input
                                            type="text"
                                            placeholder="Search articles..."
                                            className="moto-input w-full"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {CATEGORIES.map(cat => (
                                            <button
                                                key={cat}
                                                onClick={() => setSelectedCategory(cat)}
                                                className={`px-4 py-2 rounded-[8px] text-sm font-semibold transition-all duration-200 ${
                                                    selectedCategory === cat
                                                        ? 'bg-[#e8611a] text-white'
                                                        : 'bg-[rgba(232,97,26,0.12)] text-[#e8611a] hover:bg-[rgba(232,97,26,0.2)]'
                                                }`}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </div>

                        {/* Featured Articles */}
                        {selectedCategory === 'All' && !searchQuery && featuredArticles.length > 0 && (
                            <div className="mb-16">
                                <div className="flex items-center gap-2 mb-6">
                                    <TrendingUp size={24} className="text-[#e8611a]" />
                                    <h2 className="font-heading text-3xl">Featured Posts</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {featuredArticles.map((article, index) => (
                                        <Card
                                            key={article.id}
                                            className="overflow-hidden hover:border-[rgba(232,97,26,0.6)] transition-all duration-300 cursor-pointer group"
                                        >
                                            <div className="relative h-[280px] overflow-hidden">
                                                <img
                                                    src={article.image}
                                                    alt={article.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    onError={(e) => { e.target.src = article.fallbackImage }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                                <div className="absolute top-4 left-4">
                                                    <Badge color="orange">Featured</Badge>
                                                </div>
                                                <div className="absolute bottom-4 left-4 right-4">
                                                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#e8611a] text-white">
                                                        {article.category}
                                                    </span>
                                                    <h3 className="font-heading text-2xl text-white line-clamp-2 mt-2">
                                                        {article.title}
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <p className="text-[#8a8078] text-sm leading-relaxed mb-4 line-clamp-2">
                                                    {article.excerpt}
                                                </p>
                                                <div className="flex flex-wrap items-center gap-4 text-xs text-[#8a8078] mb-4">
                                                    <div className="flex items-center gap-1">
                                                        <User size={14} className="text-[#e8611a]" /> {article.author}
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Calendar size={14} className="text-[#e8611a]" /> {article.date}
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Clock size={14} className="text-[#e8611a]" /> {article.readTime}
                                                    </div>
                                                </div>
                                                <Btn size="sm" className="btn-glow w-full justify-center" onClick={() => loadArticle(article)}>
                                                    Read Article <ArrowRight size={14} />
                                                </Btn>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Regular Articles Grid */}
                        <div>
                            <div className="mb-6">
                                {selectedCategory !== 'All' || searchQuery ? (
                                    <>
                                        <h2 className="font-heading text-2xl">
                                            {searchQuery ? `Search results for "${searchQuery}"` : `${selectedCategory} Articles`}
                                        </h2>
                                        <p className="text-[#8a8078] text-sm mt-1">
                                            {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
                                        </p>
                                    </>
                                ) : (
                                    <h2 className="font-heading text-3xl">Latest Articles</h2>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {regularArticles.map((article, index) => (
                                    <Card
                                        key={article.id}
                                        className="overflow-hidden hover:border-[rgba(232,97,26,0.6)] transition-all duration-300 cursor-pointer group flex flex-col"
                                        onClick={() => loadArticle(article)}
                                    >
                                        <div className="relative h-[200px] overflow-hidden">
                                            <img
                                                src={article.image}
                                                alt={article.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                onError={(e) => { e.target.src = article.fallbackImage }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                            <div className="absolute top-3 left-3">
                                                <span className="px-2 py-1 rounded-full text-[10px] font-bold bg-[#e8611a] text-white uppercase tracking-wider">
                                                    {article.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-5 flex flex-col flex-1">
                                            <h3 className="font-heading text-lg mb-2 line-clamp-2 group-hover:text-[#e8611a] transition-colors">
                                                {article.title}
                                            </h3>
                                            <p className="text-[#8a8078] text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                                                {article.excerpt}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {article.tags.slice(0, 3).map((tag, i) => (
                                                    <span key={i} className="flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold bg-[rgba(232,97,26,0.12)] text-[#e8611a]">
                                                        <Tag size={8} /> {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="flex items-center justify-between text-xs text-[#8a8078] pt-3 border-t border-[rgba(232,97,26,0.15)]">
                                                <div className="flex items-center gap-1">
                                                    <User size={12} className="text-[#e8611a]" /> {article.author}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Clock size={12} className="text-[#e8611a]" /> {article.readTime}
                                                </div>
                                            </div>
                                            <Btn size="sm" variant="secondary" className="w-full justify-center mt-4" onClick={(e) => { e.stopPropagation(); loadArticle(article) }}>
                                                Read More <ArrowRight size={14} />
                                            </Btn>
                                        </div>
                                    </Card>
                                ))}
                            </div>

                            {/* No Results */}
                            {filteredArticles.length === 0 && (
                                <div className="text-center py-16">
                                    <div className="w-20 h-20 bg-[rgba(232,97,26,0.12)] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Tag size={32} className="text-[#e8611a]" />
                                    </div>
                                    <h3 className="font-heading text-2xl mb-2">No articles found</h3>
                                    <p className="text-[#8a8078] mb-6">Try adjusting your search or filter criteria</p>
                                    <Btn onClick={() => { setSearchQuery(''); setSelectedCategory('All') }}>
                                        Clear Filters
                                    </Btn>
                                </div>
                            )}
                        </div>

                        {/* Newsletter CTA */}
                        <div className="mt-16">
                            <Card className="p-8 md:p-12 bg-gradient-to-br from-[rgba(232,97,26,0.1)] to-transparent border-[#e8611a] text-center">
                                <h2 className="font-heading text-3xl mb-3">Never Miss a Story</h2>
                                <p className="text-[#8a8078] mb-6 max-w-xl mx-auto">
                                    Subscribe to our newsletter and get the latest articles, tips, and reviews delivered to your inbox.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                                    <input type="email" placeholder="Enter your email" className="moto-input flex-1" />
                                    <Btn className="btn-glow" onClick={() => showToast('Thanks for subscribing!')}>
                                        Subscribe
                                    </Btn>
                                </div>
                            </Card>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}