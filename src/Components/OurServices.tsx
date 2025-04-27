import ServiceCard from "@/Components/ServiceCard";

const services = [
  {
    icon: "/icons/cloud.png",
    title: "Cloud Consulting ",
    description:
      "We help businesses optimize their cloud usage and reduce costs.",
  },
  {
    icon: "/icons/Tools.png",
    title: "Software Development",
    description:
      "We build scalable, user-friendly business applications tailored to your goals.",
  },
  {
    icon: "/icons/Analysis.png",
    title: "Data Analytics & BI",
    description:
      "We design business intelligence dashboards and analytics tools that make data easy to understand and act on.",
  },
  {
    icon: "/icons/trading.png",
    title: "Trading Systems",
    description:
      "We're exploring AI-powered algorithmic trading and next-gen cloud solutions.",
  },
];

const OurServices = () => (
  <section className="px-4 py-10 space-y-6">    
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4  mx-auto ">
      {services.map((service, idx) => (
        <ServiceCard key={idx} {...service} variant="blue" />
      ))}
    </div>
  </section>
);



export default OurServices;
