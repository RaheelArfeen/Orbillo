import React from 'react';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import OurStory from './components/OurStory';
import OurVission from './components/OurVission';
import OurPholosophy from './components/OurPholosophy';
import FeaturedClients from './components/FeaturedClients';
import OurTeam from './components/OurTeam';
import Feedback from './components/Feedback';
import Partnership from './components/Partnership';
import FAQsection from './components/FAQsection';

export const metadata = {
    title: "About | Orbillo",
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
