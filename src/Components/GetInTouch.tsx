import React, { useState } from "react";

const MessageUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
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
    <div className="lg:w-[35%] w-full" id="Get-In-Touch">
      <h2 className="text-3xl font-bold mb-6 text-center">Message Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
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


        <div>
          <label
            htmlFor="email"
            className="block text-sm font-bold text-black"
          >
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

        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-bold text-black"
          >
            Phone Number
          </label>
          <input
            type="phoneNumber"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border-2 border-[#6DC1FC] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6dc1fc]  placeholder:text-sm placeholder-[#0000001A] placeholder:text-center placeholder:font-bold"
            placeholder="Phone Number"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-bold text-black"
          >
            Subject
          </label>
          <input
            type="tel"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border-2 border-[#6DC1FC] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6dc1fc]  placeholder:text-sm placeholder-[#0000001A] placeholder:text-center placeholder:font-bold"
            placeholder="Subject"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-bold text-black"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
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
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageUs;
