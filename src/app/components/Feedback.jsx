import React, { useState, useEffect, useCallback, useRef } from 'react';
import Marquee from 'react-fast-marquee';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    const [direction, setDirection] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextStep = useCallback(() => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % feedbackData.length);
    }, []);

    const prevStep = useCallback(() => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + feedbackData.length) % feedbackData.length);
    }, []);

    // Auto-slide logic: Pauses on hover & Disabled on Mobile (width < 768)
    useEffect(() => {
        const isMobile = window.innerWidth < 768;

        if (!isPaused && !isMobile) {
            const timer = setInterval(nextStep, 5000);
            return () => clearInterval(timer);
        }
    }, [nextStep, isPaused]);

    const currentFeedback = feedbackData[index];

    // Enhanced Animation Variants
    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 150 : -150,
            opacity: 0,
            scale: 0.95,
            filter: "blur(4px)"
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)"
        },
        exit: (direction) => ({
            x: direction < 0 ? 150 : -150,
            opacity: 0,
            scale: 0.95,
            filter: "blur(4px)"
        })
    };

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
                className="relative py-[80px] md:py-40 max-w-7xl mx-auto px-4 min-h-[600px] flex flex-col items-center justify-center"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div className="relative w-full flex flex-col gap-12 md:gap-24 items-center justify-center">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={currentFeedback.id}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.4 },
                                scale: { duration: 0.4 }
                            }}
                            className="flex flex-col md:flex-row items-center md:items-end justify-center gap-10 md:gap-18"
                        >
                            {/* Image with subtle hover lift */}
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="h-[240px] sm:h-[300px] md:h-[400px] w-[180px] sm:w-[240px] md:w-[300px] rounded-lg overflow-hidden flex-shrink-0 shadow-2xl"
                            >
                                <img
                                    src={currentFeedback.image}
                                    alt={currentFeedback.name}
                                    className="object-cover w-full h-full pointer-events-none"
                                />
                            </motion.div>

                            {/* Text Content */}
                            <div className="py-5 relative max-w-[500px] flex-shrink text-center md:text-left">
                                <div className="absolute -top-6 -left-6 md:-top-14 md:-left-12 opacity-20">
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
                                    "{currentFeedback.quote}"
                                </p>

                                <div className="mt-10 md:mt-16">
                                    <p className="text-2xl md:text-3xl text-[#212121] font-semibold">
                                        {currentFeedback.name}
                                    </p>
                                    <span className="text-sm sm:text-base md:text-lg uppercase md:tracking-[2.7px] tracking-[2px] font-medium text-[#575757]">
                                        {currentFeedback.role}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="flex gap-12 md:gap-36 px-2 md:px-10 z-20">
                        <button
                            onClick={prevStep}
                            className="p-3 rounded-full bg-white shadow-lg border border-gray-100 text-[#212121] hover:bg-[#5ba32b] hover:text-white transition-all transform active:scale-90"
                            aria-label="Previous feedback"
                        >
                            <ChevronLeft size={28} />
                        </button>
                        <button
                            onClick={nextStep}
                            className="p-3 rounded-full bg-white shadow-lg border border-gray-100 text-[#212121] hover:bg-[#5ba32b] hover:text-white transition-all transform active:scale-90"
                            aria-label="Next feedback"
                        >
                            <ChevronRight size={28} />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Feedback;