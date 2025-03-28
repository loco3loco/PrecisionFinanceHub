import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Check, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();
  const { ref: badgeRef, isVisible: badgeVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, y: 20 }}
              animate={imageVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Solutumsa Team"
                  className="w-full h-auto"
                />
              </div>
              <motion.div
                ref={badgeRef}
                initial={{ opacity: 0, y: 20 }}
                animate={badgeVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-10 -right-10 bg-white rounded-lg shadow-lg p-6 max-w-xs"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-heading font-semibold text-gray-800">
                      {t("about.badge_title", "Certified Experience")}
                    </h3>
                    <p className="text-xs text-gray-600">
                      {t("about.badge_text", "+50 years serving the business sector")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 20 }}
            animate={contentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 md:pl-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              {t("about.title", "Conoce Nuestra Historia")} <span className="text-primary">{t("about.story", "Discover Our Story")}</span>
            </h2>
            <div className="w-20 h-1 bg-secondary mb-6"></div>
            <p className="text-gray-600 mb-6">
              {t("about.paragraph1", "At Solutumsa, we take pride in our track record of over 50 years providing excellent accounting and tax solutions. Since our beginnings, we have been committed to offering personalized, quality service, constantly adapting to changes in the business environment.")}
            </p>
            <p className="text-gray-600 mb-6">
              {t("about.paragraph2", "Our team consists of highly qualified professionals with extensive experience in different sectors and deep knowledge of current tax and accounting regulations.")}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <Check className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">{t("about.values.professionalism.title", "Professionalism")}</h3>
                  <p className="text-sm text-gray-600">{t("about.values.professionalism.description", "Highly qualified team")}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <Check className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">{t("about.values.trust.title", "Trust")}</h3>
                  <p className="text-sm text-gray-600">{t("about.values.trust.description", "Strong and lasting relationships")}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <Check className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">{t("about.values.innovation.title", "Innovation")}</h3>
                  <p className="text-sm text-gray-600">{t("about.values.innovation.description", "Future-proof solutions")}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <Check className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">{t("about.values.commitment.title", "Commitment")}</h3>
                  <p className="text-sm text-gray-600">{t("about.values.commitment.description", "Always at your service")}</p>
                </div>
              </div>
            </div>

            <Button
              asChild
              className="inline-flex items-center bg-primary text-white hover:bg-secondary transition-colors duration-300"
            >
              <a href="#contacto">{t("about.contact_button", "Contact Us Today")}</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}