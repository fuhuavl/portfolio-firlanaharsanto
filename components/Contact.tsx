import { Circle } from "lucide-react";
import { Placeholder } from "./Placeholder";

export function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-[1440px] px-[195px] pb-[136px]">
      <div className="flex h-[391px] items-center gap-[78px] rounded-[16px] bg-white px-[37px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
        <Placeholder className="h-[315px] w-[365px] rounded-[12px]" />
        <div className="w-[500px]">
          <h2 className="mb-[24px] text-[58px] font-black leading-none tracking-[0] text-[#232336]">
            Contact Me!
          </h2>
          <p className="mb-[37px] max-w-[430px] text-[14px] font-medium leading-[1.35] text-[#333333]">
            Eusmod ullamco exercitation consectetur dolore magna occaecat ea in
            dolor elit. Aliquip sint non labore dolore aliquip dolor aliqua minim
            commodo consectetur nostrud aute.
          </p>
          <div className="flex gap-[28px]">
            {[0, 1, 2, 3].map((item) => (
              <a key={item} href="#home" aria-label={`Social link ${item + 1}`}>
                <Circle className="h-[58px] w-[58px] fill-[#9d9d9d] stroke-none" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
