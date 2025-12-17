"use client"

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import LetsTalkBg from '../../../assets/LetsTalkBg.png';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaBehance, FaCaretDown, FaDribbble, FaLinkedin, FaTwitter } from 'react-icons/fa';

const contactInfo = [
    {
        icon: Mail,
        text: 'hello@orbillo.com',
    },
    {
        icon: Phone,
        text: '+880 1XXX-XXXXXX',
    },
    {
        icon: MapPin,
        text: 'Dinajpur, Bangladesh',
    },
];

const SOCIAL_LINKS = [
    { icon: FaLinkedin, url: "https://www.linkedin.com/company/teamorbillo/posts/?feedView=all" },
    { icon: FaTwitter, url: "https://x.com/TeamOrbillo" },
    { icon: FaDribbble, url: "https://dribbble.com/teamorbillo" },
    { icon: FaBehance, url: "https://www.behance.net/teamorbillo" },
];

const SERVICE_OPTIONS = [
    "Brand Design",
    "UI/UX Design",
    "Social Media Design",
    "Web Development"
];

const LetsTalk = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedService, setSelectedService] = useState('');
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='relative w-full overflow-hidden'>
            <div className='absolute top inset-0 -z-10 lg:rounded-t-[100px] overflow-hidden'>
                <Image
                    src={LetsTalkBg}
                    alt="Background"
                    className='w-full h-full object-cover'
                />
            </div>

            <section className='max-w-[1380px] mx-auto px-5 md:px-10 py-12 md:py-25'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start'>
                    <div className=''>
                        <p className='outfit uppercase text-[#FFFFFF]/65 font-bold text-sm md:text-lg tracking-[2.7px] mb-8 md:mb-12'>
                            Let’s Talk!
                        </p>
                        <div className='w-full md:max-w-[500px] mb-12'>
                            <p className='recoleta text-xl md:text-2xl xl:text-3xl leading-[140%] tracking-[-0.2px] text-[#FDFFF5]'>
                                Tell us about your project, goals, and timeline our team will get back to you <span className='text-[#C9FF90] underline decoration-[#C9FF90] decoration-3 underline-offset-5'>within 24 hours.</span>
                            </p>
                        </div>

                        <div className='space-y-4'>
                            {contactInfo.map(({ icon: Icon, text }, index) => (
                                <div key={index} className="flex items-center gap-6">
                                    <Icon size={20} className='text-[#C9FF90]' />
                                    <span className='text-white outfit text-lg leading-[167%]'>{text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 mt-14">
                            {SOCIAL_LINKS.map(({ icon: Icon, url }, idx) => (
                                <a
                                    key={idx}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 border-2 border-[#C9FF90] rounded-full flex items-center justify-center text-[#C9FF90] hover:bg-[#C9FF90] hover:text-[#17241F] transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="p-[1.15px] rounded-2xl bg-linear-230 from-[#C9FF90]/70 to-[#062B28] shadow-[10px_-6px_60.3px_rgba(201,255,144,0.24)]">
                        <form className="w-full bg-[#143329]/95 backdrop-blur-md rounded-2xl p-6 md:p-10">
                            <div className="space-y-8">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Your Name *"
                                        required
                                        className='w-full bg-transparent border-b border-[#FFFFFF]/20 py-3 text-white placeholder-[#FFFFFF]/40 focus:outline-none focus:border-[#C9FF90] transition-colors outfit text-lg'
                                    />
                                </div>

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                                    <input
                                        type="email"
                                        placeholder="Your Email *"
                                        required
                                        className='w-full bg-transparent border-b border-[#FFFFFF]/20 py-3 text-white placeholder-[#FFFFFF]/40 focus:outline-none focus:border-[#C9FF90] transition-colors outfit text-lg'
                                    />
                                    <input
                                        type="text"
                                        placeholder="Your Whatsapp Number *"
                                        required
                                        className='w-full bg-transparent border-b border-[#FFFFFF]/20 py-3 text-white placeholder-[#FFFFFF]/40 focus:outline-none focus:border-[#C9FF90] transition-colors outfit text-lg'
                                    />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your Company Name *"
                                        required
                                        className='w-full bg-transparent border-b border-[#FFFFFF]/20 py-3 text-white placeholder-[#FFFFFF]/40 focus:outline-none focus:border-[#C9FF90] transition-colors outfit text-lg'
                                    />
                                </div>

                                <div className='relative' ref={dropdownRef}>
                                    <div
                                        onClick={() => setIsOpen(!isOpen)}
                                        className={`w-full bg-transparent border-b pr-6 ${isOpen ? 'border-[#C9FF90]' : 'border-[#FFFFFF]/20'} py-3 cursor-pointer flex justify-between items-center transition-colors group`}
                                    >
                                        <span className={`outfit text-lg ${selectedService ? 'text-white' : 'text-[#FFFFFF]/40'}`}>
                                            {selectedService || 'Choose Service *'}
                                        </span>
                                        <FaCaretDown
                                            className={`text-[#FFFFFF]/40 transition-all duration-300 ${isOpen ? 'rotate-180 text-[#C9FF90]' : 'group-hover:text-[#C9FF90]'}`}
                                            size={16}
                                        />
                                    </div>

                                    <div className={`absolute top-full left-0 w-full mt-2 bg-[#0A1F18] border border-[#FFFFFF]/10 rounded-lg overflow-hidden transition-all duration-300 z-20 origin-top shadow-xl ${isOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-0 -translate-y-2 pointer-events-none'}`}>
                                        {SERVICE_OPTIONS.map((option, idx) => (
                                            <div
                                                key={idx}
                                                onClick={() => {
                                                    setSelectedService(option);
                                                    setIsOpen(false);
                                                }}
                                                className="px-4 py-3 text-[#FFFFFF]/80 hover:text-[#17241F] hover:bg-[#C9FF90] cursor-pointer outfit text-lg transition-colors duration-200"
                                            >
                                                {option}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <textarea
                                        placeholder="Your Message *"
                                        required
                                        rows={3}
                                        className='w-full bg-transparent border-b border-[#FFFFFF]/20 py-3 text-white placeholder-[#FFFFFF]/40 focus:outline-none focus:border-[#C9FF90] transition-colors outfit text-lg resize-none'
                                    ></textarea>
                                </div>

                                <div className='pt-4'>
                                    <button
                                        type="submit"
                                        className='bg-[#C9FF90] hover:bg-white text-[#17241F] text-lg py-2 px-8 rounded-full transition-all duration-300 outfit cursor-pointer'
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>

                </div>
            </section >
        </div >
    );
};

export default LetsTalk;