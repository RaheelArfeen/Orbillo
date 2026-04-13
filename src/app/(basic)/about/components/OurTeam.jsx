import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import ArafatHossain from '../TeamMembers/ArafatHossain.avif'
import Image from 'next/image';
import RahatulIslam from '../TeamMembers/RahatulIslam.avif'
import MohiulIslam from '../TeamMembers/MohiulIslam.avif'
import RakibulIslam from '../TeamMembers/RakibulIslam.avif'

const Members = [
    {
        name: 'Arafat Hossain',
        role: 'Product Designer',
        imageSrc: ArafatHossain,
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
        imageSrc: RahatulIslam,
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
        imageSrc: MohiulIslam,
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
        imageSrc: RakibulIslam,
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
        <div className='relative w-full bg-[#07302C] overflow-hidden'>
            {/* Marquee Section */}
            <div className="w-full bg-[#5ba32b] py-4 md:py-6 border-y border-[#C9FF90]/30 relative z-30">
                <Marquee autoFill={true} pauseOnHover={false} speed={80} className="overflow-hidden">
                    <div className="flex items-center">
                        <span className="text-white text-3xl md:text-5xl lg:text-6xl font-serif mx-4 lg:mx-10 tracking-tight bricolage">
                            Our Team
                        </span>
                        <span className="text-white text-3xl md:text-4xl lg:text-5xl font-black">
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.0749 12.1C4.94157 12.1 3.91657 11.8334 2.9999 11.3C2.08324 10.75 1.3499 10.025 0.799903 9.12502C0.266569 8.20836 -9.74834e-05 7.18336 -9.74834e-05 6.05002C-9.74834e-05 4.91669 0.266569 3.90002 0.799903 3.00002C1.3499 2.08336 2.08324 1.35836 2.9999 0.825023C3.91657 0.275024 4.94157 2.3663e-05 6.0749 2.3663e-05C7.19157 2.3663e-05 8.20824 0.275024 9.1249 0.825023C10.0416 1.35836 10.7666 2.08336 11.2999 3.00002C11.8332 3.90002 12.0999 4.91669 12.0999 6.05002C12.0999 7.18336 11.8332 8.20836 11.2999 9.12502C10.7666 10.025 10.0416 10.75 9.1249 11.3C8.20824 11.8334 7.19157 12.1 6.0749 12.1Z" fill="white"/>
</svg>

                        </span>
                    </div>
                </Marquee>
            </div>

            {/* Background Image */}
            <div className='absolute size-70 rounded-full -bottom-15 -left-15 blur-[150px] bg-[#C9FF90]/56'></div>
            <div className='absolute w-50 h-[1000px] rounded-full top-1/2 -translate-y-1/2 -right-15 blur-[250px] bg-[#C9FF90]/56'></div>

            <section className='max-w-[1380px] mx-auto py-12 md:pt-25 pb-48 px-5 md:px-8'>
                <div className='mb-16 md:mb-30'>
                    <div className='w-full flex flex-col'>
                        <div className='w-full max-w-[800px] mb-8'>
                            <p className='outfit uppercase text-white/55 font-bold text-sm md:text-lg tracking-[2.7px] mb-4 md:mb-8'>
                                Meet the Team
                            </p>
                            <h1 className='text-white bricolage text-3xl md:text-4xl tracking-tight max-w-[620px]'>
                                We’re a diverse team of designers, developers and marketers focused on helping your business grow.
                            </h1>
                        </div>

                        <div className='flex items-center justify-end'>
                            <h1 className=' text-2xl outfit text-[#D9D9D9] tracking-tight max-w-[700px]'>Our leadership team brings a collective 60+ years of experience, working with brands across the US, UK, and Asia.</h1>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-4'>
                    {Members.map((member, index) => (
                        <div
                            key={index}
                            className={`flex flex-col w-full group ${member.spaceTop ? 'lg:relative lg:top-16' : ''}`}
                        >
                            <div className='p-px rounded-3xl bg-linear-to-br from-[#C9FF90] via-[#09332D] to-[#C9FF90]'>
                                <div className='w-full overflow-hidden rounded-3xl shadow-lg relative bg-[#2A4341]'>
                                    <div className="w-full max-h-[500px] overflow-hidden">
                                        <Image
                                            src={member.imageSrc}
                                            alt={member.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                                        />
                                    </div>

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
                            </div>

                            <div className='mt-4 md:mt-5 px-2 flex flex-col items-end w-fit'>
                                <h2 className='bricolage font-semibold text-4xl text-white tracking-tight leading-tight'>
                                    {member.name}
                                </h2>
                                <p className='outfit text-xl text-[#B4B4B4] mt-1'>
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