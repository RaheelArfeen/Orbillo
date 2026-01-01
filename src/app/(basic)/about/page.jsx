import React from 'react';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import OurStory from './components/OurStory';
import OurTeam from './components/OurTeam';
import OurPholosophy from './components/OurPholosophy';
import FeaturedClients from './components/FeaturedClients';
import OurTeam2 from './components/OurTeam2';
import OurCollaboration from './components/OurCollaboration';

export const metadata = {
  title: "About | Orbillo",
};

const Page = () => {
    return (
        <div>
            <Hero />
            <WhoWeAre />
            <div className='relative'><OurStory /></div>
            <OurTeam />
            <OurPholosophy />
            <FeaturedClients />
            <div className='relative'><OurTeam2 /></div>
            <OurCollaboration />
        </div>
    );
};

export default Page;
