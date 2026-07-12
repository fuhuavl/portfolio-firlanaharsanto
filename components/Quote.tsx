import { RevealSection } from "@/components/ScrollReveal";

export function Quote() {
  return (
    <RevealSection className="mx-auto w-full max-w-[1440px] px-[190px] pb-[45px] text-center">
      <p className="text-[33px] font-normal leading-[1.45] text-[#686868]">
        <span className="font-black text-[#29293b]">“Great ideas are everywhere.</span>{" "}
        The real challenge is turning them into something people can{" "}
        <span className="font-black text-[#29293b]">experience”</span>
      </p>
    </RevealSection>
  );
}
