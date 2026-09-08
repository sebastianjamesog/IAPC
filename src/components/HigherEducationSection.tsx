"use client";

import React from "react";
import Image from "next/image";
import { GraduationCap, ShieldAlert, Award, FileText, CheckCircle2, ArrowRight, BookOpen, Sparkles } from "lucide-react";

interface HigherEducationProps {
  onOpenCounselingModal?: (program?: string) => void;
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
            <span>Academic Progression • Affiliated with OIUCM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#ffffff] tracking-tight">
            Higher Medical Qualifications: <span className="gradient-text-silver">Module 2 & Module 3</span>
          </h2>
          <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed">
            Following Module 1 (Diploma), dedicated practitioners can escalate their academic authority through MD & PhD programs awarded by <strong className="text-[#ffffff]">OIUCM</strong> (Open International University for Complementary Medicines) with comprehensive research and thesis mentorship at IAPC.
          </p>
        </div>

        {/* PROMINENT MANDATORY DISCLAIMER & AFFILIATION BOX */}
        <div className="mt-10 max-w-4xl mx-auto p-5 sm:p-6 rounded-2xl bg-[#242424] border border-[#b3b3b3]/60 shadow-xl flex items-start gap-4">
          <ShieldAlert className="w-6 h-6 text-[#ffffff] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="text-sm font-extrabold text-[#ffffff] uppercase tracking-wide">
              OIUCM Affiliation & Degree Awarding Information
            </h3>
            <p className="text-xs sm:text-sm text-[#d4d4d4] leading-relaxed font-medium">
              <strong className="text-[#ffffff]">Academic Clarification:</strong> MD and PhD degrees are awarded directly by <strong className="text-[#ffffff]">OIUCM</strong> (Open International University for Complementary Medicines) based on clinical examinations and research theses. Institute of Acupuncture and Pain Control (IAPC) provides complete preparatory coaching, clinical training, thesis formulation, and academic mentorship.
            </p>
          </div>
        </div>

        {/* Dual Track Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Module 2: MD (Acupuncture) from OIUCM Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#242424] border border-[#b3b3b3]/40 hover:border-[#ffffff] transition space-y-6 flex flex-col justify-between overflow-hidden">
            <div className="space-y-4">
              {/* MD Clinical Banner Image */}
              <div className="relative h-44 w-full rounded-2xl overflow-hidden border border-[#b3b3b3]/30 group">
                <Image
                  src="/images/consultation.png"
                  alt="MD Acupuncture advanced clinical case evaluation and neuro-acupuncture"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#242424] via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider text-[#2b2b2b] bg-[#ffffff] px-2.5 py-0.5 rounded-full border border-[#d4d4d4]">
                  Clinical Specialization Track
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#2b2b2b] border border-[#b3b3b3]/40 flex items-center justify-center text-[#ffffff]">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-[#2b2b2b] bg-[#d4d4d4] px-3 py-1 rounded-full border border-[#ffffff]">
                  Awarded by OIUCM
                </span>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#b3b3b3]">Module 2</span>
                <h3 className="text-2xl font-black text-[#ffffff] mt-0.5">MD (Acupuncture) from OIUCM</h3>
              </div>
              
              <p className="text-xs sm:text-sm text-[#d4d4d4] leading-relaxed">
                For diploma holders and medical practitioners seeking advanced clinical mastery and specialization in cranial, auricular, and surgical anesthesia acupuncture.
              </p>

              <div className="space-y-2 pt-2 border-t border-[#b3b3b3]/20">
                <h4 className="text-xs font-bold text-[#ffffff] uppercase tracking-wider flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-[#d4d4d4]" />
                  <span>Curriculum & Specializations:</span>
                </h4>
                <ul className="space-y-2">
                  {[
                    "Revision of 14 Acupuncture Meridians & Points",
                    "Ear Acupuncture",
                    "Scalp Acupuncture",
                    "Acupuncture Anesthesia",
                    "Allied Therapies",
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
              onClick={() => onOpenCounselingModal && onOpenCounselingModal("Module 2: MD in Acupuncture from OIUCM")}
              className="w-full py-3.5 rounded-xl bg-[#2b2b2b] hover:bg-[#1e1e1e] border border-[#b3b3b3]/50 text-[#ffffff] font-bold text-xs flex items-center justify-center gap-2 transition hover:border-[#ffffff]"
            >
              <span>Apply for Module 2: MD (OIUCM) Counseling</span>
              <ArrowRight className="w-4 h-4 text-[#ffffff]" />
            </button>
          </div>

          {/* Module 3: PhD (Acupuncture) from OIUCM Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#242424] border border-[#b3b3b3]/40 hover:border-[#ffffff] transition space-y-6 flex flex-col justify-between overflow-hidden">
            <div className="space-y-4">
              {/* Research Image Banner */}
              <div className="relative h-44 w-full rounded-2xl overflow-hidden border border-[#b3b3b3]/30 group">
                <Image
                  src="/images/research.png"
                  alt="Acupuncture PhD research & thesis analysis"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#242424] via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider text-[#2b2b2b] bg-[#ffffff] px-2.5 py-0.5 rounded-full border border-[#d4d4d4]">
                  Doctoral Research Track
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#2b2b2b] border border-[#b3b3b3]/40 flex items-center justify-center text-[#ffffff]">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-[#2b2b2b] bg-[#b3b3b3] px-3 py-1 rounded-full border border-[#ffffff]">
                  Awarded by OIUCM
                </span>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#b3b3b3]">Module 3</span>
                <h3 className="text-2xl font-black text-[#ffffff] mt-0.5">PhD (Acupuncture) from OIUCM</h3>
              </div>
              
              <div className="p-3.5 rounded-2xl bg-[#1e1e1e] border border-[#b3b3b3]/30 text-xs text-[#d4d4d4] leading-relaxed">
                <p className="font-semibold text-[#ffffff] mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#ffffff]" />
                  <span>Research Program Overview:</span>
                </p>
                <p>
                  This is a research program and PhD is awarded by <strong className="text-[#ffffff]">OIUCM</strong> based on the thesis submitted by the candidate. The <strong className="text-[#ffffff]">Institute of Acupuncture and Pain Control (IAPC)</strong> will help and guide you to write the thesis.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#b3b3b3]/20">
                <h4 className="text-xs font-bold text-[#ffffff] uppercase tracking-wider">How IAPC Guides Candidates:</h4>
                <ul className="space-y-2">
                  {[
                    "Dissertation topic selection & clinical research proposal design",
                    "Rigorous supervision in clinical trial methodology & data analysis",
                    "Step-by-step guidance in writing and refining your doctoral thesis",
                    "Assistance with journal submissions and final OIUCM thesis defense",
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
              onClick={() => onOpenCounselingModal && onOpenCounselingModal("Module 3: PhD in Acupuncture from OIUCM")}
              className="w-full py-3.5 rounded-xl bg-[#2b2b2b] hover:bg-[#1e1e1e] border border-[#b3b3b3]/50 text-[#ffffff] font-bold text-xs flex items-center justify-center gap-2 transition hover:border-[#ffffff]"
            >
              <span>Apply for Module 3: PhD (OIUCM) Guidance</span>
              <ArrowRight className="w-4 h-4 text-[#ffffff]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
