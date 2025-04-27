
export const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 3, y: 1 },
    exit: { opacity: 0, y: 40 },
    transition: { duration: 0.8 },
  };
  
  export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 },
  };
  
  export const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
    transition: { duration: 0.7 },
  };
  