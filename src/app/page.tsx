// src/app/page.tsx
import HeroSection from './sections/FirstSection';
import Navbar from './components/Navbar';
import MarriageAssessment from './sections/SecondSection';
import RelationshipFramework from './sections/ThirdSection';
import FreeResources from './sections/FourthSection';
import ServiceGrid from './sections/FifthSection';
import CommunityCTA from './sections/SixthSection';
import Footer from './sections/Footer';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />  {/* client component */}
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
