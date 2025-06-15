'use client';
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "AIPM - ASIA INSTITUTE OF POWER MANAGEMENT",
    description: "Asia Institute of Power Management (AIPM) is the Training and Consultancy wing of CESC Limited in Kolkata. AIPM offers Training and Consultancy Services.",
    tech: ["JavaScript", "Tailwind", "Next.js", "Node.js"],
    techIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    ],
    link: "https://aipm.cesc.co.in/",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Dev Portfolio",
    description: "A beautiful single-page developer portfolio built with Next.js, featuring animated sections, a project slider, and a modern dark UI.",
    tech: ["Next.js", "Tailwind CSS", "React"],
    techIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    ],
    link: "https://github.com/yourusername/portfolio",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Task Automator",
    description: "Automation tool for repetitive workflows using Python and FastAPI. Easily schedule, monitor, and manage tasks from a web dashboard.",
    tech: ["Python", "FastAPI", "Docker"],
    techIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
    ],
    link: "https://github.com/yourusername/task-automator",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
  }
];

export default function ProjectsSlider() {
  const [current, setCurrent] = useState(0);
  const total = projects.length;

  const goPrev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const goNext = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

  const project = projects[current];

  return (
    <section className="py-20 animate-fade-in bg-[#191A1D] text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center bg-[#232428] rounded-2xl p-8 shadow-2xl relative">
        {/* Left: Project info */}
        <div className="flex-1 min-w-[300px]">
          <div className="text-4xl font-retro text-primary mb-2 opacity-80">{String(current+1).padStart(2, '0')}</div>
          <h3 className="text-2xl md:text-3xl font-retro font-bold mb-4 tracking-wide leading-snug">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-6 font-mono leading-relaxed" style={{whiteSpace:'pre-line'}}>
            {project.description}
          </p>
          <div className="mb-4">
            <span className="font-bold text-white font-retro mr-2">Tech Stack:</span>
            {project.techIcons.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={project.tech[i]}
                className="inline w-7 h-7 mx-1 align-middle bg-white rounded p-1 shadow"
                title={project.tech[i]}
              />
            ))}
          </div>
          <div className="border-t border-gray-600 my-4"></div>
          <div className="flex items-center gap-2 mt-2">
            <span className="font-retro text-white mr-2">Links:</span>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#222] hover:bg-accent text-accent hover:text-white p-3 rounded-full transition-colors duration-300 shadow-lg"
              title="Visit Project"
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
        {/* Right: Project image */}
        <div className="flex-1 flex justify-center items-center min-w-[300px]">
          <img
            src={project.img}
            alt={project.title}
            className="rounded-lg shadow-xl object-cover w-full max-w-md h-56 md:h-64 bg-black border border-gray-700"
            loading="lazy"
          />
        </div>
        {/* Slider controls */}
        <button
          onClick={goPrev}
          className="absolute bottom-8 right-24 md:right-32 bg-lime-400 hover:bg-lime-500 text-black p-2 rounded transition-all duration-200 shadow-lg"
          aria-label="Previous project"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={goNext}
          className="absolute bottom-8 right-8 bg-lime-400 hover:bg-lime-500 text-black p-2 rounded transition-all duration-200 shadow-lg"
          aria-label="Next project"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
