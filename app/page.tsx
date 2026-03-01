import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import BrandsStrip from "@/components/sections/BrandsStrip";
import AboutSection from "@/components/sections/AboutSection";
import CEOSection from "@/components/sections/CEOSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CollectionSection from "@/components/sections/CollectionSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <BrandsStrip />
      <AboutSection />
      <CEOSection />
      <FeaturesSection />
      <CollectionSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
