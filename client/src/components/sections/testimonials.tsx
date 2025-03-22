import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  avatar: string;
  delay: number;
}

const Testimonial = ({ content, author, role, avatar, delay }: TestimonialProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg p-8 shadow-md relative h-full"
    >
      <div className="absolute -top-5 left-8 text-6xl text-primary/10">
        <Quote size={48} />
      </div>
      <div className="text-gray-600 mb-6 relative z-10">
        <p>{content}</p>
      </div>
      <div className="flex items-center">
        <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
          <img src={avatar} alt={`${author} - ${role}`} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-heading font-semibold">{author}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  const testimonials: TestimonialProps[] = [
    {
      content:
        "Solutumsa ha sido un socio invaluable para nuestra empresa durante los últimos 5 años. Su asesoramiento fiscal nos ha permitido optimizar nuestra carga tributaria y su equipo siempre está disponible cuando lo necesitamos.",
      author: "María Rodríguez",
      role: "CEO, Innova Solutions",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      delay: 0,
    },
    {
      content:
        "Lo que más valoro de Solutumsa es su capacidad para explicar temas complejos de manera clara y sencilla. Han sido fundamentales en la toma de decisiones estratégicas para nuestra empresa.",
      author: "Carlos Méndez",
      role: "Director Financiero, TechPro",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg",
      delay: 0.2,
    },
    {
      content:
        "Desde que contratamos a Solutumsa, hemos experimentado una mejora significativa en nuestra gestión financiera. Su profesionalismo y dedicación son excepcionales.",
      author: "Laura González",
      role: "Gerente, Grupo Comercial LG",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      delay: 0.4,
    },
    {
      content:
        "La experiencia y conocimiento del equipo de Solutumsa nos ha permitido enfocar nuestros recursos en el crecimiento del negocio, sabiendo que nuestras finanzas están en buenas manos.",
      author: "Roberto Sánchez",
      role: "Fundador, RS Arquitectos",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      delay: 0.6,
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            El testimonio de nuestros clientes es la mejor prueba de nuestro compromiso con la
            excelencia y la satisfacción del cliente.
          </p>
        </motion.div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3 p-2">
                  <Testimonial {...testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
