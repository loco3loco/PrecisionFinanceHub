import { CalculatorIcon, FileText, Lightbulb, Users, Search, PieChart, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useTranslation } from "react-i18next";

// Define service data structure
interface ServiceProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  features: string[];
  delay: number;
  href: string;
}

const ServiceCard = ({ title, description, image, icon, features, delay, href }: ServiceProps) => {
  const { t } = useTranslation();
  
  // Debug to see what's being passed to features
  console.log("Features:", features, "Type:", typeof features, "Is array:", Array.isArray(features));
  
  // Create a safe array if features is not an array
  const featuresList = Array.isArray(features) ? features : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg overflow-hidden shadow-md"
    >
      <a href={`/servicios/${href}`} className="block">
        <div className="h-48 overflow-hidden relative">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <span className="text-white font-medium">{t("services.view_details", "Ver más detalles")}</span>
          </div>
        </div>
        <div className="p-6">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            {icon}
          </div>
          <h3 className="text-xl font-heading font-semibold mb-3">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <ul className="mb-4 space-y-2">
            {featuresList.map((feature, index) => (
              <li key={index} className="flex items-center text-sm">
                <Check className="text-secondary mr-2 h-4 w-4" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </a>
    </motion.div>
  );
};

export default function Services() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();

  // Services data
  const services = [
    {
      title: t("services.items.accounting.title", "Servicio Contable"),
      description: t("services.items.accounting.description", "Mantenemos tus libros contables al día, cumpliendo con todas las normativas vigentes y generando informes precisos para la toma de decisiones."),
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      icon: <CalculatorIcon className="text-primary" />,
      features: [
        t("services.items.accounting.features.0", "Registros contables actualizados"),
        t("services.items.accounting.features.1", "Balances mensuales y anuales"),
        t("services.items.accounting.features.2", "Conciliaciones bancarias")
      ],
      delay: 0.1,
      href: "contabilidad-corporativa"
    },
    {
      title: t("services.items.tax.title", "Asesoría Fiscal"),
      description: t("services.items.tax.description", "Optimizamos tu carga tributaria dentro del marco legal, asegurando el cumplimiento de todas tus obligaciones fiscales."),
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      icon: <FileText className="text-primary" />,
      features: [
        t("services.items.tax.features.0", "Declaraciones de impuestos"),
        t("services.items.tax.features.1", "Planificación fiscal estratégica"),
        t("services.items.tax.features.2", "Representación ante autoridades fiscales")
      ],
      delay: 0.2,
      href: "asesoria-fiscal"
    },
    {
      title: t("services.items.consulting.title", "Consultoría Empresarial"),
      description: t("services.items.consulting.description", "Asesoramos en la toma de decisiones estratégicas y en la implementación de mejores prácticas para optimizar la rentabilidad de tu negocio."),
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      icon: <Lightbulb className="text-primary" />,
      features: [
        t("services.items.consulting.features.0", "Análisis financiero y de costos"),
        t("services.items.consulting.features.1", "Proyecciones y presupuestos"),
        t("services.items.consulting.features.2", "Optimización de procesos internos")
      ],
      delay: 0.3,
      href: "consultoria-empresarial"
    },
    {
      title: t("services.items.payroll.title", "Gestión de Nómina"),
      description: t("services.items.payroll.description", "Administramos la nómina de tu empresa, garantizando el cumplimiento de las obligaciones laborales y optimizando los procesos."),
      image: "https://images.unsplash.com/photo-1554224155-1696413565d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      icon: <Users className="text-primary" />,
      features: [
        t("services.items.payroll.features.0", "Cálculo de salarios y retenciones"),
        t("services.items.payroll.features.1", "Gestión de beneficios sociales"),
        t("services.items.payroll.features.2", "Cumplimiento de normativas laborales")
      ],
      delay: 0.4,
      href: "gestion-nomina"
    },
    {
      title: t("services.items.audit.title", "Auditoría Interna"),
      description: t("services.items.audit.description", "Realizamos auditorías para identificar áreas de mejora, evaluar los controles internos y asegurar la integridad de la información financiera."),
      image: "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      icon: <Search className="text-primary" />,
      features: [
        t("services.items.audit.features.0", "Revisión de estados financieros"),
        t("services.items.audit.features.1", "Evaluación de riesgos"),
        t("services.items.audit.features.2", "Recomendaciones de mejora")
      ],
      delay: 0.5,
      href: "auditoria-financiera"
    },
    {
      title: t("services.items.planning.title", "Planificación Financiera"),
      description: t("services.items.planning.description", "Desarrollamos estrategias financieras personalizadas para maximizar el rendimiento y asegurar el crecimiento sostenible de tu empresa."),
      image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      icon: <PieChart className="text-primary" />,
      features: [
        t("services.items.planning.features.0", "Análisis financiero detallado"),
        t("services.items.planning.features.1", "Proyecciones y presupuestos"),
        t("services.items.planning.features.2", "Estrategias de financiamiento")
      ],
      delay: 0.6,
      href: "#contacto"
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-white to-accent">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {t("services.title", "Nuestros Servicios")}
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("services.description", "Ofrecemos soluciones integrales para la gestión contable, fiscal y financiera de tu empresa, adaptadas a tus necesidades específicas.")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}