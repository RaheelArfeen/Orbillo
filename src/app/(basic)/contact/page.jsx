import React from 'react';
import Hero from './components/Hero';
import Challanges from './components/Challanges';
import LetsTalk from './components/LetsTalk';
import NotSure from './components/NotSure';

export const metadata = {
    title: "Contact | Orbillo",
};

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