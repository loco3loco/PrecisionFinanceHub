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
  // Color para el logo basado en la variante
  const color = variant === "white" ? "#FFFFFF" : "#004C97";
  const secondaryColor = variant === "white" ? "#EEEEEE" : "#666666";
  
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 300 100"
      width={width}
      height={height}
      className={className}
    >
      <text x="10" y="50" fontFamily="Arial" fontSize="30" fontWeight="bold" fill={color}>SOLUTUM S.A.</text>
      <text x="10" y="80" fontFamily="Arial" fontSize="20" fill={secondaryColor}>Soluciones Contables</text>
    </svg>
  );
}