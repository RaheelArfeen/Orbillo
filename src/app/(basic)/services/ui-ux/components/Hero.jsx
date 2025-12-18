import Image from 'next/image';
import HeroBg from '@/app/assets/Hero.svg'
import React from 'react';

const Hero = () => {
    return (
        <div className="h-screen relative overflow-hidden flex items-center justify-center">
            {/* Dark Overlay */}
            <div className='absolute inset-0 z-15 bg-linear-to-b from-transparent to-[#11180B]/50'></div>

            {/* Green Overlay */}
            <div className="absolute inset-0 z-10 bg-[#07302C] mix-blend-darken"></div>

            {/* Top lighting */}
            <div className='absolute -top-10 -translate-y-1/2 h-[450px] w-[600px] bg-[#D6F55B]/33 rounded-full blur-[150px] z-20'></div>

            {/* Background Video */}
            <div className="absolute inset-0 z-10">
                {/* <video
                                                                                className="w-full h-full object-cover"
                                                                                autoPlay
                                                                                loop
                                                                                muted
                                                                                playsInline
                                                                            >
                                                                                <source src="/videos/BackgroundVideo.mp4" type="video/mp4" />
                                                                                Your browser does not support the video tag.
                                                                            </video> */}

                <Image src={HeroBg} className='opacity-15' />

            </div>

            <section className='z-20 text-center pt-30 mb-40 px-4'>
                <p className='outfit uppercase text-[#C7C7C7] font-bold text-sm md:text-lg mb-3 tracking-[2.7px]'>UI & UX</p>
                <h1 className='lg:text-6xl md:text-5xl min-[400px]:text-3xl text-2xl max-[350px]:text-xl 2 max-[350px]:p-0 capitalize leading-[130%] md:max-w-[950px] max-w-[450px] recoleta'>
                    <span>Smart, Modern & Conversion-Focused</span> {' '}
                    <span>
                        <span className='text-[#C9FF90] underline decoration-[#C9FF90] decoration-3 underline-offset-5'>UI/UX Design</span> {' '}
                    </span>
                </h1>

                <div className='flex flex-col md:flex-row items-center justify-center gap-3 mt-12 mb-34 px-10'>
                    <button className='md:py-4 py-3 px-10 rounded-full bg-[#C9FF90] text-[#17241F] hover:bg-[#17241F] hover:text-[#C9FF90] transition duration-300 border-b border-[#C9FF90] hover:border-[#4d6641] outfit md:text-xl text-base  max-[350px]:text-xs cursor-pointer'>
                        <a href="https://calendly.com/teamorbillo/30min" target="_blank" rel="noopener noreferrer">Schedule A Meeting</a>
                    </button>
                    <button className='px-6 md:py-4 py-3 flex items-center justify-center outfit md:text-xl text-base max-[350px]:text-xs cursor-pointer hover:bg-white/10 rounded-full transition duration-300'>
                        <a
                            href="https://wa.me/8801711252085"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex items-center gap-3 max-[350px]:gap-1'
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='max-[350px]:h-4'>
                                <path d="M17.1303 14.2326C16.8453 14.0976 15.4803 13.4226 15.2253 13.3176C14.9703 13.2126 14.7903 13.1826 14.5953 13.4676C14.4003 13.7526 13.8753 14.3676 13.7103 14.5626C13.5453 14.7576 13.3953 14.7726 13.1103 14.5626C12.2913 14.2349 11.5352 13.768 10.8753 13.1826C10.2784 12.6189 9.77242 11.9662 9.37534 11.2476C9.21034 10.9776 9.37534 10.8276 9.49534 10.6776C9.61534 10.5276 9.76534 10.3626 9.91534 10.1976C10.0249 10.0548 10.1156 9.89854 10.1853 9.73261C10.2225 9.65541 10.2419 9.57082 10.2419 9.48511C10.2419 9.39941 10.2225 9.31481 10.1853 9.23761C10.1853 9.10261 9.55534 7.73761 9.31534 7.18261C9.07534 6.62761 8.86534 6.70261 8.70034 6.70261H8.10034C7.81452 6.71376 7.54479 6.83783 7.35034 7.04761C7.03648 7.34712 6.78786 7.70823 6.62009 8.10832C6.45231 8.5084 6.36899 8.93882 6.37534 9.37261C6.45295 10.4374 6.84444 11.4553 7.50034 12.2976C8.70436 14.0887 10.3533 15.536 12.2853 16.4976C12.9453 16.7826 13.4553 16.9476 13.8603 17.0826C14.4288 17.2562 15.0303 17.2922 15.6153 17.1876C16.004 17.1088 16.3723 16.9509 16.6974 16.7239C17.0225 16.4968 17.2975 16.2054 17.5053 15.8676C17.6783 15.4505 17.7353 14.9944 17.6703 14.5476C17.5953 14.4426 17.4153 14.3676 17.1303 14.2326Z" fill="white" />
                                <path d="M19.9348 4.02038C18.8974 2.97321 17.6608 2.14437 16.298 1.58275C14.9352 1.02114 13.4737 0.738116 11.9998 0.750382C10.0472 0.7606 8.1315 1.28293 6.44398 2.2652C4.75646 3.24748 3.35619 4.65532 2.38302 6.34811C1.40986 8.0409 0.89786 9.95939 0.898166 11.912C0.898472 13.8646 1.41107 15.7829 2.38477 17.4754L0.884766 23.2504L6.79477 21.7504C8.42862 22.6394 10.2597 23.1037 12.1198 23.1004H11.9998C14.2166 23.1148 16.3876 22.4687 18.2358 21.2444C20.084 20.02 21.5256 18.273 22.3769 16.226C23.2282 14.1791 23.4505 11.9249 23.0156 9.7511C22.5806 7.57726 21.5081 5.58222 19.9348 4.02038ZM11.9998 21.1804C10.3354 21.1832 8.70176 20.732 7.27477 19.8754L6.94477 19.6804L3.43477 20.5954L4.36477 17.1754L4.15477 16.8304C2.9568 14.9011 2.50868 12.5993 2.89544 10.3615C3.28219 8.12375 4.47691 6.10581 6.25291 4.69056C8.02892 3.27531 10.2626 2.56121 12.5303 2.68376C14.7979 2.80631 16.9416 3.75697 18.5548 5.35538C19.4196 6.21322 20.105 7.23459 20.5711 8.35999C21.0373 9.48538 21.2747 10.6923 21.2698 11.9104C21.2658 14.3677 20.2879 16.7233 18.5503 18.4609C16.8127 20.1985 14.4571 21.1764 11.9998 21.1804Z" fill="white" />
                            </svg>
                            Chat Realtime
                        </a>
                    </button>
                </div>
            </section>

            <section className='z-50 absolute bottom-0 w-[50%] flex -space-x-16 items-end justify-center'>
                <img className='lg:w-[45%] ' src={'https://i.ibb.co.com/Nngc2q72/image.png'} />
                <img className='lg:w-[45%]' src={'https://i.ibb.co.com/21f1Mf4x/image.png'} />
                <img className='lg:w-[45%]' src={'https://i.ibb.co.com/VY4mGQ0Q/image.png'} />
                <img className='lg:w-[45%]' src={'https://i.ibb.co.com/7xNRhxfM/image.png'} />
                <img className='lg:w-[45%]' src={'https://i.ibb.co.com/TBhKcTkL/image.png'} />
            </section>

        </div>
    );
};

export default Hero;