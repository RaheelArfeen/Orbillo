import React from 'react';

const Hero = () => {
    return (
        <div className="relative overflow-hidden flex items-center justify-center">
            {/* Dark Overlay */}
            <div className='absolute inset-0 z-15 bg-linear-to-b from-transparent to-[#11180B]/30'></div>

            {/* Green Overlay */}
            <div className="absolute inset-0 z-10 bg-[#022B10] mix-blend-darken"></div>

            {/* Top lighting */}
            <div className='absolute -top-10 -translate-y-1/2 h-[450px] w-[600px] bg-[#D6F55B]/33 rounded-full blur-[150px] z-20'></div>

            {/* Background Video */}
            <div className="absolute inset-0 z-5">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/videos/BackgroundVideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </div>

            <section className='z-20 text-center py-30 pt-50 mb-20 px-4 flex flex-col items-center justify-center gap-4'>
                <p className='outfit uppercase text-[#C7C7C7] font-bold text-sm md:text-lg tracking-[2.7px]'>CONTACT US</p>
                <h1 className='lg:text-6xl md:text-5xl min-[400px]:text-3xl text-2xl max-[350px]:text-xl 2 max-[350px]:p-0 capitalize leading-[130%] md:max-w-[1000px] max-w-[450px] recoleta'>
                    <span>Let’s Build Something</span> {' '}
                    <span>
                        <span className='text-[#C9FF90] underline decoration-[#C9FF90] decoration-3 underline-offset-5'>Great Together</span>
                    </span>
                </h1>

                <p className='text-center outfit text-lg md:text-xl text-[#CDD5D4] max-w-[600px]'>At Orbillo, we make digital simple, powerful and growth-focused... so you can focus on what you do best.</p>
            </section>
        </div>
    );
};

export default Hero;