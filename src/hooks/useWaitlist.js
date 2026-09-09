import { useState, useEffect } from 'react'

export function useWaitlist() {
    const [isOpen, setIsOpen] = useState(false)

    // Auto-trigger after 5 seconds (only once per session)
    useEffect(() => {
        if (sessionStorage.getItem('waitlist_shown')) return
        const timer = setTimeout(() => {
            setIsOpen(true)
            sessionStorage.setItem('waitlist_shown', '1')
        }, 5000)
        return () => clearTimeout(timer)
    }, [])

    return { isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }
}