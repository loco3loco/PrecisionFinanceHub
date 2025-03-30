
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function Map() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeLocation, setActiveLocation] = useState("montevideo");

  const locations = {
    montevideo: {
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.1448396104447!2d-56.201100600000005!3d-34.906273599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81cbaa22b745%3A0x639d82d1d4bf974e!2sSolutum%20Estudio%20Contable!5e0!3m2!1ses!2suy!4v1743285781118!5m2!1ses!2suy",
      title: "Solutum Estudio Contable - Oficina Montevideo"
    },
    atlantida: {
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.379846770152!2d-55.76862591166866!3d-34.7712116964624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959ff5bf0f86611f%3A0x6eccc23c77c9451!2sSolutum%20Estudio%20Contable!5e0!3m2!1ses!2suy!4v1743286029061!5m2!1ses!2suy",
      title: "Solutum Estudio Contable - Oficina Atlantida"
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-gray-100 rounded-xl overflow-hidden shadow-sm"
    >
      <Tabs value={activeLocation} onValueChange={setActiveLocation} className="w-full">
        <div className="bg-white px-4 py-2">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="montevideo">Montevideo</TabsTrigger>
            <TabsTrigger value="atlantida">Atlántida</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="montevideo" className="h-96 w-full relative">
          <iframe
            src={locations.montevideo.url}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            className="absolute inset-0"
            title={locations.montevideo.title}
          ></iframe>
        </TabsContent>
        
        <TabsContent value="atlantida" className="h-96 w-full relative">
          <iframe
            src={locations.atlantida.url}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            className="absolute inset-0"
            title={locations.atlantida.title}
          ></iframe>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
