'use client'

import React, { useState, useEffect, useCallback } from 'react';
import Marquee from 'react-fast-marquee';
import { motion, AnimatePresence } from 'framer-motion';
import Earnest from './Images/Earnest.avif'
import Luis from './Images/Luis.avif'
import Sayeed from './Images/Sayeed.avif'
import Image from 'next/image';

const feedbackData = [
    {
        id: 1,
        name: "Earnest Adu",
        role: "Australia",
        image: Earnest,
        quote: "Great job! A complex job was assigned, which got dealt with swiftly with complete attention to detail. Always got responses back quickly. Would highly recommend, and I will probably be a repeat buyer!"
    },
    {
        id: 2,
        name: "Luis Bazan",
        role: "Peru",
        image: Luis,
        quote: "Excellent professional, he solved all our doubts and the problem we had, the truth is that he is very effective in his work, I recommend him 100%"
    },
    {
        id: 3,
        name: "Abu Sayeed",
        role: "Founder, RankMet LLC",
        image: Sayeed,
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
            <div className="w-full bg-[#5ba32b] py-6.5 border-y border-[#C9FF90]/30 relative z-30">
                <Marquee autoFill={true} pauseOnHover={false} speed={80} className="overflow-hidden">
                    <div className="flex items-center">
                        <span className="text-white text-3xl md:text-[46px] font-medium mx-6 md:mx-10 tracking-tight bricolage">
                            Client’s Feedback
                        </span>
                        <span className="text-white text-5xl font-black">
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.0749 12.1C4.94157 12.1 3.91657 11.8334 2.9999 11.3C2.08324 10.75 1.3499 10.025 0.799903 9.12502C0.266569 8.20836 -9.74834e-05 7.18336 -9.74834e-05 6.05002C-9.74834e-05 4.91669 0.266569 3.90002 0.799903 3.00002C1.3499 2.08336 2.08324 1.35836 2.9999 0.825023C3.91657 0.275024 4.94157 2.3663e-05 6.0749 2.3663e-05C7.19157 2.3663e-05 8.20824 0.275024 9.1249 0.825023C10.0416 1.35836 10.7666 2.08336 11.2999 3.00002C11.8332 3.90002 12.0999 4.91669 12.0999 6.05002C12.0999 7.18336 11.8332 8.20836 11.2999 9.12502C10.7666 10.025 10.0416 10.75 9.1249 11.3C8.20824 11.8334 7.19157 12.1 6.0749 12.1Z" fill="white"/>
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
                                    <Image
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

                                    <p className="text-xl md:text-2xl outfit text-[#373737] leading-snug">
                                        "{item.quote}"
                                    </p>

                                    <div className="mt-10 md:mt-16">
                                        <p className="text-2xl md:text-3xl text-[#212121] font-semibold bricolage">
                                            {item.name}
                                        </p>
                                        <span className="text-sm sm:text-base md:text-lg uppercase outfit md:tracking-[2.7px] tracking-[2px] font-medium text-[#575757]">
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