/** @format */

import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import bingeImg from "@/public/binge.png";
import jsonValidImg from "@/public/jsonValid.png";
import miroImg from "@/public/miro.png";
import sudokuImg from "@/public/sudoku.jpg";
import npmPkgImg from "@/public/currency_convert_pkg.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Completed Higher Secondary",
        location: "Kolkata, India",
        description:
            "I passed my higher secondary education in science stream with computer science as an elective subject with 79% from CBSE board.",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
    },
    {
        title: "Software Developer Intern | Sprink ",
        location: "Remote",
        description:
            "I worked as a full-stack developer for 6 months, focusing on JavaScript, PHP, MySQL, and the LAMP stack. Enhanced the feedback process post-service cancellations, boosting customer satisfaction. Also improved features and functionalities of the Sprink web app, contributing to its success.",
        icon: React.createElement(CgWorkAlt),
        date: "Feb, 2022 - Aug, 2022",
    },
    {
        title: "Graduated from College | B.Tech",
        location: "Narula Institute of Technology, Kolkata",
        description:
            "Pursued Bachelor's degree in Computer Science and Engineering with an average of 8.46 CGPA while participating in various hackathons and coding competitions and open-source projects.",
        icon: React.createElement(LuGraduationCap),
        date: "2019 - 2023",
    },
    {
        title: "Summer Intern | EY",
        location: "Kolkata, India",
        description:
            "Used Angular to implement key features for Swastha Ingit, a West Bengal government initiative, optimizing HMIS landing page and upgrading legacy forms for improved user experience.",
        icon: React.createElement(FaReact),
        date: "Feb, 2023 - July, 2023",
    },
    {
        title: "Freelance Web Developer",
        location: "Remote",
        description:
            "Developed websites for clients, ensuring high performance and responsiveness, helping them to establish an online presence achieve their business goals",
        icon: React.createElement(CgWorkAlt),
        date: "Nov, 2023 - present",
    },
] as const;

export const projectsData = [
    {
        title: "mIRO Board",
        description:
            "This is a collaborative whiteboard app using Next.JS with Clerk for authentication, and integrating Liveblocks for real-time collaboration.",
        tags: [
            "Next JS",
            "TypeScript",
            "Clerk",
            "Convex",
            "Auth",
            "Tailwind CSS",
        ],
        imageUrl: miroImg,
        link: "https://github.com/p-soham11/miro-board",
    },
    {
        title: "JSON Validator",
        description:
            "This is a JSON validator app which validates JSON response against an user given JSON schema.",
        tags: ["React", "TypeScript", "JSON Schema", "CSS"],
        imageUrl: jsonValidImg,
        link: "https://json-validator-gamma.vercel.app/",
    },
    {
        title: "BINGE",
        description:
            "This is a movie search app using TMDB API. Users can search for movies and TV shows, view details, casts, trailer and explore similar genre.",
        tags: ["React", "JavaScript", "Redux", "RESTful API", "SASS"],
        imageUrl: bingeImg,
        link: "https://binge-soham-pals-projects.vercel.app/",
    },
    {
        title: "Currency Converter NPM Package",
        description:
            "This is a simple NPM package to convert currency from one to another. It uses exchange rates from FreeCurrencyAPI.",
        tags: ["JavaScript", "NPM", "Node.JS"],
        imageUrl: npmPkgImg,
        link: "https://www.npmjs.com/package/currency-converter-pkg",
    },
    {
        title: "SUDOKU Solver",
        description:
            "This is a simple sudoku solver app using backtracking algorithm. Users can random sudoku puzzle and get the solution.",
        tags: ["APIs", "JavaScript", "HTML5", "Cascading Style Sheets"],
        imageUrl: sudokuImg,
        link: "https://github.com/p-soham11/sudoku",
    },
] as const;

export const skillsData = [
    "React",
    "Next JS",
    "TypeScript",
    "JavaScript",
    "Angular",
    "C++",
    "MySQL",
    "Node.JS",
    "Express",
    "MongoDB",
    "Redux",
    "jQuery",
    "PHP",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Bootstrap",
    "SASS",
    "Git",
    "Linux",
] as const;
