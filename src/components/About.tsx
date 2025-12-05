import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom"; // 👈 importamos el hook

const About = () => {
  const navigate = useNavigate(); // 👈 inicializamos

  return (
    <section 
      id="about" 
      className="py-20 relative"
      style={{
        backgroundImage: 'url("/fondo3.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll"
      }}
    >
      {/* Overlay suave para mejor legibilidad */}
      <div className="absolute inset-0 bg-white/30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                src="/DSC03046.jpg"
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
                 En La Mansa PY fusionamos la calidez de la tradición paraguaya con la 
                 sofisticación italiana, creando un espacio único donde cada detalle 
                 está pensado para ofrecer experiencias gastronómicas excepcionales.
                </p>
                
                <p>
                 Nuestros ingredientes son cuidadosamente seleccionados y preparados artesanalmente, 
                  mientras que con nuestros vinos crean maridajes perfectos que despiertan los sentidos.
                </p>
                
                <p>
                  Cada rincón de nuestro restaurante está diseñado para ser un refugio gastronómico 
                  donde el tiempo se detiene y cada comida se convierte en una celebración 
                  de los sabores auténticos y los momentos compartidos.
                </p>
              </div>
            </div>

            {/* Botón con navegación */}
            <Button 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => navigate("/sobre-nosotros")}
            >
              Conocé nuestra historia
            </Button>
          </motion.div>
        </div>
      </div>
      {/* Cierre del overlay y section */}
    </section>
  );
};

export default About;
