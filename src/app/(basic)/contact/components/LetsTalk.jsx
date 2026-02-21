"use client"

import React, { useState, useRef, useEffect } from 'react';
import { Mail, MapPin, Phone, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { FaBehance, FaCaretDown, FaDribbble, FaLinkedin, FaTwitter } from 'react-icons/fa';

const SERVICE_OPTIONS = ["Brand Design", "UI/UX Design", "Social Media Design", "Web Development"];

const contactInfo = [
    { icon: Mail, text: 'hello@orbillo.com' },
    { icon: Phone, text: '+880 1711-252085' },
    { icon: MapPin, text: 'Dinajpur, Bangladesh' },
];

const SOCIAL_LINKS = [
    { icon: FaLinkedin, url: "https://www.linkedin.com/company/teamorbillo/posts/?feedView=all" },
    { icon: FaTwitter, url: "https://x.com/TeamOrbillo" },
    { icon: FaDribbble, url: "https://dribbble.com/teamorbillo" },
    { icon: FaBehance, url: "https://www.behance.net/teamorbillo" },
];

const LetsTalk = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedService, setSelectedService] = useState('');
    const [status, setStatus] = useState({ type: null, message: '' });
    const [formData, setFormData] = useState({
        user_name: '', user_email: '', user_whatsapp: '', company_name: '', message: ''
    });

    const dropdownRef = useRef(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedService) {
            setStatus({ type: 'error', message: 'Please select a service.' });
            return;
        }

        setStatus({ type: 'loading', message: 'Sending...' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, service: selectedService }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus({ type: 'success', message: 'Sent! Check your inbox.' });
                setFormData({ user_name: '', user_email: '', user_whatsapp: '', company_name: '', message: '' });
                setSelectedService('');
            } else {
                setStatus({ type: 'error', message: result.error || 'Failed to send' });
            }
        } catch (err) {
            setStatus({ type: 'error', message: 'Network error.' });
        } finally {
            setTimeout(() => {
                setStatus(prev => prev.type === 'loading' ? { type: null, message: '' } : prev);
            }, 5000);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className='relative w-full overflow-hidden bg-[#062B28] rounded-t-[80px] md:rounded-t-[100px]'>
            <div className='h-[500px] w-[500px] bg-[#D6F55B]/50 rounded-full absolute -right-60 -top-20 blur-[250px] pointer-events-none'></div>
            <div className='h-[300px] w-[500px] bg-[#D6F55B]/50 rounded-full absolute left-50 -top-50 blur-[250px] pointer-events-none'></div>
            <div className='h-[500px] w-[500px] bg-[#D6F55B]/50 rounded-full absolute -left-60 -bottom-20 blur-[250px] pointer-events-none'></div>

            <section className='max-w-[1380px] mx-auto px-5 md:px-10 py-12 md:py-25'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start'>
                    <div className='relative z-10'>
                        <p className='outfit uppercase text-[#FFFFFF]/65 font-bold text-sm md:text-lg tracking-[2.7px] mb-8 md:mb-12'>Let’s Talk!</p>
                        <h1 className='bricolage font-medium text-xl md:text-2xl xl:text-3xl leading-[140%] tracking-[-0.2px] text-[#FDFFF5] w-full md:max-w-[500px] mb-12'>Tell us about your project, goals, and timeline. Our team will get back to you <span className='text-[#C9FF90] underline decoration-[#C9FF90] decoration-3 underline-offset-5'>within 24 hours.</span></h1>

                        <div className='space-y-4'>
                            {contactInfo.map(({ icon: Icon, text }, index) => (
                                <div key={index} className="flex items-center gap-6">
                                    <Icon size={20} className='text-[#C9FF90]' />
                                    <span className='text-white outfit text-lg'>{text}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center gap-4 mt-14">
                            {SOCIAL_LINKS.map(({ icon: Icon, url }, idx) => (
                                <a key={idx} href={url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border-2 border-[#C9FF90] rounded-full flex items-center justify-center text-[#C9FF90] hover:bg-[#C9FF90] hover:text-[#17241F] transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="p-[1.15px] rounded-2xl bg-gradient-to-tr from-[#C9FF90]/70 to-[#062B28] relative z-10 shadow-[10px_-6px_60.3px_rgba(201,255,144,0.24)]">
                        <form onSubmit={handleSubmit} className="w-full bg-[#143329]/95 backdrop-blur-md rounded-2xl p-6 md:p-10">
                            <div className="space-y-8">
                                <input type="text" name="user_name" value={formData.user_name} onChange={handleInputChange} placeholder="Your Name *" required className='w-full bg-transparent border-b border-[#FFFFFF]/20 py-3 text-white focus:border-[#C9FF90] outline-none outfit' />
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                                    <input type="email" name="user_email" value={formData.user_email} onChange={handleInputChange} placeholder="Your Email *" required className='w-full bg-transparent border-b border-[#FFFFFF]/20 py-3 text-white focus:border-[#C9FF90] outline-none outfit' />
                                    <input type="text" name="user_whatsapp" value={formData.user_whatsapp} onChange={handleInputChange} placeholder="Whatsapp *" required className='w-full bg-transparent border-b border-[#FFFFFF]/20 py-3 text-white focus:border-[#C9FF90] outline-none outfit' />
                                </div>
                                <input type="text" name="company_name" value={formData.company_name} onChange={handleInputChange} placeholder="Company Name *" required className='w-full bg-transparent border-b border-[#FFFFFF]/20 py-3 text-white focus:border-[#C9FF90] outline-none outfit' />

                                <div className='relative' ref={dropdownRef}>
                                    <div onClick={() => setIsOpen(!isOpen)} className="w-full border-b border-[#FFFFFF]/20 py-3 cursor-pointer flex justify-between items-center group">
                                        <span className={`outfit text-lg ${selectedService ? 'text-white' : 'text-[#FFFFFF]/40'}`}>{selectedService || 'Choose Service *'}</span>
                                        <FaCaretDown className={`transition-all ${isOpen ? 'rotate-180 text-[#C9FF90]' : 'text-[#FFFFFF]/40'}`} />
                                    </div>
                                    {isOpen && (
                                        <div className="absolute top-full left-0 w-full mt-2 bg-[#0A1F18] border border-[#FFFFFF]/10 rounded-lg overflow-hidden z-50">
                                            {SERVICE_OPTIONS.map((option) => (
                                                <div key={option} onClick={() => { setSelectedService(option); setIsOpen(false); }} className="px-4 py-3 text-white hover:bg-[#C9FF90] hover:text-[#17241F] cursor-pointer outfit transition-colors">
                                                    {option}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Your Message *" required rows={3} className='w-full bg-transparent border-b border-[#FFFFFF]/20 py-3 text-white focus:border-[#C9FF90] outline-none resize-none outfit'></textarea>

                                <div className='pt-4 flex items-center gap-6'>
                                    <button type="submit" disabled={status.type === 'loading'} className='bg-[#C9FF90] hover:bg-white text-[#17241F] py-2 px-10 rounded-full flex items-center gap-2 transition-all outfit disabled:opacity-50 font-bold'>
                                        {status.type === 'loading' ? <Loader2 className="animate-spin" size={18} /> : 'Submit'}
                                    </button>
                                    {status.type && status.type !== 'loading' && (
                                        <div className={`flex items-center gap-2 ${status.type === 'success' ? 'text-[#C9FF90]' : 'text-red-400'}`}>
                                            {status.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                                            <span className="outfit">{status.message}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LetsTalk;