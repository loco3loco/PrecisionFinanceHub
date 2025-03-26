import { Building, Shield, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

function CountUp({ target, prefix = "" }: { target: number; prefix?: string }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <span ref={ref}>
      {isVisible ? `${prefix}${target}` : "0"}
    </span>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const StatCard = ({ icon, title, description, delay }: StatCardProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="bg-accent rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-bold text-primary mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default function WhyChooseUs() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const stats = [
    {
      title: "Confianza garantizada",
      description: "Satisfacción del cliente al 98%",
      icon: <Shield className="text-2xl text-primary" />,
      delay: 0
    },
    {
      title: "+100 empresas",
      description: "Confían en nuestros servicios",
      icon: <Building className="text-2xl text-primary" />,
      delay: 0.2
    },
    {
      title: "+800 colaboradores",
      description: "Gestionados con excelencia y dedicación",
      icon: <Users className="text-2xl text-primary" />,
      delay: 0.4
    }
  ];

  return (
    <section className="pt-20 pb-16 bg-white relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">¿Por Qué Solutumsa?</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones contables y fiscales integrales con un enfoque personalizado para
            cada negocio, respaldados por décadas de experiencia y un equipo de profesionales
            dedicados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}