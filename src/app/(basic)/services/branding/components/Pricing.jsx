"use client";

import React, { useState } from 'react';
import HoverBg from '../../Image/PricingHoverBG.webp'
import Image from 'next/image';

const pricingCards = [
    {
        id: 1,
        title: 'Starter',
        description: 'Perfect for individuals beginning For beginners exploring consistent posting.',
        price: '0.00',
        features: [
            '50 AI-generated posts/month',
            '10 Content Prompts/day',
            'Trending Posts (limited)',
            'Basic Analytics Dashboard',
            'Email Support',
            '1 Social Account',
            'Basic Post Generator',
        ]
    },
    {
        id: 2,
        title: 'Standard',
        description: 'Perfect for individuals beginning For beginners exploring consistent posting.',
        price: '0.00',
        features: [
            '50 AI-generated posts/month',
            '10 Content Prompts/day',
            'Trending Posts (limited)',
            'Basic Analytics Dashboard',
            'Email Support',
            '1 Social Account',
            'Basic Post Generator',
        ],
        popular: true
    },
    {
        id: 3,
        title: 'Scale',
        description: 'Perfect for individuals beginning For beginners exploring consistent posting.',
        price: '0.00',
        features: [
            '50 AI-generated posts/month',
            '10 Content Prompts/day',
            'Trending Posts (limited)',
            'Basic Analytics Dashboard',
            'Email Support',
            '1 Social Account',
            'Basic Post Generator',
        ]
    },
];

const Pricing = () => {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <section className='py-20 bg-white'>
            <div className='max-w-[1380px] px-4 mx-auto'>
                {/* Header Section */}
                <div className='text-center mb-16'>
                    <p className='uppercase text-sm font-bold text-[#696969] tracking-widest mb-4'>
                        PRICING
                    </p>
                    <h3 className='text-4xl md:text-5xl font-medium text-[#212121] bricolage max-w-2xl mx-auto leading-tight'>
                        We’ve proudly collaborated with businesses that
                    </h3>
                </div>

                {/* Cards Container */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {pricingCards.map((card) => {
                        // The image is visible if:
                        // 1. This card is currently hovered
                        // 2. OR no card is hovered and this is the "Popular" card
                        const showImage = hoveredId === card.id || (hoveredId === null && card.popular);

                        return (
                            <div
                                key={card.id}
                                onMouseEnter={() => setHoveredId(card.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className="relative flex flex-col group"
                            >
                                {/* POPULAR BADGE - Positioned outside the overflow-hidden container */}
                                {card.popular && (
                                    <div className="absolute -top-3 -right-6 bg-[#6BBE46] text-[#1C413D] text-lg font-medium px-5 py-1.5 rounded-full rotate-12 font-bricolage z-30 shadow-sm">
                                        Popular
                                    </div>
                                )}

                                {/* CARD INNER WRAPPER */}
                                <div className={`relative flex flex-col flex-grow p-8 border rounded-4xl transition-all duration-500 min-h-[580px] ${showImage ? 'border-transparent' : 'border-gray-200'}`}>
                                    
                                    {/* BACKGROUNDS CONTAINER (Handles the rounded clipping) */}
                                    <div className="absolute inset-0 z-0 rounded-4xl overflow-hidden">
                                        {/* Static Default Gradient */}
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#DDF290,0%,#DDF290_0%,white_60%)]" />
                                        
                                        {/* Image Overlay with Fade Transition */}
                                        <div 
                                            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${showImage ? 'opacity-100' : 'opacity-0'}`}
                                        >
                                            <Image 
                                                className='w-full h-full object-cover pointer-events-none' 
                                                src={HoverBg}
                                                alt="" 
                                            />
                                        </div>
                                    </div>

                                    {/* CARD CONTENT */}
                                    <div className='relative z-10 flex flex-col h-full'>
                                        <h4 className='text-4xl bricolage font-medium mb-4 text-[#212121]'> 
                                            {card.title}
                                        </h4>
                                        <p className='text-[#373D4B] mb-9 leading-tight outfit'>
                                            {card.description}
                                        </p>

                                        <div className='flex items-start mb-4 bricolage text-[#050D1E] font-medium tracking-tighter'>
                                            <span className='text-2xl -mt-1'>$</span>
                                            <p className='text-5xl'>{card.price} <span className='text-2xl font-normal text-gray-400'>/ month</span></p>
                                        </div>

                                        <hr className='border-gray-200 mb-9' />

                                        <div className='flex-grow'>
                                            <p className='text-[#696E78] mb-4 font-semibold text-sm'>Key Features</p>
                                            <ul className='space-y-3'>
                                                {card.features.map((feature, idx) => (
                                                    <li key={idx} className='flex items-center gap-2 text-[#373D4B] text-sm'>
                                                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M3.19905 10.5112L1.54985 9.37859L3.81502 6.06032L0 4.72903L0.635837 2.78179L4.47073 3.97398V0H6.65642V3.97398L10.4913 2.78179L11.1271 4.72903L7.29225 6.06032L9.57729 9.37859L7.92809 10.5112L5.5437 7.37173L3.19905 10.5112Z" fill="#6BBE46" />
                                                        </svg>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <button 
                                            className={`mt-10 w-full py-4 rounded-full font-bold transition-all duration-300 cursor-pointer 
                                            ${showImage ? 'bg-[#1C413D] text-[#D5F1A6]' : 'bg-[#B9FF8D] text-[#17241F]'}`}
                                        >
                                            Start Your Project
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div >
        </section >
    );
};

export default Pricing;