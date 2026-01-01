'use client'

import React from 'react';
import Hero from './components/Hero';
import Challanges from './components/Challanges';
import LetsTalk from './components/LetsTalk';
import NotSure from './components/NotSure';
import { PageTitle } from 'react-simple-page-title';

const Contact = () => {
    return (
        <div>
            <PageTitle title='Contact | Orbillo' />
            <Hero />
            <Challanges />
            <div className='relative'><LetsTalk /></div>
            <NotSure />
        </div>
    );
};

export default Contact;