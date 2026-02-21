import React from 'react';

const Tag = ({ text }) => (
    <p className='outfit text-[#07302C] px-3 py-2 text-lg md:text-sm lg:text-base bg-linear-to-r from-white to-[#C9FF90] w-fit rounded-full border border-[#D6E3C8]'>
        {text}
    </p>
);

const Partnership = () => {
    return (
        <section className='w-full bg-white'>
            <div className='max-w-[1380px] mx-auto py-20 px-4 flex flex-col items-center justify-center'>
                <h1 className="text-[36px] sm:text-[48px] md:text-[50px] font-semibold text-[#212121] bricolage max-w-[700px] leading-[1.1] md:leading-[70px] text-center tracking-tight">
                    Performance-Driven Design, Built as a {''}
                    <span className="playfair italic text-4xl sm:text-4xl md:text-5xl">Partnership</span>
                </h1>
                <p className='text-[#4B4B4B] text-xl otufit leading-normal max-w-[600px] text-center mt-3.5'>A collaborative, goal-driven approach to creating high-performing and beautifully designed digital experiences</p>

                {/* cards section */}
                <div className='mt-20 flex flex-col lg:flex-row w-full gap-6'>
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-col md:flex-row items-stretch gap-6'>
                            <div className='bg-[#F2F8ED] rounded-xl flex flex-col justify-between'>
                                <div className='px-7 py-8 mb-3'>
                                    <h1 className='text-[#212121] bricolage font-medium text-2xl lg:text-3xl mb-2.5'>What We Build for Brands</h1>
                                    <p className='outfit text-sm lg:text-base text-[#575656]'>Thoughtfully designed solutions that help brands grow, connect, and stand out.</p>
                                </div>

                                <div className="relative">
                                    <img
                                        className="rounded-xl pointer-events-none"
                                        src="https://i.ibb.co.com/4nxxCkM9/image.png"
                                        alt=""
                                    />

                                    <div className="absolute bottom-5 left-3 xl:left-5 flex gap-1.5">
                                        <p className="text-sm xl:text-xl font-medium uppercase p-2.5 bg-white rounded-2xl text-[#212121]">
                                            Branding
                                        </p>

                                        <p className="text-sm xl:text-xl font-medium uppercase p-2.5 bg-white rounded-2xl text-[#212121]">
                                            UI/UX
                                        </p>

                                        <p className="text-sm xl:text-xl font-medium uppercase p-2.5 bg-white rounded-2xl text-[#212121]">
                                            Social Media
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-linear-to-b from-[#F5F5F5] to-[#EEFFDE] rounded-xl px-7 py-8 relative overflow-hidden'>
                                {/* Header Section */}
                                <div>
                                    <h1 className='text-[#212121] bricolage font-medium text-2xl lg:text-3xl mb-2.5'>Outcome-Driven Design</h1>
                                    <p className='outfit text-sm lg:text-base text-[#575656]'>
                                        We design for decisions, not decoration. Every screen is built to reduce friction and move users forward.
                                    </p>
                                </div>

                                {/* Process Section */}
                                <div className="relative top-4 flex flex-col gap-6 items-center">

                                    <svg className="absolute top-0 h-full w-full pointer-events-none opacity-50 block sm:hidden md:block md:opacity-100" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M110 0C110 50 40 60 40 110C40 160 140 170 140 220C140 270 60 280 60 330C60 380 120 390 120 440"
                                            stroke="#CCCECB" strokeWidth="1.5" />
                                    </svg>

                                    {/* Staggered Bubbles */}
                                    <div className="z-10 w-full flex flex-col gap-4">
                                        <div className="flex justify-center">
                                            <Tag text="Define Outcomes" />
                                        </div>
                                        <div className="flex justify-start">
                                            <Tag text="Research & Insights" />
                                        </div>
                                        <div className="flex justify-end -mt-3 mr-4">
                                            <Tag text="UX Strategy & Flow" />
                                        </div>
                                        <div className="flex jus tify-start">
                                            <Tag text="Visual Design & Prototype" />
                                        </div>
                                        <div className="flex justify-end">
                                            <Tag text="Launch, Measure & Iterate" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='w-full bg-linear-to-r from-[#BAC6AE] to-[#08312C] rounded-xl overflow-hidden relative z-0 '>
                            <div className='absolute inset-0 bg-linear-to-b md:bg-linear-to-r from-[#C9FF8F] to-transparent -z-10'></div>

                            <div className='z-10 flex flex-col md:flex-row justify-between relative'>
                                <div className='px-8 py-8 md:py-16'>
                                    <h1 className="text-[26px] md:text-[32px] font-medium text-[#212121] bricolage md:max-w-[200px] leading-[20px] md:leading-[35px] tracking-tight mb-3 md:mb-5">Design That Drives Impact</h1>
                                    <p className='outfit tracking-tight text-lg text-[#596948] md:max-w-[320px]'>We are a design agency focused on creating meaningful digital experiences.</p>
                                </div>

                                <div>
                                    <img className='md:max-h-[220px] md:absolute right-0 md:right-6 bottom-0 pointer-events-none' src="https://i.ibb.co.com/0yFPN8vw/image.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#F3F7EF] w-full lg:max-w-1/3 h-[800px] lg:h-auto rounded-xl relative overflow-hidden'>
                        <div className='px-7 py-8'>
                            <h1 className='text-[#212121] bricolage font-medium text-[32px] mb-5 tracking-tight'>Outcome-Driven Design</h1>

                            <div className='flex flex-col gap-2'>
                                <p className='w-full outfit tracking-tight py-3 px-3.5 bg-linear-to-r from-[#F2FFE5] to-white border border-[#E9E9E9] rounded-lg'>Clear process. No noise.</p>
                                <div className='flex justify-end'>
                                    <p className='max-w-[355px] outfit tracking-tight py-3 px-3.5 bg-linear-to-l from-[#F2FFE5] to-white border border-[#E9E9E9] rounded-lg'>You get high-quality output without unnecessary back-and-forth.</p>
                                </div>
                                <p className='w-full outfit tracking-tight py-3 px-3.5 bg-linear-to-r from-[#F2FFE5] to-white border border-[#E9E9E9] rounded-lg'>Clear process. </p>
                            </div>
                        </div>

                        <div className='absolute bottom-0 left-0 right-0'>
                            <img className='max-h-[550px] w-full pointer-events-none' src="https://i.ibb.co.com/xq1BnSsW/image.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partnership;