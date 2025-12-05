import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, Sparkles } from "lucide-react";
import Footer from "@/components/Footer";

const productos = [
  {
    id: 1,
    nombre: "Pan Dulce Artesanal",
    descripcion: "Pan dulce tradicional con frutas confitadas y nueces",
    precio: "60.000",
    imagen: "/pandulce.png",
  },
  {
    id: 2,
    nombre: "3 Cookies Navideñas",
    descripcion: "Selección de galletas decoradas con motivos navideños",
    precio: "15.000",
    imagen: "/cookienavidad.png",
  },
  {
    id: 3,
    nombre: "Budín Inglés",
    descripcion: "Budín tradicional con frutas secas y especias",
    precio: "42.000",
    imagen: "/bidiningles.png",
  },
  {
    id: 4,
    nombre: "Canasta Navideña Premium",
    descripcion: "Selección de productos navideños gourmet",
    precio: "300.000",
    imagen: "/canasta.png",
  },
    {
    id: 5,
    nombre:"Caja de 100 brigadeiros/surtidos",
    descripcion: "Deliciosos brigadeiros artesanales en caja premium",
    precio: "200.000",
    imagen: "/brigadeiros.png",
  },
   {
    id: 6,
    nombre:"Tabla de frios",
    descripcion: "Exquisita selección de quesos y embutidos para compartir",
    precio: "220.000",
    imagen: "/tabladefriosnavidad.png",
  },
  {
    id: 7,
    nombre: "Chocotone Artesanal",
    descripcion: "Pan dulce tradicional con frutas confitadas y nueces",
    precio: "60.000",
    imagen: "/chocotone.png",
  }
];

const NavidadEspecial = () => {
  const whatsappNumber = "595981234567"; // Reemplazar con el número real
  
  const handleWhatsAppOrder = (productName: string) => {
    const mensaje = `Hola! Me interesa el producto: ${productName}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  // Generar posiciones aleatorias para las luces navideñas
  const generateLights = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2,
      color: ['#FF0000', '#DC143C', '#FF6347', '#FF4500', '#FFD700', '#FFA500', '#FF69B4'][Math.floor(Math.random() * 7)]
    }));
  };

  const lights = generateLights(30);

  return (
    <main 
      className="min-h-screen relative"
      style={{
        backgroundImage: 'url(/fondonavidad (2).jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll'
      }}
    >
      {/* Luces navideñas brillantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
        {lights.map((light) => (
          <motion.div
            key={light.id}
            className="absolute w-6 h-6 rounded-full"
            style={{
              left: light.left,
              top: light.top,
              backgroundColor: light.color,
              boxShadow: `0 0 30px ${light.color}, 0 0 60px ${light.color}, 0 0 90px ${light.color}, 0 0 120px ${light.color}`,
            }}
            animate={{
              opacity: [0.6, 1, 0.6],
              scale: [1, 2.5, 1],
            }}
            transition={{
              duration: light.duration,
              repeat: Infinity,
              delay: light.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      
      {/* Contenido */}
      <div className="relative z-10">
        {/* Banner Navideño Sobrio */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/MESANAVIÑEÑA.JPG')] opacity-5 bg-cover bg-center"></div>
          
          {/* Elementos decorativos sutiles */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 right-10 w-32 h-32 border-2 border-primary rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 border-2 border-primary rounded-full"></div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto px-4 text-center relative z-10"
          >
            <div className="inline-block mb-4">
              <Sparkles className="h-6 w-6 text-primary mx-auto mb-2" />
            </div>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
              Colección Navideña
            </h1>
            <div className="w-24 h-0.5 bg-primary mx-auto mb-6"></div>
            <p className="font-inter text-lg md:text-xl text-primary font-semibold max-w-2xl mx-auto leading-relaxed">
              Celebrá las fiestas con nuestra selección exclusiva de productos artesanales. 
              Sabores únicos para momentos especiales.
            </p>
          </motion.div>
        </section>

      {/* Catálogo de Productos */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {productos.map((producto, index) => (
              <motion.div
                key={producto.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col bg-white border-gray-200 hover:border-primary/40 hover:shadow-xl transition-all duration-300 group">
                  <CardHeader className="p-0">
                    <div className="relative aspect-square overflow-hidden rounded-t-lg">
                      <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                        Navidad
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 p-5">
                    <CardTitle className="font-playfair text-xl mb-3 text-gray-800 group-hover:text-primary transition-colors duration-300">
                      {producto.nombre}
                    </CardTitle>
                    <CardDescription className="font-inter text-sm mb-4 text-gray-600 leading-relaxed">
                      {producto.descripcion}
                    </CardDescription>
                    <div className="flex items-baseline gap-1">
                      <span className="font-inter text-2xl font-bold text-primary">
                        Gs. {producto.precio}
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-5 pt-0">
                    <Button
                      onClick={() => handleWhatsAppOrder(producto.nombre)}
                      className="w-full bg-[#6e415d] hover:bg-[#331121] text-white font-inter font-medium transition-all hover:shadow-lg"
                    >
                      <svg
                        className="h-5 w-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      Consultar por WhatsApp
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Nota informativa elegante */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 bg-primary/90 border border-primary rounded-lg p-8 text-center shadow-lg backdrop-blur-sm"
          >
            <div className="max-w-3xl mx-auto">
              <Gift className="h-8 w-8 text-white mx-auto mb-4" />
              <h3 className="font-playfair text-2xl font-semibold text-white mb-3">
                Pedidos Especiales
              </h3>
              <p className="font-inter text-white/90 mb-2">
                Realizá tu pedido con anticipación. Productos disponibles en cantidades limitadas.
              </p>
              <p className="font-inter text-sm text-white/70">
                Para pedidos corporativos o grandes cantidades, contactanos directamente.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      </div>
    </main>
  );
};

export default NavidadEspecial;
