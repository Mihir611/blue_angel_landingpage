import { Route, Wrench, Users, Calendar, MessageSquare, MapPin, Zap, ChevronDown, ArrowRight } from 'lucide-react'
import { Btn, IconBox, SectionHeader } from '../components/ui.jsx'
import { FEATURES, FAQS } from '../data.js'
import { useScrollReveal, useTypewriter } from '../hooks/useAnimations.js'

const STEPS = [
  { n: '01', title: 'Plan Your Route', desc: 'Enter your starting point, destination, and riding preferences to get personalized trip suggestions.' },
  { n: '02', title: 'Connect & Prepare', desc: 'Find mechanics along your route, join groups, and connect with riders heading the same way.' },
  { n: '03', title: 'Hit the Road', desc: 'Follow your curated itinerary, share your journey, and make memories on the open road.' },
]

const TIMELINE = [
  { icon: Zap, year: '2024', title: 'The Spark', desc: 'Motonomaad was born from a simple idea: motorcycle adventurers deserve a platform built specifically for their unique needs.' },
  { icon: MapPin, year: '2025', title: 'Building the Foundation', desc: 'We launched core features—trip planning, mechanic directories, and community tools. Thousands of riders joined us.' },
  { icon: Users, year: '2026', title: 'Growing the Tribe', desc: 'Our community exploded with groups, events, and shared adventures. Riders from every corner of the globe found their tribe.' },
  { icon: Calendar, year: 'Future', title: 'The Road Ahead', desc: 'We are just getting started. New features, deeper connections, and more adventures await.' },
]

const FEATURE_ICONS = {
  'Trip Planner': Route, 'Certified Mechanics': Wrench,
  'Riding Groups': Users, 'Events & Meetups': Calendar,
  'Social Feed': MessageSquare, 'Route Waypoints': MapPin,
}

const TAGLINES = ['Ride Free.', 'Ride Far.', 'Ride Together.', 'Ride Wild.']

// Floating background particles
function Particles() {
  const dots = [
    { size: 4, x: '12%', y: '20%', dur: '5s', delay: '0s' },
    { size: 3, x: '80%', y: '15%', dur: '6s', delay: '0.8s' },
    { size: 5, x: '65%', y: '70%', dur: '4.5s', delay: '1.5s' },
    { size: 3, x: '30%', y: '80%', dur: '7s', delay: '0.3s' },
    { size: 4, x: '90%', y: '55%', dur: '5.5s', delay: '2s' },
    { size: 2, x: '50%', y: '10%', dur: '6.5s', delay: '1s' },
  ]
  return (
    <>
      {dots.map((d, i) => (
        <span
          key={i}
          className="particle"
          style={{
            width: d.size, height: d.size,
            left: d.x, top: d.y,
            '--dur': d.dur, '--delay': d.delay,
          }}
        />
      ))}
    </>
  )
}

// Animated road SVG
function RoadSVG() {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
      <svg
        viewBox="0 0 800 400"
        className="absolute bottom-0 left-0 w-full"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          className="road-path"
          d="M0 380 Q200 300 400 320 Q600 340 800 250"
          stroke="#e8611a"
          strokeWidth="1.5"
          strokeDasharray="800"
        />
        <path
          className="road-path"
          style={{ transitionDelay: '0.4s' }}
          d="M0 395 Q250 340 450 355 Q650 370 800 280"
          stroke="#e8611a"
          strokeWidth="0.8"
          strokeDasharray="800"
        />
      </svg>
    </div>
  )
}

export default function LandingPage({ navigate }) {
  const tagline = useTypewriter(TAGLINES, 80, 1600)
  const featuresRef = useScrollReveal()
  const stepsRef = useScrollReveal()
  const timelineRef = useScrollReveal()
  const faqRef = useScrollReveal()
  const statsRef = useScrollReveal()

  return (
    <div>
      {/* ═══════════════════════════════════ HERO ═══════════════════════════════════ */}
      <section className="relative overflow-hidden hero-glow py-24 md:py-36 min-h-[88vh] flex items-center">
        <Particles />
        <RoadSVG />

        <div className="container mx-auto px-8 max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              <p className="animate-fade-up text-sm font-bold tracking-[0.2em] uppercase text-[#e8611a] border-l-4 border-[#e8611a] pl-4 mb-6">
                Ride. Wander. Repeat.
              </p>

              {/* Staggered headline */}
              <h1 className="font-heading hero-headline-size leading-[0.9] tracking-tight mb-6">
                <span className="block overflow-hidden">
                  <span className="block animate-char-reveal" style={{ animationDelay: '0.05s' }}>RIDE</span>
                </span>
                <span className="block overflow-hidden">
                  <span className="block text-[#e8611a] animate-char-reveal" style={{ animationDelay: '0.18s' }}>FREE.</span>
                </span>
                <span className="block overflow-hidden">
                  <span className="block animate-char-reveal" style={{ animationDelay: '0.31s' }}>RIDE FAR.</span>
                </span>
              </h1>

              {/* Typewriter tagline */}
              <div className="h-8 mb-6 animate-fade-up-3">
                <span className="text-[#e8611a] font-display text-2xl tracking-wider">
                  {tagline}<span className="animate-pulse">|</span>
                </span>
              </div>

              <p className="text-lg text-[#8a8078] max-w-xl leading-relaxed mb-8 animate-fade-up-3">
                Plan epic routes, connect with certified mechanics, and join a tribe of riders who live for the open road.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-4">
                <Btn size="lg" className="btn-glow" onClick={() => navigate('trip-planner')}>
                  Plan Your Trip <ArrowRight size={16} className="animate-bounce-x" />
                </Btn>
                <Btn size="lg" variant="outline" onClick={() => navigate('about')}>
                  Learn More
                </Btn>
              </div>

              {/* Mini stats bar */}
              <div className="flex gap-8 mt-10 animate-fade-up-5">
                {[['10K+', 'Riders'], ['500+', 'Mechanics'], ['1K+', 'Routes']].map(([n, l]) => (
                  <div key={l}>
                    <div className="font-display text-2xl text-[#e8611a]">{n}</div>
                    <div className="text-xs text-[#8a8078] uppercase tracking-wider">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — hero card with animated border */}
            <div className="animate-slide-in-right relative">
              <div className="animated-border animate-pulse-glow">
                <div className="animated-border-inner">
                  {/* Animated bike SVG */}
                  <div className="flex flex-col items-center justify-center gap-6 py-4">
                    <div className="relative">
                      {/* Outer spinning ring */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full border border-[rgba(232,97,26,0.15)] animate-spin-slow" />
                      </div>
                      {/* Inner counter-spinning ring */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full border border-dashed border-[rgba(232,97,26,0.2)] animate-counter-spin" />
                      </div>
                      {/* Bike icon */}
                      <div className="w-64 h-64 flex items-center justify-center relative z-10 animate-float">
                        <img
                          src="/assets/Untitled7.png"
                          alt="Motonomaad Logo"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="shimmer-text font-heading text-2xl mb-1">YOUR ADVENTURE AWAITS</div>
                      <p className="text-[#8a8078] text-sm">Plan. Ride. Repeat.</p>
                    </div>

                    {/* Animated progress dots */}
                    <div className="flex gap-2">
                      {[0, 1, 2, 3, 4].map(i => (
                        <div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-[#e8611a]"
                          style={{
                            opacity: 0.3,
                            animation: `float-particle 1.5s ${i * 0.2}s ease-in-out infinite`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ OVERVIEW ══════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[rgba(26,26,26,0.5)]" ref={useScrollReveal()}>
        <div className="container mx-auto px-8 max-w-[1400px]">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">
              The Ultimate Platform for Motorcycle Nomads
            </h2>
            <p className="text-[#8a8078] text-lg leading-relaxed">
              Motonomaad brings together everything you need for unforgettable motorcycle journeys.
              From route planning to community connections, we've got you covered on every mile.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ FEATURES ══════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-8 max-w-[1400px]" ref={featuresRef}>
          <div className="reveal">
            <SectionHeader title="Everything You Need to Ride" subtitle="Powerful features designed specifically for motorcycle adventurers" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => {
              const Icon = FEATURE_ICONS[f.title]
              const stagger = `stagger-${(i % 6) + 1}`
              return (
                <div key={i} className={`reveal ${stagger}`}>
                  <div className="moto-card p-6 h-full">
                    <div className={`icon-glow w-11 h-11 rounded-[10px] bg-[rgba(232,97,26,0.12)] flex items-center justify-center mb-4 text-[#e8611a]`}>
                      {Icon && <Icon size={20} />}
                    </div>
                    <h3 className="font-heading text-lg mb-2">{f.title}</h3>
                    <p className="text-[#8a8078] text-sm leading-relaxed">{f.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ HOW IT WORKS ════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[rgba(26,26,26,0.5)]">
        <div className="container mx-auto px-8 max-w-[1400px]" ref={stepsRef}>
          <div className="reveal">
            <SectionHeader title="How It Works" subtitle="Get started on your next adventure in three simple steps" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {STEPS.map((s, i) => (
              <div key={i} className={`reveal stagger-${i + 1} relative`}>
                <div className="font-display text-[4.5rem] text-[rgba(232,97,26,0.15)] leading-none mb-3 transition-all duration-300 hover:text-[rgba(232,97,26,0.35)]">
                  {s.n}
                </div>
                <h3 className="font-heading text-xl mb-2">{s.title}</h3>
                <p className="text-[#8a8078] leading-relaxed text-sm">{s.desc}</p>
                {/* animated connector line */}
                {i < 2 && (
                  <div
                    className={`step-line stagger-${i + 2} hidden md:block absolute top-10 left-full w-full`}
                    style={{ transform: 'translateX(-50%)' }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════ TIMELINE ══════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-8 max-w-[1400px]" ref={timelineRef}>
          <div className="reveal">
            <SectionHeader title="Our Journey" subtitle="From a spark of an idea to a thriving community of riders" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIMELINE.map((t, i) => (
              <div key={i} className={`reveal stagger-${i + 1}`}>
                <div className="moto-card p-6 h-full">
                  <div className="icon-glow w-11 h-11 rounded-[10px] bg-[rgba(232,97,26,0.12)] flex items-center justify-center mb-4 text-[#e8611a]">
                    <t.icon size={20} />
                  </div>
                  <div className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-[#e8611a] mb-1">{t.year}</div>
                  <h3 className="font-heading text-lg mb-2">{t.title}</h3>
                  <p className="text-[#8a8078] text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════ STATS ════════════════════════════════════ */}
      <section className="py-16 bg-[rgba(26,26,26,0.5)]">
        <div className="container mx-auto px-8 max-w-[1400px]" ref={statsRef}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto text-center">
            {[['10K+', 'Active Riders'], ['500+', 'Verified Mechanics'], ['1,000+', 'Curated Routes'], ['200+', 'Events Hosted']].map(([n, l], i) => (
              <div key={i} className={`stat-pop stagger-${i + 1}`}>
                <div className="font-display text-5xl text-[#e8611a]">{n}</div>
                <div className="text-[#8a8078] text-sm mt-1 uppercase tracking-wider text-xs">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ FAQ ═════════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-8 max-w-[1400px]" ref={faqRef}>
          <div className="reveal">
            <SectionHeader title="Frequently Asked Questions" subtitle="Everything you need to know about Motonomaad" />
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((f, i) => (
              <div key={i} className={`reveal stagger-${(i % 6) + 1}`}>
                <details className="group border-[1.5px] border-[#2a2520] hover:border-[rgba(232,97,26,0.45)] rounded-[12px] overflow-hidden transition-colors duration-200">
                  <summary className="list-none px-6 py-5 font-semibold text-base flex items-center justify-between cursor-pointer hover:bg-[#1a1a1a] transition-colors">
                    <span>{f.q}</span>
                    <ChevronDown size={18} className="faq-chevron text-[#8a8078] flex-shrink-0" />
                  </summary>
                  <div className="faq-body px-6 pb-5 pt-4 text-[#8a8078] border-t border-[#2a2520] bg-[rgba(26,26,26,0.5)] leading-relaxed">
                    {f.a}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════ CTA ═════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[rgba(26,26,26,0.5)]" ref={useScrollReveal()}>
        <div className="container mx-auto px-8 max-w-[1400px]">
          <div className="reveal-scale">
            <div className="animated-border animate-pulse-glow">
              <div className="animated-border-inner text-center">
                <h2 className="font-heading text-4xl md:text-5xl mb-4">Ready to Hit the Road?</h2>
                <p className="text-[#8a8078] text-lg mb-8">
                  Join thousands of riders planning their next adventure with Motonomaad
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Btn size="lg" className="btn-glow" onClick={() => navigate('trip-planner')}>
                    Start Planning <ArrowRight size={16} />
                  </Btn>
                  <Btn size="lg" variant="outline" onClick={() => navigate('mechanics')}>Find Mechanics</Btn>
                  <Btn size="lg" variant="outline" onClick={() => navigate('groups')}>Join Community</Btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
