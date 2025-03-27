
import React from "react";

interface LogoProps {
  variant?: "default" | "white";
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({ 
  variant = "default", 
  className = "", 
  width = 180, 
  height = 70 
}: LogoProps) {
  // Utilizar el logo original para la versión normal
  // Para la versión blanca, aplicamos un filtro CSS
  const isWhite = variant === "white";
  
  return (
    <img 
      src="/assets/logo-simple.svg"
      alt="Solutum S.A." 
      className={`${className} ${isWhite ? "brightness-0 invert" : ""}`}
      width={width}
      height={height}
      style={{ objectFit: "contain" }}
    />
  );
}

export default Logo;
