import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";

export default function Map() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="h-96 w-full bg-gray-200 relative"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8360759342935!2d-58.38622384907531!3d-34.60393198045809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac630121623%3A0x53386f2ac88991a9!2sAv.%20Corrientes%201200%2C%20C1043AAZ%20CABA%2C%20Argentina!5e0!3m2!1sen!2sus!4v1624482026600!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        className="absolute inset-0"
        title="Ubicación de Solutumsa"
      ></iframe>
    </motion.div>
  );
}
