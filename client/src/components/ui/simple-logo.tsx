import React from "react";

interface SimpleLogoProps {
  variant?: "default" | "white";
  className?: string;
  width?: number;
  height?: number;
}

export default function SimpleLogo({ 
  variant = "default", 
  className = "", 
  width = 180, 
  height = 70 
}: SimpleLogoProps) {
  // Usar la imagen apropiada según la variante
  const logoSrc = variant === "white" 
    ? "/assets/new-logo-solutumsa-white.png" 
    : "/assets/new-logo-solutumsa.png";
  
  return (
    <img
      src={logoSrc}
      alt="Solutum S.A."
      width={width}
      height={height}
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
}