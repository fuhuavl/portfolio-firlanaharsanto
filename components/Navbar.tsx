

"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const menu = [
  "Home",
  "About",
  "Content",
  "Event",
  "Photography",
  "Videography",
  "Contact",
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="fixed left-0 top-0 z-50 w-full bg-white/85 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <nav className="relative mx-auto flex h-[52px] w-full max-w-[1440px] items-center justify-between px-[38px] text-[13px] font-medium text-[#666666] max-md:px-[20px]">
        <a href="#home" className="flex items-center gap-[9px] text-[#222222]">
          <span className="text-[14px] font-semibold">Firlana Harsanto</span>
        </a>
        <div className="hidden items-center gap-[34px] md:flex">
          {menu.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition-colors hover:text-[#222222]"
            >
              {item}
            </a>
          ))}
        </div>
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="hidden h-[40px] w-[40px] items-center justify-center rounded-full text-[#222222] max-md:flex"
        >
          {isOpen ? <X className="h-[22px] w-[22px]" /> : <Menu className="h-[22px] w-[22px]" />}
        </button>
        {isOpen ? (
          <div className="absolute left-[20px] right-[20px] top-[58px] hidden flex-col gap-[18px] rounded-[16px] bg-white px-[22px] py-[20px] text-[14px] font-semibold text-[#555555] shadow-[0_10px_30px_rgba(0,0,0,0.08)] max-md:flex">
            {menu.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="py-[4px] transition-colors hover:text-[#222222]"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        ) : null}
      </nav>
    </motion.header>
  );
}
