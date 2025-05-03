"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function EditPost() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [tags, setTags] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase.from("blog").select("*").eq("id", id).single();
      if (data) {
        setTitle(data.title);
        setContent(data.content);
        setCoverImage(data.cover_image);
        setTags(data.tags.join(", "));
      }
      if (error) {
        alert("Error loading post: " + error.message);
      }
    };
    fetchPost();
  }, [id]);

  const handleUpdate = async () => {
    const { error } = await supabase
      .from("blog")
      .update({
        title,
        content,
        cover_image: coverImage,
        tags: tags.split(",").map((t) => t.trim()),
      })
      .eq("id", id);

    if (error) {
      alert("Update failed: " + error.message);
    } else {
      alert("Post updated!");
      router.push("/admin/manage-posts");
    }
  };

  const handleDelete = async () => {
    const confirmation = confirm("Are you sure you want to delete this blog post?");
    if (confirmation) {
      setIsDeleting(true);
      const { error } = await supabase.from("blog").delete().eq("id", id);

      if (error) {
        alert("Error deleting post: " + error.message);
        setIsDeleting(false);
      } else {
        alert("Post deleted!");
        router.push("/admin/manage-posts");
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 pt-[7rem]">
      <h1 className="text-2xl font-bold mb-4">Edit Blog Post</h1>
      
      {/* Title */}
      <input
        className="w-full border p-2 mb-4 rounded"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      
      {/* Content */}
      <textarea
        className="w-full border p-2 mb-4 rounded h-40"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      
      {/* Cover Image URL */}
      <input
        className="w-full border p-2 mb-4 rounded"
        placeholder="Cover Image URL"
        value={coverImage}
        onChange={(e) => setCoverImage(e.target.value)}
      />
      
      {/* Tags */}
      <input
        className="w-full border p-2 mb-4 rounded"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      
      {/* Save Button */}
      <button onClick={handleUpdate} className="bg-blue-500 text-white py-2 px-4 rounded mb-4">
        Save Changes
      </button>
      
      {/* Delete Button */}
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white py-2 px-4 rounded"
        disabled={isDeleting}
      >
        {isDeleting ? "Deleting..." : "Delete Post"}
      </button>
    </div>
  );
}
