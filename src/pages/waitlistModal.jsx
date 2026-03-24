import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { JoinWaitlist } from '../api/postRequest'

export default function WaitlistModal({ isOpen, onClose }) {
    const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', riderType: '' })
    const [status, setStatus] = useState('idle') // idle | loading | success | error

    const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

    const handleSubmit = async () => {
        let title = "App Launch";
        if (!form.email) return
        setStatus('loading')
        try {
            await JoinWaitlist(title, form.email, form.firstName, form.lastName, form.phone, form.riderType)
            setStatus('success');
        } catch {
            setStatus('error');
        }
    }

    // Lock body scroll when open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/75 backdrop-blur-sm">
            <div className="relative w-full max-w-[480px] bg-[#141414] border border-[#2a2520] rounded-[16px] overflow-hidden">

                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#2a2520] flex items-center justify-center text-[#8a8078] hover:text-[#f0ebe3] transition-colors z-10"
                >
                    <X size={14} />
                </button>

                {/* Top */}
                <div className="bg-[#1a1512] border-b border-[#2a2520] px-6 py-5">
                    <div className="inline-flex items-center gap-1.5 bg-[rgba(232,97,26,0.12)] border border-[rgba(232,97,26,0.25)] rounded-full px-3 py-1 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#e8611a] animate-pulse" />
                        <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#e8611a]">Early Access</span>
                    </div>
                    <h2 className="font-heading text-2xl text-[#f0ebe3] leading-tight mb-1">
                        The ride begins<br />April 14, 2026
                    </h2>
                    <p className="text-sm text-[#8a8078]">Join the waitlist. Be first on the road when we launch.</p>
                </div>

                {/* Body */}
                {status === 'success' ? (
                    <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
                        <div className="w-14 h-14 rounded-full bg-[rgba(232,97,26,0.12)] border border-[rgba(232,97,26,0.3)] flex items-center justify-center text-[#e8611a] text-2xl mb-4">✓</div>
                        <h3 className="font-heading text-xl text-[#f0ebe3] mb-2">You're on the list!</h3>
                        <p className="text-sm text-[#8a8078]">We'll hit you up on April 14th.<br />Get ready to ride.</p>
                    </div>
                ) : (
                    <div className="px-6 py-5">
                        <div className="grid grid-cols-2 gap-3 mb-3">
                            <div>
                                <label className="block text-[10px] font-bold tracking-[0.12em] uppercase text-[#5a5048] mb-1.5">First name</label>
                                <input
                                    className="w-full bg-[#0d0d0d] border border-[#2a2520] rounded-lg px-3 py-2.5 text-sm text-[#f0ebe3] placeholder-[#3a3028] outline-none focus:border-[#e8611a] transition-colors"
                                    placeholder="Alex"
                                    value={form.firstName}
                                    onChange={e => set('firstName', e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold tracking-[0.12em] uppercase text-[#5a5048] mb-1.5">Last name</label>
                                <input
                                    className="w-full bg-[#0d0d0d] border border-[#2a2520] rounded-lg px-3 py-2.5 text-sm text-[#f0ebe3] placeholder-[#3a3028] outline-none focus:border-[#e8611a] transition-colors"
                                    placeholder="Rider"
                                    value={form.lastName}
                                    onChange={e => set('lastName', e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="block text-[10px] font-bold tracking-[0.12em] uppercase text-[#5a5048] mb-1.5">Email address</label>
                            <input
                                type="email"
                                className="w-full bg-[#0d0d0d] border border-[#2a2520] rounded-lg px-3 py-2.5 text-sm text-[#f0ebe3] placeholder-[#3a3028] outline-none focus:border-[#e8611a] transition-colors"
                                placeholder="you@example.com"
                                value={form.email}
                                onChange={e => set('email', e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="block text-[10px] font-bold tracking-[0.12em] uppercase text-[#5a5048] mb-1.5">Phone number</label>
                            <input
                                type="tel"
                                className="w-full bg-[#0d0d0d] border border-[#2a2520] rounded-lg px-3 py-2.5 text-sm text-[#f0ebe3] placeholder-[#3a3028] outline-none focus:border-[#e8611a] transition-colors"
                                placeholder="+91 98765 43210"
                                value={form.phone}
                                onChange={e => set('phone', e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-[10px] font-bold tracking-[0.12em] uppercase text-[#5a5048] mb-1.5">Rider type</label>
                            <select
                                className="w-full bg-[#0d0d0d] border border-[#2a2520] rounded-lg px-3 py-2.5 text-sm text-[#8a8078] outline-none focus:border-[#e8611a] transition-colors appearance-none cursor-pointer"
                                value={form.riderType}
                                onChange={e => set('riderType', e.target.value)}
                            >
                                <option value="" disabled>Select your style</option>
                                <option value="casual">Casual rider</option>
                                <option value="adventure">Adventure rider</option>
                                <option value="touring">Touring rider</option>
                            </select>
                        </div>

                        {status === 'error' && (
                            <p className="text-xs text-red-400 mb-3">Something went wrong. Please try again.</p>
                        )}

                        <button
                            onClick={handleSubmit}
                            disabled={status === 'loading'}
                            className="w-full bg-[#e8611a] hover:bg-[#d4551a] text-white font-bold text-sm rounded-lg py-3 tracking-wide transition-colors disabled:opacity-60"
                        >
                            {status === 'loading' ? 'Joining...' : 'Join the waitlist →'}
                        </button>

                        {/* Social proof */}
                        <div className="flex items-center justify-center gap-2 mt-4">
                            <div className="flex">
                                {['AR', 'MK', 'SR'].map((i, idx) => (
                                    <div key={idx} className="w-5 h-5 rounded-full bg-[#2a2520] border-[1.5px] border-[#141414] -ml-1.5 first:ml-0 flex items-center justify-center text-[8px] text-[#8a8078] font-bold">{i}</div>
                                ))}
                            </div>
                            <span className="text-[11px] text-[#5a5048]"><span className="text-[#e8611a] font-bold">240+ riders</span> already on the list</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}