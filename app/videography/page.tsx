import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { RevealArticle, RevealItem, RevealSection } from "@/components/ScrollReveal";

const videos = [
  {
    src: "https://www.youtube.com/embed/ZgOwsNOEQtw",
    title: "Videography project 1",
  },
  {
    src: "https://www.youtube.com/embed/MqGk8tE1llU",
    title: "Videography project 2",
  },
  {
    src: "https://www.youtube.com/embed/ZhUZxlHF6KM",
    title: "Videography project 3",
  },
];

export default function VideographyPage() {
  return (
    <main className="min-h-screen bg-[#f4f4f4] text-[#222222]">
      <Navbar />
      <RevealSection className="mx-auto w-full max-w-[1440px] px-[122px] pb-[146px] pt-[135px] max-md:px-[24px] max-md:pb-[96px] max-md:pt-[112px]">
        <RevealItem>
          <Link
            href="/#videography"
            className="mb-[42px] inline-flex min-h-[44px] cursor-pointer items-center gap-[8px] text-[15px] font-black text-[#232336] transition duration-300 hover:scale-[1.04] max-md:mb-[28px]"
          >
            <ChevronLeft className="h-[20px] w-[20px] stroke-[3]" />
            Back
          </Link>
        </RevealItem>
        <RevealItem>
          <h1 className="mb-[62px] text-[76px] font-black leading-none tracking-[0] text-[#232336] max-md:mb-[38px] max-md:text-[48px]">
            Videography
          </h1>
        </RevealItem>
        <RevealItem className="mx-auto flex max-w-[1196px] flex-col gap-[40px] max-md:gap-[24px]">
          {videos.map((video) => (
            <RevealArticle
              key={video.src}
              className="overflow-hidden rounded-[16px] bg-white p-[38px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] max-md:p-[18px]"
            >
              <div className="aspect-video w-full overflow-hidden rounded-[12px]">
                <iframe
                  className="h-full w-full"
                  src={video.src}
                  title={video.title}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </RevealArticle>
          ))}
        </RevealItem>
      </RevealSection>
      <Contact />
      <Footer />
    </main>
  );
}
