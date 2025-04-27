"use client";

import Link from "next/link";
import Image from "next/image";


type SocialIconProps = {
  src: string;
  alt: string;
  href?: string; // make link optional
};

export default function SocialIcon({ src, alt, href }: SocialIconProps) {
  const Wrapper = href ? Link : "div";

  return (
    <Wrapper
      href={href as string}
      target={href?.startsWith("http") ? "_blank" : undefined}
      className="w-10 h-10 rounded-full bg-[#6dc1fc] flex items-center justify-center shadow hover:scale-105 transition-transform cursor-pointer"
    >
      <Image src={src} alt={alt} width={20}
              height={5}/>
    </Wrapper>
  );
}
