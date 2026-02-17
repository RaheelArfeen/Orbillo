import React from 'react';
import Marquee from 'react-fast-marquee';

const sections = [
    {
        id: 1,
        tag: "Our Mission",
        title: "Design With Purpose",
        description:
            "We solve real business problems through thoughtful, strategic, and purposeful design that creates clarity, connection, and impact.",
        image: "https://i.ibb.co.com/YTBHycMM/image.png",
    },
    {
        id: 2,
        tag: "Our Vision",
        title: "To Become a Global Creative Partner",
        description:
            "We aim to become a trusted creative ally, elevating brands worldwide through smart design and meaningful visual communication.",
        image: "https://i.ibb.co.com/Jwgn4pFp/image.png",
        reverse: true,
    },
    {
        id: 3,
        tag: "Our Goal",
        title: "The Standards We Stand By",
        description: "",
        image: "https://i.ibb.co.com/vCKKjM4Z/image.png",
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
                            Our Vission
                        </span>
                        <span className="text-white text-3xl md:text-4xl lg:text-5xl font-black">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.05155 23.1694L3.41628 20.6729L8.4093 13.3585L0 10.424L1.40155 6.13178L9.85465 8.75969V0H14.6725V8.75969L23.1256 6.13178L24.5271 10.424L16.074 13.3585L21.1109 20.6729L17.4756 23.1694L12.2198 16.2492L7.05155 23.1694Z" fill="white" />
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
                                <img
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