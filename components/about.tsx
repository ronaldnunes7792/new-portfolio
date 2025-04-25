"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a full-stack web developer who has been building fast, scalable, and user-friendly web applications for over 5 years.

        <br></br>

        I specialize in building modern, clean, and responsive interfaces using frameworks like

        <span className="font-medium">JavaScript, TypeScript, React, Next.js, Vue.js, Node.js, and Laravel and Tailwind CSS.</span>

        <br></br>
        These tools help me write clean code, solve problems faster, deliver high-quality results, and often deliver results faster than expected.       <br></br>
        I pride myself on writing clean, maintainable code that scales for your business and looks great on all devices.
      </p>


    </motion.section>
  );
}
