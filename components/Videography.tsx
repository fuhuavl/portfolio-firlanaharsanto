import { Placeholder } from "./Placeholder";

export function Videography() {
  return (
    <section id="videography" className="mx-auto w-full max-w-[1440px] px-[122px] pb-[151px]">
      <article className="overflow-hidden rounded-[16px] bg-white p-[38px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
        <Placeholder className="h-[617px] w-full rounded-[12px]" />
        <div className="px-[20px] pb-[18px] pt-[42px]">
          <h2 className="mb-[29px] text-[58px] font-black leading-none tracking-[0] text-[#232336]">
            Videography
          </h2>
          <p className="mb-[26px] text-[14px] font-medium leading-[1.36] text-[#333333]">
            Eusmod ullamco exercitation consectetur dolore magna occaecat ea in
            dolor elit. Aliquip sint non labore dolore aliquip dolor aliqua minim
            commodo consectetur nostrud aute. Magna proident dolore id ullamco
            occaecat exercitation quis reprehenderit aute.
          </p>
          <p className="text-[14px] font-medium leading-[1.36] text-[#333333]">
            Consectetur dolore deserunt laborum officia id consectetur magna
            labore ut consequat velit do. Id ea dolore quis consequat dolore
            deserunt incididunt in. Quisque exercitation in ad irure velit dolor
            est culpa.
          </p>
          <div className="mt-[40px] text-right">
            <button className="h-[40px] rounded-full bg-[#9d9d9d] px-[21px] text-[11px] font-bold text-white">
              See More Video
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}
