import { Star } from 'lucide-react'
import { useTilt } from '../hooks/useAnimations.js'

// ── Btn ──────────────────────────────────────────────────────────────────────
export function Btn({ children, variant = 'primary', size = 'md', className = '', onClick, type = 'button', disabled = false }) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-[12px] cursor-pointer transition-all duration-200 font-body disabled:opacity-50 disabled:cursor-not-allowed select-none'
  const sizes = { sm: 'px-4 py-[6px] text-sm', md: 'px-6 py-[10px] text-[0.95rem]', lg: 'px-8 py-[14px] text-[1.05rem]', icon: 'p-2 w-10 h-10' }
  const variants = {
    primary: 'bg-[#e8611a] text-white hover:bg-[#d4561a] hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(232,97,26,0.35)] active:scale-95',
    outline: 'bg-transparent text-[#f0ebe3] border-[1.5px] border-[#2a2520] hover:border-[rgba(232,97,26,0.5)] hover:text-[#e8611a] hover:-translate-y-px active:scale-95',
    ghost:   'bg-transparent text-[#8a8078] border-none hover:text-[#f0ebe3] hover:bg-[#1a1a1a] active:scale-95',
  }
  return (
    <button type={type} disabled={disabled} onClick={onClick}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

// ── TiltCard — 3D perspective tilt on hover ───────────────────────────────────
export function TiltCard({ children, className = '' }) {
  const ref = useTilt(6)
  return (
    <div
      ref={ref}
      className={`moto-card ${className}`}
      style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
    >
      {children}
    </div>
  )
}

// ── Card (no tilt) ────────────────────────────────────────────────────────────
export function Card({ children, className = '' }) {
  return <div className={`moto-card ${className}`}>{children}</div>
}

// ── IconBox ───────────────────────────────────────────────────────────────────
export function IconBox({ children }) {
  return (
    <div className="icon-glow w-11 h-11 rounded-[10px] bg-[rgba(232,97,26,0.12)] flex items-center justify-center mb-4 flex-shrink-0 text-[#e8611a] transition-all duration-300">
      {children}
    </div>
  )
}

// ── BrandLogo ─────────────────────────────────────────────────────────────────
export function BrandLogo({ onClick }) {
  return (
    <div onClick={onClick} className="flex items-center gap-3 cursor-pointer select-none group">
      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#e8611a] to-[#c0392b] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
        <img 
          src="/assets/logo.jpg" 
          alt="Motonomaad Logo" 
          className="w-full h-full object-cover"
        />
      </div>
      <span className="brand-wordmark transition-all duration-300 group-hover:tracking-[0.09em]">MOTONOMAAD</span>
    </div>
  )
}

// ── Badge ─────────────────────────────────────────────────────────────────────
export function Badge({ children, color = 'orange' }) {
  const colors = {
    orange: 'bg-[rgba(232,97,26,0.12)] text-[#e8611a] border border-[rgba(232,97,26,0.35)]',
    red:    'bg-[rgba(192,57,43,0.12)] text-[#e05c4b] border border-[rgba(192,57,43,0.3)]',
    green:  'bg-[rgba(46,160,67,0.12)] text-[#3fb950] border border-[rgba(46,160,67,0.25)]',
  }
  return (
    <span className={`inline-block px-[10px] py-[3px] rounded-full text-[0.72rem] font-bold uppercase tracking-[0.08em] ${colors[color]}`}>
      {children}
    </span>
  )
}

// ── Stars ─────────────────────────────────────────────────────────────────────
export function Stars({ rating }) {
  return (
    <span className="flex items-center gap-[3px]">
      {[1,2,3,4,5].map(i => (
        <Star key={i} size={13} className={i <= Math.round(rating) ? 'text-[#e8611a]' : 'text-[#2a2520]'} fill={i <= Math.round(rating) ? 'currentColor' : 'none'} />
      ))}
      <span className="text-[0.8rem] ml-1 text-[#8a8078]">{rating}</span>
    </span>
  )
}

// ── Toast ─────────────────────────────────────────────────────────────────────
export function Toast({ msg, onClose }) {
  return (
    <div
      onClick={onClose}
      className="fixed bottom-8 right-8 z-[999] bg-[#141414] border-[1.5px] border-[rgba(232,97,26,0.35)] rounded-[12px] px-6 py-4 text-sm text-[#f0ebe3] shadow-[0_8px_32px_rgba(0,0,0,0.5)] animate-slide-up cursor-pointer max-w-xs"
    >
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-[#e8611a] animate-pulse flex-shrink-0" />
        {msg}
      </div>
    </div>
  )
}

// ── EmptyState ────────────────────────────────────────────────────────────────
export function EmptyState({ icon, title, desc, action }) {
  return (
    <div className="text-center py-16 px-8 text-[#8a8078] animate-fade-up">
      <div className="opacity-30 flex justify-center mb-4">{icon}</div>
      <div className="font-heading text-xl text-[#f0ebe3] mb-2">{title}</div>
      <p className="mb-5">{desc}</p>
      {action}
    </div>
  )
}

// ── SectionHeader ─────────────────────────────────────────────────────────────
export function SectionHeader({ title, subtitle, className = '' }) {
  return (
    <div className={`text-center mb-14 ${className}`}>
      <h2 className="font-heading text-4xl tracking-tight mb-3">{title}</h2>
      {subtitle && <p className="text-[#8a8078] text-[1.05rem] max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
}

// ── TabGroup ──────────────────────────────────────────────────────────────────
export function TabGroup({ tabs, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map(t => (
        <button key={t} onClick={() => onChange(t)}
          className={`px-4 py-[6px] rounded-full text-sm font-semibold border-[1.5px] transition-all duration-200 cursor-pointer font-body
            ${active === t
              ? 'bg-[#e8611a] border-[#e8611a] text-white shadow-[0_0_14px_rgba(232,97,26,0.3)]'
              : 'bg-transparent border-[#2a2520] text-[#8a8078] hover:border-[rgba(232,97,26,0.45)] hover:text-[#e8611a]'
            }`}
        >
          {t}
        </button>
      ))}
    </div>
  )
}

// ── Avatar ────────────────────────────────────────────────────────────────────
export function Avatar({ initials }) {
  return (
    <div className="w-10 h-10 rounded-full bg-[rgba(232,97,26,0.15)] flex items-center justify-center font-bold text-[#e8611a] text-sm flex-shrink-0 border border-[rgba(232,97,26,0.25)] transition-all duration-200 hover:bg-[rgba(232,97,26,0.25)]">
      {initials}
    </div>
  )
}
