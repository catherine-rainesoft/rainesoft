import React from "react";
import Image from "next/image";

interface BlogCardProps {
  cover_image: string;
  title: string;
  content: string;
  published_at: string;
  read_time: string;
  tags: string[];
}

const BlogCard: React.FC<BlogCardProps> = ({
  cover_image,
  title,
  content,
  published_at,
  read_time,
  tags,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-md">
      <Image src={cover_image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{content}</p>
        <div className="flex items-center justify-between text-gray-400 text-xs mb-3">
          <span>{published_at}</span>
          <span>{read_time}</span>
        </div>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
