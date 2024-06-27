/** @format */

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
            className="mb-16 max-w-[49rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>
                Soham's Syntax: Beyond the Screen 💭
            </SectionHeading>

            <p>
                Meet Soham, a dynamic{" "}
                <span className="font-medium">
                    Computer Science and Engineering
                </span>{" "}
                graduate with an impressive{" "}
                <span className="italic">8.46 CGPA</span>. Boasting with a year
                of internship experience split between a startup,{" "}
                <span className="italic">Sprink</span>, and <br />
                the prestigious <span className="italic">
                    Big Four
                </span> firm, <span className="italic">EY</span>, Soham is a
                seasoned <span className="italic">full-stack developer</span>.
                <br />
                Soham excels in{" "}
                <span className="font-medium">React JS, C++</span>, MySQL, NEXT
                JS, Angular, JavaScript, TypeScript,{" "}
                <span className="font-medium">MERN</span> stack, <br />
                LAMP stack and more. His proficiency in{" "}
                <span className="italic">
                    data structures and algorithms
                </span>{" "}
                enhances his versatility in software development and broadens
                his capabilities in modern web development.
            </p>
            <br />
            <p>
                <span className="italic">When I'm not coding</span>, I enjoy{" "}
                <span className="font-medium">
                    travelling with my motorcycle
                </span>
                , playing video games, listening to good music and feeding the
                community dogs. I also enjoy{" "}
                <span className="font-medium">learning new things</span>. I am
                currently learning about{" "}
                <span className="font-medium">psychology and economics</span>.
                I'm also fond of playing{" "}
                <span className="font-medium">violin!</span>
            </p>
        </motion.section>
    );
}
