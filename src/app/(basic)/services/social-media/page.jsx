
import React from 'react';
import Hero from './components/Hero';
import OurWork from './components/OurWork';
import WorkProcess from './components/WorkProcess';
import OurWrokMarque from './components/OurWrokMarque';
import Feedback from '@/app/components/Feedback/Feedback';
import Counter from '../components/Counter';
import Pricing from './components/Pricing';
import FAQsection from './components/FAQsection';
import Partnership from '@/app/components/Partnership';
import CTAsection from '../components/CTAsection';
import WhatWeDo from './components/WhatWeDo';

export const metadata = {
    metadataBase: new URL("https://www.orbillo.com"),
    title: "Social Media Design Services | Instagram, Facebook and LinkedIn Content - Orbillo",
    description:
        "Orbillo creates scroll-stopping social media designs for Facebook, Instagram, LinkedIn and X. On-brand content that builds your audience and grows your business.",
    keywords: [
        "social media design service",
        "Instagram post design",
        "Facebook graphic design",
        "LinkedIn content design",
        "social media branding kit",
        "content templates",
    ],
    openGraph: {
        title: "Social Media Design Services | Orbillo",
        description:
            "Scroll-stopping visuals, on-brand content and social media design that builds your audience and grows your business.",
        url: "https://www.orbillo.com/services/social-media/",
        siteName: "Orbillo",
        images: [
            {
                url: "/orbillo-og.webp",
                alt: "Social Media Design Services | Orbillo",
            },
        ],
        type: "website",
    },
    alternates: {
        canonical: "https://www.orbillo.com/services/social-media/",
    },
};

const page = () => {
    return (
        <div>
            <Hero />
            <WhatWeDo />
            <WorkProcess />
            <OurWork />
            <Pricing />
            <OurWrokMarque />
            <Feedback />
            <Partnership />
            <Counter />
            <FAQsection />
        </div>
    );
};

export default page;