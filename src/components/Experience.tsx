import React from "react";
import { experienceData } from "@/data/experience";
import { Icons } from "@/components/icons/Icons";

export const Experience = () => {
  return (
    <section id="experience" className="py-12 md:py-16 relative border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#38BDF8] px-2.5 py-0.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 mb-2">
            Practical Growth
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2.5">
            Development Journey &amp; Experience
          </h2>
          <p className="max-w-xl text-slate-400 text-xs sm:text-sm">
            An authentic roadmap of hands-on software development, continuous project engineering, and practical problem-solving.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] rounded-full mt-3" />
        </div>

        {/* Timeline List (Compact) */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Timeline Guide Line */}
          <div className="hidden sm:block absolute left-5 top-5 bottom-5 w-0.5 bg-slate-800" />

          <div className="space-y-5">
            {experienceData.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col sm:flex-row items-start gap-4 group"
              >
                {/* Timeline node icon */}
                <div className="hidden sm:flex w-10 h-10 rounded-xl bg-[#0F172A] border-2 border-slate-700/80 text-[#38BDF8] items-center justify-center shrink-0 z-10 group-hover:border-[#38BDF8] group-hover:scale-105 transition-all duration-300 shadow-md">
                  <Icons.Briefcase size={18} />
                </div>

                {/* Content Card */}
                <div className="w-full p-4 sm:p-5 rounded-xl bg-[#0F172A] border border-slate-800 hover:border-slate-700/80 transition-all duration-300 shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {item.role}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-[#38BDF8]">
                        {item.organization}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#111827] text-slate-300 border border-slate-800">
                        {item.period}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-[#818CF8] border border-indigo-500/20">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                    {item.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-1.5 mb-3.5">
                    <h4 className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 font-mono mb-1">
                      Key Milestones &amp; Practices
                    </h4>
                    {item.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shrink-0 mt-1.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#111827] text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
