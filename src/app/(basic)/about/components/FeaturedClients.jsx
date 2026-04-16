import React from 'react';
import Rankmet from '@/assets/Icons/Clients/Rankmet.svg'
import Affinity from '@/assets/Icons/Clients/Affinity.svg'
import Rizzmatgic from '@/assets/Icons/Clients/Rizzmatgic.svg'
import GDFA from '@/assets/Icons/Clients/GDFA.svg'
import ShutterOcean from '@/assets/Icons/Clients/ShutterOcean.svg'
import Image from 'next/image';

const ICONS = [
    {
        id: 1,
        svg: Rankmet
    },
    {
        id: 2,
        svg: Affinity
    },
    {
        id: 3,
        svg: Rizzmatgic
    },
    {
        id: 4,
        svg: GDFA
    },
    {
        id: 5,
        svg: ShutterOcean
    },
]

const FeaturedClients = () => {

    return (
        <div>
            <section className='max-w-[1380px] mx-auto py-12 md:py-25 px-5 2xl:px-0 flex flex-col lg:flex-row items-center justify-between space-y-10'>

                <div className='flex flex-col md:flex-row items-start md:items-end justify-between w-full gap-8 md:gap-0'>
                    <div className='w-full md:w-auto'>
                        <p className='outfit uppercase text-[#696969] font-bold text-sm md:text-lg tracking-[2.7px] mb-4 md:mb-5'>
                            Our Featured Clients
                        </p>
                        <h1 className='text-[#212121] bricolage text-3xl md:text-5xl max-w-full md:max-w-[650px] tracking-tight font-medium mb-12'>
                            We’ve proudly collaborated with businesses that believe in the power of design
                        </h1>

                        <p className='text-[#17241F] outfit text-lg md:text-2xl leading-[140%] w-full md:max-w-[555px]'>
                            Ship7, Islam Rayhan & Associates, Axis IT BD, SG Widget, Page Speed Plus, and more.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="flex flex-wrap justify-center items-center min-w-fit max-w-5xl">
                        {ICONS.map((icon, index) => (
                            <div
                                key={index}
                                className="border border-[#E9E9E9] flex items-center justify-center px-3 2xl:px-5 py-12 h-25 md:opacity-50 hover:opacity-100 cursor-pointer transition duration-500 -ml-[1px] -mt-[1px] w-fit"
                            >
                                <Image src={icon.svg} alt="icon" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeaturedClients;