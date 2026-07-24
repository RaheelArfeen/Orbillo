import React from 'react';
import Image from 'next/image';
import WWD1 from '../Images/WhatWeDo/1.avif';
import WWD2 from '../Images/WhatWeDo/2.avif';
import WWD3 from '../Images/WhatWeDo/3.avif';
import WorkCultureImg from '../Images/WorkCulture/Image.avif';

const principles = [
    {
        title: 'Built for Users',
        text: 'We always put users first. We listen carefully, understand their needs, and design solutions that truly make their lives easier.',
        layout: 'image-top',
        img: WWD1,
    },
    {
        title: 'Simple Clear Thinking',
        text: 'We always put users first. We listen carefully, understand their needs, and design solutions that truly make their lives easier.',
        layout: 'text-top',
        img: WWD2,
    },
    {
        title: 'Talk Openly',
        text: 'We always put users first. We listen carefully, understand their needs, and design solutions that truly make their lives easier.',
        layout: 'image-top',
        img: WWD3,
    },
];

const lifeCards = [
    {
        text: 'A flexible hybrid setup designed to help you work better, not longer.',
        icon: (
            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5 20.0417V3.08337L30.8333 9.25004L18.5 15.4167" stroke="#062B28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M31.6977 15.7589C32.5181 18.2875 32.5949 20.9985 31.9189 23.5694C31.2429 26.1403 29.8425 28.4629 27.8845 30.2609C25.9265 32.0589 23.4931 33.2565 20.874 33.7114C18.2549 34.1662 15.5603 33.8591 13.1107 32.8266C10.6611 31.794 8.5597 30.0795 7.05647 27.8871C5.55323 25.6946 4.71147 23.1165 4.63131 20.4594C4.55115 17.8023 5.23598 15.1781 6.60432 12.899C7.97266 10.6199 9.96691 8.78183 12.3498 7.60352" stroke="#062B28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.3373 15.412C11.5648 16.4403 11.0619 17.6456 10.8744 18.918C10.6868 20.1905 10.8207 21.4896 11.2637 22.6971C11.7068 23.9045 12.4449 24.9819 13.4108 25.8311C14.3768 26.6803 15.5399 27.2744 16.7942 27.559C18.0485 27.8437 19.354 27.81 20.592 27.461C21.8299 27.112 22.9608 26.4588 23.8817 25.5609C24.8025 24.663 25.4841 23.5489 25.8643 22.3202C26.2444 21.0915 26.3111 19.7872 26.0582 18.5262" stroke="#062B28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
    },
    {
        text: 'Company events you’ll actually enjoy Meaningful celebrations, not forced fun.',
        icon: (
            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.1899 4.05408L10.8115 12.1622L16.2169 29.7298L21.6223 12.1622L18.244 4.05408" stroke="#062B28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M22.9738 4.05408C23.3934 4.05408 23.8072 4.15177 24.1825 4.33941C24.5578 4.52705 24.8843 4.79949 25.136 5.13516L29.1901 10.5406C29.5378 11.0043 29.7272 11.5675 29.7303 12.1471C29.7335 12.7267 29.5502 13.292 29.2076 13.7595L18.4103 28.6054C18.16 28.9534 17.8305 29.2368 17.449 29.4323C17.0676 29.6278 16.6451 29.7297 16.2164 29.7297C15.7878 29.7297 15.3653 29.6278 14.9838 29.4323C14.6023 29.2368 14.2728 28.9534 14.0225 28.6054L3.2252 13.7595C2.88278 13.2918 2.69977 12.7265 2.70317 12.1469C2.70658 11.5673 2.89622 11.0042 3.24411 10.5406L7.29547 5.13921C7.54706 4.80244 7.87375 4.52899 8.24956 4.34062C8.62538 4.15224 9.03995 4.05413 9.46033 4.05408H22.9738Z" stroke="#062B28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.70312 12.1621H29.7302" stroke="#062B28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
    },
    {
        text: 'Real growth, real investment We actively support your learning and career development.',
        icon: (
            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.1302 8.97847L14.7781 13.2366C14.2001 13.8148 13.8753 14.5989 13.8753 15.4165C13.8753 16.2341 14.2001 17.0182 14.7781 17.5964C15.3563 18.1744 16.1404 18.4991 16.958 18.4991C17.7756 18.4991 18.5597 18.1744 19.1379 17.5964L21.7742 14.9601C22.1192 14.615 22.5289 14.3411 22.9797 14.1543C23.4306 13.9675 23.9139 13.8713 24.4019 13.8713C24.89 13.8713 25.3733 13.9675 25.8242 14.1543C26.275 14.3411 26.6847 14.615 27.0297 14.9601L29.9296 17.8616C30.5076 18.4398 30.8324 19.2239 30.8324 20.0415C30.8324 20.8591 30.5076 21.6432 29.9296 22.2214C32.3747 19.7763 33.9163 17.729 33.9163 14.6456C33.9163 12.9301 33.3959 11.2549 32.4238 9.84129C31.4517 8.4277 30.0737 7.34224 28.4718 6.72825C26.8698 6.11427 25.1193 6.00066 23.4515 6.40241C21.7836 6.80417 20.2769 7.7024 19.1302 8.97847ZM29.9296 22.2214C29.6255 22.5255 29.2645 22.7667 28.8672 22.9313C28.4699 23.0959 28.0441 23.1806 27.614 23.1806C27.184 23.1806 26.7581 23.0959 26.3608 22.9313C25.9635 22.7667 25.6025 22.5255 25.2984 22.2214C25.6276 22.5191 25.8929 22.8806 26.0781 23.284C26.2633 23.6874 26.3645 24.1242 26.3757 24.5679C26.3868 25.0116 26.3076 25.453 26.1429 25.8652C25.9782 26.2773 25.7315 26.6517 25.4176 26.9656C25.1038 27.2794 24.7294 27.5262 24.3172 27.6909C23.905 27.8556 23.4637 27.9348 23.02 27.9236C22.5762 27.9125 22.1394 27.8112 21.736 27.6261C21.3326 27.4409 20.9711 27.1756 20.6734 26.8464C20.9778 27.1495 21.2193 27.5097 21.3844 27.9063C21.5494 28.3028 21.6347 28.7281 21.6352 29.1576C21.6358 29.5872 21.5517 30.0126 21.3877 30.4096C21.2237 30.8066 20.9831 31.1674 20.6796 31.4714C20.3866 31.7644 20.0376 31.9954 19.6534 32.1506C19.2692 32.3057 18.8576 32.3818 18.4433 32.3743C18.029 32.3668 17.6205 32.2759 17.2421 32.107C16.8638 31.9381 16.5233 31.6947 16.2411 31.3912L7.70801 23.1248C5.39551 20.8123 3.08301 18.1915 3.08301 14.6456C3.08335 12.9302 3.604 11.2552 4.5762 9.84188C5.5484 8.42853 6.92642 7.34331 8.52829 6.72952C10.1302 6.11573 11.8805 6.00224 13.5482 6.40405C15.2159 6.80585 16.7226 7.70404 17.8691 8.98001C18.0405 9.13932 18.266 9.22774 18.5 9.22745C18.734 9.22717 18.9592 9.1382 19.1302 8.97847" stroke="#062B28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
    },
    {
        text: 'Monthly meal perks + a fully stocked kitchen Because great work deserves good food and zero stress.',
        icon: (
            <svg width="37" height="35" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.9583 31.6895C17.4271 31.9455 17.9588 32.0802 18.5 32.0802C19.0412 32.0802 19.5729 31.9455 20.0417 31.6895L30.8333 25.8561C31.3016 25.6004 31.6905 25.2327 31.9611 24.7899C32.2317 24.3471 32.3744 23.8447 32.375 23.3332V11.6666C32.3744 11.1551 32.2317 10.6527 31.9611 10.2099C31.6905 9.76711 31.3016 9.39939 30.8333 9.14365L20.0417 3.31031C19.5729 3.05432 19.0412 2.91956 18.5 2.91956C17.9588 2.91956 17.4271 3.05432 16.9583 3.31031L6.16667 9.14365C5.6984 9.39939 5.30947 9.76711 5.03888 10.2099C4.76829 10.6527 4.62555 11.1551 4.625 11.6666V23.3332C4.62555 23.8447 4.76829 24.3471 5.03888 24.7899C5.30947 25.2327 5.6984 25.6004 6.16667 25.8561L16.9583 31.6895Z" stroke="#062B28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18.5 32.0833V17.5" stroke="#062B28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.07031 10.2084L18.4982 17.5L31.9261 10.2084" stroke="#062B28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.5625 6.22705L25.4375 13.7375" stroke="#062B28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        ),
    },
];

const CardImage = ({ src, alt = '', className = '', fill = false }) => (
    <div className={`w-full rounded-2xl overflow-hidden ${fill ? 'relative' : ''} ${className}`}>
        {fill ? (
            <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
        ) : (
            <Image src={src} alt={alt} className="w-full h-full object-cover" />
        )}
    </div>
);

const WhatWeDo = () => {
    return (
        <div className="w-full bg-white">
            <section className="max-w-[1380px] mx-auto px-5 md:px-8 py-20 md:py-28">

                {/* ================= PRINCIPLES ================= */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-14 md:mb-20">
                    <div className="max-w-[640px]">
                        <p className="outfit uppercase text-[#07302C]/55 font-bold text-sm tracking-[2.7px] mb-6">
                            What We Do
                        </p>
                        <h2 className="bricolage font-bold text-[#17241F] text-4xl md:text-6xl leading-[1.05] tracking-tight">
                            Principles <span className="playfair italic font-medium">That Power</span>{' '}
                            <span className="playfair italic font-medium">Everything</span> We Build
                        </h2>
                    </div>

                    <p className="outfit text-[#07302C]/79 text-lg md:text-xl lg:text-right max-w-[300px] lg:pt-3">
                        At Orbillo, we make digital simple, powerful and growth-focused
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {principles.map((item, i) => (
                        <div
                            key={i}
                            className="bg-[#F5FFEA] rounded-3xl p-6 flex flex-col"
                        >
                            {item.layout === 'text-top' ? (
                                <>
                                    <div className="px-1 mb-6">
                                        <h3 className="bricolage font-medium text-2xl text-[#000000] mb-2.5">
                                            {item.title}
                                        </h3>
                                        <p className="outfit text-[#575757] text-base leading-relaxed">
                                            {item.text}
                                        </p>
                                    </div>
                                    <CardImage src={item.img} alt={item.title} className="h-[280px]" />
                                </>
                            ) : (
                                <>
                                    <CardImage src={item.img} alt={item.title} className="h-[320px] mb-6" />
                                    <div className="px-1">
                                        <h3 className="bricolage font-medium text-2xl text-[#000000] mb-2.5">
                                            {item.title}
                                        </h3>
                                        <p className="outfit text-[#575757] text-base leading-relaxed">
                                            {item.text}
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                {/* ================= WORK CULTURE ================= */}
                <div className="text-center mt-28 md:mt-30 mb-14 md:mb-20">
                    <p className="outfit uppercase text-[#696969] font-semibold text-base tracking-[2.7px] mb-4">
                        Work Culture
                    </p>
                    <h2 className="bricolage font-semibold text-[#212121] text-4xl md:text-[50px] tracking-tight">
                        Life <span className="playfair">at</span> Orbillo
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Left column */}
                    <div className="flex flex-col gap-6 md:gap-8">
                        {lifeCards.slice(0, 2).map((card, i) => (
                            <div
                                key={i}
                                className="bg-[#EBEBEB] rounded-3xl px-8 py-12 flex flex-col justify-between min-h-[300px]"
                            >
                                <span className="text-[#212121]">{card.icon}</span>
                                <p className="outfit text-[#000000] text-lg md:text-xl leading-relaxed max-w-[320px]">
                                    {card.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Center image */}
                    <CardImage src={WorkCultureImg} alt="Life at Orbillo" fill className="self-stretch min-h-[400px]" />

                    {/* Right column */}
                    <div className="flex flex-col gap-6 md:gap-8">
                        {lifeCards.slice(2, 4).map((card, i) => (
                            <div
                                key={i}
                                className="bg-[#EBEBEB] rounded-3xl p-8 flex flex-col justify-between min-h-[300px]"
                            >
                                <span className="text-[#212121]">{card.icon}</span>
                                <p className="outfit text-[#000000] text-lg md:text-xl leading-relaxed max-w-[320px]">
                                    {card.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </div>
    );
};

export default WhatWeDo;
