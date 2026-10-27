import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projectsData } from "@/data/projects";
import { Icons } from "@/components/icons/Icons";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Rakib Mia",
    };
  }

  return {
    title: `${project.title} | Case Study by Rakib Mia`,
    description: project.description,
    openGraph: {
      title: `${project.title} - ${project.tagline}`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0B1120] text-[#F8FAFC] py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Back */}
        <div className="mb-6">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-[#38BDF8] transition-colors py-1.5 px-3 rounded-lg bg-[#111827] border border-slate-800"
          >
            <Icons.ArrowLeft size={14} />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Header Banner (Compact) */}
        <div className="relative p-5 sm:p-8 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-xl mb-6 overflow-hidden">
          {/* Subtle Glow */}
          <div
            className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ backgroundColor: project.accentColor }}
          />

          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#111827] text-[#38BDF8] border border-slate-700/80">
                {project.category}
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                Full-Stack Architecture
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-1.5">
              {project.title}
            </h1>
            <p className="text-sm sm:text-base text-[#38BDF8] font-medium mb-4">
              {project.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-800/80">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-[#38BDF8] to-[#0284C7] text-slate-950 font-semibold text-xs shadow-md shadow-[#38BDF8]/20 hover:shadow-[#38BDF8]/35 transition-all"
                >
                  <span>Visit Live Website</span>
                  <Icons.ExternalLink size={14} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#111827] hover:bg-[#1E293B] border border-slate-700 text-slate-200 font-semibold text-xs transition-all"
                >
                  <Icons.Github size={14} />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Project Screenshot Showcase (Compact) */}
        {project.image && (
          <div className="relative w-full aspect-[16/9] max-h-[420px] rounded-xl overflow-hidden border border-slate-800 shadow-xl mb-6 bg-slate-900 group">
            <Image
              src={project.image}
              alt={`${project.title} Screenshot Showcase`}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover object-top group-hover:scale-[1.01] transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none" />
          </div>
        )}

        {/* Content Sections (Compact) */}
        <div className="space-y-5">
          {/* Overview & Purpose */}
          <section className="p-5 sm:p-6 rounded-xl bg-[#0F172A] border border-slate-800 shadow-md">
            <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#38BDF8] rounded-full inline-block" />
              Project Overview &amp; Purpose
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3.5">
              {project.longDescription}
            </p>

            <h3 className="text-xs sm:text-sm font-semibold text-white mb-1">The Problem Solved</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {project.problemSolved}
            </p>
          </section>

          {/* Technology Stack Breakdown */}
          <section className="p-5 sm:p-6 rounded-xl bg-[#0F172A] border border-slate-800 shadow-md">
            <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#818CF8] rounded-full inline-block" />
              Technology Stack
            </h2>
            <p className="text-xs text-slate-400 mb-3">
              Technologies chosen for performance, type safety, scalability, and maintainable architecture:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#111827] text-slate-200 border border-slate-700/80 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Key Features */}
          <section className="p-5 sm:p-6 rounded-xl bg-[#0F172A] border border-slate-800 shadow-md">
            <h2 className="text-base sm:text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-emerald-400 rounded-full inline-block" />
              Key Features &amp; Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, idx) => {
                const [title, desc] = feat.includes(":")
                  ? feat.split(":")
                  : [feat, ""];
                return (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-[#111827]/80 border border-slate-800 flex flex-col justify-start"
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <Icons.Check size={14} className="text-[#38BDF8] shrink-0" />
                      <h3 className="text-xs font-semibold text-white">{title.trim()}</h3>
                    </div>
                    {desc && (
                      <p className="text-[11px] text-slate-400 pl-5 leading-relaxed">
                        {desc.trim()}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Implementation & Contributions */}
          <section className="p-5 sm:p-6 rounded-xl bg-[#0F172A] border border-slate-800 shadow-md">
            <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block" />
              Contributions &amp; Architecture
            </h2>
            <ul className="space-y-2">
              {project.contributions.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shrink-0 mt-1.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Challenges & Solutions */}
          <section className="p-5 sm:p-6 rounded-xl bg-[#0F172A] border border-slate-800 shadow-md">
            <h2 className="text-base sm:text-lg font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-rose-400 rounded-full inline-block" />
              Technical Challenges &amp; Solutions
            </h2>
            <div className="space-y-2.5">
              {project.challenges.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-[#111827] border border-slate-800 space-y-1.5"
                >
                  <div className="flex items-start gap-1.5 text-rose-300 font-medium text-xs sm:text-sm">
                    <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-rose-500/10 border border-rose-500/20 text-rose-400">
                      Challenge
                    </span>
                    <span>{item.challenge}</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-slate-300 text-xs pl-2 border-l-2 border-[#38BDF8]/60 mt-1.5">
                    <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8]">
                      Solution
                    </span>
                    <span>{item.solution}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Future Improvements */}
          <section className="p-5 sm:p-6 rounded-xl bg-[#0F172A] border border-slate-800 shadow-md">
            <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-cyan-400 rounded-full inline-block" />
              Future Roadmap &amp; Improvements
            </h2>
            <ul className="space-y-2">
              {project.futureImprovements.map((imp, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shrink-0 mt-1.5" />
                  <span>{imp}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Bottom Back Button */}
          <div className="pt-4 text-center">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#111827] hover:bg-[#1E293B] border border-slate-700 text-white font-semibold text-xs transition-all"
            >
              <Icons.ArrowLeft size={14} />
              <span>Return to All Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
