'use client'

import { useState } from 'react'

type BlogPost = {
  id: string
  title: string
  content: string
  cover_image: string
  tags: string[] | string
}

export default function BlogList({ blogs, onSelectBlog }: { blogs: BlogPost[], onSelectBlog: (blog: BlogPost) => void }) {
  const [showAll, setShowAll] = useState(false) // Declare showAll state

  // Only show the first 3 blogs when not showing all
  const visibleBlogs = showAll ? blogs : blogs.slice(0, 2)

  return (
    <section className="p-8 flex flex-col gap-[3rem] bg-white">
      <h2 className="font-bold text-4xl text-black">Latest Posts</h2>

      <div className="grid gap-6">
        {visibleBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white border border-[#6dc1fc] rounded-xl shadow-2xl overflow-hidden cursor-pointer"
            onClick={() => onSelectBlog(blog)}
          >
            <img
              src={blog.cover_image}
              alt={blog.title}
              className="w-full h-48 object-cover p-4"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-black">{blog.title}</h2>

              <button
                className="text-black rounded text-sm mt-2 hover:shadow-md border border-[#6dc1fc] p-2 w-full"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* See All / See Less button */}
      {blogs.length > 3 && (
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="hover:shadow-md rounded border border-[#6dc1fc] p-2 text-black self-center"
        >
          {showAll ? 'See Less' : 'See All'}
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
  )
}
