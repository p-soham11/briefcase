/** @format */

"use client";

import React from "react";
import clsx from "clsx";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
    const { ref } = useSectionInView("Experience");

    return (
        <section id="experience" ref={ref}>
            <span className="kicker">{"// experience &amp; education"}</span>
            <div className="tl">
                {experiencesData.map((item) => (
                    <div
                        className={clsx("ev", { now: item.now })}
                        key={item.title}
                    >
                        <div className="date">{item.date}</div>
                        <h4>{item.title}</h4>
                        <div className="place">{item.place}</div>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
