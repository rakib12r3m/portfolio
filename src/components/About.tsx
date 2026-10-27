import React from "react";
import { personalInfo } from "@/data/personal";
import { Icons } from "@/components/icons/Icons";

export const About = () => {
  return (
    <section id="about" className="py-12 md:py-16 relative border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#38BDF8] px-2.5 py-0.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 mb-2">
            About Me
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2.5">
            Passionate About Crafting Purposeful Software
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] rounded-full" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 flex flex-col gap-3.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
            <p>
              My journey into programming began with an insatiable curiosity about how software powers our everyday lives. What started with tinkering with web structures evolved into a deep dedication to full-stack engineering—transforming ideas into responsive, resilient, and practical web applications.
            </p>
            <p>
              I concentrate heavily on the modern TypeScript and JavaScript ecosystems. On the frontend, I leverage <span className="text-[#38BDF8] font-medium">React.js</span> and <span className="text-[#38BDF8] font-medium">Next.js</span> (utilizing the App Router and modern server components) along with <span className="text-slate-100 font-medium">Tailwind CSS</span> to build fluid, user-centric interfaces. On the backend, I work with <span className="text-[#818CF8] font-medium">Node.js</span>, <span className="text-[#818CF8] font-medium">Express.js</span>, and <span className="text-emerald-400 font-medium">MongoDB/Mongoose</span> to implement RESTful endpoints and clean data layers.
            </p>
            <p>
              I believe great software is built on solid engineering fundamentals. Rather than relying solely on high-level abstractions, I prioritize writing clean, maintainable code, sharpening my problem-solving abilities, and designing clean component hierarchies.
            </p>
            <p>
              Looking forward, my definitive career aspiration is{" "}
              <strong className="text-white font-semibold">
                AI-Driven Full Stack Web Engineering
              </strong>
              . I am excited to merge modern web architecture with artificial intelligence capabilities to build next-generation applications that are intelligent, context-aware, and impactful.
            </p>

            {/* Personal Interests / Hobbies */}
            <div className="pt-3.5 mt-1 border-t border-slate-800/80">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 font-mono mb-2">
                Beyond The Code
              </h3>
              <p className="text-xs text-slate-400 mb-2.5">
                When stepping away from the terminal, sports keep my focus sharp, reinforce discipline, and foster teamwork:
              </p>
              <div className="flex flex-wrap gap-2">
                {personalInfo.interests.map((hobby) => (
                  <span
                    key={hobby}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#111827] border border-slate-800 text-xs font-medium text-slate-200 shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights & Values Cards */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="p-4 sm:p-5 rounded-xl bg-[#0F172A] border border-slate-800 hover:border-slate-700/80 transition-all duration-300 shadow-lg">
              <div className="w-8 h-8 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8] flex items-center justify-center mb-2.5">
                <Icons.Code size={17} />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-white mb-1">Modern Web Stack</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Specialized in TypeScript, React, Next.js, Node.js, Express, and MongoDB for end-to-end web product development.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-[#0F172A] border border-slate-800 hover:border-slate-700/80 transition-all duration-300 shadow-lg">
              <div className="w-8 h-8 rounded-lg bg-[#818CF8]/10 text-[#818CF8] flex items-center justify-center mb-2.5">
                <Icons.Cpu size={17} />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-white mb-1">Future Vision</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Actively learning and preparing for AI integration in web applications, intelligent agents, and automated workflows.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-[#0F172A] border border-slate-800 hover:border-slate-700/80 transition-all duration-300 shadow-lg">
              <div className="w-8 h-8 rounded-lg bg-emerald-400/10 text-emerald-400 flex items-center justify-center mb-2.5">
                <Icons.Sparkles size={17} />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-white mb-1">Continuous Growth</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dedicated to daily practice, clean architectural patterns, responsive design standards, and collaborative open-source workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
