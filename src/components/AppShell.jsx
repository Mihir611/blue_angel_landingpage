import { useState, useEffect } from 'react'
import { Menu, X, ChevronRight, Shield } from 'lucide-react'
import { BrandLogo, Btn } from './ui.jsx'
import { APP_LINKS, COMPANY_LINKS } from '../data.js'

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.83 14.09c-.24.68-1.4 1.3-1.93 1.35-.5.06-1.05.24-3.53-.74-2.98-1.19-4.87-4.21-5.02-4.4-.15-.2-1.2-1.59-1.2-3.04 0-1.44.76-2.15 1.03-2.44.27-.29.59-.36.79-.36.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2 .9 2.15.07.15.11.32.02.52-.09.2-.14.32-.27.49-.14.17-.29.38-.41.51-.14.14-.28.29-.12.57.16.28.7 1.16 1.51 1.88 1.04.93 1.91 1.22 2.19 1.36.28.14.44.12.6-.07.16-.2.69-.8.87-1.08.18-.28.36-.23.61-.14.24.09 1.55.73 1.82.87.27.14.45.2.51.32.06.12.06.68-.18 1.36Z" />
    </svg>
  )
}

function TelegramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.94 4.11a1.3 1.3 0 0 0-1.34-.18L2.6 10.79c-.98.38-.97 1.32.02 1.62l4.7 1.46 1.82 5.62c.2.6.5.72.94.37l2.62-2.28 4.63 3.42c.66.44 1.13.22 1.3-.61l3.03-14.28c.16-.87-.16-1.44-.72-.99ZM8.83 13.5l-1.5-4.65 9.75-5.98-8.25 10.63Zm.9 4.13-.6-3.02 1.66-1.5 3.6 2.68-4.66 1.84Z" />
    </svg>
  )
}

function RedditIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm5.5 10.44c0 .7-.62 1.28-1.4 1.28-.29 0-.55-.08-.77-.22-.9.67-2.19 1.1-3.63 1.15l.7-3.28 2.24.48a.98.98 0 1 0 .1-.53l-2.5-.53a.28.28 0 0 0-.33.21l-.79 3.65c-1.42-.06-2.7-.49-3.59-1.15-.22.14-.48.22-.77.22-.78 0-1.4-.58-1.4-1.28 0-.51.32-.95.79-1.14a1.6 1.6 0 0 1-.03-.31c0-1.5 1.75-2.72 3.9-2.79l.82-3.02c.04-.16.19-.26.35-.23l2.87.6a1 1 0 1 1-.09.53l-2.6-.54-.71 2.63c2.1.1 3.79 1.31 3.79 2.79 0 .11-.01.21-.03.31.47.19.78.63.78 1.14Zm-6.86-.63a.85.85 0 1 0 0 1.7.85.85 0 0 0 0-1.7Zm4.86.85a.85.85 0 1 0-1.7 0 .85.85 0 0 0 1.7 0Zm-4.28 2.06a.28.28 0 0 0-.36.42c.5.42 1.3.65 2.13.65s1.63-.23 2.13-.65a.28.28 0 1 0-.35-.42c-.4.34-1.08.53-1.78.53s-1.38-.19-1.77-.53Z" />
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07ZM12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56a5.9 5.9 0 0 0-2.13 1.39A5.9 5.9 0 0 0 .62 4.15c-.3.76-.5 1.63-.56 2.9C0 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.31.79.72 1.46 1.39 2.13a5.9 5.9 0 0 0 2.12 1.38c.76.3 1.63.5 2.91.56C8.33 24 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.12-1.38 5.9 5.9 0 0 0 1.39-2.13c.3-.76.5-1.63.56-2.9.06-1.29.07-1.7.07-4.96s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.68 5.68 0 0 0-1.38-2.12A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" />
    </svg>
  )
}

function DiscordIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.32 4.37a19.8 19.8 0 0 0-4.9-1.52.07.07 0 0 0-.08.04c-.21.38-.45.86-.61 1.25a18.3 18.3 0 0 0-5.46 0 12.6 12.6 0 0 0-.63-1.25.08.08 0 0 0-.08-.04c-1.7.29-3.36.8-4.9 1.52a.07.07 0 0 0-.03.03C.53 8.7-.32 12.9.1 17.06a.08.08 0 0 0 .03.06c2.06 1.51 4.05 2.43 6 3.03a.08.08 0 0 0 .09-.03c.46-.63.87-1.3 1.23-2a.08.08 0 0 0-.04-.11c-.65-.25-1.28-.55-1.87-.9a.08.08 0 0 1-.01-.13c.13-.09.25-.19.37-.29a.07.07 0 0 1 .08-.01c3.93 1.79 8.18 1.79 12.06 0a.07.07 0 0 1 .08.01c.12.1.24.2.37.3a.08.08 0 0 1-.01.12c-.6.35-1.22.65-1.87.9a.08.08 0 0 0-.04.12c.37.7.78 1.36 1.23 1.99a.08.08 0 0 0 .09.03c1.96-.6 3.95-1.52 6.01-3.03a.08.08 0 0 0 .03-.06c.5-4.83-.83-9-3.51-12.66a.06.06 0 0 0-.03-.03ZM8.02 14.65c-1.18 0-2.15-1.08-2.15-2.42s.95-2.42 2.15-2.42c1.21 0 2.17 1.1 2.15 2.42 0 1.34-.95 2.42-2.15 2.42Zm7.97 0c-1.18 0-2.15-1.08-2.15-2.42s.95-2.42 2.15-2.42c1.21 0 2.17 1.1 2.15 2.42 0 1.34-.94 2.42-2.15 2.42Z" />
    </svg>
  )
}

const SOCIAL_LINKS = [
  { id: 'whatsapp', label: 'WhatsApp', Icon: WhatsAppIcon, href: 'https://wa.me/', hover: '#25D366' },
  { id: 'telegram', label: 'Telegram', Icon: TelegramIcon, href: 'https://t.me/+pjGEANzBzqZjNmY9', hover: '#29A9EA' },
  { id: 'discord', label: 'Discord', Icon: DiscordIcon, href: 'https://discord.gg/uwzZQjS8xT', hover: '#5865F2' },
  { id: 'instagram', label: 'Instagram', Icon: InstagramIcon, href: 'https://instagram.com/moto_nomaad/', hover: '#E1306C' },
  { id: 'reddit', label: 'Reddit', Icon: RedditIcon, href: 'https://reddit.com/r/', hover: '#FF4500' },
]

function ScrollProgressBar() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrolled = doc.scrollTop
      const total = doc.scrollHeight - doc.clientHeight
      setPct(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#e8611a] via-[#f0874a] to-[#c0392b] transition-all duration-100"
      style={{ width: `${pct}%` }}
    />
  )
}

export default function AppShell({ children, page, navigate, showToast }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => { navigate(id); setMobileOpen(false) }

  return (
    <div className="min-h-screen flex flex-col bg-[#0d0d0d]">
      {/* ── Header ── */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 relative ${scrolled
          ? 'bg-[rgba(13,13,13,0.97)] backdrop-blur-xl border-b border-[#2a2520] shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
          : 'bg-[rgba(13,13,13,0.7)]  backdrop-blur-md  border-b border-transparent'
          }`}
        style={{ height: scrolled ? '60px' : '68px', transition: 'height 0.3s ease, background 0.3s ease' }}
      >
        <ScrollProgressBar />
        <div className="container mx-auto px-8 flex items-center justify-between h-full max-w-[1400px]">
          <BrandLogo onClick={() => go('home')} />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {APP_LINKS.map(l => (
              <span
                key={l.id}
                onClick={() => go(l.id)}
                className={`nav-link text-sm font-medium cursor-pointer pb-1 transition-colors duration-200 ${page === l.id ? 'text-[#f0ebe3] active' : 'text-[#8a8078] hover:text-[#f0ebe3]'
                  }`}
              >
                {l.label}
              </span>
            ))}
            <div className="w-px h-4 bg-[#2a2520] mx-1" />
            {COMPANY_LINKS.map(l => (
              <span
                key={l.id}
                onClick={() => go(l.id)}
                className={`nav-link text-sm font-medium cursor-pointer pb-1 transition-colors duration-200 ${page === l.id ? 'text-[#f0ebe3] active' : 'text-[#8a8078] hover:text-[#f0ebe3]'
                  }`}
              >
                {l.label}
              </span>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* <Btn
              variant="primary"
              size="sm"
              className="hidden lg:inline-flex btn-glow"
              onClick={() => showToast('Auth integration coming soon!')}
            >
              <Shield size={14} /> Sign In
            </Btn> */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-[#8a8078] hover:text-[#f0ebe3] hover:bg-[#1a1a1a] transition-all duration-200 active:scale-90"
            >
              <span className={`block transition-all duration-300 ${mobileOpen ? 'rotate-90' : 'rotate-0'}`}>
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[68px] bg-[rgba(13,13,13,0.98)] backdrop-blur-xl z-40 px-8 py-6 flex flex-col gap-1 animate-fade-in overflow-y-auto">
          {[...APP_LINKS, ...COMPANY_LINKS].map((l, i) => (
            <div
              key={l.id}
              onClick={() => go(l.id)}
              className={`flex items-center justify-between py-3.5 border-b border-[#2a2520] text-[1.05rem] font-medium cursor-pointer transition-all duration-200 animate-fade-up`}
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <span className={page === l.id ? 'text-[#e8611a]' : 'text-[#8a8078] hover:text-[#e8611a]'}>
                {l.label}
              </span>
              <ChevronRight size={16} className="text-[#8a8078]" />
            </div>
          ))}
          {/* <div className="pt-4">
            <Btn
              variant="primary"
              className="w-full btn-glow"
              onClick={() => { showToast('Auth integration coming soon!'); setMobileOpen(false) }}
            >
              <Shield size={15} /> Sign In
            </Btn>
          </div> */}
        </div>
      )}

      {/* ── Main ── */}
      <main className="flex-1">{children}</main>

      {/* ── Footer ── */}
      <footer className="bg-[#141414] border-t border-[#2a2520] pt-16 pb-8">
        <div className="container mx-auto px-8 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <BrandLogo onClick={() => go('home')} />
              <p className="text-[#8a8078] text-sm mt-4 leading-relaxed max-w-[260px]">
                The ultimate platform for motorcycle adventurers. Plan routes, connect with mechanics, and join the community.
              </p>
            </div>
            <div>
              <div className="font-heading text-[0.8rem] uppercase tracking-[0.15em] text-[#8a8078] mb-4">Platform</div>
              {APP_LINKS.map(l => (
                <span key={l.id} onClick={() => go(l.id)} className="block text-sm text-[#8a8078] hover:text-[#e8611a] cursor-pointer py-1 transition-colors duration-200 hover:translate-x-1 transform">{l.label}</span>
              ))}
            </div>
            <div>
              <div className="font-heading text-[0.8rem] uppercase tracking-[0.15em] text-[#8a8078] mb-4">Company</div>
              {COMPANY_LINKS.map(l => (
                <span key={l.id} onClick={() => go(l.id)} className="block text-sm text-[#8a8078] hover:text-[#e8611a] cursor-pointer py-1 transition-colors duration-200 hover:translate-x-1 transform">{l.label}</span>
              ))}
            </div>
            <div>
              <div className="font-heading text-[0.8rem] uppercase tracking-[0.15em] text-[#8a8078] mb-4">Connect</div>
              <a href="mailto:support@motonomaad.online" className="block text-sm text-[#8a8078] hover:text-[#e8611a] py-1 transition-colors duration-200 hover:translate-x-1 transform">Support</a>
              <span onClick={() => go('social')} className="block text-sm text-[#8a8078] hover:text-[#e8611a] cursor-pointer py-1 transition-colors duration-200 hover:translate-x-1 transform mb-4">Community</span>

              <div className="flex items-center gap-2.5 mt-2">
                {SOCIAL_LINKS.map(({ id, label, Icon, href, hover }) => (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group relative w-9 h-9 flex items-center justify-center rounded-full bg-[#1a1a1a] border border-[#2a2520] text-[#8a8078] transition-all duration-300 hover:-translate-y-1 hover:border-transparent"
                    style={{ '--hover-color': hover }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = hover
                      e.currentTarget.style.boxShadow = `0 0 0 1px ${hover}, 0 6px 16px -4px ${hover}66`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = ''
                      e.currentTarget.style.boxShadow = ''
                    }}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-[#2a2520] pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-sm text-[#8a8078]">© {new Date().getFullYear()} Motonomaad. All rights reserved.</p>
            <p className="text-sm text-[#8a8078]">Built with ❤️ for riders everywhere</p>
          </div>
        </div>
      </footer >
    </div >
  )
}
