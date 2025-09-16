import { motion } from "framer-motion";
import { Heart, Award, Users, Coffee, Leaf, Globe } from "lucide-react";
import wineImage from "@/assets/wine-bar-interior.jpg";
import roastingImage from "@/assets/gallery-roasting.jpg";

const SobreNosotros = () => {
  const hitos = [
    {
      año: "2020",
      titulo: "Los inicios",
      descripcion: "Nace La Mansa con la visión de crear un espacio único donde confluyan la tradición paraguaya y la pasión italiana."
    },
    {
      año: "2021", 
      titulo: "",
      descripcion: "Lanzamos nuestros primeros granos de café de especialidad cultivados en Cordillera con técnicas sustentables."
    },
    {
      año: "2020",
      titulo: "Expansión gastronómica",
      descripcion: "Incorporamos nuestra cocina italiana con ingredientes locales, creando una fusión única de sabores."
    },
    {
      año: "2021",
      titulo: "Viñedos propios",
      descripcion: "Iniciamos la producción de vinos con cepas europeas adaptadas al terroir paraguayo."
    },
    {
      año: "2023",
      titulo: "Reconocimiento nacional",
      descripcion: "Fuimos galardonados como 'Mejor Experiencia Gastronómica' por la Cámara de Turismo de Paraguay."
    }
  ];

  const equipo = [
    {
      nombre: "María Diaz",
      rol: "Chef Ejecutiva",
      bio: "Con más de 15 años de experiencia en cocina internacional, lidera nuestro equipo culinario con creatividad y pasión.",
      imagen: "/maria.jpg"
    },
    {
      nombre: "Antonella Garrell", 
      rol: "Pasteleria & Panadería",
      bio: "Pasionada por la repostería artesanal, crea dulces y panes que son verdaderas obras de arte.",
      imagen: "/anto.jpg"
    },
    {
      nombre: "David Farinha",
      rol: "Sous Chef",
      bio: "Experto en cocina italiana, aporta autenticidad y técnica a nuestros platos principales.",
      imagen: "/david.jpg"
    },
    {
      nombre: "Gladys",
      rol: "Ayudante de Cocina",
      bio: "Especialista en vinos sudamericanos, creador de nuestros blends únicos",
      imagen: "/gladis.jpg"
    },
     {
      nombre: "Megi Dennis",
      rol: "Administrativa Contable",
      bio: "Especialista en vinos sudamericanos, creador de nuestros blends únicos",
      imagen: "/megi.jpg"
    },
      {
      nombre: "Juan Gavilan",
      rol: "Mozo Jefe",
      bio: "Especialista en vinos sudamericanos, creador de nuestros blends únicos",
      imagen: "/juan.jpg"
    }
  ];

  const testimonios = [
    {
      nombre: "Luca Cernuzzi",
      cita: "El ambiente es agradable y tiene una amplia selección de vinos de bodegas poco conocidas. También una buena variedad de quesos. El menú es bastante reducido a platos clásico de nuestra cocina pero la relación calidad-precio es muy buena",
      foto: "/api/placeholder/150/150"
    },
    {
      nombre: "Nacho Caramuti",
      cita: "Excelente lugar para pasar un buen rato mientras se come algo delicioso. Especialmente recomendados para los argentinos, amantes del buen vino, los fiambres y los quesos.",
      foto: "/api/placeholder/150/150"
    },
    {
      nombre: "Hudson adriano", 
      cita: "DELICIOSO Lindo Lugar para disfrutar un poco de la gastronomia Paraguaya. El Combo con las comidas del Paraguay salió muy bién , una perfecta recepción, los tragos Fortin muy sabrosos! recomiendo Todo",
      foto: "/api/placeholder/150/150"
    }
  ];

  const valores = [
    {
      icono: Leaf,
      titulo: "Sostenibilidad",
      descripcion: "Comprometidos con prácticas amigables con el medio ambiente y comercio justo con productores locales."
    },
    {
      icono: Heart,
      titulo: "Pasión",
      descripcion: "Cada producto es elaborado con amor y dedicación, buscando siempre la excelencia en cada detalle."
    },
    {
      icono: Globe,
      titulo: "Fusión Cultural",
      descripcion: "Celebramos la riqueza de unir tradiciones paraguayas con técnicas culinarias italianas."
    },
    {
      icono: Coffee,
      titulo: "Calidad Premium",
      descripcion: "Seleccionamos únicamente los mejores ingredientes y productos para garantizar una experiencia excepcional."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Nuestra
                <span className="block text-primary">Historia</span>
              </h1>
              
              <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                En La Mansa creemos que cada plato servido y cada copa compartida cuentan una historia. 
                Somos más que un restaurante; somos un puente entre la calidez paraguaya y la pasión italiana, 
                donde tradiciones y sabores se encuentran para crear experiencias gastronómicas únicas e inolvidables.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/DSC03046.jpg"
                  alt="Interior La Mansa"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filosofía */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Nuestra Filosofía
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => {
              const Icon = valor.icono;
              return (
                <motion.div
                  key={valor.titulo}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-3">
                    {valor.titulo}
                  </h3>
                  <p className="font-inter text-muted-foreground text-sm leading-relaxed">
                    {valor.descripcion}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Línea de Tiempo */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Nuestra Trayectoria
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
            
            {hitos.map((hito, index) => (
              <motion.div
                key={hito.año}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex items-start mb-12"
              >
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                <div className="ml-20 bg-card rounded-2xl p-6 shadow-lg border border-border">
                  <div className="flex items-center mb-3">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full font-inter font-bold text-sm">
                      {hito.año}
                    </span>
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-2">
                    {hito.titulo}
                  </h3>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    {hito.descripcion}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Nuestro Equipo
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
              Detrás de cada experiencia hay un equipo apasionado de profesionales 
              comprometidos con la excelencia y la innovación gastronómica.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipo.map((miembro, index) => (
              <motion.div
                key={miembro.nombre}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Imagen rectangular ocupando todo el ancho superior */}
                <div className="w-full h-[200px] overflow-hidden">
                  <img
                    src={miembro.imagen}
                    alt={miembro.nombre}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-1">
                    {miembro.nombre}
                  </h3>
                  <p className="font-inter text-primary font-medium mb-3">
                    {miembro.rol}
                  </p>
                  <p className="font-inter text-muted-foreground text-sm leading-relaxed">
                    {miembro.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Lo que dicen nuestros clientes
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonios.map((testimonio, index) => (
              <motion.div
                key={testimonio.nombre}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-lg border border-border"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/30 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-foreground">
                      {testimonio.nombre}
                    </h4>
                  </div>
                </div>
                <p className="font-inter text-muted-foreground leading-relaxed italic">
                  "{testimonio.cita}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/DSC01990.jpg"
                  alt="Proceso de tostado"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-foreground">
                De la tierra a tu mesa
              </h2>
              
              <div className="space-y-4 font-inter text-muted-foreground leading-relaxed">
                <p>
                  Trabajamos directamente con productores locales de Alto Paraná y la región, 
                 seleccionando únicamente ingredientes frescos que cumplen con nuestros estándares de 
                 calidad y tradición culinaria.
                </p>
                
                <p>
                  Nuestro proceso de preparación artesanal respeta las recetas tradicionales paraguayas 
                  e italianas, desarrollando sabores y aromas que expresan la personalidad de 
                 ambas culturas con técnicas refinadas.
                </p>
                
                <p>
                  Cada plato que servimos es el resultado de un cuidadoso proceso que va 
                 desde la selección de ingredientes hasta la presentación final, 
                 garantizando una experiencia gastronómica excepcional en Ciudad del Este.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreNosotros;