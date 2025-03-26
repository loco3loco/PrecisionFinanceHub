import { Link } from "wouter";
import { Check, Send } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: "Error",
        description: "Por favor ingresa tu correo electrónico",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await apiRequest("POST", "/api/subscribe", { email });

      toast({
        title: "¡Suscripción exitosa!",
        description: "Gracias por suscribirte a nuestro newsletter",
      });

      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "No pudimos procesar tu suscripción. Intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center mr-3">
                <svg
                  viewBox="0 0 100 100"
                  className="w-8 h-8 text-primary"
                  fill="currentColor"
                >
                  <rect x="10" y="30" width="30" height="50" rx="5" />
                  <rect x="50" y="30" width="40" height="10" rx="5" />
                  <rect x="50" y="50" width="40" height="10" rx="5" />
                  <rect x="50" y="70" width="40" height="10" rx="5" />
                  <path d="M30,20 L70,20 L70,10 L30,10 Z" />
                </svg>
              </div>
              <span className="text-xl font-heading font-bold">Solutumsa</span>
            </div>
            <p className="text-white/80 mb-6">
              Socios estratégicos en el crecimiento de tu empresa. Más de 50 años de experiencia a tu servicio.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-white/80 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-white/80 hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-white/80 hover:text-white transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-white/80 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <a href="/servicios/contabilidad-corporativa" className="text-white/80 hover:text-white transition-colors">
                  Servicio Contable
                </a>
              </li>
              <li>
                <a href="/servicios/asesoria-fiscal" className="text-white/80 hover:text-white transition-colors">
                  Asesoría Fiscal
                </a>
              </li>
              <li>
                <a href="/servicios/consultoria-empresarial" className="text-white/80 hover:text-white transition-colors">
                  Consultoría Empresarial
                </a>
              </li>
              <li>
                <a href="/servicios/gestion-nomina" className="text-white/80 hover:text-white transition-colors">
                  Gestión de Nómina
                </a>
              </li>
              <li>
                <a href="/servicios/auditoria-financiera" className="text-white/80 hover:text-white transition-colors">
                  Auditoría Interna
                </a>
              </li>
              <li>
                <a href="/#contacto" className="text-white/80 hover:text-white transition-colors">
                  Planificación Financiera
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Newsletter</h3>
            <p className="text-white/80 mb-4">
              Suscríbete para recibir actualizaciones fiscales y contables.
            </p>
            <form className="mb-4" onSubmit={handleSubscribe}>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Tu email"
                  className="rounded-l-md rounded-r-none focus:ring-secondary text-darkText"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  className="bg-secondary hover:bg-secondary/90 rounded-l-none rounded-r-md transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="animate-spin">⏳</span>
                  ) : (
                    <Send size={16} />
                  )}
                </Button>
              </div>
            </form>
            <p className="text-white/80 text-sm">
              Al suscribirte, aceptas nuestra política de privacidad y el envío de comunicaciones.
            </p>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Solutumsa. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center space-x-4">
              <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                Política de Cookies
              </a>
            </div>
          </div>
          <h3 className="text-lg font-bold mb-4">Oficinas</h3>
            <div className="grid grid-cols-1 gap-4">
              <address className="not-italic p-3 bg-primary-dark rounded-lg border border-white/10 text-white/80 hover:border-white/30 transition-colors">
                <div className="flex items-start mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <strong className="block text-white mb-1">Sede Principal</strong>
                    Calle Principal 123,<br />
                    Ciudad Empresarial, 10001
                  </div>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+1234567890" className="hover:text-white transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </address>
            </div>
        </div>
      </div>
    </footer>
  );
}