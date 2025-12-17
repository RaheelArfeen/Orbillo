import React from 'react';

const FeaturedClients = () => {

    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

    return (
        <div>
            {/* Added px-5 for mobile padding, adjusted vertical padding for mobile vs desktop */}
            <section className='max-w-[1380px] mx-auto py-12 md:py-25 px-5 2xl:px-0'>
                
                {/* Changed to flex-col for mobile, flex-row for desktop. Added gap for spacing when stacked. */}
                <div className='flex flex-col md:flex-row items-start md:items-end justify-between w-full gap-8 md:gap-0'>
                    <div className='w-full md:w-auto'>
                        <p className='outfit uppercase text-[#696969] font-bold text-sm md:text-lg tracking-[2.7px] mb-4 md:mb-7'>
                            Our Featured Clients
                        </p>
                        {/* Made text smaller on mobile (3xl) vs desktop (4xl) */}
                        <h1 className='text-[#696969] recoleta text-3xl md:text-4xl leading-[130%] md:leading-[140%] max-w-full md:max-w-[690px] -tracking-[1px]'>
                            We’ve proudly collaborated with businesses that believe in the power of design
                        </h1>
                    </div>
                    
                    {/* Adjusted text size and width for mobile */}
                    <p className='text-[#17241F] outfit text-lg md:text-2xl leading-[140%] w-full md:max-w-[555px]'>
                        Ship7, Islam Rayhan & Associates, Axis IT BD, SG Widget, Page Speed Plus, and more.
                    </p>
                </div>

                <div className='mt-10 md:mt-15 w-full flex flex-col items-center flex-shrink-0'>
                    {/* Grid is already responsive, just ensured full width behavior */}
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 w-full border-t border-l border-[#E9E9E9]'>
                        {numbers.map((num) => (
                            <div
                                key={num}
                                className='hover:bg-gray-50 transition duration-300 w-full flex items-center justify-center border-r border-b border-[#E9E9E9] py-6 md:py-8 px-2 cursor-pointer group'
                            >
                                <span className="text-[#9CA3AF] font-bold text-sm md:text-lg group-hover:text-[#002A15] transition-colors text-center">
                                    OneSuite
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeaturedClients;