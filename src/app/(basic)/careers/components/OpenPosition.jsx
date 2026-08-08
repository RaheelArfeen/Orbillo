'use client';

import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { ChevronDown, ArrowUpRight, Share2, UserPlus, Asterisk } from 'lucide-react';

// Where "Apply Now" and "Join Our Talent List" send people. Change as needed.
const APPLY_URL =
    'https://docs.google.com/forms/d/e/1FAIpQLSe7mgXo7cVJGjyHBl6CxxqZvIuE_1hrBnawGdBmW1p-EPjfLQ/viewform';

const positions = [
    {
        title: 'Graphic Designer',
        tags: ['Remote', 'Full time', 'Intermediate', '3 Yrs Experience'],
        description:
            'We’re looking for creative Graphic and UI/UX Designers who can turn ideas into visually appealing and user-friendly designs while working on real-world projects.',
    },
    {
        title: 'Web Developer',
        tags: ['Remote', 'Full time', 'Intermediate', '2 Yrs Experience'],
        description:
            'We’re looking for developers who can build fast, responsive and accessible websites, turning designs into clean, maintainable code.',
    },
    {
        title: 'Marketing Specialist',
        tags: ['Remote', 'Full time', 'Junior', '1 Yr Experience'],
        description:
            'We’re looking for marketers who can craft compelling campaigns, understand audiences, and help brands grow across digital channels.',
    },
];

const Tag = ({ text }) => (
    <span className="outfit text-sm md:text-lg text-[#07302C] bg-[#E0E0E0] px-3 md:px-4 py-0.5 rounded-full whitespace-nowrap">
        {text}
    </span>
);

const PositionCard = ({ position, isOpen, onToggle }) => {
    const [copied, setCopied] = useState(false);

    const handleShare = async (e) => {
        e.stopPropagation();
        const url = typeof window !== 'undefined' ? window.location.href : APPLY_URL;
        const data = { title: `${position.title} — Orbillo`, url };
        if (typeof navigator !== 'undefined' && navigator.share) {
            try {
                await navigator.share(data);
            } catch (_) {
                /* user cancelled */
            }
        } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
            try {
                await navigator.clipboard.writeText(url);
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
            } catch (_) {
                /* noop */
            }
        }
    };

    return (
        <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden">
            {/* Header (clickable) */}
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 p-5 md:p-8 text-left cursor-pointer"
            >
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5">
                    <h3 className="bricolage font-semibold text-xl md:text-3xl text-[#212121] tracking-tight whitespace-nowrap">
                        {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {position.tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                        ))}
                    </div>
                </div>

                <span className="shrink-0 text-[#000000]">
                    <svg className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} width="20" height="10" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.5 1.50008C21.5 1.50008 14.1352 11.5 11.5 11.5C8.86467 11.5 1.5 1.5 1.5 1.5" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
            </button>

            {/* Expandable body */}
            <div
                className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
            >
                <div className="overflow-hidden">
                    <div className="mx-5 md:mx-8 border-t-2 border-[#CCCCCC]" />
                    <div className="px-5 md:px-8 pt-5 md:pt-6 pb-6 md:pb-8">
                        <p className="outfit text-[#575757] text-base md:text-xl leading-relaxed max-w-[820px]">
                            {position.description}
                        </p>

                        <div className="flex items-center justify-end gap-4 md:gap-6 mt-6 md:mt-8">
                            <a
                                href={APPLY_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 rounded-full px-6 md:px-7 py-3 md:py-2.5 outfit font-medium text-sm md:text-base text-white bg-[linear-gradient(135deg,#002A15_0%,#169689_100%)] hover:opacity-90 transition-opacity"
                            >
                                Apply Now
                                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                            </a>

                            <button
                                type="button"
                                onClick={handleShare}
                                className="inline-flex items-center gap-2 outfit font-medium text-sm md:text-base text-[#212121] hover:text-[#07302C]/85 transition-colors cursor-pointer"
                            >
                                <Share2 className="w-4 h-4 md:w-5 md:h-5" />
                                {copied ? 'Copied!' : 'Share'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const OpenPosition = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

    return (
        <div className="relative w-full bg-[#07302C] overflow-hidden">
            {/* Marquee bar */}
            <div className="w-full bg-[#5ba32b] py-4 md:py-6 border-y border-[#C9FF90]/30 relative z-30">
                <Marquee autoFill={true} pauseOnHover={false} speed={80} className="overflow-hidden">
                    <div className="flex items-center">
                        <span className="text-white text-3xl md:text-5xl lg:text-6xl font-serif mx-4 lg:mx-10 tracking-tight bricolage">
                            Open Position
                        </span>
                        <span className="text-white text-3xl md:text-4xl lg:text-5xl font-black">
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.0749 12.1C4.94157 12.1 3.91657 11.8334 2.9999 11.3C2.08324 10.75 1.3499 10.025 0.799903 9.12502C0.266569 8.20836 -9.74834e-05 7.18336 -9.74834e-05 6.05002C-9.74834e-05 4.91669 0.266569 3.90002 0.799903 3.00002C1.3499 2.08336 2.08324 1.35836 2.9999 0.825023C3.91657 0.275024 4.94157 2.3663e-05 6.0749 2.3663e-05C7.19157 2.3663e-05 8.20824 0.275024 9.1249 0.825023C10.0416 1.35836 10.7666 2.08336 11.2999 3.00002C11.8332 3.90002 12.0999 4.91669 12.0999 6.05002C12.0999 7.18336 11.8332 8.20836 11.2999 9.12502C10.7666 10.025 10.0416 10.75 9.1249 11.3C8.20824 11.8334 7.19157 12.1 6.0749 12.1Z" fill="white" />
                            </svg>
                        </span>
                    </div>
                </Marquee>
            </div>

            {/* Glows */}
            <div className="absolute size-72 rounded-full -bottom-16 -left-16 blur-[160px] bg-[#C9FF90]/25 pointer-events-none" />
            <div className="absolute size-72 rounded-full -top-16 -right-16 blur-[160px] bg-[#C9FF90]/25 pointer-events-none" />

            <section className="max-w-[1380px] mx-auto px-5 md:px-8 py-16 md:py-28 relative z-10">
                {/* Heading */}
                <div className="text-center mb-12 md:mb-16">
                    <p className="outfit uppercase text-white/55 font-semibold text-lg tracking-[2.7px] mb-6">
                        Open Position
                    </p>
                    <h2 className="bricolage font-semibold text-white text-3xl md:text-[50px] leading-[1.15] tracking-tight max-w-[820px] mx-auto">
                        We&apos;re a <span className="playfair">Diverse Group</span> of
                        Designers, Developers and Marketers.
                    </h2>
                </div>

                {/* Accordion */}
                <div className="flex flex-col gap-5 md:gap-6 max-w-[1360px] mx-auto">
                    {positions.map((position, i) => (
                        <PositionCard
                            key={i}
                            position={position}
                            isOpen={openIndex === i}
                            onToggle={() => toggle(i)}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16 md:mt-25">
                    <h3 className="bricolage font-medium text-white text-2xl md:text-4xl tracking-tight">
                        Can&apos;t find your <span className="playfair">perfect role?</span>
                    </h3>
                    <p className="outfit text-white/70 text-base md:text-xl mt-6 max-w-[560px] mx-auto">
                        No worries — we&apos;d still love to hear from you. Send us your CV and we&apos;ll reach out
                        when a suitable position opens.
                    </p>

                    <a
                        href={APPLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 mt-8 rounded-full border border-[#C9FF90] text-[#C9FF90] px-7 md:px-8 py-2.5 md:py-3 outfit font-medium text-xl hover:bg-[#C9FF90] hover:text-[#07302C] transition-colors"
                    >
                        <UserPlus className="w-6 h-6" />
                        Join Our Talent List
                    </a>
                </div>
            </section>
        </div>
    );
};

export default OpenPosition;
