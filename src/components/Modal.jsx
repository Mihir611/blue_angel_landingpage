import { useEffect } from "react";
import { X } from "lucide-react";

export default function Modal({ open, onClose, title, subTitle, children, maxWidth = '520px' }) {
    useEffect(() => {
        if (!open) return;
        const original = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => { document.body.style.overflow = original }
    }, [open])

    useEffect(() => {
        if (!open) return
        const onKey = (e) => e.key === 'Escape' && onClose()
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [open, onClose])

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? 'modal-title' : undefined}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-[rgba(13,13,13,0.85)] backdrop-blur-sm animate-fade-in"
                onClick={onClose}
            />

            {/* Panel */}
            <div
                className="relative w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-[#2a2520] bg-[#141414] shadow-[0_20px_60px_rgba(0,0,0,0.6)] animate-fade-up"
                style={{ maxWidth }}
            >
                {(title || subTitle) && (
                    <div className="sticky top-0 bg-[#141414] border-b border-[#2a2520] px-6 py-5 flex items-start justify-between z-10">
                        <div>
                            {title && (
                                <h2 id="modal-title" className="font-heading text-xl font-bold text-[#f0ebe3]">
                                    {title}
                                </h2>
                            )}
                            {subTitle && <p className="text-sm text-[#8a8078] mt-1">{subTitle}</p>}
                        </div>
                        <button
                            onClick={onClose}
                            className="p-1.5 rounded-lg text-[#8a8078] hover:text-[#f0ebe3] hover:bg-[#1a1a1a] transition-all duration-200"
                            aria-label="Close"
                        >
                            <X size={18} />
                        </button>
                    </div>
                )}

                {/* If no title/subtitle passed, content is responsible for its own close button */}
                {children}
            </div>
        </div>
    )
}