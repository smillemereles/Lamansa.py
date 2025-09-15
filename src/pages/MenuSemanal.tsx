import { motion } from "framer-motion";
import { Clock, Download, Leaf, Wheat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const MenuSemanal = () => {
  const menuSemanal = [
    {
      dia: "Lunes",
      fecha: "Enero 15",
      comidas: [
        {
          nombre: "Risotto de hongos paraguayos",
          descripcion: "Con queso paraguayo y hierbas frescas",
          precio: "45.000",
          etiquetas: ["vegetariano"]
        },
        {
          nombre: "Merluza a la plancha",
          descripcion: "Con vegetales de estación y salsa de limón",
          precio: "52.000",
          etiquetas: ["sin gluten"]
        }
      ]
    },
    {
      dia: "Martes",
      fecha: "Enero 16", 
      comidas: [
        {
          nombre: "Pasta fresca con ragú de cordero",
          descripcion: "Salsa de tomate casera y albahaca",
          precio: "48.000",
          etiquetas: []
        },
        {
          nombre: "Ensalada de quinoa y palta",
          descripcion: "Con nueces, tomates cherry y vinagreta de hierbas",
          precio: "38.000",
          etiquetas: ["vegano", "sin gluten"]
        }
      ]
    },
    {
      dia: "Miércoles", 
      fecha: "Enero 17",
      comidas: [
        {
          nombre: "Salmón grillado",
          descripcion: "Con puré de batata y espárragos",
          precio: "55.000",
          etiquetas: ["sin gluten"]
        },
        {
          nombre: "Ravioles de ricota y espinaca",
          descripcion: "Con salsa de manteca y salvia",
          precio: "42.000",
          etiquetas: ["vegetariano"]
        }
      ]
    },
    {
      dia: "Jueves",
      fecha: "Enero 18",
      comidas: [
        {
          nombre: "Pollo al limón con hierbas",
          descripcion: "Acompañado de arroz salvaje y vegetales",
          precio: "46.000",
          etiquetas: ["sin gluten"]
        },
        {
          nombre: "Bowl mediterráneo",
          descripcion: "Hummus, quinoa, vegetales asados y tahini",
          precio: "40.000",
          etiquetas: ["vegano", "sin gluten"]
        }
      ]
    },
    {
      dia: "Viernes",
      fecha: "Enero 19",
      comidas: [
        {
          nombre: "Ñoquis de papa con pesto",
          descripcion: "Pesto casero de albahaca y piñones",
          precio: "44.000",
          etiquetas: ["vegetariano"]
        },
        {
          nombre: "Pacu a la parrilla",
          descripcion: "Con mandioca dorada y chimichurri",
          precio: "58.000",
          etiquetas: ["sin gluten"]
        }
      ]
    },
    {
      dia: "Sábado",
      fecha: "Enero 20",
      comidas: [
        {
          nombre: "Costillas de cerdo BBQ",
          descripcion: "Con papas rústicas y coleslaw",
          precio: "62.000",
          etiquetas: []
        },
        {
          nombre: "Curry de vegetales",
          descripción: "Con arroz basmati y naan casero",
          precio: "41.000",
          etiquetas: ["vegano"]
        }
      ]
    },
    {
      dia: "Domingo",
      fecha: "Enero 21",
      comidas: [
        {
          nombre: "Asado tradicional paraguayo",
          descripcion: "Con mandioca, sopa paraguaya y ensalada",
          precio: "65.000",
          etiquetas: []
        },
        {
          nombre: "Tortilla de verduras",
          descripcion: "Con queso de cabra y salsa verde",
          precio: "39.000",
          etiquetas: ["vegetariano", "sin gluten"]
        }
      ]
    }
  ];

  const getEtiquetaColor = (etiqueta: string) => {
    switch (etiqueta) {
      case "vegano":
        return "bg-green-100 text-green-800 border-green-200";
      case "vegetariano":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "sin gluten":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getEtiquetaIcon = (etiqueta: string) => {
    switch (etiqueta) {
      case "vegano":
      case "vegetariano":
        return <Leaf className="h-3 w-3" />;
      case "sin gluten":
        return <Wheat className="h-3 w-3" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Menú Semanal
          </h1>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Cada semana preparamos con amor nuevas opciones inspiradas en lo mejor 
            de la cocina paraguaya e italiana, usando ingredientes frescos y de temporada.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Vigencia: 15 - 21 Enero 2024</span>
            </div>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Download className="h-4 w-4 mr-2" />
              Descargar PDF
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuSemanal.map((dia, index) => (
            <motion.div
              key={dia.dia}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-primary text-primary-foreground p-4">
                <h3 className="font-playfair text-xl font-bold">{dia.dia}</h3>
                <p className="font-inter text-sm opacity-90">{dia.fecha}</p>
              </div>
              
              <div className="p-6 space-y-4">
                {dia.comidas.map((comida, comidaIndex) => (
                  <div key={comidaIndex} className="space-y-2">
                    <h4 className="font-inter font-semibold text-foreground text-base">
                      {comida.nombre}
                    </h4>
                    <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                      {comida.descripcion}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <span className="font-inter font-bold text-primary text-lg">
                        ₲ {comida.precio}
                      </span>
                      
                      {comida.etiquetas.length > 0 && (
                        <div className="flex gap-1">
                          {comida.etiquetas.map((etiqueta) => (
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
                    
                    {comidaIndex < dia.comidas.length - 1 && (
                      <div className="border-b border-border pt-2"></div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
              ¿Te gustó algo?
            </h3>
            <p className="font-inter text-muted-foreground mb-6">
              Hacé tu pedido por WhatsApp y te lo preparamos para llevar o delivery
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-medium"
            >
              Pedir por WhatsApp
            </Button>
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <p className="font-inter text-sm text-muted-foreground">
            * Los precios están sujetos a cambios sin previo aviso<br />
            * Disponibilidad sujeta a stock diario
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuSemanal;