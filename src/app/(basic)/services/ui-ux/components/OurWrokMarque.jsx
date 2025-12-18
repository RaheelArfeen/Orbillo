'use client'

import Image from 'next/image';
import Bg from './Image/OurWorkMarqueBg.png'
import React from 'react';

// DATA
const TAGS_ROW_1 = [
    'Real Estate', 'Education & E-Learning', 'Travel & Tourism',
    'Food & Beverage', 'Finance', 'Healthcare', 'Technology', 'Beauty'
];

const TAGS_ROW_2 = [
    'Beauty & Cosmetics', 'Fashion & Apparel', 'SaaS',
    'Non-profit Organizations', 'Branding for Startups', 'Finance',
    'Food & Beverage', 'Consulting'
];

const TAGS_ROW_3 = [
    'Fashion & Apparel', 'SaaS', 'Non-profit Organizations',
    'Branding for Startups', 'Beauty & Cosmetics', 'Travel & Tourism',
    'Food & Beverage', 'Real Estate'
];

// --- 1. CSS STYLES FOR ANIMATION ---
// You can put this in your globals.css, but I included it here for easy copy-paste.
const animationStyles = `
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }
  @keyframes scroll-reverse {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(0); }
  }
  .animate-marquee {
    will-change: transform;
    animation: scroll linear infinite;
  }
  .animate-marquee-reverse {
    will-change: transform;
    animation: scroll-reverse linear infinite;
  }
  /* Hardware acceleration hack to prevent flickering */
  .gpu-hack {
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
`;

const Tag = ({ text, highlight = false }) => (
    <div
        className={`
            ${!highlight && 'bg-linear-230 from-[#6BBE46]/70 to-[#07302C]'}
            rounded-full mx-1 sm:mx-2 p-px shrink-0
        `}
    >
        <div
            className={`
                inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-4 rounded-full text-sm sm:text-base md:text-lg lg:text-2xl whitespace-nowrap transition-all duration-300 outfit
                ${highlight
                    ? 'bg-transparent text-[#C9FF90] border border-[#C9FF90]'
                    : 'bg-[#02403A] text-[#C9FF90] backdrop-blur-sm'
                }
            `}
        >
            {text}
        </div>
    </div>
);

// --- 2. OPTIMIZED MARQUEE ROW ---
const MarqueeRow = ({ items, direction = 'left', duration = '40s' }) => {
    // We duplicate the items to create the seamless loop illusion
    const loopedItems = [...items, ...items];

    return (
        <div className="relative w-full overflow-hidden py-2 mask-linear-fade flex select-none">
             {/* Structure: 
                We have TWO identical sets of items running side-by-side. 
                As Set 1 moves off screen, Set 2 takes its place perfectly.
             */}
            <div 
                className={`flex min-w-full shrink-0 items-center justify-around gap-2 gpu-hack ${direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'}`}
                style={{ animationDuration: duration }}
            >
                {items.map((item, idx) => (
                    <Tag key={`original-${idx}`} text={item} highlight={idx % 8 === 3} />
                ))}
            </div>
            
            {/* Duplicate set for seamless looping */}
            <div 
                className={`flex min-w-full shrink-0 items-center justify-around gap-2 gpu-hack ${direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'}`}
                style={{ animationDuration: duration }}
                aria-hidden="true" // Hide duplicate from screen readers
            >
                {items.map((item, idx) => (
                    <Tag key={`dupe-${idx}`} text={item} highlight={idx % 8 === 3} />
                ))}
            </div>
        </div>
    );
};

const OurWorkMarque = () => {
    return (
        <div className='relative'>
            {/* Inject Styles */}
            <style>{animationStyles}</style>

            <div className='absolute top inset-0 -z-10 lg:rounded-t-[100px] overflow-hidden'>
                <Image
                    src={Bg}
                    alt="Background"
                    className='w-full h-full object-cover'
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

                <div className="w-full flex flex-col space-y-4 md:space-y-6 mask-gradient overflow-hidden">
                    {/* Top Row: Moves Right (slower duration = slower speed) */}
                    <MarqueeRow items={TAGS_ROW_1} direction="right" duration="50s" />

                    {/* Middle Row: Moves Left */}
                    <MarqueeRow items={TAGS_ROW_2} direction="left" duration="40s" />

                    {/* Bottom Row: Moves Right */}
                    <MarqueeRow items={TAGS_ROW_3} direction="right" duration="55s" />
                </div>
            </section >
        </div>
    );
};

export default OurWorkMarque;