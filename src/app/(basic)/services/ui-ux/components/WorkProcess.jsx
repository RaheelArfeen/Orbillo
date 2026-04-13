'use client'

import React, { useRef } from 'react';
import Marquee from 'react-fast-marquee';
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';

const CARD_CONTENT = [
    {
        id: '01',
        title: 'Discovery & Brand Understanding',
        content: 'We dig into your users, goals and competitors to build a design strategy that actually works.',
        bgColor: 'bg-[#E5FFCA]'
    },
    {
        id: '02',
        title: 'Wireframing & UX Strategy',
        content: 'Low-fidelity wireframes that map out the user journey before a single pixel is designed.',
        bgColor: 'bg-[#FFCFEA]'
    },
    {
        id: '03',
        title: 'UI Design & Prototyping',
        content: 'High-fidelity designs and clickable prototypes built for real user testing and stakeholder approval.',
        bgColor: 'bg-[#FAE4B6]'
    },
    {
        id: '04',
        title: 'Handoff & Launch Support',
        content: 'Clean developer handoff with full design assets, specs and support until your product goes live.',
        bgColor: 'bg-[#E5C6FE]'
    },
]

const Card = ({ i, title, content, bgColor, id, progress, range, targetScale }) => {

    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div className="h-[25vh] flex items-start justify-center sticky top-[15vh]">
            <motion.div
                style={{
                    scale,
                    top: `calc(-5vh + ${i * 25}px)`
                }}
                className={`relative flex flex-col justify-center ${bgColor} p-12 rounded-3xl max-w-[650px] w-full text-black origin-top shadow-lg border border-black/5`}
            >
                <span className='bricolage text-2xl font-medium leading-[140%]'>{id}</span>
                <h1 className='bricolage text-2xl font-medium leading-[140%] mt-8 mb-5'>{title}</h1>
                <h2 className='outfit text-lg leading-[140%]'>{content}</h2>
            </motion.div>
        </div>
    )
}

const WorkProcess = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="relative">
            <section ref={containerRef} className='max-w-[1380px] mx-auto px-4 py-12 md:py-30 relative mb-25'>
                <div className='flex items-start justify-between gap-10 lg:gap-0 flex-col lg:flex-row'>

                    <div className='lg:sticky lg:top-32 self-start space-y-8 lg:text-left text-center w-full lg:w-[40%] mb-10 flex flex-col items-center lg:items-start'>
                        <p className='uppercase outfit text-sm font-bold text-[#07302C]/55 tracking-[2px]'>
                            work Process
                        </p>
                        <h1 className='text-3xl md:text-5xl max-w-[450px] bricolage font-semibold text-[#212121] leading-[122%] tracking-tight'>
                            How We Design, <span className='playfair'>Build & Deliver</span> Your UI UX Project
                        </h1>
                    </div>

                    <div className='w-full lg:w-auto grid gap-20'>
                        {CARD_CONTENT.map((card, i) => {
                            const targetScale = 1 - ((CARD_CONTENT.length - 1 - i) * 0.05);

                            return (
                                <Card
                                    key={i}
                                    i={i}
                                    {...card}
                                    progress={smoothProgress}
                                    range={[i * 0.25, 1]}
                                    targetScale={targetScale}
                                />
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WorkProcess;