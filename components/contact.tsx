/** @format */

"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section id="contact" ref={ref}>
      <span className="kicker">// contact</span>
      <div className="contact-head">
        Let&apos;s build
        <br />
        something.{" "}
        <a
          href="mailto:p.soham@icloud.com"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Say&nbsp;hello&nbsp;↗
        </a>
      </div>
      <p className="contact-sub">
        I&apos;m happily building at Rolls-Royce, but always open to interesting opportunities
        and conversations. The fastest way to reach me is email.
      </p>
      <div className="links">
        <a href="mailto:p.soham@icloud.com">
          <span className="g">@</span>p.soham@icloud.com
        </a>
        <a href="https://www.linkedin.com/in/palsoham/" target="_blank" rel="noopener">
          <span className="g">in</span>/palsoham
        </a>
        <a href="https://github.com/p-soham11" target="_blank" rel="noopener">
          <span className="g">gh</span>/p-soham11
        </a>
      </div>
      <div className="colophon">
        designed &amp; built by soham pal — 2026
        <br />
        bricolage grotesque · instrument sans · jetbrains mono
      </div>
    </section>
  );
}
