export const MOCK_MECHANICS = [
  { name: 'Carlos Rivera', location: 'Bangalore, India', specialties: ['Sport Bikes', 'Engine Overhaul'], rating: 4.9, reviews: 128, available: true },
  { name: 'Priya Nair', location: 'Mumbai, India', specialties: ['Touring', 'Electrics'], rating: 4.7, reviews: 94, available: true },
  { name: 'Ravi Shankar', location: 'Delhi, India', specialties: ['Off-Road', 'Suspension'], rating: 4.8, reviews: 76, available: false },
  { name: 'Lee Ming', location: 'Chennai, India', specialties: ['Vintage', 'Carbs'], rating: 4.6, reviews: 52, available: true },
  { name: 'Anjali Rao', location: 'Hyderabad, India', specialties: ['Adventure Bikes', 'Brakes'], rating: 4.5, reviews: 41, available: true },
  { name: 'Kiran Desai', location: 'Pune, India', specialties: ['Cruisers', 'Tires'], rating: 4.9, reviews: 103, available: false },
]

export const MOCK_EVENTS = [
  { title: 'Western Ghats Rally 2026', location: 'Goa to Coorg', date: 'Mar 15, 2026', attendees: 48, type: 'Rally' },
  { title: 'Himalayan Riders Meetup', location: 'Manali, HP', date: 'Apr 5, 2026', attendees: 32, type: 'Meetup' },
  { title: 'Night Ride — Mumbai to Pune', location: 'Mumbai, MH', date: 'Feb 22, 2026', attendees: 61, type: 'Ride' },
  { title: 'South India Scramble', location: 'Hampi, KA', date: 'Mar 28, 2026', attendees: 24, type: 'Rally' },
  { title: 'Rann of Kutch Winter Ride', location: 'Kutch, GJ', date: 'Feb 28, 2026', attendees: 19, type: 'Trip' },
  { title: 'Leh-Ladakh Prep Workshop', location: 'Delhi', date: 'Mar 10, 2026', attendees: 85, type: 'Workshop' },
]

export const MOCK_GROUPS = [
  { name: 'Himalayan Nomads', description: 'For riders who live for the mountains. Annual Ladakh expeditions and monthly rides.', members: 284, category: 'Adventure' },
  { name: 'South India Scramblers', description: 'Off-road enthusiasts exploring the Ghats, forests, and coastal trails.', members: 167, category: 'Off-Road' },
  { name: 'Vintage Iron Club', description: 'Restoration, maintenance, and riding of classic motorcycles from the 50s–90s.', members: 93, category: 'Vintage' },
  { name: 'Electric Riders India', description: 'The growing community of EV motorcycle owners and enthusiasts.', members: 412, category: 'EV' },
  { name: 'Long Haul Brotherhood', description: 'Solo and group touring across state lines. 1000km+ rides every quarter.', members: 329, category: 'Touring' },
  { name: 'Coastal Cruisers MCC', description: 'Riding the scenic coastal highways of India from Konkan to Coromandel.', members: 201, category: 'Touring' },
]

export const MOCK_POSTS = [
  { author: 'Arjun K.', initials: 'AK', time: '2h ago', content: 'Just completed the Leh–Manali highway solo! 980km in 3 days. The Khardung La pass at sunrise was absolutely surreal. Gear held up perfectly. AMA!', likes: 84, comments: 23 },
  { author: 'Meera S.', initials: 'MS', time: '5h ago', content: 'Looking for riding buddies for the Coorg weekend ride on Feb 14-15. Departing from Bangalore at 5:30 AM. Route: Mysuru–Kushalnagar–Abbey Falls–Madikeri. 2 spots open.', likes: 47, comments: 18 },
  { author: 'Dev T.', initials: 'DT', time: 'Yesterday', content: 'Just got my RE Himalayan 450 serviced by Ravi from the Motonomaad mechanics list. Honest, fast, 10/10 would recommend. Changed oil, cleaned carb, adjusted suspension for Rs 1800 all in.', likes: 112, comments: 31 },
  { author: 'Neha R.', initials: 'NR', time: '2d ago', content: 'Review: Kabini Forest Trail is a hidden gem. 40km of unpaved road through wildlife corridor. Spotted a herd of elephants crossing. DO NOT do this solo after dark. Highly recommend as a group trip.', likes: 203, comments: 67 },
]

export const FEATURES = [
  { title: 'Trip Planner', description: 'Discover curated motorcycle routes tailored to your riding style—scenic, off-road, or urban adventures.' },
  { title: 'Certified Mechanics', description: 'Find trusted mechanics along your route. Get help when you need it, wherever you are.' },
  { title: 'Riding Groups', description: 'Connect with fellow riders, join groups, and share the journey with like-minded nomads.' },
  { title: 'Events & Meetups', description: 'Discover and join motorcycle events, rallies, and meetups in your area or on your route.' },
  { title: 'Social Feed', description: 'Share your adventures, tips, and stories with the Motonomaad community.' },
  { title: 'Route Waypoints', description: 'Get detailed waypoints and stops for every journey, ensuring you never miss a great experience.' },
]

export const FAQS = [
  { q: 'What is Motonomaad?', a: 'Motonomaad is a comprehensive platform designed specifically for motorcycle adventurers. We provide trip planning tools, mechanic directories, community features, and event coordination—everything you need for epic motorcycle journeys.' },
  { q: 'Is Motonomaad free to use?', a: 'Yes! Motonomaad is completely free to use. Plan trips, connect with other riders, find mechanics, join groups, and participate in events without any subscription fees.' },
  { q: 'How does the trip planner work?', a: 'Our trip planner uses your starting point, destination, trip duration, and riding style preferences to suggest curated routes with detailed waypoints, estimated duration, and highlights along the way.' },
  { q: 'Are the mechanics verified?', a: 'Yes, all mechanics on Motonomaad are certified professionals. We verify their credentials and specialties to ensure quality service. You can view ratings, specialties, and contact info for each mechanic.' },
  { q: 'How do I join a riding group or event?', a: 'Browse our Groups or Events pages, find one that interests you, and click the join button. You can also create your own groups and events to connect with riders who share your passion.' },
  { q: 'Can I use Motonomaad on mobile?', a: 'Absolutely! Motonomaad is fully responsive and works seamlessly on smartphones, tablets, and desktops. Access your trip plans, connect with riders, and find mechanics wherever your journey takes you.' },
]

export const BLOG_ARTICLES = [
  {
    id: 1,
    title: "BMW 2 Series Gran Coupe Review",
    excerpt: "After a long wait, BMW has finally released the new 2 Series Gran Coupe. The cheapest sedan in BMW's sporty portfolio in India with petrol and diesel options.",
    image: "/blog-bmw-2series.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    author: "Auto Expert",
    date: "Feb 15, 2024",
    readTime: "8 min read",
    category: "Reviews",
    tags: ["BMW", "Sedan", "Review"],
    featured: true,
    mdFile: "/blog/bmw-2-series-grancoupe.md"
  },
  {
    id: 2,
    title: "Maruti Suzuki Fronx Review",
    excerpt: "The Maruti Suzuki Fronx blends coupe-inspired styling with practicality. Here’s a detailed look at its design, features, performance, and overall driving experience.",
    image: "https://images.unsplash.com/photo-1619767886558-efdc7d90f9a8?w=1200&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=800&q=80",
    author: "Auto Expert",
    date: "Feb 18, 2024",
    readTime: "7 min read",
    category: "Reviews",
    tags: ["Maruti Suzuki", "Fronx", "Review"],
    featured: false,
    mdFile: "/blog/fronx.md"
  },
  {
    id: 3,
    title: "Lamborghini Urus Review",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1200&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    author: "Auto Expert",
    date: "Feb 20, 2024",
    readTime: "9 min read",
    category: "Reviews",
    tags: ["Lamborghini", "Urus", "Super SUV"],
    featured: true,
    mdFile: "/blog/lamborghini-urus.md"
  },
  {
    id: 4,
    title: "Mercedes-Benz G63 AMG Review",
    image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6b9?w=1200&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    author: "Auto Expert",
    date: "Feb 22, 2024",
    readTime: "8 min read",
    category: "Reviews",
    tags: ["Mercedes-Benz", "G63 AMG", "SUV"],
    featured: false,
    mdFile: "/blog/mercedes-benz-g63-amg.md"
  },
  {
    id: 5,
    title: "MG Comet EV Review",
    image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=1200&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=800&q=80",
    author: "Auto Expert",
    date: "Feb 24, 2024",
    readTime: "6 min read",
    category: "Reviews",
    tags: ["MG", "Comet EV", "Electric"],
    featured: false,
    mdFile: "/blog/mg-comet-ev.md"
  },
  {
    id: 6,
    title: "Skoda Superb Review",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    author: "Auto Expert",
    date: "Feb 26, 2024",
    readTime: "8 min read",
    category: "Reviews",
    tags: ["Skoda", "Superb", "Sedan"],
    featured: false,
    mdFile: "/blog/skoda-superb.md"
  },
  {
    id: 7,
    title: "BMW X3 Review",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80",
    author: "Auto Expert",
    date: "Feb 28, 2024",
    readTime: "8 min read",
    category: "Reviews",
    tags: ["BMW", "X3", "SUV"],
    featured: false,
    mdFile: "/blog/the-bmw-x3.md"
  },
  {
    id: 8,
    title: "Audi Q7 Review",
    image: "https://images.unsplash.com/photo-1619767886558-efdc7d90f9a8?w=1200&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    author: "Auto Expert",
    date: "Mar 2, 2024",
    readTime: "9 min read",
    category: "Reviews",
    tags: ["Audi", "Q7", "Luxury SUV"],
    featured: true,
    mdFile: "/blog/the-new-audi-q7.md"
  },
  {
    id: 9,
    title: "Ford Mustang Review",
    image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=1200&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    author: "Auto Expert",
    date: "Mar 4, 2024",
    readTime: "8 min read",
    category: "Reviews",
    tags: ["Ford", "Mustang", "Muscle Car"],
    featured: true,
    mdFile: "/blog/the-new-ford-mustang.md"
  },
  {
    id: 10,
    title: "Jaguar F-Pace Review",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=1200&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    author: "Auto Expert",
    date: "Mar 6, 2024",
    readTime: "7 min read",
    category: "Reviews",
    tags: ["Jaguar", "F-Pace", "SUV"],
    featured: false,
    mdFile: "/blog/the-new-jaguar-f.md"
  }
]

export const TRIP_SUGGESTIONS = {
  scenic: [
    { title: 'Golden Ghats Circuit', duration: 'Day 1-2: Bangalore → Mysuru → Coorg. Day 3: Coorg → Mangalore. Day 4-5: Coastal NH66 → Goa.', highlights: ['Abbey Falls', 'Dubare Elephant Camp', 'Kudle Beach'], distance: '820 km' },
    { title: 'Konkan Coastal Run', duration: 'Day 1: Mumbai → Ratnagiri. Day 2-3: Ratnagiri → Malvan → Goa.', highlights: ['Ganpatipule Beach', 'Sindhudurg Fort', 'Arambol'], distance: '640 km' },
  ],
  offroad: [
    { title: 'Deccan Plateau Scramble', duration: 'Day 1: Pune → Bhandardara. Day 2-3: Off-road via Ratangad Fort. Day 4-5: Igatpuri → Nashik.', highlights: ['Ratangad Trail', 'Harishchandragad', 'Kalsubai Peak'], distance: '480 km (offroad)' },
  ],
  urban: [
    { title: 'Heritage City Loop', duration: 'Day 1: Old Delhi → Agra. Day 2: Agra → Fatehpur Sikri → Jaipur. Day 3-4: Jaipur → Ajmer → Pushkar.', highlights: ['Taj Mahal', 'Amber Fort', 'Pushkar Lake'], distance: '720 km' },
  ],
}

export const APP_LINKS = [
  { id: 'trip-planner', label: 'Trip Planner' },
  { id: 'mechanics', label: 'Mechanics' },
  { id: 'social', label: 'Social' },
  { id: 'groups', label: 'Groups' },
  { id: 'events', label: 'Events' },
  { id: 'blog', label: 'Blog' },
]

export const COMPANY_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
  { id: 'privacy', label: 'Privacy' },
]
