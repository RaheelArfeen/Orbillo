'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const AboutUs = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        if (!textRef.current) return;

        const letters = textRef.current.querySelectorAll('.char');

        gsap.to(letters, {
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 75%",
                end: "bottom 25%",
                scrub: 1.2,
            },
            x: 0,
            color: "#000000",
            opacity: 1,
            stagger: 0.02,
            ease: "back.out(1.2)",
        });
    }, { scope: containerRef });

    // Helper: Splits text into words, then words into chars to prevent "me-asurable" breaks
    const renderWords = (text, keyPrefix) => {
        return text.split(" ").map((word, wordIdx) => (
            <span key={`${keyPrefix}-w-${wordIdx}`} className="inline-block whitespace-nowrap">
                {word.split("").map((char, charIdx) => (
                    <span
                        key={`${keyPrefix}-c-${wordIdx}-${charIdx}`}
                        className="char inline-block will-change-transform"
                        style={{
                            color: '#e5e7eb',
                            opacity: 0.3,
                            transform: 'translateX(15px)'
                        }}
                    >
                        {char}
                    </span>
                ))}
                <span className="inline-block">&nbsp;</span>
            </span>
        ));
    };

    return (
        <div ref={containerRef} className='w-full bg-white py-16 md:py-25 px-4 overflow-x-hidden min-h-fit md:h-[90vh] flex items-center md:rounded-b-[100px] rounded-b-[60px]'>
            <div className='w-full max-w-[1200px] mx-auto flex flex-col items-center'>

                <p className='uppercase outfit text-xs md:text-sm lg:text-lg font-bold text-[#696969] tracking-[2.7px] mb-8 text-center'>
                    What We Do
                </p>

                <h1
                    ref={textRef}
                    className='recoleta text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl leading-[1.3] md:leading-[1.5] text-center font-medium w-full max-w-[1200px]'
                >
                    {/* Line 1: Strategy & Tech */}
                    <div className="block md:whitespace-nowrap">
                        {renderWords("We blend strategy, creativity & technology to deliver", "l1")}
                    </div>

                    {/* Line 2: Measurable results & Detail */}
                    <div className="block md:whitespace-nowrap">
                        {renderWords("measurable results - because every pixel, every click, and", "l2")}
                    </div>

                    {/* Line 3: Final Call to Action */}
                    <div className="block md:whitespace-nowrap">
                        {renderWords("every campaign should move your business forward!", "l3")}
                    </div>
                </h1>

                <button className='mt-10 md:mt-16 px-8 md:px-12 py-3 rounded-full border border-[#002A15] text-[#000000] text-sm md:text-base font-medium hover:bg-[#2B2B2B] hover:text-white transition-all duration-300 backdrop-blur-sm bg-white/50'>
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default AboutUs;