import { Circle } from "lucide-react";

const links = ["Home", "About", "Event", "Photography", "Videography", "Contact"];

export function Footer() {
  return (
    <footer className="border-t border-[#dddddd] bg-white">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-[1fr_230px_160px] items-start px-[102px] py-[40px] text-[13px] font-semibold text-[#222222]">
        <div className="flex items-center gap-[8px]">
          <Circle className="h-[25px] w-[25px] fill-[#9d9d9d] stroke-none" />
          <span>Firlana Harsanto</span>
        </div>
        <div className="leading-[1.6]">
          <p>Email : abcdefg@gmail.com</p>
          <p>WA : +62812345</p>
        </div>
        <nav className="flex flex-col leading-[1.45]">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-[#666666]">
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
