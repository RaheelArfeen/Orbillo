"use client";
import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import WhatWeDo from "../components/WhatWeDo";
import WhatWeDo2 from "../components/WhatWeDo2";
import WhyUs from "../components/WhyUs";
import Feedback from "../components/Feedback";

const Home = () => {

    useEffect(() => {
        const savedPosition = sessionStorage.getItem("scrollY");

        if (savedPosition) {
            window.scrollTo(0, parseInt(savedPosition));
        }

        const handleScroll = () => {
            sessionStorage.setItem("scrollY", window.scrollY.toString());
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <HeroSection />
            <div className='bg-white rounded-b-[80px] md:rounded-b-[150px]'><AboutUs /></div>
            <div className='relative'><WhatWeDo /></div>
            <WhatWeDo2 />
            <div className="relative"><WhyUs/></div>
            <Feedback/>
        </div>
    );
};

export default Home;
