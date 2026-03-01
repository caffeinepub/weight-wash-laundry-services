import { Toaster } from "@/components/ui/sonner";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import MobileCallBar from "./components/MobileCallBar";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";
import Testimonials from "./components/Testimonials";
import WhatsAppFloat from "./components/WhatsAppFloat";
import WhyUsSection from "./components/WhyUsSection";

export default function App() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <Toaster position="top-center" richColors />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <HowItWorks />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileCallBar />
    </div>
  );
}
