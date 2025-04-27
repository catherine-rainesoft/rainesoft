"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { createClient } from "@/lib/supabaseClient";
import Hero from "@/Components/Hero";
import ContactCard from "@/Components/ContactCard";
import ContactUs from "@/Components/GetInTouch";
import Socials from "@/Components/Socials";
import Image from "next/image";  // Import Image for optimization

type Blog = {
  id: string;
  title: string;
  content: string;
  cover_image: string;
  tags: string[] | string;
};

const Home = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);  // Use Blog[] type

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
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}>
      <section className="h-full font-nunito">
        <Hero
          backgroundImage="https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//Frame%2073.png"
          content={
            <div className="flex flex-col items-center gap-[3rem]">
              <h1 className="text-5xl font-bold">
                Let’s Work <span className="text-[#6dc1fc]">Together</span>
              </h1>
              <span>
                Have a project in mind or just want to say hello? We&apos;d love to hear from you
              </span>
              <a
                href="#Get-In-Touch"
                className="border border-[#6DC1FC] px-3 py-2 rounded-md"
              >
                Let&apos;s Connect
              </a>
            </div>
          }
        />

        <div className="bg-white text-black px-6 py-16 flex flex-col items-center gap-[1rem] lg:gap-[3rem]">
          <h2 className="text-3xl lg:text-5xl font-bold">Get In Touch</h2>
          <p>
            Do you have a question? Do you need help choosing a service from us?
            Let&apos;s talk today.
          </p>

          <div className="flex flex-col md:flex-row w-full justify-around gap-6">
            <ContactCard
              icon="https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//message.png"
              title="Message Us"
              description="david@rainesoft.com"
              href="mailto:david@rainesoft.com"
            />
            <ContactCard
              icon="https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//phone.png"
              title="Call Us"
              description="+233 (0) 24 277 2885"
              href="tel:+233242772885"
            />
            <ContactCard
              icon="https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//linkedin.png"
              title="Stay Connected"
              description="rainesoft-solutions"
              href="https://linkedin.com/company/rainesoft-solutions"
            />
          </div>

          <div className="w-full flex flex-col lg:flex-row items-center justify-around gap-10 lg:gap-1">
            <ContactUs />
            <div className="flex flex-col items-center gap-3">
              <Image
                src="https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//support.png"
                alt="Support"
                className="h-[33rem]"
                width={500}
                height={400}
              />
              <div className="flex gap-3 ">
                <Socials src="https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//phone.png" alt="Call" href="tel:+233242772885"/>
                <Socials src="https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//message.png" alt="Mail" href="mailto:david@rainesoft.com" />
                <Socials src="https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//linkedin.png" alt="LinkedIn" href="https://linkedin.com/company/rainesoft-solutions" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default Home;
