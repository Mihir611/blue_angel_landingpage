import { useState, useEffect, useCallback } from 'react'
import AppShell from './components/AppShell.jsx'
import { Toast } from './components/ui.jsx'
import LandingPage from './pages/LandingPage.jsx'
import TripPlannerPage from './pages/TripPlannerPage.jsx'
import MechanicsPage from './pages/MechanicsPage.jsx'
import { GroupsPage } from './pages/CommunityPages.jsx'
import { SocialFeedPage } from './pages/SocialFeedPages.jsx'
import { AboutPage, PrivacyPage } from './pages/StaticPages.jsx'
import { EventsPage } from './pages/EventsPage.jsx'
import AppDownloadPage from './pages/Download.jsx'
import BlogPage from './pages/Blogpage.jsx'
import LaunchCountdown from './pages/launchCountdown.jsx'
import WaitlistModal from './pages/waitlistModal.jsx'
import { useWaitlist } from './hooks/useWaitlist.js'
import { ContactPage } from './pages/Contact.jsx'
import CreateCommunityPage from './pages/CreateCommunityPage.jsx'

const HOME = 'home';

function pathToPage(pathname) {
	const clean = pathname.replace(/^\/+|\/+$/g, '') // strip leading/trailing slashes
	return clean === '' ? HOME : clean
}

function pageToPath(page) {
	return page === HOME ? '/' : `/${page}`
}
export default function App() {
	const [page, setPage] = useState('home')
	const [toast, setToast] = useState(null)
	const waitlist = useWaitlist();

	useEffect(() => {
		const onPopState = () => {
			setPage(pathToPage(window.location.pathname))
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}
		window.addEventListener('popstate', onPopState)
		return () => window.removeEventListener('popstate', onPopState)
	}, [])

	const navigate = useCallback((p) => {
		const path = pageToPath(p)
		if (window.location.pathname !== path) {
			window.history.pushState({}, '', path)
		}
		setPage(p)
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [])

	const showToast = (msg) => {
		setToast(msg)
		setTimeout(() => setToast(null), 2800)
	}

	const renderPage = () => {
		switch (page) {
			case 'home': return <LandingPage navigate={navigate} openWaitlist={waitlist.open} />
			case 'trip-planner': return <TripPlannerPage showToast={showToast} navigate={navigate} />
			case 'mechanics': return <MechanicsPage showToast={showToast} />
			case 'social': return <SocialFeedPage showToast={showToast} />
			case 'groups': return <GroupsPage showToast={showToast} />
			case 'events': return <EventsPage showToast={showToast} />
			case 'about': return <AboutPage />
			case 'contact': return <ContactPage showToast={showToast} />
			case 'privacy': return <PrivacyPage />
			case 'download': return <AppDownloadPage />
			case 'blog': return <BlogPage showToast={showToast} navigate={navigate} />
			case 'community': return <CreateCommunityPage navigate={navigate} />
			default: return <LandingPage navigate={navigate} openWaitlist={waitlist.open} />
		}
	}

	return (
		<>
			<LaunchCountdown onJoinClick={waitlist.open} />
			<AppShell page={page} navigate={navigate} showToast={showToast}>
				{renderPage()}
				{toast && <Toast msg={toast} onClose={() => setToast(null)} />}
			</AppShell>
			<WaitlistModal isOpen={waitlist.isOpen} onClose={waitlist.close} />
		</>
	)
}
