'use client';

import React from 'react';
import Marquee from 'react-fast-marquee';
import { InlineWidget } from 'react-calendly';

const NotSure = () => {
    return (
        <div className="w-full">
            
            {/* Top Marquee Section */}
            <div className="w-full bg-[#5ba32b] py-6 border-y border-[#C9FF90]/30 relative z-30">
                <Marquee autoFill pauseOnHover speed={80} className="overflow-hidden">
                    {[
                        'ui/ux design',
                        'wordpress',
                        'social media design',
                        'Branding & identity',
                    ].map((item, i) => (
                        <div key={i} className="capitalize flex items-center">
                            <span className="text-white text-3xl lg:text-6xl font-serif mx-6 lg:mx-10 tracking-wide recoleta">
                                {item}
                            </span>
                            <span className="text-white text-5xl font-black">•</span>
                        </div>
                    ))}
                </Marquee>
            </div>

            {/* Main Content Section */}
            <section className="max-w-[1320px] mx-auto text-center py-10 md:py-16 px-4">
                <h1 className="recoleta text-4xl text-[#17241F] leading-[140%] -tracking-[1px]">
                    Not sure where to start?
                </h1>

                <p className="text-[#696969] text-xl md:text-2xl leading-[140%] outfit mt-3">
                    Just write <span className="text-[#373737]">“I need help with design”</span> — we’ll take it from there.
                </p>

                <div className="max-w-[1060px] mx-auto rounded-2xl overflow-hidden shadow-2xl lg:shadow-none max-sm:mt-6">
                    <InlineWidget
                        url="https://calendly.com/teamorbillo/30min"
                        styles={{
                            height: '80vh',
                            width: '100%',
                        }}
                        pageSettings={{
                            backgroundColor: 'ffffff',
                            hideEventTypeDetails: false,
                            hideLandingPageDetails: false,
                            primaryColor: '0069ff',
                            textColor: '4d5055'
                        }}
                    />
                </div>
            </section>
        </div>
    );
};

export default NotSure;