import React from 'react';
import Image from 'next/image';
import OurStoryBg from '../../../assets/OurStoryBg.png';

const OurStory = () => {
    return (
        <div className='relative w-full overflow-hidden'>

            {/* Background Image: using object-cover for better responsiveness */}
            <div className='absolute inset-0 -z-10'>
                <Image
                    src={OurStoryBg}
                    alt="Background"
                    className='w-full h-full max-lg:object-cover'
                />
            </div>

            {/* Container: Added horizontal padding (px) and responsive vertical padding (py) */}
            <section className='max-w-[1380px] mx-auto px-5 md:px-10 py-12 md:py-25'>

                {/* Header Section */}
                <div className='flex flex-col lg:flex-row items-start justify-between gap-6 md:gap-10'>
                    <p className='outfit uppercase text-[#FFFFFF] font-bold text-sm md:text-lg tracking-[2.7px] shrink-0'>
                        Our Story
                    </p>
                    <div className='w-full md:max-w-[880px]'>
                        <p className='outfit text-xl md:text-2xl xl:text-3xl leading-[140%] tracking-[-0.2px] text-[#FDFFF5] flex flex-col gap-4'>
                            Founded by industry professionals who’ve spent 10–15 years in the creative and digital field, Orbillo was built on one goal — to bridge the gap between design and business outcomes.
                        </p>
                    </div>
                </div>

                {/* Content Section: Stacks vertically on mobile, horizontal on desktop */}
                <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between mt-12 lg:mt-20 gap-10 xl:gap-0'>

                    {/* Text Block */}
                    <div className='outfit text-xl md:text-2xl xl:text-3xl leading-[140%] tracking-[-0.2px] text-[#A7A7A7] w-full lg:max-w-[880px] flex flex-col gap-6 md:gap-8'>
                        <p>
                            We’ve worked across industries, helping startups scale and enterprises simplify their digital presence with strategic design thinking.
                        </p>
                        <p>
                            We’ve worked across industries, helping startups scale and enterprises simplify their digital presence with strategic design thinking.
                        </p>
                    </div>

                    {/* Image Block: Full width on mobile, fixed height on desktop */}
                    <div className='w-full flex justify-center lg:justify-end'>
                        <img
                            src={'https://i.ibb.co.com/1t2d9R2x/Our-Story.png'}
                            alt="Our Story Visual"
                            className='w-full lg:max-w-[400px] lg:max-w-none h-auto lg:h-[400px] object-contain'
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurStory;