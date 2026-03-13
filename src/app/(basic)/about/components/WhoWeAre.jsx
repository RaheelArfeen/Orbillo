import React from 'react';
import Image1 from '../Images/Image1.webp'
import Image2 from '../Images/Image2.webp'
import Image from 'next/image';

const WhoWeAre = () => {
    return (
        <div className='w-full overflow-hidden'>
            {/* Added px-5 for mobile side padding */}
            <section className='max-w-[1380px] mx-auto py-16 lg:py-25 px-4 md:px-12 2xl:px-0'>

                {/* Top Section: Stacked on mobile (flex-col), Row on desktop (md:flex-row) */}
                <div className='flex flex-col lg:flex-row items-start justify-between gap-10 xl:gap-0'>
                    <p className='outfit uppercase text-[#696969] font-bold text-sm md:text-base tracking-[2.7px] whitespace-nowrap'>
                        Who We Are
                    </p>
                    <p className='outfit text-xl md:text-2xl leading-[140%] tracking-[-0.2px] text-[#373737] w-full max-w-[730px] flex flex-col gap-4'>
                        <span>At Orbillo, we believe that every business challenge can be solved through the right design approach..</span>
                        <span>We’re a team of experienced designers, developers, and marketers — each with over a decade of experience helping brands turn complexity into clarity and strategy into growth.</span>
                    </p>
                </div>

                <div className='bricolage mt-16 flex flex-col gap-10 font-medium text-[#07302C] md:mt-32 md:gap-5 lg:mt-40'>

                    {/* First Row - Centered on Mobile, Left-aligned on Desktop */}
                    <div className='flex flex-col items-center gap-3 md:flex-row md:justify-start md:gap-6'>
                        <h1 className='text-center text-4xl text-[#317D3D] md:text-left md:text-5xl 2xl:text-7xl'>
                            We Don't Just Design
                        </h1>

                        <div className='flex items-center gap-3'>
                            <Image
                                src={Image1}
                                className='h-10 w-auto object-contain md:h-12 lg:h-15'
                                alt='Decorative Icon'
                            />
                            <span className='text-4xl md:text-5xl 2xl:text-7xl'>For Screens;</span>
                        </div>
                    </div>

                    {/* Second Row - Centered on Mobile, Right-aligned on Desktop */}
                    <div className='flex flex-col items-center gap-3 md:flex-row md:justify-end md:gap-6'>
                        <div className='flex items-center gap-3'>
                            <Image
                                src={Image2}
                                className='h-9 w-auto object-contain md:h-10 lg:h-13'
                                alt='Impact Icon'
                            />
                            <span className='text-4xl md:text-5xl 2xl:text-7xl'>We Design for</span>
                        </div>

                        <h1 className='text-center text-4xl text-[#317D3D] md:text-left md:text-5xl 2xl:text-7xl'>
                            Business Impact.
                        </h1>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default WhoWeAre;