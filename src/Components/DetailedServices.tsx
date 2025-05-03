import React from "react";
import Image from "next/image";

interface FeaturedServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeaturedServiceCard: React.FC<FeaturedServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div
      className="bg-[#6dc1fc] rounded-md shadow-lg w-full overflow-hidden  hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
      id="Details"
    >
      <div className="flex items-center p-4">
        <div className="bg-white rounded-full p-4 mr-4 flex items-center justify-center">
          <Image
            src={icon}
            alt={title}
            width={40}
            height={40}
            className="object-contain"
          />
        </div>

        <h3 className="text-xl lg:text-2xl font-bold text-black">{title}</h3>
      </div>

      <div className="pl-[3rem] pr-8 pb-8 pt-0 ">
        <div className="border-l-4 border-white pl-[3rem] lg:h-[6rem] flex items-center">
          <p className="text-black lg:text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

const DetailedServices: React.FC = () => {
  const services = [
    {
      icon: "https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//Cloud.png",
      title: "Cloud Consulting (FinOps)",
      description:
        "We help you manage cloud costs efficiently by applying FinOps practices — gaining visibility, optimizing usage, and reducing waste across platforms.",
    },
    {
      icon: "https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//Tools.png",
      title: "Software Development",
      description:
        "We build scalable web and business applications tailored to your workflow — from CRMs to internal tools and digital platforms.",
    },
    {
      icon: "https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//Analysis.png",
      title: "Data Analytics & Business Intelligence",
      description:
        "Transform your raw data into visual dashboards and insights to support smarter, data-driven decisions.",
    },
    {
      icon: "https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/blog-images//software.png",
      title: "AI-Powered Business Management Software",
      description:
        "Streamline your operations with intelligent, AI-driven tools designed to optimize workflows, automate tasks, and provide real-time insights for smarter business decisions.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="flex flex-col lg:gap-6">
        <h2 className="text-4xl lg:text-5xl text-black font-bold text-center">
          <span className="text-[#6DC1FC]">Our</span> Services
        </h2>

        <p className="text-center text-lg text-black mx-auto pt-5 mb-8">
          From strategy to execution, we deliver smart, scalable solutions
          tailored to your business goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, idx) => (
            <FeaturedServiceCard
              key={idx}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedServices;
