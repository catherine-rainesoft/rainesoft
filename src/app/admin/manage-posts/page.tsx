"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

type BlogPost = {
  id: string;
  title: string;
};

export default function ManagePosts() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase.from("blog").select("id, title");
      if (!error && data) setBlogs(data);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="p-8 max-w-3xl mx-auto pt-[7rem]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Blog Posts</h1>
        <Link href="/admin/create-post" className="bg-blue-500 text-white px-4 py-2 rounded">
          Create New
        </Link>
      </div>
      <ul className="space-y-4">
        {blogs.map((blog) => (
          <li key={blog.id} className="border p-4 rounded shadow-sm flex justify-between items-center">
            <span>{blog.title}</span>
            <Link
              href={`/admin/edit-post/${blog.id}`}
              className="text-blue-600 hover:underline"
            >
              Edit
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
