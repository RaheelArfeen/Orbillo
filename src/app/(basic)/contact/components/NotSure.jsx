import React from 'react';
import Marquee from 'react-fast-marquee';

const NotSure = () => {
    return (
        <div>
            <div className="w-full bg-[#5ba32b] py-6 border-y border-[#C9FF90]/30 relative z-30">
                <Marquee
                    autoFill={true}
                    pauseOnHover={true}
                    speed={80}
                    className="overflow-hidden"
                >
                    <div className="capitalize flex items-center">
                        <span className="text-white text-3xl lg:text-6xl font-serif mx-6 lg:mx-10 tracking-wide reloceta">
                            ui/ux design
                        </span>
                        <span className="text-white text-5xl font-black">•</span>
                    </div>
                    <div className="capitalize flex items-center">
                        <span className="text-white text-3xl lg:text-6xl font-serif mx-6 lg:mx-10 tracking-wide reloceta">
                            wordpress
                        </span>
                        <span className="text-white text-5xl font-black">•</span>
                    </div>
                    <div className="capitalize flex items-center">
                        <span className="text-white text-3xl lg:text-6xl font-serif mx-6 lg:mx-10 tracking-wide reloceta">
                            social media design
                        </span>
                        <span className="text-white text-5xl font-black">•</span>
                    </div>
                    <div className="capitalize flex items-center">
                        <span className="text-white text-3xl lg:text-6xl font-serif mx-6 lg:mx-10 tracking-wide reloceta">
                            Branding & identity
                        </span>
                        <span className="text-white text-5xl font-black">•</span>
                    </div>
                </Marquee>
            </div>

            <section className='max-w-[1320px] mx-auto text-center py-10 md:py-25 px-4'>
                <h1 className='reloceta text-4xl text-[#17241F] leading-[140%] -tracking-[1px]'>Not sure where to start?</h1>
                <p className='text-[#696969] text-xl md:text-2xl leading-[140%] outfit'>Just write <span className='text-[#373737]'>“I need help with design”</span> —we’ll take it from there.</p>
                <div className='max-w-[700px] mx-auto'>
                    <a href="https://calendly.com/teamorbillo/30min?back=1&month=2025-11" target="_blank" >
                        <img src="https://i.ibb.co.com/whf5JCpB/image.png" className='pointer-events-none' alt="" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default NotSure;