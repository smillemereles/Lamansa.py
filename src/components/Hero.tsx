import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="py-20 lg:py-32 relative"
      style={{
        backgroundImage: 'url("/DSC01990.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay para oscurecer la imagen y mejorar la legibilidad */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-white leading-tight">
                Tradición Paraguaya
                <span className="block text-primary text-white">Pasión Italiana</span>
                <span className="block text-white text-3xl lg:text-4xl">
                  Vinos Propios
                </span>
              </h1>

              <p className="font-inter text-lg text-white leading-relaxed max-w-lg">
               Donde cada comida cuenta una historia familiar y cada copa celebra nuestras raíces.
               Descubrí la magia de Paraguay e Italia en tu mesa, vinos La Mansa y experiencias que te
               harán sentir como en casa
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-medium"
                onClick={() => (window.location.href = "/menu-semanal")}
              >
                Ver Menú Semanal
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-inter font-medium"
                onClick={() => (window.location.href = "/cafeteria")}
              >
                Ver Cafetería
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;