'use client'

import React, { useState } from 'react';

const questions = [
    {
        id: '1',
        question: 'What is Brand Design?',
        answer: 'Brand design is the comprehensive visual identity of a company. It is far more than just a logo; it is a holistic system including typography, color palettes, imagery styles, and iconography that work together to communicate a brand’s personality.'
    },
    {
        id: '2',
        question: 'How Much Does Your Brand Design Service Cost?',
        answer: 'The cost of brand design is an investment scaled to the scope of your business needs. Pricing varies based on deliverables—ranging from a "Brand Essentials" package for startups to a "Full Identity System" for established corporations.'
    },
    {
        id: '3',
        question: 'How to Choose the Best Brand Design Agency?',
        answer: 'To choose the right agency, you must look beyond aesthetic appeal and evaluate their strategic process. A top-tier agency doesn’t just design for beauty; they design for business results.'
    },
    {
        id: '4',
        question: 'Why Does Branding Matter?',
        answer: 'Branding matters because it is the primary way a business builds trust and differentiation in a crowded marketplace. It acts as a shortcut for decision-making and tells the customer what they can expect.'
    },
    {
        id: '5',
        question: 'What is Brand Design? (Technical Perspective)',
        answer: 'From a technical standpoint, brand design is the application of semiotics and psychology to visual assets. It involves the strategic use of color theory, shape language, and grid systems to ensure visual harmony.'
    },
];

const FAQsection = () => {
    // Track which ID is currently open
    const [openId, setOpenId] = useState(null);

    const toggleFAQ = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className='w-full bg-white'>
            <section className='max-w-[1380px] mx-auto py-20 px-4 flex flex-col lg:flex-row items-start justify-between gap-12'>
                {/* Left Side: Content */}
                <div className='lg:sticky lg:top-10'>
                    <h3 className='uppercase outfit text-sm lg:text-base font-bold text-[#696969] tracking-[2.7px] mb-8'>FAQ</h3>
                    <h1 className="text-[36px] sm:text-[48px] md:text-[50px] font-semibold text-[#212121] bricolage max-w-[500px] leading-[1.1] md:leading-[60px] mb-6 tracking-tight">
                        Questions? We’re Here <span className="playfair italic text-4xl sm:text-4xl md:text-5xl">to Help</span>
                    </h1>
                    <div className='md:mt-20'>
                        <img className='max-h-[180px] md:max-h-[220px]' src="https://i.ibb.co.com/dJz1Qr5S/image.png" alt="FAQ Illustration" />
                    </div>
                </div>

                {/* Right Side: Accordion */}
                <div className='flex flex-col gap-4 w-full lg:max-w-[700px]'>
                    {questions.map((Q) => {
                        const isOpen = openId === Q.id;
                        return (
                            <div key={Q.id} className='p-px bg-gradient-to-r from-[#CACACA]/32 to-[#02403A]/42 rounded-xl transition-all duration-300'>
                                <div className='w-full h-full bg-white rounded-xl overflow-hidden'>
                                    {/* Question Header */}
                                    <button
                                        onClick={() => toggleFAQ(Q.id)}
                                        className='w-full flex items-center justify-between py-5 px-6 md:px-10 text-left hover:bg-gray-50/50 transition-colors'
                                    >
                                        <h1 className='bricolage text-xl md:text-2xl max-sm:max-w-xs font-medium text-[#212121] tracking-tight'>
                                            {Q.question}
                                        </h1>

                                        {/* Animated Icon */}
                                        <div className={`relative flex items-center justify-center w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 12H19" stroke="#07302C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M12 5V19" stroke="#07302C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                    </button>

                                    {/* Expandable Answer */}
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className='px-6 md:px-10 pb-6'>
                                            <p className='text-[#696969] leading-relaxed text-lg'>
                                                {Q.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default FAQsection;