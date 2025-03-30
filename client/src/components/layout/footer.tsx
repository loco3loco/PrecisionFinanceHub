import { Link } from "wouter";
import { Check, Send } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import Logo from "@/components/ui/logo";
import { useTranslation } from "react-i18next";

// Constante para los enlaces de contacto - centralizada para facilitar cambios futuros
export const CONTACT_LINK = "/"; // Redirige a la página principal
export const CONTACT_SECTION = "/#contacto"; // Usado solo para la página principal

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();
  
  // Servicios para el footer con traducción directa
  const { i18n } = useTranslation();
  const isSpanish = i18n.language === 'es';
  
  // Enlaces a las páginas de servicios específicas
  const footerServices = [
    { 
      name: isSpanish ? "Contabilidad Corporativa" : "Corporate Accounting", 
      href: "/servicios/contabilidad-corporativa" 
    },
    { 
      name: isSpanish ? "Asesoría Fiscal" : "Tax Advisory", 
      href: "/servicios/asesoria-fiscal" 
    },
    { 
      name: isSpanish ? "Consultoría Empresarial" : "Business Consulting", 
      href: "/servicios/consultoria-empresarial" 
    },
    { 
      name: isSpanish ? "Gestión de Nómina" : "Payroll Management", 
      href: "/servicios/gestion-nomina" 
    },
    { 
      name: isSpanish ? "Auditoría Financiera" : "Financial Audit", 
      href: "/servicios/auditoria-financiera" 
    },
    { 
      name: isSpanish ? "Tecnología Contable" : "Accounting Technology", 
      href: "/servicios/tecnologia-contable" 
    }
  ];

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: t("common.error", "Error"),
        description: t("newsletter.email_required", "Por favor ingresa tu correo electrónico"),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await apiRequest("POST", "/api/subscribe", { email });

      toast({
        title: t("newsletter.success_title", "¡Suscripción exitosa!"),
        description: t("newsletter.success_message", "Gracias por suscribirte a nuestro newsletter"),
      });

      setEmail("");
    } catch (error) {
      toast({
        title: t("common.error", "Error"),
        description: t("newsletter.error_message", "No pudimos procesar tu suscripción. Intenta nuevamente."),
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
                <Logo variant="white" width={90} height={35} />
              </Link>
            </div>
            <p className="text-white/80 mb-6">
              {t("about.subtitle")}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">{t("nav.quick_links", "Enlaces Rápidos")}</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/" 
                  className="text-white/80 hover:text-white transition-colors"
                  onClick={(e) => {
                    const isHome = window.location.pathname === '/';
                    if (isHome) {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      window.history.pushState(null, '', '/');
                    }
                  }}
                >
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a 
                  href="#servicios"
                  className="text-white/80 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const isHome = window.location.pathname === '/';
                    
                    if (!isHome) {
                      window.location.href = '/#servicios';
                    } else {
                      const element = document.getElementById('servicios');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        window.history.pushState(null, '', '#servicios');
                      }
                    }
                  }}
                >
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <a 
                  href="#nosotros"
                  className="text-white/80 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const isHome = window.location.pathname === '/';
                    
                    if (!isHome) {
                      window.location.href = '/#nosotros';
                    } else {
                      const element = document.getElementById('nosotros');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        window.history.pushState(null, '', '#nosotros');
                      }
                    }
                  }}
                >
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a 
                  href="#contacto"
                  className="text-white/80 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const isHome = window.location.pathname === '/';
                    
                    if (!isHome) {
                      window.location.href = '/#contacto';
                    } else {
                      const element = document.getElementById('contacto');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        window.history.pushState(null, '', '#contacto');
                      }
                    }
                  }}
                >
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">{t("nav.services")}</h3>
            <ul className="space-y-3">
              {footerServices.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-white/80 hover:text-white transition-colors"
                    onClick={(e) => {
                      // Solo aplicar comportamiento personalizado si es un enlace de anclaje
                      if (service.href.startsWith('#')) {
                        e.preventDefault();
                        const isHome = window.location.pathname === '/';
                        
                        if (!isHome) {
                          window.location.href = `/${service.href}`;
                        } else {
                          const targetId = service.href.substring(1);
                          const element = document.getElementById(targetId);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            window.history.pushState(null, '', service.href);
                          }
                        }
                      }
                    }}
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Solutumsa. {t("footer.rights")}
            </p>
            <div className="flex flex-wrap justify-center space-x-4">
              <a href="/terminos" className="text-white/70 hover:text-white text-sm transition-colors">
                {t("footer.terms")}
              </a>
              <a href="/privacidad" className="text-white/70 hover:text-white text-sm transition-colors">
                {t("footer.privacy")}
              </a>
              <a href="/cookies" className="text-white/70 hover:text-white text-sm transition-colors">
                {t("footer.cookies", { defaultValue: "Política de Cookies" })}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}