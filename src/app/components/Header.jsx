"use client"

import Image from "next/image";
import Link from "next/link";
import Logo from './Logo/logo.jsx'
import { useState, useEffect } from "react";
import { ChevronsDown } from "lucide-react";
import { FaDribbble, FaBehance, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

const SOCIAL_LINKS = [
    { icon: FaFacebookF, url: "https://www.facebook.com/teamOrbillo" },
    { icon: FaLinkedinIn, url: "https://www.linkedin.com/company/teamorbillo/posts/?feedView=all" },
    { icon: FaBehance, url: "https://www.behance.net/teamorbillo" },
    { icon: FaDribbble, url: "https://dribbble.com/teamorbillo" },
];

const services = [
    { label: 'Branding & Identity', href: '/services/branding' },
    { label: 'UI/UX Design', href: '/services/ui-ux' },
    { label: 'Web Development', href: '/services/webDevelopment' },
    { label: 'Social Media Design', href: '/services/social-media' },
];

const Header = () => {
    const [open, setOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(true);

    // Header Visibility States
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleOpen = () => {
        setOpen((prev) => !prev);
        if (open) setServicesOpen(false);
    };

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                const currentScrollY = window.scrollY;

                // 1. Check if we have scrolled enough to warrant a background
                setIsScrolled(currentScrollY > 40);

                // 2. Logic for Show/Hide
                if (open) {
                    setVisible(true);
                    return;
                }

                // If scrolling down, hide; if scrolling up, show instantly
                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    setVisible(false);
                } else {
                    setVisible(true);
                }

                setLastScrollY(currentScrollY);
            }
        };

        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY, open]);

    return (
        <div
            className={`w-full z-50 fixed top-0 left-0 right-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6 pointer-events-none'}
            ${open ? 'h-screen bg-[#E5FFCA]' : 'h-auto'}
            ${isScrolled && !open ? 'bg-[#093a35] backdrop-blur-xl shadow-2xl' : 'bg-transparent'}
            py-4 md:py-6`}
        >
            <header className="max-w-[1380px] px-4 mx-auto flex justify-between items-center w-full relative z-50">
                {/* Logo Section - Forced white color unless menu is open */}
                <div className="relative z-50 w-32 md:w-40 lg:w-50 h-auto flex-shrink-0">
                    <Link href="/">
                        <Logo className={`transition-colors duration-500 ${open ? 'text-[#17241F]' : 'text-white'}`} />
                    </Link>
                </div>

                {/* Actions Section */}
                <div className="flex items-center gap-3 md:gap-6 relative z-50">
                    <a
                        href="https://calendly.com/teamorbillo/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`hidden md:block transition-all duration-300 ${open ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                    >
                        <button className="px-8 py-2.5 rounded-full font-medium outfit bg-[#B9FF8D] text-[#17241F] hover:bg-white transition duration-300 cursor-pointer whitespace-nowrap">
                            Let's talk
                        </button>
                    </a>

                    {/* Hamburger Menu - Colors dynamic based on menu state */}
                    <button onClick={handleOpen} className="relative z-50 flex items-center justify-center p-1">
                        <span className={`block transition-all duration-500 ${open ? 'rotate-90 text-[#17241F]' : 'text-white'}`}>
                            <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 14H42M6 24H42M6 34H42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokejoin="round" />
                            </svg>
                        </span>
                    </button>
                </div>
            </header>

            {/* Full-Screen Menu Overlay */}
            <section
                className={`fixed inset-0 bg-[#E5FFCA] h-screen w-full z-40 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? 'translate-y-0' : '-translate-y-full'}`}
            >
                <div className="w-full h-full overflow-y-auto">
                    <div className="max-w-[1380px] w-full mx-auto px-4 min-h-full flex flex-col justify-end lg:justify-center pt-24 pb-8">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-16 lg:gap-4">

                            {/* LEFT COLUMN: Info */}
                            <div className="w-full lg:w-1/2 flex flex-col space-y-6 lg:pr-16 order-2 lg:order-1">
                                <p className="text-[#17241F] bricolage text-2xl lg:text-3xl max-w-[500px]">
                                    Tell us about your project, goals, and timeline and our team will get back to you{' '}
                                    <span className="text-[#02403A] underline decoration-[#02403A] decoration-2 underline-offset-4">
                                        within 24 hours.
                                    </span>
                                </p>

                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
                                    <button className="w-full sm:w-auto bg-[#02403A] text-[#C9FF90] hover:bg-[#17241F] transition duration-300 px-12 py-3 rounded-full outfit text-lg font-medium">
                                        Contact us
                                    </button>
                                    <a href="https://wa.me/8801711252085" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                        <button className='w-full sm:w-auto px-5 py-3 flex items-center justify-center gap-2.5 outfit text-lg cursor-pointer text-[#16332F] hover:bg-[#16332F]/5 rounded-full transition duration-300'>
                                            Chat Realtime
                                        </button>
                                    </a>
                                </div>

                                <div className="flex items-center gap-3 pt-3">
                                    {SOCIAL_LINKS.map(({ icon: Icon, url }, idx) => (
                                        <a key={idx} href={url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-[#17241F] rounded-full flex items-center justify-center text-[#17241F] hover:bg-[#17241F] hover:text-[#E5FFCA] transition-all duration-300">
                                            <Icon size={18} />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* RIGHT COLUMN: Navigation */}
                            <div className="w-full lg:w-1/3 flex flex-col items-start space-y-4 order-1 lg:order-2">
                                <Link onClick={() => setOpen(false)} href="/" className="text-3xl text-[#17241F] hover:opacity-50 transition-opacity font-medium px-4">Home</Link>
                                <Link onClick={() => setOpen(false)} href="/about" className="text-3xl text-[#17241F] hover:opacity-50 transition-opacity font-medium px-4">About us</Link>

                                <div className="w-full">
                                    <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center gap-4 w-full text-3xl text-[#16332F] hover:opacity-50 cursor-pointer font-medium px-4">
                                        <span>Services</span>
                                        <ChevronsDown className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} size={24} />
                                    </button>
                                    <div className={`grid transition-all duration-300 overflow-hidden ${servicesOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden flex flex-col">
                                            {services.map((item, i) => (
                                                <Link key={i} href={item.href} onClick={() => setOpen(false)} className="py-2.5 text-lg text-[#16332F]/70 hover:text-[#16332F] transition-colors pl-8">
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <Link onClick={() => setOpen(false)} href="/contact" className="text-3xl text-[#16332F] hover:opacity-50 transition-opacity font-medium px-4">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;