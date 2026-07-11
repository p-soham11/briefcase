/** @format */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id="home">
      <motion.div
        className="hero-tag"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        // full-stack developer · frontend + backend
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
      >
        Soham Pal<span className="thin">,</span>
        <br />
        <span className="thin">builds the</span> whole&nbsp;stack.
      </motion.h1>
      <motion.p
        className="hero-lede"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        A full-stack developer, currently a <b>Software Engineer at Rolls-Royce</b> building
        enterprise aerospace software — day to day I work in <b>Angular</b> and <b>.NET</b>,
        shipping <b>Micro Frontends</b> and <b>microservices</b>, with C++ and DSA holding it
        together underneath.
      </motion.p>
      <motion.div
        className="statusline"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <span>
          <span className="dot"></span>open to opportunities
        </span>
        <span className="sep">/</span>
        <span>software engineer @ rolls-royce</span>
        <span className="sep">/</span>
        <span>Angular · .NET</span>
        <span className="sep">/</span>
        <span>Micro Frontends · Microservices</span>
      </motion.div>
      <motion.div
        className="cta"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <a className="btn primary" href="#projects">
          See the work
        </a>
        <a
          className="btn ghost"
          href="mailto:p.soham@icloud.com"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Get in touch
        </a>
      </motion.div>
    </section>
  );
}
