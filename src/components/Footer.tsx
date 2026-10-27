"use client";

import React from "react";
import Link from "next/link";
import { personalInfo } from "@/data/personal";
import { Icons } from "@/components/icons/Icons";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#080D1A] border-t border-slate-800/80 py-8 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-5 border-b border-slate-800/60">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-7 h-7 rounded-md bg-gradient-to-br from-[#38BDF8] to-[#818CF8] flex items-center justify-center font-mono font-bold text-slate-950 text-xs">
                RM
              </span>
              <span className="font-bold text-base text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              {personalInfo.designation} • Focused on AI-Driven Web Engineering
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs font-medium text-slate-300">
            {personalInfo.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#38BDF8] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-[#111827] text-slate-400 hover:text-white border border-slate-800 transition-colors"
              aria-label="GitHub"
            >
              <Icons.Github size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-[#111827] text-slate-400 hover:text-[#38BDF8] border border-slate-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Icons.Linkedin size={16} />
            </a>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-[#111827] text-slate-400 hover:text-[#38BDF8] border border-slate-800 transition-colors ml-1"
              aria-label="Scroll back to top"
              title="Back to Top"
            >
              <Icons.ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400 text-center sm:text-left">
          <p>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with Next.js, TypeScript, &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
