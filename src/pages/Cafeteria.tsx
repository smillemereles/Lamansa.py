import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Heart, Snowflake, Leaf, Wheat, UtensilsCrossed, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Cafeteria = () => {
  const [selectedCategory, setSelectedCategory] = useState("autor");

  const categories = [
    { id: "autor", name: "Café de autor", icon: Heart },
    { id: "clasicos", name: "Clásicos", icon: Coffee },
    { id: "frios", name: "Fríos", icon: Snowflake },
    { id: "te", name: "Té/Infusiones", icon: Leaf },
    { id: "pasteleria", name: "Pastelería", icon: UtensilsCrossed },
    { id: "salado", name: "Salado", icon: UtensilsCrossed }
  ];

  type Producto = {
    nombre: string;
    descripcion?: string;
    precio: string;
    imagen: string;
    etiquetas: string[];
    origen?: string;
    notas?: string;
    molienda?: string;
    maridaje?: string;
  };

  const productos: Record<string, Producto[]> = {
    autor: [
      {
        nombre: "Café de Autor 1",
        descripcion: "Un café de autor excepcional con notas frutales.",
        precio: "25.000",
        imagen: "/images/cafe-autor-1.jpg",
        etiquetas: ["vegetariano", "specialty"],
        origen: "Colombia",
        notas: "Frutas rojas, caramelo",
        molienda: "Media",
        maridaje: "Ideal con postres",
      },
      {
        nombre: "Café de Autor 2",
        descripcion: "Café de autor con un perfil de sabor único.",
        precio: "30.000",
        imagen: "/images/cafe-autor-2.jpg",
        etiquetas: ["vegano", "sin gluten"],
        origen: "Etiopía",
        notas: "Cítricos, flores",
        molienda: "Fina",
        maridaje: "Excelente solo o con chocolate",
      },
    ],
    clasicos: [
      {
        nombre: "Espresso Clásico",
        descripcion: "Un espresso intenso y aromático.",
        precio: "15.000",
        imagen: "/images/espresso-clasico.jpg",
        etiquetas: ["sin lactosa"],
      },
      {
        nombre: "Cappuccino Clásico",
        descripcion: "Café expreso con leche vaporizada y espuma de leche.",
        precio: "18.000",
        imagen: "/images/cappuccino-clasico.jpg",
        etiquetas: ["vegetariano"],
      },
    ],
    frios: [
      {
        nombre: "Café Helado",
        descripcion: "Café frío con hielo, perfecto para refrescarse.",
        precio: "20.000",
        imagen: "/images/cafe-helado.jpg",
        etiquetas: ["sin lactosa", "vegano"],
      },
      {
        nombre: "Té Frío de Frutas",
        descripcion: "Té frío infusionado con frutas frescas.",
        precio: "22.000",
        imagen: "/images/te-frio-frutas.jpg",
        etiquetas: ["vegetariano", "sin gluten"],
      },
    ],
    te: [
      {
        nombre: "Té Verde",
        descripcion: "Té verde japonés de alta calidad.",
        precio: "10.000",
        imagen: "/images/te-verde.jpg",
        etiquetas: ["vegano", "sin gluten"],
      },
      {
        nombre: "Té Negro",
        descripcion: "Té negro de Assam, India.",
        precio: "12.000",
        imagen: "/images/te-negro.jpg",
        etiquetas: ["vegetariano"],
      },
    ],
    pasteleria: [
      {
        nombre: "Tarta de Queso",
        descripcion: "Deliciosa tarta de queso con base de galleta.",
        precio: "35.000",
        imagen: "/images/tarta-queso.jpg",
        etiquetas: ["vegetariano"],
      },
      {
        nombre: "Brownie de Chocolate",
        descripcion: "Brownie denso y fudgy con nueces.",
        precio: "30.000",
        imagen: "/images/brownie-chocolate.jpg",
        etiquetas: ["sin gluten"],
      },
    ],
    salado: [
      {
        nombre: "Quiche de Espinaca",
        descripcion: "Quiche cremosa de espinaca y queso.",
        precio: "28.000",
        imagen: "/images/quiche-espinaca.jpg",
        etiquetas: ["vegetariano"],
      },
      {
        nombre: "Empanada de Carne",
        descripcion: "Empanada rellena de carne vacuna y especias.",
        precio: "25.000",
        imagen: "/images/empanada-carne.jpg",
        etiquetas: ["sin lactosa"],
      },
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
    <div className="min-h-screen bg-background">
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
                    <div className="aspect-square overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/20 flex items-center justify-center">
                        <Coffee className="h-16 w-16 text-primary/30" />
                      </div>
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

                      <div className="flex gap-2">
                        {producto.origen && (
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm" className="flex-1 text-xs">
                                Ver detalles
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-md">
                              <DialogHeader>
                                <DialogTitle className="font-playfair text-xl">
                                  {producto.nombre}
                                </DialogTitle>
                              </DialogHeader>
                              <div className="space-y-4">
                                <p className="font-inter text-muted-foreground">
                                  {producto.descripcion}
                                </p>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                  <div>
                                    <h4 className="font-semibold text-foreground">Origen:</h4>
                                    <p className="text-muted-foreground">{producto.origen}</p>
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-foreground">Notas:</h4>
                                    <p className="text-muted-foreground">{producto.notas}</p>
                                  </div>
                                  {producto.molienda && (
                                    <div>
                                      <h4 className="font-semibold text-foreground">Molienda:</h4>
                                      <p className="text-muted-foreground">{producto.molienda}</p>
                                    </div>
                                  )}
                                  <div>
                                    <h4 className="font-semibold text-foreground">Maridaje:</h4>
                                    <p className="text-muted-foreground">{producto.maridaje}</p>
                                  </div>
                                </div>
                                <div className="pt-4 border-t">
                                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                                    <MessageCircle className="h-4 w-4 mr-2" />
                                    Pedir por WhatsApp
                                  </Button>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        )}
                        
                        <Button 
                          size="sm" 
                          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground text-xs"
                        >
                          <MessageCircle className="h-3 w-3 mr-1" />
                          Pedir
                        </Button>
                      </div>
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
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-medium"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Contactar por WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cafeteria;