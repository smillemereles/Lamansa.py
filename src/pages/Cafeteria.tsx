import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Heart, Snowflake, Leaf, Wheat, UtensilsCrossed, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Cafeteria = () => {
  const [selectedCategory, setSelectedCategory] = useState("cafe");

  const categories = [
  { id: "cafe",    name: "Café caliente", icon: Coffee },
  { id: "frios",   name: "Fríos",          icon: Snowflake },
  { id: "postres", name: "Postres",        icon: UtensilsCrossed },
  { id: "salados", name: "Salados",        icon: UtensilsCrossed },
  ];

  type Producto = {
    nombre: string;
    descripcion?: string;
    precio: string;
    imagen: string;
    etiquetas: string[];
  };

 const productos: Record<string, Producto[]> = {
  cafe: [
    { nombre: "Americano",       descripcion: "Café filtrado intenso.",                  precio: "—", imagen: "/tazadecafé.png", etiquetas: [] },
    { nombre: "Café corto",      descripcion: "Shot concentrado y aromático.",           precio: "—", imagen: "/cafécorto.png", etiquetas: [] },
    { nombre: "Espresso longo",  descripcion: "Espresso más largo, sabor balanceado.",   precio: "—", imagen: "/espresso.png", etiquetas: [] },
    { nombre: "Mocaccino",       descripcion: "Espresso, leche y chocolate.",            precio: "—", imagen: "/moccaccino.png", etiquetas: ["vegetariano"] },
    { nombre: "Chocolate",       descripcion: "Bebida caliente de cacao.",               precio: "—", imagen: "/chocolate.png", etiquetas: ["vegetariano"] },
  ],

  frios: [
    { nombre: "Agua",             descripcion: "Agua mineral fría.",                      precio: "—", imagen: "/aguamineral.jpg", etiquetas: ["vegano", "sin gluten", "sin lactosa"] },
    { nombre: "Refresco",         descripcion: "Bebida gaseosa bien fría.",               precio: "—", imagen: "/coca-cola-pet-500ml.jpg", etiquetas: ["vegano", "sin gluten"] },
    { nombre: "Jugos naturales",  descripcion: "Frutas exprimidas al momento.",           precio: "—", imagen: "/jugos.jpg", etiquetas: ["vegano", "sin gluten"] },
  ],

  postres: [
    { nombre: "Alfajor de maicena",   descripcion: "Clásico con dulce de leche y coco.",  precio: "—", imagen: "/alfajordemaicena.jpg", etiquetas: ["vegetariano"] },
    { nombre: "Alfajor chocolate",   descripcion: "Baño de chocolate, relleno cremoso.",  precio: "—", imagen: "/alfajorbanhadoenchocolate.jpg", etiquetas: ["vegetariano"] },
    { nombre: "Tarta toffi",         descripcion: "Caramelo toffee y base crocante.",     precio: "—", imagen: "/toffi.png", etiquetas: ["vegetariano"] },
    { nombre: "Pepas",               descripcion: "Galletas con corazón de dulce.",       precio: "—", imagen: "/pepas.png", etiquetas: ["vegetariano"] },
    { nombre: "Pasta frola",         descripcion: "Clásica de membrillo.",                precio: "—", imagen: "/pastaplora.jpg", etiquetas: ["vegetariano"] },
    { nombre: "Brownie de chocolate",descripcion: "Bien húmedo, intenso en cacao.",       precio: "—", imagen: "/brownie.jpg", etiquetas: ["vegetariano"] },
    { nombre: "Cookie tradicional",  descripcion: "Galleta grande y mantequillosa.",      precio: "—", imagen: "/cookietradicional.png", etiquetas: ["vegetariano"] },
    { nombre: "Cookie red velvet",   descripcion: "Suave, con notas de cacao.",           precio: "—", imagen: "/redvelvet.png", etiquetas: ["vegetariano"] },
    { nombre: "Tarta de coco",       descripcion: "Rellena y aromática.",                 precio: "—", imagen: "/tartadecoco.png", etiquetas: ["vegetariano"] },
    { nombre: "Alfajor de coco",     descripcion: "Dulce y suave.",                       precio: "—", imagen: "/alfajordecoco.png", etiquetas: ["vegetariano"] },
    { nombre: "Torta de naranja",    descripcion: "Esponjosa y cítrica.",                 precio: "—", imagen: "/tortadenaranja.jpg", etiquetas: ["vegetariano"] },
    { nombre: "Torta marmolada",     descripcion: "Vainilla y chocolate en espiral.",     precio: "—", imagen: "/tortamarmolada.png", etiquetas: ["vegetariano"] },
  ],

  salados: [
    { nombre: "Empanadas (carne, pollo, choclo, jamón y queso)", descripcion: "Fritas o al horno.", precio: "—", imagen: "/empanadas.jpg", etiquetas: [] },
    { nombre: "Mbejú",             descripcion: "Clásico paraguayo de almidón y queso.",  precio: "—", imagen: "/mbeju.png", etiquetas: ["sin gluten"] },
    { nombre: "Chipitas",          descripcion: "Bocaditos de queso para picar.",         precio: "—", imagen: "/chipa.png", etiquetas: ["sin gluten"] },
    { nombre: "Sopa paraguaya",    descripcion: "Torta salada de maíz y queso.",          precio: "—", imagen: "/", etiquetas: ["vegetariano"] },
    { nombre: "Pajagua Mascada",   descripcion: "Tradición paraguaya a base de carne.",   precio: "—", imagen: "/", etiquetas: [] },
  ],
};

  const getEtiquetaColor = (etiqueta: string) => {
    switch (etiqueta) {
      case "vegetariano":
        return "bg-green-100 text-green-800 border-green-200";
      case "vegano":
        return "bg-green-100 text-green-800 border-green-200";
      case "sin gluten":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "sin lactosa":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "specialty":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "sin cafeína":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  const getEtiquetaIcon = (etiqueta: string) => {
    switch (etiqueta) {
      case "vegetariano":
      case "vegano":
        return <Leaf className="h-3 w-3" />;
      case "sin gluten":
        return <Wheat className="h-3 w-3" />;
      default:
        return null;
    }
  };

  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: 'url(/fonfocafeteria.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll'
      }}
    >
      {/* Contenido */}
      <div className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Cafetería
          </h1>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Desde cafés de especialidad hasta opciones saladas, cada producto está 
            cuidadosamente seleccionado para ofrecerte la mejor experiencia gastronómica.
          </p>
        </motion.div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid grid-cols-2 lg:grid-cols-6 mb-8 h-auto p-1 bg-secondary/30">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-inter font-medium py-3 px-2 text-sm lg:text-base"
                >
                  <Icon className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {productos[category.id as keyof typeof productos]?.map((producto, index) => (
                  <motion.div
                    key={producto.nombre}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Imagen del producto */}
                    <div className="w-full h-48 overflow-hidden">
                      <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-inter font-bold text-foreground text-lg">
                          {producto.nombre}
                        </h3>
                        <span className="font-inter font-bold text-primary text-lg">
                          ₲ {producto.precio}
                        </span>
                      </div>
                      <p className="font-inter text-muted-foreground text-sm mb-4 leading-relaxed">
                        {producto.descripcion}
                      </p>
                      {producto.etiquetas && producto.etiquetas.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {producto.etiquetas.map((etiqueta) => (
                            <Badge
                              key={etiqueta}
                              variant="outline"
                              className={`text-xs font-medium ${getEtiquetaColor(etiqueta)}`}
                            >
                              <span className="flex items-center gap-1">
                                {getEtiquetaIcon(etiqueta)}
                                {etiqueta}
                              </span>
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
              ¿Necesitás ayuda con tu pedido?
            </h3>
            <p className="font-inter text-muted-foreground mb-6">
              Nuestro equipo está listo para asesorarte y preparar tu pedido perfecto
            </p>
            <a
              href="https://wa.link/qgguzn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full"
            >
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-medium w-full"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Contactar por WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  );
};

export default Cafeteria;