"use client";

import Image from "next/image";
import Link from "next/link";

interface ContactCardProps {
  icon: string;
  title: string;
  description: string;
  href?: string;
}

export default function ContactCard({ icon, title, description, href }: ContactCardProps) {
  const Wrapper = href ? Link : "div";

  return (
    <Wrapper
      href={href as string}
      target={href?.startsWith("http") ? "_blank" : undefined}
      className="flex"
    >
      <div className="flex items-center gap-4 p-4 border border-blue-300 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-transform duration-300 w-full cursor-pointer">
        <div className="w-12 h-12 bg-blue-300 rounded-full flex items-center justify-center">
          <Image src={icon} alt={title} width={24} height={24} />
        </div>
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </Wrapper>
  );
}
