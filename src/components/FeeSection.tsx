"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, CreditCard, HelpCircle, GraduationCap, ArrowRight, HeartPulse } from "lucide-react";

interface FeeSectionProps {
  onOpenEnrollModal?: () => void;
  onOpenReflexologyModal?: () => void;
}

export default function FeeSection({ onOpenEnrollModal, onOpenReflexologyModal }: FeeSectionProps) {
  const diplomaInclusions = [
    "Full 6-Months Intensive Lecture & Workshop Tuition",
    "Complete Practical Acupuncture Kit",
    "Comprehensive Printed Course Study Materials & Charts",
    "Clinical Case Study Supervision & Diagnostic Practice",
    "Final W.H.O. Recognized Certification Examination Fees",
    "Lifelong Access to Alumni Seminars & Case Discussions",
  ];

  const reflexologyInclusions = [
    "2-Day Intensive Hands-on Workshop Tuition",
    "Anatomical Foot & Hand Reflexology Charts",
    "Live Detection of Disease Protocols on Reflex Zones",
    "Treatment Procedures for Asthma, Diabetes, Cardiac & Kidney",
    "Diploma in Reflexology Practice Certificate",
    "Direct Mentorship by Senior Faculty Acupuncturists",
  ];

  return (
    <section id="fee" className="py-20 bg-[#2b2b2b] relative overflow-hidden border-t border-b border-[#b3b3b3]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1e1e1e] border border-[#b3b3b3]/40 text-[#d4d4d4] text-xs font-bold uppercase tracking-wider">
            <CreditCard className="w-3.5 h-3.5 text-[#ffffff]" />
            <span>Investment In Your Future</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#ffffff] tracking-tight">
            Transparent & <span className="gradient-text-silver">Affordable Fee Structures</span>
          </h2>
          <p className="text-sm sm:text-base text-[#d4d4d4]">
            Clear, all-inclusive pricing for vocational diplomas. High quality healthcare education made accessible with zero hidden costs.
          </p>
        </div>

        {/* Dual Program Pricing Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Card 1: Module 1 Diploma in Acupuncture (₹20,000) */}
          <div className="lg:col-span-7 rounded-3xl p-1 bg-gradient-to-r from-[#ffffff]/40 via-[#b3b3b3]/40 to-[#2b2b2b] shadow-2xl flex flex-col">
            <div className="bg-[#242424] rounded-[22px] p-6 sm:p-8 flex flex-col justify-between h-full border border-[#b3b3b3]/30 space-y-6">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2b2b2b] bg-[#d4d4d4] px-3 py-1 rounded-full border border-[#ffffff]">
                    Module 1 Flagship
                  </span>
                  <span className="text-xs font-semibold text-[#ffffff] bg-[#1e1e1e] px-3 py-1 rounded-full border border-[#b3b3b3]/30">
                    6 Months Intensive
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-[#ffffff]">Diploma in Acupuncture</h3>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-4xl sm:text-5xl font-black text-[#ffffff]">₹20,000</span>
                    <span className="text-[#b3b3b3] text-sm font-semibold">/ Full Course</span>
                  </div>
                  <p className="text-xs text-[#d4d4d4] font-medium mt-1">100% All-Inclusive • Includes Starter Needling Kit • Zero Hidden Fees</p>
                </div>

                <div className="pt-4 border-t border-[#b3b3b3]/20 space-y-3">
                  <h4 className="text-xs font-bold text-[#ffffff] uppercase tracking-wider flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#d4d4d4]" />
                    <span>What is Included in the ₹20,000 Fee:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {diplomaInclusions.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-[#1e1e1e] border border-[#b3b3b3]/30">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ffffff] shrink-0 mt-0.5" />
                        <span className="text-xs text-[#d4d4d4] font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <button
                  onClick={onOpenEnrollModal}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#ffffff] via-[#d4d4d4] to-[#b3b3b3] text-[#2b2b2b] font-extrabold text-sm shadow-lg hover:shadow-white/20 transition flex items-center justify-center gap-2"
                >
                  <GraduationCap className="w-5 h-5 text-[#2b2b2b]" />
                  <span>Enroll in Module 1 (₹20,000)</span>
                </button>
                <p className="text-[11px] text-center text-[#b3b3b3]">Easy installment payment options available upon request.</p>
              </div>

            </div>
          </div>

          {/* Card 2: Module 4 Diploma in Reflexology (₹5,000) */}
          <div className="lg:col-span-5 rounded-3xl p-1 bg-gradient-to-b from-[#b3b3b3]/30 via-[#2b2b2b] to-[#1e1e1e] shadow-2xl flex flex-col">
            <div className="bg-[#242424] rounded-[22px] p-6 sm:p-8 flex flex-col justify-between h-full border border-[#b3b3b3]/30 space-y-6">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2b2b2b] bg-[#ffffff] px-3 py-1 rounded-full border border-[#d4d4d4]">
                    Module 4 Specialized
                  </span>
                  <span className="text-xs font-semibold text-[#ffffff] bg-[#1e1e1e] px-3 py-1 rounded-full border border-[#b3b3b3]/30">
                    2 Days Hands-On
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-[#ffffff]">Diploma in Reflexology</h3>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-4xl sm:text-5xl font-black text-[#ffffff]">₹5,000</span>
                    <span className="text-[#b3b3b3] text-sm font-semibold">/ Full Workshop</span>
                  </div>
                  <p className="text-xs text-[#d4d4d4] font-medium mt-1">Foot & Hand Zone Therapy • Disease Detection & Clinical Treatment</p>
                </div>

                <div className="pt-4 border-t border-[#b3b3b3]/20 space-y-3">
                  <h4 className="text-xs font-bold text-[#ffffff] uppercase tracking-wider flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-[#d4d4d4]" />
                    <span>Reflexology ₹5,000 Inclusions:</span>
                  </h4>
                  <div className="space-y-2">
                    {reflexologyInclusions.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-[#1e1e1e] border border-[#b3b3b3]/30">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ffffff] shrink-0 mt-0.5" />
                        <span className="text-xs text-[#d4d4d4] font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <button
                  onClick={onOpenReflexologyModal || onOpenEnrollModal}
                  className="w-full py-4 rounded-xl bg-[#2b2b2b] hover:bg-[#1e1e1e] border border-[#b3b3b3]/50 text-[#ffffff] font-extrabold text-sm shadow-md hover:border-[#ffffff] transition flex items-center justify-center gap-2"
                >
                  <ArrowRight className="w-4 h-4 text-[#ffffff]" />
                  <span>Enroll in Module 4 (₹5,000)</span>
                </button>
                <p className="text-[11px] text-center text-[#b3b3b3]">Weekend batches available. Certificate awarded on completion.</p>
              </div>

            </div>
          </div>

        </div>

        <div className="mt-8 text-center text-xs text-[#b3b3b3] flex items-center justify-center gap-2">
          <HelpCircle className="w-4 h-4 text-[#ffffff]" />
          <span>Have questions about fees or installment assistance? Contact our counseling team anytime.</span>
        </div>

      </div>
    </section>
  );
}
