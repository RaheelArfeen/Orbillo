"use client";
import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import WhyPeopleLoveUs from "../components/WhyPeopleLoveUs.jsx";
import OurServices from "../components/OurServices";
import OurWorks from "../components/OurWorks";
import WhyUs from "../components/WhyUs";
import Feedback from "../components/Feedback";
import Partnership from "../components/Partnership";
import FAQsection from "../components/FAQsection";

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
                <WhyPeopleLoveUs />
            </div>

            <div className="relative z-0">
                <OurServices />
            </div>

            <OurWorks />

            <div className="relative">
                <WhyUs />
            </div>

            <Feedback />
            <Partnership />
            <FAQsection />
        </div>
    );
};

export default Home;
