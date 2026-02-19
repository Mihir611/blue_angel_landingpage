import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Globe } from 'lucide-react'
import { Card, Btn } from '../components/ui.jsx'
import { decode } from '../utils/decode'

export function ContactPage({ showToast }) {
    const [name, setName] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [msg, setMsg] = useState('')
    const [company, setCompany] = useState('') // 🍯 Honeypot
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formStartTime, setFormStartTime] = useState(Date.now())

    const email = decode([109,111,116,111,111,110,111,109,97,100,64,103,109,97,105,108,46,99,111,109])

    const phoneRaw = decode([43, 57, 49, 56, 49, 57, 55, 51, 55, 55, 49, 48, 57])

    const contactInfo = [
        { icon: Mail, label: email, href: `mailto:${email}` },
        { icon: Phone, label: phoneRaw, href: `tel:${phoneRaw}` },
        { icon: MapPin, label: 'Udupi, Karnataka, India' },
        { icon: Globe, label: 'motonomaad.vercel.app', href: 'https://motonomaad.vercel.app/' }
    ]

    const validateEmail = (email) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    const handleSubmit = async () => {
        if (company !== '') return

        if (Date.now() - formStartTime < 3000) return

        if (!name || !emailInput || !msg) {
            showToast('Please fill all required fields.')
            return
        }

        if (!validateEmail(emailInput)) {
            showToast('Please enter a valid email address.')
            return
        }

        setIsSubmitting(true)

        await new Promise((r) => setTimeout(r, 1200))

        showToast("Thanks! We'll get back within 24 hours.")

        setName('')
        setEmailInput('')
        setMsg('')
        setCompany('')
        setFormStartTime(Date.now())
        setIsSubmitting(false)
    }

    useEffect(() => {
        setFormStartTime(Date.now())
    }, [])

    return (
        <div className="container mx-auto px-8 max-w-[1400px] py-12">
            <div className="max-w-3xl mx-auto">
                <h1 className="font-heading text-4xl md:text-5xl mb-2">
                    Let's Build Something Powerful
                </h1>
                <p className="text-[#8a8078] mb-10">
                    Tell us what you're working on — we reply within 24 hours.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* LEFT SIDE */}
                    <div>
                        <Card className="p-6 mb-6">
                            <h2 className="font-heading text-lg mb-4">
                                Direct Contact
                            </h2>

                            <div className="space-y-4">
                                {contactInfo.map((c, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 text-[#8a8078] text-sm"
                                    >
                                        <c.icon size={16} className="text-[#e8611a]" />

                                        {c.href ? (
                                            <a
                                                href={c.href}
                                                className="hover:text-[#e8611a] transition-colors"
                                                target={c.icon === Globe ? '_blank' : undefined}
                                                rel="noopener noreferrer"
                                            >
                                                {c.label}
                                            </a>
                                        ) : (
                                            c.label
                                        )}
                                    </div>
                                ))}
                            </div>
                        </Card>

                        <Card className="p-6">
                            <h2 className="font-heading text-lg mb-2">
                                Why Choose Us?
                            </h2>
                            <ul className="text-[#8a8078] text-sm space-y-2">
                                <li>✔ Fast response time</li>
                                <li>✔ Transparent pricing</li>
                                <li>✔ Business-focused solutions</li>
                                <li>✔ Long-term partnership mindset</li>
                            </ul>
                        </Card>
                    </div>

                    {/* RIGHT SIDE - FORM */}
                    <Card className="p-6">
                        <h2 className="font-heading text-lg mb-6">
                            Start Your Project Today
                        </h2>

                        <div className="space-y-4">

                            {/* Honeypot field (hidden) */}
                            <input
                                type="text"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                className="hidden"
                                autoComplete="off"
                                tabIndex="-1"
                            />

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-[#8a8078] uppercase">
                                    Name *
                                </label>
                                <input
                                    className="moto-input"
                                    placeholder="Your full name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-[#8a8078] uppercase">
                                    Email *
                                </label>
                                <input
                                    className="moto-input"
                                    type="email"
                                    placeholder="you@company.com"
                                    value={emailInput}
                                    onChange={(e) => setEmailInput(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-[#8a8078] uppercase">
                                    Project Details *
                                </label>
                                <textarea
                                    className="moto-input"
                                    placeholder="Tell us about your project, timeline & budget..."
                                    value={msg}
                                    onChange={(e) => setMsg(e.target.value)}
                                />
                            </div>

                            <Btn
                                className="w-full justify-center"
                                disabled={isSubmitting}
                                onClick={handleSubmit}
                            >
                                {isSubmitting ? 'Sending...' : 'Get Free Consultation'}
                            </Btn>

                            <p className="text-xs text-[#8a8078] text-center mt-2">
                                🔒 Your information is secure. No spam. Ever.
                            </p>

                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
