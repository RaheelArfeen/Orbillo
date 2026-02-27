import React from 'react';
import TableMeeting from '@/assets/TableMeeting.png'
import Image from 'next/image';

const OurStory = () => {
    return (
        <div className='relative w-full overflow-hidden bg-[#062B28] md:rounded-t-[100px]'>

            <div className='h-[300px] w-[300px] bg-[#D6F55B]/52 rounded-full blur-[200px] absolute -top-20 -left-20'></div>
            <div className='h-[300px] w-[300px] bg-[#D6F55B]/52 rounded-full blur-[200px] absolute -bottom-20 -right-20'></div>

            <section className='max-w-[1380px] mx-auto px-5 md:px-10 py-12 md:py-25 flex flex-col lg:flex-row items-center justify-between gap-16'>
                <div>
                    <Image className='max-w-[600px] w-full xl:w-auto' src={TableMeeting} />
                </div>
                <div>
                    <h3 className='outfit uppercase text-[#696969] font-bold text-sm md:text-base tracking-[2.7px] whitespace-nowrap mb-6'>Our Story</h3>
                    <h1 className='text-[#FDFFF5] bricolage font-medium text-3xl md:text-4xl tracking-tight max-w-[600px] mb-12'>Orbillo, founded by industry pros with 10–15 years experience, bridges design and business.</h1>
                    <p className='text-[#E4E4E4] outfit text-2xl tracking mb-12 tracking-tight'>We’ve worked across industries, helping startups scale and enterprises simplify their digital presence with strategic design thinking.</p>
                    <button className="w-full sm:w-auto px-8 py-3 rounded-full font-medium outfit border bg-[#B9FF8D] text-[#17241F] hover:bg-[#17241F] hover:text-[#B9FF8D] transition duration-300 cursor-pointer whitespace-nowrap">
                        Let’s Talk
                    </button>
                </div>
            </section>
        </div>
    );
};

export default OurStory;