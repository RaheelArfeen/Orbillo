import React from 'react';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import OpenPosition from './components/OpenPosition';
import OurTeam from './components/OurTeam';
import FAQsection from './components/FAQsection';

export const metadata = {
    metadataBase: new URL("https://www.orbillo.com"),
    title: "Careers at Orbillo | Join Our Design & Development Team",
    description:
        "Build your career with Orbillo. Explore open roles in design, development and marketing, and join a team helping brands grow across the US, UK and Asia.",
    keywords: [
        "Orbillo careers",
        "design agency jobs",
        "hiring designers",
        "web developer jobs",
        "join Orbillo"
    ],
    openGraph: {
        title: "Careers at Orbillo | Grow With Us",
        description:
            "Explore open roles at Orbillo and join a diverse team of designers, developers and marketers.",
        url: "https://www.orbillo.com/careers/",
        siteName: "Orbillo",
        images: [
            {
                url: "/orbillo-og.webp",
                alt: "Orbillo | Your Reliable Design Partner",
            },
        ],
        type: "website",
    },
    alternates: {
        canonical: "https://www.orbillo.com/careers/",
    },
};

const Contact = () => {
    return (
        <div>
            <Hero />
            <WhatWeDo />
            <OpenPosition />
            <OurTeam />
            <FAQsection />
        </div>
    );
};

export default Contact;