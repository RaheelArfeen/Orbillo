
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
    title: "UI UX Design Services | Mobile App, SaaS and Web Design - Orbillo",
    description:
        "Orbillo creates intuitive, conversion-focused UI/UX designs for web, mobile and SaaS products. Research-driven design that reduces drop-offs and drives growth.",
    keywords: [
        "UI UX design service",
        "user experience design",
        "product design",
        "SaaS UI design",
        "mobile app UX",
        "wireframing",
        "prototyping",
    ],
    openGraph: {
        title: "UI/UX Design Services | Orbillo",
        description:
            "Beautiful interfaces, seamless experiences - UI/UX design that keeps users coming back and your business growing.",
        url: "https://www.orbillo.com/services/ui-ux/",
        siteName: "Orbillo",
        images: [
            {
                url: "/og/ui-ux.jpg",
                width: 1200,
                height: 630,
                alt: "UI/UX Design Services | Orbillo",
            },
        ],
        type: "website",
    },
    alternates: {
        canonical: "https://www.orbillo.com/services/ui-ux/",
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