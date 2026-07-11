/** @format */

export const links = [
  { name: "Home", label: "home", hash: "#home" },
  { name: "About", label: "about", hash: "#about" },
  { name: "Projects", label: "projects", hash: "#projects" },
  { name: "Stack", label: "stack", hash: "#skills" },
  { name: "Experience", label: "experience", hash: "#experience" },
  { name: "Contact", label: "contact", hash: "#contact" },
] as const;

export const specData = [
  { k: "now", v: "Rolls-Royce", strong: true },
  { k: "role", v: "Software Engineer", strong: false },
  { k: "focus", v: "Angular · .NET", strong: true },
  { k: "degree", v: "B.Tech, CSE", strong: false },
  { k: "cgpa", v: "8.46 / 10", strong: true },
  { k: "experience", v: "EY · Sprink · Rolls-Royce", strong: false },
  { k: "stacks", v: "Micro Frontends · Microservices", strong: false },
  { k: "based", v: "Bengaluru, India", strong: false },
  { k: "status", v: "open to opportunities", strong: true },
] as const;

export const experiencesData = [
  {
    date: "Oct 2024 — present",
    title: "Software Engineer · Rolls-Royce",
    place: "Bengaluru, India · On-site / Hybrid",
    description:
      "Building enterprise aerospace software — production Micro Frontends in Angular with reactive forms and custom validators, and .NET microservices for high-throughput data pipelines. Heavy focus on performance (server-side pagination, virtual scrolling, lazy loading, tuned SSMS queries) and keeping code quality high in a regulated environment, with unit test coverage raised to 85%.",
    now: true,
  },
  {
    date: "Nov 2023 — Aug 2024",
    title: "Freelance Web Developer",
    place: "Remote",
    description:
      "Front-end engineering for Monad — responsive Next.js interfaces and the product's digital presence — and an online store with payment integration for New Readymade Centre.",
    now: false,
  },
  {
    date: "Feb 2023 — Jul 2023",
    title: "Summer Intern · Ernst & Young (EY)",
    place: "Kolkata, India",
    description:
      "Built routes, dynamic forms and custom validations in Angular for Swastha Ingit, a West Bengal government HMIS initiative — cutting form-submission errors ~15% and speeding up the landing page. Also worked with Power Apps and ADO.NET microservices.",
    now: false,
  },
  {
    date: "Feb 2022 — Aug 2022",
    title: "Software Developer Intern · Kinematic Foodtech",
    place: "Remote · Sprink",
    description:
      "Full-stack work on the Sprink app — rebuilt the post-cancellation feedback and refund flow, shipped a progressive discount system, and added advanced filtering (cuisine, portion size, meal type) to sharpen the user experience.",
    now: false,
  },
  {
    date: "Jul 2019 — Jun 2023",
    title: "B.Tech, Computer Science & Engineering",
    place: "Narula Institute of Technology · 8.46 CGPA",
    description:
      "Graduated with an 8.46 CGPA while taking part in hackathons, coding competitions and open-source contributions.",
    now: false,
  },
  {
    date: "School",
    title: "Secondary & Higher Secondary",
    place: "Kolkata, India",
    description:
      "ICSE Secondary at St. Stephen's School (91.7%) and CBSE Higher Secondary at Kalyani Public School (79%).",
    now: false,
  },
] as const;

export const projectsData = [
  {
    title: "mIRO Board",
    description:
      "A collaborative whiteboard app with real-time multiplayer editing — Clerk for auth, Convex for data, and Liveblocks driving live cursors and presence.",
    tags: ["next.js", "typescript", "react-hooks", "convex", "liveblocks", "clerk"],
    type: "web app",
    link: "https://github.com/p-soham11/miro-board",
  },
  {
    title: "ProximityBrews",
    description:
      "A full-stack app for location-based search, integrating Google Maps APIs and geoJSON. Built on MVC architecture with RESTful APIs for a scalable, responsive experience.",
    tags: ["react", "node.js", "express", "mongodb", "google-apis", "geojson"],
    type: "web app",
    link: "https://github.com/p-soham11",
  },
  {
    title: "BINGE",
    description:
      "A movie & TV search app on the TMDB API — lazy loading, robust search, details, cast, trailers and genre-based discovery, with state handled in Redux.",
    tags: ["react", "redux", "rest-api", "sass"],
    type: "web app",
    link: "https://binge-soham-pals-projects.vercel.app/",
  },
  {
    title: "JSON Validator",
    description:
      "A developer tool built with React, TypeScript and AJV that validates any JSON response against a custom schema — pinpointing exactly where it breaks.",
    tags: ["react", "typescript", "json-schema", "ajv"],
    type: "dev tool",
    link: "https://json-validator-gamma.vercel.app/",
  },
  {
    title: "currency-converter-pkg",
    description:
      "A published NPM package that converts between currencies using live exchange rates. Zero-fuss install and use.",
    tags: ["node.js", "npm", "javascript"],
    type: "npm package",
    link: "https://www.npmjs.com/package/currency-converter-pkg",
  },
] as const;

export const skillLayers = [
  {
    idx: "L1",
    label: "Frontend",
    chips: ["Angular", "Micro Frontend", "React", "Next.js", "Redux", "Tailwind CSS", "jQuery"],
  },
  {
    idx: "L2",
    label: "Backend",
    chips: [".NET", "Microservices", "Node.js", "Express", "RESTful APIs"],
  },
  {
    idx: "L3",
    label: "Data",
    chips: ["MySQL", "SSMS"],
  },
  {
    idx: "L4",
    label: "Languages",
    chips: ["C++", "TypeScript", "JavaScript"],
  },
  {
    idx: "L5",
    label: "Tooling",
    chips: ["Git", "npm", "Linux"],
  },
] as const;
