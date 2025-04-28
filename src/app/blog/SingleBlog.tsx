"use client";

import React, { useState } from "react";
import Image from "next/image"; 
import Comments from "@/Components/Comment";
import { motion } from 'framer-motion';

type BlogPost = {
  id: string;
  title: string;
  content: string;
  cover_image: string;
  tags: string[] | string;
};

export default function SingleBlog({ blog }: { blog: BlogPost }) {
  const [showAll, setShowAll] = useState(false);

  return (
    <div >
      <motion.section
        key={blog.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="p-8 max-w-4xl mx-auto bg-white flex flex-col"
        id="Blog-post"
      >
        <Image
          src={blog.cover_image}
          alt={blog.title}
          width={1200} 
          height={480} 
          className="w-full h-72 object-cover rounded-xl"
        />
        <h1 className="mt-6 text-3xl font-bold text-black">{blog.title}</h1>
        <div className="mt-4 flex flex-wrap gap-2">
          {(Array.isArray(blog.tags) ? blog.tags : blog.tags?.split(","))
            .map((tag) => tag.trim())
            .filter((tag) => tag.length > 0)
            .filter((value, index, self) => self.indexOf(value) === index)
            .map((tag, index) => (
              <span
                key={`${tag}-${index}`} 
                className="text-xs border border-[#6dc1fc] hover:shadow-md cursor-pointer text-black px-2 py-1 rounded"
              >
                #{tag}
              </span>
            ))}
        </div>

        <div className="mt-6 text-gray-700 leading-relaxed text-lg whitespace-pre-line">
          {showAll ? blog.content : blog.content.slice(0, 300) + "..."}
        </div>

        {blog.content.length > 300 && (
          <div className="flex justify-center lg:justify-end">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="hover:shadow-md border border-[#6dc1fc] p-2 text-black mr-0 mt-4 rounded "
            >
              {showAll ? "See Less" : "See All"}
            </button>
          </div>
        )}
      </motion.section>

      <div className="h-0.5 bg-gray-300 my-[5rem] mx-8"></div>

      <Comments />
    </div>
  );
}
