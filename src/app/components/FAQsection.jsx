'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FAQIcon from '../../assets/FAQIcon.webp'
import Image from 'next/image';

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
    const [openId, setOpenId] = useState(null);

    return (
        <div className='w-full bg-white overflow-hidden '>
            <section className='max-w-[1380px] mx-auto py-20 px-4 flex flex-col lg:flex-row items-start justify-between gap-12'>

                {/* Left Side */}
                <div className='lg:sticky lg:top-10 shrink-0'>
                    <h3 className='uppercase outfit text-sm font-bold text-[#696969] tracking-[2.7px] mb-8'>FAQ</h3>
                    <h1 className="text-[36px] md:text-[50px] font-semibold text-[#212121] bricolage max-w-[500px] leading-[1.1] mb-6 tracking-tight">
                        Questions? We’re Here <span className="playfair italic text-4xl md:text-5xl">to Help</span>
                    </h1>
                    <div className='md:mt-20'>
                        <Image className='max-w-[180px] md:max-w-[220px]' src={FAQIcon} alt="FAQ Illustration" />
                    </div>
                </div>

                {/* Right Side: Optimized Accordion */}
                <motion.div
                    layout
                    className='flex flex-col gap-4 w-full lg:max-w-[700px] h-[75vh]'
                >
                    {questions.map((Q) => {
                        const isOpen = openId === Q.id;

                        return (
                            <motion.div
                                layout
                                key={Q.id}
                                initial={false}
                                className='p-px bg-gradient-to-r from-[#CACACA]/32 to-[#02403A]/42 rounded-xl'
                            >
                                <div className='bg-white rounded-xl overflow-hidden'>
                                    <button
                                        onClick={() => setOpenId(isOpen ? null : Q.id)}
                                        className='w-full flex items-center justify-between py-5 px-6 md:px-10 text-left'
                                    >
                                        <span className='bricolage text-xl md:text-2xl font-medium text-[#212121] tracking-tight'>
                                            {Q.question}
                                        </span>

                                        <motion.div
                                            animate={{ rotate: isOpen ? 45 : 0 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                            className="ml-4 shrink-0"
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M5 12H19" stroke="#07302C" strokeWidth="2" strokeLinecap="round" />
                                                <path d="M12 5V19" stroke="#07302C" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </motion.div>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                key="content"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{
                                                    height: "auto",
                                                    opacity: 1,
                                                    transition: {
                                                        height: { type: "spring", stiffness: 300, damping: 30 },
                                                        opacity: { duration: 0.2 }
                                                    }
                                                }}
                                                exit={{
                                                    height: 0,
                                                    opacity: 0,
                                                    transition: {
                                                        height: { type: "spring", stiffness: 300, damping: 30, restDelta: 0.01 },
                                                        opacity: { duration: 0.1 }
                                                    }
                                                }}
                                            >
                                                <div className='px-6 md:px-10 pb-8'>
                                                    <p className='text-[#696969] leading-relaxed text-lg'>
                                                        {Q.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </section>
        </div>
    );
};

export default FAQsection;