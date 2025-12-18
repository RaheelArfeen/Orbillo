import { Loader } from 'lucide-react';
import React from 'react';

const WhyUs = () => {

    return (
        <div className='py-12 lg:py-25 overflow-hidden'>
            {/* Added overflow-hidden to prevent horizontal scroll from the absolute badge if it overlaps */}

            <section className='max-w-[1320px] mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0'>

                {/* Text Content */}
                <div className='w-full lg:w-[45%] lg:sticky lg:top-32 self-start space-y-6 lg:space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left'>
                    <p className='uppercase outfit text-sm lg:text-lg font-bold text-[#07302C]/55 tracking-[2.7px]'>
                        WHY US
                    </p>

                    <h1 className='text-[32px] md:text-[40px] md:max-w-[450px] max-w-full recoleta text-[#07302C] leading-tight [font-variant-ligatures:none]'>
                        Design is not decoration it’s <span className='text-[#559B36] underline decoration-[#559B36] decoration-3 underline-offset-5'>direction..</span>
                    </h1>

                    <p className='outfit text-lg md:text-2xl leading-[140%] text-[#373737]'>
                        Everything we create is guided by purpose, precision, and performance. Everything we create is guided by purpose, precision, and performance.
                    </p>

                    <div className='outfit text-lg md:text-2xl leading-[140%] text-[#2A2929] space-y-4 w-full md:w-auto'>
                        <span className='flex items-center justify-center lg:justify-start gap-4'>
                            <svg className="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.84922 8.61912C3.70326 7.96165 3.72567 7.27796 3.91437 6.63146C4.10308 5.98496 4.45196 5.39657 4.92868 4.92084C5.40541 4.44512 5.99453 4.09747 6.64142 3.91012C7.28832 3.72277 7.97205 3.70179 8.62922 3.84912C8.99093 3.28342 9.48922 2.81788 10.0782 2.49541C10.6671 2.17293 11.3278 2.00391 11.9992 2.00391C12.6707 2.00391 13.3313 2.17293 13.9203 2.49541C14.5092 2.81788 15.0075 3.28342 15.3692 3.84912C16.0274 3.70114 16.7123 3.72203 17.3602 3.90983C18.0081 4.09764 18.598 4.44626 19.0751 4.92327C19.5521 5.40029 19.9007 5.99019 20.0885 6.63812C20.2763 7.28605 20.2972 7.97095 20.1492 8.62912C20.7149 8.99083 21.1805 9.48912 21.5029 10.0781C21.8254 10.667 21.9944 11.3277 21.9944 11.9991C21.9944 12.6706 21.8254 13.3312 21.5029 13.9202C21.1805 14.5091 20.7149 15.0074 20.1492 15.3691C20.2966 16.0263 20.2756 16.71 20.0882 17.3569C19.9009 18.0038 19.5532 18.5929 19.0775 19.0697C18.6018 19.5464 18.0134 19.8953 17.3669 20.084C16.7204 20.2727 16.0367 20.2951 15.3792 20.1491C15.018 20.717 14.5193 21.1845 13.9293 21.5084C13.3394 21.8324 12.6772 22.0022 12.0042 22.0022C11.3312 22.0022 10.669 21.8324 10.0791 21.5084C9.48914 21.1845 8.99045 20.717 8.62922 20.1491C7.97205 20.2965 7.28832 20.2755 6.64142 20.0881C5.99453 19.9008 5.40541 19.5531 4.92868 19.0774C4.45196 18.6017 4.10308 18.0133 3.91437 17.3668C3.72567 16.7203 3.70326 16.0366 3.84922 15.3791C3.27917 15.0184 2.80963 14.5193 2.48426 13.9283C2.1589 13.3374 1.98828 12.6737 1.98828 11.9991C1.98828 11.3245 2.1589 10.6609 2.48426 10.0699C2.80963 9.47895 3.27917 8.97988 3.84922 8.61912Z" fill="#C9FF90" />
                                <path d="M9 12L11 14L15 10" stroke="#02403A" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Creative Solutions That Work
                        </span>
                        <span className='flex items-center justify-center lg:justify-start gap-4'>
                            <svg className="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.84922 8.61912C3.70326 7.96165 3.72567 7.27796 3.91437 6.63146C4.10308 5.98496 4.45196 5.39657 4.92868 4.92084C5.40541 4.44512 5.99453 4.09747 6.64142 3.91012C7.28832 3.72277 7.97205 3.70179 8.62922 3.84912C8.99093 3.28342 9.48922 2.81788 10.0782 2.49541C10.6671 2.17293 11.3278 2.00391 11.9992 2.00391C12.6707 2.00391 13.3313 2.17293 13.9203 2.49541C14.5092 2.81788 15.0075 3.28342 15.3692 3.84912C16.0274 3.70114 16.7123 3.72203 17.3602 3.90983C18.0081 4.09764 18.598 4.44626 19.0751 4.92327C19.5521 5.40029 19.9007 5.99019 20.0885 6.63812C20.2763 7.28605 20.2972 7.97095 20.1492 8.62912C20.7149 8.99083 21.1805 9.48912 21.5029 10.0781C21.8254 10.667 21.9944 11.3277 21.9944 11.9991C21.9944 12.6706 21.8254 13.3312 21.5029 13.9202C21.1805 14.5091 20.7149 15.0074 20.1492 15.3691C20.2966 16.0263 20.2756 16.71 20.0882 17.3569C19.9009 18.0038 19.5532 18.5929 19.0775 19.0697C18.6018 19.5464 18.0134 19.8953 17.3669 20.084C16.7204 20.2727 16.0367 20.2951 15.3792 20.1491C15.018 20.717 14.5193 21.1845 13.9293 21.5084C13.3394 21.8324 12.6772 22.0022 12.0042 22.0022C11.3312 22.0022 10.669 21.8324 10.0791 21.5084C9.48914 21.1845 8.99045 20.717 8.62922 20.1491C7.97205 20.2965 7.28832 20.2755 6.64142 20.0881C5.99453 19.9008 5.40541 19.5531 4.92868 19.0774C4.45196 18.6017 4.10308 18.0133 3.91437 17.3668C3.72567 16.7203 3.70326 16.0366 3.84922 15.3791C3.27917 15.0184 2.80963 14.5193 2.48426 13.9283C2.1589 13.3374 1.98828 12.6737 1.98828 11.9991C1.98828 11.3245 2.1589 10.6609 2.48426 10.0699C2.80963 9.47895 3.27917 8.97988 3.84922 8.61912Z" fill="#C9FF90" />
                                <path d="M9 12L11 14L15 10" stroke="#02403A" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Creative Solutions That Work
                        </span>
                    </div>

                    <button className='text-[#C9FF90] py-3 px-8 md:py-4 md:px-9 bg-[#02403A] rounded-full outfit text-lg md:text-xl hover:bg-[#C9FF90] hover:text-[#abadad] transition-all duration-300 cursor-pointer w-full md:w-auto'>
                        Contact us
                    </button>
                </div>

                {/* Image Section */}
                <div className='relative w-full lg:w-[50%] mt-8 lg:mt-0'>
                    {/* Badge */}
                    <div className='bg-[#C9FF90] absolute rounded-full text-[#07302C] py-2 px-4 md:py-4 md:px-8 outfit text-sm md:text-xl flex items-center gap-2 md:gap-3 right-0 top-10 md:top-28 shadow-lg z-10 whitespace-nowrap'>
                        <Loader className="w-4 h-4 md:w-6 md:h-6" />
                        Completed 20+ Projects
                    </div>

                    <img
                        src="https://i.ibb.co.com/GQWVFmpq/image.png"
                        alt="Creative Team"
                        className='w-full h-auto object-cover'
                    />
                </div>
            </section>
        </div>
    );
};

export default WhyUs;