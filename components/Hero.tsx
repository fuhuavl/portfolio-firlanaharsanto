"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const heroItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <motion.section
      id="home"
      className="relative mx-auto h-[725px] w-full max-w-[1440px] overflow-hidden bg-white pt-[52px] max-lg:h-[650px] max-md:h-[720px]"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.12, delayChildren: 0.15 }}
    >
      <motion.div
        className="hero-title absolute left-[45px] top-[108px] z-10 select-none text-[220px] font-black leading-[0.86] tracking-[0] max-lg:left-[32px] max-lg:top-[104px] max-lg:text-[128px] max-md:!left-[20px] max-md:!top-[84px] max-md:!text-[82px]"
        variants={heroItem}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="hero-text-gray">Firlana</div>
      </motion.div>
      <div className="hero-portrait-glow absolute right-[15px] top-[-80px] z-20 h-[560px] w-[735px] max-lg:right-[-120px] max-lg:top-[10px] max-md:!left-1/2 max-md:!right-auto max-md:!top-[160px] max-md:!h-[360px] max-md:!w-[390px] max-md:!-translate-x-1/2" />
      <motion.div
        className="absolute right-[60px] top-[78px] z-30 h-[740px] w-[665px] overflow-hidden max-lg:right-[-18px] max-lg:top-[110px] max-lg:h-[590px] max-lg:w-[500px] max-md:!left-1/2 max-md:!right-auto max-md:!top-[155px] max-md:!h-[410px] max-md:!w-[340px] max-md:!-translate-x-1/2"
        variants={heroItem}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Image
          src="/hero-portrait.png"
          alt="Firlana Harsanto portrait"
          fill
          priority
          sizes="515px"
          className="object-contain object-bottom"
        />
        <div className="absolute inset-x-0 bottom-0 h-[315px] bg-gradient-to-b from-white/0 via-white/78 to-white" />
      </motion.div>
      <motion.div
        className="hero-title hero-title-difference absolute left-[320px] top-[316px] z-40 select-none text-[220px] font-black leading-[0.86] tracking-[0] max-lg:left-[150px] max-lg:top-[300px] max-lg:text-[128px] max-md:!left-[20px] max-md:!top-[380px] max-md:!text-[76px]"
        variants={heroItem}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Harsanto
      </motion.div>
      <motion.div
        className="absolute left-[93px] top-[528px] z-40 w-[355px] text-center text-[16px] font-medium leading-[1.38] text-[#222222] max-lg:left-[42px] max-lg:top-[500px] max-md:!left-1/2 max-md:!top-[590px] max-md:!w-[calc(100%-48px)] max-md:!-translate-x-1/2 max-md:!text-[14px]"
        variants={heroItem}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        a lifelong learner with a passion for innovation, strategic planning, and management, always seeking better ways to turn ideas into meaningful outcomes.
      </motion.div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-50 h-[190px] bg-gradient-to-b from-white/0 via-[#f8f8f8]/70 to-[#f4f4f4]" />
    </motion.section>
  );
}
