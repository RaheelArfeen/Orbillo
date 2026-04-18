import React from 'react';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import OurStory from './components/OurStory';
import OurVission from './components/OurVission';
import OurPholosophy from './components/OurPholosophy';
import FeaturedClients from './components/FeaturedClients';
import OurTeam from './components/OurTeam';
import Feedback from '@/app/components/Feedback/Feedback';
import Partnership from '@/app/components/Partnership';
import FAQsection from '@/app/components/FAQsection';

export const metadata = {
    metadataBase: new URL("https://www.orbillo.com"),
    title: "About Orbillo | Global Design Agency Team",
    description:
        "Meet the passionate team at Orbillo - a design agency built to help businesses grow through strategy, creativity and purposeful digital design.",
    keywords: [
        "about Orbillo",
        "design agency team",
        "digital growth partner",
        "creative agency Bangladesh",
        "global design agency",
    ],
    openGraph: {
        title: "About Orbillo | Meet the Team",
        description:
            "Four co-founders. One mission. We help brands grow through design that works.",
        url: "https://www.orbillo.com/about/",
        siteName: "Orbillo",
        images: [
            {
                url: "/orbillo-og.avif",
                width: 1200,
                height: 630,
                alt: "Orbillo | Your Reliable Design Partner",
            },
        ],
        type: "website",
    },
    alternates: {
        canonical: "https://www.orbillo.com/about/",
    },
};

const Page = () => {
    return (
        <div>
            <Hero />
            <WhoWeAre />
            <div className='relative'><OurStory /></div>
            <OurVission />
            <OurPholosophy />
            <FeaturedClients />
            <div className='relative'><OurTeam /></div>
            <Feedback />
            <Partnership />
            <FAQsection />
        </div>
    );
};

export default Page;
