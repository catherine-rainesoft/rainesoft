'use client'; // Indicating client-side rendering for Next.js 13 and above
import React, { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabaseClient';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation

type BlogPost = {
  id: string;
  title: string;
  content: string;
  cover_image: string;
  tags: string[] | string;
};

export default function Blog() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const blogsPerPage = 3;

  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClient();
      setLoading(true);
      setError(null);

      const { data, error } = await supabase.from('blog').select('*');

      if (error) {
        setError(error.message);
        console.error('Error fetching blogs:', error.message);
      } else {
        setBlogs(data as BlogPost[]);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Function to handle page selection
  const handlePageSelect = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <motion.section
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 10,
        damping: 12,
      }}
      viewport={{ once: false, amount: 0.1 }}
    >
      <section className="p-8 flex gap-8">
        <div className="flex-1">
          {/* Loading state */}
          {loading && (
            <div className="text-center text-lg font-semibold text-gray-600">Loading...</div>
          )}

          {/* Error state */}
          {error && (
            <div className="text-center text-lg font-semibold text-red-600">{`Error: ${error}`}</div>
          )}

          {/* Blog List */}
          {!loading && !error && blogs.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {currentBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white rounded-xl shadow-2xl overflow-hidden cursor-pointer"
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
                    <p className="mt-2 text-sm text-gray-600">
                      {`${blog.content.slice(0, 100)}...`}
                    </p>
                    <Link
                      href="/blog"
                      className="text-[#6dc1fc] text-sm mt-2 hover:underline"
                    >
                      Read More
                    </Link>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {(Array.isArray(blog.tags) ? blog.tags : blog.tags?.split(','))?.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs border border-[#6dc1fc] hover:shadow-md cursor-pointer text-black px-2 py-1 rounded"
                        >
                          #{tag.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No blogs available */}
          {!loading && !error && blogs.length === 0 && (
            <div className="text-center text-lg font-semibold text-gray-600">
              No blogs available at the moment.
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && !loading && !error && (
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={() => handlePageSelect(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-2 rounded-full bg-[#6dc1fc] text-white text-xl ${
                  currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#58b0f8]'
                }`}
              >
                <IoIosArrowBack />
              </button>

              <span className="text-black font-medium">
                {currentPage} / {totalPages}
              </span>

              <button
                onClick={() => handlePageSelect(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-full bg-[#6dc1fc] text-white text-xl ${
                  currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#58b0f8]'
                }`}
              >
                <IoIosArrowForward />
              </button>
            </div>
          )}
        </div>
      </section>
    </motion.section>
  );
}
