
import React from 'react';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import OurWork from './components/OurWork';
import WorkProcess from './components/WorkProcess';
import OurWrokMarque from './components/OurWrokMarque';
import Feedback from './components/Feedback';
import Faq from './components/Faq';
import Partnership from './components/Partnership';
import Counter from './components/Counter';
import CTAsection from './components/CTAsection';
import Pricing from './components/Pricing';

export const metadata = {
    title: "UI/UX Design | Orbillo",
};

const page = () => {
    return (
        <div>
            <Hero />
            <WhatWeDo />
            <WorkProcess />
            <OurWork />
            <Partnership />
            <Counter />
            <CTAsection />
            <OurWrokMarque />
            <Feedback />
            <Pricing />
            <Faq />
        </div>
    );
};

export default page;