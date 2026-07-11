import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto h-[725px] w-full max-w-[1440px] overflow-hidden bg-white pt-[52px]"
    >
      <div className="absolute left-[93px] top-[548px] z-40 w-[355px] text-center text-[16px] font-medium leading-[1.38] text-[#222222]">
        Lorem ipsum dolor sit amet blablabal haloo semuanya kamu apa kabar dua
        sayang ayah juga??tiga tiga sayang adik kakak. satu dua tiga
      </div>
      <div className="hero-title hero-title-shadow absolute left-[45px] top-[108px] z-10 select-none text-[190px] font-black leading-[0.86] tracking-[0]">
        <div className="hero-text-gray">Firlana</div>
        <div className="hero-text-dark ml-[340px] mt-[45px]">Harsanto</div>
      </div>
      <div className="absolute right-[120px] top-[78px] z-30 h-[590px] w-[515px] overflow-hidden">
        <Image
          src="/hero-portrait.png"
          alt="Firlana Harsanto portrait"
          fill
          priority
          sizes="515px"
          className="object-contain object-bottom"
        />
        <div className="hero-title hero-title-difference absolute left-[-760px] top-[30px] select-none text-[190px] font-black leading-[0.86] tracking-[0]">
          <div>Firlana</div>
          <div className="ml-[340px] mt-[45px]">Harsanto</div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[315px] bg-gradient-to-b from-white/0 via-white/78 to-white" />
      </div>
    </section>
  );
}
