import { Placeholder } from "./Placeholder";

export function ContentSection() {
  return (
    <section id="content" className="mx-auto flex w-full max-w-[1440px] items-center px-[172px] pb-[162px]">
      <div className="relative h-[470px] w-[625px]">
        <Placeholder className="absolute left-0 top-[1px] h-[470px] w-[305px] rounded-[8px]" />
        <Placeholder className="absolute left-[323px] top-[65px] h-[298px] w-[151px] rounded-[7px]" />
        <Placeholder className="absolute left-[508px] top-0 h-[306px] w-[151px] rounded-[7px]" />
      </div>
      <div className="ml-[90px] mt-[-3px] w-[405px]">
        <h2 className="mb-[20px] text-[58px] font-black leading-none tracking-[0] text-[#232336]">
          Content
        </h2>
        <p className="mb-[44px] text-[14px] font-medium leading-[1.35] text-[#333333]">
          Eusmod ullamco exercitation consectetur dolore magna occaecat ea in
          dolor elit. Aliquip sint non labore dolore aliquip dolor aliqua minim
          commodo consectetur nostrud aute. Magna proident dolore id ullamco
          occaecat exercitation quis reprehenderit aute.
        </p>
        <button className="float-right h-[40px] rounded-full bg-[#9d9d9d] px-[21px] text-[11px] font-bold text-white">
          See More Content
        </button>
      </div>
    </section>
  );
}
