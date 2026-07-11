import { Placeholder } from "./Placeholder";

export function About() {
  return (
    <section id="about" className="mx-auto flex w-full max-w-[1440px] gap-[58px] px-[174px] pb-[122px] pt-[76px]">
      <Placeholder className="h-[405px] w-[500px] rounded-[18px] shadow-[0_6px_22px_rgba(0,0,0,0.04)]" />
      <div className="w-[458px] pt-[3px]">
        <h2 className="mb-[35px] text-[58px] font-black leading-none tracking-[0] text-[#232336]">
          About Me
        </h2>
        <p className="mb-[28px] text-[15px] font-medium leading-[1.42] text-[#333333]">
          Lorem ipsum dolor sit amet, commodo qui irure ut deserunt eu laboris.
          Dolore commodo dolor ut id est nulla exercitation. Nulla a tempor anim
          sint ullamco ea enim ut minim velit culpa.
        </p>
        <p className="text-[15px] font-medium leading-[1.42] text-[#333333]">
          Eusmod ullamco exercitation consectetur dolore magna occaecat ea in
          dolor elit. Aliquip sint non labore dolore aliquip dolor aliqua minim
          commodo consectetur nostrud aute. Magna proident dolor id ullamco
          occaecat exercitation quis reprehenderit aute.
        </p>
      </div>
    </section>
  );
}
