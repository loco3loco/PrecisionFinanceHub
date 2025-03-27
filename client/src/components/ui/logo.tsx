
interface LogoProps {
  variant?: "default" | "footer";
  size?: "sm" | "default" | "lg";
}

export function Logo({ 
  variant = "default", 
  size = "default" 
}: LogoProps) {
  const dimensions = {
    sm: { width: 120, height: 48 },
    default: { width: 180, height: 70 },
    lg: { width: 250, height: 100 },
  };

  const { width, height } = dimensions[size];
  const isFooter = variant === "footer";
  
  return (
    <a href="/" aria-label="Solutum S.A.">
      <div 
        className={`flex items-center justify-center`}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <img 
          src="/assets/logo-solutumsa-new.png" 
          alt="Solutum S.A." 
          className={`w-full h-full object-contain ${isFooter ? 'brightness-0 invert' : ''}`}
          width={width}
          height={height}
          onError={(e) => {
            // If image fails to load, try alternative path
            const target = e.target as HTMLImageElement;
            target.onerror = null; // Prevent infinite loop
            target.src = "/logo-solutumsa-new.png";
          }}
        />
      </div>
    </a>
  );
}

// Add default export
export default Logo;
