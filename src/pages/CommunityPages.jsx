import { useState, useEffect, useCallback } from 'react'
import { MapPin, Users, Plus, Calendar, Heart, MessageSquare, Send, Layers } from 'lucide-react'
import { Btn, TiltCard, Badge, TabGroup, EmptyState, Avatar } from '../components/ui.jsx'
import JoinCommunityModal from './JoinCommunityModal.jsx'
import { useScrollReveal } from '../hooks/useAnimations.js'
import { GetCommunities } from '../api/getRequest.js'

const COUNTRY_OPTIONS = ['All'];

// ── GroupsPage ────────────────────────────────────────────────────────────────
export function GroupsPage({ showToast }) {
	const [communities, setCommunities] = useState([])
	const [page, setPage] = useState(1)
	const [totalPages, setTotalPages] = useState(1)
	const [loading, setLoading] = useState(true)
	const [loadingMore, setLoadingMore] = useState(false)
	const [error, setError] = useState(null)
	const [filter, setFilter] = useState('All')
	const [joinModalOpen, setJoinModalOpen] = useState(false)
	const [selectedCommunity, setSelectedCommunity] = useState(null)
	const ref = useScrollReveal()

	const fetchCommunities = useCallback(async (pageNum, country, append = false) => {
		append ? setLoadingMore(true) : setLoading(true)
		setError(null)
		try {
			const params = { page: pageNum, limit: 9 }
			if (country && country !== 'All') params.country = country

			const res = await GetCommunities(params)
			const list = res?.data?.communities ?? []
			const pages = res?.totalPages ?? 1

			setCommunities(prev => append ? [...prev, ...list] : list)
			setTotalPages(pages)
			setPage(pageNum)
		} catch (err) {
			setError('Could not load communities. Please try again.')
		} finally {
			append ? setLoadingMore(false) : setLoading(false)
		}
	}, [])

	useEffect(() => {
		fetchCommunities(1, filter, false)
	}, [filter, fetchCommunities])

	const openJoinModal = (community) => {
		setSelectedCommunity(community)
		setJoinModalOpen(true)
	}

	const handleJoinSubmit = async (payload) => {
		// TODO: wire this to your actual "join community" API endpoint once it exists
		console.log('Join request payload:', payload)
	}

	return (
		<div className="container mx-auto px-8 max-w-[1400px] py-12">
			<div className="max-w-5xl mx-auto" ref={ref}>
				<div className="flex items-start justify-between flex-wrap gap-4 mb-10">
					<div className="reveal">
						<h1 className="font-heading text-4xl md:text-5xl mb-1">Groups</h1>
						<p className="text-[#8a8078]">Join communities of riders with shared interests</p>
					</div>
					<div className="reveal stagger-2">
						<Btn className="btn-glow" onClick={() => showToast('Sign in to create groups!')}>
							<Plus size={16} /> Create Group
						</Btn>
					</div>
				</div>

				{COUNTRY_OPTIONS.length > 1 && (
					<div className="reveal mb-8">
						<TabGroup tabs={COUNTRY_OPTIONS} active={filter} onChange={setFilter} />
					</div>
				)}

				{loading && (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{Array.from({ length: 6 }).map((_, i) => (
							<div key={i} className="rounded-[12px] border-[1.5px] border-[#2a2520] bg-[#141414] h-[220px] animate-pulse" />
						))}
					</div>
				)}

				{!loading && error && (
					<EmptyState
						title="Something went wrong"
						description={error}
						action={<Btn variant="outline" size="sm" onClick={() => fetchCommunities(1, filter, false)}>Retry</Btn>}
					/>
				)}

				{!loading && !error && communities.length === 0 && (
					<EmptyState
						title="No communities yet"
						description="Be the first to create one for your riding crew."
					/>
				)}

				{!loading && !error && communities.length > 0 && (
					<>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{communities.map((c, i) => (
								<div key={c._id ?? c.communityName ?? i} className={`reveal stagger-${(i % 6) + 1}`}>
									<TiltCard className="p-6 flex flex-col h-full">
										<div className="flex items-center gap-3 mb-4">
											<img
												src={c.logo}
												alt={c.communityName}
												className="w-11 h-11 rounded-full object-cover border border-[#2a2520]"
												onError={(e) => { e.currentTarget.style.visibility = 'hidden' }}
											/>
											<div className="min-w-0">
												<h3 className="font-heading text-lg leading-tight truncate">{c.communityName}</h3>
												{c.tagline && <p className="text-xs text-[#8a8078] truncate">{c.tagline}</p>}
											</div>
										</div>

										{c.hasSubCommunities && (
											<div className="mb-3">
												<Badge color="orange">
													<Layers size={11} className="inline mr-1" />
													{c.communityLevel > 1 ? `Level ${c.communityLevel}` : 'Has sub-communities'}
												</Badge>
											</div>
										)}

										<p className="text-[#8a8078] text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
											{c.description}
										</p>

										{c.location && (c.location.city || c.location.state || c.location.country) && (
											<div className="flex items-center gap-1.5 text-[#8a8078] text-sm mb-4">
												<MapPin size={13} />
												{[c.location.city, c.location.state, c.location.country].filter(Boolean).join(', ')}
											</div>
										)}

										<Btn
											variant="outline"
											size="sm"
											className="w-full"
											onClick={() => openJoinModal(c)}
										>
											Join Group
										</Btn>
									</TiltCard>
								</div>
							))}
						</div>

						{page < totalPages && (
							<div className="flex justify-center mt-10">
								<Btn
									variant="outline"
									onClick={() => fetchCommunities(page + 1, filter, true)}
									disabled={loadingMore}
								>
									{loadingMore ? <Loader2 size={14} className="animate-spin" /> : null}
									{loadingMore ? 'Loading...' : 'Load More'}
								</Btn>
							</div>
						)}
					</>
				)}
			</div>

			<JoinCommunityModal
				open={joinModalOpen}
				onClose={() => setJoinModalOpen(false)}
				community={selectedCommunity}
				onSubmit={handleJoinSubmit}
				showToast={showToast}
			/>
		</div>
	)
}