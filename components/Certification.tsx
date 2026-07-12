import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Minus, Plus } from "lucide-react";

const certifications = [
  {
    value: "certificate-1",
    title: "Social Media Specialist",
    description:
      "Experienced in managing end-to-end social media operations across multiple platforms, from planning and scheduling content to publishing and monitoring audience engagement. Familiar with identifying emerging trends, adapting content strategies based on platform performance, and maintaining a consistent brand presence through well-organized content management. Skilled in campaign planning, social media analytics, and performance reporting to evaluate content effectiveness and identify opportunities for continuous improvement. Certified as a BNSP Social Media Specialist, with hands-on experience in optimizing engagement and supporting brand growth through data-driven decision making.",
    buttonLabel: "BNSP Social Media Specialist",
    buttonLink:
      "https://drive.google.com/file/d/1KG-Y6freQnpzd7UZw0_b8KZm8Eb8-MRR/view?usp=drivesdk",
  },
  {
    value: "certificate-2",
    title: "Content Strategist",
    description:
      "Experienced in developing content strategies that align with communication objectives while considering audience behavior, platform characteristics, and current digital trends. Able to transform ideas and project goals into structured content plans that maintain consistency across different social media channels. Passionate about exploring multiple creative approaches before selecting the strongest concept, ensuring every piece of content communicates its message effectively. Enjoy collaborating with creative teams to refine ideas, maintain content quality, and deliver engaging experiences that resonate with target audiences.",
    buttonLabel: "BNSP Digital Marketing",
    buttonLink:
      "https://drive.google.com/file/d/1vtQrZ7RFNPwmvl4OJS122Kayjhpx8KiJ/view?usp=drivesdk",
  },
  {
    value: "certificate-3",
    title: "Digital Content Producer",
    description:
      "Experienced in supporting the production of digital content from the initial planning stage to final publication. Familiar with coordinating high-volume content production while maintaining quality, consistency, and timely delivery across multiple campaigns and projects. Comfortable working closely with designers, photographers, videographers, and editors throughout the creative process. Focused on ensuring smooth communication between team members, organizing production workflows, and helping transform creative concepts into polished digital content.",
  },
  {
    value: "certificate-4",
    title: "Project Coordinator",
    description:
      "Experienced in coordinating creative projects by organizing workflows, managing production timelines, and facilitating collaboration between different teams throughout each stage of the project. Able to balance multiple priorities while ensuring deliverables remain aligned with project objectives and deadlines. Strong organizational and communication skills allow for effective coordination between stakeholders, creative teams, and production members. Comfortable working in fast-paced environments that require adaptability, attention to detail, and efficient problem-solving to keep projects progressing smoothly.",
  },
  {
    value: "certificate-5",
    title: "Assistant Producer",
    description:
      "Completed an internship as an Assistant Producer at a Production House, gaining practical experience in supporting various stages of commercial and digital content production. Responsibilities included assisting with production preparation, coordinating project requirements, communicating with team members, and ensuring production activities ran according to schedule. This experience provided valuable exposure to professional creative workflows, production management, and cross-functional collaboration. Working directly within a production environment strengthened the ability to adapt quickly, manage multiple tasks simultaneously, and contribute effectively to projects with tight deadlines and high-quality standards.",
  },
];

export function Certification() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-[122px] pb-[178px]">
      <h2 className="mb-[21px] text-[62px] font-black leading-none tracking-[0] text-[#232336]">
        What I Excel at:
      </h2>
      <Accordion
        type="single"
        collapsible
        defaultValue={["certificate-1"]}
        className="gap-[17px]"
      >
        {certifications.map((certificate) => (
          <AccordionItem
            key={certificate.value}
            value={certificate.value}
            className="group overflow-hidden rounded-[18px] border-0 bg-white shadow-[0_5px_18px_rgba(0,0,0,0.08)] data-[open]:bg-[#dddddd] data-[open]:shadow-[0_5px_18px_rgba(0,0,0,0.11)]"
          >
            <AccordionTrigger className="h-[64px] items-center rounded-[16px] px-[28px] py-0 text-left hover:no-underline focus-visible:ring-0 focus-visible:ring-offset-0 group-data-[open]:h-auto group-data-[open]:items-start group-data-[open]:pt-[26px] [&_[data-slot=accordion-trigger-icon]]:hidden">
              <h3 className="text-[15px] font-black text-[#222222]">
                {certificate.title}
              </h3>
              <span className="relative h-[18px] w-[18px] text-[#555555]">
                <Plus className="absolute inset-0 h-[18px] w-[18px] transition-all duration-300 group-data-[open]:rotate-90 group-data-[open]:opacity-0" />
                <Minus className="absolute inset-0 h-[18px] w-[18px] opacity-0 transition-all duration-300 group-data-[open]:opacity-100" />
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-[28px] pb-[28px]">
              <p className="mt-[24px] max-w-[1020px] text-[14px] font-medium leading-[1.45] text-[#333333]">
                {certificate.description}
              </p>
              {certificate.buttonLabel && certificate.buttonLink ? (
                <a
                  href={certificate.buttonLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-[18px] inline-flex min-h-[42px] min-w-[220px] items-center justify-center rounded-full bg-white px-[20px] py-[10px] text-center text-[12px] font-semibold text-[#777777] no-underline shadow-[0_4px_14px_rgba(0,0,0,0.07)]"
                >
                  {certificate.buttonLabel}
                </a>
              ) : null}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
