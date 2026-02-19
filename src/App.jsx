import { useState } from 'react'
import AppShell from './components/AppShell.jsx'
import { Toast } from './components/ui.jsx'
import LandingPage from './pages/LandingPage.jsx'
import TripPlannerPage from './pages/TripPlannerPage.jsx'
import MechanicsPage from './pages/MechanicsPage.jsx'
import { GroupsPage, SocialFeedPage } from './pages/CommunityPages.jsx'
import { AboutPage, PrivacyPage } from './pages/StaticPages.jsx'
import { EventsPage } from './pages/EventsPage.jsx'
import AppDownloadPage from './pages/Download.jsx'
import BlogPage from './pages/Blogpage.jsx'
import { ContactPage } from './pages/Contact.jsx'

export default function App() {
  const [page, setPage] = useState('home')
  const [toast, setToast] = useState(null)

  const navigate = (p) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const showToast = (msg) => {
    setToast(msg)
    setTimeout(() => setToast(null), 2800)
  }

  const renderPage = () => {
    switch (page) {
      case 'home':         return <LandingPage navigate={navigate} />
      case 'trip-planner': return <TripPlannerPage showToast={showToast}  navigate={navigate} />
      case 'mechanics':    return <MechanicsPage showToast={showToast} />
      case 'social':       return <SocialFeedPage showToast={showToast} />
      case 'groups':       return <GroupsPage showToast={showToast} />
      case 'events':       return <EventsPage showToast={showToast} />
      case 'about':        return <AboutPage />
      case 'contact':      return <ContactPage showToast={showToast} />
      case 'privacy':      return <PrivacyPage />
      case 'download':     return <AppDownloadPage />
      case 'blog':         return <BlogPage showToast={showToast} navigate={navigate} />
      default:             return <LandingPage navigate={navigate} />
    }
  }

  return (
    <AppShell page={page} navigate={navigate} showToast={showToast}>
      {renderPage()}
      {toast && <Toast msg={toast} onClose={() => setToast(null)} />}
    </AppShell>
  )
}
