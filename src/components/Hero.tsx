import React from "react";
import Image from "next/image";
import Link from "next/link";
import { personalInfo } from "@/data/personal";
import { Icons } from "@/components/icons/Icons";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center pt-24 pb-12 md:py-20 overflow-hidden"
    >
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-6 -right-32 w-80 h-80 bg-[#818CF8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Text & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability status badge */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#111827] border border-slate-800 text-[11px] font-mono text-slate-300 mb-3.5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Full Stack Opportunities</span>
            </div>

            {/* Greeting & Name */}
            <p className="text-xs sm:text-sm font-mono text-[#38BDF8] font-medium tracking-wide mb-1">
              Hello, I&apos;m
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
              {personalInfo.name}
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-slate-200 via-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent mb-3.5">
              {personalInfo.designation}
            </h2>

            {/* Headline & Brief Introduction */}
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-2.5 max-w-xl">
              {personalInfo.headline}
            </p>
            <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed mb-5 max-w-xl">
              Passionate about architecting end-to-end web applications with modern JavaScript and TypeScript frameworks. Actively advancing toward my long-term career ambition:{" "}
              <span className="text-slate-200 font-medium">
                AI-Driven Full Stack Web Engineering
              </span>
              .
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-5">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#0284C7] text-slate-950 font-semibold text-xs sm:text-sm shadow-md shadow-[#38BDF8]/20 hover:shadow-[#38BDF8]/35 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
              >
                <span>Explore My Projects</span>
                
                <Icons.ArrowRight size={16} />
              </a>
              <a
                href={personalInfo.resumeUrl}
                download="Rakib_Mia_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#111827] hover:bg-[#1E293B] border border-slate-700/80 text-slate-200 font-semibold text-xs sm:text-sm hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 shadow-sm"
              >
                <Icons.Download size={16} className="text-[#38BDF8]" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links & Quick Connectivity */}
            <div className="flex items-center gap-3 pt-3.5 border-t border-slate-800/80 w-full max-w-xl">
              <span className="text-xs font-mono text-slate-400">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#111827] border border-slate-800 text-slate-400 hover:text-[#38BDF8] hover:border-slate-700 hover:-translate-y-0.5 transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <Icons.Github size={16} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#111827] border border-slate-800 text-slate-400 hover:text-[#38BDF8] hover:border-slate-700 hover:-translate-y-0.5 transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <Icons.Linkedin size={16} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-[#111827] border border-slate-800 text-slate-400 hover:text-[#38BDF8] hover:border-slate-700 hover:-translate-y-0.5 transition-all duration-200"
                aria-label="Email Rakib Mia"
              >
                <Icons.Mail size={16} />
              </a>
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#111827] border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-slate-700 hover:-translate-y-0.5 transition-all duration-200"
                aria-label="Chat on WhatsApp"
              >
                <Icons.Whatsapp size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: Professional Portrait (Compact) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-[280px] sm:max-w-[320px] lg:max-w-[340px] w-full">
              {/* Outer decorative glow ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#38BDF8]/35 via-[#818CF8]/25 to-emerald-400/20 blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card Container */}
              <div className="relative rounded-2xl bg-[#0F172A] border border-slate-700/80 p-2 shadow-xl overflow-hidden">
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-slate-900">
                  <Image
                    src={personalInfo.avatarUrl}
                    alt="Rakib Mia - Full Stack Developer Portrait"
                    fill
                    priority
                    sizes="(max-width: 640px) 280px, 340px"
                    className="object-cover object-top filter brightness-[1.02] contrast-[1.03] transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle bottom gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
                </div>

                {/* Floating Tech Pill Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-2.5 rounded-xl bg-[#111827]/90 backdrop-blur-md border border-slate-700/60 shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8] flex items-center justify-center">
                      <Icons.Code size={15} />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-white">Full Stack Stack</p>
                      <p className="text-[9px] font-mono text-slate-400">Next.js • Node.js • Mongo</p>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-[#38BDF8] border border-slate-700">
                    RM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
