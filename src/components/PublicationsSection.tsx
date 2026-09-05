"use client";

import React from "react";
import Image from "next/image";
import { BookOpen, Award, CheckCircle2, Sparkles, GraduationCap, ArrowRight } from "lucide-react";

interface PublicationsProps {
  onOpenEnrollModal?: () => void;
}

export default function PublicationsSection({ onOpenEnrollModal }: PublicationsProps) {
  return (
    <section id="publications" className="py-20 bg-[#242424] relative overflow-hidden border-t border-b border-[#b3b3b3]/30">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 bg-[#ffffff]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1e1e1e] border border-[#b3b3b3]/40 text-[#d4d4d4] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-[#ffffff]" />
            <span>Official Institutional Publication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#ffffff] tracking-tight">
            Authoritative Textbooks & <span className="gradient-text-silver">Research Literature</span>
          </h2>
          <p className="text-sm sm:text-base text-[#d4d4d4]">
            IAPC is built upon rigorous academic literature and published clinical authority. Our curriculum incorporates core reference texts authored by pioneer faculty.
          </p>
        </div>

        {/* Featured Book Card Grid */}
        <div className="mt-14 max-w-5xl mx-auto p-6 sm:p-10 rounded-3xl bg-[#1e1e1e] border border-[#b3b3b3]/40 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left 3D Book Cover Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#ffffff]/40 via-[#b3b3b3]/30 to-[#ffffff]/20 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              
              <div className="relative w-64 sm:w-72 h-88 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-[#b3b3b3]/50 transform group-hover:scale-[1.03] transition-transform duration-500">
                <Image
                  src="/images/book_publication.jpg"
                  alt="Total Health Through Alternative Medicines by Dr. V. Mohandas"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Book Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2b2b2b] bg-[#d4d4d4] px-3 py-1 rounded-full border border-[#ffffff]">
                Core Course Reference Text
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-[#ffffff] tracking-tight">
                Total Health Through Alternative Medicines
              </h3>
              
              <div className="flex items-center gap-2 text-sm font-semibold text-[#d4d4d4] pt-1">
                <Award className="w-4 h-4 text-[#ffffff]" />
                <span>Authored by: <strong className="text-[#ffffff]">Dr. V. Mohandas</strong></span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#d4d4d4] leading-relaxed">
              A comprehensive textbook bridging classical oriental acupuncture, meridian diagnostics, herbal synergies, and natural pain relief protocols. Serving as an essential handbook for students, clinicians, and doctoral candidates.
            </p>

            <div className="space-y-2.5 pt-2 border-t border-[#b3b3b3]/20">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#ffffff]">Key Features Covered in Book:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Detailed Acupuncture Meridian Pathways",
                  "Classical & Contemporary Alternative Therapies",
                  "Clinical Protocols for Natural Pain Management",
                  "Included free in ₹20,000 Diploma Kit",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#d4d4d4]">
                    <CheckCircle2 className="w-4 h-4 text-[#ffffff] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenEnrollModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#ffffff] via-[#d4d4d4] to-[#b3b3b3] text-[#2b2b2b] font-extrabold text-xs shadow-lg flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-4 h-4 text-[#2b2b2b]" />
                <span>Get Book with Diploma Course (₹20,000)</span>
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#2b2b2b] hover:bg-[#242424] border border-[#b3b3b3]/40 text-[#ffffff] text-xs font-semibold flex items-center justify-center gap-1.5 transition"
              >
                <span>Inquire About Publication</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#ffffff]" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
