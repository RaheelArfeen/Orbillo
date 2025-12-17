"use client"

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import OurPhilosophyBg from '../../../assets/OurPhilosophyBg.png';

const PhilosophyIcon = () => (
    <div className="relative size-12 sm:size-16 lg:size-20 flex-shrink-0 bg-[#07302C] rounded-full z-10">
        <svg viewBox="0 0 87 84" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <rect width="86.7489" height="83.7315" rx="41.8658" fill="#C9FF90" />
            <rect width="55.0667" height="55.0667" transform="translate(15.8411 14.332)" fill="#C9FF90" />
            <path d="M43.3741 30.3931C46.542 30.3931 49.1102 27.825 49.1102 24.657C49.1102 21.489 46.542 18.9209 43.3741 18.9209C40.2061 18.9209 37.6379 21.489 37.6379 24.657C37.6379 27.825 40.2061 30.3931 43.3741 30.3931Z" stroke="#07302C" strokeWidth="2.26" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M39.2445 28.7861L30.2961 37.7345" stroke="#07302C" strokeWidth="2.26" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M26.166 47.6011C29.334 47.6011 31.9022 45.033 31.9022 41.865C31.9022 38.6971 29.334 36.1289 26.166 36.1289C22.9981 36.1289 20.4299 38.6971 20.4299 41.865C20.4299 45.033 22.9981 47.6011 26.166 47.6011Z" stroke="#07302C" strokeWidth="2.26" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M31.9026 41.8652H54.847" stroke="#07302C" strokeWidth="2.26" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M60.583 47.6021C63.751 47.6021 66.3191 45.034 66.3191 41.866C66.3191 38.698 63.751 36.1299 60.583 36.1299C57.4151 36.1299 54.8469 38.698 54.8469 41.866C54.8469 45.034 57.4151 47.6021 60.583 47.6021Z" stroke="#07302C" strokeWidth="2.26" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M47.5044 54.9435L56.4527 45.9951" stroke="#07302C" strokeWidth="2.26" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M43.3741 64.8091C46.542 64.8091 49.1102 62.241 49.1102 59.073C49.1102 55.9051 46.542 53.3369 43.3741 53.3369C40.2061 53.3369 37.6379 55.9051 37.6379 59.073C37.6379 62.241 40.2061 64.8091 43.3741 64.8091Z" stroke="#07302C" strokeWidth="2.26" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </div>
);

const ITEMS = [
    { label: "Simplicity that", title: "Drives Clarity", align: "start" },
    { label: "Creativity that", title: "Drives Connection", align: "end" },
    { label: "Strategy that", title: "Drives Business", align: "start" },
];

const OurPhilosophy = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 20,
        damping: 15,
        mass: 1,
        restDelta: 0.001
    });

    // --- ANIMATION VALUES ---
    const pathLength = useTransform(smoothProgress, [0, 0.9], [0, 1]);

    // Mobile Line Height (0% to 100%)
    const mobileLineHeight = useTransform(smoothProgress, [0, 0.8], ["0%", "100%"]);

    // Items
    const item1Opacity = useTransform(smoothProgress, [0.05, 0.20], [0, 1]);
    const item1Y = useTransform(smoothProgress, [0.05, 0.20], [30, 0]);

    const item2Opacity = useTransform(smoothProgress, [0.35, 0.50], [0, 1]);
    const item2Y = useTransform(smoothProgress, [0.35, 0.50], [30, 0]);

    const item3Opacity = useTransform(smoothProgress, [0.65, 0.80], [0, 1]);
    const item3Y = useTransform(smoothProgress, [0.65, 0.80], [30, 0]);

    const opacities = [item1Opacity, item2Opacity, item3Opacity];
    const yOffsets = [item1Y, item2Y, item3Y];

    return (
        <div className='relative w-full'>

            {/* Container height */}
            <div ref={containerRef} className="relative h-[450vh] md:h-[600vh]">

                <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center">

                    <div className='absolute inset-0 -z-10'>
                        <Image src={OurPhilosophyBg} alt="Background" className='h-full w-full object-cover mix-blend-luminosity' />
                    </div>

                    <div className='max-w-[1380px] w-full mx-auto px-6 md:px-4'>

                        {/* Header Text */}
                        <div className='text-center flex flex-col items-center justify-center mb-8 md:mb-12'>
                            <p className='outfit uppercase text-[#ffffff] font-bold text-xs md:text-lg tracking-[2.7px] whitespace-nowrap mb-4 md:mb-8'>
                                Our Philosophy
                            </p>
                            <p className='recoleta text-2xl md:text-4xl leading-[140%] tracking-[-0.2px] text-[#FFFFFF] max-w-[900px]'>
                                Founded by industry professionals who’ve spent <span className='text-[#C9FF90] underline decoration-[#C9FF90] decoration-3 underline-offset-5'>10–15 years</span> in the creative and digital field, Orbillo was built on one goal — to bridge the gap between <span className='text-[#C9FF90] underline decoration-[#C9FF90] decoration-3 underline-offset-5'>design and business outcomes.</span>
                            </p>
                        </div>

                        {/* =======================
                            DESKTOP VIEW (Horizontal Snake)
                            Hidden on Mobile
                           ======================= */}
                        <div className="hidden md:block relative w-full max-w-[1320px] mx-auto h-[350px]">
                            {/* Static Background Path */}
                            <svg width="1317" height="315" viewBox="0 0 1317 315" fill="none" className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                                <path d="M1.5 313.5V24.5C1.5 11.7975 11.7975 1.5 24.5 1.5H399C411.703 1.5 422 11.7975 422 24.5V290.5C422 303.203 432.297 313.5 445 313.5H868.5C881.203 313.5 891.5 303.203 891.5 290.5V24.5C891.5 11.7975 901.797 1.5 914.5 1.5H1292.5C1305.2 1.5 1315.5 11.7975 1315.5 24.5V313.5" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="3" strokeLinecap="round" />
                                {/* Animated Path */}
                                <motion.path
                                    d="M1.5 313.5V24.5C1.5 11.7975 11.7975 1.5 24.5 1.5H399C411.703 1.5 422 11.7975 422 24.5V290.5C422 303.203 432.297 313.5 445 313.5H868.5C881.203 313.5 891.5 303.203 891.5 290.5V24.5C891.5 11.7975 901.797 1.5 914.5 1.5H1292.5C1305.2 1.5 1315.5 11.7975 1315.5 24.5V313.5"
                                    stroke="url(#paint0_linear_desktop)" strokeWidth="3" strokeLinecap="round" style={{ pathLength: pathLength }}
                                />
                                <defs>
                                    <linearGradient id="paint0_linear_desktop" x1="1330.5" y1="201.055" x2="6.76412" y2="325.19" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.01" stopColor="#07302C" />
                                        <stop offset="0.18" stopColor="#C9FF90" />
                                        <stop offset="0.37" stopColor="#07302C" />
                                        <stop offset="0.83" stopColor="#C9FF90" />
                                        <stop offset="1" stopColor="#07302C" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            <div className="relative z-10 grid grid-cols-3 h-full w-full">
                                {ITEMS.map((item, index) => (
                                    <div key={index} className={`flex flex-col gap-12 lg:gap-32 px-0 lg:px-8 h-full ${index === 1 ? 'flex-col-reverse mt-8' : 'py-2'}`}>
                                        <motion.div style={{ opacity: opacities[index], scale: opacities[index] }} className={`${index === 1 ? 'mb-18 lg:mb-2 mt-4' : 'mb-4 mt-10 lg:-mt-8'} flex ${index === 2 ? 'justify-end' : ''}`}>
                                            <div className={index === 2 ? 'mr-12' : 'ml-6'}>
                                                <PhilosophyIcon />
                                            </div>
                                        </motion.div>
                                        <motion.div style={{ opacity: opacities[index], y: yOffsets[index] }} className={`text-left ${index === 2 ? 'lg:pl-20 px-8' : 'lg:pl-12 pl-6'}`}>
                                            <p className="outfit text-xl lg:text-2xl mb-2 text-white/90">{item.label}</p>
                                            <h3 className="recoleta text-2xl lg:text-4xl text-white">{item.title}</h3>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="block md:hidden relative w-full max-w-[400px] mx-auto min-h-[400px]">

                            {/* Vertical Line Container */}
                            <div className="absolute left-8 top-0 bottom-0 w-1 bg-white/10 rounded-full">
                                {/* Animated Fill Line */}
                                <motion.div
                                    className="w-full bg-gradient-to-b from-[#07302C] via-[#C9FF90] to-[#07302C] rounded-full"
                                    style={{ height: mobileLineHeight }}
                                />
                            </div>

                            <div className="flex flex-col gap-12 py-4">
                                {ITEMS.map((item, index) => (
                                    <div key={index} className="flex items-center gap-6 relative z-10">
                                        {/* Icon Wrapper (Centered on Line) */}
                                        <motion.div
                                            style={{ opacity: opacities[index], scale: opacities[index] }}
                                            className="flex-shrink-0 ml-3"
                                        >
                                            <div className="w-16 h-16 sm:w-20 sm:h-20">
                                                <PhilosophyIcon />
                                            </div>
                                        </motion.div>

                                        {/* Text Content */}
                                        <motion.div
                                            style={{ opacity: opacities[index], x: yOffsets[index] }}
                                            className="text-left pt-2"
                                        >
                                            <p className="outfit text-lg text-white/70 mb-1">{item.label}</p>
                                            <h3 className="recoleta text-3xl text-white">{item.title}</h3>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurPhilosophy;