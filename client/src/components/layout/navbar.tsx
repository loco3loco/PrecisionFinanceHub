import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import Logo from "@/components/ui/logo"; // Added import for Logo component


// Definición de tipos para nuestros menús
type SubMenuItem = {
  name: string;
  href: string;
};

type MenuItem = {
  name: string;
  href: string;
  submenu?: SubMenuItem[];
};

export default function Navbar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);
  const toggleMobileServices = () => setMobileServicesOpen(!mobileServicesOpen);

  // Creamos el array de menú de forma dinámica usando las traducciones
  const menuItems = [
    { name: t("nav.home"), href: "#inicio" },
    {
      name: t("nav.services"),
      href: "#servicios",
      submenu: [
        { name: t("services.corporate_accounting"), href: "/servicios/contabilidad-corporativa" },
        { name: t("services.tax_advisory"), href: "/servicios/asesoria-fiscal" },
        { name: t("services.business_consulting"), href: "/servicios/consultoria-empresarial" },
        { name: t("services.financial_audit"), href: "/servicios/auditoria-financiera" },
        { name: t("services.payroll_management"), href: "/servicios/gestion-nomina" },
        { name: t("services.accounting_tech"), href: "/servicios/tecnologia-contable" }
      ]
    },
    { name: t("nav.about"), href: "#nosotros" },
    { name: t("nav.contact"), href: "#contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const navbar = document.getElementById('navbar-menu');
      if (navbar && !navbar.contains(target)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-lg py-2" 
          : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center cursor-pointer group">
              <div className="hover:opacity-90 transition-opacity">
                <Logo width={180} height={70} />
              </div>
            </div>
          </Link>

          <nav id="navbar-menu" className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => {
              if (item.submenu) {
                return (
                  <div key={item.name} className="relative">
                    <button 
                      className="flex items-center font-heading font-medium hover:text-primary transition-colors py-2 focus:outline-none"
                      onClick={toggleServices}
                      onMouseEnter={() => setServicesOpen(true)}
                    >
                      {item.name}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-1 w-72 py-2 bg-white rounded-md shadow-xl z-20"
                          onMouseLeave={() => setServicesOpen(false)}
                        >
                          {item.submenu.map((subItem) => (
                            <Link 
                              key={subItem.name} 
                              href={subItem.href}
                              onClick={() => setServicesOpen(false)}
                            >
                              <div className="px-4 py-3 text-sm hover:bg-gray-50 cursor-pointer transition-colors">
                                {subItem.name}
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <a
                  key={item.name}
                  href={item.href.startsWith('#') ? `/${item.href}` : item.href}
                  onClick={(e) => {
                    if (item.href.startsWith('#')) {
                      e.preventDefault();
                      const isHome = window.location.pathname === '/';
                      if (!isHome) {
                        window.location.href = `/${item.href}`;
                      } else {
                        document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  className="font-heading font-medium hover:text-primary transition-colors py-2"
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher />

            <Button
              variant="secondary"
              className="bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
              size="sm"
              asChild
            >
              <a href="https://wa.me/5491112345678">
                <MessageCircle className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">{t("common.whatsapp")}</span>
              </a>
            </Button>

            <button
              className="md:hidden text-primary focus:outline-none hover:text-primary/80 transition-colors"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white px-4 py-3 shadow-lg"
          >
            <div className="flex justify-end mb-2">
              <LanguageSwitcher />
            </div>
            <div className="flex flex-col space-y-1">
              {menuItems.map((item) => {
                if (item.submenu) {
                  return (
                    <div key={item.name} className="py-2">
                      <button
                        className="flex items-center w-full text-left font-heading font-medium py-2 hover:text-primary transition-colors"
                        onClick={toggleMobileServices}
                      >
                        {item.name}
                        <ChevronDown className={`ml-auto h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 mt-1 border-l-2 border-gray-100"
                          >
                            {item.submenu.map((subItem) => (
                              <Link 
                                key={subItem.name} 
                                href={subItem.href}
                                onClick={() => {
                                  setMobileServicesOpen(false);
                                  setIsMenuOpen(false);
                                }}
                              >
                                <div className="py-2 text-sm hover:text-primary cursor-pointer transition-colors">
                                  {subItem.name}
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-heading font-medium py-3 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}