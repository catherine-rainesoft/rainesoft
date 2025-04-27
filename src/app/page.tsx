"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabaseClient";
import BlogCard from "@/Components/BlogCard";
import Hero from "@/Components/Hero";
import StatsSection from "@/Components/StatsSection";
import OurServices from "@/Components/OurServices";
import Blog from "@/Components/Blog";
import { motion } from "framer-motion";


const Home = () => {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.from("blog").select("*");

      if (error) {
        console.error("Error fetching blogs:", error.message);
      } else {
        console.log("Fetched blogs:", data);
        setBlogs(data);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}>
      <section className="h-full font-nunito">
      <Hero
        backgroundImage="/Home.png"
        content={
          <div className="lg:grid grid-cols-2 items-center px-6">
         
            <div className="pt-[6rem] lg:pt-0 flex flex-col gap-5 lg:gap-8">
              <span className="text-[#6DC1FC]">Rainesoft Solutions</span>
              <span className="text-lg lg:text-5xl font-bold">
                Cloud-First Business Solutions Built For Scale
              </span>
              <span className="text-gray-400">
                Rainesoft helps teams optimize cloud costs, build smart apps,
                and harness data for better decisions.
              </span>
              <div className="flex gap-5">
                <a
                  className="border border-[#6DC1FC] px-3 py-2 rounded-md"
                  href="/services"
                >
                  Our Services
                </a>
                <a
                  href="/contact"
                  className="border border-[#6DC1FC] px-3 py-2 rounded-md"
                >
                  Contact Us
                </a>
              </div>
            </div>
           
            <div>
              <img
                src="https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//Server.png"
                alt="Hero"
              />
            </div>
          </div>
        }
      />

   
      <div className="container mx-auto px-6 py-16 bg-white">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//company.png"
              alt="About Rainesoft"
              className="w-full h-auto"
            />
          </div>

          <div className="lg:w-1/2 flex flex-col items-center" id="About-Us">
            <h2 className="text-4xl font-bold mb-6 text-black">
              About <span className="text-[#6DC1FC]">Us</span>
            </h2>
            <h3 className="text-2xl font-semibold mb-4 text-black">
              At Rainesoft, we build smart tech that helps businesses grow.
            </h3>
            <p className="text-gray-600 mb-8">
              From cloud consulting to custom software and data insights — we've
              got you covered.
            </p>

      
            <StatsSection />

            <a
              href="/about"
              className="inline-flex items-center text-[#6DC1FC] font-medium text-lg mt-6 group"
            >
              More About Us
              <img
                src="/forward.png"
                alt="Next"
                className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-blue-600">
      
        <div
          className="bg-fixed bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//scroll.png')",
          }}
        >
      
          <motion.section
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: false, amount: 0.1 }}
           >
          <div className="px-6 py-16 text-center flex flex-col items-center gap-5 backdrop-brightness-75" id="Our-Services">
            <h2 className="text-4xl font-bold mb-6 text-white">
              <span className="text-[#6DC1FC]">Our</span> Services
            </h2>
            <span className="text-white">
              At Rainesoft, we help businesses thrive with tailored tech
              solutions — from optimizing cloud costs and building custom
              software to unlocking insights through data and exploring next-gen
              trading systems.
            </span>
            <OurServices />
            <a
              href="/services"
              className="inline-flex items-center text-[#6DC1FC] font-medium text-lg mt-6 group"
            >
              More About What We Do
              <img
                src="/forward.png"
                alt="Next"
                className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
          </motion.section>

          {/* Blog */}
         <motion.section 
        >
         <div className="bg-gray-100 py-16 px-4" id="Blog">
            <h2 className="text-4xl font-bold mb-10 text-center text-black">
              <span className="text-[#6DC1FC]">Our</span> Blog
            </h2>
            <Blog />
          </div>
         </motion.section>

          {/* Contact */}
          <motion.section initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true, amount: 0.3 }}>
          <div className="lg:flex items-center gap-5 px-6 py-16 text-white backdrop-brightness-75" id="Contacts">
            <div className="w-[70%]">
              <img
                src="https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//Mobile.png"
                alt="Contact"
              />
            </div>

            <div className="flex flex-col items-center gap-[5rem] mx-auto">
              <span className="text-3xl lg:text-6xl font-bold text-white">
                Let’s build something amazing together.
              </span>
              <a
                className="border border-[#6DC1FC] px-3 py-2 rounded-md"
                href="/contact"
              >
                Get Started Today
              </a>
            </div>
          </div>
          </motion.section>
        </div>
      </div>
    </section>
    </motion.section>
  );
};

export default Home;
