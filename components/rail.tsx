"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
import ThemeToggleButton from "./theme-toggle-button";

export default function Rail() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <aside className="rail">
      <div>
        <div className="mark">
          soham<b>.</b>pal
        </div>
        <div className="rail-status">
          <span className="dot"></span>open to opportunities
          <br />
          software engineer · rolls-royce
          <br />
          bengaluru, india
        </div>
        <nav>
          {links.map((link, index) => (
            <Link
              key={link.hash}
              href={link.hash}
              className={clsx({ on: activeSection === link.name })}
              onClick={() => {
                setActiveSection(link.name);
                setTimeOfLastClick(Date.now());
              }}
            >
              <span className="n">{String(index).padStart(2, "0")}</span>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="rail-foot">
        <a href="https://github.com/p-soham11" target="_blank" rel="noopener">
          github ↗
        </a>
        <br />
        <a href="https://www.linkedin.com/in/palsoham/" target="_blank" rel="noopener">
          linkedin ↗
        </a>
        <br />
        <a href="mailto:p.soham@icloud.com">email ↗</a>
        <br />
        <span style={{ opacity: 0.6 }}>© 2026</span>
        <br />
        <ThemeToggleButton />
      </div>
    </aside>
  );
}
