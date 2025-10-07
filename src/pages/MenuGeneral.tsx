import { motion } from "framer-motion";
import { Utensils, Leaf, Wheat, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import bgHeroMenu from "/bg-hero-menu.jpg"; // Asegúrate de tener esta imagen en /public
import { useNavigate } from "react-router-dom";
const MenuGeneral = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("picadas");

  const menuData = {
    minutas: [
      {
        nombre: "Milanesa de Carne",
        descripcion: "Con guarnición a elección",
        guarniciones: ["Arroz pilaf", "Arroz y queso", "Puré de papa", "Papas fritas", "Papas rústicas"],
        precio: "40.000",
        etiquetas: []
      },
      {
        nombre: "Milanesa de Carne a la Napolitana",
        descripcion: "Milanesa con salsa de tomate, jamón y queso, con guarnición a elección",
        guarniciones: ["Arroz pilaf", "Arroz y queso", "Puré de papa", "Papas fritas", "Papas rústicas"],
        precio: "45.000",
        etiquetas: []
      },
      {
        nombre: "Milanesa de Pollo",
        descripcion: "Con guarnición a elección",
        guarniciones: ["Arroz pilaf", "Arroz y queso", "Puré de papa", "Papas fritas", "Papas rústicas"],
        precio: "35.000",
        etiquetas: []
      },
      {
        nombre: "Milanesa de Tilapia",
        descripcion: "Pescado empanado con guarnición a elección",
        guarniciones: ["Arroz pilaf", "Arroz y queso", "Puré de papa", "Papas fritas", "Papas rústicas"],
        precio: "45.000",
        etiquetas: []
      },
      {
        nombre: "Grille de Tilapia",
        descripcion: "Pescado a la plancha con guarnición a elección",
        guarniciones: ["Arroz pilaf", "Arroz y queso", "Puré de papa", "Papas fritas", "Papas rústicas"],
        precio: "45.000",
        etiquetas: ["sin gluten"]
      },
      {
        nombre: "Bife con Huevo",
        descripcion: "Bife a la plancha con huevo frito y guarnición a elección",
        guarniciones: ["Arroz pilaf", "Arroz y queso", "Puré de papa", "Papas fritas", "Papas rústicas"],
        precio: "46.000",
        etiquetas: ["sin gluten"]
      },
      {
        nombre: "Bife Acebollado",
        descripcion: "Bife con cebolla salteada y guarnición a elección",
        guarniciones: ["Arroz pilaf", "Arroz y queso", "Puré de papa", "Papas fritas", "Papas rústicas"],
        precio: "46.000",
        etiquetas: ["sin gluten"]
      },
      {
        nombre: "Grille de Pollo",
        descripcion: "Pechuga de pollo a la plancha con guarnición a elección",
        guarniciones: ["Arroz pilaf", "Arroz y queso", "Puré de papa", "Papas fritas", "Papas rústicas"],
        precio: "35.000",
        etiquetas: ["sin gluten"]
      }
    ],
    pastas: [
      {
        nombre: "Fettuccini",
        descripcion: "Pasta fresca con salsa a elección",
        salsas: ["Cuatro quesos", "Pomodoro", "Pesto", "Salsa carbonara", "Boloñesa"],
        precio: "40.000",
        etiquetas: ["vegetariano"]
      },
      {
        nombre: "Spaghetti",
        descripcion: "Pasta larga tradicional con salsa a elección",
        salsas: ["Cuatro quesos", "Pomodoro", "Pesto", "Salsa carbonara", "Boloñesa"],
        precio: "40.000",
        etiquetas: ["vegetariano"]
      },
      {
        nombre: "Ñoquis",
        descripcion: "Pasta casera con salsa a elección",
        salsas: ["Cuatro quesos", "Pomodoro", "Pesto", "Salsa carbonara", "Boloñesa"],
        precio: "40.000",
        etiquetas: ["vegetariano"]
      }
    ],
    carnes: [
      {
        nombre: "Ojo de Bife",
        descripcion: "Corte premium a la parrilla con guarnición a elección",
        guarniciones: ["Arroz pilaf", "Arroz y queso", "Puré de papa", "Papas fritas", "Papas rústicas"],
        precio: "75.000",
        etiquetas: ["sin gluten"]
      },
      {
        nombre: "Bife de Chorizo",
        descripcion: "Corte jugoso a la parrilla con guarnición a elección",
        guarniciones: ["Arroz pilaf", "Arroz y queso", "Puré de papa", "Papas fritas", "Papas rústicas"],
        precio: "65.000",
        etiquetas: ["sin gluten"]
      },
      {
        nombre: "Lomo",
        descripcion: "Corte tierno a la parrilla con guarnición a elección",
        guarniciones: ["Arroz pilaf", "Arroz y queso", "Puré de papa", "Papas fritas", "Papas rústicas"],
        precio: "60.000",
        etiquetas: ["sin gluten"]
      }
    ],
    picadas: [
      {
        nombre: "Tabla de Fríos (2 personas)",
        descripcion: "Variedad de quesos, embutidos, aceitunas y tostadas",
        precio: "150.000",
        etiquetas: []
      },
      {
        nombre: "Picada La Mansa",
        descripcion: "Carne acebollada, chipa, mandioca frita, pastel mandi'o, payagua, sopa paraguaya y variedad de salsas",
        precio: "175.000",
        etiquetas: []
      }
    ],
    ensaladas: [
      {
        nombre: "Ensalada César",
        descripcion: "Lechuga romana, crutones, parmesano y aderezo césar",
        precio: "40.000",
        etiquetas: ["vegetariano"]
      },
      {
        nombre: "Ensalada La Mansa",
        descripcion: "Mix de verdes, manzana verde, palmito, cherry y vinagreta de la casa",
        precio: "45.000",
        etiquetas: ["vegetariano", "sin gluten"]
      },
      {
        nombre: "Ensalada Mixta",
        descripcion: "Lechuga, zanahoria, tomate, cebolla",
        precio: "20.000",
        etiquetas: ["vegetariano", "sin gluten", "vegano"]
      }
    ],
    pizzas: [
      {
        nombre: "Pepperoni",
        descripcion: "Salsa de tomate, mozzarella y pepperoni",
        precio: "65.000",
        etiquetas: []
      },
      {
        nombre: "Calabresa",
        descripcion: "Salsa de tomate, mozzarella y calabresa",
        precio: "65.000",
        etiquetas: []
      },
      {
        nombre: "Paraguaya",
        descripcion: "Salsa de tomate, mozzarella, jamón del país y orégano",
        precio: "65.000",
        etiquetas: []
      },
      {
        nombre: "Rúcula y Jamón Crudo",
        descripcion: "Base blanca, mozzarella, rúcula fresca y jamón crudo",
        precio: "85.000",
        etiquetas: []
      },
      {
        nombre: "Pollo Catupiry",
        descripcion: "Salsa de tomate, mozzarella, pollo desmenuzado y catupiry",
        precio: "65.000",
        etiquetas: []
      },
      {
        nombre: "Cuatro Quesos",
        descripcion: "Mozzarella, parmesano, gorgonzola y provolone",
        precio: "65.000",
        etiquetas: ["vegetariano"]
      }
    ],
    postres: [
      {
        nombre: "Brownie con Helado",
        descripcion: "Brownie tibio acompañado de helado de vainilla",
        precio: "30.000",
        etiquetas: ["vegetariano"]
      },
      {
        nombre: "Flan Dulce de Leche",
        descripcion: "Flan casero con dulce de leche, con crema o asado",
        precio: "30.000",
        etiquetas: ["vegetariano", "sin gluten"]
      },
      {
        nombre: "Tiramisú de la Casa",
        descripcion: "Tradicional tiramisú italiano preparado en casa",
        precio: "35.000",
        etiquetas: ["vegetariano"]
      },
      {
        nombre: "Peras al Vino",
        descripcion: "Peras en reducción de cabernet sauvignon, con queso crema y crumble de vainilla",
        precio: "40.000",
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

  type MenuItem = {
    nombre: string;
    descripcion: string;
    precio: string;
    etiquetas: string[];
    guarniciones?: string[];
    salsas?: string[];
  };

  const filteredItems = (items: MenuItem[]) => {
    if (!searchTerm) return items;
    return items.filter(item =>
      item.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const renderMenuCard = (
    item: MenuItem,
    showGuarniciones = false,
    showSalsas = false
  ) => (
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

  const globalFiltered = Object.entries(menuData)
    .map(([categoria, items]) =>
      filteredItems(items as MenuItem[]).map(item => ({ ...item, categoria }))
    )
    .flat();

  return (
    <div className="min-h-screen bg-background">
      {/* Sección superior con imagen de fondo */}
      <section
        className="relative w-full"
        style={{
          height: "340px",
          minHeight: "260px",
          backgroundImage: `url(${bgHeroMenu})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center w-full max-w-2xl mx-auto"
          >
            <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-white mb-4">
              Menú General
            </h1>
            <p className="font-inter text-lg text-white max-w-3xl mx-auto mb-8">
              Descubrí nuestra carta completa con lo mejor de la cocina paraguaya e italiana. 
              Platos preparados con ingredientes frescos y el sabor auténtico que nos caracteriza.
            </p>
            <div className="relative max-w-md mx-auto mb-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white h-4 w-4" />
              <input
                type="text"
                placeholder="Buscar platos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-transparent rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-black/40 text-white placeholder:text-white/70"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resto del menú */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {searchTerm ? (
          <div>
            <h2 className="font-playfair text-2xl font-bold mb-6 text-foreground text-center">
              Resultados de búsqueda
            </h2>
            {globalFiltered.length === 0 ? (
              <p className="text-center text-muted-foreground mb-12">No se encontraron platos.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {globalFiltered.map((item) =>
                  renderMenuCard(item, item.guarniciones !== undefined, item.salsas !== undefined)
                )}
              </div>
            )}
          </div>
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 mb-8 bg-card">
              <TabsTrigger value="picadas" className="font-inter">Picadas</TabsTrigger>
              <TabsTrigger value="minutas" className="font-inter">Minutas</TabsTrigger>
              <TabsTrigger value="pastas" className="font-inter">Pastas</TabsTrigger>
              <TabsTrigger value="carnes" className="font-inter">Carnes</TabsTrigger>
              <TabsTrigger value="ensaladas" className="font-inter">Ensaladas</TabsTrigger>
              <TabsTrigger value="pizzas" className="font-inter">Pizzas</TabsTrigger>
              <TabsTrigger value="postres" className="font-inter">Postres</TabsTrigger>
            </TabsList>
            {Object.keys(menuData).map((categoria) => (
              <TabsContent key={categoria} value={categoria}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredItems(menuData[categoria as keyof typeof menuData]).map((item) =>
                    categoria === "minutas"
                      ? renderMenuCard(item, true)
                      : categoria === "pastas"
                      ? renderMenuCard(item, false, true)
                      : renderMenuCard(item)
                  )}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        )}
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
                  Pedir por WhatsApp
                </Button>
              </a>
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