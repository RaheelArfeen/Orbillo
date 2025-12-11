import React, { useRef } from 'react';
import Image from 'next/image';
import { useScroll, motion } from 'framer-motion';
import Bg from '../assets/WhyUsBg.svg';

// --- MOCK DATA ---
const projects = [
    {
        title: "Strategic Design",
        description: "We don't just design; we architect. Our process starts with understanding your core business goals to build a visual language that speaks directly to your audience.",
        color: "#318561",
    },
    {
        title: "Digital Innovation",
        description: "Leveraging the latest frameworks to build lightning-fast, scalable, and future-proof digital products that keep you ahead of the curve.",
        color: "#97869E",
    },
    {
        title: "Growth Focused",
        description: "Every interaction is designed to convert. We use data-driven insights to refine user pathways and maximize your ROI.",
        color: "#318561",
    },
];

// --- CARD COMPONENT ---
const Card = ({ i, title, description, color }) => {
    const container = useRef(null);

    const topOffset = `calc(15vh + ${i * 12}px)`;

    return (
        <div
            ref={container}
            className={`sticky top-0 flex flex-col items-center justify-start px-4 ${i > 0 ? '-mt-10' : ''
                }`}
            style={{ top: topOffset }}
        >
            <motion.div
                style={{
                    backgroundColor: color,
                    "--h-desktop": `calc(600px - (${i * 15}px))`,
                    "--h-mobile": `calc(450px - (${i * 10}px))` // your custom mobile height
                }}
                className="
                  relative flex flex-col w-full max-w-[1100px] rounded-t-[40px]
                  rounded-b-none p-10 origin-top shadow-2xl border-t border-x border-white/10
                  overflow-hidden
                  h-[var(--h-desktop)]        /* default desktop height */
                  max-sm:h-[var(--h-mobile)] /* small device height */
                "
            >
                <div className="flex h-full gap-8 flex-col">

                    <div className="flex justify-between items-center h-[60px] shrink-0">
                        <div className="flex flex-row items-center gap-6">
                            <h2 className="text-3xl md:text-4xl font-serif text-white leading-none mt-[-4px]">
                                {title}
                            </h2>
                        </div>
                    </div>

                    {/* Card Body */}
                    <div className="flex flex-col md:flex-row gap-8 items-start mt-4 h-full">
                        <p className="text-white/80 font-light text-lg leading-relaxed max-w-lg">
                            {description}
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

// --- MAIN COMPONENT ---
const WhyUs = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <div className='relative bg-[#07302C]'>

            {/* Background Image Wrapper */}
            <div className='inset-0 top-0 -z-10 h-full w-full overflow-hidden '>
                <Image
                    src={Bg}
                    alt='What we do background'
                    fill
                    className='object-cover '
                />
            </div>

            {/* CHANGED: Removed 'pb-40' and changed to 'pb-0' */}
            <div className='pt-20 pb-0'>
                <section className='z-30 max-w-[1380px] mx-auto px-6 relative mb-10'>
                    {/* Header */}
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8 mb-20'>
                        <div className='space-y-8 lg:text-left text-center w-full flex flex-col items-center lg:items-start'>
                            <p className='uppercase outfit text-sm lg:text-lg font-bold text-white/55 tracking-[2.7px]'>
                                Why us
                            </p>
                            <h3 className='text-[28px] md:text-[40px] md:max-w-[700px] max-w-[500px] reloceta text-white leading-tight'>
                                <p>We offer a wide rande of <span className='text-[#C9FF90] underline decoration-[#C9FF90] decoration-2 underline-offset-2'>design services</span> to small & medium sized businesses <span className='text-[#C9FF90] underline decoration-[#C9FF90] decoration-2 underline-offset-2'>worldwide</span></p>
                            </h3>
                        </div>
                        <div>
                            <p className='outfit text-xl md:text-2xl text-white/80 lg:max-w-[600px] md:max-w-[400px] max-w-[300px] text-center lg:text-right font-light'>
                                At Orbillo, we make digital simple, powerful and growth-focused
                            </p>
                        </div>
                    </div>
                </section>

                {/* Scrolling cards section */}
                <section ref={container} className='relative z-20 w-full pt-20'>
                    {projects.map((project, i) => {
                        return (
                            <Card
                                key={`p_${i}`}
                                i={i}
                                {...project}
                            />
                        );
                    })}
                </section>
            </div>

        </div>
    );
};

export default WhyUs;