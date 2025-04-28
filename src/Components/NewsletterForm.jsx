"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase
      .from("newsletter")
      .insert([{ email: email.trim() }]);

    setLoading(false);

    if (error) {
      console.error("Subscription error:", error.message);
      alert("Failed to subscribe. Please try again.");
    } else {
      console.log("Subscribed successfully:", data);
      alert("Thanks for subscribing!");
      setEmail("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full lg:max-w-md flex items-center border-2 border-[#6dc1fc] rounded-md overflow-hidden p-2"
    >
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Email Address"
        className="flex-1 px-4 py-2 focus:outline-none text-[#999999]"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-[#6dc1fc] text-white font-semibold rounded px-2 lg:px-6 py-2 hover:bg-blue-500 transition-all disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Subscribe"}
      </button>
    </form>
  );
}
