'use client'

import React, { useRef } from 'react';
import Marquee from 'react-fast-marquee';
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';

const CARD_CONTENT = [
    {
        id: '01',
        title: 'Discovery & Brand Understanding',
        content: 'We begin by understanding your brand’s story, values, mission, and long-term vision. This helps us uncover what makes your brand truly unique.',
        bgColor: 'bg-[#E5FFCA]'
    },
    {
        id: '02',
        title: 'Discovery & Brand Understanding',
        content: 'We begin by understanding your brand’s story, values, mission, and long-term vision. This helps us uncover what makes your brand truly unique.',
        bgColor: 'bg-[#FFCFEA]'
    },
    {
        id: '03',
        title: 'Discovery & Brand Understanding',
        content: 'We begin by understanding your brand’s story, values, mission, and long-term vision. This helps us uncover what makes your brand truly unique.',
        bgColor: 'bg-[#FAE4B6]'
    },
    {
        id: '04',
        title: 'Discovery & Brand Understanding',
        content: 'We begin by understanding your brand’s story, values, mission, and long-term vision. This helps us uncover what makes your brand truly unique.',
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
                <span className='recoleta text-2xl leading-[140%]'>{id}</span>
                <h1 className='recoleta text-2xl leading-[140%] mt-8 mb-5'>{title}</h1>
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
            <div className="w-full bg-[#5ba32b] py-6 border-y border-[#C9FF90]/30 relative z-30">
                <Marquee autoFill pauseOnHover speed={80} className="overflow-hidden">
                    {[
                        'ui/ux design',
                        'wordpress',
                        'social media design',
                        'Branding & identity',
                    ].map((item, i) => (
                        <div key={i} className="capitalize flex items-center">
                            <span className="text-white text-3xl lg:text-6xl font-serif mx-6 lg:mx-10 tracking-wide recoleta">
                                {item}
                            </span>
                            <span className="text-white text-5xl font-black">•</span>
                        </div>
                    ))}
                </Marquee>
            </div>

            <section ref={containerRef} className='max-w-[1380px] mx-auto px-5 md:px-10 py-12 md:py-30 relative mb-25'>
                <div className='flex items-start justify-between gap-10 lg:gap-0 flex-col lg:flex-row'>

                    <div className='lg:sticky lg:top-32 self-start space-y-8 lg:text-left text-center w-full lg:w-[40%] mb-10 flex flex-col items-center lg:items-start'>
                        <p className='uppercase outfit text-sm lg:text-lg font-bold text-[#07302C]/55 tracking-[2.7px]'>
                            work Process
                        </p>
                        <h1 className='text-[28px] md:text-[40px] md:max-w-[500px] max-w-[500px] recoleta text-[#07302C] leading-tight [font-variant-ligatures:none]'>
                            How We Shape and Define Your Brand Identity
                        </h1>
                    </div>

                    <div className='w-full lg:w-auto grid gap-6'>
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