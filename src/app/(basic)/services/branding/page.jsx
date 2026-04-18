
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
    title: "Logo and Brand Identity Design Services | Branding Agency - Orbillo",
    description:
        "Orbillo designs bold, memorable brand identities - logo design, brand strategy, guidelines and more. Built for startups and growing businesses worldwide.",
    keywords: [
        "brand identity design",
        "logo design service",
        "brand strategy",
        "brand guidelines",
        "rebranding",
        "branding agency Bangladesh",
    ],
    openGraph: {
        title: "Brand Identity Design | Orbillo",
        description:
            "From logo to full brand system - we craft identities that build trust, drive recognition and grow your business.",
        url: "https://www.orbillo.com/services/branding/",
        siteName: "Orbillo",
        images: [
            {
                url: "/orbillo-og.webp",
                width: 1200,
                height: 630,
                alt: "Brand Identity Design | Orbillo",
            },
        ],
        type: "website",
    },
    alternates: {
        canonical: "https://www.orbillo.com/services/branding/",
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