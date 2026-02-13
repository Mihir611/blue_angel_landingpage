import { useState } from 'react'
import { Search, ArrowRight, MapPin, Calendar, Clock, Mountain } from 'lucide-react'
import { Btn, Card, Badge } from '../components/ui.jsx'
import { useScrollReveal } from '../hooks/useAnimations.js'
import { TRIP_SUGGESTIONS } from '../data.js'

// Featured Adventure Trips with detailed itineraries
const FEATURED_ADVENTURES = [
  {
    id: 1,
    title: "Pacific Coast Highway Dream",
    image: "/adventure-pch.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
    duration: "7 Days",
    distance: "655 miles",
    difficulty: "Moderate",
    season: "May - October",
    description: "Experience the iconic California coastline on two wheels, from San Francisco to San Diego.",
    itinerary: [
      { day: 1, title: "San Francisco to Monterey", details: "Start at Golden Gate Bridge, ride through Half Moon Bay, arrive in Monterey. Visit Fisherman's Wharf." },
      { day: 2, title: "Monterey to Big Sur", details: "Cruise the famous 17-Mile Drive, tackle the winding roads of Big Sur with breathtaking coastal views." },
      { day: 3, title: "Big Sur to San Luis Obispo", details: "Continue south through Hearst Castle territory, explore charming SLO downtown." },
      { day: 4, title: "San Luis Obispo to Santa Barbara", details: "Ride through wine country, arrive in beautiful Santa Barbara for beach sunset." },
      { day: 5, title: "Santa Barbara to Malibu", details: "Coast through Ventura, hit the famous Malibu curves, stop at Paradise Cove." },
      { day: 6, title: "Malibu to San Diego", details: "Pass through LA, cruise down to San Diego via scenic coastal route." },
      { day: 7, title: "Explore San Diego", details: "Rest day to explore Gaslamp Quarter, Coronado Island, and La Jolla Cove." }
    ]
  },
  {
    id: 2,
    title: "Rocky Mountain High Adventure",
    image: "/adventure-rockies.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    duration: "6 Days",
    distance: "580 miles",
    difficulty: "Challenging",
    season: "June - September",
    description: "Conquer high-altitude passes and pristine mountain roads through Colorado's finest scenery.",
    itinerary: [
      { day: 1, title: "Denver to Rocky Mountain NP", details: "Start in Denver, ride through Boulder, enter Rocky Mountain National Park via Trail Ridge Road." },
      { day: 2, title: "Estes Park to Steamboat Springs", details: "Cross Continental Divide, ride through remote mountain valleys to Steamboat." },
      { day: 3, title: "Steamboat to Aspen", details: "Navigate Independence Pass (12,095 ft), one of Colorado's highest paved roads." },
      { day: 4, title: "Aspen to Telluride", details: "Ride the Million Dollar Highway through stunning red rock canyons and mountain passes." },
      { day: 5, title: "Telluride to Durango", details: "Explore historic mining towns, descend into Durango valley." },
      { day: 6, title: "Durango to Denver", details: "Return via scenic byways, stop at Great Sand Dunes National Park." }
    ]
  },
  {
    id: 3,
    title: "Blue Ridge Parkway Journey",
    image: "/adventure-blueridge.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    duration: "5 Days",
    distance: "469 miles",
    difficulty: "Easy",
    season: "April - November",
    description: "America's favorite drive through the Appalachian Highlands with endless mountain vistas.",
    itinerary: [
      { day: 1, title: "Waynesboro to Roanoke", details: "Start at northern terminus, ride through Shenandoah Valley, reach Roanoke by evening." },
      { day: 2, title: "Roanoke to Boone", details: "Cross Virginia-North Carolina border, visit Mabry Mill, arrive in charming Boone." },
      { day: 3, title: "Boone to Asheville", details: "Ride past Grandfather Mountain, stop at Linville Falls, cruise into Asheville." },
      { day: 4, title: "Asheville Exploration", details: "Rest day to explore Biltmore Estate, downtown breweries, and local motorcycle culture." },
      { day: 5, title: "Asheville to Cherokee", details: "Final stretch through Great Smoky Mountains, end at Cherokee with mountain views." }
    ]
  },
  {
    id: 4,
    title: "Southwest Desert Expedition",
    image: "/adventure-desert.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
    duration: "8 Days",
    distance: "920 miles",
    difficulty: "Moderate",
    season: "March - May, September - November",
    description: "Epic loop through red rock country, national parks, and iconic desert highways.",
    itinerary: [
      { day: 1, title: "Las Vegas to Zion", details: "Escape the city, ride through Virgin River Gorge to Zion National Park." },
      { day: 2, title: "Zion to Bryce Canyon", details: "Short scenic ride on UT-9, explore Bryce's unique hoodoo formations." },
      { day: 3, title: "Bryce to Monument Valley", details: "Long day riding through Grand Staircase-Escalante, arrive at iconic Monument Valley." },
      { day: 4, title: "Monument Valley to Moab", details: "Ride through Valley of the Gods, tackle the legendary Moki Dugway switchbacks." },
      { day: 5, title: "Moab Adventure Day", details: "Rest day to explore Arches and Canyonlands National Parks, optional off-road riding." },
      { day: 6, title: "Moab to Page", details: "Ride along scenic UT-191, stop at Dead Horse Point, reach Lake Powell." },
      { day: 7, title: "Page to Grand Canyon", details: "Visit Horseshoe Bend and Antelope Canyon, ride to North Rim of Grand Canyon." },
      { day: 8, title: "Grand Canyon to Las Vegas", details: "Final day through Kaibab Forest, descend to Vegas through Joshua Tree forest." }
    ]
  },
  {
    id: 5,
    title: "New England Fall Colors Tour",
    image: "/adventure-newengland.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    duration: "6 Days",
    distance: "720 miles",
    difficulty: "Easy",
    season: "September - October",
    description: "Chase autumn foliage through Vermont's Green Mountains and New Hampshire's White Mountains.",
    itinerary: [
      { day: 1, title: "Boston to Stowe, VT", details: "Ride north through New Hampshire, arrive in quintessential Vermont mountain town." },
      { day: 2, title: "Stowe to Burlington", details: "Explore Green Mountain Byway, reach Lake Champlain waterfront in Burlington." },
      { day: 3, title: "Burlington to White Mountains", details: "Cross back into NH, ride the legendary Kancamagus Highway through peak foliage." },
      { day: 4, title: "White Mountains Loop", details: "Tackle Mount Washington Auto Road, explore Franconia Notch, visit covered bridges." },
      { day: 5, title: "White Mountains to Portland, ME", details: "Ride through Lakes Region, reach coastal Portland for lobster and lighthouses." },
      { day: 6, title: "Portland to Boston", details: "Cruise down scenic Route 1, enjoy coastal Maine views before returning to Boston." }
    ]
  },
  {
    id: 6,
    title: "Texas Hill Country Cruise",
    image: "/adventure-texas.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    duration: "4 Days",
    distance: "450 miles",
    difficulty: "Easy",
    season: "March - May, October - November",
    description: "Twisted roads through rolling hills, BBQ joints, and authentic Texas hospitality.",
    itinerary: [
      { day: 1, title: "Austin to Fredericksburg", details: "Start on famous Ranch Road 1431, arrive in German-heritage Fredericksburg for wine tasting." },
      { day: 2, title: "The Three Sisters Loop", details: "Ride the legendary Ranch Roads 335, 336, and 337 - Texas's best motorcycle roads." },
      { day: 3, title: "Fredericksburg to Bandera", details: "Cruise through Lost Maples area, reach the 'Cowboy Capital of the World'." },
      { day: 4, title: "Bandera to Austin", details: "Return via Twisted Sisters, stop at Salt Lick BBQ, cruise back into Austin." }
    ]
  }
]

export default function TripPlannerPage({ showToast, navigate }) {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [days, setDays] = useState('')
  const [tripType, setTripType] = useState('scenic')
  const [loading, setLoading] = useState(false)
  const [suggestions, setSuggestions] = useState(null)
  const [expandedTrip, setExpandedTrip] = useState(null)
  const ref = useScrollReveal()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!from.trim() || !to.trim() || !days) return showToast('Please fill all fields')
    setLoading(true)
    setSuggestions(null)
    setTimeout(() => {
      setSuggestions(TRIP_SUGGESTIONS[tripType] || TRIP_SUGGESTIONS.scenic)
      setLoading(false)
    }, 1200)
  }

  const toggleItinerary = (id) => {
    setExpandedTrip(expandedTrip === id ? null : id)
  }

  return (
    <div className="container mx-auto px-8 max-w-[1400px] py-12" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 reveal">
          <h1 className="font-heading text-4xl md:text-5xl mb-2">Trip Planner</h1>
          <p className="text-[#8a8078]">Plan your next motorcycle adventure with curated itineraries</p>
        </div>

        {/* Image Gallery Section */}
        <div className="reveal stagger-1 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 relative overflow-hidden rounded-[12px] h-[280px] group">
              <img 
                src="/trip-main.jpg" 
                alt="Scenic motorcycle route" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 z-10">
                <h3 className="font-heading text-2xl text-white mb-1">Epic Routes Await</h3>
                <p className="text-gray-300 text-sm">Discover breathtaking journeys</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="relative overflow-hidden rounded-[12px] h-[133px] group">
                <img 
                  src="/trip-scenic.jpg" 
                  alt="Mountain pass" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400&q=80' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-3 z-10">
                  <p className="text-white text-sm font-semibold">Scenic Routes</p>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-[12px] h-[133px] group">
                <img 
                  src="/trip-offroad.jpg" 
                  alt="Off-road adventure" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1558980664-769d59546b3d?w=400&q=80' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-3 z-10">
                  <p className="text-white text-sm font-semibold">Off-Road Trails</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Adventure Trips */}
        <div className="mb-12 reveal">
          <div className="mb-6">
            <h2 className="font-heading text-3xl mb-2">Featured Adventures</h2>
            <p className="text-[#8a8078]">Hand-picked epic journeys with detailed day-by-day itineraries</p>
          </div>

          <div className="space-y-6">
            {FEATURED_ADVENTURES.map((trip, index) => (
              <Card 
                key={trip.id} 
                className="overflow-hidden hover:border-[rgba(232,97,26,0.6)] transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                  {/* Trip Image */}
                  <div className="md:col-span-2 relative h-[220px] md:h-auto overflow-hidden group">
                    <img 
                      src={trip.image} 
                      alt={trip.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => { e.target.src = trip.fallbackImage }}
                    />
                    <div className="absolute top-3 right-3 flex gap-2">
                      <Badge color="orange">{trip.duration}</Badge>
                    </div>
                  </div>

                  {/* Trip Details */}
                  <div className="md:col-span-3 p-6">
                    <h3 className="font-heading text-2xl mb-2">{trip.title}</h3>
                    <p className="text-[#8a8078] text-sm mb-4">{trip.description}</p>

                    {/* Trip Stats */}
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-[#e8611a]" />
                        <span className="text-xs text-[#8a8078]">{trip.distance}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={14} className="text-[#e8611a]" />
                        <span className="text-xs text-[#8a8078]">{trip.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Mountain size={14} className="text-[#e8611a]" />
                        <span className="text-xs text-[#8a8078]">{trip.difficulty}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-[#e8611a]" />
                        <span className="text-xs text-[#8a8078]">{trip.season}</span>
                      </div>
                    </div>

                    {/* Itinerary Toggle */}
                    <div className="flex gap-3">
                      <Btn 
                        size="sm" 
                        className="btn-glow"
                        onClick={() => toggleItinerary(trip.id)}
                      >
                        {expandedTrip === trip.id ? '📅 Hide Itinerary' : '📅 View Full Itinerary'}
                      </Btn>
                      <Btn 
                        size="sm" 
                        variant="secondary"
                        onClick={() => {
                          showToast(`"${trip.title}" saved! Download our app to access it anytime.`)
                          setTimeout(() => navigate('download'), 1000)
                        }}
                      >
                        💾 Save Trip
                      </Btn>
                    </div>

                    {/* Expanded Itinerary */}
                    {expandedTrip === trip.id && (
                      <div className="mt-6 pt-6 border-t border-[rgba(232,97,26,0.25)]">
                        <h4 className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[#e8611a] mb-4">
                          Day-by-Day Itinerary
                        </h4>
                        <div className="space-y-3">
                          {trip.itinerary.map((day) => (
                            <div 
                              key={day.day}
                              className="border-l-2 border-[rgba(232,97,26,0.35)] pl-4 hover:border-[#e8611a] transition-colors"
                            >
                              <div className="flex items-baseline gap-2 mb-1">
                                <span className="font-heading text-lg text-[#e8611a]">Day {day.day}</span>
                                <span className="font-semibold text-sm">{day.title}</span>
                              </div>
                              <p className="text-[#8a8078] text-sm leading-relaxed">{day.details}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Custom Trip Planner Form */}
        <div className="reveal stagger-1">
          <Card className="p-8 mb-8">
            <h2 className="font-heading text-xl mb-1">Plan Your Custom Route</h2>
            <p className="text-[#8a8078] text-sm mb-6">Enter your trip details to get personalized suggestions</p>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#8a8078] uppercase tracking-wider">From</label>
                  <input className="moto-input" placeholder="Starting location" value={from} onChange={e => setFrom(e.target.value)} required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#8a8078] uppercase tracking-wider">To</label>
                  <input className="moto-input" placeholder="Destination" value={to} onChange={e => setTo(e.target.value)} required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#8a8078] uppercase tracking-wider">Duration (days)</label>
                  <input className="moto-input" type="number" min="1" max="30" placeholder="e.g. 5" value={days} onChange={e => setDays(e.target.value)} required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#8a8078] uppercase tracking-wider">Riding Style</label>
                  <select className="moto-input" value={tripType} onChange={e => setTripType(e.target.value)}>
                    <option value="scenic">Scenic</option>
                    <option value="offroad">Off-Road</option>
                    <option value="urban">Urban</option>
                  </select>
                </div>
              </div>
              <Btn type="submit" className="w-full justify-center btn-glow" disabled={loading}>
                {loading
                  ? <><span className="animate-spin mr-2">⟳</span>Finding routes...</>
                  : <><Search size={16} /> Find Trip Suggestions</>
                }
              </Btn>
            </form>
          </Card>
        </div>

        {/* Loading dots */}
        {loading && (
          <div className="flex justify-center gap-2 py-12">
            {[0,1,2].map(i => (
              <div
                key={i}
                className="w-3 h-3 rounded-full bg-[#e8611a]"
                style={{ animation: `float-particle 0.9s ${i * 0.2}s ease-in-out infinite` }}
              />
            ))}
          </div>
        )}

        {/* Results */}
        {suggestions && !loading && (
          <div className="space-y-4">
            <h2 className="font-heading text-2xl mb-1 animate-fade-up">Route Suggestions</h2>
            {suggestions.map((s, i) => (
              <div
                key={i}
                className="bg-[#141414] border-[1.5px] border-[rgba(232,97,26,0.35)] rounded-[12px] p-6 animate-fade-up hover:border-[rgba(232,97,26,0.6)] transition-colors duration-200"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <h3 className="font-heading text-xl">{s.title}</h3>
                  <Badge color="orange">{s.distance}</Badge>
                </div>
                <div className="border-l-2 border-[rgba(232,97,26,0.35)] pl-4 mb-4">
                  <div className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[#e8611a] mb-1">Itinerary</div>
                  <p className="text-[#8a8078] text-sm leading-relaxed">{s.duration}</p>
                </div>
                <div className="mb-4">
                  <div className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[#8a8078] mb-2">Highlights</div>
                  <div className="flex flex-wrap gap-2">
                    {s.highlights.map((h, j) => (
                      <span
                        key={j}
                        className="flex items-center gap-1 px-[10px] py-[3px] rounded-full text-[0.72rem] font-bold bg-[rgba(232,97,26,0.12)] text-[#e8611a] border border-[rgba(232,97,26,0.35)]"
                      >
                        <MapPin size={9} /> {h}
                      </span>
                    ))}
                  </div>
                </div>
                <Btn size="sm" className="btn-glow" onClick={() => showToast(`"${s.title}" added to your plans!`)}>
                  <ArrowRight size={14} /> Select This Route
                </Btn>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}