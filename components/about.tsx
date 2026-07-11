/** @format */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { specData } from "@/lib/data";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <section ref={ref} id="about">
      <span className="kicker">// about</span>
      <div className="about-grid">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p>
            I&apos;m a <b>full-stack developer</b> who likes working across the entire system
            rather than one slice of it. Today I&apos;m a <b>Software Engineer at Rolls-Royce</b>,
            building production aerospace software in a regulated environment — after internships
            at <b>EY</b> and <b>Sprink</b> and freelance work in between.
          </p>
          <p>
            My current focus is <b>Angular</b> and <b>.NET</b> — building <b>Micro Frontends</b>{" "}
            on the frontend and <b>microservices</b> on the backend, tuned for performance and
            scale. Around that I still reach for React and Next.js, and a solid grounding in{" "}
            <b>data structures, algorithms and C++</b> keeps my problem-solving sharp underneath
            it all.
          </p>
          <p>
            Away from the editor, I&apos;m happiest <b>chasing the next trip</b>. Long{" "}
            <b>motorcycle rides</b> and road adventures are my favourite way to reset — there&apos;s
            always another route worth riding. When I&apos;m back home I&apos;m gaming, deep in{" "}
            <b>good music</b>, feeding the community dogs, or reading up on psychology and
            economics.
          </p>
        </motion.div>
        <motion.div
          className="spec"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {specData.map((row) => (
            <div className="row" key={row.k}>
              <span className="k">{row.k}</span>
              <span className="v">{row.strong ? <b>{row.v}</b> : row.v}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
