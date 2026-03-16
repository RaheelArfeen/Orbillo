"use client"

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ITEMS = [
    {
        label: "Simplicity that",
        title: "Drives Clarity",
        icon: (
            <svg width="47" height="52" viewBox="0 0 47 52" fill="none" xmlns="http://www.w3.org/2000/svg" className='size-10 md:size-12'>
                <path d="M22.5511 0.263294L22.2876 0.536885V4.35702V8.17715L22.5511 8.45074C22.9361 8.82566 23.6657 8.82566 24.0507 8.45074L24.3142 8.17715V4.35702V0.536885L24.0507 0.263294C23.8379 0.0505017 23.6859 -0.000163183 23.3009 -0.000163183C22.9158 -0.000163183 22.7638 0.0505017 22.5511 0.263294Z" fill="#07302C" />
                <path d="M9.42871 3.96225C9.06392 4.3169 9.00313 4.85395 9.27672 5.2694C9.51991 5.64432 13.2488 9.39353 13.715 9.73805C14.2621 10.1434 14.7688 10.1434 15.1842 9.71778C15.6098 9.30233 15.6098 8.79568 15.2045 8.2485C14.86 7.78238 11.1108 4.05345 10.7359 3.81025C10.3204 3.53666 9.78337 3.59746 9.42871 3.96225Z" fill="#07302C" />
                <path d="M35.7036 3.94168C35.2375 4.28621 31.5086 8.03541 31.2654 8.41033C31.1742 8.54206 31.1033 8.82578 31.1033 9.02844C31.1033 9.81881 32.0558 10.3052 32.7245 9.86948C33.0995 9.62629 36.8487 5.89735 37.1932 5.43123C37.5985 4.88405 37.5985 4.3774 37.1729 3.96195C36.7575 3.53636 36.2508 3.53636 35.7036 3.94168Z" fill="#07302C" />
                <path d="M8.28371 13.1425C7.81759 13.639 0.258391 23.1032 0.106396 23.3869C-0.0354654 23.6605 -0.0354654 24.1672 0.106396 24.4509C0.258391 24.7143 21.8619 50.8574 22.4192 51.4451C22.7941 51.8302 22.8853 51.8809 23.3008 51.8809C23.7162 51.8809 23.8074 51.8302 24.1824 51.4451C24.7397 50.8676 46.3533 24.7042 46.4952 24.4407C46.637 24.1672 46.637 23.6504 46.4952 23.3869C46.3432 23.1032 38.784 13.639 38.3179 13.1425L37.9531 12.7676H23.3008H8.6485L8.28371 13.1425ZM20.9499 14.9765C20.879 15.0779 19.5921 16.6992 18.0823 18.5738C15.9544 21.2489 15.3261 21.9683 15.2349 21.867C15.0931 21.7048 11.0399 14.936 11.0399 14.8549C11.0399 14.8245 13.2995 14.7942 16.0658 14.7942C20.9094 14.7942 21.0817 14.8043 20.9499 14.9765ZM35.5617 14.8549C35.5617 14.936 31.5085 21.7048 31.3666 21.867C31.2754 21.9683 30.6472 21.2489 28.5193 18.5738C27.0095 16.6992 25.7226 15.0779 25.6516 14.9765C25.5199 14.8043 25.6922 14.7942 30.5357 14.7942C33.302 14.7942 35.5617 14.8245 35.5617 14.8549ZM26.2799 19.2223L29.1779 22.8499L28.0228 22.8803C26.9284 22.9005 26.8575 22.9208 26.6041 23.1741C26.2292 23.549 26.2292 24.2786 26.6041 24.6637C26.8777 24.9271 26.8879 24.9271 28.4382 24.9271C29.6542 24.9271 29.9987 24.9575 29.9582 25.0487C29.9379 25.1197 28.4382 30.095 26.6345 36.0937C24.8309 42.1025 23.3312 47.017 23.3008 47.017C23.2704 47.017 21.7707 42.1025 19.967 36.0937C18.1634 30.095 16.6637 25.1197 16.6434 25.0487C16.6029 24.9575 16.9474 24.9271 18.1634 24.9271C19.7137 24.9271 19.7238 24.9271 19.9974 24.6637C20.3724 24.2786 20.3724 23.549 19.9974 23.1741C19.7441 22.9208 19.6732 22.9005 18.5788 22.8803L17.4237 22.8499L20.3217 19.2223C21.9126 17.2362 23.2603 15.6048 23.3008 15.6048C23.3413 15.6048 24.689 17.2362 26.2799 19.2223ZM11.2425 19.3844C12.3673 21.2691 13.2691 22.8296 13.2489 22.86C13.2185 22.8803 10.9588 22.8904 8.22291 22.8803L3.23749 22.8499L6.09499 19.2729C8.33438 16.4864 8.98289 15.7264 9.07408 15.8277C9.13488 15.8986 10.1076 17.4997 11.2425 19.3844ZM40.5674 19.354L43.3641 22.8499L38.3787 22.8803C35.6428 22.8904 33.3831 22.8803 33.3527 22.86C33.3223 22.8195 37.2539 16.1621 37.5174 15.8277C37.5782 15.7568 37.6592 15.7365 37.6998 15.777C37.7403 15.8176 39.0373 17.4287 40.5674 19.354ZM14.475 25.2514C14.9208 26.6396 20.6561 45.8416 20.6358 45.872C20.6155 45.8923 16.6941 41.1804 11.9215 35.4148L3.24762 24.9271H8.81063H14.3635L14.475 25.2514ZM34.6801 35.4148C29.9075 41.1804 25.986 45.8923 25.9658 45.872C25.9455 45.8416 31.6808 26.6396 32.1266 25.2514L32.2381 24.9271H37.791H43.354L34.6801 35.4148Z" fill="#07302C" />
                <path d="M22.5511 23.1641C22.3383 23.3769 22.2876 23.5289 22.2876 23.9139C22.2876 24.299 22.3383 24.451 22.5511 24.6638C22.7638 24.8766 22.9158 24.9272 23.3009 24.9272C23.6859 24.9272 23.8379 24.8766 24.0507 24.6638C24.2635 24.451 24.3142 24.299 24.3142 23.9139C24.3142 23.5289 24.2635 23.3769 24.0507 23.1641C23.8379 22.9513 23.6859 22.9006 23.3009 22.9006C22.9158 22.9006 22.7638 22.9513 22.5511 23.1641Z" fill="#07302C" />
            </svg>
        )
    },
    {
        label: "Creativity that",
        title: "Drives Connection",
        icon: (
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className='size-10 md:size-12'>
                <path d="M27.533 16.0611C30.701 16.0611 33.2691 13.4929 33.2691 10.325C33.2691 7.15701 30.701 4.58887 27.533 4.58887C24.365 4.58887 21.7969 7.15701 21.7969 10.325C21.7969 13.4929 24.365 16.0611 27.533 16.0611Z" stroke="#07302C" strokeWidth="2.26301" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M23.4024 14.4541L14.4541 23.4024" stroke="#07302C" strokeWidth="2.26301" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.325 33.2701C13.4929 33.2701 16.0611 30.7019 16.0611 27.534C16.0611 24.366 13.4929 21.7979 10.325 21.7979C7.15701 21.7979 4.58887 24.366 4.58887 27.534C4.58887 30.7019 7.15701 33.2701 10.325 33.2701Z" stroke="#07302C" strokeWidth="2.26301" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.0615 27.5332H39.006" stroke="#07302C" strokeWidth="2.26301" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M44.741 33.2701C47.909 33.2701 50.4771 30.7019 50.4771 27.534C50.4771 24.366 47.909 21.7979 44.741 21.7979C41.573 21.7979 39.0049 24.366 39.0049 27.534C39.0049 30.7019 41.573 33.2701 44.741 33.2701Z" stroke="#07302C" strokeWidth="2.26301" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M31.6628 40.6114L40.6112 31.6631" stroke="#07302C" strokeWidth="2.26301" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M27.533 50.4781C30.701 50.4781 33.2691 47.9099 33.2691 44.742C33.2691 41.574 30.701 39.0059 27.533 39.0059C24.365 39.0059 21.7969 41.574 21.7969 44.742C21.7969 47.9099 24.365 50.4781 27.533 50.4781Z" stroke="#07302C" strokeWidth="2.26301" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        label: "Strategy that",
        title: "Drives Business",
        icon: (
            <svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg" className='size-8 md:size-10'>
                <path d="M12.0601 0.108078C11.5422 0.293049 11.1723 0.598251 10.8948 1.06993L10.6358 1.50461L10.6081 3.92773L10.5803 6.3601H7.41734C5.67861 6.3601 3.96763 6.40635 3.60694 6.45259C2.21041 6.65606 0.980347 7.56242 0.342197 8.84797L0 9.54161V21.3798V33.2272L0.342197 33.9486C0.739884 34.7717 1.39653 35.4838 2.13642 35.8815C3.17225 36.4364 2.35838 36.4179 19.1908 36.4179C36.0231 36.4179 35.2093 36.4364 36.2451 35.8815C36.985 35.4838 37.6416 34.7717 38.0393 33.9486L38.3815 33.2272V21.389V9.55086L38.0856 8.92195C37.4659 7.61791 36.1711 6.65606 34.7746 6.45259C34.4231 6.40635 32.7029 6.3601 30.9642 6.3601H27.8012L27.7734 3.92773L27.7457 1.48611L27.4682 1.03294C27.2925 0.755478 27.015 0.47802 26.7376 0.302299L26.2844 0.0248413L19.3387 0.00634384C13.8173 -0.0121536 12.3283 0.00634384 12.0601 0.108078ZM25.5723 4.27918V6.3601H19.1908H12.8093V4.27918V2.19825H19.1908H25.5723V4.27918ZM34.4601 8.67224C35.0798 8.79247 35.5792 9.11617 35.9029 9.6156L36.1619 9.99479L36.1896 12.4826L36.2173 14.9613H19.1908H2.16416L2.19191 12.4826L2.21965 9.99479L2.47861 9.6156C2.79306 9.13467 3.31098 8.78323 3.8474 8.68149C4.44856 8.56126 33.8405 8.56126 34.4601 8.67224ZM14.8439 18.3185C14.8439 20.0665 15.1214 20.7231 16.0647 21.1948L16.5457 21.4353H19.1908H21.8358L22.3168 21.1948C23.2601 20.7231 23.5376 20.0665 23.5376 18.3185V17.1809H29.8728H36.2081V24.8572C36.2081 33.2549 36.2266 32.9035 35.6717 33.4861C35.533 33.6341 35.2555 33.8468 35.052 33.9486L34.6821 34.152H19.1908H3.69942L3.32948 33.9486C3.12601 33.8468 2.84856 33.6341 2.70983 33.4861C2.15491 32.9035 2.17341 33.2549 2.17341 24.8572V17.1809H8.50867H14.8439V18.3185ZM21.3179 18.1983V19.2156H19.1908H17.0636V18.1983V17.1809H19.1908H21.3179V18.1983Z" fill="#0C2D25" />
            </svg>
        )
    },
];

const OurPhilosophy = () => {
    const containerRef = useRef(null);

    // 1. Reduced the total scroll distance from 450vh/600vh to 200vh/300vh.
    // 2. Changed offset to "end start" so it hits 100% progress sooner.
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Increased stiffness and reduced mass for a faster "catch up" feel
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 35,
        damping: 20,
        mass: 0.6,
        restDelta: 0.001
    });

    // --- ANIMATION VALUES (TIGHTER PERCENTAGES) ---
    // Path finishes earlier (0.6 instead of 0.9)
    const pathLength = useTransform(smoothProgress, [0, 0.6], [0, 1]);
    const mobileLineHeight = useTransform(smoothProgress, [0, 0.6], ["0%", "100%"]);

    // Items now pop in rapidly in the first 50% of the scroll track
    const item1Opacity = useTransform(smoothProgress, [0.05, 0.15], [0, 1]);
    const item1Y = useTransform(smoothProgress, [0.05, 0.15], [30, 0]);

    const item2Opacity = useTransform(smoothProgress, [0.20, 0.30], [0, 1]);
    const item2Y = useTransform(smoothProgress, [0.20, 0.30], [30, 0]);

    const item3Opacity = useTransform(smoothProgress, [0.35, 0.45], [0, 1]);
    const item3Y = useTransform(smoothProgress, [0.35, 0.45], [30, 0]);

    const opacities = [item1Opacity, item2Opacity, item3Opacity];
    const yOffsets = [item1Y, item2Y, item3Y];

    return (
        <div className='relative w-full bg-[#062926]'>
            {/* Speed Up: Reduced Height of the track */}
            <div ref={containerRef} className="relative h-[250vh] md:h-[300vh]">
                <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center">
                    
                    <div className='h-[200px] w-[200px] bg-[#D6F55B] rounded-full absolute top-15 blur-[200px] left-1/2 -translate-x-1/2'></div>

                    <div className='max-w-[1380px] w-full mx-auto px-6 md:px-4'>
                        {/* Header Text */}
                        <div className='text-center flex flex-col items-center justify-center mb-8 md:mb-12'>
                            <p className='outfit uppercase text-[#A8A8A8] font-bold text-xs md:text-sm tracking-[2.7px] whitespace-nowrap mb-4 md:mb-8'>
                                Our Philosophy
                            </p>
                            <p className='bricolage text-3xl md:text-5xl leading-[140%] font-medium tracking-[-0.2px] text-[#FFFFFF] max-w-[600px]'>
                                Orbillo connects design & business outcomes
                            </p>
                        </div>

                        {/* DESKTOP VIEW */}
                        <div className="hidden md:block relative w-full max-w-[1320px] mx-auto h-[350px]">
                            <svg width="1317" height="315" viewBox="0 0 1317 315" fill="none" className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                                <path d="M1.5 313.5V24.5C1.5 11.7975 11.7975 1.5 24.5 1.5H399C411.703 1.5 422 11.7975 422 24.5V290.5C422 303.203 432.297 313.5 445 313.5H868.5C881.203 313.5 891.5 303.203 891.5 290.5V24.5C891.5 11.7975 901.797 1.5 914.5 1.5H1292.5C1305.2 1.5 1315.5 11.7975 1315.5 24.5V313.5" stroke="#FFFFFF" strokeOpacity="0.1" strokeWidth="3" strokeLinecap="round" />
                                <motion.path
                                    d="M1.5 313.5V24.5C1.5 11.7975 11.7975 1.5 24.5 1.5H399C411.703 1.5 422 11.7975 422 24.5V290.5C422 303.203 432.297 313.5 445 313.5H868.5C881.203 313.5 891.5 303.203 891.5 290.5V24.5C891.5 11.7975 901.797 1.5 914.5 1.5H1292.5C1305.2 1.5 1315.5 11.7975 1315.5 24.5V313.5"
                                    stroke="url(#paint0_linear_desktop)" strokeWidth="3" strokeLinecap="round" style={{ pathLength }}
                                />
                                <defs>
                                    <linearGradient id="paint0_linear_desktop" x1="1330.5" y1="201.055" x2="6.76412" y2="325.19" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.01" stopColor="#062926" />
                                        <stop offset="0.18" stopColor="#C9FF90" />
                                        <stop offset="0.37" stopColor="#07302C" />
                                        <stop offset="0.83" stopColor="#C9FF90" />
                                        <stop offset="1" stopColor="#062926" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            <div className="relative z-10 grid grid-cols-3 h-full w-full">
                                {ITEMS.map((item, index) => (
                                    <div key={index} className={`flex flex-col gap-12 lg:gap-6 px-0 lg:px-8 h-full ${index === 1 ? 'flex-col-reverse mt-8' : 'py-2'}`}>
                                        <motion.div style={{ opacity: opacities[index], scale: opacities[index] }} className={`${index === 1 ? 'mb-18 lg:mb-2 mt-4' : 'mb-4 mt-10 lg:-mt-8'}`}>
                                            <div className="size-20 flex items-center justify-center rounded-full bg-[#6BBE46] ml-8">
                                                {item.icon}
                                            </div>
                                        </motion.div>
                                        <motion.div style={{ opacity: opacities[index], y: yOffsets[index] }} className={`text-left ${index === 2 ? 'lg:pl-12 px-8' : 'lg:pl-12 pl-6'}`}>
                                            <p className="outfit text-xl lg:text-2xl mb-2 text-white/90">{item.label}</p>
                                            <h3 className="bricolage text-2xl lg:text-4xl text-white">{item.title}</h3>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* MOBILE VIEW */}
                        <div className="block md:hidden relative w-full max-w-[400px] mx-auto min-h-[400px]">
                            <div className="absolute left-8 top-0 bottom-0 w-1 bg-white/10 rounded-full">
                                <motion.div
                                    className="w-full bg-gradient-to-b from-[#07302C] via-[#C9FF90] to-[#07302C] rounded-full"
                                    style={{ height: mobileLineHeight }}
                                />
                            </div>
                            <div className="flex flex-col gap-12 py-4">
                                {ITEMS.map((item, index) => (
                                    <div key={index} className="flex items-center gap-6 relative z-10">
                                        <motion.div style={{ opacity: opacities[index], scale: opacities[index] }} className="flex-shrink-0 ml-1">
                                            <div className="w-16 h-16 bg-[#6BBE46] rounded-full flex items-center justify-center">
                                                {item.icon}
                                            </div>
                                        </motion.div>
                                        <motion.div style={{ opacity: opacities[index], x: yOffsets[index] }} className="text-left pt-2">
                                            <p className="outfit text-lg text-white/70 mb-1">{item.label}</p>
                                            <h3 className="bricolage text-3xl text-white">{item.title}</h3>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='w-full flex items-center justify-center mt-20'>
                            <button className='bg-[#C9FF90] outfit font-medium text-xl text-[#17241F] py-4 px-8 rounded-full text-center cursor-pointer hover:bg-[#17241F] hover:text-[#C9FF90] transition duration-300 border-2 border-[#C9FF90]'>
                                Schedule A Meeting
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurPhilosophy;