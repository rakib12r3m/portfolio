import React from "react";
import { skillCategories } from "@/data/skills";
import { Icons } from "@/components/icons/Icons";

export const Skills = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return <Icons.Layout size={19} className="text-[#38BDF8]" />;
      case "Server":
        return <Icons.Server size={19} className="text-[#818CF8]" />;
      case "Database":
        return <Icons.Database size={19} className="text-emerald-400" />;
      case "Terminal":
        return <Icons.Terminal size={19} className="text-amber-400" />;
      default:
        return <Icons.Code size={19} className="text-[#38BDF8]" />;
    }
  };

  return (
    <section id="skills" className="py-12 md:py-16 relative border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#38BDF8] px-2.5 py-0.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 mb-2">
            Technical Stack
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2.5">
            Skills &amp; Technologies
          </h2>
          <p className="max-w-xl text-slate-400 text-xs sm:text-sm">
            A comprehensive overview of my core competencies across frontend interfaces, backend architecture, databases, and modern developer workflows.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] rounded-full mt-3" />
        </div>

        {/* Categories Grid (Compact) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group p-4 sm:p-5 rounded-xl bg-[#0F172A] border border-slate-800 hover:border-slate-700/80 transition-all duration-300 shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#111827] border border-slate-800 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-200">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-[11px] text-slate-400">{category.description}</p>
                  </div>
                </div>

                {/* Skills Badges Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2 sm:p-2.5 rounded-lg bg-[#111827]/70 border border-slate-800/80 hover:border-slate-700 hover:bg-[#1E293B]/70 transition-all duration-200 flex flex-col justify-center"
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                        <span className="text-xs sm:text-sm font-semibold text-slate-100">
                          {skill.name}
                        </span>
                      </div>
                      {skill.description && (
                        <span className="text-[10px] text-slate-400 mt-0.5 pl-3 line-clamp-1">
                          {skill.description}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
