"use client";

import React, { useState } from 'react';
import HoverBg from '../../Image/PricingHoverBG.webp'
import Image from 'next/image';

const pricingCards = [
    {
        id: 1,
        title: 'Essential',
        description: 'Perfect for early-stage startups and small businesses.',
        price: '499.00',
        features: [
            'Up To 3 Screens (Mobile + Desktop)',
            'UX Wireframing',
            'UI Design In Figma',
            'Style Guide',
            'Basic Component Library',
            'Basic Prototyping',
            '2 Revision Round',
            'Developer Handoff File',
            'Async. WhatsApp Support',
        ]
    },
    {
        id: 2,
        title: 'Professional',
        description: 'Perfect for growing businesses ready to scale their product.',
        price: '1499.00',
        features: [
            'Up To 12 Screens',
            'UX Research And Wireframing',
            'High-Fidelity UI Design',
            'Design System (Basic)',
            'Interactive Prototype',
            '3 Revision Rounds',
            'Developer Handoff File',
            '7-Day Post-Delivery Support',
            'Priority WhatsApp Support',
        ],
        popular: true
    },
    {
        id: 3,
        title: 'Enterprise',
        description: 'Perfect for brands or businesses that need end-to-end design & support.',
        price: '3999.00',
        features: [
            'Up To 30 Screens',
            'Full UX Audit And Research',
            'High-Fidelity UI Design',
            'Scalable Design System',
            'Interactive Prototyping',
            'Unlimited Revisions',
            'Developer Handoff File',
            '30-Day Post-Delivery Support',
            'Priority Email + WhatsApp Support',
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
                    <h3 className='text-4xl md:text-5xl font-semibold text-[#212121] bricolage max-w-3xl mx-auto leading-tight tracking-tight'>
                        Simple, Transparent Pricing for <span className='playfair'>Every Stage</span> of Your Business
                    </h3>
                </div>

                {/* Cards Container */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {pricingCards.map((card) => {
                        const showImage = hoveredId === card.id || (hoveredId === null && card.popular);

                        return (
                            <div
                                key={card.id}
                                onMouseEnter={() => setHoveredId(card.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className="relative flex flex-col group"
                            >
                                {card.popular && (
                                    <div className="absolute -top-3 -right-6 bg-[#02403A] text-[#fff] text-lg font-medium px-5 py-1.5 rounded-full rotate-12 font-bricolage z-30 shadow-sm">
                                        Popular
                                    </div>
                                )}

                                <div className={`relative flex flex-col flex-grow p-8 border rounded-4xl transition-all duration-500 min-h-[580px] ${showImage ? 'border-transparent' : 'border-gray-200'}`}>

                                    <div className="absolute inset-0 z-0 rounded-4xl overflow-hidden">
                                        <div className="absolute inset-0 bg-[linear-gradient(180deg,#DDF290_-20%,#ffffff_30%)]" />
                                        {/* Hover/Standard Image */}
                                        <div
                                            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${showImage ? 'opacity-100' : 'opacity-0'}`}
                                        >
                                            <Image
                                                className='w-full h-full object-cover pointer-events-none'
                                                src={HoverBg}
                                                alt=""
                                            />

                                            <div className='bg-[#6BBE46]/80 absolute inset-0 mix-blend-hard-light'></div>
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
                                            <p className='text-5xl'>{card.price}</p>
                                        </div>

                                        <hr className={`mb-9 transition-all duration-300 ${showImage ? 'border-[#9BCD5E]' : 'border-[#E4E4E4]'}`} />

                                        <div className='flex-grow'>
                                            <p className='text-[#696E78] mb-4 font-bold text-sm uppercase'>Key Deliverables</p>
                                            <ul className='space-y-1'>
                                                {card.features.map((feature, idx) => (
                                                    <li key={idx} className='flex items-center gap-4 text-[#4B4B4B] text-lg outfit'>
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