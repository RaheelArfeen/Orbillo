import Image from 'next/image';
import React from 'react';
import Marquee from "react-fast-marquee";
import user1 from '@/assets/user1.webp'
import user2 from '@/assets/user2.webp'
import user3 from '@/assets/user3.webp'

const FeatureItem = ({ text }) => (
    <p className="flex items-center gap-2.5 text-sm md:text-lg">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 size-4 md:size-5">
            <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10" stroke="#559B36" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M8 12.5C8 12.5 9.5 12.5 11.5 16C11.5 16 17.0588 6.83333 22 5" stroke="#559B36" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        {text}
    </p>
);

const HeroSection = () => {
    return (
        <div className="h-screen relative overflow-hidden flex items-center justify-center bg-[#07302C]">
            {/* Dark Overlay */}
            <div className='absolute inset-0 bottom-0 bg-linear-to-b from-transparent to-[#11180B]'></div>

            {/* Top lighting */}
            <div className='absolute -top-10 -translate-y-1/2 h-[450px] w-[600px] bg-[#D6F55B]/33 rounded-full blur-[150px]'></div>

            <section className="relative z-20 text-center pt-20 md:pt-0 mb-20 px-4 flex flex-col items-center justify-center">
                {/* Social Proof Badge */}
                <div className="flex flex-row items-center gap-4 mb-8">
                    <div className="flex -space-x-3 md:-space-x-4">
                        <Image className="size-10 md:size-11 rounded-full border-2 border-[#17241F]" src={user1} alt="Client" />
                        <Image className="size-10 md:size-11 rounded-full border-2 border-[#17241F]" src={user2} alt="Client" />
                        <Image className="size-10 md:size-11 rounded-full border-2 border-[#17241F]" src={user3} alt="Client" />
                    </div>

                    {/* Scrolling Badge */}
                    <div className="relative py-2 bg-gradient-to-r from-[#305939] to-[#173324] rounded-full max-w-[230px] overflow-hidden group">
                        {/* Custom Gradient Border Overlay */}
                        <div
                            className="absolute inset-0 rounded-full p-[1px] z-50 pointer-events-none"
                            style={{
                                background: 'linear-gradient(to right, #B9FF8D, #233F26, #B9FF8D)',
                                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                WebkitMaskComposite: 'destination-out',
                                maskComposite: 'exclude',
                            }}
                        />

                        {/* Marquee Content */}
                        <Marquee gradient={false} speed={35} pauseOnHover={true}>
                            <span className="relative z-10 bg-gradient-to-r from-[#B4F98A] to-[#173324] bg-clip-text text-transparent md:text-lg font-medium outfit whitespace-nowrap pr-10">
                                82% retention for 200+ clients
                            </span>
                        </Marquee>

                        <div className="absolute inset-0 bg-[#B4F98A]/10 blur-xl pointer-events-none"></div>
                    </div>
                </div>

                {/* Main Heading */}
                <h1 className="text-[36px] sm:text-[48px] md:text-[64px] font-medium text-white bricolage max-w-[900px] leading-[1.1] md:leading-[70px] tracking-tight text-center">
                    Reliable Design Partner For Your {''}
                    <span className="playfair italic text-4xl sm:text-4xl md:text-6xl">Business Growth</span>
                </h1>

                {/* Subtext */}
                <p className="text-white/80 bricolage text-lg md:text-[22px] max-w-[700px] text-center mt-6 px-2">
                    From brand identity to product UX, we design systems that help businesses grow, convert and scale with confidence.
                </p>

                {/* CTA Button */}
                <div className='mt-10 px-10'>
                    <button className='md:py-4 py-3 px-10 font-medium rounded-full bg-[#C9FF90] text-[#17241F] hover:bg-[#17241F] hover:text-[#C9FF90] transition duration-300 border-b border-[#C9FF90] hover:border-[#4d6641] outfit md:text-xl text-base  max-[350px]:text-xs cursor-pointer'>
                        <a href="https://calendly.com/teamorbillo/30min" target="_blank" rel="noopener noreferrer">Start Your Project</a>
                    </button>
                </div>

                {/* Feature List */}
                <div className="outfit text-white/80 flex flex-row items-center gap-6 md:gap-8 md:mt-12 mt-8">
                    <FeatureItem text="Free Site Audit" />
                    <FeatureItem text="Milestone Payments" />
                    <FeatureItem text="Ongoing Support" />
                </div>
            </section>
        </div>
    );
};

export default HeroSection;