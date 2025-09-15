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
      <Footer />
    </main>
  );
};

export default Index;
