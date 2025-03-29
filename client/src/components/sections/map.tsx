
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function Map() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeLocation, setActiveLocation] = useState("montevideo");

  const locations = {
    montevideo: {
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.1517489851517!2d-56.1799473237915!3d-34.90634258145775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81cb648dde87%3A0xd5f7fb055e4bff00!2sSolutumsa!5e0!3m2!1ses!2suy!4v1743285058990!5m2!1ses!2suy",
      title: "Solutumsa - Oficina Montevideo"
    },
    atlantida: {
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.7069456444283!2d-55.758974!3d-34.7742232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a02ad7e67f90ff%3A0xf48c8af7b7937d2e!2sCalle%2026%20%26%20Calle%203%2C%2015200%20Atlantida%2C%20Departamento%20de%20Canelones!5e0!3m2!1ses!2suy!4v1687458922376!5m2!1ses!2suy",
      title: "Oficina Atlántida"
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
