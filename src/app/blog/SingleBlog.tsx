"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";
import { motion } from "framer-motion";
import CommentList from "@/Components/CommentList";
import PostComment from "@/Components/Comment";

type Comment = {
  id: string;
  full_name: string;
  comment: string;
  created_at: string;
};

type BlogPost = {
  id: string;
  title: string;
  content: string;
  cover_image: string;
  tags: string[] | string;
};

export default function SingleBlog({ blog }: { blog: BlogPost }) {
  const [showAll, setShowAll] = useState(false);
  
  // Explicitly type the state as an array of `Comment` objects
  const [comments, setComments] = useState<Comment[]>([]);

  // Fetch comments when the component mounts or blog.id changes
  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("blog_id", blog.id)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching comments:", error.message);
      } else {
        // Ensure TypeScript understands that data is of type `Comment[]`
        setComments(data as Comment[]); 
      }
    };

    fetchComments();
  }, [blog.id]);

  return (
    <div>
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
              className="hover:shadow-md border border-[#6dc1fc] p-2 text-black mr-0 mt-4 rounded"
            >
              {showAll ? "See Less" : "See All"}
            </button>
          </div>
        )}
      </motion.section>

      <div className="h-0.5 bg-gray-300 my-[5rem] mx-8"></div>

      {/* Comments Section */}
      <div className="p-8">
        <h2 className="text-2xl font-bold text-black mb-4">Comments</h2>

        {/* Render list of comments */}
        {comments.length > 0 ? (
          <CommentList blogId={blog.id} />
        ) : (
          <p className="text-gray-500">No comments yet.</p>
        )}

        {/* Post a new comment */}
        <PostComment blogId={blog.id} />
      </div>
    </div>
  );
}
