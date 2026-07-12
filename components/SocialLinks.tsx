import {
  BadgeCheck,
  BriefcaseBusiness,
  Layers3,
  MonitorPlay,
  MessagesSquare,
  Palette,
  Scissors,
} from "lucide-react";
import { RevealItem, RevealSection } from "@/components/ScrollReveal";

const socials = [
  { label: "Canva", icon: Palette },
  { label: "Capcut", icon: Scissors },
  { label: "Meta", icon: MessagesSquare },
  { label: "Adobe", icon: Layers3 },
  { label: "Microsoft Office", icon: BriefcaseBusiness },
  { label: "Google Workspace", icon: BadgeCheck },
  { label: "OBS", icon: MonitorPlay },
];

export function SocialLinks() {
  return (
    <RevealSection className="mx-auto flex w-full max-w-[1440px] flex-wrap justify-center gap-x-[18px] gap-y-[16px] px-[220px] pb-[109px]">
      {socials.map(({ label, icon: Icon }) => (
        <RevealItem
          as="span"
          key={label}
          className="flex h-[37px] min-w-[138px] items-center justify-center gap-[10px] rounded-full bg-white px-[23px] text-[13px] font-bold text-[#666666] shadow-[0_8px_18px_rgba(0,0,0,0.08)]"
        >
          <span className="grid h-[17px] w-[17px] place-items-center rounded-full bg-[#d9d9d9]">
            <Icon className="h-[11px] w-[11px] text-[#777777]" />
          </span>
          {label}
        </RevealItem>
      ))}
    </RevealSection>
  );
}
