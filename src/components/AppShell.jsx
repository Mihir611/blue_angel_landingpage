import { useState, useEffect } from 'react'
import { Menu, X, ChevronRight, Shield } from 'lucide-react'
import { BrandLogo, Btn } from './ui.jsx'
import { APP_LINKS, COMPANY_LINKS } from '../data.js'

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
        className={`sticky top-0 z-50 transition-all duration-300 relative ${
          scrolled
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
                className={`nav-link text-sm font-medium cursor-pointer pb-1 transition-colors duration-200 ${
                  page === l.id ? 'text-[#f0ebe3] active' : 'text-[#8a8078] hover:text-[#f0ebe3]'
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
                className={`nav-link text-sm font-medium cursor-pointer pb-1 transition-colors duration-200 ${
                  page === l.id ? 'text-[#f0ebe3] active' : 'text-[#8a8078] hover:text-[#f0ebe3]'
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
              <a href="mailto:support@motonomaad.com" className="block text-sm text-[#8a8078] hover:text-[#e8611a] py-1 transition-colors duration-200 hover:translate-x-1 transform">Support</a>
              <span onClick={() => go('social')} className="block text-sm text-[#8a8078] hover:text-[#e8611a] cursor-pointer py-1 transition-colors duration-200 hover:translate-x-1 transform">Community</span>
            </div>
          </div>
          <div className="border-t border-[#2a2520] pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-sm text-[#8a8078]">© {new Date().getFullYear()} Motonomaad. All rights reserved.</p>
            <p className="text-sm text-[#8a8078]">Built with ❤️ for riders everywhere</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
