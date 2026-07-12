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
      <RevealSection className="mx-auto w-full max-w-[1440px] px-[122px] pb-[146px] pt-[135px]">
        <RevealItem>
          <Link
            href="/#videography"
            className="mb-[42px] inline-flex cursor-pointer items-center gap-[8px] text-[15px] font-black text-[#232336] transition duration-300 hover:scale-[1.04]"
          >
            <ChevronLeft className="h-[20px] w-[20px] stroke-[3]" />
            Back
          </Link>
        </RevealItem>
        <RevealItem>
          <h1 className="mb-[62px] text-[76px] font-black leading-none tracking-[0] text-[#232336]">
            Videography
          </h1>
        </RevealItem>
        <RevealItem className="mx-auto flex max-w-[1196px] flex-col gap-[40px]">
          {videos.map((video) => (
            <RevealArticle
              key={video.src}
              className="overflow-hidden rounded-[16px] bg-white p-[38px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
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
