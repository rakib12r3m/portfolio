import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";
import { Icons } from "@/components/icons/Icons";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="group flex flex-col justify-between rounded-xl bg-[#0F172A] border border-slate-800 hover:border-slate-700/80 transition-all duration-300 shadow-lg overflow-hidden hover:-translate-y-1">
      <div>
        {/* Project Thumbnail Image Showcase (Compact) */}
        <div className="relative w-full h-40 sm:h-44 overflow-hidden bg-slate-900 border-b border-slate-800">
          {project.image ? (
            <div className="relative w-full h-full">
              <Image
                src={project.image}
                alt={`${project.title} Thumbnail`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/15 to-transparent pointer-events-none" />
            </div>
          ) : (
            <div className="relative w-full h-full bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#1E293B] p-4 flex flex-col justify-end">
              <h3 className="text-xl font-bold text-white tracking-tight">{project.title}</h3>
            </div>
          )}

          {/* Badges Overlay */}
          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10 pointer-events-none">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#0B1120]/85 backdrop-blur-md text-slate-200 border border-slate-700/80 shadow-md">
              {project.category}
            </span>
            <span
              className="w-2 h-2 rounded-full shadow-sm ring-1 ring-black/40"
              style={{ backgroundColor: project.accentColor }}
            />
          </div>
        </div>

        {/* Project Body */}
        <div className="p-4 sm:p-5">
          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-[#38BDF8] transition-colors mb-0.5">
            {project.title}
          </h3>
          <p className="text-[11px] font-mono text-[#38BDF8] mb-2 font-medium">
            {project.tagline}
          </p>
          <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 mb-3.5">
            {project.description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1 mb-3.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#111827] text-slate-300 border border-slate-800"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#111827] text-slate-400 border border-slate-800">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-4 pb-4 pt-2 border-t border-slate-800/60 flex items-center justify-between gap-2">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-white hover:text-[#38BDF8] transition-colors"
        >
          <span>View Details</span>
          <Icons.ArrowRight size={13} />
        </Link>

        <div className="flex items-center gap-1.5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-[#111827] text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
              aria-label={`${project.title} GitHub Repository`}
            >
              <Icons.Github size={14} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8] hover:bg-[#38BDF8]/20 border border-[#38BDF8]/20 text-[11px] font-semibold transition-colors"
              aria-label={`${project.title} Live Application`}
            >
              <span>Live Demo</span>
              <Icons.ExternalLink size={11} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
