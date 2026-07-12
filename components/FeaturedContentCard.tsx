import { RevealArticle, RevealItem, RevealSection } from "@/components/ScrollReveal";

export function FeaturedContentCard() {
  return (
    <RevealSection id="event" className="mx-auto w-full max-w-[1440px] px-[122px] pb-[117px]">
      <RevealArticle className="overflow-hidden rounded-[16px] bg-white p-[38px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
        <RevealItem className="h-[620px] w-full overflow-hidden rounded-[12px]">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/aQCoAK_dyqU"
            title="Jakarta Future Festival video"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </RevealItem>
        <RevealItem className="px-[20px] pb-[27px] pt-[40px]">
          <h2 className="mb-[28px] text-[56px] font-black leading-none tracking-[0] text-[#232336]">
            Jakarta Future Festival
          </h2>
          <p className="mb-[24px] text-[14px] font-medium leading-[1.36] text-[#333333]">
            Designed and developed the creative concept for an interactive exhibition booth for the Jakarta Provincial Government’s Department of Spatial Planning (DCKTRP), transforming complex urban planning information into an engaging public experience through immersive storytelling, interactive games, visitor journey design, creative copywriting, and strategic brand activation.
          </p>
          <p className="text-[14px] font-medium leading-[1.36] text-[#333333]">
            The project focused on enhancing public awareness and participation by combining educational content with experiential design, making spatial planning more accessible, memorable, and enjoyable for visitors.
          </p>
        </RevealItem>
      </RevealArticle>
    </RevealSection>
  );
}
