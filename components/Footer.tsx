

import { RevealFooter } from "@/components/ScrollReveal";

const links = ["Home", "About", "Event", "Photography", "Videography", "Contact"];

export function Footer() {
  return (
    <RevealFooter className="border-t border-[#dddddd] bg-white">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-[1fr_230px_160px] items-start px-[102px] py-[40px] text-[13px] font-semibold text-[#222222] max-md:flex max-md:flex-col max-md:items-center max-md:gap-[22px] max-md:px-[24px] max-md:text-center">
        <div className="flex items-center gap-[8px]">
          <span>Firlana Harsanto</span>
        </div>
        <div className="leading-[1.6]">
          <p>Email: firlanaharsanto@gmail.com</p>
          <p>WA: +6287888594064</p>
          <p>IG: @firlanaharsanto</p>
        </div>
        <nav className="flex flex-col leading-[1.45] max-md:items-center max-md:gap-[6px]">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-[#666666]">
              {link}
            </a>
          ))}
        </nav>
      </div>
    </RevealFooter>
  );
}
