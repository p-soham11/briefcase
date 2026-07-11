/** @format */

"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects">
      <span className="kicker">// selected work</span>
      <div className="records">
        {projectsData.map((project, index) => (
          <Project key={project.title} {...project} index={index + 1} />
        ))}
      </div>
    </section>
  );
}
