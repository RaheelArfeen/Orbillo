
import React from 'react';
import Hero from './components/Hero';
import OurWork from './components/FeaturedWork';
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
    title: "Web Design and Development Services | Fast, SEO-Ready Websites - Orbillo",
    description:
        "Orbillo builds fast, scalable and SEO-ready websites for businesses worldwide. From landing pages to full custom web apps - built to perform and convert.",
    keywords: [
        "web development service",
        "website development",
        "Next.js development",
        "WordPress developer",
        "landing page design",
        "e-commerce website",
        "custom web app",
    ],
    openGraph: {
        title: "Web Development Services | Orbillo",
        description:
            "Clean code, pixel-perfect design and web development that loads fast, ranks higher and converts visitors into customers.",
        url: "https://www.orbillo.com/services/web-development/",
        siteName: "Orbillo",
        images: [
            {
                url: "/orbillo-og.webp",
                alt: "Web Development Services | Orbillo",
            },
        ],
        type: "website",
    },
    alternates: {
        canonical: "https://www.orbillo.com/services/web-development/",
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