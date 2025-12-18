import React from 'react';
import Marquee from 'react-fast-marquee';

const sections = [
    {
        id: 1,
        tag: "Our Mission",
        title: "Design With Purpose",
        description:
            "We solve real business problems through thoughtful, strategic, and purposeful design that creates clarity, connection, and impact.",
        image: "https://i.ibb.co.com/tTgW9NTX/image.png",
        ImgText: "100+ Clients Worldwide",
        ImgTextBg: 'bg-[#C9FF90]',
        // Mobile: Inside bottom right. Desktop: Hanging off bottom right.
        ImgTextPosition: 'bottom-4 right-4 lg:-bottom-[10px] lg:right-[10px]',
        bullets: null,
        reverse: false,
    },
    {
        id: 2,
        tag: "Our Vision",
        title: "To Become a Global Creative Partner",
        description:
            "We aim to become a trusted creative ally, elevating brands worldwide through smart design and meaningful visual communication.",
        image: "https://i.ibb.co.com/Z6xp6b2D/image.png",
        ImgText: 'Everything we create is Everything we create is',
        // Mobile: Top left inside. Desktop: Top left offset.
        ImgTextPosition: 'top-4 left-4 lg:top-[160px] lg:left-[0px]',
        ImgTextBg: 'bg-[#FDBD39]',
        bullets: null,
        reverse: true,
    },
    {
        id: 3,
        tag: "Our Goal",
        title: "The Standards We Stand By",
        description: "",
        image: "https://i.ibb.co.com/SXdLngM9/image.png",
        // Mobile: Bottom right inside. Desktop: Floating off to the right.
        ImgTextPosition: 'bottom-4 right-4 lg:top-[160px] lg:-right-[60px]',
        ImgTextBg: 'bg-[#C9FF90]',
        ImgText: "Everything we create is",
        reverse: false,
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
        <div className="w-full overflow-x-hidden"> {/* Prevent horizontal scroll */}

            <div className="w-full bg-[#5ba32b] py-4 lg:py-6 border-y border-[#C9FF90]/30 relative z-30">
                <Marquee
                    autoFill={true}
                    pauseOnHover={false}
                    speed={80}
                    className="overflow-hidden"
                >
                    <div className="flex items-center">
                        <span className="text-white text-3xl md:text-5xl lg:text-6xl font-serif mx-4 lg:mx-10 tracking-wide recoleta">
                            Our Team
                        </span>
                        <span className="text-white text-3xl md:text-4xl lg:text-5xl font-black">•</span>
                    </div>
                </Marquee>
            </div>

            <section className='max-w-[1320px] mx-auto px-5 md:px-8 lg:px-10'>
                {sections.map((section) => (
                    <div
                        key={section.id}
                        className={`flex flex-col lg:flex-row items-center justify-between py-12 lg:py-24 gap-10 lg:gap-16 border-b border-gray-200 last:border-none ${section.reverse ? "lg:flex-row-reverse" : ""}`}
                    >
                        {/* Text Container */}
                        <div className='w-full lg:w-1/2 flex flex-col items-start'>
                            <p className='outfit uppercase text-[#696969] font-bold text-xs lg:text-sm tracking-[2.7px] mb-3 lg:mb-8'>
                                {section.tag}
                            </p>

                            <h1 className='recoleta text-3xl md:text-4xl lg:text-5xl text-[#17241F] mb-4 lg:mb-6 leading-[1.1]'>
                                {section.title}
                            </h1>

                            {/* Description */}
                            {section.description && !section.bullets && (
                                <p className='outfit text-base md:text-lg lg:text-2xl text-[#696969] max-w-full lg:max-w-[600px] leading-relaxed'>
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
                        <div className='w-full lg:w-1/2 flex justify-center relative mt-4 lg:mt-0'>
                            <div className='relative w-full max-w-[500px] lg:max-w-[600px]'>
                                <img
                                    src={section.image}
                                    className='w-full h-auto object-cover rounded-xl pointer-events-none'
                                    alt={section.tag}
                                />
                                <div className={`absolute z-50 ${section.ImgTextPosition} ${section.ImgTextBg} py-3 px-5 rounded-lg max-w-[180px] lg:max-w-[215px] h-fit shadow-sm`}>
                                    <p className='text-[#373737] outfit text-xs lg:text-base leading-[140%] font-medium'>
                                        {section.ImgText}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </section>
        </div>
    );
};

export default OurTeam;