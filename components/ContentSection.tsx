import Image from "next/image";
import { RevealItem, RevealSection } from "@/components/ScrollReveal";

export function ContentSection() {
  return (
    <RevealSection id="content" className="mx-auto flex w-full max-w-[1440px] items-center px-[172px] pb-[162px] max-md:gap-[30px] max-md:pb-[96px]">
      <RevealItem className="relative h-[470px] w-[625px] max-md:flex max-md:h-auto max-md:w-full max-md:flex-col max-md:gap-[18px]">
        <a
          href="https://www.instagram.com/reel/DXL9OppEzPg/?igsh=a3dpM3lqc2h6b2Q4"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-[-60px] top-[1px] h-[480px] w-[305px] cursor-pointer overflow-hidden rounded-[8px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition duration-300 hover:scale-[1.04] hover:brightness-110 max-md:relative max-md:left-auto max-md:top-auto max-md:h-auto max-md:w-full"
        >
          <Image
            src="/content-1-rev2.jpeg"
            alt="Content project 1"
            width={220}
            height={400}
            className="w-full h-auto object-contain"
          />
        </a>
        <a
          href="https://www.instagram.com/reel/DUaSDz3E5PN/?igsh=MTB2emRqZ2w3ZXhjbA=="
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-[263px] top-[65px] h-[298px] w-[151px] cursor-pointer overflow-hidden rounded-[7px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition duration-300 hover:scale-[1.04] hover:brightness-110 max-md:relative max-md:left-auto max-md:top-auto max-md:aspect-[151/298] max-md:h-auto max-md:w-full"
        >
          <Image
            src="/content-2-rev.jpeg"
            alt="Content project 2"
            fill
            sizes="151px"
            className="object-cover"
          />
        </a>
        <a
          href="https://youtube.com/shorts/Wz-e0k4x_uM?si=iXi5T53lX_ojltpt"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-[430px] top-0 h-[306px] w-[151px] cursor-pointer overflow-hidden rounded-[7px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition duration-300 hover:scale-[1.04] hover:brightness-110 max-md:relative max-md:left-auto max-md:top-auto max-md:aspect-[151/306] max-md:h-auto max-md:w-full"
        >
          <Image
            src="/content-3-rev.jpeg"
            alt="Content project 3"
            fill
            sizes="151px"
            className="object-cover"
          />
        </a>
      </RevealItem>
      <RevealItem className="ml-[90px] mt-[-3px] w-[405px] max-md:ml-0 max-md:mt-0 max-md:w-full">
        <h2 className="mb-[20px] text-[58px] font-black leading-none tracking-[0] text-[#232336]">
          Content
        </h2>
        <p className="mb-[44px] text-[14px] font-medium leading-[1.35] text-[#333333]">
          Experienced in developing content based on client and stakeholder briefs, with a strong focus on crafting multiple creative concepts and storyboard alternatives. Passionate about exploring and refining ideas through an iterative process to deliver engaging visual storytelling that effectively communicates the intended message and meets project objectives.
        </p>
        <a
  href="https://linktr.ee/portofrh2026"
  target="_blank"
  rel="noopener noreferrer"
  className="float-right inline-flex h-[40px] cursor-pointer items-center rounded-full bg-[#9d9d9d] px-[21px] text-[11px] font-bold text-white transition duration-300 hover:scale-[1.04] hover:brightness-110 max-md:h-[46px] max-md:float-none"
>
  Linktree
</a>
      </RevealItem>
    </RevealSection>
  );
}
