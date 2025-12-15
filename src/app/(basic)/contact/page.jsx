import React from 'react';
import Hero from './components/Hero';
import Challanges from './components/Challanges';
import LetsTalk from './components/LetsTalk';
import NotSure from './components/NotSure';

const Contact = () => {
    return (
        <div>
            <Hero />
            <Challanges />
            <div className='relative'><LetsTalk /></div>
            <NotSure />
        </div>
    );
};

export default Contact;