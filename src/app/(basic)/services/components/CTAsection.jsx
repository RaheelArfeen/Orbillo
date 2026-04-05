import Image from 'next/image';
import CTAbg from '../Image/CTAbg.avif';
import React from 'react';
import Link from 'next/link';

const CTAsection = () => {
    return (
        // Adjusted outer padding for mobile vs desktop
        <div className='relative w-full bg-white py-12 md:py-24 px-4'>

            <section className='relative z-10 max-w-[1380px] mx-auto flex flex-col items-center justify-center py-16 md:py-24 rounded-2xl overflow-hidden'>

                {/* Background Image Container */}
                <div className='absolute inset-0 z-0'>
                    <Image
                        className='w-full h-full object-cover pointer-events-none'
                        src={CTAbg}
                        alt="Background"
                        priority // Added priority for LCP optimization
                    />
                    {/* Optional: Overlay to ensure text readability if the image is too bright */}
                    <div className="absolute inset-0 bg-white/10"></div>
                </div>

                {/* Content Container - Increased z-index to 20 to ensure it's above image */}
                <div className='relative z-20 flex flex-col items-center px-6'>
                    <h1 className='text-3xl md:text-5xl bricolage font-semibold text-[#0C2E24] max-w-[700px] text-center mb-8 leading-tight'>
                        Not get your Answer yet?Not get your Answer yet?
                    </h1>

                    <button className='bg-[#02403A] py-3 px-8 md:px-10 text-lg md:text-xl outfit rounded-full hover:bg-[#035a52] transition-transform hover:scale-105 active:scale-95 duration-200'>
                        <Link href={'/contact'}>
                            Contact Us
                        </Link>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default CTAsection;