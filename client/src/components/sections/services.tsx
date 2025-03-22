import { CalculatorIcon, FileText, Lightbulb, Users, Search, PieChart } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Check } from "lucide-react";

// Define service data structure
interface ServiceProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  features: string[];
  delay: number;
}

// Service Card Component
const ServiceCard = ({ title, description, image, icon, features, delay }: ServiceProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="service-card bg-white rounded-lg overflow-hidden shadow-md"
    >
      <div className="h-48 overflow-hidden relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <span className="text-white font-medium">Ver más detalles</span>
        </div>
      </div>
      <div className="p-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-heading font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="mb-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <Check className="text-secondary mr-2 h-4 w-4" />
              {feature}
            </li>
          ))}
        </ul>
        <a
          href="#contacto"
          className="inline-block text-primary font-medium hover:text-secondary transition-colors"
        >
          Solicitar información <span aria-hidden="true">→</span>
        </a>
      </div>
    </motion.div>
  );
};

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();

  // Services data
  const services: ServiceProps[] = [
    {
      title: "Servicio Contable",
      description:
        "Mantenemos tus libros contables al día, cumpliendo con todas las normativas vigentes y generando informes precisos para la toma de decisiones.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      icon: <CalculatorIcon className="text-primary" />,
      features: [
        "Registros contables actualizados",
        "Balances mensuales y anuales",
        "Conciliaciones bancarias",
      ],
      delay: 0.1,
    },
    {
      title: "Asesoría Fiscal",
      description:
        "Optimizamos tu carga tributaria dentro del marco legal, asegurando el cumplimiento de todas tus obligaciones fiscales.",
      image:
        "https://images.unsplash.com/photo-1586486855514-8c633cc6fd29?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      icon: <FileText className="text-primary" />,
      features: [
        "Declaraciones de impuestos",
        "Planificación fiscal estratégica",
        "Representación ante autoridades fiscales",
      ],
      delay: 0.2,
    },
    {
      title: "Consultoría Empresarial",
      description:
        "Asesoramos en la toma de decisiones estratégicas y en la implementación de mejores prácticas para optimizar la rentabilidad de tu negocio.",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      icon: <Lightbulb className="text-primary" />,
      features: [
        "Análisis financiero y de costos",
        "Proyecciones y presupuestos",
        "Optimización de procesos internos",
      ],
      delay: 0.3,
    },
    {
      title: "Gestión de Nómina",
      description:
        "Administramos la nómina de tu empresa, garantizando el cumplimiento de las obligaciones laborales y optimizando los procesos.",
      image:
        "https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      icon: <Users className="text-primary" />,
      features: [
        "Cálculo de salarios y retenciones",
        "Gestión de beneficios sociales",
        "Cumplimiento de normativas laborales",
      ],
      delay: 0.4,
    },
    {
      title: "Auditoría Interna",
      description:
        "Realizamos auditorías para identificar áreas de mejora, evaluar los controles internos y asegurar la integridad de la información financiera.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      icon: <Search className="text-primary" />,
      features: [
        "Revisión de estados financieros",
        "Evaluación de riesgos",
        "Recomendaciones de mejora",
      ],
      delay: 0.5,
    },
    {
      title: "Planificación Financiera",
      description:
        "Desarrollamos estrategias financieras personalizadas para maximizar el crecimiento y la rentabilidad de tu empresa.",
      image:
        "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      icon: <PieChart className="text-primary" />,
      features: [
        "Proyecciones financieras",
        "Análisis de inversiones",
        "Estrategias de financiamiento",
      ],
      delay: 0.6,
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Nuestros Servicios</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales para la gestión contable, fiscal y financiera de tu
            empresa, adaptadas a tus necesidades específicas.
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
