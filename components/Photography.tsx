import Image from "next/image";
import Link from "next/link";
import { RevealItem, RevealSection } from "@/components/ScrollReveal";

export function Photography() {
  return (
    <RevealSection id="photography" className="mx-auto grid w-full max-w-[1440px] grid-cols-[620px_1fr] gap-x-[34px] px-[122px] pb-[130px]">
      <RevealItem>
        <h2 className="mb-[42px] text-[62px] font-black leading-none tracking-[0] text-[#232336]">
          Photography
        </h2>
        <div className="relative mb-[28px] h-[370px] w-full overflow-hidden rounded-[7px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          <Image
            src="/photography-1.JPG"
            alt="Photography 1"
            fill
            sizes="620px"
            className="object-cover"
          />
        </div>
        <div className="relative mb-[34px] h-[386px] w-full overflow-hidden rounded-[7px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          <Image
            src="/photography-3.JPG"
            alt="Photography 3"
            fill
            sizes="620px"
            className="object-cover"
          />
        </div>
        <Link href="/photography" scroll={true} className="inline-flex h-[40px] cursor-pointer items-center rounded-full bg-[#9d9d9d] px-[20px] text-[11px] font-bold text-white transition duration-300 hover:scale-[1.04] hover:brightness-110">
          See More Photography
        </Link>
      </RevealItem>
      <RevealItem className="pt-[33px]">
        <div className="relative mb-[29px] h-[389px] w-full overflow-hidden rounded-[7px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          <Image
            src="/photography-2.jpg"
            alt="Photography 2"
            fill
            sizes="542px"
            className="object-cover"
          />
        </div>
        <div className="relative mb-[35px] h-[393px] w-full overflow-hidden rounded-[7px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          <Image
            src="/photography-4.jpg"
            alt="Photography 4"
            fill
            sizes="542px"
            className="object-cover"
          />
        </div>
        <p className="mb-[22px] text-[14px] font-medium leading-[1.36] text-[#333333]">
          Photography has always been one of my greatest passions. I am deeply drawn to storytelling through images, with a particular interest in portrait photography that captures genuine emotions, authentic moments, and the stories behind every individual.
        </p>
        <p className="text-[14px] font-medium leading-[1.36] text-[#333333]">
          For me, every photograph should do more than capture a face, it should tell a story.
        </p>
      </RevealItem>
    </RevealSection>
  );
}
