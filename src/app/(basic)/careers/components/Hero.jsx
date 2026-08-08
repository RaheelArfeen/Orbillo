import Image from 'next/image';
import React from 'react';
import HeroBg from "@/assets/Hero.svg"

const Hero = () => {
    return (
        <div className="relative overflow-hidden flex items-center justify-center">
            {/* Dark Overlay */}
            <div className='absolute inset-0 z-15 bg-linear-to-b from-transparent to-[#11180B]/50'></div>

            {/* Green Overlay */}
            <div className="absolute inset-0 z-10 bg-[#07302C] mix-blend-darken"></div>

            {/* Top lighting */}
            <div className='absolute -top-10 -translate-y-1/2 h-[450px] w-[600px] bg-[#D6F55B]/33 rounded-full blur-[150px] z-20'></div>

            {/* Background Video */}
            <div className="absolute inset-0 z-10">
                <Image src={HeroBg} className='opacity-15 object-cover w-full h-full' />
            </div>

            <section className='z-20 text-center py-30 pt-50 mb-20 px-4 flex flex-col items-center justify-center gap-4'>
                <p className='outfit uppercase text-[#B4BFBE] font-semibold text-lg tracking-[2.7px]'>Careers</p>
                <h1 className="text-[32px] sm:text-[40px] md:text-[50px] font-semibold text-[#FFFFFF] bricolage leading-[1.2] md:leading-[60px] tracking-tight">
                    Build Your Career With Us
                </h1>

                <p className='text-center outfit text-lg md:text-2xl text-[#CDD5D4] max-w-[600px]'>We seek passionate, creative people to join our team. If you love learning and meaningful work, this is for you.</p>
            </section>
        </div>
    );
};

export default Hero;