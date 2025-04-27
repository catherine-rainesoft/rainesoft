"use client";

import Link from "next/link";

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
      <img src={src} alt={alt} className="w-5 h-5" />
    </Wrapper>
  );
}
