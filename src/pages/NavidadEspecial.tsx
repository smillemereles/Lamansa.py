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
    precio: "45.000",
    imagen: "/pastaplora.jpg",
  },
  {
    id: 2,
    nombre: "Turrón de Chocolate",
    descripcion: "Turrón premium con chocolate belga y almendras",
    precio: "38.000",
    imagen: "/chocolate.png",
  },
  {
    id: 3,
    nombre: "Cookies Navideñas",
    descripcion: "Assortment de cookies decoradas con motivos navideños",
    precio: "25.000",
    imagen: "/cookietradicional.png",
  },
  {
    id: 4,
    nombre: "Torta Navideña",
    descripcion: "Torta especial con frutos rojos y crema",
    precio: "85.000",
    imagen: "/tortadenaranja.jpg",
  },
  {
    id: 5,
    nombre: "Budín Inglés",
    descripcion: "Budín tradicional con frutas secas y especias",
    precio: "42.000",
    imagen: "/brownie.jpg",
  },
  {
    id: 6,
    nombre: "Alfajores de Navidad",
    descripcion: "Set de 12 alfajores decorados temática navideña",
    precio: "35.000",
    imagen: "/alfajordemaicena.jpg",
  },
  {
    id: 7,
    nombre: "Stollen Alemán",
    descripcion: "Pan navideño alemán con mazapán y frutas",
    precio: "48.000",
    imagen: "/pastaplora.jpg",
  },
  {
    id: 8,
    nombre: "Canasta Navideña Premium",
    descripcion: "Selección de productos navideños gourmet",
    precio: "120.000",
    imagen: "/tabladefrios.jpg",
  },
];

const NavidadEspecial = () => {
  const whatsappNumber = "595981234567"; // Reemplazar con el número real
  
  const handleWhatsAppOrder = (productName: string) => {
    const mensaje = `Hola! Me interesa el producto: ${productName}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen">
      {/* Banner Navideño */}
      <section className="relative bg-gradient-to-r from-primary via-[#C8A860] to-[#2D8659] py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-hero-menu.jpg')] opacity-10 bg-cover bg-center"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 text-center relative z-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="h-8 w-8 text-primary-foreground" />
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
              Especial de Navidad
            </h1>
            <Gift className="h-8 w-8 text-primary-foreground" />
          </div>
          <p className="font-inter text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Celebrá las fiestas con nuestros productos artesanales exclusivos. 
            Endulzá tu mesa navideña con sabores únicos y especiales.
          </p>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute top-4 left-4 text-6xl opacity-20">🎄</div>
        <div className="absolute bottom-4 right-4 text-6xl opacity-20">⭐</div>
        <div className="absolute top-1/2 left-1/4 text-4xl opacity-15">🎁</div>
        <div className="absolute top-1/3 right-1/4 text-4xl opacity-15">❄️</div>
      </section>

      {/* Catálogo de Productos */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {productos.map((producto, index) => (
              <motion.div
                key={producto.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col hover-lift border-border/50 hover:border-primary/30 transition-all">
                  <CardHeader className="p-0">
                    <div className="relative aspect-square overflow-hidden rounded-t-lg">
                      <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        🎅 Navidad
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 p-4">
                    <CardTitle className="font-playfair text-xl mb-2 text-foreground">
                      {producto.nombre}
                    </CardTitle>
                    <CardDescription className="font-inter text-sm mb-3 text-muted-foreground">
                      {producto.descripcion}
                    </CardDescription>
                    <div className="flex items-baseline gap-1">
                      <span className="font-inter text-2xl font-bold text-primary">
                        Gs. {producto.precio}
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button
                      onClick={() => handleWhatsAppOrder(producto.nombre)}
                      className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-inter font-semibold transition-all"
                    >
                      <svg
                        className="h-5 w-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      Pedidos al WhatsApp
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Nota informativa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 bg-secondary/30 border border-primary/20 rounded-lg p-6 text-center"
          >
            <p className="font-inter text-foreground/80">
              🎄 <strong>Pedidos especiales:</strong> Realizá tu pedido con anticipación. 
              Los productos navideños están disponibles en cantidades limitadas.
            </p>
            <p className="font-inter text-sm text-muted-foreground mt-2">
              Para pedidos corporativos o grandes cantidades, contactanos directamente por WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default NavidadEspecial;
