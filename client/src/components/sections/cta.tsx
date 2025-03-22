import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare } from "lucide-react";

export default function CTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            ¿Listo para llevar tu empresa al siguiente nivel?
          </h2>
          <p className="text-lg opacity-90 mb-10">
            Programa una consulta virtual gratuita de 30 minutos con uno de nuestros expertos y
            descubre cómo podemos ayudarte a optimizar tus finanzas y potenciar el crecimiento de tu
            negocio.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-accent transition-colors duration-300"
            >
              <a href="#contacto">
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Consulta Gratuita
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white/50 hover:bg-white/10"
            >
              <a href="https://wa.me/5491112345678">
                <MessageSquare className="mr-2 h-5 w-5" />
                Contactar por WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
