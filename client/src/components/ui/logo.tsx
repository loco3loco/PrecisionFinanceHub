
import React from "react";

interface LogoProps {
  variant?: "default" | "white" | "primary";
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({ 
  variant = "default", 
  className = "", 
  width = 200, 
  height = 80 
}: LogoProps) {
  // Usamos la nueva imagen del logo y aplicamos el filtro solo si es variante blanca
  // Verificamos si estamos en desarrollo o producción
  const logoUrl = variant === "white" 
    ? "https://res.cloudinary.com/djzcbeezb/image/upload/v1682701234/solutumsa-logo-white.png" 
    : "https://raw.githubusercontent.com/user-content/solutumsa/main/logo.png";
    
  return (
    <div 
      className={`${className} flex items-center justify-center`}
      style={{ width, height }}
    >
      {/* Primera opción: imagen local */}
      <img 
        src="/assets/logo-solutumsa.png" 
        alt="Solutum S.A."
        className={`w-full h-full object-contain ${variant === "white" ? "brightness-0 invert" : ""}`}
        width={width}
        height={height}
        onError={(e) => {
          // Si la imagen local falla, usamos la imagen de respaldo
          const target = e.target as HTMLImageElement;
          target.onerror = null; // Prevenir bucle infinito
          target.src = logoUrl;
        }}
      />
    </div>
  );
}

export default Logo;
