"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"

type Comment = {
  id: string
  full_name: string
  comment: string
  created_at: string
}

const CommentList = ({ blogId }: { blogId: string }) => {
  const [comments, setComments] = useState<Comment[]>([])

  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("blog_id", blogId)
        .order("created_at", { ascending: false })

      if (error) console.error("Error fetching comments:", error.message)
      else setComments(data as Comment[])
    }

    fetchComments()
  }, [blogId])

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-black mb-4">Comments</h2>
      {comments.length === 0 ? (
        <p className="text-gray-500">No comments yet.</p>
      ) : (
        <ul className="space-y-4">
          {comments.map((c) => (
            <li key={c.id} className="border p-4 rounded">
              <p className="text-sm font-semibold text-black">{c.full_name}</p>
              <p className="text-gray-700 mt-1">{c.comment}</p>
              <span className="text-xs text-gray-400">{new Date(c.created_at).toLocaleString()}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CommentList
