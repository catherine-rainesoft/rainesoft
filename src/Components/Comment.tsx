import React, { useState } from "react";

const PostComment = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    comment: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6  text-black">
        Leave a comment
      </h2>
      <p className="text-black text-[20px] mb-5">Share your thoughts on our posts</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-3">
        <div className="w-[50%]">
          <label
            htmlFor="fullName"
            className="block text-sm font-bold text-black"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border-2 border-[#6DC1FC] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6dc1fc]  placeholder:text-sm placeholder-[#0000001A] placeholder:text-center placeholder:font-bold"
            placeholder="Melanie"
          />
        </div>

        <div  className="w-[50%]">
          <label htmlFor="email" className="block text-sm font-bold text-black">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border-2 border-[#6DC1FC] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6dc1fc]  placeholder:text-sm placeholder-[#0000001A] placeholder:text-center placeholder:font-bold"
            placeholder="natalie@gmail.com"
          />
        </div>
        </div>

        <div>
          <label
            htmlFor="comment"
            className="block text-sm font-bold text-black"
          >
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full px-3 py-2 border-2 border-[#6DC1FC] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6dc1fc]  placeholder:text-sm placeholder-[#0000001A] placeholder:text-center placeholder:font-bold"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className=" text-black font-bold py-1 w-full lg:w-[40%] rounded-md hover:shadow-md border border-[#6dc1fc] hover:border-[#6dc1fc] transition-colors"
          >
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostComment;
