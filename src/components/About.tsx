import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import wineImage from "@/assets/wine-bar-interior.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src={wineImage}
                alt="Wine Bar La Mansa"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Sobre la casa
              </h2>
              
              <div className="space-y-4 font-inter text-muted-foreground leading-relaxed">
                <p>
                  En La Mansa fusionamos la calidez de la tradición paraguaya con la 
                  sofisticación italiana, creando un espacio único donde cada detalle 
                  está pensado para ofrecer experiencias sensoriales excepcionales.
                </p>
                
                <p>
                  Nuestros granos son cuidadosamente seleccionados y tostados artesanalmente, 
                  mientras que nuestros vinos propios reflejan el terroir paraguayo con 
                  técnicas europeas, creando maridajes perfectos que despiertan los sentidos.
                </p>
                
                <p>
                  Cada rincón de nuestro espacio está diseñado para ser un refugio urbano 
                  donde el tiempo se detiene y cada momento se convierte en una celebración 
                  de los pequeños placeres de la vida.
                </p>
              </div>
            </div>

            <Button 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Conocé nuestra historia
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;