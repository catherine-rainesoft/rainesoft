// // src/Components/Footer.tsx
import Socials from "@/Components/Socials";
import Image from "next/image";


export default function Footer() {
  return (
    <footer
      className="bg-cover bg-center text-white py-[3rem] px-7"
      style={{ backgroundImage: "url('/footer.png')" }}
    >
      <div className="flex flex-col gap-3 container mx-auto">
        {/* Top */}
        <div className="grid lg:grid-cols-4 gap-[3rem]">
          {/* Info */}
          <div className="flex flex-col gap-5 items-start w-[70%]">
            <div>
              <Image src="/assets/Logo.svg" alt="Logo" width={150}
              height={50}/>
            </div>
            <span className="">
              Rainesoft helps teams optimize cloud costs, build smart apps, and
              harness data for better decisions.
            </span>
             <div className="flex gap-3 ">
              <Socials src="https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//phone.png" alt="Call" href="tel:+233242772885"/>
              <Socials src="https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//message.png" alt="Mail" href="mailto:david@rainesoft.com" />
              <Socials src="https://ktezlusdkqlfdwqrldtn.supabase.co/storage/v1/object/public/web-images//linkedin.png" alt="LinkedIn" href="https://linkedin.com/company/rainesoft-solutions" />
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3 lg:gap-7 items-start">
            <span className="font-bold">Company</span>
            <a href ="#About-Us"  className="text-gray-300 hover:text-white scroll-smooth">About Us</a>
            <a href ="#Our-Services"  className="text-gray-300 hover:text-white">Our Services</a>
            <a href ="#Blog"  className="text-gray-300 hover:text-white">Blog</a>
            <a href ="#Contacts"  className="text-gray-300 hover:text-white"> Contact Us</a>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-3 lg:gap-7 items-start">
            <span className="font-bold">Our Services</span>
            <a href ="/services"  className="text-gray-300 hover:text-white">Cloud Computing(FinOps)</a>
            <a href ="/services"  className="text-gray-300 hover:text-white">Software Development</a>
            <a href ="/services"  className="text-gray-300 hover:text-white">Data Analysis & Dashboards</a>
            <a href ="/services"  className="text-gray-300 hover:text-white">R & D in Trading Systems</a>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3 lg:gap-7 items-start">
            <span className="font-bold">Get In Touch</span>
            <span  className="text-gray-300 hover:text-white">Accra, Ghana</span>
            <a href="tel:+233242772885"  className="text-gray-300 hover:text-white">+233 (0) 24 277 2885</a>
            <a href="mailto:david@rainesoft.com"  className="text-gray-300 hover:text-white">david@rainesoft.com</a>
          </div>
        </div>
        {/* Bar */}
        <div className="h-px bg-[#D9D9D9] w-full my-6" />
        {/* Copyright */}
        <div className="text-sm">© 2025 Rainesoft. All rights reserved.</div>
      </div>
    </footer>
  );
}
