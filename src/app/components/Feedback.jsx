'use client'

import React, { useState, useEffect, useCallback } from 'react';
import Marquee from 'react-fast-marquee';
import { motion, AnimatePresence } from 'framer-motion';

const feedbackData = [
    {
        id: 1,
        name: "Earnest Adu",
        role: "Australia",
        image: "https://i.ibb.co.com/KpMBD8yy/image.png",
        quote: "Great job! A complex job was assigned, which got dealt with swiftly with complete attention to detail. Always got responses back quickly. Would highly recommend, and I will probably be a repeat buyer!"
    },
    {
        id: 2,
        name: "Luis Bazan",
        role: "Peru",
        image: "https://i.ibb.co.com/MD5cFSFF/image.png",
        quote: "Excellent professional, he solved all our doubts and the problem we had, the truth is that he is very effective in his work, I recommend him 100%"
    },
    {
        id: 3,
        name: "Abu Sayeed",
        role: "Founder, RankMet LLC",
        image: "https://i.ibb.co.com/21yzK5J7/Client.png",
        quote: "Very few firms can make products look beautiful and work well at the same time, and that’s what I love about Orbillo!"
    },
];

const Feedback = () => {
    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextStep = useCallback(() => {
        setIndex((prev) => (prev + 1) % feedbackData.length);
    }, []);

    const prevStep = useCallback(() => {
        setIndex((prev) => (prev - 1 + feedbackData.length) % feedbackData.length);
    }, []);

    // Swipe logic handler
    const handleDragEnd = (event, info) => {
        const swipeThreshold = 50; // Minimum pixels to trigger swipe
        if (info.offset.x < -swipeThreshold) {
            nextStep();
        } else if (info.offset.x > swipeThreshold) {
            prevStep();
        }
    };

    useEffect(() => {
        if (!isPaused) {
            const timer = setInterval(nextStep, 5000);
            return () => clearInterval(timer);
        }
    }, [nextStep, isPaused]);

    return (
        <div className='bg-white overflow-hidden'>
            <div className="w-full bg-[#5ba32b] py-6 border-y border-[#C9FF90]/30 relative z-30">
                <Marquee autoFill={true} pauseOnHover={false} speed={80}>
                    <div className="flex items-center">
                        <span className="text-white text-3xl md:text-6xl font-serif mx-6 md:mx-10 tracking-tight">
                            Client’s Feedback
                        </span>
                        <span className="text-white text-5xl font-black">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path d="M7.05155 23.1694L3.41628 20.6729L8.4093 13.3585L0 10.424L1.40155 6.13178L9.85465 8.75969V0H14.6725V8.75969L23.1256 6.13178L24.5271 10.424L16.074 13.3585L21.1109 20.6729L17.4756 23.1694L12.2198 16.2492L7.05155 23.1694Z" fill="white" />
                            </svg>
                        </span>
                    </div>
                </Marquee>
            </div>

            <section
                className="relative py-[80px] md:py-40 max-w-4xl mx-auto px-4 min-h-[700px] flex flex-col items-center justify-center"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div className="relative w-full h-[500px] md:h-[450px] flex items-center justify-center touch-pan-y">
                    {feedbackData.map((item, i) => {
                        let position = i - index;
                        if (position < -1) position = position + feedbackData.length;
                        if (position > 1) position = position - feedbackData.length;

                        const isActive = i === index;

                        return (
                            <motion.div
                                key={item.id}
                                // SWIPE LOGIC ADDED HERE
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.2}
                                onDragEnd={handleDragEnd}

                                initial={false}
                                animate={{
                                    x: `${position * 105}%`,
                                    scale: isActive ? 1 : 0.80,
                                    opacity: isActive ? 1 : 0.3,
                                    zIndex: isActive ? 20 : 10,
                                    filter: isActive ? "blur(0px)" : "blur(16px)",
                                }}
                                transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
                                className="absolute flex flex-col md:flex-row items-center md:items-end justify-center gap-10 md:gap-18 w-full cursor-grab active:cursor-grabbing"
                            >
                                <motion.div
                                    whileHover={isActive ? { y: -10 } : {}}
                                    className="h-[240px] sm:h-[300px] md:h-[400px] w-[180px] sm:w-[240px] md:w-[300px] rounded-lg overflow-hidden flex-shrink-0 shadow-2xl"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="object-cover w-full h-full pointer-events-none"
                                    />
                                </motion.div>

                                <div className="py-5 relative max-w-[500px] flex-shrink text-center md:text-left select-none">
                                    <div className="absolute -top-4 -left-3 md:-top-14 md:-left-12 opacity-20 pointer-events-none">
                                        <svg width="157" height="157" viewBox="0 0 157 157" fill="none" className="w-24 h-24 md:w-40 md:h-40">
                                            <path d="M41.1769 15.5H67.5791L50.1567 57.0088L49.7758 57.9162H50.7598H70.3934V109.835H13.7373V57.4569L41.1769 15.5ZM114.046 15.5H140.448L123.026 57.0088L122.645 57.9162H123.629H143.262V109.835H86.6062V57.4569L114.046 15.5Z" stroke="url(#paint0_linear)" strokeWidth="1.2" />
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="78.5" y1="15.5" x2="78.5" y2="109.8" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.36" stopColor="#0E3B1F" />
                                                    <stop offset="1" stopColor="white" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>

                                    <p className="text-xl md:text-2xl text-[#373737] leading-snug">
                                        "{item.quote}"
                                    </p>

                                    <div className="mt-10 md:mt-16">
                                        <p className="text-2xl md:text-3xl text-[#212121] font-semibold">
                                            {item.name}
                                        </p>
                                        <span className="text-sm sm:text-base md:text-lg uppercase md:tracking-[2.7px] tracking-[2px] font-medium text-[#575757]">
                                            {item.role}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-12 flex flex-col items-center gap-8 z-40">
                    <div className="flex gap-2">
                        {feedbackData.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`h-2.5 rounded-full transition-all duration-300 ${index === i ? "w-10 bg-[#5ba32b]" : "w-2.5 bg-gray-300"
                                    }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Feedback;