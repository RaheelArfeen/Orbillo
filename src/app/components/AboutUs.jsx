'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const AboutUs = () => {
    // This ref must go on the OUTERMOST wrapper to pin the background + content together
    const containerRef = useRef(null);
    const textRef = useRef(null);

    const activeColor = "#373737";
    const inactiveColor = "#CCCCCC";

    useGSAP(() => {
        if (!textRef.current || !containerRef.current) return;

        const spans = Array.from(textRef.current.children);

        // Initial State
        gsap.set(spans, {
            color: inactiveColor,
            opacity: 0.5,
            textDecorationColor: inactiveColor
        });

        gsap.set(spans[0], {
            color: activeColor,
            opacity: 1,
            textDecorationColor: activeColor
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top", // Pin immediately when it hits the top
                end: "+=150%",    // Scroll duration
                scrub: 1,
                pin: true,        // Pin the entire white card
                pinSpacing: true, // Push next content down until animation ends
                invalidateOnRefresh: true,
            }
        });

        // Animation Steps
        tl.to({}, { duration: 0.5 }); // Small pause before starting

        spans.forEach((span, i) => {
            if (i === spans.length - 1) return;
            const currentSpan = spans[i];
            const nextSpan = spans[i + 1];

            tl.add(`step-${i}`)
                .to(currentSpan, {
                    color: inactiveColor,
                    textDecorationColor: inactiveColor,
                    opacity: 0.5,
                    duration: 0.5,
                    ease: "power1.inOut"
                }, `step-${i}`)
                .to(nextSpan, {
                    color: activeColor,
                    textDecorationColor: activeColor,
                    opacity: 1,
                    duration: 0.5,
                    ease: "power1.inOut"
                }, `step-${i}`);
        });

        tl.to({}, { duration: 0.5 }); // Small pause after finishing

    }, { scope: containerRef });

    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

    return (
        <div 
            ref={containerRef} 
            className='bg-white h-[90vh] w-full rounded-b-[50px] md:rounded-b-[100px] overflow-hidden flex flex-col'
        >
            <div className='flex-grow flex flex-col justify-center items-center w-full max-w-[1380px] mx-auto px-4 md:px-8 py-8'>
                
                {/* Label */}
                <p className='uppercase outfit text-sm md:text-lg font-bold text-[#696969] text-center tracking-[2px] md:tracking-[2.7px] mb-8 md:mb-12'>
                    About us
                </p>

                {/* Animated Text */}
                <h1
                    ref={textRef}
                    className='text-2xl md:text-4xl max-w-[950px] text-center mx-auto leading-normal md:leading-relaxed reloceta font-medium'
                >
                    <span className='inline-block mr-1 md:mr-2'>We blend strategy, creativity & technology to deliver</span>
                    <span className='inline-block mr-1 md:mr-2'><span className='underline decoration-2 md:decoration-3 underline-offset-4 md:underline-offset-8'>measurable results</span> - because every pixel, every click, and</span>
                    <span className='inline-block mr-1 md:mr-2'>every campaign should <span className='underline decoration-2 md:decoration-3 underline-offset-4 md:underline-offset-8'>move your business forward!</span></span>
                </h1>

                {/* Grid + Button */}
                <div className='mt-10 md:mt-16 w-full flex flex-col items-center'>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 w-full border-t border-l border-[#E9E9E9]'>
                        {numbers.map((num) => (
                            <div
                                key={num}
                                className='w-full flex items-center justify-center border-r border-b border-[#E9E9E9] py-6 md:py-[30px] px-2 md:px-4 hover:bg-gray-50 transition-colors duration-300'
                            >
                                <span className="text-[#9CA3AF] font-bold text-sm md:text-lg">OneSuite</span>
                            </div>
                        ))}
                    </div>

                    <button className='mt-8 md:mt-12 px-8 md:px-10 py-2.5 md:py-3 rounded-full border border-[#002A15] text-[#000000] text-sm md:text-base font-medium hover:bg-[#2B2B2B] hover:text-white transition-all duration-300'>
                        Learn More
                    </button>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;