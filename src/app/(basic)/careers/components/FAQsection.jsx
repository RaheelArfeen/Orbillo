'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
    {
        id: '1',
        question: 'What roles are you currently hiring for?',
        answer: 'We regularly open roles across design, development and marketing. All currently open positions are listed in the Open Positions section above — if you don’t see a match, you can still join our talent list.'
    },
    {
        id: '2',
        question: 'Do you offer remote or hybrid work?',
        answer: 'Yes. Most of our roles are remote-first with a flexible hybrid setup, designed to help you do your best work without unnecessary commuting.'
    },
    {
        id: '3',
        question: 'What does the application process look like?',
        answer: 'Apply through the role you’re interested in and our team will review your submission. If it’s a good fit, we’ll reach out to schedule a short conversation, followed by a role-specific task or portfolio review.'
    },
    {
        id: '4',
        question: 'What experience level do I need to apply?',
        answer: 'It depends on the role — each position lists its expected experience level. We value strong fundamentals, a good portfolio and a willingness to learn over years of experience alone.'
    },
    {
        id: '5',
        question: 'What is it like working at Orbillo?',
        answer: 'We keep things simple, collaborative and growth-focused. You’ll work on real projects, get real support for your development, and enjoy a culture built around meaningful work — not busywork.'
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
                                        <span className='bricolage text-xl md:text-2xl font-medium text-[#212121] tracking-tight capitalize'>
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
