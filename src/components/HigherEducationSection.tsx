"use client";

import React from "react";
import Image from "next/image";
import { GraduationCap, ShieldAlert, Award, FileText, CheckCircle2, ArrowRight } from "lucide-react";

interface HigherEducationProps {
  onOpenCounselingModal?: () => void;
}

export default function HigherEducationSection({ onOpenCounselingModal }: HigherEducationProps) {
  return (
    <section id="higher-education" className="py-20 bg-[#1e1e1e] relative overflow-hidden">
      {/* Subtle glow background */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#ffffff]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2b2b2b] border border-[#b3b3b3]/40 text-[#d4d4d4] text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5 text-[#ffffff]" />
            <span>Pathways to Higher Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#ffffff] tracking-tight">
            Advanced Academic Guidance for <span className="gradient-text-silver">MD & PhD in Acupuncture</span>
          </h2>
          <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed">
            At IAPC, learning is a lifelong journey. We provide a seamless academic ladder, mentorship, and academic infrastructure for practitioners who aspire to reach the pinnacle of clinical mastery and research.
          </p>
        </div>

        {/* PROMINENT MANDATORY DISCLAIMER BOX */}
        <div className="mt-10 max-w-4xl mx-auto p-5 sm:p-6 rounded-2xl bg-[#242424] border border-[#b3b3b3]/60 shadow-xl flex items-start gap-4">
          <ShieldAlert className="w-6 h-6 text-[#ffffff] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="text-sm font-extrabold text-[#ffffff] uppercase tracking-wide">
              Official University Degree Preparation Clarification
            </h3>
            <p className="text-xs sm:text-sm text-[#d4d4d4] leading-relaxed font-medium">
              <strong className="text-[#ffffff]">Note:</strong> Institute of Acupuncture & Pain Control (IAPC) provides preparatory coaching, clinical research mentorship, thesis guidance, and university entrance alignment. <span className="text-[#ffffff] underline font-semibold">We do not issue MD or PhD degree certificates directly</span>. Our program prepares dedicated candidates to qualify and earn their MD or PhD from accredited <strong className="text-[#ffffff]">Global Universities</strong>.
            </p>
          </div>
        </div>

        {/* Dual Track Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* MD (Acupuncture) Prep Card with Clinical Diagnostic Image */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#242424] border border-[#b3b3b3]/40 hover:border-[#ffffff] transition space-y-6 flex flex-col justify-between overflow-hidden">
            <div className="space-y-4">
              {/* MD Clinical Banner Image */}
              <div className="relative h-40 w-full rounded-2xl overflow-hidden border border-[#b3b3b3]/30 group">
                <Image
                  src="/images/consultation.png"
                  alt="MD Acupuncture advanced clinical case evaluation and neuro-acupuncture"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#242424] via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider text-[#2b2b2b] bg-[#ffffff] px-2.5 py-0.5 rounded-full border border-[#d4d4d4]">
                  Advanced Clinical Diagnostics
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#2b2b2b] border border-[#b3b3b3]/40 flex items-center justify-center text-[#ffffff]">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-[#2b2b2b] bg-[#d4d4d4] px-3 py-1 rounded-full border border-[#ffffff]">
                  Clinical Mastery Track
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#ffffff]">MD (Acupuncture) Preparation</h3>
              
              <p className="text-xs sm:text-sm text-[#d4d4d4] leading-relaxed">
                For graduates seeking advanced clinical mastery and specialization in complex pain syndromes, internal medicine, neuro-acupuncture, and clinical management.
              </p>

              <div className="space-y-2 pt-2 border-t border-[#b3b3b3]/20">
                <h4 className="text-xs font-bold text-[#ffffff] uppercase tracking-wider">What We Provide:</h4>
                <ul className="space-y-2">
                  {[
                    "Advanced diagnostic case evaluation & pulse analysis",
                    "Preparation for Global University MD qualification exams",
                    "Specialized clinical protocols for refractory pain conditions",
                    "Mentorship under experienced international clinical faculty",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-[#d4d4d4]">
                      <CheckCircle2 className="w-4 h-4 text-[#ffffff] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={onOpenCounselingModal}
              className="w-full py-3 rounded-xl bg-[#2b2b2b] hover:bg-[#1e1e1e] border border-[#b3b3b3]/50 text-[#ffffff] font-bold text-xs flex items-center justify-center gap-2 transition"
            >
              <span>Apply for MD Counseling</span>
              <ArrowRight className="w-4 h-4 text-[#ffffff]" />
            </button>
          </div>

          {/* PhD (Acupuncture) Prep Card with Research Image */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#242424] border border-[#b3b3b3]/40 hover:border-[#ffffff] transition space-y-6 flex flex-col justify-between overflow-hidden">
            <div className="space-y-4">
              {/* Research Image Banner */}
              <div className="relative h-40 w-full rounded-2xl overflow-hidden border border-[#b3b3b3]/30 group">
                <Image
                  src="/images/research.png"
                  alt="Acupuncture PhD research & thesis analysis"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#242424] via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider text-[#2b2b2b] bg-[#ffffff] px-2.5 py-0.5 rounded-full border border-[#d4d4d4]">
                  Clinical Research & Publishing
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#2b2b2b] border border-[#b3b3b3]/40 flex items-center justify-center text-[#ffffff]">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-[#2b2b2b] bg-[#b3b3b3] px-3 py-1 rounded-full border border-[#ffffff]">
                  Doctoral Research Track
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#ffffff]">PhD (Acupuncture) Preparation</h3>
              
              <p className="text-xs sm:text-sm text-[#d4d4d4] leading-relaxed">
                For scholars and researchers dedicated to advancing scientific evidence for acupuncture through rigorous research methodology, data analysis, and academic writing.
              </p>

              <div className="space-y-2 pt-2 border-t border-[#b3b3b3]/20">
                <h4 className="text-xs font-bold text-[#ffffff] uppercase tracking-wider">What We Provide:</h4>
                <ul className="space-y-2">
                  {[
                    "Dissertation topic selection & research proposal design",
                    "Guidance for publishing in peer-reviewed medical journals",
                    "Statistical analysis & clinical trial methodology support",
                    "Academic infrastructure connecting with Global Partner Universities",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-[#d4d4d4]">
                      <CheckCircle2 className="w-4 h-4 text-[#ffffff] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={onOpenCounselingModal}
              className="w-full py-3 rounded-xl bg-[#2b2b2b] hover:bg-[#1e1e1e] border border-[#b3b3b3]/50 text-[#ffffff] font-bold text-xs flex items-center justify-center gap-2 transition"
            >
              <span>Apply for PhD Guidance</span>
              <ArrowRight className="w-4 h-4 text-[#ffffff]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
