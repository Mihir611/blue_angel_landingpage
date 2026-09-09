import { useState } from 'react'
import { Smartphone, Download, MapPin, Users, Camera, Route, Star, Bell, Shield, Zap } from 'lucide-react'
import { Btn, Card } from '../components/ui.jsx'
import { useScrollReveal } from '../hooks/useAnimations.js'

export default function AppDownloadPage({ showToast }) {
  const ref = useScrollReveal()
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: <MapPin size={24} />,
      title: "GPS Navigation",
      description: "Turn-by-turn navigation optimized for motorcycles with voice guidance and offline maps"
    },
    {
      icon: <Route size={24} />,
      title: "Route Planning",
      description: "Create and save custom routes with waypoints, share with friends, and discover popular rides"
    },
    {
      icon: <Users size={24} />,
      title: "Ride Groups",
      description: "Connect with fellow riders, organize group rides, and track everyone's location in real-time"
    },
    {
      icon: <Camera size={24} />,
      title: "Trip Recording",
      description: "Automatically record your rides with photos, stats, and memories to relive your adventures"
    },
    {
      icon: <Bell size={24} />,
      title: "Safety Alerts",
      description: "Real-time hazard warnings, weather alerts, and emergency SOS features for peace of mind"
    },
    {
      icon: <Star size={24} />,
      title: "Rider Community",
      description: "Share experiences, rate routes, discover hidden gems recommended by local riders"
    }
  ]

  const screenshots = [
    { src: "/app-screen-1.jpg", alt: "Navigation screen", fallback: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80" },
    { src: "/app-screen-2.jpg", alt: "Route planning", fallback: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=80" },
    { src: "/app-screen-3.jpg", alt: "Community features", fallback: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?w=400&q=80" }
  ]

  return (
    <div className="container mx-auto px-8 max-w-[1400px] py-12" ref={ref}>
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal">
          <div className="inline-block mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-[#e8611a] to-[#ff8c42] rounded-[20px] flex items-center justify-center mx-auto shadow-lg shadow-[#e8611a]/20">
              <Smartphone size={40} className="text-white" />
            </div>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl mb-4">
            Take the Ride
            <span className="block text-[#e8611a]">In Your Pocket</span>
          </h1>
          <p className="text-[#8a8078] text-lg max-w-2xl mx-auto mb-8">
            Download our mobile app and access premium features, offline maps, and the ultimate riding companion wherever the road takes you.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a 
              href="https://play.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <div className="bg-black hover:bg-[#1a1a1a] transition-colors rounded-[12px] px-6 py-3 flex items-center gap-3 cursor-pointer border border-[rgba(255,255,255,0.1)] hover:border-[rgba(232,97,26,0.5)]">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M3 20.5L20.5 12L3 3.5V20.5Z" fill="#34A853"/>
                  <path d="M14.5 9.5L3 3.5V20.5L14.5 14.5" fill="#FBBC04"/>
                  <path d="M14.5 14.5L20.5 12L14.5 9.5" fill="#EA4335"/>
                  <path d="M3 3.5L14.5 9.5L20.5 12" fill="#4285F4"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wide">Get it on</div>
                  <div className="text-white font-semibold text-lg leading-none">Google Play</div>
                </div>
              </div>
            </a>

            <a 
              href="https://apps.apple.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <div className="bg-black hover:bg-[#1a1a1a] transition-colors rounded-[12px] px-6 py-3 flex items-center gap-3 cursor-pointer border border-[rgba(255,255,255,0.1)] hover:border-[rgba(232,97,26,0.5)]">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wide">Download on the</div>
                  <div className="text-white font-semibold text-lg leading-none">App Store</div>
                </div>
              </div>
            </a>
          </div>

          <p className="text-[#8a8078] text-sm">
            Free download • Available on iOS 14+ and Android 8+
          </p>
        </div>

        {/* App Screenshots Preview */}
        <div className="reveal stagger-1 mb-20">
          <div className="relative">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#e8611a]/10 via-[#e8611a]/5 to-[#e8611a]/10 blur-3xl"></div>
            
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
              {screenshots.map((screen, i) => (
                <div 
                  key={i}
                  className="relative group"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="relative overflow-hidden rounded-[24px] border-4 border-[#1a1a1a] shadow-2xl transform transition-transform duration-300 group-hover:scale-105">
                    {/* Phone notch simulation */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                    
                    <img 
                      src={screen.src}
                      alt={screen.alt}
                      className="w-full h-[500px] object-cover"
                      onError={(e) => { e.target.src = screen.fallback }}
                    />
                    
                    {/* Reflection effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="reveal mb-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl mb-3">Powerful Features</h2>
            <p className="text-[#8a8078]">Everything you need for the perfect ride experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <Card 
                key={i}
                className={`p-6 cursor-pointer transition-all duration-300 ${
                  activeFeature === i 
                    ? 'border-[#e8611a] bg-[rgba(232,97,26,0.05)]' 
                    : 'hover:border-[rgba(232,97,26,0.5)]'
                }`}
                onClick={() => setActiveFeature(i)}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                  activeFeature === i 
                    ? 'bg-[#e8611a] text-white' 
                    : 'bg-[rgba(232,97,26,0.15)] text-[#e8611a]'
                }`}>
                  {feature.icon}
                </div>
                <h3 className="font-heading text-xl mb-2">{feature.title}</h3>
                <p className="text-[#8a8078] text-sm leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Download Section */}
        <div className="reveal">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-[rgba(232,97,26,0.1)] to-transparent border-[#e8611a]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-heading text-3xl mb-4">
                  Why Riders Love Our App
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#e8611a] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Shield size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Safety First</h4>
                      <p className="text-[#8a8078] text-sm">Emergency features and real-time hazard alerts keep you protected</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#e8611a] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Zap size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Lightning Fast</h4>
                      <p className="text-[#8a8078] text-sm">Optimized performance even in areas with poor connectivity</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#e8611a] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Users size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Vibrant Community</h4>
                      <p className="text-[#8a8078] text-sm">Join 500,000+ riders sharing routes and experiences</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-[#e8611a]/20 blur-3xl rounded-full"></div>
                <div className="relative bg-[#141414] rounded-[20px] p-8 border border-[rgba(232,97,26,0.35)]">
                  <div className="text-center mb-6">
                    <div className="text-5xl font-heading text-[#e8611a] mb-2">4.8★</div>
                    <p className="text-[#8a8078] text-sm">Average Rating</p>
                  </div>
                  <div className="space-y-3 text-center">
                    <div>
                      <div className="text-3xl font-heading mb-1">500K+</div>
                      <p className="text-[#8a8078] text-xs">Active Riders</p>
                    </div>
                    <div>
                      <div className="text-3xl font-heading mb-1">2M+</div>
                      <p className="text-[#8a8078] text-xs">Routes Shared</p>
                    </div>
                    <div>
                      <div className="text-3xl font-heading mb-1">150+</div>
                      <p className="text-[#8a8078] text-xs">Countries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 reveal">
          <h2 className="font-heading text-3xl mb-4">Ready to Hit the Road?</h2>
          <p className="text-[#8a8078] mb-8 max-w-xl mx-auto">
            Download now and get 30 days of premium features free. No credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Btn 
              className="btn-glow justify-center"
              onClick={() => showToast('Redirecting to App Store...')}
            >
              <Download size={18} />
              Download for iOS
            </Btn>
            <Btn 
              variant="secondary"
              className="justify-center"
              onClick={() => showToast('Redirecting to Play Store...')}
            >
              <Download size={18} />
              Download for Android
            </Btn>
          </div>
        </div>
      </div>
    </div>
  )
}