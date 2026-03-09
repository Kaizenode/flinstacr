import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import MethodSection from "@/components/MethodSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WorkSection from "@/components/WorkSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <ProblemSection />
      <MethodSection />
      <AboutSection />
      <TestimonialsSection />
      <WorkSection />
      <CTASection />
      <Footer />
    </>
  );
}
