import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 text-gray-800 py-12 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img 
              src="/lamansatrans.png" 
              alt="La Mansa Paraguay" 
              className="h-16 w-auto mb-4"
            />
            <p className="font-inter text-gray-600 text-sm mb-4 max-w-md leading-relaxed">
              Donde la tradición paraguaya se encuentra con la pasión italiana, 
              creando experiencias únicas en cada taza y cada copa.
            </p>
            
            <div className="flex space-x-3">
              <a 
                href="https://www.instagram.com/lamansapy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                className="bg-primary/10 hover:bg-primary p-2.5 rounded-full transition-all duration-300 hover:scale-110 group"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-primary group-hover:text-white" />
              </a>
              <a 
                href="https://www.facebook.com/lamansapy/?locale=es_LA" 
                className="bg-primary/10 hover:bg-primary p-2.5 rounded-full transition-all duration-300 hover:scale-110 group"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 text-primary group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold text-primary mb-4 pb-2 border-b border-primary/30">
              Navegación
            </h3>
            <ul className="space-y-2 font-inter text-sm">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-700 hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-200"></span>
                  Inicio
                </Link>
              </li>
              <li>
                <Link 
                  to="/sobre-nosotros" 
                  className="text-gray-700 hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-200"></span>
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link 
                  to="/menu-general" 
                  className="text-gray-700 hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-200"></span>
                  Menú General
                </Link>
              </li>
              <li>
                <Link 
                  to="/cafeteria" 
                  className="text-gray-700 hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-200"></span>
                  Cafetería
                </Link>
              </li>
              <li>
                <Link 
                  to="/navidad" 
                  className="text-gray-700 hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-200"></span>
                  Navidad
                </Link>
              </li>
              <li>
                <Link 
                  to="/contacto" 
                  className="text-gray-700 hover:text-primary transition-colors duration-200 flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-200"></span>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-lg font-semibold text-primary mb-4 pb-2 border-b border-primary/30">
              Contacto
            </h3>
            <div className="space-y-3 font-inter text-sm">
              <div className="flex items-start space-x-2 group">
                <div className="bg-primary/10 p-1.5 rounded-lg group-hover:bg-primary/20 transition-colors duration-200">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                </div>
                <span className="text-gray-600 text-xs leading-relaxed">
                  Aka Caraya, Cd. del Este 100151<br />
                  Ciudad del Este, Paraguay
                </span>
              </div>
              
              <a href="tel:+595933366000" className="flex items-center space-x-2 group">
                <div className="bg-primary/10 p-1.5 rounded-lg group-hover:bg-primary/20 transition-colors duration-200">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                </div>
                <span className="text-gray-600 group-hover:text-primary transition-colors duration-200">+595 933 366000</span>
              </a>
              
              <a href="mailto:lamansapy@gmail.com" className="flex items-center space-x-2 group">
                <div className="bg-primary/10 p-1.5 rounded-lg group-hover:bg-primary/20 transition-colors duration-200">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                </div>
                <span className="text-gray-600 group-hover:text-primary transition-colors duration-200">lamansapy@gmail.com</span>
              </a>
              
              <div className="flex items-start space-x-2 group">
                <div className="bg-primary/10 p-1.5 rounded-lg group-hover:bg-primary/20 transition-colors duration-200">
                  <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                </div>
                <div className="text-gray-600 text-xs leading-relaxed">
                  <p className="font-semibold text-primary mb-0.5">Horarios</p>
                  <p>Lun-Vie: 8:00-17:00</p>
                  <p>Sábado: 8:00-17:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300/50 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="font-inter text-gray-600 text-xs">
              © 2025 La Mansa Paraguay. Todos los derechos reservados.
            </p>
            
            <div className="flex space-x-6 font-inter text-xs">
              <Link 
                to="/politica-privacidad" 
                className="text-gray-600 hover:text-primary transition-colors duration-200"
              >
                Política de Privacidad
              </Link>
              <Link 
                to="/terminos" 
                className="text-gray-600 hover:text-primary transition-colors duration-200"
              >
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;