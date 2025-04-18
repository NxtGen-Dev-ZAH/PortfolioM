import Navbar from "@/components/layout/Navbar";
import CircuitBackground from "@/components/layout/CircuitBackground";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      <CircuitBackground />
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
