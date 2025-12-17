import React from 'react';
import Marquee from 'react-fast-marquee'; // Kept imports in case you uncomment the marquee later

const sections = [
    {
        id: 1,
        tag: "Our Mission",
        title: "Design With Purpose",
        description:
            "We solve real business problems through thoughtful, strategic, and purposeful design that creates clarity, connection, and impact.",
        image: "https://i.ibb.co.com/rKRBnrVX/Our-Mission.png",
        bullets: null,
        reverse: false,
    },
    {
        id: 2,
        tag: "Our Vision",
        title: "To Become a Global Creative Partner",
        description:
            "We aim to become a trusted creative ally, elevating brands worldwide through smart design and meaningful visual communication.",
        image: "https://i.ibb.co.com/xKG7ZZ3m/Our-Vission.png",
        bullets: null,
        reverse: true,
    },
    {
        id: 3,
        tag: "Our Goal",
        title: "The Standards We Stand By",
        description: "",
        image: "https://i.ibb.co.com/Ng2wfWFX/Our-Goal.png",
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
        <div>

            <div className="w-full bg-[#5ba32b] py-6 border-y border-[#C9FF90]/30 relative z-30">
                <Marquee
                    autoFill={true}
                    pauseOnHover={false}
                    speed={80}
                    className="overflow-hidden"
                >
                    <div className="flex items-center">
                        <span className="text-white text-3xl lg:text-6xl font-serif mx-6 lg:mx-10 tracking-wide recoleta">
                            Our Team
                        </span>
                        <span className="text-white text-5xl font-black">•</span>
                    </div>
                </Marquee>
            </div>
            <section className='max-w-[1200px] mx-auto px-5 lg:px-10'>

                {sections.map((section) => (
                    <div
                        key={section.id}
                        className={`flex flex-col lg:flex-row items-center justify-between max-w-[1200px] mx-auto py-12 lg:py-20 gap-10 lg:gap-16 max-lg:border-b border-gray-200 mb-5 last:border-none ${section.reverse ? "lg:flex-row-reverse" : ""}`}
                    >
                        {/* Text Container */}
                        <div className='w-full lg:w-1/2'>
                            <p className='outfit uppercase text-[#696969] font-bold text-xs lg:text-sm tracking-[2.7px] mb-4 lg:mb-8'>
                                {section.tag}
                            </p>

                            <h1 className='recoleta text-3xl lg:text-4xl text-[#17241F] mb-4 lg:mb-6 leading-tight'>
                                {section.title}
                            </h1>

                            {/* Description if exists */}
                            {section.description && !section.bullets && (
                                <p className='outfit text-lg lg:text-2xl text-[#696969] max-w-full lg:max-w-[600px] leading-relaxed'>
                                    {section.description}
                                </p>
                            )}

                            {/* Bullet List if exists */}
                            {section.bullets && (
                                <div className='outfit text-lg lg:text-2xl text-[#696969] max-w-full lg:max-w-[600px] flex flex-col gap-3'>
                                    {section.bullets.map((item, index) => (
                                        <div key={index} className='flex items-start gap-3'>
                                            <span className='text-xl lg:text-3xl leading-6 lg:leading-8 text-[#696969]'>•</span>
                                            <span className='leading-snug'>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Image Container */}
                        <div className='flex justify-center'>
                            <img
                                src={section.image}
                                alt={section.tag}
                            />
                        </div>

                    </div>
                ))}
            </section>
        </div>
    );
};

export default OurTeam;