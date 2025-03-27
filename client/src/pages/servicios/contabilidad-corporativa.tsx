import { useEffect } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { motion } from "framer-motion";
import { ArrowRight, FileDigit, BarChart, DollarSign, LineChart, Landmark, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import BackToTop from "@/components/ui/back-to-top";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export default function ContabilidadCorporativa() {
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
    t('service_pages.corporate_accounting.why_choose_us_items.0'),
    t('service_pages.corporate_accounting.why_choose_us_items.1'),
    t('service_pages.corporate_accounting.why_choose_us_items.2'),
    t('service_pages.corporate_accounting.why_choose_us_items.3')
  ];

  return (
    <>
      <Helmet>
        <title>{t('service_pages.corporate_accounting.title')} | Solutumsa</title>
        <meta name="description" content={t('service_pages.corporate_accounting.meta_description')} />
        <meta name="keywords" content={t('service_pages.corporate_accounting.meta_keywords')} />
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
                {t('service_pages.corporate_accounting.title')}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-600 mb-8"
              >
                {t('service_pages.corporate_accounting.subtitle')}
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
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80" 
                  alt={t('service_pages.corporate_accounting.title')} 
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('service_pages.corporate_accounting.main_services_title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('service_pages.corporate_accounting.main_services_description')}
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
                  <FileDigit className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Contabilidad Financiera</h3>
                <p className="text-gray-600 mb-4">
                  Mantenemos sus libros contables en orden, preparamos estados financieros
                  precisos y garantizamos el cumplimiento de todas las regulaciones.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Registro de transacciones diarias</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Elaboración de balances y estados de resultados</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Conciliaciones bancarias</span>
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
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Análisis Financiero</h3>
                <p className="text-gray-600 mb-4">
                  Interpretamos sus datos financieros para proporcionar información
                  valiosa que apoye la toma de decisiones estratégicas.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Análisis de rentabilidad y liquidez</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Proyecciones financieras</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Reportes personalizados para directivos</span>
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
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Planificación Fiscal</h3>
                <p className="text-gray-600 mb-4">
                  Desarrollamos estrategias fiscales legales que minimizan su carga
                  tributaria y aseguran el cumplimiento normativo.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Optimización de la estructura fiscal</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Preparación y presentación de declaraciones</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Auditorías preventivas</span>
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
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Control de Costos</h3>
                <p className="text-gray-600 mb-4">
                  Implementamos sistemas eficientes para el seguimiento y control de costos
                  que ayudan a mejorar la rentabilidad de su empresa.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Análisis de costos por departamentos</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Presupuestos y seguimiento</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Identificación de áreas de mejora</span>
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
                  <Landmark className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Contabilidad Regulatoria</h3>
                <p className="text-gray-600 mb-4">
                  Aseguramos que su empresa cumpla con todos los requisitos contables
                  específicos de su industria y jurisdicción.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Adaptación a cambios normativos</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Informes específicos para reguladores</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Asesoría en normativa contable</span>
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
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Prevención de Riesgos</h3>
                <p className="text-gray-600 mb-4">
                  Identificamos y mitigamos posibles riesgos financieros y contables
                  antes de que afecten a su empresa.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Evaluación de controles internos</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Detección temprana de irregularidades</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Implementación de sistemas de seguridad</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo */}
      <section ref={refSection2} className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisibleSection2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('service_pages.corporate_accounting.work_process_title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('service_pages.corporate_accounting.work_process_description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl shadow-md p-6 text-center relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
              <h3 className="text-xl font-bold mt-4 mb-3">Diagnóstico</h3>
              <p className="text-gray-600">
                Evaluamos la situación financiera y contable actual de su empresa para identificar áreas de mejora.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-6 text-center relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
              <h3 className="text-xl font-bold mt-4 mb-3">Planificación</h3>
              <p className="text-gray-600">
                Diseñamos un plan de acción personalizado que aborda las necesidades específicas de su negocio.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl shadow-md p-6 text-center relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
              <h3 className="text-xl font-bold mt-4 mb-3">Implementación</h3>
              <p className="text-gray-600">
                Ejecutamos las soluciones contables acordadas, optimizando procesos y sistemas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-xl shadow-md p-6 text-center relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
              <h3 className="text-xl font-bold mt-4 mb-3">Seguimiento</h3>
              <p className="text-gray-600">
                Monitoreamos continuamente los resultados y hacemos ajustes para garantizar el éxito a largo plazo.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section ref={refSection3} className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisibleSection3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Beneficios de Nuestro Servicio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Al confiar su contabilidad corporativa a Solutumsa, obtendrá ventajas competitivas
              que impulsarán el crecimiento de su empresa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border border-gray-200 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-3">Ahorro de Tiempo y Recursos</h3>
              <p className="text-gray-600">
                Externalizando su contabilidad, su equipo podrá enfocarse en las actividades
                clave de su negocio mientras nuestros expertos se encargan de la gestión financiera.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border border-gray-200 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-3">Reducción de Errores</h3>
              <p className="text-gray-600">
                Nuestros procedimientos meticulosos y múltiples niveles de revisión
                minimizan el riesgo de errores contables que podrían resultar costosos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border border-gray-200 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-3">Acceso a Experiencia Especializada</h3>
              <p className="text-gray-600">
                Contará con un equipo de profesionales con conocimientos especializados
                en diversos sectores y áreas de la contabilidad.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border border-gray-200 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-3">Información Financiera Actualizada</h3>
              <p className="text-gray-600">
                Tendrá acceso a informes financieros precisos y actualizados que le
                permitirán tomar decisiones estratégicas con confianza.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="border border-gray-200 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-3">Cumplimiento Normativo</h3>
              <p className="text-gray-600">
                Nos mantenemos actualizados sobre cambios en las regulaciones para
                asegurar que su empresa cumpla con todas las obligaciones legales.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="border border-gray-200 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-3">Escalabilidad</h3>
              <p className="text-gray-600">
                Nuestros servicios se adaptan al crecimiento de su empresa,
                proporcionando las soluciones necesarias en cada etapa de su desarrollo.
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
              {t('service_pages.corporate_accounting.cta_title')}
            </h2>
            <p className="text-xl mb-8">
              {t('service_pages.corporate_accounting.cta_description')}
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <a href="#contacto">
                {t('service_pages.corporate_accounting.cta_button')}
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