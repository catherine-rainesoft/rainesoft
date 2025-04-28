import ServiceCard from "@/Components/ServiceCard";

const services = [
  {
    icon: "https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//Cloud.png",
    title: "Cloud Consulting ",
    description:
      "We help businesses optimize their cloud usage and reduce costs.",
  },
  {
    icon: "https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//Tools.png",
    title: "Software Development",
    description:
      "We build scalable, user-friendly business applications tailored to your goals.",
  },
  {
    icon: "https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//Analysis.png",
    title: "Data Analytics & BI",
    description:
      "We design business intelligence dashboards and analytics tools that make data easy to understand and act on.",
  },
  {
    icon: "https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//Trading.png",
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
