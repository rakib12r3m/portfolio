import React from "react";
import { educationData } from "@/data/education";
import { Icons } from "@/components/icons/Icons";

export const Education = () => {
  return (
    <section id="education" className="py-12 md:py-16 relative border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#38BDF8] px-2.5 py-0.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 mb-2">
            Academic Background
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2.5">
            Educational Qualification
          </h2>
          <p className="max-w-xl text-slate-400 text-xs sm:text-sm">
            Formal education laying the groundwork for computing principles, logic, and software engineering.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] rounded-full mt-3" />
        </div>

        {/* Education Card (Compact) */}
        <div className="max-w-2xl mx-auto flex flex-col gap-6">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="relative p-4 sm:p-6 rounded-xl bg-[#0F172A] border border-slate-800 hover:border-slate-700/80 transition-all duration-300 shadow-lg overflow-hidden"
            >
              {/* Subtle accent border top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#38BDF8] to-[#818CF8]" />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8] flex items-center justify-center shrink-0 mt-0.5">
                    <Icons.GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {item.degree}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-300 mt-0.5 flex items-center gap-2">
                      <span className="text-[#38BDF8]">{item.institution}</span>
                      {item.isPlaceholder && (
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700">
                          Placeholder
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1 shrink-0 pl-12 sm:pl-0">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {item.status}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {item.passingYear}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3.5 mt-1">
                {item.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 pt-3 border-t border-slate-800/80">
                <h4 className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 font-mono">
                  Curriculum &amp; Focus Highlights
                </h4>
                <ul className="space-y-1.5">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Icons.Check size={14} className="text-[#38BDF8] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
