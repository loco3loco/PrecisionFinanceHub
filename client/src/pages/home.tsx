import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Services from "@/components/sections/services";
import AboutUs from "@/components/sections/about-us";

import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";
import Contact from "@/components/sections/contact";
import Map from "@/components/sections/map";
import BackToTop from "@/components/ui/back-to-top";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Solutumsa - Socios Estratégicos en el Crecimiento de tu Empresa</title>
        <meta 
          name="description" 
          content="Solutumsa ofrece soluciones contables y fiscales integrales con más de 50 años de trayectoria. Expertos en asesoría contable, fiscal y financiera para tu empresa."
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
