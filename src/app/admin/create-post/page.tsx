"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [tags, setTags] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    const { error } = await supabase.from("blog").insert([
      {
        title,
        content,
        cover_image: coverImage,
        tags: tags.split(",").map((t) => t.trim()),
      },
    ]);

    if (error) {
      alert("Error creating post: " + error.message);
    } else {
      alert("Post created successfully!");
      router.push("/admin/manage-posts");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 pt-[7rem]">
      <h1 className="text-2xl font-bold mb-4">Create New Blog Post</h1>
      <input
        className="w-full border p-2 mb-4 rounded"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full border p-2 mb-4 rounded h-40"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        className="w-full border p-2 mb-4 rounded"
        placeholder="Cover Image URL"
        value={coverImage}
        onChange={(e) => setCoverImage(e.target.value)}
      />
      <input
        className="w-full border p-2 mb-4 rounded"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <button onClick={handleSubmit} className="bg-green-500 text-white py-2 px-4 rounded">
        Publish
      </button>
    </div>
  );
}
