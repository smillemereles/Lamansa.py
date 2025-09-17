import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground">
            ¿Querés venir hoy?
          </h2>
          
          <p className="font-inter text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Esperamos poder compartir contigo la magia de La Mansa. 
            Cada taza, cada copa, cada momento es una invitación a disfrutar la vida.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.link/qgguzn"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-medium px-8 w-full"
              >
                Reservar Mesa
              </Button>
            </a>
            <a
              href="https://maps.app.goo.gl/i7fQnhJq5zHwAu9i9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-inter font-medium px-8 w-full"
              >
                Ver Ubicación
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;