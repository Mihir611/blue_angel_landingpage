import { useState, useEffect } from 'react'

const TARGET = new Date('2026-04-14T00:00:00')
const pad = n => String(n).padStart(2, '0')

export default function LaunchCountdown({ onJoinClick }) {
    const [time, setTime] = useState(null)

    useEffect(() => {
        const tick = () => {
            const diff = TARGET - new Date()
            if (diff <= 0) return setTime(null)
            setTime({
                d: Math.floor(diff / 86400000),
                h: Math.floor((diff % 86400000) / 3600000),
                m: Math.floor((diff % 3600000) / 60000),
                s: Math.floor((diff % 60000) / 1000),
            })
        }
        tick()
        const id = setInterval(tick, 1000)
        return () => clearInterval(id)
    }, [])

    if (!time) return null

    return (
        <div className="w-full bg-[#0d0d0d] border-b border-[#2a2520] flex items-center justify-center gap-5 py-2 px-6 z-50 relative">
            <span className="text-[#e8611a] text-[10px] font-bold tracking-[0.18em] uppercase border-l-[3px] border-[#e8611a] pl-2.5 hidden sm:block">
                The Ride Begins
            </span>
            <div className="flex items-center gap-1.5">
                {[['d', 'Days'], ['h', 'Hrs'], ['m', 'Min'], ['s', 'Sec']].map(([key, label], i) => (
                    <div key={key} className="flex items-center gap-1.5">
                        {i > 0 && <span className="text-[#3a3028] font-bold text-lg mb-2.5">:</span>}
                        <div className="flex flex-col items-center gap-0.5">
                            <div className="font-mono text-lg font-bold text-[#f0ebe3] bg-[#1a1512] border border-[#2a2520] rounded-md px-2 py-1 min-w-[38px] text-center tabular-nums">
                                {pad(time[key])}
                            </div>
                            <span className="text-[9px] tracking-[0.15em] uppercase text-[#5a5048]">{label}</span>
                        </div>
                    </div>
                ))}
            </div>
            <span className="text-sm animate-bounce">🚀</span>
            <span className="text-[10px] tracking-wider text-[#3a3028] hidden sm:block">14 APR 2025</span>
            <button
                onClick={onJoinClick}
                className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#e8611a] border border-[rgba(232,97,26,0.4)] rounded-full px-3 py-1 hover:bg-[rgba(232,97,26,0.1)] transition-colors hidden sm:block"
            >
                Join waitlist
            </button>
        </div>
    )
}