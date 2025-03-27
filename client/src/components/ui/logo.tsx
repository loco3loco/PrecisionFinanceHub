
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
  // Para simplificar, cargaremos la imagen directamente desde public/assets
  // Cuando se necesite la versión blanca, usaremos un filtro CSS
  
  return (
    <div 
      className={`${className} ${variant === "white" ? "brightness-0 invert" : ""}`} 
      style={{ width, height }}
    >
      <img 
        src="/assets/logo-solutumsa.png" 
        alt="Solutum S.A." 
        width="100%" 
        height="100%"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}

export default Logo;
