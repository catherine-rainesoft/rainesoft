import React, { ReactNode } from "react";

interface HeroProps {
  content: ReactNode;
  backgroundImage?: string;
}

const Hero = ({ content, backgroundImage }: HeroProps) => {
  return (
    <div
    className="hero__container min-h-screen w-full bg-cover bg-center flex items-center"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="w-full max-w-7xl mx-auto px-[2rem]">
      <div className="hero__content">{content}</div>
    </div>
  </div>
  
  );
};

export default Hero;
