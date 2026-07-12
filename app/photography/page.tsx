import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const gallery = [
  { src: "/ph-pijaraya-1.JPG", alt: "Pijaraya portrait 1", fit: "object-contain" },
  { src: "/ph-family-3.jpg", alt: "Family photograph 3", fit: "object-contain" },
  { src: "/ph-pijaraya-2.JPG", alt: "Pijaraya portrait 2" },
  { src: "/ph-family-1.jpg", alt: "Family photograph 1" },
  { src: "/ph-family-2.jpg", alt: "Family photograph 2" },
  { src: "/ph-family-4.jpg", alt: "Family photograph 4" },
  { src: "/ph-couple-4.jpg", alt: "Couple photograph 4" },
  { src: "/ph-couple-1.jpg", alt: "Couple photograph 1" },
  { src: "/ph-couple-3.jpg", alt: "Couple photograph 3" },
  { src: "/ph-couple-2.jpg", alt: "Couple photograph 2" },
  { src: "/ph-event-1.JPG", alt: "Event photograph 1" },
  { src: "/ph-event-3.JPG", alt: "Event photograph 3" },
  { src: "/ph-event-2.JPG", alt: "Event photograph 2" },
  { src: "/ph-event-4.JPG", alt: "Event photograph 4" },
  { src: "/ph-eva-2.JPG", alt: "Eva portrait 2" },
  { src: "/ph-eva-1.JPG", alt: "Eva portrait 1" },
];

const leftColumn = gallery.filter((_, index) => index % 2 === 0);
const rightColumn = gallery.filter((_, index) => index % 2 === 1);

export default function PhotographyPage() {
  return (
    <main className="min-h-screen bg-[#f4f4f4] text-[#222222]">
      <Navbar />
      <section className="mx-auto w-full max-w-[1440px] px-[122px] pb-[146px] pt-[135px]">
        <Link
          href="/#photography"
          className="mb-[42px] inline-flex cursor-pointer items-center gap-[8px] text-[15px] font-black text-[#232336] transition duration-300 hover:scale-[1.04] hover:brightness-110"
        >
          <ChevronLeft className="h-[20px] w-[20px] stroke-[3]" />
          Back
        </Link>
        <h1 className="mb-[62px] text-[76px] font-black leading-none tracking-[0] text-[#232336]">
          Photography
        </h1>
        <div className="mx-auto grid max-w-[1056px] grid-cols-1 items-start gap-x-[20px] gap-y-[20px] md:grid-cols-2">
          {[leftColumn, rightColumn].map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-[20px]">
              {column.map((image) => (
                <div
                  key={image.src}
                  className="relative w-full overflow-hidden rounded-[8px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={750}
                    className={`w-full h-auto ${image.fit ?? "object-cover"}`}
                    sizes="(max-width: 820px) 100vw, 518px"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
