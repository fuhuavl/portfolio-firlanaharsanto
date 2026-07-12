import Link from "next/link";
import { RevealArticle, RevealItem, RevealSection } from "@/components/ScrollReveal";

export function Videography() {
  return (
    <RevealSection id="videography" className="mx-auto w-full max-w-[1440px] px-[122px] pb-[151px] max-md:px-[24px] max-md:pb-[96px]">
      <RevealArticle className="overflow-hidden rounded-[16px] bg-white p-[38px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] max-md:p-[18px]">
        <RevealItem className="h-[617px] w-full overflow-hidden rounded-[12px] max-md:aspect-video max-md:h-auto">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/DpuHLk8C6Rw"
            title="Videography reel"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </RevealItem>
        <RevealItem className="px-[20px] pb-[18px] pt-[42px] max-md:px-0 max-md:pt-[28px]">
          <h2 className="mb-[29px] text-[58px] font-black leading-none tracking-[0] text-[#232336] max-md:mb-[22px]">
            Videography
          </h2>
          <p className="mb-[26px] text-[14px] font-medium leading-[1.36] text-[#333333]">
            Videography allows me to tell stories in motion. I enjoy exploring different creative concepts, from cinematic storytelling to commercial and documentary-style content, always striving to create videos that are visually engaging, emotionally compelling, and aligned with the intended message.
          </p>
          <p className="text-[14px] font-medium leading-[1.36] text-[#333333]">
            Beyond the technical process, I value the creative journey behind every production, from developing concepts and planning shots to refining the final edit. I enjoy experimenting with different visual styles, camera techniques, and editing approaches to create content that not only captures attention but also communicates ideas with clarity and purpose.
          </p>
          <div className="mt-[40px] text-right">
            <Link href="/videography" scroll={true} className="inline-flex h-[40px] cursor-pointer items-center rounded-full bg-[#9d9d9d] px-[21px] text-[11px] font-bold text-white transition duration-300 hover:scale-[1.04] hover:brightness-110 max-md:h-[46px]">
              See More Video
            </Link>
          </div>
        </RevealItem>
      </RevealArticle>
    </RevealSection>
  );
}
