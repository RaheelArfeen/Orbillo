"use client"

import Image from "next/image";
import LightLogo from '../assets/Logo/LightLogo.svg'
import DarkLogo from '../assets/Logo/DarkLogo.svg'
import { useState, useEffect } from "react";

const Header = () => {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    // Handle Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleOpen = () => {
        setOpen((prev) => !prev)
    }

    return (
        <div className={`w-full z-50 transition-all duration-300 py-9 ${open && 'fixed top-0'}`}>

            <header className="max-w-[1380px] px-4 mx-auto flex justify-between items-center w-full relative z-50">
                <div className="relative z-50 transition-transform duration-500 ease-in-out">
                    {open ? (<Image src={DarkLogo} alt="Logo" />) : (<Image src={LightLogo} alt="Logo" />)}
                </div>

                <div className="flex items-center gap-6 relative z-50">

                    <a
                        href="https://calendly.com/teamorbillo/30min?back=1&month=2025-11"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-all duration-300 ${open ? 'opacity-0 pointer-events-none translate-x-10' : 'opacity-100 translate-x-0'}`}
                    >
                        <button className="py-[14px] px-[28px] rounded-full border border-white outfit hover:bg-[#C9FF90] hover:border-[#C9FF90] hover:text-[#17241F] transition duration-300 transition-colors cursor-pointer">
                            Book A Free Strategy Call
                        </button>
                    </a>

                    <button onClick={handleOpen} className="relative z-50">
                        {/* Added dynamic color class: White when closed, Black when open (to see against light bg) */}
                        <span className={`block transition duration-300 ${open ? 'rotate-90 text-black' : 'text-white'}`}>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
                                <path d="M4 12C4 11.4696 4.21071 10.9609 4.58579 10.5858C4.96086 10.2107 5.46957 10 6 10H42C42.5304 10 43.0391 10.2107 43.4142 10.5858C43.7893 10.9609 44 11.4696 44 12C44 12.5304 43.7893 13.0391 43.4142 13.4142C43.0391 13.7893 42.5304 14 42 14H6C5.46957 14 4.96086 13.7893 4.58579 13.4142C4.21071 13.0391 4 12.5304 4 12ZM4 24.064C4 23.5336 4.21071 23.0249 4.58579 22.6498C4.96086 22.2747 5.46957 22.064 6 22.064H42C42.5304 22.064 43.0391 22.2747 43.4142 22.6498C43.7893 23.0249 44 23.5336 44 24.064C44 24.5944 43.7893 25.1031 43.4142 25.4782C43.0391 25.8533 42.5304 26.064 42 26.064H6C5.46957 26.064 4.96086 25.8533 4.58579 25.4782C4.21071 25.1031 4 24.5944 4 24.064ZM6 34.13C5.46957 34.13 4.96086 34.3407 4.58579 34.7158C4.21071 35.0909 4 35.5996 4 36.13C4 36.6604 4.21071 37.1691 4.58579 37.5442C4.96086 37.9193 5.46957 38.13 6 38.13H42C42.5304 38.13 43.0391 37.9193 43.4142 37.5442C43.7893 37.1691 44 36.6604 44 36.13C44 35.5996 43.7893 35.0909 43.4142 34.7158C43.0391 34.3407 42.5304 34.13 42 34.13H6Z" fill="currentColor" />
                            </svg>
                        </span>
                    </button>
                </div>
            </header>

            {/* Menu Overlay */}
            <section
                className={`fixed inset-0 bg-[#E5FFCA] h-screen w-full z-40 flex items-center justify-center transition-transform duration-500 ease-in-out ${open ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                <div className="text-center">

                </div>
            </section>
        </div>
    );
};

export default Header;