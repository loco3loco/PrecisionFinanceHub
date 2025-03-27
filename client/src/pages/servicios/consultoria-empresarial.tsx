import { useEffect } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, LineChart, BrainCircuit, Target, BarChart4, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import BackToTop from "@/components/ui/back-to-top";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export default function ConsultoriaEmpresarial() {
  const { t } = useTranslation();
  const { ref: refSection1, isVisible: isVisibleSection1 } = useScrollAnimation();
  const { ref: refSection2, isVisible: isVisibleSection2 } = useScrollAnimation();
  const { ref: refSection3, isVisible: isVisibleSection3 } = useScrollAnimation();
  const { ref: refSection4, isVisible: isVisibleSection4 } = useScrollAnimation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whyChooseUsItems = [
    t('service_pages.business_consulting.why_choose_us_items.0'),
    t('service_pages.business_consulting.why_choose_us_items.1'),
    t('service_pages.business_consulting.why_choose_us_items.2'),
    t('service_pages.business_consulting.why_choose_us_items.3')
  ];

  return (
    <>
      <Helmet>
        <title>{t('service_pages.business_consulting.title')} | Solutumsa</title>
        <meta name="description" content={t('service_pages.business_consulting.meta_description')} />
        <meta name="keywords" content={t('service_pages.business_consulting.meta_keywords')} />
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
                {t('service_pages.business_consulting.title')}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-600 mb-8"
              >
                {t('service_pages.business_consulting.subtitle')}
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
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt={t('service_pages.business_consulting.title')} 
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('service_pages.business_consulting.main_services_title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('service_pages.business_consulting.main_services_description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Estrategia Empresarial</h3>
                <p className="text-gray-600 mb-4">
                  Desarrollamos planes estratégicos que definen la dirección de su
                  empresa y establecen las bases para un crecimiento sostenible.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Análisis del entorno competitivo</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Definición de visión y objetivos</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Planificación estratégica a largo plazo</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Mejora de Procesos</h3>
                <p className="text-gray-600 mb-4">
                  Optimizamos sus operaciones para aumentar la eficiencia,
                  reducir costos y mejorar la calidad.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Mapeo y rediseño de procesos</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Eliminación de ineficiencias</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Implementación de mejoras continuas</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Transformación Digital</h3>
                <p className="text-gray-600 mb-4">
                  Guiamos a su empresa en la adopción de tecnologías y cambios
                  culturales necesarios para la era digital.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Evaluación de madurez digital</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Implementación de soluciones tecnológicas</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Gestión del cambio organizacional</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Gestión Financiera</h3>
                <p className="text-gray-600 mb-4">
                  Mejoramos la salud financiera de su empresa con estrategias
                  para optimizar recursos y maximizar la rentabilidad.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Análisis financiero y presupuestario</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Optimización de costos</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Planificación de inversiones</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart4 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Desarrollo Organizacional</h3>
                <p className="text-gray-600 mb-4">
                  Fortalecemos la estructura y cultura de su organización para
                  mejorar el desempeño y la satisfacción del personal.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Diseño organizacional</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Desarrollo de liderazgo</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Gestión del talento</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Innovación Empresarial</h3>
                <p className="text-gray-600 mb-4">
                  Fomentamos la cultura de innovación para desarrollar nuevas
                  soluciones que diferencien su empresa en el mercado.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Metodologías de innovación</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Desarrollo de nuevos productos/servicios</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Gestión del conocimiento</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section ref={refSection2} className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisibleSection2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('service_pages.common.methodology')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('service_pages.business_consulting.approach_description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl shadow-md p-6 relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
              <h3 className="text-xl font-bold mt-4 mb-3 text-center">Diagnóstico</h3>
              <p className="text-gray-600">
                Analizamos en profundidad su empresa para identificar fortalezas,
                debilidades y oportunidades de mejora.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start text-sm">
                  <span className="text-primary mr-2">•</span>
                  <span>Análisis de la situación actual</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-primary mr-2">•</span>
                  <span>Entrevistas con stakeholders clave</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-primary mr-2">•</span>
                  <span>Benchmarking sectorial</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-6 relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
              <h3 className="text-xl font-bold mt-4 mb-3 text-center">Diseño de Soluciones</h3>
              <p className="text-gray-600">
                Desarrollamos estrategias y planes de acción personalizados
                para abordar los desafíos identificados.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start text-sm">
                  <span className="text-primary mr-2">•</span>
                  <span>Definición de objetivos</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-primary mr-2">•</span>
                  <span>Elaboración de estrategias</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-primary mr-2">•</span>
                  <span>Planificación detallada</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl shadow-md p-6 relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
              <h3 className="text-xl font-bold mt-4 mb-3 text-center">Implementación y Seguimiento</h3>
              <p className="text-gray-600">
                Acompañamos a su empresa en la ejecución de las soluciones y
                monitorizamos los resultados para asegurar el éxito.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start text-sm">
                  <span className="text-primary mr-2">•</span>
                  <span>Ejecución de acciones</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-primary mr-2">•</span>
                  <span>Medición de resultados</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-primary mr-2">•</span>
                  <span>Ajustes y mejora continua</span>
                </li>
              </ul>
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
              {t('service_pages.business_consulting.cta_title')}
            </h2>
            <p className="text-xl mb-8">
              {t('service_pages.business_consulting.cta_description')}
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <a href="#contacto">
                {t('service_pages.business_consulting.cta_button')}
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