"use client";

import React from "react";
import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number] & { index: number };

export default function Project({
  title,
  description,
  tags,
  type,
  link,
  index,
}: ProjectProps) {
  return (
    <a className="rec" href={link} target="_blank" rel="noopener">
      <span className="ri">{String(index).padStart(2, "0")}</span>
      <div>
        <h3>
          {title} <span className="arrow">→</span>
        </h3>
        <p>{description}</p>
        <div className="tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <span className="type">{type}</span>
    </a>
  );
}
