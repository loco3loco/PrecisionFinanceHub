
import React from "react";
import SimpleLogo from "./simple-logo";

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
  return (
    <SimpleLogo 
      variant={variant}
      className={className}
      width={width}
      height={height}
    />
  );
}

export default Logo;
