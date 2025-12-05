import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import coffeeImage from "@/assets/coffee-specialty.jpg";
import pastriesImage from "@/assets/pastries-coffee.jpg";
import { useNavigate } from "react-router-dom";

const PopularItems = () => {
  const navigate = useNavigate();

  const items = [
    {
      id: 1,
      name: "Tabla de fríos y quesos",
      price: "₲ 150.000",
      image: "/tabladefrios.jpg",
      description: "Selección de embutidos y quesos artesanales",
      badges: ["Specialty", "Fresh"]
    },
    {
      id: 2,
      name: "Ñoquis salsa blanca",
      price: "₲ 40.000", 
      image: "/nhoquissalsablanca.jpg",
      description: "Nhoquis caseros con salsa de crema y parmesano",
      badges: ["Artesanal", "Con Gluten"]
    },
    {
      id: 3,
      name: "Ravioles salsa boloñesa",
      price: "₲ 40.000",
      image: "/carpeta para la galeria de fotos/ravioleslabolonhesa.jpg",
      description: "Ravioles rellenos de carne con salsa de tomate casera",
      badges: ["Sabroso", "Con Gluten"]
    },
    {
      id: 4,
      name: "Fideos al pesto",
      price: "₲ 40.000",
      image: "/fideo al pesto .jpg",
      description: "Pasta fresca con salsa de albahaca, ajo y piñones",
      badges: ["Signature", "Con Gluten"]
    }
  ];

  return (
    <section 
      className="py-20 relative"
      style={{
        backgroundImage: 'url("/fondo2.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll"
      }}
    >
      {/* Overlay suave para mejor legibilidad */}
      <div className="absolute inset-0 bg-white/30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Populares de la Semana
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubrí nuestras creaciones más queridas, preparadas con ingredientes 
            de primera calidad y mucho amor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.badges.map((badge, badgeIndex) => (
                      <Badge 
                        key={badgeIndex} 
                        variant="secondary" 
                        className="text-xs bg-secondary text-primary"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                    {item.name}
                  </h3>
                  
                  <p className="font-inter text-sm text-muted-foreground mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-inter text-lg font-semibold text-primary">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => navigate("/menu-general")}
          >
            Descubrir menú completo
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularItems;