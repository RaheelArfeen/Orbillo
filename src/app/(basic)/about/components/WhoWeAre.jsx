import React from 'react';

const WhoWeAre = () => {
    return (
        <div className='w-full overflow-hidden'>
            {/* Added px-5 for mobile side padding */}
            <section className='max-w-[1380px] mx-auto py-16 lg:py-25 px-4 md:px-12 2xl:px-0'>

                {/* Top Section: Stacked on mobile (flex-col), Row on desktop (md:flex-row) */}
                <div className='flex flex-col lg:flex-row items-start justify-between gap-10 xl:gap-0'>
                    <p className='outfit uppercase text-[#696969] font-bold text-sm md:text-lg tracking-[2.7px] whitespace-nowrap'>
                        Who We Are
                    </p>
                    <p className='outfit text-xl md:text-2xl xl:text-3xl leading-[140%] tracking-[-0.2px] text-[#373737] w-full md:max-w-[650px] lg:max-w-[880px] flex flex-col gap-4'>
                        <span>At Orbillo, we believe that every business challenge can be solved through the right design approach..</span>
                        <span>We’re a team of experienced designers, developers, and marketers — each with over a decade of experience helping brands turn complexity into clarity and strategy into growth.</span>
                    </p>
                </div>

                <div className='reloceta text-3xl md:text-5xl 2xl:text-7xl text-[#07302C] flex flex-col gap-4 md:gap-5 mt-16 md:mt-32 lg:mt-40'>

                    <div className='hidden lg:block max-2xl:max-w-[1000px] w-full mx-auto'>
                        <div className='flex flex-wrap items-center justify-start gap-3 md:gap-6 w-full mb-2'>
                            <h1 className='text-[#317D3D]'>We Dont Just Design</h1>

                            <img
                                src={'https://i.ibb.co.com/dwTf5zm8/Image1.png'}
                                className='h-8 sm:h-12 md:h-15 w-auto object-contain'
                                alt='Image 1'
                            />
                            <span>For Screens;</span>
                        </div>

                        <div className='flex flex-wrap items-center justify-start md:justify-end gap-3 md:gap-6 w-full'>
                            <img
                                src={'https://i.ibb.co.com/bMfPwJHL/Image2.png'}
                                className='h-7 sm:h-10 md:h-13 w-auto object-contain'
                                alt='Image 2'
                            />
                            <span>We Design for</span>
                            <h1 className='text-[#317D3D]'>Business Impact.</h1>
                        </div>
                    </div>


                    <div className='block lg:hidden text-3xl md:text-3xl 2xl:text-7xl'>
                        <div className='flex flex-col items-center justify-start gap-3 md:gap-6 w-full'>
                            <div className='flex flex-wrap items-center justify-start gap-3 md:gap-6 w-full'>
                                <span className='text-[#317D3D]'>We Dont Just Design</span>

                                <img
                                    src={'https://i.ibb.co.com/dwTf5zm8/Image1.png'}
                                    className='h-8 sm:h-12 lg:h-15 w-auto object-contain'
                                    alt='Image 1'
                                />
                                <span>For Screens;</span>

                            </div>

                            <div className='flex flex-wrap items-center justify-start md:justify-end gap-3 md:gap-6 w-full'>
                                <img
                                    src={'https://i.ibb.co.com/bMfPwJHL/Image2.png'}
                                    className='h-7 sm:h-10 lg:h-13 w-auto object-contain'
                                    alt='Image 2'
                                />
                                <span>We Design for</span>
                                <span className='text-[#317D3D]'>Business Impact.</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default WhoWeAre;