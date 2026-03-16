'use client'

import React, { memo } from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import Bg from '../Image/OurWorkMarqueBg.avif';

// 1. Single source of truth. Move outside to stay static.
const INDUSTRIES = [
    'Beauty & Cosmetics', 'Fashion & Apparel', 'SaaS',
    'Non-profit Organizations', 'Branding for Startups', 'Finance',
    'Food & Beverage', 'Consulting'
];

// 2. Memoize the Tag to prevent unnecessary re-renders
const Tag = memo(({ text }) => (
    <div className="mx-2 sm:mx-4 shrink-0 bg-[#02403A] border border-[#C9FF90]/20 rounded-full hover:border-[#C9FF90] transition-colors duration-300 group cursor-pointer">
        <div className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-4 text-[#C9FF90] text-sm sm:text-base md:text-lg lg:text-2xl whitespace-nowrap outfit">
            {text}
        </div>
    </div>
));

Tag.displayName = 'Tag';

const MarqueeRow = ({ items, direction = 'left', speed = 40 }) => (
    <div className="w-full py-2 flex overflow-hidden">
        <Marquee
            direction={direction}
            speed={speed}
            pauseOnHover={true}
            gradient={false}
            autoFill={true}
            // 3. Hardware acceleration: Ensures the animation runs on the GPU
            className="flex items-center"
        >
            {items.map((item, idx) => (
                <Tag key={`${item}-${idx}`} text={item} />
            ))}
        </Marquee>
    </div>
);

const OurWorkMarque = () => {
    return (
        <div className='relative overflow-hidden'>
            <div className='absolute inset-0 -z-10 lg:rounded-t-[100px] overflow-hidden'>
                {/* 4. Priority Loading: If this is high on the page, use priority */}
                <Image
                    src={Bg}
                    alt="Background"
                    fill
                    className='object-cover'
                    placeholder="blur"
                />
            </div>

            <section className='mx-auto py-12 md:py-25'>
                <div className='max-w-[1380px] mx-auto px-5 md:px-10'>
                    <div className='space-y-4 text-center w-full flex flex-col items-center mb-12'>
                        <p className='uppercase outfit text-sm lg:text-lg font-bold text-[#E3E3E3]/55 tracking-[2.7px]'>
                            Our Work
                        </p>
                        <h2 className='text-[28px] md:text-[40px] md:max-w-[850px] bricolage text-white leading-tight'>
                            From Tech to Retail: Tailored Brand Design for Every Industry
                        </h2>
                    </div>
                </div>

                <div className="w-full flex flex-col space-y-4 md:space-y-6">
                    <MarqueeRow items={INDUSTRIES} direction="right" />
                    <MarqueeRow items={INDUSTRIES} direction="left" />
                    <MarqueeRow items={INDUSTRIES} direction="right" />
                </div>
            </section>
        </div>
    );
};

export default OurWorkMarque;