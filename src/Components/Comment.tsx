"use client"

import React, { useState } from "react"
import { supabase } from "@/lib/supabaseClient"

const PostComment = ({ blogId }: { blogId: string }) => {
  const [formData, setFormData] = useState({ fullName: "", email: "", comment: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { error } = await supabase.from("comments").insert([
      {
        blog_id: blogId,
        full_name: formData.fullName,
        email: formData.email,
        comment: formData.comment,
      },
    ])

    if (error) {
      console.error("Error posting comment:", error.message)
    } else {
      alert("Comment posted!")
      setFormData({ fullName: "", email: "", comment: "" })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 space-y-4">
      <h2 className="text-2xl font-bold text-black">Leave a Comment</h2>
      <input
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full Name"
        required
        className="w-full border p-2 rounded border-[#6DC1FC]"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        type="email"
        placeholder="Email"
        required
        className="w-full border p-2 rounded border-[#6DC1FC]"
      />
      <textarea
        name="comment"
        value={formData.comment}
        onChange={handleChange}
        rows={4}
        placeholder="Comment"
        required
        className="w-full border text-black p-2 rounded border-[#6DC1FC]"
      />
      <button type="submit" className="border border-[#6DC1FC] text-black px-4 py-2 rounded hover:shadow-md">
        Submit
      </button>
    </form>
  )
}

export default PostComment
