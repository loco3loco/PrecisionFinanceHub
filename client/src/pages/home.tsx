import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Services from "@/components/sections/services";
import AboutUs from "@/components/sections/about-us";
import { useTranslation } from "react-i18next";

import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";
import Contact from "@/components/sections/contact";
import Map from "@/components/sections/map";
import BackToTop from "@/components/ui/back-to-top";

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("meta.home.title", "Solutumsa - Strategic Partners in Your Business Growth")}</title>
        <meta 
          name="description" 
          content={t("meta.home.description", "Solutumsa offers comprehensive accounting and tax solutions with over 50 years of experience. Experts in accounting, tax, and financial advisory for your business.")}
        />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <Services />
        <AboutUs />
        <FAQ />
        <CTA />
        <Contact />
        <Map />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
