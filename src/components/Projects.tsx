import React from "react";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const Projects = () => {
  return (
    <section id="projects" className="py-12 md:py-16 relative border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#38BDF8] px-2.5 py-0.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 mb-2">
            Portfolio Showcase
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2.5">
            Featured Projects
          </h2>
          <p className="max-w-xl text-slate-400 text-xs sm:text-sm">
            Real-world full-stack web applications and developer tools built with Next.js, React, TypeScript, and MongoDB.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] rounded-full mt-3" />
        </div>

        {/* Projects Grid (Compact) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
