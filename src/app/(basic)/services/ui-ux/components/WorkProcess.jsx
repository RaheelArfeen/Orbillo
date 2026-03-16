'use client'

import React, { useRef } from 'react';
import Marquee from 'react-fast-marquee';
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';

const CARD_CONTENT = [
    {
        id: '01',
        title: 'Discovery & Product Understanding',
        content: 'We begin by understanding your product, business goals and the users you want to serve. Through research and discussion, we identify the key problems your interface should solve and the outcomes your product needs to achieve. This helps us design experiences that align with both user needs and business objectives.',
        bgColor: 'bg-[#E5FFCA]'
    },
    {
        id: '02',
        title: 'User Flow & Experience Planning',
        content: 'Next, we map how users will interact with your product. We structure the user journey, define key screens and create logical navigation paths that guide users smoothly through the experience. A clear flow reduces confusion and helps users reach their goals faster.',
        bgColor: 'bg-[#FFCFEA]'
    },
    {
        id: '03',
        title: 'Wireframes & Interface Design',
        content: 'Once the structure is defined, we begin designing the interface. Starting with wireframes and moving into high-fidelity UI design, we craft layouts, components and visual systems that feel intuitive and consistent. Every element is designed to support clarity, usability, and brand alignment.',
        bgColor: 'bg-[#FAE4B6]'
    },
    {
        id: '04',
        title: 'Prototype & Design Handoff',
        content: 'Finally, we prepare the designs for development. Interactive prototypes help visualize the full experience, while organized design files ensure a smooth handoff to developers. This step ensures your product moves efficiently from design to launch.',
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