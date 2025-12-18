'use client'; // Required for State if using Next.js App Router

import Image from 'next/image';
import FaqIcon from './Icons/FaqIcon.svg'; // Ensure this path is correct
import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const QUESTIONS = [
    {
        title: 'What is Brand Design?',
        answer: 'Brand design is the process of creating the visual identity of a company. This includes the logo, color palette, typography, and other design elements that distinguish a brand from its competitors.'
    },
    {
        title: 'How Much Does Your Brand Design Service Cost?',
        answer: 'Our pricing varies depending on the scope of the project. We offer custom packages tailored to specific needs, ranging from basic logo design to full-scale corporate identity systems.'
    },
    {
        title: 'How to Choose the Best Brand Design Agency?',
        answer: 'Look for an agency with a strong portfolio that resonates with your style. Check client testimonials, their design process, and ensure they understand your business goals before hiring.'
    },
    {
        title: 'Why Does Branding Matter?',
        answer: 'Branding builds trust, recognition, and loyalty. A strong brand identity makes your business memorable and conveys your values instantly to your target audience.'
    },
    {
        title: 'What is the timeline for a project?',
        answer: 'Most brand identity projects take between 4 to 8 weeks, depending on the complexity and the number of deliverables required.'
    },
];

const Faq = () => {
    // State to track which FAQ is open (null means all closed)
    const [openIndex, setOpenIndex] = useState(null);

    // Function to toggle accordion
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <section className='max-w-[1380px] mx-auto px-5 md:px-10 py-12 md:py-30 relative'>
                
                <div className='flex flex-col lg:flex-row justify-between gap-10 lg:gap-20'>

                    <div className='w-full lg:w-[40%] flex flex-col items-center lg:items-start text-center lg:text-left shrink-0'>
                        <div className='space-y-8 sticky top-10'>
                            <p className='uppercase outfit text-sm lg:text-lg font-bold text-[#07302C]/55 tracking-[2.7px]'>
                                faq
                            </p>
                            <h1 className='text-[28px] md:text-4xl md:max-w-[500px] max-w-[500px] recoleta text-[#07302C] leading-tight [font-variant-ligatures:none]'>
                                Questions? We’re Here to Help
                            </h1>

                            <div className='pointer-events-none'>
                                <Image 
                                    src={FaqIcon} 
                                    alt="FAQ Icon"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side: FAQ List */}
                    <div className='w-full lg:w-[60%] space-y-4'>
                        {QUESTIONS.map((question, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div 
                                    key={index} 
                                    onClick={() => toggleFAQ(index)}
                                    className={`px-6 py-6 rounded-xl border border-[#CACACA] w-full cursor-pointer transition-all duration-300 hover:bg-black/2`}
                                >
                                    <div className={`flex items-center justify-between gap-4 transition-all duration-300 ${isOpen ? 'border-b border-[#696969] pb-2' : ''}`}>
                                        <h1 className={`text-xl md:text-2xl outfit leading-[140%] transition-colors duration-300 ${isOpen ? 'text-[#696969]' : 'text-[#696969]'}`}>
                                            {question.title}
                                        </h1>
                                        
                                        <div className={`shrink-0 transition-transform duration-500 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                                            <Plus 
                                                strokeWidth={2} 
                                                className={`text-2xl transition-colors duration-300 ${isOpen ? 'text-[#07302C]' : 'text-[#07302C]'}`} 
                                            />
                                        </div>
                                    </div>

                                    <div className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                                        <div className='overflow-hidden'>
                                            <p className={`outfit leading-relaxed ${isOpen ? 'text-[#07302C]/80' : 'text-[#696969]'}`}>
                                                {question.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;