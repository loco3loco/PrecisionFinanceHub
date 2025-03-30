import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * Hook para manejar el desplazamiento automático a anclajes
 * cuando se accede a la página con un hash en la URL
 */
export default function useAnchorScroll() {
  const [location] = useLocation();

  useEffect(() => {
    // Función para manejar el desplazamiento a anclajes
    const handleAnchorScroll = () => {
      // Obtener el hash de la URL actual
      const hash = window.location.hash;
      
      if (hash) {
        // Esperar un momento para asegurar que todos los componentes estén cargados
        setTimeout(() => {
          // Intenta obtener el elemento tanto por selector como por ID
          const elementBySelector = document.querySelector(hash);
          const elementById = document.getElementById(hash.substring(1));
          
          const element = elementBySelector || elementById;
          
          if (element) {
            // Desplazar suavemente al elemento
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else if (location === '/') {
        // Si estamos en la página principal sin hash, volver al inicio
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    // Ejecutar cuando cambia la URL o el componente se monta
    handleAnchorScroll();

    // También escuchar los cambios de hash (por ejemplo, al hacer clic en enlaces internos)
    window.addEventListener('hashchange', handleAnchorScroll);
    
    // Limpiar el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('hashchange', handleAnchorScroll);
    };
  }, [location]); // Re-ejecutar cuando cambia la ubicación
}