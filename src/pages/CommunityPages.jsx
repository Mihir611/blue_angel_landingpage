import { useState } from 'react'
import { MapPin, Users, Plus, Calendar, Heart, MessageSquare, Send } from 'lucide-react'
import { Btn, TiltCard, Badge, TabGroup, EmptyState, Avatar } from '../components/ui.jsx'
import { useScrollReveal } from '../hooks/useAnimations.js'
import { MOCK_EVENTS, MOCK_GROUPS, MOCK_POSTS } from '../data.js'

// ── GroupsPage ────────────────────────────────────────────────────────────────
export function GroupsPage({ showToast }) {
  const [filter, setFilter] = useState('All')
  const categories = ['All', 'Adventure', 'Off-Road', 'Vintage', 'EV', 'Touring']
  const filtered = filter === 'All' ? MOCK_GROUPS : MOCK_GROUPS.filter(g => g.category === filter)
  const ref = useScrollReveal()

  return (
    <div className="container mx-auto px-8 max-w-[1400px] py-12">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <div className="flex items-start justify-between flex-wrap gap-4 mb-10">
          <div className="reveal">
            <h1 className="font-heading text-4xl md:text-5xl mb-1">Groups</h1>
            <p className="text-[#8a8078]">Join communities of riders with shared interests</p>
          </div>
          <div className="reveal stagger-2">
            <Btn className="btn-glow" onClick={() => showToast('Sign in to create groups!')}>
              <Plus size={16} /> Create Group
            </Btn>
          </div>
        </div>

        <div className="reveal mb-8"><TabGroup tabs={categories} active={filter} onChange={setFilter} /></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((g, i) => (
            <div key={i} className={`reveal stagger-${(i % 6) + 1}`}>
              <TiltCard className="p-6 flex flex-col h-full">
                <div className="mb-3"><Badge color="orange">{g.category}</Badge></div>
                <h3 className="font-heading text-lg mb-2">{g.name}</h3>
                <p className="text-[#8a8078] text-sm leading-relaxed mb-4 flex-1 line-clamp-3">{g.description}</p>
                <div className="flex items-center gap-1.5 text-[#8a8078] text-sm mb-4">
                  <Users size={13} /> {g.members.toLocaleString()} members
                </div>
                <Btn variant="outline" size="sm" className="w-full" onClick={() => showToast(`Joined "${g.name}"!`)}>
                  Join Group
                </Btn>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── SocialFeedPage ────────────────────────────────────────────────────────────
export function SocialFeedPage({ showToast }) {
  const [posts, setPosts] = useState(MOCK_POSTS)
  const [draft, setDraft] = useState('')
  const [likedPosts, setLikedPosts] = useState(new Set())
  const ref = useScrollReveal()

  const handlePost = () => {
    if (!draft.trim()) return
    setPosts([{ author: 'You', initials: 'YO', time: 'Just now', content: draft, likes: 0, comments: 0 }, ...posts])
    setDraft('')
    showToast('Post shared with the community!')
  }

  const toggleLike = (i) => {
    setLikedPosts(prev => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  return (
    <div className="container mx-auto px-8 max-w-[1400px] py-12">
      <div className="max-w-2xl mx-auto" ref={ref}>
        <div className="text-center mb-10 reveal">
          <h1 className="font-heading text-4xl md:text-5xl mb-2">Social Feed</h1>
          <p className="text-[#8a8078]">Share your rides, gear, and connect with fellow riders</p>
        </div>

        {/* Composer */}
        <div className="reveal stagger-1 bg-[#141414] border-[1.5px] border-[#2a2520] hover:border-[rgba(232,97,26,0.35)] rounded-[12px] p-5 mb-6 transition-colors duration-200">
          <div className="flex gap-3 items-start">
            <Avatar initials="YO" />
            <div className="flex-1">
              <textarea
                className="moto-input mb-3"
                placeholder="Share a ride story, tip, or ask the community..."
                value={draft}
                onChange={e => setDraft(e.target.value)}
              />
              <Btn size="sm" className="btn-glow" onClick={handlePost}>
                <Send size={13} /> Post
              </Btn>
            </div>
          </div>
        </div>

        {/* Posts */}
        <div className="space-y-4">
          {posts.map((p, i) => (
            <div
              key={i}
              className={`reveal stagger-${Math.min((i % 4) + 1, 6)} bg-[#141414] border-[1.5px] border-[#2a2520] hover:border-[rgba(232,97,26,0.35)] rounded-[12px] p-6 transition-all duration-200`}
            >
              <div className="flex gap-3 mb-4">
                <Avatar initials={p.initials} />
                <div>
                  <div className="font-semibold text-[0.95rem]">{p.author}</div>
                  <div className="text-xs text-[#8a8078]">{p.time}</div>
                </div>
              </div>
              <p className="leading-relaxed mb-4 text-[0.95rem]">{p.content}</p>
              <div className="flex gap-2">
                <Btn
                  variant="ghost"
                  size="sm"
                  className={`transition-all duration-200 ${likedPosts.has(i) ? 'text-[#e8611a]' : ''}`}
                  onClick={() => { toggleLike(i); if (!likedPosts.has(i)) showToast('Liked!') }}
                >
                  <Heart size={14} fill={likedPosts.has(i) ? 'currentColor' : 'none'} />
                  {p.likes + (likedPosts.has(i) ? 1 : 0)}
                </Btn>
                <Btn variant="ghost" size="sm">
                  <MessageSquare size={14} /> {p.comments}
                </Btn>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
