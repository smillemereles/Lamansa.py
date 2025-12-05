import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PopularItems from "@/components/PopularItems";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Hero />
      <About />
      <PopularItems />
      <Gallery />
      <CTA />
      {/* Línea divisoria decorativa */}
      <div className="bg-gradient-to-r from-transparent via-primary to-transparent h-0.5"></div>
      <Footer />
    </main>
  );
};

export default Index;
