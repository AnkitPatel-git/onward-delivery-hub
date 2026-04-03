
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import ServicesSection from "@/components/ServicesSection";
import PartnersSection from "@/components/PartnersSection";
import TrackingSection from "@/components/TrackingSection";

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroBanner />
        <ServicesSection />
        <PartnersSection />
        <TrackingSection />
        <MapSection />
        
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <LiveChat />
    </div>
  );
};

export default Index;
