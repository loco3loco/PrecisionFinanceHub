import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

const FAQItem = ({ question, answer, index }: FAQItemProps) => {
  const { ref, isVisible } = useScrollAnimation();
  const delay = index * 0.1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="mb-6 last:mb-0"
    >
      <Accordion type="single" collapsible>
        <AccordionItem value={`item-${index}`} className="border-none">
          <AccordionTrigger className="bg-accent hover:bg-accent/80 transition-colors font-heading font-medium p-4 rounded-lg text-left">
            {question}
          </AccordionTrigger>
          <AccordionContent className="bg-white p-4 rounded-b-lg shadow-sm text-gray-600">
            {answer}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.div>
  );
};

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation();

  const faqs = [
    {
      question: "¿Qué servicios contables ofrecen para pequeñas empresas?",
      answer:
        "Ofrecemos una amplia gama de servicios contables adaptados a las necesidades de las pequeñas empresas, incluyendo registros contables, preparación de estados financieros, conciliaciones bancarias, gestión de nómina, declaraciones de impuestos y asesoramiento fiscal. Nuestro enfoque es personalizado, brindando soluciones que se ajusten al tamaño y sector de tu negocio.",
    },
    {
      question: "¿Cómo me ayuda Solutumsa a optimizar mi carga fiscal?",
      answer:
        "Nuestro equipo de expertos fiscales analiza en detalle la situación de tu empresa para identificar oportunidades de optimización fiscal legítimas. Desarrollamos estrategias personalizadas que aprovechan los incentivos y deducciones disponibles, asegurando siempre el cumplimiento de la normativa vigente. Nuestro objetivo es minimizar tu carga tributaria mientras mantenemos tu empresa en total conformidad con las leyes fiscales.",
    },
    {
      question: "¿Con qué frecuencia recibiré informes financieros?",
      answer:
        "La frecuencia de los informes financieros se establece según las necesidades específicas de cada cliente. Por defecto, proporcionamos informes mensuales que incluyen estados financieros básicos, análisis de flujo de caja y comparativas con períodos anteriores. También ofrecemos informes trimestrales más detallados y un análisis anual completo. Podemos personalizar tanto la frecuencia como el contenido de los informes según los requerimientos de tu empresa.",
    },
    {
      question: "¿Cómo garantizan la confidencialidad de mi información?",
      answer:
        "La confidencialidad es una prioridad absoluta en Solutumsa. Implementamos estrictos protocolos de seguridad y utilizamos sistemas con encriptación avanzada para proteger toda la información de nuestros clientes. Todo nuestro personal firma acuerdos de confidencialidad, y limitamos el acceso a la información sensible solo al personal que trabaja directamente con tu cuenta. Además, cumplimos con todas las regulaciones de protección de datos aplicables.",
    },
    {
      question: "¿Qué hace diferente a Solutumsa de otros estudios contables?",
      answer:
        "Lo que distingue a Solutumsa es nuestro enfoque integral y personalizado. Con más de 50 años de experiencia, combinamos conocimiento profundo con un servicio cercano y accesible. No solo nos limitamos a cumplir con las obligaciones contables y fiscales, sino que nos convertimos en verdaderos socios estratégicos de tu negocio, identificando oportunidades de mejora y acompañándote en la toma de decisiones. Nuestro equipo multidisciplinario ofrece soluciones completas adaptadas a las necesidades específicas de cada cliente.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Preguntas Frecuentes</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Respondemos a las dudas más comunes sobre nuestros servicios y cómo podemos ayudar a tu
            empresa.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
