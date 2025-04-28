"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";


export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-nunito ${
        scrolled ? "bg-black shadow-lg" : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto text-white">
        <Link href="/">
          <Image
            src={
              scrolled
                ? "https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//Frame%207%20(1).png"
                : "/assets/Logo.svg"
            }
            alt="Logo" 
            width={140}
              height={50}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-[#6DC1FC] transition ${
                pathname === link.href ? "font-semibold text-[#6DC1FC]" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex gap-3">
          <Link
            href="/login"
            className="px-4 py-2 border border-[#6DC1FC] rounded-lg text-white hover:text-black hover:bg-[#6DC1FC] transition"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 bg-[#6DC1FC] border text-black rounded-lg hover:bg-transparent hover:text-white hover:border-[#6DC1FC] transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-[100%] left-0 w-full transition-all duration-300 z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 pb-4 space-y-3 bg-white shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block text-gray-700 hover:text-blue-600 transition ${
                pathname === link.href ? "font-semibold text-blue-600" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex flex-col gap-2 mt-4">
            <Link
              href="/login"
              className="block px-4 py-2 border border-[#6DC1FC] rounded-lg text-black text-center hover:bg-blue-50 transition"
              onClick={() => setMenuOpen(false)}
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="block px-4 py-2 bg-[#6DC1FC] text-black rounded-lg text-center hover:bg-blue-700 transition"
              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
