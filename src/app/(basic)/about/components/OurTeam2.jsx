import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import OurTeamBg from '../../../assets/OurTeamBg.png';

const Members = [
    {
        name: 'Arafat Hossain',
        role: 'Product Designer',
        imageSrc: 'https://i.ibb.co.com/qYNMp95j/image.png',
        spaceTop: false
    },
    {
        name: 'Rahatul Islam',
        role: 'Product Designer',
        imageSrc: 'https://i.ibb.co.com/qYNMp95j/image.png',
        spaceTop: true
    },
    {
        name: 'Mohiul Islam',
        role: 'Product Designer',
        imageSrc: 'https://i.ibb.co.com/qYNMp95j/image.png',
        spaceTop: false
    },
    {
        name: 'Rakibul Islam',
        role: 'Product Designer',
        imageSrc: 'https://i.ibb.co.com/qYNMp95j/image.png',
        spaceTop: true
    },
];

const OurTeam2 = () => {
    return (
        <div className='relative w-full'>
            <div className="w-full bg-[#5ba32b] py-4 md:py-6 border-y border-[#C9FF90]/30 relative z-30">
                <Marquee
                    autoFill={true}
                    pauseOnHover={false}
                    speed={80}
                    className="overflow-hidden"
                >
                    <div className="flex items-center">
                        <span className="text-white text-3xl md:text-6xl font-serif mx-6 md:mx-10 tracking-wide recoleta">
                            Our Team
                        </span>
                        <span className="text-white text-3xl md:text-5xl font-black">•</span>
                    </div>
                </Marquee>
            </div>

            <div className='absolute inset-0 -z-10 w-full h-full  lg:rounded-b-[100px] overflow-hidden'>
                <Image src={OurTeamBg} className='mx-auto h-full w-full' />
            </div>

            <section className='max-w-[1380px] mx-auto py-12 md:py-25 px-5 md:px-8'>
                <div className='mb-16 md:mb-30'>
                    <div className='flex flex-col md:flex-row items-start md:items-end justify-between w-full gap-8'>
                        <div className='w-full md:w-2/3'>
                            <p className='outfit uppercase text-[#696969] font-bold text-sm md:text-lg tracking-[2.7px] mb-4 md:mb-7'>
                                Meet the Team
                            </p>
                            <h1 className='text-white recoleta text-3xl md:text-4xl leading-[130%] md:leading-[140%] -tracking-[1px]'>
                                We’re a diverse group of <span className='text-[#C9FF90] underline decoration-[#C9FF90] decoration-3 underline-offset-4 md:underline-offset-5'>problem-solvers — designers, developers, and marketers</span> — who share one common goal: helping your <span className='text-[#C9FF90] underline decoration-[#C9FF90] decoration-3 underline-offset-4 md:underline-offset-5'>business grow.</span>
                            </h1>
                        </div>
                    </div>
                    <p className='text-[#D9D9D9] outfit text-lg md:text-2xl leading-[140%] max-w-[700px] md:ml-auto mt-8 md:mt-20'>
                        Our leadership team brings a collective 60+ years of experience, working with brands across the US, UK, and Asia.
                    </p>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4'>
                    {Members.map((member, index) => (
                        <div
                            key={index}
                            className={`flex flex-col w-full ${member.spaceTop ? 'lg:relative lg:top-16' : ''}`}
                        >
                            <div className='w-full overflow-hidden rounded-lg shadow-lg aspect-[3/4]'>
                                <img
                                    src={member.imageSrc}
                                    alt={member.name}
                                    className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
                                />
                            </div>
                            <div className='mt-4 md:mt-5 px-2'>
                                <h2 className='jakartaSnas font-semibold text-2xl md:text-3xl text-[#FAFDF4] -tracking-[1px] leading-tight'>
                                    {member.name}
                                </h2>
                                <p className='outfit text-lg md:text-xl text-[#559B36] mt-1'>
                                    • {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default OurTeam2;