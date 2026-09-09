import { useState, useEffect } from "react";
import { User, Bike, ShieldAlert, Loader2, CheckCircle2, MapPin } from "lucide-react";
import { Btn } from '../components/ui';
import Modal from "../components/Modal";
import { joinClub } from "../api/postRequest";

const initialForm = {
    name: '',
    email: '',
    contactNumber: '',
    bikeMake: '',
    bikeModel: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
    hasApplication: false,
    city: '',
    state: '',
    country: '',
}

export default function JoinCommunityModal({ open, onClose, community, onSubmit, showToast }) {
    const [form, setForm] = useState(initialForm)
    const [errors, setErrors] = useState({})
    const [submitting, setSubmitting] = useState(false)
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        if (open) {
            setForm(initialForm)
            setErrors({})
            setSuccess(false)
        }
    }, [open])

    const update = (field) => (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setForm(f => ({ ...f, [field]: value }))
    }

    const validate = () => {
        const errs = {}
        if (!form.name.trim()) errs.name = 'Name is required'
        if (!form.email.trim()) errs.email = 'Email is required'
        else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Enter a valid email'
        if (!form.contactNumber.trim()) errs.contactNumber = 'Contact number is required'
        else if (!/^\+?[0-9\s-]{7,15}$/.test(form.contactNumber)) errs.contactNumber = 'Enter a valid phone number'
        if (!form.bikeMake.trim()) errs.bikeMake = 'Bike make is required'
        if (!form.bikeModel.trim()) errs.bikeModel = 'Bike model is required'
        if (!form.emergencyContactName.trim()) errs.emergencyContactName = 'Emergency contact name is required'
        if (!form.emergencyContactNumber.trim()) errs.emergencyContactNumber = 'Emergency contact number is required'
        else if (!/^\+?[0-9\s-]{7,15}$/.test(form.emergencyContactNumber)) errs.emergencyContactNumber = 'Enter a valid phone number'
        if (!form.city.trim()) errs.city = 'City is required'
        if (!form.state.trim()) errs.state = 'State is required'
        if (!form.country.trim()) errs.country = 'Country is required'
        setErrors(errs)
        return Object.keys(errs).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validate()) return

        setSubmitting(true)
        try {
            let payload = {
                name: form.name,
                email: form.email,
                number: form.contactNumber,
                address : {
                    city: form.city,
                    state: form.state,
                    country: form.country,
                },
                bike: {
                    make: form.bikeMake,
                    model: form.bikeModel,
                },
                emergencyContact: {
                    name: form.emergencyContactName,
                    number: form.emergencyContactNumber,
                },
                club: {
                    name: community?.communityName,
                    clubId: community?._id,
                },
                hadApp: form.hasApplication
            }
            let res = await joinClub(payload)
            if (res.Success) {
                setSuccess(true);
                showToast?.(res.message !== '' ? res.message : `Request sent to join "${community?.communityName}"!`)
            } else {
                setSuccess(false);
                showToast?.(res.message || 'Failed to send join request.')
            }
            setTimeout(() => onClose(), 1400)
        } catch (err) {
            console.log(err)
            showToast?.('Something went wrong. Please try again.')
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <Modal
            open={open}
            onClose={onClose}
            title={`Join ${community?.communityName || 'Community'}`}
            subtitle="Fill in your details to send a join request"
        >
            {success ? (
                <div className="px-6 py-14 flex flex-col items-center text-center gap-3">
                    <CheckCircle2 size={40} className="text-[#e8611a]" />
                    <p className="text-[#f0ebe3] font-medium">Request sent!</p>
                    <p className="text-sm text-[#8a8078]">The community admin will get back to you soon.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="px-6 py-6 flex flex-col gap-5">
                    <div>
                        <div className="flex items-center gap-2 text-xs font-heading uppercase tracking-[0.12em] text-[#8a8078] mb-3">
                            <User size={13} /> Your Details
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Field label="Full Name" error={errors.name}>
                                <input className="moto-input" value={form.name} onChange={update('name')} placeholder="John Rider" />
                            </Field>
                            <Field label="Email" error={errors.email}>
                                <input className="moto-input" type="email" value={form.email} onChange={update('email')} placeholder="you@example.com" />
                            </Field>
                            <Field label="Contact Number" error={errors.contactNumber}>
                                <input className="moto-input" value={form.contactNumber} onChange={update('contactNumber')} placeholder="+91 98765 43210" />
                            </Field>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-2 text-xs font-heading uppercase tracking-[0.12em] text-[#8a8078] mb-3">
                            <Bike size={13} /> Motorcycle
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Field label="Make" error={errors.bikeMake}>
                                <input className="moto-input" value={form.bikeMake} onChange={update('bikeMake')} placeholder="Royal Enfield" />
                            </Field>
                            <Field label="Model" error={errors.bikeModel}>
                                <input className="moto-input" value={form.bikeModel} onChange={update('bikeModel')} placeholder="Himalayan 450" />
                            </Field>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-2 text-xs font-heading uppercase tracking-[0.12em] text-[#8a8078] mb-3">
                            <ShieldAlert size={13} /> Emergency Contact
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Field label="Name" error={errors.emergencyContactName}>
                                <input className="moto-input" value={form.emergencyContactName} onChange={update('emergencyContactName')} placeholder="Jane Rider" />
                            </Field>
                            <Field label="Phone Number" error={errors.emergencyContactNumber}>
                                <input className="moto-input" value={form.emergencyContactNumber} onChange={update('emergencyContactNumber')} placeholder="+91 98765 43210" />
                            </Field>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-2 text-xs font-heading uppercase tracking-[0.12em] text-[#8a8078] mb-3">
                            <MapPin size={13} /> Address
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <Field label="City" error={errors.city}>
                                <input className="moto-input" value={form.city} onChange={update('city')} placeholder="Udupi" />
                            </Field>
                            <Field label="State" error={errors.state}>
                                <input className="moto-input" value={form.state} onChange={update('state')} placeholder="Karnataka" />
                            </Field>
                            <Field label="Country" error={errors.country}>
                                <input className="moto-input" value={form.country} onChange={update('country')} placeholder="India" />
                            </Field>
                        </div>
                    </div>

                    <div>
                        <label className="flex items-center gap-3 rounded-xl border border-[#2a2520] bg-[#1a1a1a] px-4 py-3.5 cursor-pointer hover:border-[rgba(232,97,26,0.35)] transition-colors duration-200">
                            <input
                                type="checkbox"
                                checked={form.hasMotonomaadApp}
                                onChange={update('hasApplication')}
                                className="w-4 h-4 accent-[#e8611a] rounded cursor-pointer"
                            />
                            <span className="text-sm text-[#f0ebe3]">I already have the Motonomaad app installed</span>
                        </label>
                    </div>

                    <div className="flex gap-3 pt-2">
                        <Btn type="button" variant="outline" className="flex-1" onClick={onClose} disabled={submitting}>
                            Cancel
                        </Btn>
                        <Btn type="submit" variant="primary" className="flex-1 btn-glow" disabled={submitting}>
                            {submitting ? <Loader2 size={15} className="animate-spin" /> : null}
                            {submitting ? 'Sending...' : 'Send Request'}
                        </Btn>
                    </div>
                </form>
            )}
        </Modal>
    )
}

function Field({ label, error, children }) {
    return (
        <label className="flex flex-col gap-1.5">
            <span className="text-xs text-[#8a8078] font-medium">{label}</span>
            {children}
            {error && <span className="text-xs text-[#e8611a]">{error}</span>}
        </label>
    )
}
