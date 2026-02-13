import { useState } from 'react'
import { Compass, Users, Heart, Target, Mail, Phone, MapPin, Globe } from 'lucide-react'
import { Btn, Card, IconBox } from '../components/ui.jsx'

// ── AboutPage ─────────────────────────────────────────────────────────────────
export function AboutPage() {
  const values = [
    { icon: Compass, title: 'Adventure First', desc: 'We believe in the transformative power of the open road and the freedom it brings.' },
    { icon: Users, title: 'Community Driven', desc: 'Our platform is built by riders, for riders. Every feature reflects real community needs.' },
    { icon: Heart, title: 'Safety & Support', desc: 'We prioritize rider safety with verified mechanics and reliable route information.' },
    { icon: Target, title: 'Innovation', desc: 'Leveraging modern technology to create a decentralized, secure platform for riders.' },
  ]
  const stats = [
    { value: '10K+', label: 'Active Riders' },
    { value: '500+', label: 'Verified Mechanics' },
    { value: '1,000+', label: 'Curated Routes' },
    { value: '200+', label: 'Community Events' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="py-20 md:py-28" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(232,97,26,0.07) 0%, transparent 60%)' }}>
        <div className="container mx-auto px-8 max-w-[1400px]">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl mb-4">About Motonomaad</h1>
            <p className="text-[#8a8078] text-xl leading-relaxed">Empowering motorcycle adventurers to explore the world with confidence and community</p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-[rgba(26,26,26,0.5)]">
        <div className="container mx-auto px-8 max-w-[1400px]">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl mb-4">Our Mission</h2>
            <p className="text-[#8a8078] text-lg leading-relaxed">
              Motonomaad was born from a simple belief: every motorcycle journey should be an adventure, not a worry. We're building the ultimate platform for riders who crave freedom, community, and the thrill of the open road. Whether you're planning a weekend escape or a cross-country expedition, Motonomaad connects you with the resources, people, and experiences that make every ride unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-8 max-w-[1400px]">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl mb-3">Our Core Values</h2>
            <p className="text-[#8a8078]">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Card key={i} className="p-6">
                <IconBox><v.icon size={20} /></IconBox>
                <h3 className="font-heading text-lg mb-2">{v.title}</h3>
                <p className="text-[#8a8078] text-sm leading-relaxed">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-[rgba(26,26,26,0.5)]">
        <div className="container mx-auto px-8 max-w-[1400px]">
          <div className="max-w-4xl mx-auto space-y-4">
            <h2 className="font-heading text-3xl mb-4">Our Story</h2>
            {[
              'Motonomaad started in 2024 when a group of passionate riders realized there was no single platform that truly understood the needs of motorcycle adventurers. We were tired of juggling multiple apps, unreliable information, and disconnected communities.',
              'Built on modern web technology, Motonomaad offers a fast, secure, and community-owned platform. We\'re not just another tech company—we\'re riders building for riders, ensuring the platform evolves with the community\'s needs.',
              'Today, thousands of riders use Motonomaad to plan trips, find mechanics, connect with fellow adventurers, and share their stories. We\'re just getting started, and we\'re excited to have you along for the ride.',
            ].map((p, i) => (
              <p key={i} className="text-[#8a8078] text-lg leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-8 max-w-[1400px]">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl mb-3">By the Numbers</h2>
            <p className="text-[#8a8078]">Our growing community of motorcycle enthusiasts</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="font-display text-5xl text-[#e8611a]">{s.value}</div>
                <div className="text-[#8a8078] text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// ── ContactPage ───────────────────────────────────────────────────────────────
export function ContactPage({ showToast }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  const contactInfo = [
    { icon: Mail, label: 'support@motonomaad.com' },
    { icon: Phone, label: '+91 98765 43210' },
    { icon: MapPin, label: 'Bangalore, Karnataka, India' },
    { icon: Globe, label: 'motonomaad.com' },
  ]

  return (
    <div className="container mx-auto px-8 max-w-[1400px] py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl mb-2">Contact Us</h1>
        <p className="text-[#8a8078] mb-10">Get in touch with the Motonomaad team</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Card className="p-6 mb-6">
              <h2 className="font-heading text-lg mb-4">Get in Touch</h2>
              <div className="space-y-4">
                {contactInfo.map((c, i) => (
                  <div key={i} className="flex items-center gap-3 text-[#8a8078] text-sm">
                    <c.icon size={16} className="text-[#e8611a] flex-shrink-0" />
                    {c.label}
                  </div>
                ))}
              </div>
            </Card>
            <Card className="p-6">
              <h2 className="font-heading text-lg mb-2">Business Hours</h2>
              <p className="text-[#8a8078] text-sm leading-relaxed">Monday–Friday: 9AM–6PM IST<br />Saturday: 10AM–4PM IST<br />Sunday: Closed</p>
            </Card>
          </div>

          <Card className="p-6">
            <h2 className="font-heading text-lg mb-6">Send a Message</h2>
            <div className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#8a8078] uppercase tracking-wider">Name</label>
                <input className="moto-input" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#8a8078] uppercase tracking-wider">Email</label>
                <input className="moto-input" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#8a8078] uppercase tracking-wider">Message</label>
                <textarea className="moto-input" placeholder="How can we help?" value={msg} onChange={e => setMsg(e.target.value)} />
              </div>
              <Btn className="w-full justify-center" onClick={() => {
                showToast('Message sent! We\'ll get back to you soon.')
                setName(''); setEmail(''); setMsg('')
              }}>
                Send Message
              </Btn>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

// ── PrivacyPage ───────────────────────────────────────────────────────────────
export function PrivacyPage() {
  const sections = [
    { title: 'Information We Collect', body: 'We collect information you provide directly to us, such as when you create an account, plan a trip, or contact mechanics. This may include your name, email address, location data, and riding preferences.' },
    { title: 'How We Use Information', body: 'We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions.' },
    { title: 'Information Sharing', body: 'We do not sell, trade, or otherwise transfer your personally identifiable information to third parties without your consent, except as described in this policy.' },
    { title: 'Data Security', body: 'We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.' },
    { title: 'Your Rights', body: 'You have the right to access, update or delete the information we have on you. You can exercise these rights by contacting us directly.' },
    { title: 'Contact Us', body: 'If you have any questions about this Privacy Policy, please contact us at privacy@motonomaad.com' },
  ]

  return (
    <div className="container mx-auto px-8 max-w-[1400px] py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl mb-2">Privacy Policy</h1>
        <p className="text-[#8a8078] mb-10">Last updated: February 2026</p>
        <div className="space-y-8">
          {sections.map((s, i) => (
            <div key={i}>
              <h3 className="font-heading text-lg text-[#e8611a] mb-2">{s.title}</h3>
              <p className="text-[#8a8078] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
