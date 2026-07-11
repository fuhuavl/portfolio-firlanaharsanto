import { Placeholder } from "./Placeholder";

export function Photography() {
  return (
    <section id="photography" className="mx-auto grid w-full max-w-[1440px] grid-cols-[620px_1fr] gap-x-[34px] px-[122px] pb-[130px]">
      <div>
        <h2 className="mb-[42px] text-[62px] font-black leading-none tracking-[0] text-[#232336]">
          Photography
        </h2>
        <Placeholder className="mb-[28px] h-[370px] w-full rounded-[7px]" />
        <Placeholder className="mb-[34px] h-[386px] w-full rounded-[7px]" />
        <button className="h-[40px] rounded-full bg-[#9d9d9d] px-[20px] text-[11px] font-bold text-white">
          See More Photography
        </button>
      </div>
      <div className="pt-[33px]">
        <Placeholder className="mb-[29px] h-[389px] w-full rounded-[7px]" />
        <Placeholder className="mb-[35px] h-[393px] w-full rounded-[7px]" />
        <p className="mb-[22px] text-[14px] font-medium leading-[1.36] text-[#333333]">
          Eusmod ullamco exercitation consectetur dolore magna occaecat ea in
          dolor elit. Aliquip sint non labore dolore aliquip dolor aliqua minim
          commodo consectetur nostrud aute. Magna proident dolore id ullamco
          occaecat exercitation quis reprehenderit aute.
        </p>
        <p className="text-[14px] font-medium leading-[1.36] text-[#333333]">
          Consectetur dolore deserunt laborum officia id consectetur magna labore
          ut consequat velit do.
        </p>
      </div>
    </section>
  );
}
