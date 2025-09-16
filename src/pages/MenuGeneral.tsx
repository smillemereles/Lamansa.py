import { motion } from "framer-motion";
import { Utensils, Leaf, Wheat, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const MenuGeneral = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const menuData = {
    picadas: [
      {
        nombre: "Picada La Mansa",
        descripcion: "Selección de quesos paraguayos, embutidos artesanales, aceitunas y frutos secos",
        precio: "85.000",
        etiquetas: ["vegetariano"]
      },
      {
        nombre: "Picada Italiana", 
        descripcion: "Prosciutto, salame, mozzarella, aceitunas y pan casero",
        precio: "95.000",
        etiquetas: []
      },
      {
        nombre: "Picada Mixta",
        descripcion: "Combinación de quesos nacionales e importados con embutidos premium",
        precio: "120.000",
        etiquetas: []
      }
    ],
    minutas: [
      {
        nombre: "Milanesa de Carne",
        descripcion: "Con guarnición a elección",
        guarniciones: ["Papas fritas", "Puré de papas", "Ensalada mixta", "Arroz"],
        precio: "48.000",
        etiquetas: []
      },
      {
        nombre: "Suprema de Pollo",
        descripcion: "Pechuga grillada con guarnición",
        guarniciones: ["Papas noisette", "Vegetales grillados", "Arroz con vegetales"],
        precio: "42.000",
        etiquetas: ["sin gluten"]
      },
      {
        nombre: "Bife de Chorizo", 
        descripcion: "Corte premium a la parrilla",
        guarniciones: ["Papas rústicas", "Ensalada criolla", "Mandioca dorada"],
        precio: "65.000",
        etiquetas: ["sin gluten"]
      }
    ],
    pastas: [
      {
        nombre: "Ñoquis de Papa",
        descripcion: "Caseros, con salsa a elección",
        salsas: ["Bolognesa", "Cuatro quesos", "Fileto", "Pesto", "Carbonara"],
        precio: "38.000",
        etiquetas: ["vegetariano"]
      },
      {
        nombre: "Ravioles de Ricota",
        descripcion: "Pasta fresca rellena",
        salsas: ["Salsa rosa", "Manteca y salvia", "Crema de hongos"],
        precio: "42.000",
        etiquetas: ["vegetariano"]
      },
      {
        nombre: "Tallarines",
        descripcion: "Pasta larga tradicional",
        salsas: ["Bolognesa", "Carbonara", "Alfredo", "Marinara"],
        precio: "35.000",
        etiquetas: ["vegetariano"]
      }
    ],
    carnes: [
      {
        nombre: "Asado de Tira",
        descripcion: "Corte tradicional paraguayo a la parrilla con chimichurri",
        precio: "58.000",
        etiquetas: ["sin gluten"]
      },
      {
        nombre: "Vacío",
        descripcion: "Corte jugoso con sal parrillera y acompañamientos",
        precio: "62.000",
        etiquetas: ["sin gluten"]
      },
      {
        nombre: "Surubí a la Plancha",
        descripcion: "Pescado del río con hierbas frescas",
        precio: "55.000",
        etiquetas: ["sin gluten"]
      },
      {
        nombre: "Costillas de Cerdo BBQ",
        descripcion: "Marinadas en salsa barbacoa casera",
        precio: "52.000",
        etiquetas: []
      }
    ],
    ensaladas: [
      {
        nombre: "Ensalada César",
        descripcion: "Lechuga romana, crutones, parmesano y aderezo césar",
        precio: "32.000",
        etiquetas: ["vegetariano"]
      },
      {
        nombre: "Ensalada Caprese",
        descripcion: "Tomate, mozzarella, albahaca y reducción de balsámico",
        precio: "35.000",
        etiquetas: ["vegetariano", "sin gluten"]
      },
      {
        nombre: "Ensalada de Quinoa",
        descripcion: "Quinoa, palta, tomates cherry, nueces y vinagreta de hierbas",
        precio: "38.000",
        etiquetas: ["vegano", "sin gluten"]
      },
      {
        nombre: "Ensalada Mediterránea",
        descripcion: "Mix de verdes, aceitunas, queso feta, tomates y aderezo mediterráneo",
        precio: "40.000",
        etiquetas: ["vegetariano", "sin gluten"]
      }
    ],
    pizzas: [
      {
        nombre: "Margherita",
        descripcion: "Salsa de tomate, mozzarella y albahaca fresca",
        precio: "60.000",
        etiquetas: ["vegetariano"]
      },
      {
        nombre: "Pepperoni",
        descripcion: "Salsa de tomate, mozzarella y pepperoni premium",
        precio: "60.000",
        etiquetas: []
      },
      {
        nombre: "Cuatro Quesos",
        descripcion: "Mozzarella, parmesano, gorgonzola y provolone",
        precio: "60.000",
        etiquetas: ["vegetariano"]
      },
      {
        nombre: "Paraguaya",
        descripcion: "Salsa de tomate, mozzarella, jamón del país y orégano",
        precio: "60.000",
        etiquetas: []
      },
      {
        nombre: "Vegetariana",
        descripcion: "Salsa de tomate, mozzarella, pimientos, cebolla y champiñones",
        precio: "60.000",
        etiquetas: ["vegetariano"]
      }
    ],
    postres: [
      {
        nombre: "Tiramisú",
        descripcion: "Clásico italiano con café y mascarpone",
        precio: "25.000",
        etiquetas: ["vegetariano"]
      },
      {
        nombre: "Flan Casero",
        descripcion: "Con dulce de leche y crema chantilly",
        precio: "18.000",
        etiquetas: ["vegetariano", "sin gluten"]
      },
      {
        nombre: "Brownie con Helado",
        descripcion: "Brownie tibio con helado de vainilla",
        precio: "22.000",
        etiquetas: ["vegetariano"]
      },
      {
        nombre: "Cheesecake de Frutos Rojos",
        descripcion: "Base de galleta con coulis de frutos del bosque",
        precio: "28.000",
        etiquetas: ["vegetariano"]
      }
    ]
  };

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

  const filteredItems = (items: any[]) => {
    if (!searchTerm) return items;
    return items.filter(item => 
      item.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const renderMenuCard = (item: any, showGuarniciones = false, showSalsas = false) => (
    <Card key={item.nombre} className="hover:shadow-lg transition-shadow duration-300 border-border">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="font-inter text-lg text-foreground">{item.nombre}</CardTitle>
          <span className="font-inter font-bold text-primary text-lg">₲ {item.precio}</span>
        </div>
        <CardDescription className="font-inter text-muted-foreground">
          {item.descripcion}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        {showGuarniciones && item.guarniciones && (
          <div className="mb-3">
            <p className="font-inter text-sm font-semibold text-foreground mb-2">Guarniciones disponibles:</p>
            <div className="flex flex-wrap gap-1">
              {item.guarniciones.map((guarnicion: string) => (
                <Badge key={guarnicion} variant="outline" className="text-xs">
                  {guarnicion}
                </Badge>
              ))}
            </div>
          </div>
        )}
        {showSalsas && item.salsas && (
          <div className="mb-3">
            <p className="font-inter text-sm font-semibold text-foreground mb-2">Salsas disponibles:</p>
            <div className="flex flex-wrap gap-1">
              {item.salsas.map((salsa: string) => (
                <Badge key={salsa} variant="outline" className="text-xs">
                  {salsa}
                </Badge>
              ))}
            </div>
          </div>
        )}
        {item.etiquetas && item.etiquetas.length > 0 && (
          <div className="flex gap-2 mt-3">
            {item.etiquetas.map((etiqueta: string) => (
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
      </CardContent>
    </Card>
  );

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
            Menú General
          </h1>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Descubrí nuestra carta completa con lo mejor de la cocina paraguaya e italiana. 
            Platos preparados con ingredientes frescos y el sabor auténtico que nos caracteriza.
          </p>

          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Buscar platos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
            />
          </div>
        </motion.div>

        <Tabs defaultValue="picadas" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 mb-8 bg-card">
            <TabsTrigger value="picadas" className="font-inter">Picadas</TabsTrigger>
            <TabsTrigger value="minutas" className="font-inter">Minutas</TabsTrigger>
            <TabsTrigger value="pastas" className="font-inter">Pastas</TabsTrigger>
            <TabsTrigger value="carnes" className="font-inter">Carnes</TabsTrigger>
            <TabsTrigger value="ensaladas" className="font-inter">Ensaladas</TabsTrigger>
            <TabsTrigger value="pizzas" className="font-inter">Pizzas</TabsTrigger>
            <TabsTrigger value="postres" className="font-inter">Postres</TabsTrigger>
          </TabsList>

          <TabsContent value="picadas">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems(menuData.picadas).map((item) => renderMenuCard(item))}
            </motion.div>
          </TabsContent>

          <TabsContent value="minutas">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems(menuData.minutas).map((item) => renderMenuCard(item, true))}
            </motion.div>
          </TabsContent>

          <TabsContent value="pastas">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems(menuData.pastas).map((item) => renderMenuCard(item, false, true))}
            </motion.div>
          </TabsContent>

          <TabsContent value="carnes">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems(menuData.carnes).map((item) => renderMenuCard(item))}
            </motion.div>
          </TabsContent>

          <TabsContent value="ensaladas">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems(menuData.ensaladas).map((item) => renderMenuCard(item))}
            </motion.div>
          </TabsContent>

          <TabsContent value="pizzas">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6 text-center">
                <Badge variant="outline" className="text-sm font-medium border-primary text-primary">
                  <Utensils className="h-3 w-3 mr-1" />
                  Solo tamaño grande - Todas a ₲ 60.000
                </Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems(menuData.pizzas).map((item) => renderMenuCard(item))}
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="postres">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems(menuData.postres).map((item) => renderMenuCard(item))}
            </motion.div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                ¿Te decidiste?
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
            </CardContent>
          </Card>
        </motion.div>

        <div className="mt-8 text-center">
          <p className="font-inter text-sm text-muted-foreground">
            * Los precios están sujetos a cambios sin previo aviso<br />
            * Disponibilidad sujeta a stock diario<br />
            * Todas las pizzas son tamaño grande
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuGeneral;