'use client'

import { useInView } from 'framer-motion';
import React, { useRef } from 'react';
import CountUp from 'react-countup';

const STATS_DATA = [
    { value: 15, label: 'Clients Served', plus: true },
    { value: 90, label: 'Days in Operation', plus: true },
    { value: 120, label: 'Projects Completed', plus: true },
    { value: 440, label: 'Cups of Coffee', plus: true },
];

const Counter = () => {
    const sectionRef = useRef(null);

    const inView = useInView(sectionRef, {
        once: true,
        amount: 0.3,
    });

    return (
        <section ref={sectionRef} className="w-full py-6 lg:py-12 px-4">
            <div className="max-w-[1380px] mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-12">
                    {STATS_DATA.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-[#e5e2e2] rounded-xl flex flex-col items-center justify-center space-y-2 py-12 lg:py-0 lg:bg-transparent lg:h-auto"
                        >
                            <h3 className="text-[60px] lg:text-[72px] leading-none bricolage font-medium text-[#559B36] flex items-start">
                                {inView ? (
                                    <CountUp
                                        start={0}
                                        end={stat.value}
                                        duration={2.5}
                                        separator=","
                                    />
                                ) : (
                                    0
                                )}
                                {stat.plus && (
                                    <span className="text-3xl lg:text-5xl relative lg:bottom-4">
                                        +
                                    </span>
                                )}
                            </h3>

                            <p className="outfit uppercase text-[14px] font-bold tracking-[1.5px] lg:tracking-[2.7px] text-[#373737]/55 text-center px-2">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Counter;
