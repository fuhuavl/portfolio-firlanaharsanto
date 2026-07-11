import { Placeholder } from "./Placeholder";

export function FeaturedContentCard() {
  return (
    <section id="event" className="mx-auto w-full max-w-[1440px] px-[122px] pb-[117px]">
      <article className="overflow-hidden rounded-[16px] bg-white p-[38px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
        <Placeholder className="h-[620px] w-full rounded-[12px]" />
        <div className="px-[20px] pb-[27px] pt-[40px]">
          <h2 className="mb-[28px] text-[56px] font-black leading-none tracking-[0] text-[#232336]">
            Jakarta Future Festival
          </h2>
          <p className="mb-[24px] text-[14px] font-medium leading-[1.36] text-[#333333]">
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
        </div>
      </article>
    </section>
  );
}
