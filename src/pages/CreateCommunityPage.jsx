import { Users, Shield, Rocket, CheckCircle2 } from 'lucide-react'
import { BrandLogo, Btn } from '../components/ui'

// TODO: replace with your real onboarding/admin-signup URL when ready
const ADMIN_ONBOARDING_URL = 'https://forms.motonomaad.online/create-community'

const PERKS = [
    { icon: Shield, title: 'Full Admin Control', desc: 'Moderate members, set rules, and shape your community your way.' },
    { icon: Users, title: 'Built-in Rider Base', desc: 'Tap into Motonomaad\u2019s existing network of motorcycle adventurers.' },
    { icon: Rocket, title: 'Launch in Minutes', desc: 'Guided onboarding gets your community live fast \u2014 no dev work needed.' },
]

const STEPS = [
    'Apply through the onboarding form',
    'Get verified as a community admin',
    'Set up your space and invite riders',
    'Go live and start growing your community',
]

export default function CreateCommunityPage({ navigate }) {
    return (
        <div className="min-h-[80vh] bg-[#0d0d0d] text-[#f0ebe3]">
            {/* Hero */}
            <section className="relative overflow-hidden border-b border-[#2a2520]">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        background:
                            'radial-gradient(circle at 20% 20%, #e8611a 0%, transparent 45%), radial-gradient(circle at 80% 60%, #c0392b 0%, transparent 45%)',
                    }}
                />
                <div className="relative container mx-auto px-8 max-w-[1000px] py-24 text-center">
                    <div className="flex justify-center mb-6">
                        <BrandLogo onClick={() => navigate('home')} />
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full border border-[#e8611a]/40 bg-[#e8611a]/10 text-[#f0874a] text-xs font-medium tracking-wide uppercase mb-5">
                        Become an Admin
                    </div>
                    <h1 className="font-heading text-4xl md:text-5xl font-bold mb-5 leading-tight">
                        Start Your Own Riding Community
                    </h1>
                    <p className="text-[#8a8078] text-lg max-w-[600px] mx-auto mb-10 leading-relaxed">
                        Passionate about a route, region, or riding style? Apply to become a
                        community admin and build a space for riders like you on Motonomaad.
                    </p>
                    <Btn
                        variant="primary"
                        size="lg"
                        className="btn-glow inline-flex items-center gap-2"
                        onClick={() => window.open(ADMIN_ONBOARDING_URL, '_blank', 'noopener,noreferrer')}
                    >
                        Apply to Create a Community <Rocket size={16} />
                    </Btn>
                    <p className="text-xs text-[#8a8078] mt-4">Opens onboarding in a new tab \u00b7 takes about 5 minutes</p>
                </div>
            </section>

            {/* Perks */}
            <section className="container mx-auto px-8 max-w-[1100px] py-20">
                <h2 className="font-heading text-2xl font-bold text-center mb-12">Why lead a community here?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {PERKS.map(({ icon: Icon, title, desc }) => (
                        <div
                            key={title}
                            className="rounded-2xl border border-[#2a2520] bg-[#141414] p-7 transition-all duration-300 hover:border-[#e8611a]/40 hover:-translate-y-1"
                        >
                            <div className="w-11 h-11 rounded-xl bg-[#e8611a]/10 border border-[#e8611a]/30 flex items-center justify-center mb-4">
                                <Icon size={20} className="text-[#e8611a]" />
                            </div>
                            <h3 className="font-heading text-base font-semibold mb-2">{title}</h3>
                            <p className="text-sm text-[#8a8078] leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Steps */}
            <section className="bg-[#141414] border-y border-[#2a2520] py-20">
                <div className="container mx-auto px-8 max-w-[700px]">
                    <h2 className="font-heading text-2xl font-bold text-center mb-10">How it works</h2>
                    <div className="flex flex-col gap-4">
                        {STEPS.map((step, i) => (
                            <div key={step} className="flex items-center gap-4 rounded-xl border border-[#2a2520] bg-[#0d0d0d] px-5 py-4">
                                <div className="w-8 h-8 shrink-0 rounded-full bg-[#e8611a] text-[#0d0d0d] font-heading font-bold text-sm flex items-center justify-center">
                                    {i + 1}
                                </div>
                                <p className="text-sm text-[#f0ebe3]">{step}</p>
                                <CheckCircle2 size={16} className="ml-auto text-[#8a8078]" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="container mx-auto px-8 max-w-[700px] py-20 text-center">
                <h2 className="font-heading text-2xl font-bold mb-4">Ready to build your community?</h2>
                <p className="text-[#8a8078] mb-8">It only takes a few minutes to apply.</p>
                <Btn
                    variant="primary"
                    size="lg"
                    className="btn-glow inline-flex items-center gap-2"
                    onClick={() => window.open(ADMIN_ONBOARDING_URL, '_blank', 'noopener,noreferrer')}
                >
                    Get Started <Rocket size={16} />
                </Btn>
            </section>
        </div>
    )
}