'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
    {
        id: '1',
        question: 'What technologies do you use for web development? ',
        answer: 'We work with modern, industry-standard technologies including React, Next.js, WordPress, Webflow and custom HTML/CSS/JS — depending on your project’s needs and goals.'
    },
    {
        id: '2',
        question: 'How long does a website project take? ',
        answer: 'Timelines vary based on scope. A standard business website typically takes 2–3 weeks, while larger or custom projects may take 4–6 weeks. We always provide a clear timeline before we begin.'
    },
    {
        id: '3',
        question: 'How much do your web development services cost?',
        answer: 'Our packages start at $699 for small business websites and scale based on complexity. All pricing is transparent and scoped to your specific needs before any work begins. If you are not sure, what suits best for you, feel free to book a meeting with us'
    },
    {
        id: '4',
        question: 'Do you work with international clients? ',
        answer: 'Yes! We are a global team working with clients across North America, Europe, Australia and beyond. All communication, delivery and support happen remotely — smoothly and professionally.'
    },
    {
        id: '5',
        question: 'Will my website be mobile-friendly and SEO-ready? ',
        answer: 'Absolutely. Every website we build is fully responsive across all devices and comes with on-page SEO best practices built in from day one.'
    },
];

const FAQsection = () => {
    // Starts with the first item open
    const [openId, setOpenId] = useState('1');

    const handleToggle = (id) => {
        // Only change if a different item is clicked (prevents closing the active one)
        if (openId !== id) {
            setOpenId(id);
        }
    };

    return (
        <div className='w-full bg-white overflow-hidden '>
            <section className='max-w-[1380px] mx-auto py-20 px-4 flex flex-col lg:flex-row items-start justify-between gap-12'>

                {/* Left Side */}
                <div className='lg:sticky lg:top-10 shrink-0'>
                    <h3 className='uppercase outfit text-sm font-bold text-[#696969] tracking-[2.7px] mb-8'>FAQ</h3>
                    <h1 className="text-[36px] md:text-[50px] font-semibold text-[#212121] bricolage max-w-[500px] leading-[1.1] mb-6 tracking-tight">
                        Questions? We’re Here <span className="playfair italic text-4xl md:text-5xl">to Help</span>
                    </h1>
                    {/* <div className='md:mt-20'>
                        <Image className='max-w-[180px] md:max-w-[220px]' src={FAQIcon} alt="FAQ Illustration" />
                    </div> */}
                </div>

                {/* Right Side */}
                <motion.div
                    layout
                    className='flex flex-col gap-4 w-full lg:max-w-[700px]'
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
                                        onClick={() => handleToggle(Q.id)}
                                        // Added cursor-pointer and a slight hover transition
                                        className={`w-full flex items-center justify-between py-5 px-6 md:px-10 text-left cursor-pointer transition-colors duration-200 ${!isOpen ? 'hover:bg-gray-50' : ''}`}
                                    >
                                        <span className='bricolage text-xl md:text-2xl font-medium text-[#212121] tracking-tight'>
                                            {Q.question}
                                        </span>

                                        <motion.div
                                            animate={{
                                                scale: isOpen ? 1.1 : 1
                                            }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                            className="ml-4 shrink-0"
                                        >
                                            {isOpen ? (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M5 12H19" stroke="#07302C" strokeWidth="2" strokeLinecap="round" />
                                                </svg>) : (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M5 12H19" stroke="#07302C" strokeWidth="2" strokeLinecap="round" />
                                                    <path d="M12 5V19" stroke="#07302C" strokeWidth="2" strokeLinecap="round" />
                                                </svg>
                                            )}
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