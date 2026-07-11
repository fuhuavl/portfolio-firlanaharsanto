import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Minus, Plus } from "lucide-react";

const certifications = [
  {
    value: "certificate-1",
    title: "Sertifikat 1",
    description:
      "Lorem ipsum dolor sit amet, commodo qui irure ut deserunt eu laboris. Dolore commodo dolor ut id est nulla exercitation. Nulla a tempor anim sint ullamco ea enim ut minim velit culpa. Eusmod ullamco exercitation consectetur dolore magna occaecat ea in dolor elit.",
  },
  {
    value: "certificate-2",
    title: "Sertifikat 2",
    description:
      "Lorem ipsum dolor sit amet, commodo qui irure ut deserunt eu laboris. Dolore commodo dolor ut id est nulla exercitation. Nulla a tempor anim sint ullamco ea enim ut minim velit culpa. Eusmod ullamco exercitation consectetur dolore magna occaecat ea in dolor elit.",
  },
];

export function Certification() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-[122px] pb-[178px]">
      <h2 className="mb-[21px] text-[62px] font-black leading-none tracking-[0] text-[#232336]">
        Certification
      </h2>
      <Accordion
        type="single"
        collapsible
        defaultValue={["certificate-1"]}
        className="gap-[17px]"
      >
        {certifications.map((certificate) => (
          <AccordionItem
            key={certificate.value}
            value={certificate.value}
            className="group overflow-hidden rounded-[18px] border-0 bg-white shadow-[0_5px_18px_rgba(0,0,0,0.08)] data-[open]:bg-[#dddddd] data-[open]:shadow-[0_5px_18px_rgba(0,0,0,0.11)]"
          >
            <AccordionTrigger className="h-[64px] items-center rounded-[16px] px-[28px] py-0 text-left hover:no-underline focus-visible:ring-0 focus-visible:ring-offset-0 group-data-[open]:h-auto group-data-[open]:items-start group-data-[open]:pt-[26px] [&_[data-slot=accordion-trigger-icon]]:hidden">
              <h3 className="text-[13px] font-black text-[#222222]">
                {certificate.title}
              </h3>
              <span className="relative h-[18px] w-[18px] text-[#555555]">
                <Plus className="absolute inset-0 h-[18px] w-[18px] transition-all duration-300 group-data-[open]:rotate-90 group-data-[open]:opacity-0" />
                <Minus className="absolute inset-0 h-[18px] w-[18px] opacity-0 transition-all duration-300 group-data-[open]:opacity-100" />
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-[28px] pb-[28px]">
              <p className="mt-[24px] max-w-[1020px] text-[14px] font-medium leading-[1.45] text-[#333333]">
                {certificate.description}
              </p>
              <button className="mt-[35px] h-[42px] w-[170px] rounded-full bg-white text-[12px] font-semibold text-[#777777] shadow-[0_4px_14px_rgba(0,0,0,0.07)]">
                Read More
              </button>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
