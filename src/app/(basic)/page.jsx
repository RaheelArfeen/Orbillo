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
        <div className="bg-[#0e2412]">
            <HeroSection />

            <div className="relative z-10">
                <AboutUs />
            </div>

            <div className="relative z-0">
                <WhatWeDo />
            </div>

            <WhatWeDo2 />

            <div className="relative">
                <WhyUs />
            </div>

            <Feedback />
        </div>
    );
};

export default Home;
