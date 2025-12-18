"use client"

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import OurWorkBg from './Image/OurWork.png';
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

const OurWork = () => {
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
                    src={OurWorkBg}
                    alt="Background"
                    className='w-full h-full object-cover'
                />
            </div>

            <section className='max-w-[1380px] mx-auto px-5 md:px-10 py-12 md:py-25'>
                <div className='space-y-8 text-center w-full flex flex-col items-center mb-12'>
                    <p className='uppercase outfit text-sm lg:text-lg font-bold text-[#E3E3E3]/55 tracking-[2.7px]'>
                        Our Work
                    </p>
                    <h3 className='text-[28px] md:text-[40px] md:max-w-[700px] max-w-[500px] recoleta text-white leading-tight'>
                        <p>Everything You Need for a Consistent, Professional Brand</p>
                    </h3>
                </div>

                <div className='grid md:grid-cols-3 gap-6'>
                    <img className='rounded-lg' src="https://i.ibb.co.com/b5C4jw0P/image.png" alt="" />
                    <img className='rounded-lg' src="https://i.ibb.co.com/C3fy6Bjh/image.png" alt="" />
                    <img className='rounded-lg' src="https://i.ibb.co.com/DDDYzw2G/image.png" alt="" />
                    <img className='rounded-lg' src="https://i.ibb.co.com/8nb5gsyy/image.png" alt="" />
                    <img className='rounded-lg' src="https://i.ibb.co.com/FbBMx9TT/image.png" alt="" />
                    <img className='rounded-lg' src="https://i.ibb.co.com/7d8vbQXX/image.png" alt="" />
                </div>

                <div className='flex items-center justify-center w-full mt-15'>
                    <button className='md:py-4 py-3 px-10 rounded-full bg-[#C9FF90] text-[#17241F] hover:bg-[#17241F] hover:text-[#C9FF90] transition duration-300 border-b border-[#C9FF90] hover:border-[#4d6641] outfit md:text-xl text-base  max-[350px]:text-xs cursor-pointer'>
                        <a href="https://calendly.com/teamorbillo/30min" target="_blank" rel="noopener noreferrer">Schedule A Meeting</a>
                    </button>
                </div>
            </section >
        </div >
    );
};

export default OurWork;