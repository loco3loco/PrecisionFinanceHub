import { Link } from "wouter";
import { Check, Send } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import Logo from "@/components/ui/logo"; // Added import for Logo component

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Link to="/" className="mb-3 hover:opacity-90 transition-opacity">
                <Logo variant="white" width={180} height={70} />
              </Link>
            </div>
            <p className="text-white/80 mb-6">
              Socios estratégicos en el crecimiento de tu empresa. Más de 50 años de experiencia a tu servicio.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-white/80 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-white/80 hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-white/80 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/servicios/contabilidad-corporativa" className="text-white/80 hover:text-white transition-colors">
                  Servicio Contable
                </Link>
              </li>
              <li>
                <Link href="/servicios/asesoria-fiscal" className="text-white/80 hover:text-white transition-colors">
                  Asesoría Fiscal
                </Link>
              </li>
              <li>
                <Link href="/servicios/consultoria-empresarial" className="text-white/80 hover:text-white transition-colors">
                  Consultoría Empresarial
                </Link>
              </li>
              <li>
                <Link href="/servicios/gestion-nomina" className="text-white/80 hover:text-white transition-colors">
                  Gestión de Nómina
                </Link>
              </li>
              <li>
                <Link href="/servicios/auditoria-financiera" className="text-white/80 hover:text-white transition-colors">
                  Auditoría Interna
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="text-white/80 hover:text-white transition-colors">
                  Planificación Financiera
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Solutumsa. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center space-x-4">
              <Link href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                Términos y Condiciones
              </Link>
              <Link href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}