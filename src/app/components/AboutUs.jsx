'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FaBehance, FaDribbble, FaFacebook, FaGoogle, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const AboutUs = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const groupsRef = useRef([]);

    // --- CONFIGURATION ---
    const activeColor = "#000000"; // Active text color (Black)
    const inactiveColor = "#d1d5db"; // Inactive text color (Light Gray)

    const stepsData = [
        [
            {
                content: (
                    <div className="flex items-center gap-3">
                        <FaGoogle size={24} />
                        <span>Google</span>
                    </div>
                ),
                pos: { top: '20%', left: '10%' }
            },
            {
                content: (
                    <div className="flex items-center gap-3">
                        <FaFacebook size={24} />
                        <span>FaceBook</span>
                    </div>
                ),
                pos: { top: '45%', right: '8%' }
            },
            {
                content: (
                    <div className="flex items-center gap-3">
                        <FaTwitter size={24} />
                        <span>Twitter</span>
                    </div>
                ),
                pos: { bottom: '25%', left: '15%' }
            },
        ],
        [
            {
                content: (
                    <div className="flex items-center gap-3">
                        <FaBehance size={24} />
                        <span>Behance</span>
                    </div>
                ),
                pos: { top: '15%', right: '15%' }
            },
            {
                content: (
                    <div className="flex items-center gap-3">
                        <FaDribbble size={24} />
                        <span>Dribble</span>
                    </div>
                ),
                pos: { top: '60%', left: '8%' }
            },
            {
                content: (
                    <div className="flex items-center gap-3">
                        <FaLinkedin size={24} />
                        <span>Linkedin</span>
                    </div>
                ),
                pos: { bottom: '15%', right: '12%' }
            },
            {
                content: (
                    <div className="flex items-center gap-3">
                        <FaYoutube size={24} />
                        <span>Youtube</span>
                    </div>
                ),
                pos: { top: '30%', left: '25%' }
            },
        ],
        [
            {
                content: (
                    <div className="flex items-center gap-3">
                        <FaGoogle size={24} />
                        <span>Google</span>
                    </div>
                ),
                pos: { top: '25%', left: '5%' }
            },
            {
                content: (
                    <div className="flex items-center gap-3">
                        <FaYoutube size={24} />
                        <span>Youtube</span>
                    </div>
                ),
                pos: { bottom: '35%', right: '5%' }
            },
            {
                content: (
                    <div className="flex items-center gap-3">
                        <FaFacebook size={24} />
                        <span>FaceBook</span>
                    </div>
                ),
                pos: { bottom: '10%', left: '50%', x: '-50%' }
            },
        ],
    ];

    useGSAP(() => {
        if (!textRef.current || !containerRef.current) return;

        const spans = Array.from(textRef.current.children);
        const iconGroups = groupsRef.current;

        // 1. INITIAL STATES
        // Set all spans to the INACTIVE color initially
        gsap.set(spans, { color: inactiveColor, opacity: 1 });
        
        // Set the very first span to ACTIVE color immediately
        gsap.set(spans[0], { color: activeColor, opacity: 1 });

        gsap.set(iconGroups, { autoAlpha: 0, scale: 0.8, y: 20 });

        // 2. TIMELINE
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=600%",
                scrub: 1.5,
                pin: true,
                pinSpacing: true,
                invalidateOnRefresh: true,
            }
        });

        const stepDuration = 5;

        stepsData.forEach((_, index) => {
            const currentGroup = iconGroups[index];
            const currentText = spans[index];
            const isLast = index === stepsData.length - 1;

            tl.addLabel(`step-${index}-start`);

            // --- ANIMATION LOGIC ---

            // 1. Text Highlight Transition
            if (index > 0) {
                // Animate color from inactive to active
                tl.to(currentText, { 
                    color: activeColor, 
                    duration: 1 
                }, `step-${index}-start`);
            }

            // 2. Icon Group Enter
            tl.to(currentGroup, {
                autoAlpha: 1,
                y: 0,
                duration: 2,
                ease: "power2.out"
            }, `step-${index}-start`);

            // 3. Icon Group Drift (Active State)
            tl.to(currentGroup, {
                scale: 1,
                duration: stepDuration,
                ease: "none"
            }, `step-${index}-start`);

            // 4. Exit Animation (If not the last step)
            if (!isLast) {
                const exitTime = `step-${index}-start+=${stepDuration - 0.75}`;

                // Icons fade out
                tl.to(currentGroup, {
                    autoAlpha: 0,
                    y: -20,
                    duration: 0.75,
                    ease: "power1.in"
                }, exitTime);

                // Text reverts to inactive color
                tl.to(currentText, { 
                    color: inactiveColor, 
                    duration: 0.75 
                }, exitTime);
            }
        });

        tl.to({}, { duration: 0.5 });

    }, { scope: containerRef });

    return (
        <div className='w-full px-2 md:px-0 pb-4'>
            <div
                ref={containerRef}
                className='bg-white h-[90vh] md:h-[95vh] w-full rounded-b-[40px] md:rounded-b-[100px] overflow-hidden flex flex-col shadow-sm relative z-10'
            >
                {/* --- FLOATING ICON LAYERS --- */}
                {stepsData.map((stepItems, groupIndex) => (
                    <div
                        key={groupIndex}
                        ref={(el) => (groupsRef.current[groupIndex] = el)}
                        className="absolute inset-0 z-0 pointer-events-none w-full h-full"
                    >
                        {stepItems.map((item, iconIndex) => (
                            <div
                                key={iconIndex}
                                className="absolute flex items-center justify-center bg-white border border-[#E9E9E9] shadow-lg rounded-xl px-4 py-3 md:px-6 md:py-4 will-change-transform"
                                style={{
                                    top: item.pos.top,
                                    bottom: item.pos.bottom,
                                    left: item.pos.left,
                                    right: item.pos.right,
                                    transform: item.pos.x ? `translateX(${item.pos.x})` : 'none'
                                }}
                            >
                                <div className="h-6 md:h-8 px-4 text-2xl flex items-center justify-center text-[#002A15]">
                                    {item.content}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}

                {/* --- MAIN CONTENT --- */}
                <div className='flex-grow flex flex-col justify-center items-center w-full max-w-[1380px] mx-auto px-4 md:px-8 py-8 md:py-6 h-full relative z-10'>

                    <p className='uppercase outfit text-xs md:text-sm font-bold text-[#696969] text-center tracking-[2px] mb-4 md:mb-8'>
                        About us
                    </p>

                    <h1
                        ref={textRef}
                        className='text-xl sm:text-2xl md:text-[32px] xl:text-4xl md:max-w-[1100px] max-w-[450px] text-center mx-auto leading-relaxed reloceta font-medium transition-all duration-300'
                    >
                        <span className='md:inline-block mx-1 transition-colors'>We blend strategy, creativity & technology to deliver</span>
                        <span className='md:inline-block mx-1 transition-colors'><span className='underline decoration-2 md:decoration-3 underline-offset-4 md:underline-offset-8'>measurable results</span> - because every pixel every click, and</span>
                        <span className='md:inline-block mx-1 transition-colors'>every campaign should <span className='underline decoration-2 md:decoration-3 underline-offset-4 md:underline-offset-8'>move your business forward!</span></span>
                    </h1>

                    <button className='mt-12 md:mt-16 px-8 md:px-12 py-3 rounded-full border border-[#002A15] text-[#000000] text-sm md:text-base font-medium hover:bg-[#2B2B2B] hover:text-white transition-all duration-300 backdrop-blur-sm bg-white/50'>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;