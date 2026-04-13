import React from 'react';
import Marquee from 'react-fast-marquee';
import mission from '../OurVissionImages/Mission.avif'
import vission from '../OurVissionImages/Vission.avif'
import goal from '../OurVissionImages/Goal.avif'
import Image from 'next/image';

const sections = [
    {
        id: 1,
        tag: "Our Mission",
        title: "Design With Purpose",
        description:
            "We solve real business problems through thoughtful, strategic, and purposeful design that creates clarity, connection, and impact.",
        image: mission,
    },
    {
        id: 2,
        tag: "Our Vision",
        title: "To Become a Global Creative Partner",
        description:
            "We aim to become a trusted creative ally, elevating brands worldwide through smart design and meaningful visual communication.",
        image: vission,
        reverse: true,
    },
    {
        id: 3,
        tag: "Our Goal",
        title: "The Standards We Stand By",
        description: "",
        image: goal,
        bullets: [
            "Build authentic brands that truly stand out.",
            "Design interfaces that simplify life.",
            "Work collaboratively, transparently, and with ease.",
            "Push creativity through exploration and continuous learning.",
            "Become the trusted design partner for clarity and strong identity.",
        ],
    },
];

const OurTeam = () => {
    return (
        <div className="w-full overflow-x-hidden">

            <div className="w-full bg-[#5ba32b] py-4 lg:py-6 border-y border-[#C9FF90]/30 relative z-30">
                <Marquee
                    autoFill={true}
                    pauseOnHover={false}
                    speed={80}
                    className="overflow-hidden"
                >
                    <div className="flex items-center">
                        <span className="text-white text-3xl md:text-5xl lg:text-6xl font-serif mx-4 lg:mx-10 tracking-tight bricolage">
                            Our Vision
                        </span>
                        <span className="text-white text-3xl md:text-4xl lg:text-5xl font-black">
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.0749 12.1C4.94157 12.1 3.91657 11.8334 2.9999 11.3C2.08324 10.75 1.3499 10.025 0.799903 9.12502C0.266569 8.20836 -9.74834e-05 7.18336 -9.74834e-05 6.05002C-9.74834e-05 4.91669 0.266569 3.90002 0.799903 3.00002C1.3499 2.08336 2.08324 1.35836 2.9999 0.825023C3.91657 0.275024 4.94157 2.3663e-05 6.0749 2.3663e-05C7.19157 2.3663e-05 8.20824 0.275024 9.1249 0.825023C10.0416 1.35836 10.7666 2.08336 11.2999 3.00002C11.8332 3.90002 12.0999 4.91669 12.0999 6.05002C12.0999 7.18336 11.8332 8.20836 11.2999 9.12502C10.7666 10.025 10.0416 10.75 9.1249 11.3C8.20824 11.8334 7.19157 12.1 6.0749 12.1Z" fill="white"/>
</svg>

                        </span>
                    </div>
                </Marquee>
            </div>

            <section className='max-w-[1380px] mx-auto py-16 lg:py-25 px-4 md:px-12 2xl:px-0'>
                {sections.map((section) => (
                    <div
                        key={section.id}
                        className={`flex flex-col lg:flex-row items-center justify-between py-12 lg:py-24 max-md:border-b border-gray-200 last:border-none ${section.reverse ? "lg:flex-row-reverse" : ""}`}
                    >
                        {/* Text Container */}
                        <div className='w-full lg:w-1/2 flex flex-col items-start'>
                            <p className='outfit uppercase text-[#696969] font-bold text-base lg:text-lg tracking-[2.7px] mb-3 lg:mb-8'>
                                {section.tag}
                            </p>

                            <h1 className='bricolage text-2xl md:text-[32px] text-[#212121] mb-4 leading-[1.1]'>
                                {section.title}
                            </h1>

                            {/* Description */}
                            {section.description && !section.bullets && (
                                <p className='outfit text-base md:text-lg lg:text-2xl text-[#696969] max-w-full lg:max-w-[580px] leading-relaxed'>
                                    {section.description}
                                </p>
                            )}

                            {/* Bullet List */}
                            {section.bullets && (
                                <div className='outfit text-base md:text-lg lg:text-2xl text-[#696969] max-w-full lg:max-w-[600px] flex flex-col gap-3'>
                                    {section.bullets.map((item, index) => (
                                        <div key={index} className='flex items-start gap-3'>
                                            <span className='text-lg lg:text-3xl leading-6 lg:leading-8 text-[#696969]'>•</span>
                                            <span className='leading-snug'>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Image Container */}
                        <div className='flex justify-center relative mt-4 lg:mt-0'>
                            <div className='relative w-full max-w-[500px]'>
                                <Image
                                    src={section.image}
                                    className='w-full h-auto object-cover rounded-xl pointer-events-none'
                                    alt={section.tag}
                                />
                            </div>
                        </div>

                    </div>
                ))}
            </section>
        </div>
    );
};

export default OurTeam;