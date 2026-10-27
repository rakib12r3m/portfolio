"use client";

import React, { useState } from "react";
import { personalInfo } from "@/data/personal";
import { Icons } from "@/components/icons/Icons";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill in all required fields (Name, Email, and Message).");
      return;
    }

    // Trigger pre-filled mailto for immediate honest delivery
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Contact from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-12 md:py-16 relative border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#38BDF8] px-2.5 py-0.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 mb-2">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2.5">
            Let&apos;s Connect &amp; Collaborate
          </h2>
          <p className="max-w-xl text-slate-400 text-xs sm:text-sm">
            Whether you have an opportunity, a project proposal, or simply want to discuss web engineering, my inbox is always open.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Direct Contact Info (Compact) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-4 sm:p-6 rounded-xl bg-[#0F172A] border border-slate-800 shadow-lg">
              <h3 className="text-lg font-bold text-white mb-1.5">
                Contact Information
              </h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Feel free to reach out via direct email, WhatsApp message, or phone call. I aim to respond within 24 hours.
              </p>

              {/* Direct Link Items */}
              <div className="space-y-2.5">
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 p-2.5 sm:p-3 rounded-lg bg-[#111827] border border-slate-800 hover:border-slate-700 hover:bg-[#1E293B]/70 transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Icons.Mail size={17} />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-slate-400 block">Email</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-[#38BDF8] transition-colors truncate block">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-3 p-2.5 sm:p-3 rounded-lg bg-[#111827] border border-slate-800 hover:border-slate-700 hover:bg-[#1E293B]/70 transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#818CF8]/10 text-[#818CF8] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Icons.Phone size={17} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">Phone</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-[#818CF8] transition-colors">
                      {personalInfo.phone}
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 sm:p-3 rounded-lg bg-[#111827] border border-slate-800 hover:border-slate-700 hover:bg-[#1E293B]/70 transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-400/10 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Icons.Whatsapp size={17} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">WhatsApp</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">
                      {personalInfo.whatsappNumber}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-lg bg-[#111827] border border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                    <Icons.MapPin size={17} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">Location</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-5 pt-4 border-t border-slate-800/80">
                <span className="text-[11px] font-mono text-slate-400 block mb-2">
                  Online Profiles:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#111827] text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Icons.Github size={17} />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#111827] text-slate-400 hover:text-[#38BDF8] border border-slate-800 hover:border-slate-700 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Icons.Linkedin size={17} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (Compact) */}
          <div className="lg:col-span-7">
            <div className="p-4 sm:p-6 rounded-xl bg-[#0F172A] border border-slate-800 shadow-lg">
              <h3 className="text-lg font-bold text-white mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Fill out the form below. Submitting will launch your default email client with your message pre-composed for instantaneous delivery.
              </p>

              {submitted && (
                <div className="mb-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs flex items-center gap-2">
                  <Icons.Check size={16} className="shrink-0" />
                  <span>
                    Thank you! Your email client has been opened. If it didn&apos;t open automatically, you can write directly to{" "}
                    <strong className="text-white">{personalInfo.email}</strong>.
                  </span>
                </div>
              )}

              {error && (
                <div className="mb-4 p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[11px] font-mono text-slate-300 mb-1"
                    >
                      Your Name <span className="text-[#38BDF8]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                      className="w-full px-3 py-2 rounded-lg bg-[#111827] border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[11px] font-mono text-slate-300 mb-1"
                    >
                      Your Email <span className="text-[#38BDF8]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      required
                      className="w-full px-3 py-2 rounded-lg bg-[#111827] border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-[11px] font-mono text-slate-300 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Opportunity"
                    className="w-full px-3 py-2 rounded-lg bg-[#111827] border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[11px] font-mono text-slate-300 mb-1"
                  >
                    Message <span className="text-[#38BDF8]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, question, or opportunity..."
                    required
                    className="w-full px-3 py-2 rounded-lg bg-[#111827] border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#38BDF8] to-[#0284C7] text-slate-950 font-semibold text-xs sm:text-sm shadow-md shadow-[#38BDF8]/20 hover:shadow-[#38BDF8]/35 transition-all focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                >
                  <Icons.Send size={15} />
                  <span>Send Direct Email</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
