import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation();

  return (
    <section
      id="inicio"
      className="pt-24 relative bg-gradient-to-r from-primary to-secondary text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <pattern
            id="grid-pattern"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="0.5"
            />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center relative z-10">
        {/* Text Content */}
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 20 }}
          animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
            {t("home.hero.title")}
          </h1>
          <p className="text-lg mb-8 opacity-90">
            {t("home.hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              asChild
              className="bg-white text-primary hover:bg-accent transition-colors duration-300"
            >
              <a href="#contacto">
                <Calendar className="mr-2 h-4 w-4" />
                {t("contact.title")}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent text-white border-white/50 hover:bg-white/10"
            >
              <a href="#servicios">
                <ArrowRight className="mr-2 h-4 w-4" />
                {t("home.hero.cta")}
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Image & Floating Card */}
        <div className="md:w-1/2 relative">
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, y: 20 }}
            animate={imageVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-lg overflow-hidden shadow-2xl relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Professional accounting team"
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 20 }}
            animate={cardVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -bottom-5 -left-5 bg-white rounded-lg shadow-lg p-4 max-w-xs"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-800">Confianza garantizada</h3>
                <p className="text-xs text-gray-500">Satisfacción del cliente al 98%</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom skewed white shape */}
      <div className="bg-white w-full h-20 absolute -bottom-10 left-0 right-0 transform skew-y-3"></div>
    </section>
  );
}
