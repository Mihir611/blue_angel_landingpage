import { useState } from 'react'
import { MapPin, Mail, X } from 'lucide-react'
import { Btn, TiltCard, Stars, Badge } from '../components/ui.jsx'
import { useScrollReveal } from '../hooks/useAnimations.js'
import { MOCK_MECHANICS } from '../data.js'

export default function MechanicsPage({ showToast }) {
  const [selected, setSelected] = useState(null)
  const [message, setMessage] = useState('')
  const ref = useScrollReveal()

  return (
    <div className="container mx-auto px-8 max-w-[1400px] py-12">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <div className="text-center mb-10 reveal">
          <h1 className="font-heading text-4xl md:text-5xl mb-2">Certified Mechanics</h1>
          <p className="text-[#8a8078]">Find trusted mechanics for your motorcycle needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_MECHANICS.map((m, i) => (
            <div key={i} className={`reveal stagger-${(i % 6) + 1}`}>
              <TiltCard className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-heading text-lg">{m.name}</h3>
                    <div className="flex items-center gap-1 text-[#8a8078] text-sm mt-0.5">
                      <MapPin size={12} /> {m.location}
                    </div>
                  </div>
                  <Badge color={m.available ? 'green' : 'red'}>
                    {m.available ? 'Available' : 'Busy'}
                  </Badge>
                </div>

                <Stars rating={m.rating} />
                <div className="text-xs text-[#8a8078] mt-0.5 mb-3">{m.reviews} reviews</div>

                <div className="flex flex-wrap gap-1.5 mb-4 flex-1">
                  {m.specialties.map((s, j) => (
                    <span key={j} className="px-[10px] py-[3px] rounded-full text-[0.72rem] font-bold bg-[rgba(232,97,26,0.12)] text-[#e8611a] border border-[rgba(232,97,26,0.35)] transition-all duration-200 hover:bg-[rgba(232,97,26,0.22)]">
                      {s}
                    </span>
                  ))}
                </div>

                <Btn variant="outline" size="sm" className="w-full" onClick={() => setSelected(m)}>
                  <Mail size={13} /> Contact
                </Btn>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/75 z-[200] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-[#141414] border-[1.5px] border-[#2a2520] rounded-[16px] p-8 w-full max-w-[480px] animate-scale-in"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-heading text-xl">Contact {selected.name}</h2>
              <button onClick={() => setSelected(null)} className="p-2 rounded-lg text-[#8a8078] hover:text-[#f0ebe3] hover:bg-[#1a1a1a] transition-all duration-200 active:scale-90">
                <X size={18} />
              </button>
            </div>
            <div className="flex flex-col gap-1.5 mb-6">
              <label className="text-xs font-semibold text-[#8a8078] uppercase tracking-wider">Your Message</label>
              <textarea
                className="moto-input"
                placeholder="Describe your bike's issue or service needed..."
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </div>
            <Btn className="w-full justify-center btn-glow" onClick={() => {
              showToast(`Message sent to ${selected.name}!`)
              setSelected(null); setMessage('')
            }}>
              Send Request
            </Btn>
          </div>
        </div>
      )}
    </div>
  )
}
