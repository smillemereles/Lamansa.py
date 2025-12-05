import { motion } from "framer-motion";
import { FileText, CheckCircle, AlertCircle, Scale } from "lucide-react";
import Footer from "@/components/Footer";

const Terminos = () => {
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
            <Scale className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Términos y Condiciones
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
                Bienvenido a La Mansa Paraguay. Al acceder y utilizar nuestro sitio web y servicios, aceptas 
                estar sujeto a estos Términos y Condiciones. Por favor, léelos cuidadosamente antes de utilizar 
                nuestros servicios.
              </p>
            </div>

            {/* Aceptación de términos */}
            <div className="mb-12">
              <h2 className="font-playfair text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                Aceptación de Términos
              </h2>
              <div className="space-y-4 font-inter text-muted-foreground">
                <p>
                  Al utilizar nuestro sitio web y realizar pedidos, confirmas que:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Tienes al menos 18 años de edad o cuentas con el consentimiento de tus padres/tutores</li>
                  <li>Proporcionas información precisa y completa</li>
                  <li>Aceptas estos Términos y Condiciones en su totalidad</li>
                  <li>Cumplirás con todas las leyes y regulaciones aplicables</li>
                </ul>
              </div>
            </div>

            {/* Servicios */}
            <div className="mb-12">
              <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Nuestros Servicios
              </h2>
              <div className="space-y-4 font-inter text-muted-foreground">
                <p>
                  La Mansa Paraguay ofrece servicios de cafetería, restaurante y wine bar, incluyendo:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Servicio de comedor (dine-in)</li>
                  <li>Pedidos para llevar (take-away)</li>
                  <li>Servicio de entrega a domicilio (delivery)</li>
                  <li>Reservas de mesa</li>
                  <li>Eventos especiales</li>
                </ul>
                <p>
                  Nos reservamos el derecho de modificar, suspender o descontinuar cualquier aspecto de 
                  nuestros servicios en cualquier momento sin previo aviso.
                </p>
              </div>
            </div>

            {/* Pedidos y pagos */}
            <div className="mb-12">
              <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Pedidos y Pagos
              </h2>
              <div className="space-y-4 font-inter text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Realización de Pedidos</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Los pedidos pueden realizarse por teléfono, WhatsApp o en persona</li>
                    <li>Todos los pedidos están sujetos a disponibilidad</li>
                    <li>Nos reservamos el derecho de rechazar o cancelar pedidos</li>
                    <li>Los tiempos de preparación pueden variar según la demanda</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Precios y Pagos</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Los precios están expresados en Guaraníes paraguayos (₲)</li>
                    <li>Los precios están sujetos a cambios sin previo aviso</li>
                    <li>Aceptamos efectivo, tarjetas de débito/crédito y transferencias bancarias</li>
                    <li>El pago se realiza al momento de la entrega o recogida</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Delivery */}
            <div className="mb-12">
              <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Servicio de Delivery
              </h2>
              <div className="space-y-4 font-inter text-muted-foreground">
                <ul className="list-disc pl-6 space-y-2">
                  <li>El servicio de delivery está disponible en zonas específicas de Ciudad del Este</li>
                  <li>Los tiempos de entrega son estimados y pueden variar según las condiciones</li>
                  <li>Pueden aplicar cargos adicionales por delivery según la distancia</li>
                  <li>La entrega se realiza en la dirección proporcionada por el cliente</li>
                  <li>El cliente debe estar disponible para recibir el pedido</li>
                </ul>
              </div>
            </div>

            {/* Cancelaciones y devoluciones */}
            <div className="mb-12">
              <h2 className="font-playfair text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <AlertCircle className="h-6 w-6 text-primary" />
                Cancelaciones y Devoluciones
              </h2>
              <div className="space-y-4 font-inter text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Cancelaciones</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Los pedidos pueden cancelarse antes de su preparación</li>
                    <li>Una vez iniciada la preparación, no se aceptan cancelaciones</li>
                    <li>Para cancelar, contacta inmediatamente con nuestro equipo</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Devoluciones y Reclamos</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Si hay algún problema con tu pedido, contacta dentro de las 2 horas</li>
                    <li>Evaluaremos cada caso individualmente</li>
                    <li>Podemos ofrecer reemplazo, crédito o reembolso según corresponda</li>
                    <li>Se requiere evidencia fotográfica para reclamos de calidad</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Reservas */}
            <div className="mb-12">
              <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Reservas de Mesa
              </h2>
              <div className="space-y-3 font-inter text-muted-foreground">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Las reservas deben hacerse con al menos 24 horas de anticipación</li>
                  <li>Se mantendrán durante 15 minutos después de la hora reservada</li>
                  <li>Para grupos grandes, puede requerirse un depósito</li>
                  <li>Las cancelaciones deben hacerse con 12 horas de anticipación</li>
                </ul>
              </div>
            </div>

            {/* Productos alcohólicos */}
            <div className="mb-12">
              <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Venta de Bebidas Alcohólicas
              </h2>
              <div className="space-y-3 font-inter text-muted-foreground">
                <p className="font-semibold text-primary">
                  La venta de bebidas alcohólicas está restringida a personas mayores de 18 años.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Podemos solicitar identificación para verificar la edad</li>
                  <li>Nos reservamos el derecho de rechazar la venta de alcohol</li>
                  <li>No servimos alcohol a personas visiblemente intoxicadas</li>
                  <li>El consumo responsable es responsabilidad del cliente</li>
                </ul>
              </div>
            </div>

            {/* Alergias */}
            <div className="mb-12">
              <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Alergias e Intolerancias
              </h2>
              <p className="font-inter text-muted-foreground leading-relaxed">
                Si tienes alergias o intolerancias alimentarias, informa a nuestro personal antes de realizar 
                tu pedido. Aunque hacemos nuestro mejor esfuerzo para evitar la contaminación cruzada, no 
                podemos garantizar que nuestros productos estén completamente libres de alérgenos.
              </p>
            </div>

            {/* Propiedad intelectual */}
            <div className="mb-12">
              <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Propiedad Intelectual
              </h2>
              <p className="font-inter text-muted-foreground leading-relaxed">
                Todo el contenido de nuestro sitio web, incluyendo textos, imágenes, logotipos y diseños, 
                es propiedad de La Mansa Paraguay y está protegido por las leyes de propiedad intelectual. 
                No está permitido su uso sin autorización expresa.
              </p>
            </div>

            {/* Limitación de responsabilidad */}
            <div className="mb-12">
              <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Limitación de Responsabilidad
              </h2>
              <div className="space-y-3 font-inter text-muted-foreground">
                <p>
                  La Mansa Paraguay no será responsable por:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Retrasos causados por circunstancias fuera de nuestro control</li>
                  <li>Daños indirectos o consecuentes</li>
                  <li>Pérdidas de beneficios o ingresos</li>
                  <li>Errores en la información del sitio web</li>
                </ul>
              </div>
            </div>

            {/* Modificaciones */}
            <div className="mb-12">
              <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Modificaciones a los Términos
              </h2>
              <p className="font-inter text-muted-foreground leading-relaxed">
                Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. 
                Los cambios serán efectivos inmediatamente después de su publicación en el sitio web. 
                Tu uso continuado de nuestros servicios después de cualquier cambio constituye tu aceptación 
                de los nuevos términos.
              </p>
            </div>

            {/* Ley aplicable */}
            <div className="mb-12">
              <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Ley Aplicable y Jurisdicción
              </h2>
              <p className="font-inter text-muted-foreground leading-relaxed">
                Estos Términos y Condiciones se rigen por las leyes de la República del Paraguay. 
                Cualquier disputa se resolverá en los tribunales competentes de Ciudad del Este, Paraguay.
              </p>
            </div>

            {/* Contacto */}
            <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
              <h2 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Contacto
              </h2>
              <p className="font-inter text-muted-foreground leading-relaxed mb-4">
                Si tienes preguntas sobre estos Términos y Condiciones, contáctanos:
              </p>
              <div className="space-y-2 font-inter text-foreground">
                <p><strong>La Mansa Paraguay</strong></p>
                <p>Aka Caraya, Cd. del Este 100151</p>
                <p>Ciudad del Este, Paraguay</p>
                <p>Teléfono: <a href="tel:+595933366000" className="text-primary hover:underline">+595 933 366000</a></p>
                <p>Email: <a href="mailto:lamansapy@gmail.com" className="text-primary hover:underline">lamansapy@gmail.com</a></p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Horario de atención: Lun-Vie 8:00-17:00, Sábado 8:00-17:00
                </p>
              </div>
            </div>

            {/* Nota final */}
            <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="font-inter text-sm text-gray-700">
                <strong>Nota:</strong> Al realizar un pedido o utilizar nuestros servicios, confirmas que has 
                leído, entendido y aceptado estos Términos y Condiciones en su totalidad.
              </p>
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

export default Terminos;
