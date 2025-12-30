"use client";

import Navbar from "./components/Navbar"; 
import HeroSection from "./sections/FirstSection";
import MarriageAssessment from "./sections/SecondSection";
import RelationshipFramework from "./sections/ThirdSection";
import FreeResources from "./sections/FourthSection";
import ServiceGrid from "./sections/FifthSection";
import CommunityCTA from "./sections/SixthSection";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#1A1612] font-sans">
      <Navbar />
      <HeroSection
        headline="Marriage Counselling That Works"
        subtext="Transform your relationship with evidence-based therapy tailored for lasting change."
        imageSrc="/TB_1.jfif"
      />
      <MarriageAssessment />
      <RelationshipFramework />
      <FreeResources />
      <ServiceGrid />
      <CommunityCTA />
      <Footer />
    </div>
  );
}
