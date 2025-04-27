"use client";

import React, { useEffect } from "react";
import { createClient } from "@/lib/supabaseClient";
import Hero from "@/Components/Hero";
import ServiceCard from "@/Components/ServiceCard";
import { motion } from "framer-motion";
import Image from "next/image";

const Home = () => {
  useEffect(() => {
    const fetchBlogs = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.from("blog").select("*");

      if (error) {
        console.error("Error fetching blogs:", error.message);
      } else {
        console.log("Fetched blogs:", data);
      }
    };

    fetchBlogs();
  }, []);

  const serviceCards = [
    {
      icon: "/icons/cloud.png",
      title: "Cloud Computing (FinOps)",
      description: "Optimize cloud infrastructure for financial services",
    },
    {
      icon: "/icons/Tools.png",
      title: "Software Development",
      description: "Custom software solutions for businesses",
    },
    {
      icon: "/icons/Analysis.png",
      title: "Data Analysis",
      description: "Transform data into actionable insights",
    },
    {
      icon: "/icons/trading.png",
      title: "R&D in Trading Systems",
      description: "Research and development of advanced trading systems",
    },
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <section className="h-full font-nunito">
        <Hero
          backgroundImage="https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//Hero.png"
          content={
            <div className="flex flex-col items-center gap-[3rem]">
              <h1 className="text-5xl font-bold">
                Get to Know <span className="text-[#6dc1fc]">Rainesoft</span>
              </h1>
              <span>Driven by innovation. Focused on your growth.</span>
              <a
                href="/contact"
                className="border border-[#6DC1FC] px-3 py-2 rounded-md"
              >
                Let&apos;s Work Together
              </a>
            </div>
          }
        />

        {/* What we do */}
        <motion.section
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 30,
            damping: 12,
          }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="container mx-auto px-8 py-16 bg-white">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <Image
                  src="https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//software%20tester-bro.png"
                  alt="About Rainesoft"
                  width={9000}
                  height={50}
                />
              </div>

              <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold mb-6 text-black text-center">
                  <span className="text-[#6DC1FC]">Our</span> Story
                </h2>

                <p className="text-gray-700 lg:text-[20px]">
                  Founded in 2020, Rainesoft was born out of a vision to help
                  businesses harness the power of technology in smarter, more
                  cost-effective ways. What started as a small team of engineers
                  and cloud enthusiasts has grown into a dynamic company that
                  delivers cloud consulting, custom software solutions, and
                  data-driven insights to organizations around the world. Our
                  goal has always been simple — to build tools and systems that
                  not only solve problems, but also drive growth and innovation.
                  Whether it&apos;s helping companies reduce cloud costs through
                  FinOps, creating tailored business apps, or exploring
                  AI-powered trading systems, we bring clarity, efficiency, and
                  creativity to everything we do.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Our Services */}
        <div className="container mx-auto px-8 py-16 bg-white">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <p className="text-black text-4xl lg:text-5xl text-center font-bold">
                What <span className="text-[#6DC1FC]">We</span> Do
              </p>
              <Image
                src="https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//Server.png"
                alt="About Rainesoft"
                width={1000}
                height={5}
              />
            </div>

            <div className="lg:w-1/2 text-black">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceCards.map((service, idx) => (
                  <ServiceCard key={idx} {...service} variant="elevated" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div
          className="bg-fixed bg-center bg-cover flex flex-col px-8 py-16 gap-8 lg:gap-3"
          style={{
            backgroundImage:
              "url('https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//scroll.png')",
          }}
        >
          <p className="font-bold text-4xl lg:text-5xl text-center">
            Our Mission & Values
          </p>

          <div className="flex items-center justify-around">
            <div className="flex flex-col lg:gap-5 lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-3 lg:mb-6 text-white text-center">
                <span className="text-[#6DC1FC]">Our</span> Mission
              </h2>
              <p className="text-white lg:text-[20px]">
                Rainesoft empowers businesses with smart, scalable tech
                solutions—from custom software to cloud and data services. We&apos;re
                driven by innovation, simplicity, and a commitment to helping
                teams work smarter and grow faster.
              </p>
            </div>

            <div className="hidden lg:block w-1/2">
              <Image
                src="https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//mission.png"
                alt="Mission"
                width={1000}
                height={5}
              />
            </div>
          </div>

          <div className="flex items-center justify-around">
            <div className="hidden lg:block w-1/2">
              <Image
                src="https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//Vision.png"
                alt="Vision"
                width={1000}
                height={5}
              />
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-3xl lg:text-4xl font-bold lg:mb-6 text-white text-center">
                <span className="text-[#6DC1FC]">Our</span> Vision
              </h2>
              <div className="lg:text-[20px] flex gap-[5rem]">
                <div className="flex flex-col gap-5">
                  <span>Innovation</span>
                  <span>Integrity</span>
                  <span>User- Centric Design</span>
                </div>
                <div className="flex flex-col gap-5">
                  <span>Collaboration</span>
                  <span>Adaptability</span>
                  <span>Reliability</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="px-[2rem] py-16 bg-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black text-center">
            Stay In The <span className="text-[#6DC1FC]">Loop</span>
          </h2>

          <div className="flex items-center">
            <div className="">
              <p className="text-gray-600 lg:text-[20px]">
                Be the first to know what&apos;s happening in the world of
                technology, cloud solutions, software development, and data
                analytics. Our newsletter delivers curated insights, project
                highlights, tech tips, and behind-the-scenes updates straight to
                your inbox. Whether you&apos;re a tech enthusiast, business owner, or
                developer, we&apos;ve got something valuable for you—no fluff, just
                fresh perspectives and helpful content every month.
              </p>
            </div>

            <div className="hidden lg:block">
              <Image
                src="https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//Server.png"
                alt="About Rainesoft"
                width={3900}
                height={5}
              />
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default Home;

