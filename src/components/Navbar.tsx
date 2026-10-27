"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { personalInfo } from "@/data/personal";
import { Icons } from "@/components/icons/Icons";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = personalInfo.navLinks.map((link) =>
        link.href.replace("#", "")
      );

      const scrollPos = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
        setActiveSection(targetId);
      }
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-lg shadow-black/20 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded-lg px-1.5 py-1"
            aria-label="Rakib Mia Portfolio Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#38BDF8] to-[#818CF8] flex items-center justify-center shadow-md shadow-[#38BDF8]/20 group-hover:scale-105 transition-transform duration-200">
              <span className="font-mono font-bold text-slate-950 text-base">RM</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-100 text-sm tracking-tight leading-none group-hover:text-[#38BDF8] transition-colors">
                Rakib Mia
              </span>
              <span className="text-[11px] font-mono text-slate-400 leading-none mt-1">
                Full Stack Dev
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#111827]/70 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
            {personalInfo.navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-[#38BDF8] bg-[#38BDF8]/10 shadow-sm"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Contact CTA & Resume (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="text-xs font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-[#38BDF8] to-[#0284C7] text-slate-950 hover:opacity-95 shadow-md shadow-[#38BDF8]/20 hover:shadow-[#38BDF8]/30 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
            >
              Contact Me
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <Icons.X size={22} /> : <Icons.Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-[#0F172A]/95 border border-slate-800 backdrop-blur-xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1.5">
              {personalInfo.navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-sm font-medium px-3.5 py-2.5 rounded-xl transition-colors flex items-center justify-between ${
                      isActive
                        ? "text-[#38BDF8] bg-[#38BDF8]/10 font-semibold"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                    )}
                  </Link>
                );
              })}
              <div className="pt-3 mt-2 border-t border-slate-800/80 flex flex-col gap-2">
                <Link
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="w-full text-center text-xs font-semibold py-2.5 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#0284C7] text-slate-950 shadow-md shadow-[#38BDF8]/20"
                >
                  Contact Me
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
