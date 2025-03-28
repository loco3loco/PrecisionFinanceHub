import { useEffect } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { motion } from "framer-motion";
import { ArrowRight, Calculator, Check, FileText, BarChart, Briefcase, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import BackToTop from "@/components/ui/back-to-top";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

// Este es un componente plantilla para páginas de servicios
// Para crear un nuevo servicio:
// 1. Duplica este archivo y renómbralo según el servicio
// 2. Reemplaza "service_key" con la clave del servicio en los archivos de traducción (ej: "tax_advisory")
// 3. Actualiza los iconos según sea necesario
// 4. Añade las traducciones correspondientes en /client/src/i18n/locales/es.json y en.json

export default function ServiceTemplate() {
  const { t } = useTranslation();
  const { ref: refSection1, isVisible: isVisibleSection1 } = useScrollAnimation();
  const { ref: refSection2, isVisible: isVisibleSection2 } = useScrollAnimation();
  const { ref: refSection3, isVisible: isVisibleSection3 } = useScrollAnimation();
  const { ref: refSection4, isVisible: isVisibleSection4 } = useScrollAnimation();

  // IMPORTANTE: Reemplaza "service_key" con la clave del servicio en los archivos de traducción
  const SERVICE_KEY = "service_key";

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Preparar elementos para "Por qué elegirnos" desde traducciones
  const whyChooseUsItems = [
    t(`service_pages.${SERVICE_KEY}.why_choose_us_items.0`),
    t(`service_pages.${SERVICE_KEY}.why_choose_us_items.1`),
    t(`service_pages.${SERVICE_KEY}.why_choose_us_items.2`),
    t(`service_pages.${SERVICE_KEY}.why_choose_us_items.3`)
  ];

  // Configuración de servicios con sus iconos
  const services = [
    {
      icon: <Calculator className="h-6 w-6 text-primary" />,
      serviceKey: "service1",
    },
    {
      icon: <Check className="h-6 w-6 text-primary" />,
      serviceKey: "service2",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      serviceKey: "service3",
    },
    {
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      serviceKey: "service4",
    },
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      serviceKey: "service5",
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      serviceKey: "service6",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t(`service_pages.${SERVICE_KEY}.title`)} | Solutumsa</title>
        <meta name="description" content={t(`service_pages.${SERVICE_KEY}.meta_description`)} />
        <meta name="keywords" content={t(`service_pages.${SERVICE_KEY}.meta_keywords`)} />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4"
              >
                {t(`service_pages.${SERVICE_KEY}.title`)}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-600 mb-8"
              >
                {t(`service_pages.${SERVICE_KEY}.subtitle`)}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <a href="#contacto">
                    {t('service_pages.common.request_service')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </div>
            <div className="md:w-5/12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                  alt={t(`service_pages.${SERVICE_KEY}.title`)} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{t('service_pages.common.why_choose_us')}</h3>
                  <ul className="space-y-2">
                    {whyChooseUsItems.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Principales */}
      <section ref={refSection1} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisibleSection1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t(`service_pages.${SERVICE_KEY}.main_services_title`)}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t(`service_pages.${SERVICE_KEY}.main_services_description`)}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisibleSection1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {t(`service_pages.${SERVICE_KEY}.services.${service.serviceKey}.title`)}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {t(`service_pages.${SERVICE_KEY}.services.${service.serviceKey}.description`)}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {[0, 1, 2].map((featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <span className="text-primary mr-2">•</span>
                        <span>
                          {t(`service_pages.${SERVICE_KEY}.services.${service.serviceKey}.features.${featureIndex}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section ref={refSection2} className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisibleSection2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t(`service_pages.${SERVICE_KEY}.approach_title`)}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t(`service_pages.${SERVICE_KEY}.approach_description`)}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1553484771-0a615f264d58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBsYW5uaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" 
                  alt="Preventive Approach" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{t(`service_pages.${SERVICE_KEY}.approach.preventive.title`)}</h3>
                <p className="text-gray-600">
                  {t(`service_pages.${SERVICE_KEY}.approach.preventive.description`)}
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>{t(`service_pages.${SERVICE_KEY}.approach.preventive.item1`)}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>{t(`service_pages.${SERVICE_KEY}.approach.preventive.item2`)}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>{t(`service_pages.${SERVICE_KEY}.approach.preventive.item3`)}</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN0cmF0ZWd5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" 
                  alt="Strategic Approach" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{t(`service_pages.${SERVICE_KEY}.approach.strategic.title`)}</h3>
                <p className="text-gray-600">
                  {t(`service_pages.${SERVICE_KEY}.approach.strategic.description`)}
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>{t(`service_pages.${SERVICE_KEY}.approach.strategic.item1`)}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>{t(`service_pages.${SERVICE_KEY}.approach.strategic.item2`)}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>{t(`service_pages.${SERVICE_KEY}.approach.strategic.item3`)}</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={refSection3} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisibleSection3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t(`service_pages.${SERVICE_KEY}.why_choose_us.title`)}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t(`service_pages.${SERVICE_KEY}.why_choose_us_description`)}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">50+</span>
              </div>
              <h3 className="text-lg font-bold mb-2">{t(`service_pages.${SERVICE_KEY}.why_choose_us.stat1.title`)}</h3>
              <p className="text-gray-600">
                {t(`service_pages.${SERVICE_KEY}.why_choose_us.stat1.description`)}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">100%</span>
              </div>
              <h3 className="text-lg font-bold mb-2">{t(`service_pages.${SERVICE_KEY}.why_choose_us.stat2.title`)}</h3>
              <p className="text-gray-600">
                {t(`service_pages.${SERVICE_KEY}.why_choose_us.stat2.description`)}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">24/7</span>
              </div>
              <h3 className="text-lg font-bold mb-2">{t(`service_pages.${SERVICE_KEY}.why_choose_us.stat3.title`)}</h3>
              <p className="text-gray-600">
                {t(`service_pages.${SERVICE_KEY}.why_choose_us.stat3.description`)}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">500+</span>
              </div>
              <h3 className="text-lg font-bold mb-2">{t(`service_pages.${SERVICE_KEY}.why_choose_us.stat4.title`)}</h3>
              <p className="text-gray-600">
                {t(`service_pages.${SERVICE_KEY}.why_choose_us.stat4.description`)}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={refSection4} className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisibleSection4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t(`service_pages.${SERVICE_KEY}.cta.title`)}
            </h2>
            <p className="text-xl mb-8">
              {t(`service_pages.${SERVICE_KEY}.cta.description`)}
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <a href="#contacto">
                {t(`service_pages.${SERVICE_KEY}.cta.button`)}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </>
  );
}