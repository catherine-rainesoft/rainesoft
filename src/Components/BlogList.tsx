'use client'

import { useState, useRef } from 'react'
import Image from "next/image";
import { BlogPost } from '@/app/blog/page'; 


type BlogListProps = {
  blogs: BlogPost[];
  onSelectBlogAction: (blog: BlogPost) => void;
};

export default function BlogList({ blogs, onSelectBlogAction }: BlogListProps) {
  const [showAll, setShowAll] = useState(false);
  
  const visibleBlogs = showAll ? blogs : blogs.slice(0, 2);

  const scrollToTop = () => {
    if (window.innerWidth <= 768) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const sectionRef = document.querySelector("section");
      if (sectionRef) {
        sectionRef.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="p-8 flex flex-col gap-[3rem] bg-white">
      <h2 className="font-bold text-4xl text-black">Latest Posts</h2>

      <div className="grid gap-6">
        {visibleBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white border border-[#6dc1fc] rounded-xl shadow-2xl overflow-hidden cursor-pointer"
            onClick={() => onSelectBlogAction(blog)}
          >
            <Image
              src={blog.cover_image}
              alt={blog.title}
              width={500}
              height={200}
              className="w-full h-48 object-cover p-4"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-black">{blog.title}</h2>

              <button
                onClick={scrollToTop}
                className="text-black rounded text-sm mt-2 hover:shadow-md border border-[#6dc1fc] p-2 w-full"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {blogs.length > 3 && (
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="hover:shadow-md rounded border border-[#6dc1fc] p-2 text-black self-center"
        >
          {showAll ? "See Less" : "See All"}
        </button>
      )}

      <div className="flex flex-col gap-[3rem] border border-[#6dc1fc] p-8 rounded">
        <h2 className="text-black">Categories</h2>
        <div className="text-gray-600 flex flex-col gap-[2rem]">
          <span>Software Development</span>
          <span>Cloud Computing</span>
          <span>Data Analysis</span>
          <span>Trading</span>
        </div>
      </div>
    </section>
  );
}
