import Image from "next/image";

export function ContentSection() {
  return (
    <section id="content" className="mx-auto flex w-full max-w-[1440px] items-center px-[172px] pb-[162px]">
      <div className="relative h-[470px] w-[625px]">
        <div className="absolute left-[-60px] top-[1px] h-[470px] w-[305px] overflow-hidden rounded-[8px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          <video
            src="/content-1.mp4"
            controls
            preload="metadata"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute left-[263px] top-[65px] h-[298px] w-[151px] overflow-hidden rounded-[7px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          <Image
            src="/content-2.jpeg"
            alt="Content project 2"
            fill
            sizes="151px"
            className="object-cover"
          />
        </div>
        <div className="absolute left-[430px] top-0 h-[306px] w-[151px] overflow-hidden rounded-[7px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          <Image
            src="/content-3.jpeg"
            alt="Content project 3"
            fill
            sizes="151px"
            className="object-cover"
          />
        </div>
      </div>
      <div className="ml-[90px] mt-[-3px] w-[405px]">
        <h2 className="mb-[20px] text-[58px] font-black leading-none tracking-[0] text-[#232336]">
          Content
        </h2>
        <p className="mb-[44px] text-[14px] font-medium leading-[1.35] text-[#333333]">
          Experienced in developing content based on client and stakeholder briefs, with a strong focus on crafting multiple creative concepts and storyboard alternatives. Passionate about exploring and refining ideas through an iterative process to deliver engaging visual storytelling that effectively communicates the intended message and meets project objectives.
        </p>
        <a
  href="https://linktr.ee/portofrh2026"
  target="_blank"
  rel="noopener noreferrer"
  className="float-right inline-flex h-[40px] cursor-pointer items-center rounded-full bg-[#9d9d9d] px-[21px] text-[11px] font-bold text-white transition duration-300 hover:scale-[1.04] hover:brightness-110"
>
  Linktree
</a>
      </div>
    </section>
  );
}
