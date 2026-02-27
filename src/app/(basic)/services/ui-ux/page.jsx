
import React from 'react';
import Hero from './components/Hero';
import OurWork from '../components/OurWork';
import WorkProcess from '../components/WorkProcess';
import OurWrokMarque from '../components/OurWrokMarque';
import Feedback from '@/app/components/Feedback/Feedback';
import Counter from '../components/Counter';
import Pricing from './components/Pricing';
import FAQsection from '@/app/components/FAQsection';
import Partnership from '@/app/components/Partnership';
import CTAsection from '../components/CTAsection';
import WhatWeDo from '../components/WhatWeDo';

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
            <FAQsection />
        </div>
    );
};

export default page;