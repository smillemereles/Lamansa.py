import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText } from "lucide-react";
import Footer from "@/components/Footer";

const PoliticaPrivacidad = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Política de Privacidad
            </h1>
            <p className="font-inter text-muted-foreground text-lg">
              Última actualización: Diciembre 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {/* Introducción */}
            <div className="mb-12">
              <h2 className="font-playfair text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <FileText className="h-6 w-6 text-primary" />
                Introducción
              </h2>
              <p className="font-inter text-muted-foreground leading-relaxed">
                En La Mansa Paraguay, nos comprometemos a proteger tu privacidad y la seguridad de tus datos personales. 
                Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos tu información 
                cuando visitas nuestro sitio web o utilizas nuestros servicios.
              </p>
            </div>

            {/* Información que recopilamos */}
            <div className="mb-12">
              <h2 className="font-playfair text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Eye className="h-6 w-6 text-primary" />
                Información que Recopilamos
              </h2>
              <div className="space-y-4 font-inter text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">1. Información Personal</h3>
                  <p>Cuando realizas un pedido o te comunicas con nosotros, podemos recopilar:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Nombre completo</li>
                    <li>Número de teléfono</li>
                    <li>Dirección de correo electrónico</li>
                    <li>Dirección de entrega</li>
                    <li>Información de pedidos y preferencias</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">2. Información de Navegación</h3>
                  <p>Recopilamos automáticamente cierta información cuando visitas nuestro sitio:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Dirección IP</li>
                    <li>Tipo de navegador y dispositivo</li>
                    <li>Páginas visitadas y tiempo de navegación</li>
                    <li>Cookies y tecnologías similares</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Uso de la información */}
            <div className="mb-12">
              <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Uso de la Información
              </h2>
              <div className="space-y-3 font-inter text-muted-foreground">
                <p>Utilizamos la información recopilada para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Procesar y gestionar tus pedidos</li>
                  <li>Comunicarnos contigo sobre tus pedidos y consultas</li>
                  <li>Mejorar nuestros servicios y experiencia del usuario</li>
                  <li>Enviar información promocional (con tu consentimiento)</li>
                  <li>Cumplir con obligaciones legales y regulatorias</li>
                  <li>Prevenir fraudes y garantizar la seguridad</li>
                </ul>
              </div>
            </div>

            {/* Protección de datos */}
            <div className="mb-12">
              <h2 className="font-playfair text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Lock className="h-6 w-6 text-primary" />
                Protección de Datos
              </h2>
              <p className="font-inter text-muted-foreground leading-relaxed">
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tus datos 
                personales contra acceso no autorizado, pérdida, destrucción o alteración. Sin embargo, ningún 
                método de transmisión por Internet o almacenamiento electrónico es 100% seguro.
              </p>
            </div>

            {/* Compartir información */}
            <div className="mb-12">
              <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Compartir Información
              </h2>
              <div className="space-y-3 font-inter text-muted-foreground">
                <p>No vendemos ni alquilamos tu información personal a terceros. Podemos compartir información con:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proveedores de servicios de entrega</li>
                  <li>Procesadores de pagos</li>
                  <li>Proveedores de servicios de tecnología</li>
                  <li>Autoridades legales cuando sea requerido por ley</li>
                </ul>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Uso de Cookies
              </h2>
              <p className="font-inter text-muted-foreground leading-relaxed">
                Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web, 
                analizar el tráfico y personalizar el contenido. Puedes configurar tu navegador para rechazar 
                cookies, aunque esto puede afectar la funcionalidad del sitio.
              </p>
            </div>

            {/* Tus derechos */}
            <div className="mb-12">
              <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Tus Derechos
              </h2>
              <div className="space-y-3 font-inter text-muted-foreground">
                <p>Tienes derecho a:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acceder a tu información personal</li>
                  <li>Rectificar datos inexactos o incompletos</li>
                  <li>Solicitar la eliminación de tus datos</li>
                  <li>Oponerte al procesamiento de tu información</li>
                  <li>Retirar tu consentimiento en cualquier momento</li>
                  <li>Presentar una queja ante la autoridad de protección de datos</li>
                </ul>
              </div>
            </div>

            {/* Retención de datos */}
            <div className="mb-12">
              <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Retención de Datos
              </h2>
              <p className="font-inter text-muted-foreground leading-relaxed">
                Conservamos tu información personal solo durante el tiempo necesario para cumplir con los 
                propósitos descritos en esta política o según lo requiera la ley aplicable.
              </p>
            </div>

            {/* Enlaces externos */}
            <div className="mb-12">
              <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Enlaces a Sitios Externos
              </h2>
              <p className="font-inter text-muted-foreground leading-relaxed">
                Nuestro sitio web puede contener enlaces a sitios de terceros. No somos responsables de las 
                prácticas de privacidad de estos sitios. Te recomendamos leer sus políticas de privacidad.
              </p>
            </div>

            {/* Menores de edad */}
            <div className="mb-12">
              <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Privacidad de Menores
              </h2>
              <p className="font-inter text-muted-foreground leading-relaxed">
                Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente 
                información personal de menores sin el consentimiento de sus padres o tutores legales.
              </p>
            </div>

            {/* Cambios */}
            <div className="mb-12">
              <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Cambios a esta Política
              </h2>
              <p className="font-inter text-muted-foreground leading-relaxed">
                Podemos actualizar esta Política de Privacidad periódicamente. Te notificaremos sobre cambios 
                significativos publicando la nueva política en nuestro sitio web con una fecha de "última 
                actualización" revisada.
              </p>
            </div>

            {/* Contacto */}
            <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
              <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Contacto
              </h2>
              <p className="font-inter text-muted-foreground leading-relaxed mb-4">
                Si tienes preguntas sobre esta Política de Privacidad o deseas ejercer tus derechos, 
                puedes contactarnos en:
              </p>
              <div className="space-y-2 font-inter text-foreground">
                <p><strong>La Mansa Paraguay</strong></p>
                <p>Aka Caraya, Cd. del Este 100151</p>
                <p>Ciudad del Este, Paraguay</p>
                <p>Teléfono: <a href="tel:+595933366000" className="text-primary hover:underline">+595 933 366000</a></p>
                <p>Email: <a href="mailto:lamansapy@gmail.com" className="text-primary hover:underline">lamansapy@gmail.com</a></p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Línea divisoria decorativa */}
      <div className="bg-gradient-to-r from-transparent via-primary to-transparent h-0.5"></div>
      <Footer />
    </div>
  );
};

export default PoliticaPrivacidad;
