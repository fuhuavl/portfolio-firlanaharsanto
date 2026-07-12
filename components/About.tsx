import Image from "next/image";
import { RevealItem, RevealSection } from "@/components/ScrollReveal";

export function About() {
  return (
    <RevealSection id="about" className="mx-auto flex w-full max-w-[1440px] gap-[58px] px-[174px] pb-[122px] pt-[76px]">
      <RevealItem className="relative h-[405px] w-[500px] overflow-hidden rounded-[18px] shadow-[0_6px_22px_rgba(0,0,0,0.04)]">
        <Image
          src="/about.jpg"
          alt="About Firlana Harsanto"
          fill
          sizes="500px"
          className="object-cover"
        />
      </RevealItem>
      <RevealItem className="w-[458px] pt-[3px]">
        <h2 className="mb-[35px] text-[58px] font-black leading-none tracking-[0] text-[#232336]">
          About Me
        </h2>
        <p className="mb-[28px] text-[15px] font-medium leading-[1.42] text-[#333333]">
          Growth has always been my biggest motivation. I seek opportunities that push me beyond what I already know, allowing me to build new skills while solving real problems. I value persistence, collaboration, and thoughtful execution, and I strive to contribute work that creates lasting value for both people and organizations.
        </p>
        <p className="text-[15px] font-medium leading-[1.42] text-[#333333]">
          I believe the most valuable experiences come from taking on challenges that demand both creativity and perseverance. I enjoy working in dynamic environments where I can learn quickly, adapt to new situations, and contribute meaningful solutions.
        </p>
      </RevealItem>
    </RevealSection>
  );
}
