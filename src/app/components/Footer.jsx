import { FaFacebookF } from "react-icons/fa";
import Image from 'next/image';
import React from 'react';
import CTAbg from '../assets/FooterCTAbg.svg';
import Logo from '../assets/Logo/LightLogo.svg';
import FooterBG from '../assets/FooterBg.png';

const Footer = () => {
    return (
        // FIX 1: Added 'z-50' here. 
        // This ensures the entire footer (including the floating CTA) sits ON TOP of the previous section.
        <div className="relative z-50 overflow-visible mt-[200px]">

            {/* CTA Section */}
            <section className='w-full max-w-[1380px] h-[400px] mx-auto rounded-[64px] overflow-hidden absolute -top-[200px] left-1/2 -translate-x-1/2 shadow-2xl'>

                {/* Background Image Wrapper */}
                <div className="absolute inset-0 -z-10">
                    <Image
                        src={CTAbg}
                        alt="Footer CTA background"
                        className="w-full h-full object-cover"
                        priority
                    />
                </div>

                {/* TEXT */}
                <div className="py-16 px-40">
                    <h1 className="w-[650px] text-5xl reloceta text-[#07302C]">
                        Ready to turn your business into a digital success story?
                    </h1>
                    <div className="flex items-center gap-3 mt-20 z-50">
                        <button className="py-4 px-8 text-white rounded-full bg-[linear-gradient(-45deg,#169689_34%,#002A15_88%)] hover:bg-white hover:bg-none hover:text-[#17241F] transition-all duration-300 outfit text-xl">
                            Book A Free Discovery Call
                        </button>

                        <a
                            href="https://wa.me/8801711252085"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='px-6 py-4 flex items-center gap-3 outfit text-xl cursor-pointer text-[#07302C] hover:bg-[#07302C]/10 rounded-full transition duration-300'
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.1303 14.2326C16.8453 14.0976 15.4803 13.4226 15.2253 13.3176C14.9703 13.2126 14.7903 13.1826 14.5953 13.4676C14.4003 13.7526 13.8753 14.3676 13.7103 14.5626C13.5453 14.7576 13.3953 14.7726 13.1103 14.5626C12.2913 14.2349 11.5352 13.768 10.8753 13.1826C10.2784 12.6189 9.77242 11.9662 9.37534 11.2476C9.21034 10.9776 9.37534 10.8276 9.49534 10.6776C9.61534 10.5276 9.76534 10.3626 9.91534 10.1976C10.0249 10.0548 10.1156 9.89854 10.1853 9.73261C10.2225 9.65541 10.2419 9.57082 10.2419 9.48511C10.2419 9.39941 10.2225 9.31481 10.1853 9.23761C10.1853 9.10261 9.55534 7.73761 9.31534 7.18261C9.07534 6.62761 8.86534 6.70261 8.70034 6.70261H8.10034C7.81452 6.71376 7.54479 6.83783 7.35034 7.04761C7.03648 7.34712 6.78786 7.70823 6.62009 8.10832C6.45231 8.5084 6.36899 8.93882 6.37534 9.37261C6.45295 10.4374 6.84444 11.4553 7.50034 12.2976C8.70436 14.0887 10.3533 15.536 12.2853 16.4976C12.9453 16.7826 13.4553 16.9476 13.8603 17.0826C14.4288 17.2562 15.0303 17.2922 15.6153 17.1876C16.004 17.1088 16.3723 16.9509 16.6974 16.7239C17.0225 16.4968 17.2975 16.2054 17.5053 15.8676C17.6783 15.4505 17.7353 14.9944 17.6703 14.5476C17.5953 14.4426 17.4153 14.3676 17.1303 14.2326Z" fill="#07302C" />
                                <path d="M19.9348 4.02038C18.8974 2.97321 17.6608 2.14437 16.298 1.58275C14.9352 1.02114 13.4737 0.738116 11.9998 0.750382C10.0472 0.7606 8.1315 1.28293 6.44398 2.2652C4.75646 3.24748 3.35619 4.65532 2.38302 6.34811C1.40986 8.0409 0.89786 9.95939 0.898166 11.912C0.898472 13.8646 1.41107 15.7829 2.38477 17.4754L0.884766 23.2504L6.79477 21.7504C8.42862 22.6394 10.2597 23.1037 12.1198 23.1004H11.9998C14.2166 23.1148 16.3876 22.4687 18.2358 21.2444C20.084 20.02 21.5256 18.273 22.3769 16.226C23.2282 14.1791 23.4505 11.9249 23.0156 9.7511C22.5806 7.57726 21.5081 5.58222 19.9348 4.02038ZM11.9998 21.1804C10.3354 21.1832 8.70176 20.732 7.27477 19.8754L6.94477 19.6804L3.43477 20.5954L4.36477 17.1754L4.15477 16.8304C2.9568 14.9011 2.50868 12.5993 2.89544 10.3615C3.28219 8.12375 4.47691 6.10581 6.25291 4.69056C8.02892 3.27531 10.2626 2.56121 12.5303 2.68376C14.7979 2.80631 16.9416 3.75697 18.5548 5.35538C19.4196 6.21322 20.105 7.23459 20.5711 8.35999C21.0373 9.48538 21.2747 10.6923 21.2698 11.9104C21.2658 14.3677 20.2879 16.7233 18.5503 18.4609C16.8127 20.1985 14.4571 21.1764 11.9998 21.1804Z" fill="#07302C" />
                            </svg>
                            Chat Realtime
                        </a>
                    </div>
                </div>

            </section>

            {/* Footer Body */}
            <section className='max-w-[1920px] mx-auto text-white pt-[320px] pb-30 relative -z-20 overflow-hidden h-[1000px]'>

                <div className="absolute instet-0 top-0 -z-10">
                    <Image src={FooterBG} />
                </div>

                <div className='max-w-[1380px] mx-auto flex items-start justify-between px-4'>
                    <div>
                        <Image src={Logo} alt='Logo' />
                        <p className='max-w-[300px] text-white/79 outfit text-lg mt-6'>
                            The digital growth partner you have always been looking for!
                        </p>

                        <div className="flex items-center gap-4 mt-14">
                            {[1, 2, 3, 4].map((_, index) => (
                                <span key={index} className="w-8 h-8 border border-white/20 rounded-full flex items-center hover:bg-white hover:text-[#2B2B2B] justify-center transition duration-300 cursor-pointer">
                                    <FaFacebookF size={16} />
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="outfit text-white/55 tracking-[2.7px] font-bold text-lg uppercase mb-6">Services</p>
                        <div className="flex flex-col gap-4 text-white/85 outfit text-lg">
                            <span>Brand Design</span>
                            <span>UI/UX Design</span>
                            <span>Social Media Design</span>
                            <span>Web Development</span>
                        </div>
                    </div>
                    <div>
                        <p className="outfit text-white/55 tracking-[2.7px] font-bold text-lg uppercase mb-6">Quick Links</p>
                        <div className="flex flex-col gap-4 text-white/85 outfit text-lg">
                            <span>Home</span>
                            <span>About Us</span>
                            <span>Works</span>
                            <span>Testimonials</span>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full">
                    {/* <div className="absolute bottom-0 w-full flex items-center justify-center">
                        <img src="https://framerusercontent.com/images/FFgoE0QAe1nNBXr9yWr1UmdLnfY.png?width=1920&height=1052" alt="" />
                    </div> */}

                    <div className="w-full px-[300px] py-1 bg-[#062B28]/30 backdrop-blur-md">
                        <div className="outfit text-white/65 flex items-center justify-between">
                            <p>All rights reserved © 2025 Orbillo.com</p>
                            <p className="space-x-6">
                                <span>Terms & Conditions</span>
                                <span>Privacy Policy</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};


export default Footer;