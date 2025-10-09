import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img 
              src="/logo la mansa.jpg" 
              alt="La Mansa Paraguay" 
              className="h-12 w-auto mb-6 filter brightness-0 invert"
            />
            <p className="font-inter text-background/80 mb-6 max-w-md">
              Donde la tradición paraguaya se encuentra con la pasión italiana, 
              creando experiencias únicas en cada taza y cada copa.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/lamansapy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                className="text-background/60 hover:text-primary transition-colors duration-200"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://www.facebook.com/lamansapy/?locale=es_LA" 
                className="text-background/60 hover:text-primary transition-colors duration-200"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold text-background mb-4">
              Navegación
            </h3>
            <ul className="space-y-3 font-inter">
              <li>
                <Link 
                  to="/" 
                  className="text-background/80 hover:text-primary transition-colors duration-200"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link 
                  to="/sobre-nosotros" 
                  className="text-background/80 hover:text-primary transition-colors duration-200"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link 
                  to="/menu-general" 
                  className="text-background/80 hover:text-primary transition-colors duration-200"
                >
                  Menú General
                </Link>
              </li>
              <li>
                <Link 
                  to="/menu-semanal" 
                  className="text-background/80 hover:text-primary transition-colors duration-200"
                >
                  Menú Semanal
                </Link>
              </li>
              <li>
                <Link 
                  to="/cafeteria" 
                  className="text-background/80 hover:text-primary transition-colors duration-200"
                >
                  Cafetería
                </Link>
              </li>
              <li>
                <Link 
                  to="/contacto" 
                  className="text-background/80 hover:text-primary transition-colors duration-200"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-lg font-semibold text-background mb-4">
              Contacto
            </h3>
            <div className="space-y-3 font-inter">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/80 text-sm">
                  Av. España 1234<br />
                  Asunción, Paraguay
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-background/80 text-sm">+595 933 366000</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-background/80 text-sm">lamansapy@gamil.com</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-background/80 text-sm">
                  <p>Lun-Vie: 7:00-23:00</p>
                  <p>Sáb: 8:00-24:00</p>
                  <p>Dom: 8:00-22:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-inter text-background/60 text-sm">
              © 2025 La Mansa Paraguay. Todos los derechos reservados.
            </p>
            
            <div className="flex space-x-6 mt-4 md:mt-0 font-inter text-sm">
              <a 
                href="#" 
                className="text-background/60 hover:text-primary transition-colors duration-200"
              >
                Política de Privacidad
              </a>
              <a 
                href="#" 
                className="text-background/60 hover:text-primary transition-colors duration-200"
              >
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;