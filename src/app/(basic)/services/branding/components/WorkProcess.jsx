'use client'

import React, { useRef } from 'react';
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';

const CARD_CONTENT = [
    {
        id: '01',
        title: 'Discovery & Brand Understanding',
        content: 'We begin by learning about your business, vision, and market position. Through focused conversations and research, we uncover the story behind your brand and the goals it needs to achieve. This step gives us the clarity needed to build a brand identity that feels authentic, purposeful, and strategically aligned with your long-term growth.',
        bgColor: 'bg-[#E5FFCA]'
    },
    {
        id: '02',
        title: 'Brand Strategy & Positioning',
        content: 'Once we understand your business, we define how your brand should be positioned in the market. We identify your audience, key differentiators, and brand personality. This strategic foundation ensures that every visual and message communicates a clear and consistent brand story.',
        bgColor: 'bg-[#FFCFEA]'
    },
    {
        id: '03',
        title: 'Visual Identity Design',
        content: 'With strategy in place, we craft the visual elements that represent your brand. This includes logo concepts, color systems, typography, and design styles that express your brand’s character. Our goal is to create a distinctive identity that feels professional, memorable, and adaptable across platforms.',
        bgColor: 'bg-[#FAE4B6]'
    },
    {
        id: '04',
        title: 'Brand Guidelines & Implementation',
        content: 'Finally, we organize everything into a clear brand system. You receive structured brand guidelines that ensure consistency across websites, social media, marketing materials, and product interfaces. This makes it easier for your team to maintain a strong and recognizable brand presence everywhere.',
        bgColor: 'bg-[#E5C6FE]'
    },
]

const Card = ({ i, title, content, bgColor, id, progress, range, targetScale }) => {
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div className="h-[45vh] md:h-[40vh] flex items-start justify-center sticky top-[15vh]">
            <motion.div
                style={{
                    scale,
                    top: `calc(-5vh + ${i * 25}px)`
                }}
                className={`relative flex flex-col justify-center ${bgColor} p-8 md:p-12 rounded-3xl max-w-[650px] w-full text-black origin-top shadow-lg border border-black/5`}
            >
                <span className='bricolage text-xl md:text-2xl font-medium opacity-60'>{id}</span>
                <h1 className='bricolage text-2xl md:text-3xl font-semibold leading-tight mt-6 mb-4'>{title}</h1>
                <p className='outfit text-base md:text-lg leading-relaxed text-black/80'>{content}</p>
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
                                    key={card.id}
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