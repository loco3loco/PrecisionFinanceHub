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
  const primaryColor = variant === "white" ? "#FFFFFF" : "#004C97";
  const secondaryColor = variant === "white" ? "#EEEEEE" : "#666666";
  
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 300 80"
      width={width}
      height={height}
      className={className}
    >
      {/* Círculo estilo logo */}
      <g transform="translate(10, 40) scale(0.25)">
        <circle cx="60" cy="0" r="50" fill={primaryColor} />
        <circle cx="60" cy="0" r="30" fill="white" />
      </g>
      
      {/* Texto del logo */}
      <text x="35" y="43" fontFamily="Arial" fontSize="30" fontWeight="bold" fill={primaryColor}>SOLUTUM S.A.</text>
      <text x="35" y="65" fontFamily="Arial" fontSize="16" fill={secondaryColor}>Soluciones Contables</text>
    </svg>
  );
}