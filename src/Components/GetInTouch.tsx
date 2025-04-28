import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const MessageUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("contact_messages").insert([
      {
        full_name: formData.fullName,
        email: formData.email,
        phone_number: formData.phoneNumber,
        subject: formData.subject,
        message: formData.message,
      },
    ]);

    if (error) {
      console.error("Error submitting message:", error.message || error);
    }
     else {
      setSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: "",
      });
    }

    setLoading(false);
  };

  return (
    <div className="lg:w-[35%] w-full" id="Get-In-Touch">
      <h2 className="text-3xl font-bold mb-6 text-center">Message Us</h2>

      {success && (
        <p className="text-[#6dc1fc] font-bold mb-4 text-center">
          Message sent successfully!
        </p>
      )}

<form onSubmit={handleSubmit} className="space-y-4">
  {/* Full Name */}
  <div>
    <label htmlFor="fullName" className="block text-sm font-bold text-black">
      Full Name
    </label>
    <input
      type="text"
      id="fullName"
      name="fullName"
      value={formData.fullName}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border-2 border-[#6DC1FC] rounded-md focus:ring-2 focus:ring-[#6DC1FC]"
      placeholder="Melanie"
      required
    />
  </div>

  {/* Email */}
  <div>
    <label htmlFor="email" className="block text-sm font-bold text-black">
      Email Address
    </label>
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border-2 border-[#6DC1FC] rounded-md focus:ring-2 focus:ring-[#6DC1FC]"
      placeholder="natalie@gmail.com"
      required
    />
  </div>

  {/* Phone Number */}
  <div>
    <label htmlFor="phoneNumber" className="block text-sm font-bold text-black">
      Phone Number
    </label>
    <input
      type="text"
      id="phoneNumber"
      name="phoneNumber"
      value={formData.phoneNumber}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border-2 border-[#6DC1FC] rounded-md focus:ring-2 focus:ring-[#6DC1FC]"
      placeholder="Phone Number"
    />
  </div>

  {/* Subject */}
  <div>
    <label htmlFor="subject" className="block text-sm font-bold text-black">
      Subject
    </label>
    <input
      type="text"
      id="subject"
      name="subject"
      value={formData.subject}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border-2 border-[#6DC1FC] rounded-md focus:ring-2 focus:ring-[#6DC1FC]"
      placeholder="Subject"
    />
  </div>

  {/* Message */}
  <div>
    <label htmlFor="message" className="block text-sm font-bold text-black">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      value={formData.message}
      onChange={handleChange}
      rows={4}
      className="mt-1 block w-full px-3 py-2 border-2 border-[#6DC1FC] rounded-md focus:ring-2 focus:ring-[#6DC1FC]"
      placeholder="Type your message..."
      required
    />
  </div>

  {/* Submit Button */}
  <div>
    <button
      type="submit"
      className="w-full  border-2 border-[#6DC1FC] text-black font-bold py-2 rounded-md hover:shadow-md transition-colors"
      disabled={loading}
    >
      {loading ? "Sending..." : "Send Message"}
    </button>
  </div>
</form>

    </div>
  );
};

export default MessageUs;
