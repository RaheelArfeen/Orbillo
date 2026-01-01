import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import OurTeamBg from '@/assets/OurTeamBg.png';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Members = [
    {
        name: 'Arafat Hossain',
        role: 'Product Designer',
        imageSrc: 'https://i.ibb.co.com/KcnbQbyV/image.png',
        spaceTop: false,
        socials: [
            { icon: <FaFacebookF />, link: '#' },
            { icon: <FaLinkedinIn />, link: '#' },
            { icon: <FaXTwitter />, link: '#' },
        ]
    },
    {
        name: 'Rahatul Islam',
        role: 'Product Designer',
        imageSrc: 'https://i.ibb.co.com/nNL7pb4b/image.png',
        spaceTop: true,
        socials: [
            { icon: <FaFacebookF />, link: '#' },
            { icon: <FaLinkedinIn />, link: '#' },
            { icon: <FaXTwitter />, link: '#' },
        ]
    },
    {
        name: 'Mohiul Islam',
        role: 'Product Designer',
        imageSrc: 'https://i.ibb.co.com/cXLR5g6T/svgviewer-png-output-2.png',
        spaceTop: false,
        socials: [
            { icon: <FaFacebookF />, link: '#' },
            { icon: <FaLinkedinIn />, link: '#' },
            { icon: <FaXTwitter />, link: '#' },
        ]
    },
    {
        name: 'Rakibul Islam',
        role: 'Product Designer',
        imageSrc: 'https://i.ibb.co.com/qLV7qYqT/image.png',
        spaceTop: true,
        socials: [
            { icon: <FaFacebookF />, link: '#' },
            { icon: <FaLinkedinIn />, link: '#' },
            { icon: <FaXTwitter />, link: '#' },
        ]
    },
];

const OurTeam2 = () => {
    return (
        <div className='relative w-full'>
            {/* Marquee Section */}
            <div className="w-full bg-[#5ba32b] py-4 md:py-6 border-y border-[#C9FF90]/30 relative z-30">
                <Marquee autoFill={true} pauseOnHover={false} speed={80} className="overflow-hidden">
                    <div className="flex items-center">
                        <span className="text-white text-3xl md:text-6xl font-serif mx-6 md:mx-10 tracking-wide recoleta">
                            Our Team
                        </span>
                        <span className="text-white text-3xl md:text-5xl font-black">•</span>
                    </div>
                </Marquee>
            </div>

            {/* Background Image */}
            <div className='absolute inset-0 -z-10 w-full h-full lg:rounded-b-[100px] overflow-hidden'>
                <Image src={OurTeamBg} alt="Background" className='mx-auto h-full w-full object-cover' />
            </div>

            <section className='max-w-[1380px] mx-auto py-12 md:py-25 px-5 md:px-8'>
                <div className='mb-16 md:mb-30 text-center'>
                    <div className='flex items-center justify-center w-full'>
                        <div className='w-full max-w-[800px]'>
                            <p className='outfit uppercase text-[#696969] font-bold text-sm md:text-lg tracking-[2.7px] mb-4 md:mb-7'>
                                Meet the Team
                            </p>
                            <h1 className='text-white recoleta text-3xl md:text-4xl leading-[130%] md:leading-[140%] -tracking-[1px]'>
                                We’re a diverse group of problem-solvers, designers, developers and marketers - who share one common goal: helping your business grow.
                            </h1>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4'>
                    {Members.map((member, index) => (
                        <div
                            key={index}
                            className={`flex flex-col w-full group ${member.spaceTop ? 'lg:relative lg:top-16' : ''}`}
                        >
                            <div className='w-full overflow-hidden rounded-lg shadow-lg max-h-[500px] relative'>
                                <img
                                    src={member.imageSrc}
                                    alt={member.name}
                                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none'
                                />

                                {/* Overlay */}
                                <div className='h-full w-full bg-gradient-to-b from-transparent to-black/80 absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500'></div>

                                {/* Social Icons Mapping */}
                                <div className='z-50 absolute -bottom-12 group-hover:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 transition-all duration-500'>
                                    {member.socials.map((social, idx) => (
                                        <div
                                            key={idx}
                                            style={{ transitionDelay: `${idx * 100}ms` }}
                                            className='h-10 w-10 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black text-white transition-all duration-300 cursor-pointer'
                                        >
                                            <span className='text-lg'>{social.icon}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='mt-4 md:mt-5 px-2'>
                                <h2 className='jakartaSnas font-semibold text-2xl md:text-3xl text-[#FAFDF4] -tracking-[1px] leading-tight'>
                                    {member.name}
                                </h2>
                                <p className='outfit text-lg md:text-xl text-[#559B36] mt-1'>
                                    • {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default OurTeam2;