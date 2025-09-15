import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PopularItems from "@/components/PopularItems";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <PopularItems />
        <Gallery />
        <CTA />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
