import Image from 'next/image';
import React from 'react';
import ProductDesign from '../../Icons/ProductDesign.svg'
import MobileUX from '../../Icons/MobileUX.svg'
import Redesign from '../../Icons/Redesign.svg'
import Prototype from '../../Icons/Prototype.svg'
import Image1 from '@/assets/marquee/1.jpg'
import Image2 from '@/assets/marquee/2.avif'
import Image3 from '@/assets/marquee/3.jpg'
import Image4 from '@/assets/marquee/4.avif'
import Image5 from '@/assets/marquee/5.jpg'
import Image6 from '@/assets/marquee/6.jpg'
import Marquee from 'react-fast-marquee';
import Rankmet from '@/assets/Icons/Clients/Rankmet.svg'
import Affinity from '@/assets/Icons/Clients/Affinity.svg'
import Rizzmatgic from '@/assets/Icons/Clients/Rizzmatgic.svg'
import GDFA from '@/assets/Icons/Clients/GDFA.svg'
import ShutterOcean from '@/assets/Icons/Clients/ShutterOcean.svg'

const WhatWeDo = () => {

    const cards = [
        {
            title: "Business & Corporate Websites",
            description: "Clean, professional websites built to establish credibility, attract leads and grow your business online.",
            src: ProductDesign,
        },
        {
            title: "E-commerce & Online Stores",
            description: "Conversion-optimized online stores that deliver smooth shopping experiences and drive consistent sales.",
            src: MobileUX,
        },
        {
            title: "Landing Pages & Funnels",
            description: "High-converting landing pages built to capture leads, promote offers and grow your revenue online.",
            src: Redesign
        },
        {
            title: "Web App & Custom Development",
            description: "Scalable, custom-built web applications designed to solve complex problems and power your digital operations.",
            src: Prototype
        },
    ];

    const ICONS = [
        {
            id: 1,
            svg: Rankmet
        },
        {
            id: 2,
            svg: Affinity
        },
        {
            id: 3,
            svg: Rizzmatgic
        },
        {
            id: 4,
            svg: GDFA
        },
        {
            id: 5,
            svg: ShutterOcean
        },
    ]

    const images = [
        {
            image: Image1
        },
        {
            image: Image2
        },
        {
            image: Image3
        },
        {
            image: Image4
        },
        {
            image: Image5
        },
        {
            image: Image6
        },
        {
            image: Image1
        },
        {
            image: Image2
        },
        {
            image: Image3
        },
        {
            image: Image4
        },
        {
            image: Image5
        },
        {
            image: Image6
        },
    ]

    return (
        <div>
            <section className='py-12 md:py-25 px-5 2xl:px-0'>

                <section className='flex flex-col items-center'>
                    <h1 className='text-[32px] text-[#212121]/90 tracking-tight max-w-[750px] text-center'>We're a team of passionate web developers who believe great websites are more than pretty pages. We architect, develop and optimize web experiences that perform, scale and drive real business results.</h1>

                    <Marquee
                        gradient={false}
                        speed={50}
                        pauseOnHover={true}
                        className="py-4 my-20"
                    >
                        {images.map((src, index) => (
                            <div key={index} className="mx-2 md:mx-3 max-w-[350px] flex-1 h-[200px] md:h-[270px]">
                                <Image
                                    className="shadow-md w-full h-full object-cover rounded-2xl md:rounded-3xl pointer-events-none"
                                    src={src.image}
                                    alt={`Gallery image ${index + 1}`}
                                />
                            </div>
                        ))}
                    </Marquee>
                </section>

                <section className='max-w-[1380px] px-4 mx-auto'>
                    <div className="flex flex-wrap items-center w-full border-t border-l border-[#E9E9E9] mb-50">
                        {ICONS.map((icon, index) => (
                            <div
                                key={index}
                                className="border-b border-r border-[#E9E9E9] w-full flex-1 h-20 md:h-24 flex items-center justify-center p-4 md:opacity-50 hover:opacity-100 cursor-pointer transition duration-800"
                            >
                                <Image src={icon.svg} alt="icon" />
                            </div>
                        ))}
                    </div>

                    <div>
                        <div className='flex flex-col lg:flex-row items-end justify-between gap-8 mb-20'>
                            <div className='space-y-8 lg:text-left text-center w-full flex flex-col items-center lg:items-start'>
                                <p className='uppercase outfit text-sm font-bold text-[#07302C]/55 tracking-[2.7px]'>
                                    What We Do
                                </p>
                                <h3 className='text-3xl md:text-5xl max-w-[660px] font-semibold bricolage capitalize text-[#212121] tracking-tight leading-[122%]'>
                                    <p>Everything for a Scalable, <span className='playfair'>High-Performing</span> Website</p>
                                </h3>
                            </div>
                            <div>
                                <p className='outfit text-xl text-[#4B4B4B] max-w-[600px] text-center lg:text-left'>
                                    At Orbillo, we turn your business goals into fast, functional and growth-ready websites.
                                </p>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className="group relative rounded-2xl min-h-[360px] overflow-hidden bg-[#07302C] transition-all duration-800 group"
                                >
                                    <div className="absolute -top-15 -right-35 w-[200px] h-[200px] rounded-full blur-[60px] bg-[#6BBE46]/55 z-0 transition-transform duration-700 group-hover:scale-125"></div>
                                    <div className="absolute inset-0 bg-[#07302C] z-10 group-hover:opacity-100 opacity-0 duration-800"></div>

                                    <div className="absolute bottom-6 -left-30 w-[200px] h-[200px] rounded-full blur-[60px] bg-[#6BBE46]/55 z-0 transition-transform duration-700 group-hover:scale-125"></div>

                                    <div className="absolute inset-0 z-10 overflow-hidden">

                                        <div className="absolute left-5 right-5 top-8 transition-all duration-800 ease-in-out translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                            <p className="outfit text-white/80 text-lg leading-relaxed">
                                                {card.description}
                                            </p>
                                        </div>

                                        <h4 className="absolute left-5 top-8 transition-all duration-800 ease-in-out group-hover:top-[calc(100%-32px)] group-hover:-translate-y-full bricolage text-2xl leading-[140%] text-white font-semibold tracking-tight max-w-[250px]">
                                            {card.title}
                                        </h4>

                                        <div className="absolute bottom-0 right-0 flex items-end justify-center transition-all duration-600 ease-in-out translate-y-0 opacity-100 group-hover:opacity-0">
                                            <Image
                                                src={card.src}
                                                alt={card.title}
                                                width={200}
                                                height={160}
                                                className="w-full h-full object-contain object-bottom pointer-events-none"
                                            />
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </section>

        </div>
    );
};

export default WhatWeDo;
