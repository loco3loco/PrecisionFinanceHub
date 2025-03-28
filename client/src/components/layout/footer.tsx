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
export const CONTACT_LINK = "/#contacto"; // Dirección relativa que funciona en todas las rutas

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();
  
  // Servicios para el footer
  const footerServices = [
    { key: "corporate_accounting", href: "/servicios/contabilidad-corporativa" },
    { key: "tax_advisory", href: "/servicios/asesoria-fiscal" },
    { key: "business_consulting", href: "/servicios/consultoria-empresarial" },
    { key: "payroll_management", href: "/servicios/gestion-nomina" },
    { key: "financial_audit", href: "/servicios/auditoria-financiera" },
    { key: "accounting_tech", href: "/servicios/tecnologia-contable" }
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
                <Logo variant="white" width={180} height={70} />
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
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-white/80 hover:text-white transition-colors">
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-white/80 hover:text-white transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link to={CONTACT_LINK} className="text-white/80 hover:text-white transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">{t("nav.services")}</h3>
            <ul className="space-y-3">
              {footerServices.map((service, index) => {
                // Obtenemos la traducción para verificar que está funcionando
                const translatedText = t(`services.${service.key}`);
                console.log(`Servicio ${index}: clave=${service.key}, traducción=${translatedText}`);
                
                return (
                  <li key={index}>
                    <Link to={service.href} className="text-white/80 hover:text-white transition-colors">
                      {translatedText}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Solutumsa. {t("footer.rights")}
            </p>
            <div className="flex flex-wrap justify-center space-x-4">
              <Link to="#" className="text-white/70 hover:text-white text-sm transition-colors">
                {t("footer.terms")}
              </Link>
              <Link to="#" className="text-white/70 hover:text-white text-sm transition-colors">
                {t("footer.privacy")}
              </Link>
              <Link to="#" className="text-white/70 hover:text-white text-sm transition-colors">
                {t("footer.cookies", "Política de Cookies")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}