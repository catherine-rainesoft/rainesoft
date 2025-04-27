import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  icon: string;
  title: string;
  description?: string;
  variant?: "default" | "blue" | "elevated";
}

const variants: { [key in NonNullable<ServiceCardProps["variant"]>]: string } = {
  default: "bg-white shadow-md",
  blue: "bg-[#6dc1fc] text-black border border-blue-300",
  elevated: "bg-white shadow-lg rounded-lg border border-gray-100"
};


const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  variant = "default",
}) => {
  const baseStyles = "flex flex-col gap-4 p-6 rounded-md transition-shadow duration-300";
  
  const iconDisplay = variant === "elevated" ? (
    <div className="bg-[#6dc1fc] rounded-full p-4 w-16 h-16 flex items-center justify-center mb-2">
      <Image src={icon} alt={title} width={36} height={36} className="object-contain" />
    </div>
  ) : (
    <div className="min-w-[40px] h-[40px]">
      <Image src={icon} alt={title} width={60} height={50} className="border border-white rounded-4xl p-[10] bg-white" />
    </div>
  );

  return (
    <div className={`${baseStyles} ${variants[variant]} hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 w-full ${variant === "elevated" ? "flex flex-col items-center text-center" : "flex items-center cursor-pointer gap-8"}`}>
      {iconDisplay}
      <div>
        <h3 className={`text-lg font-bold ${variant === "elevated" ? "mt-2" : ""}`}>{title}</h3>
        {description && <p className="text-sm mt-1 text-gray-600">{description}</p>}
      </div>
    </div>
  );
};

export default ServiceCard;