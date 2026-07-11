import { cn } from "@/lib/utils";

type PlaceholderProps = {
  className?: string;
};

export function Placeholder({ className }: PlaceholderProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "bg-gradient-to-br from-[#a9a9a9] via-[#c8c8c8] to-[#eeeeee]",
        className,
      )}
    />
  );
}
