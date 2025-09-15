import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import coffeeImage from "@/assets/coffee-specialty.jpg";
import pastriesImage from "@/assets/pastries-coffee.jpg";

const PopularItems = () => {
  const items = [
    {
      id: 1,
      name: "Cortado Mansa",
      price: "₲ 25.000",
      image: coffeeImage,
      description: "Nuestro cortado signature con leche de almendras",
      badges: ["Specialty", "Vegano"]
    },
    {
      id: 2,
      name: "Croissant de Almendras",
      price: "₲ 18.000", 
      image: pastriesImage,
      description: "Horneado diariamente con almendras locales",
      badges: ["Artesanal", "Fresh"]
    },
    {
      id: 3,
      name: "Espresso Doble",
      price: "₲ 22.000",
      image: coffeeImage,
      description: "Blend único de granos paraguayos e italianos",
      badges: ["Doble", "Intenso"]
    },
    {
      id: 4,
      name: "Tarta de Chocolate",
      price: "₲ 32.000",
      image: pastriesImage,
      description: "Chocolate 70% con infusión de yerba mate",
      badges: ["Signature", "Sin Gluten"]
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          >
            Descubrir menú completo
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularItems;