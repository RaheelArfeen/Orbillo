import Image from 'next/image';
import HeroBg from '@/assets/Hero.svg'
import leftCube from '../../Image/leftCube.avif'
import rightCube from '../../Image/rightCube.avif'
import React from 'react';

const Hero = () => {
    return (
        <div className="relative overflow-hidden flex items-center justify-center">
            {/* Dark Overlay */}
            <div className='absolute inset-0 bottom-0 bg-linear-to-b from-transparent to-[#11180B]'></div>

            {/* Green Overlay */}
            <div className="absolute inset-0 z-10 bg-[#07302C] mix-blend-darken"></div>

            {/* Top lighting */}
            <div className='absolute -top-10 -translate-y-1/2 h-[450px] w-[600px] bg-[#D6F55B]/33 rounded-full blur-[150px] z-20'></div>

            {/* Background Image */}
            <div className="absolute inset-0 z-10">
                <Image src={HeroBg} className='opacity-15 object-cover w-full h-full' />

            </div>

            <Image className='absolute max-w-[550px] w-full -left-20 -bottom-50 z-10 opacity-50' src={leftCube} alt="" />

            <Image className='absolute max-w-[950px] w-full -right-40 -bottom-60 z-10  opacity-50' src={rightCube} alt="" />


            <section className='z-20 text-center pt-30 mb-40 px-4 flex flex-col items-center justify-center'>
                <h3 className='outfit uppercase text-[#C7C7C7] font-medium text-sm mb-4 tracking-[1px] py-2 px-4 bg-white/10 rounded-full w-fit space-x-1'><span>Home</span> <span>/</span> <span>Services</span> <span>/</span> <span className='text-white font-semibold'>Social Media Design</span></h3>                <h1 className="text-[36px] sm:text-[48px] md:text-[50px] font-semibold text-[#C9FF90] bricolage leading-[1.1] md:leading-[60px] mb-4 tracking-tight">Social Media Design</h1>
                <p className='outift text-2xl text-white/79 tracking-tight max-w-[520px] mb-8'>We’re a team of designers and developers with over a decade of experience helping brands grow.</p>

                <div className='flex flex-col md:flex-row items-center justify-center gap-3 px-10'>
                    <button className='py-3 px-10 rounded-full bg-[#C9FF90] text-[#07302C] hover:bg-[#07302C] hover:text-[#C9FF90] transition duration-300 border-b border-[#C9FF90] hover:border-[#4d6641] outfit md:text-xl text-base  max-[350px]:text-xs cursor-pointer'>
                        <a href="https://calendly.com/teamorbillo/30min" target="_blank" rel="noopener noreferrer">Start A Project</a>
                    </button>
                </div>
            </section>

        </div>
    );
};

export default Hero;