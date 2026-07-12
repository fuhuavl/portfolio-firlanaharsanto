

"use client";

import { motion } from "framer-motion";

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
  return (
    <motion.header
      className="fixed left-0 top-0 z-50 w-full bg-white/85 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <nav className="mx-auto flex h-[52px] w-full max-w-[1440px] items-center justify-between px-[38px] text-[13px] font-medium text-[#666666]">
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
      </nav>
    </motion.header>
  );
}
