'use client'

import React, { useRef } from 'react';
import Marquee from 'react-fast-marquee';
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';

const CARD_CONTENT = [
    {
        id: '01',
        title: 'Brand & Audience Understanding',
        content: 'We begin by understanding your brand, audience, and goals for social media. This includes reviewing your current presence, identifying your target audience, and defining the type of content that best represents your brand. This foundation helps us create content that feels consistent and purposeful.',
        bgColor: 'bg-[#E5FFCA]'
    },
    {
        id: '02',
        title: 'Content Strategy & Planning',
        content: 'Next, we develop a structured content direction. We define content themes, visual style, and messaging tone so your social presence stays consistent across posts. A clear plan ensures your brand communicates the right message at the right time.',
        bgColor: 'bg-[#FFCFEA]'
    },
    {
        id: '03',
        title: 'Design & Content Creation',
        content: 'Our team then designs high-quality social media visuals tailored to your brand identity. From static posts to carousels and promotional creatives, every design is crafted to be clear, engaging, and aligned with your brand voice.',
        bgColor: 'bg-[#FAE4B6]'
    },
    {
        id: '04',
        title: 'Consistency & Growth Support',
        content: 'Finally, we help maintain a consistent visual presence across your social channels. Consistent design improves brand recognition, builds trust with your audience, and supports long-term growth on social platforms.',
        bgColor: 'bg-[#E5C6FE]'
    },
]

const Card = ({ i, title, content, bgColor, id, progress, range, targetScale }) => {

    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div className="h-[35vh] flex items-start justify-center sticky top-[15vh]">
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
                        <p className='uppercase outfit text-sm lg:text-lg font-bold text-[#07302C]/55 tracking-[2px]'>
                            work Process
                        </p>
                        <h1 className='text-[28px] md:text-[40px] md:max-w-[500px] max-w-[500px] bricolage text-[#07302C] leading-tight tracking-tight'>
                            How We Shape and Define Your Brand Identity
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