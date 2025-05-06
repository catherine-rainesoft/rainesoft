"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import SingleBlog from "@/app/blog/SingleBlog";
import BlogList from "@/Components/BlogList";
import { supabase } from "@/lib/supabaseClient";
import Hero from "@/Components/Hero";
import Link from "next/link";

export type BlogPost = {
  id: string;
  title: string;
  content: string;
  cover_image: string;
  tags: string[] | string;
};

export default function Page() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase.from("blog").select("*");
      if (error) {
        console.error("Error fetching blogs:", error.message);
      } else {
        setBlogs(data as BlogPost[]);
        if (data && data.length > 0) {
          setSelectedBlog(data[0]);
        }
      }
    };
    fetchBlogs();
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col">
        <Hero
          backgroundImage="https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//Rectangle%2048.png"
          content={
            <div className="flex flex-col items-center gap-[3rem]">
              <h1 className="text-5xl font-bold">
                Insights & <span className="text-[#6dc1fc]">Ideas</span>
              </h1>
              <span>
                Explore our latest thoughts on cloud, software, data, and
                innovation.
              </span>
             
                <Link
                  href="/login"
                  className="px-4 py-2 border border-[#6DC1FC] rounded-lg text-white hover:text-black hover:bg-[#6DC1FC] transition"
                >
                  Log In
                </Link>
              
            </div>
          }
        />
        <div className="bg-white flex flex-col gap-2 items-center py-15">
          <h2 className="text-5xl font-bold text-black">
            <span className="text-[#6dc1fc]">Our </span>Blog
          </h2>
          <div className="lg:flex">
            <div className="w-full md:w-2/3">
              {selectedBlog && <SingleBlog blog={selectedBlog} />}
            </div>
            <div className="w-full md:w-1/3">
              <BlogList blogs={blogs} onSelectBlogAction={setSelectedBlog} />
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
