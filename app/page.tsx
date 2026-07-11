import { About } from "@/components/About";
import { Certification } from "@/components/Certification";
import { Contact } from "@/components/Contact";
import { ContentSection } from "@/components/ContentSection";
import { FeaturedContentCard } from "@/components/FeaturedContentCard";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Photography } from "@/components/Photography";
import { Quote } from "@/components/Quote";
import { SocialLinks } from "@/components/SocialLinks";
import { Videography } from "@/components/Videography";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f4f4] text-[#222222]">
      <Navbar />
      <Hero />
      <About />
      <Quote />
      <SocialLinks />
      <Certification />
      <ContentSection />
      <FeaturedContentCard />
      <Photography />
      <Videography />
      <Contact />
      <Footer />
    </main>
  );
}
