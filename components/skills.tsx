/** @format */

"use client";

import React from "react";
import { skillLayers } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Skills() {
    const { ref } = useSectionInView("Stack");

    return (
        <section id="skills" ref={ref}>
            <span className="kicker">{"// the stack, top to bottom"}</span>
            <div className="layers">
                {skillLayers.map((layer) => (
                    <div className="layer" key={layer.idx}>
                        <div className="layer-label">
                            <span className="idx">{layer.idx}</span>
                            {layer.label}
                        </div>
                        <div className="chips">
                            {layer.chips.map((chip) => (
                                <span className="chip" key={chip}>
                                    {chip}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
