import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hola! Me gustaría hacer una consulta sobre La Mansa Paraguay.");
    window.open(`https://wa.me/59521123456?text=${message}`, '_blank');
  };

  const handleMapClick = () => {
    // Coordenadas de ejemplo para Asunción
    const lat = -25.2637;
    const lng = -57.5759;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Abre en la app nativa de mapas del dispositivo
      window.open(`maps:${lat},${lng}`);
    } else {
      // Abre en Google Maps web
      window.open(`https://www.google.com/maps?q=${lat},${lng}`);
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
            Contacto
          </h1>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Vení a visitarnos o contactanos por nuestros canales digitales. 
            Estamos aquí para hacer de tu experiencia algo inolvidable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-inter font-semibold text-foreground">Dirección</h4>
                    <p className="font-inter text-muted-foreground">
                      Av. España 1234, Asunción<br />
                      Distrito Central, Paraguay
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-inter font-semibold text-foreground">Horarios</h4>
                    <div className="font-inter text-muted-foreground space-y-1">
                      <p>Lunes - Viernes: 7:00 - 23:00</p>
                      <p>Sábados: 8:00 - 24:00</p>
                      <p>Domingos: 8:00 - 22:00</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-inter font-semibold text-foreground">Teléfono</h4>
                    <p className="font-inter text-muted-foreground">+595 21 123 456</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-inter font-semibold text-foreground">Email</h4>
                    <p className="font-inter text-muted-foreground">hola@lamansa.com.py</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media & CTA */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Redes Sociales
              </h3>
              <p className="font-inter text-muted-foreground mb-6">
                Seguínos para no perderte nuestras novedades y eventos especiales
              </p>
              
              <div className="flex space-x-4 mb-6">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://instagram.com/lamansaparaguay', '_blank')}
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://facebook.com/lamansaparaguay', '_blank')}
                >
                  <Facebook className="h-5 w-5" />
                </Button>
              </div>

              <Button 
                onClick={handleWhatsApp}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-medium mb-4"
              >
                Contactanos por WhatsApp
              </Button>

              <Button 
                variant="outline" 
                onClick={handleMapClick}
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-inter font-medium"
              >
                <Navigation className="h-4 w-4 mr-2" />
                Cómo llegar
              </Button>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-full"
          >
            <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden h-full min-h-[500px]">
              <div 
                className="h-full bg-gradient-to-br from-muted via-muted-foreground/10 to-muted cursor-pointer hover:from-muted/80 transition-colors duration-300 flex items-center justify-center"
                onClick={handleMapClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleMapClick();
                  }
                }}
                aria-label="Abrir ubicación en mapas"
              >
                <div className="text-center p-8">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h4 className="font-playfair text-xl font-bold text-foreground mb-2">
                    Nuestra Ubicación
                  </h4>
                  <p className="font-inter text-muted-foreground mb-4">
                    Av. España 1234, Asunción<br />
                    Distrito Central, Paraguay
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Navigation className="h-4 w-4 mr-2" />
                    Ver en el mapa
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
              ¿Tenés alguna consulta?
            </h3>
            <p className="font-inter text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nuestro equipo está disponible para ayudarte con reservas, eventos especiales, 
              información sobre nuestros productos o cualquier consulta que tengas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleWhatsApp}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-medium"
              >
                Escribinos por WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-inter font-medium"
                onClick={() => window.location.href = 'mailto:hola@lamansa.com.py'}
              >
                Enviar Email
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;