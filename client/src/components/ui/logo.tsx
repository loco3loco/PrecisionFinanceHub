
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
  return (
    <div 
      className={`${className} flex items-center justify-center`}
      style={{ width, height }}
    >
      <img 
        src="/assets/logo-solutumsa-new.png" 
        alt="Solutum S.A." 
        className={`w-full h-full object-contain ${variant === "white" ? "brightness-0 invert" : ""}`}
        width={width}
        height={height}
      />
    </div>
  );
}

export default Logo;
