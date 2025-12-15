import { FaBehance, FaDribbble, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from 'next/image';
import React from 'react';
import CTAbg from '../assets/FooterCTAbg.svg';
import Logo from '../assets/Logo/LightLogo.svg';
import FooterEffect from '../assets/FooterEffect.png';
import FooterLogo from '../assets/FooterLogo.png';
import FooterLogo2 from '../assets/FooterLogo2.png';
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const SOCIAL_LINKS = [
    { icon: FaLinkedin, url: "https://www.linkedin.com/company/teamorbillo/posts/?feedView=all" },
    { icon: FaTwitter, url: "https://x.com/TeamOrbillo" },
    { icon: FaDribbble, url: "https://dribbble.com/teamorbillo" },
    { icon: FaBehance, url: "https://www.behance.net/teamorbillo" },
];

const Footer = () => {
    return (
        <div className="relative overflow-visible lg:mt-0 mt-[200px]">

            {/* CTA Section */}
            <section className='w-[95%] md:w-[90%] max-w-[1380px] max-h-[400px] mx-auto lg:rounded-[64px] rounded-4xl overflow-hidden absolute lg:-top-[200px] md:-top-[430px] -top-[350px] left-1/2 -translate-x-1/2 z-50 px-4'>

                <div className="absolute inset-0 -z-50">
                    <Image
                        src={CTAbg}
                        alt="Footer CTA background"
                        className="w-full h-full object-cover"
                        priority
                    />
                </div>

                {/* TEXT */}
                <div className="md:py-16 pt-12 pb-8 lg:px-40 md:px-12 px-6">
                    <h1 className="max-w-[650px] md:text-left text-center md:text-5xl sm:text-4xl text-2xl max-[350px]:text-xl reloceta text-[#07302C]">
                        Ready to turn your business into a digital success story?
                    </h1>
                    <div className="flex md:flex-row flex-col items-center gap-3 md:mt-20 mt-6 z-50">
                        <button className="md:py-4 py-3 px-8 text-white rounded-full bg-[linear-gradient(-45deg,#169689_34%,#002A15_88%)] hover:bg-white hover:bg-none hover:text-[#17241F] transition-all duration-300 outfit md:text-xl">
                            Book A Free Discovery Call
                        </button>

                        <a
                            href="https://wa.me/8801711252085"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='px-6 py-4 flex items-center gap-3 outfit text-xl cursor-pointer text-[#07302C] hover:bg-[#07302C]/10 rounded-full transition duration-300'
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.1303 14.2326C16.8453 14.0976 15.4803 13.4226 15.2253 13.3176C14.9703 13.2126 14.7903 13.1826 14.5953 13.4676C14.4003 13.7526 13.8753 14.3676 13.7103 14.5626C13.5453 14.7576 13.3953 14.7726 13.1103 14.5626C12.2913 14.2349 11.5352 13.768 10.8753 13.1826C10.2784 12.6189 9.77242 11.9662 9.37534 11.2476C9.21034 10.9776 9.37534 10.8276 9.49534 10.6776C9.61534 10.5276 9.76534 10.3626 9.91534 10.1976C10.0249 10.0548 10.1156 9.89854 10.1853 9.73261C10.2225 9.65541 10.2419 9.57082 10.2419 9.48511C10.2419 9.39941 10.2225 9.31481 10.1853 9.23761C10.1853 9.10261 9.55534 7.73761 9.31534 7.18261C9.07534 6.62761 8.86534 6.70261 8.70034 6.70261H8.10034C7.81452 6.71376 7.54479 6.83783 7.35034 7.04761C7.03648 7.34712 6.78786 7.70823 6.62009 8.10832C6.45231 8.5084 6.36899 8.93882 6.37534 9.37261C6.45295 10.4374 6.84444 11.4553 7.50034 12.2976C8.70436 14.0887 10.3533 15.536 12.2853 16.4976C12.9453 16.7826 13.4553 16.9476 13.8603 17.0826C14.4288 17.2562 15.0303 17.2922 15.6153 17.1876C16.004 17.1088 16.3723 16.9509 16.6974 16.7239C17.0225 16.4968 17.2975 16.2054 17.5053 15.8676C17.6783 15.4505 17.7353 14.9944 17.6703 14.5476C17.5953 14.4426 17.4153 14.3676 17.1303 14.2326Z" fill="#07302C" />
                                <path d="M19.9348 4.02038C18.8974 2.97321 17.6608 2.14437 16.298 1.58275C14.9352 1.02114 13.4737 0.738116 11.9998 0.750382C10.0472 0.7606 8.1315 1.28293 6.44398 2.2652C4.75646 3.24748 3.35619 4.65532 2.38302 6.34811C1.40986 8.0409 0.89786 9.95939 0.898166 11.912C0.898472 13.8646 1.41107 15.7829 2.38477 17.4754L0.884766 23.2504L6.79477 21.7504C8.42862 22.6394 10.2597 23.1037 12.1198 23.1004H11.9998C14.2166 23.1148 16.3876 22.4687 18.2358 21.2444C20.084 20.02 21.5256 18.273 22.3769 16.226C23.2282 14.1791 23.4505 11.9249 23.0156 9.7511C22.5806 7.57726 21.5081 5.58222 19.9348 4.02038ZM11.9998 21.1804C10.3354 21.1832 8.70176 20.732 7.27477 19.8754L6.94477 19.6804L3.43477 20.5954L4.36477 17.1754L4.15477 16.8304C2.9568 14.9011 2.50868 12.5993 2.89544 10.3615C3.28219 8.12375 4.47691 6.10581 6.25291 4.69056C8.02892 3.27531 10.2626 2.56121 12.5303 2.68376C14.7979 2.80631 16.9416 3.75697 18.5548 5.35538C19.4196 6.21322 20.105 7.23459 20.5711 8.35999C21.0373 9.48538 21.2747 10.6923 21.2698 11.9104C21.2658 14.3677 20.2879 16.7233 18.5503 18.4609C16.8127 20.1985 14.4571 21.1764 11.9998 21.1804Z" fill="#07302C" />
                            </svg>
                            Chat Realtime
                        </a>
                    </div>
                </div>

            </section>

            {/* Footer Body */}
            <div className="bg-[#07302C] 2xl:rounded-t-[100px] xl:rounded-t-[60px] lg:rounded-t-[100px] overflow-hidden z-50">
                <section className='mx-auto text-white 2xl:pt-[320px] lg:py-[250px] pt-20 pb-30 relative z-20 overflow-hidden 2xl:h-[1020px] xl:h-[800px] md:h-[1000px] h-[1100px]'>

                    <div className="absolute instet-0 bottom-0 -z-50 w-full">
                        <Image src={FooterEffect} />
                    </div>

                    <div className="w-full max-w-[1920px] mx-auto">
                        <div className="hidden lg:flex absolute instet-0 bottom-0 left-1/2 -translate-x-1/2 w-full -z-50">
                            <Image src={FooterLogo} />
                        </div>
                        <div className="lg:hidden flex absolute instet-0 bottom-5 left-1/2 -translate-x-1/2 w-full -z-50">
                            <Image src={FooterLogo2} />
                        </div>
                    </div>

                    <div className="max-w-[1380px] mx-auto flex lg:flex-row flex-col items-start justify-between 2xl:px-4 md:px-12 px-4 z-50 lg:gap-20">

                        {/* Logo Section */}
                        <div className="w-full lg:w-1/4 flex flex-col max-lg:items-center mb-10 md:mb-24">
                            <Image src={Logo} alt='Logo' />

                            <p className='max-w-[300px] text-white/79 outfit max-lg:text-center text-lg mt-6'>
                                The digital growth partner you have always been looking for!
                            </p>

                            <div className="flex items-center gap-4 mt-14">
                                {SOCIAL_LINKS.map(({ icon: Icon, url }, idx) => (
                                    <a
                                        key={idx}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 border-2 border-[#FFFFFF] rounded-full flex items-center justify-center text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#17241F] transition-all duration-300"
                                    >
                                        <Icon size={16} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Services + Quick Links wrapper for small screen */}
                        <div className="lg:w-3/4 w-full bg--500 flex flex-wrap space-y-10 flex-row justify-between mt-10 md:mt-0">

                            {/* Services */}
                            <div>
                                <p className="outfit text-white/55 tracking-[2.7px] font-bold text-lg uppercase mb-6">
                                    Services
                                </p>
                                <div className="flex flex-col gap-4 text-white/85 outfit text-lg">
                                    <span className="hover:text-white hover:scale-105 transition-all duration-300">Brand Design</span>
                                    <span className="hover:text-white hover:scale-105 transition-all duration-300">UI/UX Design</span>
                                    <span className="hover:text-white hover:scale-105 transition-all duration-300">Social Media Design</span>
                                    <span className="hover:text-white hover:scale-105 transition-all duration-300">Web Development</span>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div>
                                <p className="outfit text-white/55 tracking-[2.7px] font-bold text-lg uppercase mb-6">
                                    Quick Links
                                </p>
                                <div className="flex flex-col gap-4 text-white/85 outfit text-lg">
                                    <Link href={'/'} className="cursor-pointer hover:text-white hover:scale-105 transition-all duration-300">Home</Link>
                                    <Link href={'/about'} className="cursor-pointer hover:text-white hover:scale-105 transition-all duration-300">About Us</Link>
                                    <Link href={'/works'} className="cursor-pointer hover:text-white hover:scale-105 transition-all duration-300">Works</Link>
                                    <Link href={'/testimonials'} className="cursor-pointer hover:text-white hover:scale-105 transition-all duration-300">Testimonials</Link>
                                </div>
                            </div>

                            <div>
                                <p className="outfit text-white/55 tracking-[2.7px] font-bold text-lg uppercase mb-6">
                                    Contacts
                                </p>
                                <div className="flex flex-col gap-4 text-white/85 outfit text-lg">
                                    <span className="flex items-center gap-2"><Mail size={20} /> hello@orbillo.com</span>
                                    <span className="flex items-center gap-2"><Phone size={20} /> +880 1XXX-XXXXXX</span>
                                    <span className="flex items-start gap-2 max-w-[450px]"><MapPin size={20} className="mt-1" /> <span>Dinajpur, Bangladesh <p className="text-[#336661]">(Available for meetings)</p></span></span>
                                    <span className="flex items-start gap-2 max-w-[450px]"><Clock size={20} className="mt-1" /> <span>Sun – Thu | 10 AM – 7 PM <p className="opacity-60">Fri – Sat | Closed</p></span></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full">
                        <div className="w-full flex items-center justify-between py-1 bg-[#062B28]/30 backdrop-blur-md">
                            <div className="max-w-[1350px] w-full mx-auto outfit text-white/65 flex items-center justify-between max-md:justify-center px-6">
                                <p>All rights reserved © 2025 Orbillo.com</p>
                                <p className="space-x-6 hidden md:flex">
                                    <span>Terms & Conditions</span>
                                    <span>Privacy Policy</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};


export default Footer;