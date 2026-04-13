'use client'

import React, { memo, useMemo } from 'react';
import Marquee from 'react-fast-marquee';

const INDUSTRIES = [
    'SaaS', 'Software', 'Fintech', 'Finance', 'Healthcare', 'MedTech', 'Telemedicine', 
    'E-commerce', 'Retail', 'Fashion', 'Apparel', 'Beauty', 'Cosmetics', 'Food', 
    'Beverage', 'Food Delivery', 'Education', 'E-Learning', 'EdTech', 'Travel', 
    'Hospitality', 'Real Estate', 'PropTech', 'Interior Design', 'Logistics', 
    'Transportation', 'Non-profit', 'NGO', 'Media', 'Entertainment', 'Streaming', 
    'Gaming', 'Fitness', 'Wellness', 'Sports', 'Legal', 'HR', 'Recruitment', 
    'Productivity', 'Cybersecurity', 'Blockchain', 'Web3', 'Automotive', 'Government'
];

const Tag = memo(({ text }) => (
    <div className="mx-2 shrink-0 bg-[#02403A] border border-[#C9FF90]/20 rounded-full hover:border-white hover:bg-white hover:text-[#07302C] text-[#C9FF90] transition-colors duration-300 group cursor-pointer">
        <div className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-4 text-sm sm:text-base md:text-lg lg:text-2xl whitespace-nowrap outfit">
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
            className="flex items-center"
        >
            {items.map((item) => (
                <Tag key={item} text={item} />
            ))}
        </Marquee>
    </div>
);

const OurWorkMarque = () => {
    const rows = useMemo(() => {
        const shuffled = [...INDUSTRIES].sort(() => Math.random() - 0.5);
        
        const totalItems = Math.ceil(shuffled.length / 3);
        
        return [
            shuffled.slice(0, totalItems),
            shuffled.slice(totalItems, totalItems * 2),
            shuffled.slice(totalItems * 2)
        ];
    }, []);

    return (
        <div className='relative overflow-hidden bg-[#02403A]'>
            <div className='h-100 w-100 rounded-full bg-[#C9FF90]/60 absolute top-30 -left-20 blur-[200px]'></div>
            <div className='h-100 w-100 rounded-full bg-[#C9FF90]/60 absolute -bottom-30 -right-20 blur-[200px]'></div>

            <section className='mx-auto py-12 md:py-25'>
                <div className='max-w-[1380px] mx-auto px-5 md:px-10'>
                    <div className='space-y-4 text-center w-full flex flex-col items-center mb-12'>
                        <p className='uppercase outfit text-sm lg:text-lg font-bold text-[#E3E3E3]/55 tracking-[2.7px]'>
                            Our Work
                        </p>
                        <h2 className='text-3xl md:text-[50px] md:max-w-[600px] bricolage font-medium text-white leading-tight'>
                            Built for Your <span className='playfair font-semibold'>Industry Designed</span> for Your Users
                        </h2>
                    </div>
                </div>

                <div className="w-full flex flex-col">
                    <MarqueeRow items={rows[0]} direction="right" speed={45} />
                    <MarqueeRow items={rows[1]} direction="left" speed={35} />
                    <MarqueeRow items={rows[2]} direction="right" speed={40} />
                </div>
            </section>
        </div>
    );
};

export default OurWorkMarque;