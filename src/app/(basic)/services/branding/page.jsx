import React from 'react';
import WhatWeDo from './components/WhatWeDo';
import OurWork from './components/OurWork';
import WorkProcess from './components/WorkProcess';
import WhyUs from './components/WhyUs';
import OurWrokMarque from './components/OurWrokMarque';
import Feedback from './components/Feedback';
import Faq from './components/Faq';
import OurCollaboration from './components/OurCollaboration';
import Hero from './components/Hero';

const page = () => {
    return (
        <div>
            <Hero/>
            <WhatWeDo/>
            <OurWork/>
            <WorkProcess/>
            <WhyUs/>
            <OurWrokMarque/>
            <Feedback/>
            <Faq/>
            <OurCollaboration/>
        </div>
    );
};

export default page;