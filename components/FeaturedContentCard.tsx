import { RevealArticle, RevealItem, RevealSection } from "@/components/ScrollReveal";

export function FeaturedContentCard() {
  return (
    <RevealSection id="event" className="mx-auto w-full max-w-[1440px] px-[122px] pb-[117px] max-md:px-[24px] max-md:pb-[88px]">
      <RevealArticle className="overflow-hidden rounded-[16px] bg-white p-[38px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] max-md:p-[18px]">
        <RevealItem className="h-[620px] w-full overflow-hidden rounded-[12px] max-md:aspect-video max-md:h-auto">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/aQCoAK_dyqU"
            title="Jakarta Future Festival video"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </RevealItem>
        <RevealItem className="px-[20px] pb-[27px] pt-[40px] max-md:px-0 max-md:pb-[12px] max-md:pt-[28px]">
          <h2 className="mb-[28px] text-[56px] font-black leading-none tracking-[0] text-[#232336] max-md:mb-[22px]">
            Jakarta Future Festival
          </h2>
          <p className="mb-[24px] text-[14px] font-medium leading-[1.36] text-[#333333]">
            Designed and developed the creative concept for an interactive exhibition booth for the Jakarta Provincial Government’s Department of Spatial Planning (DCKTRP), transforming complex urban planning information into an engaging public experience through immersive storytelling, interactive games, visitor journey design, creative copywriting, and strategic brand activation.
          </p>
          
          <a
            href="https://docs.google.com/presentation/d/19Rlbkjkl2LeMQIS25V-uE_CmRfcNzQGZWMlu5qej3Ss/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="float-right mt-[24px] inline-flex h-[40px] cursor-pointer items-center rounded-full bg-[#9d9d9d] px-[21px] text-[11px] font-bold text-white transition duration-300 hover:scale-[1.04] hover:brightness-110 max-md:h-[46px]"
          >
            See More
          </a>
        </RevealItem>
      </RevealArticle>
    </RevealSection>
  );
}
