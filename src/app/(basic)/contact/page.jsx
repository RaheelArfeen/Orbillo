import React from 'react';
import Hero from './components/Hero';
import Challanges from './components/Challanges';
import LetsTalk from './components/LetsTalk';
import NotSure from './components/NotSure';

export const metadata = {
    metadataBase: new URL("https://www.orbillo.com"),
    title: "Contact Orbillo | Start Your Project - Book a Free Discovery Call",
    description:
        "Ready to start your project? Get in touch with the Orbillo team - we respond within 24 hours. Book a discovery call or chat with us on WhatsApp.",
    keywords: [
        "contact Orbillo",
        "hire design agency",
        "book discovery call",
        "digital agency contact",
        "start a project"
    ],
    openGraph: {
        title: "Contact Orbillo | Start Your Project Today",
        description:
            "Tell us about your project and our team will get back to you within 24 hours.",
        url: "https://www.orbillo.com/contact/",
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
        canonical: "https://www.orbillo.com/contact/",
    },
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