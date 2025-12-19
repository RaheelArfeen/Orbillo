'use client'

import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee'; // Import the package
import Bg from './Image/OurWorkMarqueBg.png'; // Ensure path is correct

// DATA
const TAGS_ROW_1 = [
    'Beauty & Cosmetics', 'Fashion & Apparel', 'SaaS',
    'Non-profit Organizations', 'Branding for Startups', 'Finance',
    'Food & Beverage', 'Consulting'
];

const TAGS_ROW_2 = [
    'Beauty & Cosmetics', 'Fashion & Apparel', 'SaaS',
    'Non-profit Organizations', 'Branding for Startups', 'Finance',
    'Food & Beverage', 'Consulting'
];

const TAGS_ROW_3 = [
    'Beauty & Cosmetics', 'Fashion & Apparel', 'SaaS',
    'Non-profit Organizations', 'Branding for Startups', 'Finance',
    'Food & Beverage', 'Consulting'
];

// --- TAG COMPONENT (Kept your styling) ---
const Tag = ({ text }) => (
    <div className="mx-1 sm:mx-2 shrink-0 bg-linear-200 from-[#C9FF90]/70 to-[#062B28] rounded-full p-px hover:bg-none">
        <div
            className={`
                group cursor-pointer rounded-full p-px border-2 border-transparent hover:border-[#C9FF90]
                inline-flex items-center justify-center 
                px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-4  bg-[#02403A] text-[#C9FF90] backdrop-blur-sm
                text-sm sm:text-base md:text-lg lg:text-2xl whitespace-nowrap outfit 
                hover:bg-transparent hover:text-[#C9FF90]
            `}
        >
            {text}
        </div>
    </div>
);

// --- OPTIMIZED ROW WRAPPER ---
// mapped direction and speed props to the package
const MarqueeRow = ({ items, direction = 'left', speed = 50 }) => {
    return (
        <div className="w-full py-2 mask-linear-fade relative flex overflow-hidden">
            <Marquee
                direction={direction}
                speed={speed}
                pauseOnHover={true}
                gradient={false} // Disables the default fade gradient so you can use your own
                className="flex items-center gap-2"
            >
                {items.map((item, idx) => (
                    <Tag key={idx} text={item} />
                ))}
            </Marquee>
        </div>
    );
};

const OurWorkMarque = () => {
    return (
        <div className='relative'>
            {/* Background Image */}
            <div className='absolute inset-0 -z-10 lg:rounded-t-[100px] overflow-hidden'>
                <Image
                    src={Bg}
                    alt="Background"
                    fill // Optimized Next.js image prop for covering container
                    className='object-cover'
                />
            </div>

            <section className='mx-auto py-12 md:py-25'>
                <div className='max-w-[1380px] mx-auto px-5 md:px-10'>
                    <div className='space-y-8 text-center w-full flex flex-col items-center mb-12'>
                        <p className='uppercase outfit text-sm lg:text-lg font-bold text-[#E3E3E3]/55 tracking-[2.7px]'>
                            Our Work
                        </p>
                        <h3 className='text-[28px] md:text-[40px] md:max-w-[850px] max-w-[500px] recoleta text-white leading-tight'>
                            <p>From Tech to Retail: Tailored Brand Design for Every Industry</p>
                        </h3>
                    </div>
                </div>

                {/* Marquee Container */}
                <div className="w-full flex flex-col space-y-4 md:space-y-6">
                    {/* Top Row: Moves Right */}
                    <MarqueeRow items={TAGS_ROW_1} direction="right" speed={40} />

                    {/* Middle Row: Moves Left */}
                    <MarqueeRow items={TAGS_ROW_2} direction="left" speed={40} />

                    {/* Bottom Row: Moves Right */}
                    <MarqueeRow items={TAGS_ROW_3} direction="right" speed={40} />
                </div>
            </section>
        </div>
    );
};

export default OurWorkMarque;