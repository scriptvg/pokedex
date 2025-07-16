import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useRouteLoading = (duration = 300) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [location.pathname, duration]);

  return isLoading;
}; 
