import { CalculatorIcon, FileText, Lightbulb, Users, Search, PieChart } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

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
  const { ref, isVisible } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <a href={href} className="block">
        <div className="flex items-center mb-4">
          <div className="mr-4 text-primary">{icon}</div>
          <h3 className="text-xl font-heading font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <Check className="w-4 h-4 mr-2 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </a>
    </motion.div>
  );
};

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useTranslation();

  const services: ServiceProps[] = [
    {
      title: t("services.accounting.title"),
      description: "Comprehensive accounting services for your business",
      image: "/services/accounting.jpg",
      icon: <CalculatorIcon className="w-6 h-6" />,
      features: ["Bookkeeping", "Financial Statements", "Tax Preparation"],
      delay: 0.1,
      href: "/services/accounting"
    },
    {
      title: t("services.tax.title"),
      description: "Expert tax advisory services",
      image: "/services/tax.jpg",
      icon: <FileText className="w-6 h-6" />,
      features: ["Tax Planning", "Compliance", "Advisory"],
      delay: 0.2,
      href: "/services/tax"
    },
    {
      title: t("services.consulting.title"),
      description: "Strategic business consulting",
      image: "/services/consulting.jpg",
      icon: <Lightbulb className="w-6 h-6" />,
      features: ["Strategy", "Growth Planning", "Risk Management"],
      delay: 0.3,
      href: "/services/consulting"
    },
    {
      title: t("services.payroll.title"),
      description: "Complete payroll management",
      image: "/services/payroll.jpg",
      icon: <Users className="w-6 h-6" />,
      features: ["Payroll Processing", "Tax Filings", "Benefits"],
      delay: 0.4,
      href: "/services/payroll"
    },
    {
      title: t("services.audit.title"),
      description: "Comprehensive audit services",
      image: "/services/audit.jpg",
      icon: <Search className="w-6 h-6" />,
      features: ["Internal Audit", "Compliance", "Risk Assessment"],
      delay: 0.5,
      href: "/services/audit"
    },
    {
      title: t("services.financial.title"),
      description: "Financial planning and analysis",
      image: "/services/financial.jpg",
      icon: <PieChart className="w-6 h-6" />,
      features: ["Financial Planning", "Analysis", "Reporting"],
      delay: 0.6,
      href: "/services/financial"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-heading font-bold mb-4">{t("services.title")}</h2>
          <p className="text-xl text-gray-600">{t("services.subtitle")}</p>
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