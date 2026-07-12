import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto h-[725px] w-full max-w-[1440px] overflow-hidden bg-white pt-[52px]"
    >
      <div className="absolute left-[93px] top-[528px] z-40 w-[355px] text-center text-[16px] font-medium leading-[1.38] text-[#222222]">
        a lifelong learner with a passion for innovation, strategic planning, and management, always seeking better ways to turn ideas into meaningful outcomes.
      </div>
      <div className="hero-title absolute left-[45px] top-[108px] z-10 select-none text-[220px] font-black leading-[0.86] tracking-[0]">
        <div className="hero-text-gray">Firlana</div>
      </div>
      <div className="hero-portrait-glow absolute right-[15px] top-[-80px] z-20 h-[560px] w-[735px]" />
      <div className="absolute right-[60px] top-[78px] z-30 h-[740px] w-[665px] overflow-hidden">
        <Image
          src="/hero-portrait.png"
          alt="Firlana Harsanto portrait"
          fill
          priority
          sizes="515px"
          className="object-contain object-bottom"
        />
        <div className="absolute inset-x-0 bottom-0 h-[315px] bg-gradient-to-b from-white/0 via-white/78 to-white" />
      </div>
      <div className="hero-title hero-title-difference absolute left-[320px] top-[316px] z-40 select-none text-[220px] font-black leading-[0.86] tracking-[0]">
        Harsanto
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-50 h-[190px] bg-gradient-to-b from-white/0 via-[#f8f8f8]/70 to-[#f4f4f4]" />
    </section>
  );
}
