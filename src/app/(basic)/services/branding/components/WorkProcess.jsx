'use client'

import React, { useRef } from 'react';
import Marquee from 'react-fast-marquee';
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';

const CARD_CONTENT = [
    {
        id: '01',
        title: 'Discovery & Brand Understanding ',
        content: 'We dig into your business, audience and competitors to build a brand strategy that truly reflects who you are.',
        bgColor: 'bg-[#E5FFCA]'
    },
    {
        id: '02',
        title: 'Concept & Direction ',
        content: 'We explore visual directions and present initial brand concepts for your feedback and alignment.',
        bgColor: 'bg-[#FFCFEA]'
    },
    {
        id: '03',
        title: 'Design & Refinement ',
        content: 'We craft your full brand identity, logo, typography, color system and assets, refined until it’s exactly right.',
        bgColor: 'bg-[#FAE4B6]'
    },
    {
        id: '04',
        title: 'Handoff & Brand Launch Support ',
        content: 'Clean delivery of all brand files, guidelines and assets with full support until your brand goes live.',
        bgColor: 'bg-[#E5C6FE]'
    },
]

const Card = ({ i, title, content, bgColor, id, progress, range, targetScale }) => {

    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div className="h-[20vh] flex items-start justify-center sticky top-[15vh]">
            <motion.div
                style={{
                    scale,
                    top: `calc(-5vh + ${i * 25}px)`
                }}
                className={`relative flex flex-col justify-center ${bgColor} p-12 rounded-3xl max-w-[650px] w-full text-black origin-top`}
            >
                <span className='outfit text-sm font-bold leading-[140%] text-[#747474] mb-6'>{id}</span>
                <h1 className='bricolage text-[28px] tracking-tight font-medium leading-[140%] text-[#212121] mb-6'>{title}</h1>
                <h2 className='outfit text-lg text-[#4B4B4B] leading-[140%]'>{content}</h2>
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
                            How We Research,  <span className='playfair'>Design & Deliver</span> Your Brand
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