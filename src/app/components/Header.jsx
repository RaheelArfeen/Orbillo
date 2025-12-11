"use client"

import Image from "next/image";
import Link from "next/link";
import LightLogo from '../assets/Logo/LightLogo.svg'
import DarkLogo from '../assets/Logo/DarkLogo.svg'
import { useState } from "react";
import { ChevronsDown } from "lucide-react";
import { FaDribbble, FaBehance, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const SOCIAL_LINKS = [
    { icon: FaLinkedinIn, url: "https://www.linkedin.com/company/teamorbillo/posts/?feedView=all" },
    { icon: FaTwitter, url: "https://x.com/TeamOrbillo" },
    { icon: FaDribbble, url: "https://dribbble.com/teamorbillo" },
    { icon: FaBehance, url: "https://www.behance.net/teamorbillo" },
];

const Header = () => {
    const [open, setOpen] = useState(false)
    const [servicesOpen, setServicesOpen] = useState(false)

    const handleOpen = () => {
        setOpen((prev) => !prev)
        if (open) setServicesOpen(true);
    }

    return (
        <div className={`w-full z-50 transition-all duration-300 py-4 md:py-6 lg:py-9 ${open ? 'fixed top-0' : 'sticky top-0'}`}>

            <header className="max-w-[1380px] px-4 mx-auto flex justify-between items-center w-full relative z-50">
                {/* Logo Section */}
                <div className="relative z-50 w-28 md:w-32 lg:w-36 h-auto flex-shrink-0">
                    <Link href="/">
                        <div className={`absolute top-0 left-0 transition-opacity duration-500 ease-in-out ${open ? 'opacity-0' : 'opacity-100'}`}>
                            <Image src={LightLogo} alt="Logo" priority className="w-full h-auto" />
                        </div>
                        <div className={`absolute top-0 left-0 transition-opacity duration-500 ease-in-out ${open ? 'opacity-100' : 'opacity-0'}`}>
                            <Image src={DarkLogo} alt="Logo" priority className="w-full h-auto" />
                        </div>
                        {/* Invisible placeholder to maintain width */}
                        <Image src={LightLogo} alt="Spacer" className="w-full h-auto opacity-0 pointer-events-none" />
                    </Link>
                </div>

                {/* Actions Section */}
                <div className="flex items-center gap-3 md:gap-6 relative z-50">
                    {/* Strategy Button - Hidden on mobile to prevent layout overflow */}
                    <a
                        href="https://calendly.com/teamorbillo/30min?back=1&month=2025-11"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`hidden md:block transition-all duration-300 ${open ? 'opacity-0 pointer-events-none translate-x-10' : 'opacity-100 translate-x-0'}`}
                    >
                        <button className="py-2.5 px-5 lg:py-[14px] lg:px-[28px] rounded-full border border-white outfit text-white hover:bg-[#C9FF90] hover:border-[#C9FF90] hover:text-[#17241F] transition duration-300 cursor-pointer text-xs lg:text-sm whitespace-nowrap">
                            Book A Free Strategy Call
                        </button>
                    </a>

                    {/* Hamburger Menu */}
                    <button onClick={handleOpen} className="relative z-50 flex items-center justify-center p-1">
                        <span className={`block transition-colors duration-500 ${open ? 'rotate-90 text-[#17241F]' : 'text-white'}`}>
                            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer w-9 h-9 md:w-11 md:h-11 lg:w-12 lg:h-12">
                                <path d="M4 12C4 11.4696 4.21071 10.9609 4.58579 10.5858C4.96086 10.2107 5.46957 10 6 10H42C42.5304 10 43.0391 10.2107 43.4142 10.5858C43.7893 10.9609 44 11.4696 44 12C44 12.5304 43.7893 13.0391 43.4142 13.4142C43.0391 13.7893 42.5304 14 42 14H6C5.46957 14 4.96086 13.7893 4.58579 13.4142C4.21071 13.0391 4 12.5304 4 12ZM4 24.064C4 23.5336 4.21071 23.0249 4.58579 22.6498C4.96086 22.2747 5.46957 22.064 6 22.064H42C42.5304 22.064 43.0391 22.2747 43.4142 22.6498C43.7893 23.0249 44 23.5336 44 24.064C44 24.5944 43.7893 25.1031 43.4142 25.4782C43.0391 25.8533 42.5304 26.064 42 26.064H6C5.46957 26.064 4.96086 25.8533 4.58579 25.4782C4.21071 25.1031 4 24.5944 4 24.064ZM6 34.13C5.46957 34.13 4.96086 34.3407 4.58579 34.7158C4.21071 35.0909 4 35.5996 4 36.13C4 36.6604 4.21071 37.1691 4.58579 37.5442C4.96086 37.9193 5.46957 38.13 6 38.13H42C42.5304 38.13 43.0391 37.9193 43.4142 37.5442C43.7893 37.1691 44 36.6604 44 36.13C44 35.5996 43.7893 35.0909 43.4142 34.7158C43.0391 34.3407 42.5304 34.13 42 34.13H6Z" fill="currentColor" />
                            </svg>
                        </span>
                    </button>
                </div>
            </header>

            {/* Menu Overlay */}
            <section
                className={`fixed inset-0 bg-[#E5FFCA] h-full w-full z-40 transition-transform duration-500 ease-in-out ${open ? 'translate-y-0' : '-translate-y-full'}`}
            >
                {/* Scrollable Container */}
                <div className="w-full h-full overflow-y-auto">
                    <div className="max-w-[1380px] w-full mx-auto px-4 min-h-full flex flex-col justify-end lg:justify-center pt-20 md:pt-28 lg:pt-36 pb-8">

                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-16 lg:gap-4">

                            {/* LEFT COLUMN: Info & Buttons */}
                            <div className="w-full lg:w-1/2 flex flex-col space-y-4 md:space-y-6 lg:pr-16 order-2 lg:order-1">
                                <p className="text-[#17241F] reloceta text-2xl lg:text-3xl max-w-[400px] md:max-w-[500px]">
                                    Tell us about your project, goals, and timeline and our team will get back to you{' '}
                                    <span className="text-[#02403A] underline decoration-[#02403A] decoration-2 underline-offset-3 md:underline-offset-4">
                                        within 24 hours.
                                    </span>
                                </p>

                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 w-full">
                                    <button className="w-full sm:w-auto bg-[#02403A] text-[#C9FF90] hover:bg-[#C9FF90] hover:text-[#02403A] transition duration-300 px-4 py-2 md:px-12 md:py-3 rounded-full outfit text-base md:text-lg font-medium">
                                        Contact us
                                    </button>
                                    <a
                                        href="https://wa.me/8801711252085"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto"
                                    >
                                        <button className='w-full sm:w-auto px-3 py-2 md:px-5 md:py-3 flex items-center justify-center sm:justify-start gap-2.5 outfit text-base md:text-lg cursor-pointer text-[#16332F] hover:bg-[#16332F]/10 rounded-full transition duration-300'>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                                                <path d="M17.1303 14.2326C16.8453 14.0976 15.4803 13.4226 15.2253 13.3176C14.9703 13.2126 14.7903 13.1826 14.5953 13.4676C14.4003 13.7526 13.8753 14.3676 13.7103 14.5626C13.5453 14.7576 13.3953 14.7726 13.1103 14.5626C12.2913 14.2349 11.5352 13.768 10.8753 13.1826C10.2784 12.6189 9.77242 11.9662 9.37534 11.2476C9.21034 10.9776 9.37534 10.8276 9.49534 10.6776C9.61534 10.5276 9.76534 10.3626 9.91534 10.1976C10.0249 10.0548 10.1156 9.89854 10.1853 9.73261C10.2225 9.65541 10.2419 9.57082 10.2419 9.48511C10.2419 9.39941 10.2225 9.31481 10.1853 9.23761C10.1853 9.10261 9.55534 7.73761 9.31534 7.18261C9.07534 6.62761 8.86534 6.70261 8.70034 6.70261H8.10034C7.81452 6.71376 7.54479 6.83783 7.35034 7.04761C7.03648 7.34712 6.78786 7.70823 6.62009 8.10832C6.45231 8.5084 6.36899 8.93882 6.37534 9.37261C6.45295 10.4374 6.84444 11.4553 7.50034 12.2976C8.70436 14.0887 10.3533 15.536 12.2853 16.4976C12.9453 16.7826 13.4553 16.9476 13.8603 17.0826C14.4288 17.2562 15.0303 17.2922 15.6153 17.1876C16.004 17.1088 16.3723 16.9509 16.6974 16.7239C17.0225 16.4968 17.2975 16.2054 17.5053 15.8676C17.6783 15.4505 17.7353 14.9944 17.6703 14.5476C17.5953 14.4426 17.4153 14.3676 17.1303 14.2326Z" fill="#16332F" />
                                                <path d="M19.9348 4.02038C18.8974 2.97321 17.6608 2.14437 16.298 1.58275C14.9352 1.02114 13.4737 0.738116 11.9998 0.750382C10.0472 0.7606 8.1315 1.28293 6.44398 2.2652C4.75646 3.24748 3.35619 4.65532 2.38302 6.34811C1.40986 8.0409 0.89786 9.95939 0.898166 11.912C0.898472 13.8646 1.41107 15.7829 2.38477 17.4754L0.884766 23.2504L6.79477 21.7504C8.42862 22.6394 10.2597 23.1037 12.1198 23.1004H11.9998C14.2166 23.1148 16.3876 22.4687 18.2358 21.2444C20.084 20.02 21.5256 18.273 22.3769 16.226C23.2282 14.1791 23.4505 11.9249 23.0156 9.7511C22.5806 7.57726 21.5081 5.58222 19.9348 4.02038ZM11.9998 21.1804C10.3354 21.1832 8.70176 20.732 7.27477 19.8754L6.94477 19.6804L3.43477 20.5954L4.36477 17.1754L4.15477 16.8304C2.9568 14.9011 2.50868 12.5993 2.89544 10.3615C3.28219 8.12375 4.47691 6.10581 6.25291 4.69056C8.02892 3.27531 10.2626 2.56121 12.5303 2.68376C14.7979 2.80631 16.9416 3.75697 18.5548 5.35538C19.4196 6.21322 20.105 7.23459 20.5711 8.35999C21.0373 9.48538 21.2747 10.6923 21.2698 11.9104C21.2658 14.3677 20.2879 16.7233 18.5503 18.4609C16.8127 20.1985 14.4571 21.1764 11.9998 21.1804Z" fill="#16332F" />
                                            </svg>
                                            Chat Realtime
                                        </button>
                                    </a>
                                </div>

                                <div className="flex items-center gap-3 pt-3">
                                    <div className="flex items-center gap-3">
                                        {SOCIAL_LINKS.map(({ icon: Icon, url }, idx) => (
                                            <a
                                                key={idx}
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-9 h-9 border border-[#17241F] rounded-full flex items-center justify-center text-[#17241F] hover:bg-[#17241F] hover:text-[#E5FFCA] transition-all duration-300"
                                            >
                                                <Icon size={16} />
                                            </a>
                                        ))}
                                    </div>

                                </div>
                            </div>

                            {/* RIGHT COLUMN: Navigation */}
                            <div className="w-full lg:w-1/3 flex flex-col items-start space-y-2 md:space-y-4 order-1 lg:order-2">
                                <Link onClick={() => setOpen(false)} href="/" className="text-2xl lg:text-3xl text-[#17241F] hover:opacity-70 transition-opacity font-medium px-4">
                                    Home
                                </Link>
                                <Link onClick={() => setOpen(false)} href="/about" className="text-2xl lg:text-3xl text-[#17241F] hover:opacity-70 transition-opacity font-medium px-4">
                                    About us
                                </Link>

                                {/* Accordion Item */}
                                <div className="w-full">
                                    <button
                                        onClick={() => setServicesOpen(!servicesOpen)}
                                        className="flex items-center gap-4 w-full text-2xl lg:text-3xl text-[#16332F] hover:opacity-70 cursor-pointer font-medium group px-4"
                                    >
                                        <span>Services</span>
                                        <ChevronsDown
                                            className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}
                                            size={20}
                                        />
                                    </button>

                                    <div className={`grid transition-all duration-300 ease-in-out overflow-hidden ${servicesOpen ? 'grid-rows-[1fr] opacity-100 mt-1.5 md:mt-2.5' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden flex flex-col border-[#16332F]/10">
                                            {['Branding & Identity', 'UI/UX Design', 'Wordpress Development', 'Social Media Design'].map((item, i) => (
                                                <Link
                                                    key={i}
                                                    href="#"
                                                    onClick={() => setOpen(false)}
                                                    className="py-2 text-sm md:py-2.5 md:text-base text-[#16332F]/72 hover:text-[#16332F] border-b border-[#000000]/15 last:border-none transition-colors pl-4"
                                                >
                                                    {item}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <Link onClick={() => setOpen(false)} href="/case-studies" className="text-2xl lg:text-3xl text-[#16332F] hover:opacity-70 transition-opacity font-medium px-4">
                                    Case Studies
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Header;