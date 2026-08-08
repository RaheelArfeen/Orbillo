import React from 'react';
import Image from 'next/image';
import Arafat from '../Images/OurTeam/Arafat.avif';
import Rahatul from '../Images/OurTeam/Rahatul.avif';
import Mohiul from '../Images/OurTeam/Mohiul.png';

const members = [
    { name: 'Arafat Hossain', role: 'Product Designer', img: Arafat },
    { name: 'Rahatul Islam', role: 'Product Designer', img: Rahatul },
    { name: 'Mohiul Islam', role: 'Product Designer', img: Mohiul, small: true },
];

const OurTeam = () => {
    return (
        <div className="w-full bg-white overflow-hidden">
            <section className="max-w-[1380px] mx-auto px-5 md:px-8 py-20 md:py-28">

                {/* Heading */}
                <div className="flex flex-col">
                    <p className="outfit uppercase text-[#07302C]/55 font-semibold text-lg tracking-[2.7px] mb-6 md:mb-8">
                        Meet the Team
                    </p>
                    <h2 className="bricolage font-semibold text-[#212121] text-3xl md:text-[50px] leading-[1.15] tracking-tight max-w-[900px]">
                        We&apos;re a diverse group of problem-solvers —{' '}
                        <span className="playfair italic font-medium">
                            designers, developers, and marketers — who share one
                        </span>{' '}
                        common goal: helping your business grow.
                    </h2>

                    <div className="flex justify-end mt-8 md:mt-10">
                        <p className="outfit text-[#07302C] text-base md:text-lg leading-relaxed max-w-[430px] md:text-left">
                            Our leadership team brings a collective 60+ years of experience, working with brands
                            across the US, UK, and Asia.
                        </p>
                    </div>
                </div>

                {/* Team cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 mt-12 md:mt-16">
                    {members.map((member, i) => (
                        <div key={i} className="flex flex-col items-end">
                            {/* Green gradient is the background behind the member photo. */}
                            <div className="w-full aspect-[4/4.6] rounded-3xl overflow-hidden bg-[linear-gradient(180deg,#B7EC8B_0%,#D6F5B8_45%,#F3FCE8_100%)] flex flex-col justify-end">
                                <Image
                                    src={member.img}
                                    alt={member.name}
                                    className={`w-full object-cover pointer-events-none ${member.small ? 'translate-y-16' : ''}`}
                                />
                            </div>

                            <div className='flex flex-col items-center'>
                                <h3 className="bricolage font-semibold text-2xl md:text-3xl text-[#17241F] tracking-tight text-center mt-6">
                                    {member.name}
                                </h3>
                                <p className="outfit text-[#8A8A8A] text-base md:text-lg text-center mt-1">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default OurTeam;
