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
                <h3 className="text-xl font-bold mb-3">Financial Accounting</h3>
                <p className="text-gray-600 mb-4">
                  We keep your accounting books in order, prepare accurate financial statements
                  and ensure compliance with all regulations.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Daily transaction recording</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Preparation of balance sheets and income statements</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Bank reconciliations</span>
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
                <h3 className="text-xl font-bold mb-3">Financial Analysis</h3>
                <p className="text-gray-600 mb-4">
                  We interpret your financial data to provide valuable information
                  that supports strategic decision-making.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Profitability and liquidity analysis</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Financial projections</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Customized reports for executives</span>
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
                <h3 className="text-xl font-bold mb-3">Tax Planning</h3>
                <p className="text-gray-600 mb-4">
                  We develop legal tax strategies that minimize your tax burden
                  and ensure regulatory compliance.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Tax structure optimization</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Preparation and filing of tax returns</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Preventive audits</span>
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
                <h3 className="text-xl font-bold mb-3">Cost Control</h3>
                <p className="text-gray-600 mb-4">
                  We implement efficient systems for cost tracking and control
                  that help improve your company's profitability.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Department cost analysis</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Budgeting and monitoring</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Identification of improvement areas</span>
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
                <h3 className="text-xl font-bold mb-3">Regulatory Accounting</h3>
                <p className="text-gray-600 mb-4">
                  We ensure your company complies with all accounting requirements
                  specific to your industry and jurisdiction.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Adaptation to regulatory changes</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Specific reports for regulators</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Advice on accounting regulations</span>
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
                <h3 className="text-xl font-bold mb-3">Risk Prevention</h3>
                <p className="text-gray-600 mb-4">
                  We identify and mitigate potential financial and accounting risks
                  before they affect your company.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Internal controls evaluation</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Early detection of irregularities</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span>Implementation of security systems</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology that ensures the success of our accounting services. Each step is carefully designed to deliver optimal results.
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
              <h3 className="text-xl font-bold mt-4 mb-3">Diagnosis</h3>
              <p className="text-gray-600">
                We evaluate your company's current financial and accounting situation to identify areas for improvement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-6 text-center relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
              <h3 className="text-xl font-bold mt-4 mb-3">Planning</h3>
              <p className="text-gray-600">
                We design a customized action plan that addresses the specific needs of your business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl shadow-md p-6 text-center relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
              <h3 className="text-xl font-bold mt-4 mb-3">Implementation</h3>
              <p className="text-gray-600">
                We execute the agreed accounting solutions, optimizing processes and systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-xl shadow-md p-6 text-center relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
              <h3 className="text-xl font-bold mt-4 mb-3">Monitoring</h3>
              <p className="text-gray-600">
                We continuously monitor results and make adjustments to ensure long-term success.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Our Service</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              By entrusting your corporate accounting to Solutumsa, you will gain competitive advantages
              that will drive your company's growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border border-gray-200 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-3">Time and Resource Savings</h3>
              <p className="text-gray-600">
                By outsourcing your accounting, your team can focus on the core activities
                of your business while our experts handle financial management.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border border-gray-200 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-3">Error Reduction</h3>
              <p className="text-gray-600">
                Our meticulous procedures and multiple levels of review
                minimize the risk of accounting errors that could prove costly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border border-gray-200 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-3">Access to Specialized Expertise</h3>
              <p className="text-gray-600">
                You'll have a team of professionals with specialized knowledge
                in various sectors and areas of accounting.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border border-gray-200 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-3">Updated Financial Information</h3>
              <p className="text-gray-600">
                You'll have access to accurate and up-to-date financial reports that
                will allow you to make strategic decisions with confidence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="border border-gray-200 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600">
                We stay updated on changes in regulations to
                ensure your company meets all legal obligations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisibleSection3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="border border-gray-200 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-3">Scalability</h3>
              <p className="text-gray-600">
                Our services adapt to your company's growth,
                providing the necessary solutions at each stage of your development.
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
              {t("service_pages.corporate_accounting.cta.title", "Ready to Optimize Your Corporate Accounting?")}
            </h2>
            <p className="text-xl mb-8">
              {t("service_pages.corporate_accounting.cta.description", "Take the first step towards financial excellence. Our team of experts is ready to assist you.")}
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <a href="#contacto">
                {t("service_pages.corporate_accounting.cta.button", "Contact Us Today")}
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