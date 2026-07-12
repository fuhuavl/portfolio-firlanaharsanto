import { Mail, MessageCircle, Camera } from "lucide-react";
import { RevealItem, RevealSection } from "@/components/ScrollReveal";

export function Contact() {
  return (
    <RevealSection id="contact" className="mx-auto w-full max-w-[1440px] px-[195px] pb-[136px]">
      <RevealItem className="flex flex-col items-center justify-center rounded-[16px] bg-white px-[37px] py-[60px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
        <div className="text-center">
          <h2 className="mb-[24px] text-[58px] font-black leading-none tracking-[0] text-[#232336]">
            Contact Me!
          </h2>
          <p className="mb-[37px] text-[14px] font-medium leading-[1.35] text-[#333333]">
            Let’s connect and bring meaningful ideas to life together.
          </p>
          <div className="flex justify-center gap-[28px]">
            {[
              { icon: Mail, label: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=firlanaharsanto@gmail.com" },
              { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/6287888594064" },
              { icon: Camera, label: "Instagram", href: "https://instagram.com/firlanaharsanto" },
            ].map((contact) => {
              const Icon = contact.icon;
              return (
                <a key={contact.label} href={contact.href} aria-label={contact.label} target="_blank" rel="noreferrer">
                  <div className="flex h-[58px] w-[58px] cursor-pointer items-center justify-center rounded-full bg-[#9d9d9d] transition duration-300 hover:scale-[1.05] hover:brightness-110">
                    <Icon className="h-[28px] w-[28px] text-white" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </RevealItem>
    </RevealSection>
  );
}
