import { useState, useEffect } from "react";
import { GetLandingEvents } from "../api/getRequest.js";
import { MapPin, Users, Plus, Calendar, Heart, MessageSquare, Send } from 'lucide-react'
import { Btn, TiltCard, Badge, TabGroup, EmptyState, Avatar } from '../components/ui.jsx'
import { useScrollReveal } from '../hooks/useAnimations.js'

export function EventsPage({ showToast }) {
    const [filter, setFilter] = useState('All');
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const types = ['All', 'Rally', 'Meetup', 'Ride', 'Trip', 'Workshop', 'Cultural'];
    const ref = useScrollReveal();

    // Fetch events on component mount
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                setLoading(true);
                const data = await GetLandingEvents();
                setEvents(data || []);
                setError(null);
            } catch (err) {
                console.error('Failed to fetch events:', err);
                setError(err);
                setEvents([]);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    // Map your API data to match the component's expected format
    const filtered = filter === 'All'
        ? events
        : events.filter(e => e.category === filter);

    // Format date helper
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });
        return `${day} ${month}`;
    };

    return (
        <div className="container mx-auto px-8 max-w-[1400px] py-12">
            <div className="max-w-5xl mx-auto" ref={ref}>
                <div className="flex items-start justify-between flex-wrap gap-4 mb-10">
                    <div className="reveal">
                        <h1 className="font-heading text-4xl md:text-5xl mb-1">Events</h1>
                        <p className="text-[#8a8078]">Discover and join upcoming motorcycle events</p>
                    </div>
                    <div className="reveal stagger-2">
                        <Btn className="btn-glow" onClick={() => showToast('Sign in to create events!')}>
                            <Plus size={16} /> Create Event
                        </Btn>
                    </div>
                </div>

                <div className="reveal mb-8">
                    <TabGroup tabs={types} active={filter} onChange={setFilter} />
                </div>

                {loading ? (
                    <EmptyState
                        icon={<Calendar size={48} />}
                        title="Loading events..."
                        desc="Please wait while we fetch the latest events."
                    />
                ) : error ? (
                    <EmptyState
                        icon={<Calendar size={48} />}
                        title="Failed to load events"
                        desc="Please try again later."
                    />
                ) : filtered.length === 0 ? (
                    <EmptyState
                        icon={<Calendar size={48} />}
                        title="No events found as of now"
                        desc="Try a different filter or check back later."
                    />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((e, i) => (
                            <div key={e._id?.$oid || e._id || i} className={`reveal stagger-${(i % 6) + 1}`}>
                                <TiltCard className="p-6 flex flex-col h-full">
                                    <div className="flex items-start justify-between mb-3">
                                        <span className="text-[0.7rem] font-bold tracking-[0.1em] uppercase px-2 py-[3px] rounded bg-[rgba(232,97,26,0.12)] text-[#e8611a]">
                                            {e.category}
                                        </span>
                                        <span className="font-display text-2xl text-[#e8611a] leading-none">
                                            {formatDate(e.eventDate)}
                                        </span>
                                    </div>
                                    <h3 className="font-heading text-lg mb-2">{e.title}</h3>
                                    <div className="flex items-center gap-1 text-[#8a8078] text-sm mb-2">
                                        <MapPin size={12} /> {e.location?.city}, {e.location?.state}
                                    </div>
                                    <div className="flex items-center gap-1.5 text-[#8a8078] text-sm mb-4 flex-1">
                                        <Users size={13} /> {e.currentParticipants}/{e.maxParticipants} attending
                                    </div>
                                    <Btn
                                        variant="outline"
                                        size="sm"
                                        className="w-full"
                                        onClick={() => showToast(`Joined "${e.title}"!`)}
                                    >
                                        Join Event
                                    </Btn>
                                </TiltCard>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}