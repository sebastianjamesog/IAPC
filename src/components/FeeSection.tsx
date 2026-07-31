"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, CreditCard, HelpCircle, GraduationCap } from "lucide-react";

interface FeeSectionProps {
  onOpenEnrollModal?: () => void;
}

export default function FeeSection({ onOpenEnrollModal }: FeeSectionProps) {
  const inclusions = [
    "Full 3-Months Intensive Lecture & Workshop Tuition",
    "Complete Practical Acupuncture Kit (Needles, Moxa, Cupping Set)",
    "Comprehensive Printed Course Study Materials & Charts",
    "Clinical Case Study Supervision & Diagnostic Practice",
    "Final Certification Examination & Administrative Fees",
    "Lifelong Access to Alumni Seminars & Case Discussions",
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#ffffff] tracking-tight">
            Transparent & <span className="gradient-text-silver">Affordable Fee Structure</span>
          </h2>
          <p className="text-sm sm:text-base text-[#d4d4d4]">
            We believe quality healthcare education should be accessible to all dedicated learners without hidden costs.
          </p>
        </div>

        {/* Pricing Box */}
        <div className="mt-12 max-w-4xl mx-auto rounded-3xl p-1 bg-gradient-to-r from-[#ffffff]/40 via-[#b3b3b3]/40 to-[#2b2b2b] shadow-2xl">
          <div className="bg-[#242424] rounded-[22px] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-[#b3b3b3]/30">
            
            {/* Left Price Tag */}
            <div className="lg:col-span-5 text-center lg:text-left space-y-4 lg:border-r border-[#b3b3b3]/20 lg:pr-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2b2b2b] bg-[#d4d4d4] px-3 py-1 rounded-full border border-[#ffffff]">
                Diploma Course Full Fee
              </span>
              
              <div>
                <div className="flex items-baseline justify-center lg:justify-start gap-1">
                  <span className="text-4xl sm:text-5xl font-black text-[#ffffff]">₹20,000</span>
                  <span className="text-[#b3b3b3] text-sm font-semibold">/ Full Course</span>
                </div>
                <p className="text-xs text-[#d4d4d4] font-medium mt-1">100% All-Inclusive • Zero Hidden Charges</p>
              </div>

              <div className="p-3 rounded-xl bg-[#1e1e1e] border border-[#b3b3b3]/30 text-xs text-[#d4d4d4] space-y-1">
                <p className="font-semibold text-[#ffffff]">Flexible Payment Plans Available:</p>
                <p className="text-[11px] text-[#b3b3b3]">Easy installment options available upon request during counseling.</p>
              </div>

              <button
                onClick={onOpenEnrollModal}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#ffffff] via-[#d4d4d4] to-[#b3b3b3] text-[#2b2b2b] font-extrabold text-sm shadow-lg hover:shadow-white/20 transition flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-5 h-5 text-[#2b2b2b]" />
                <span>Enroll Now (₹20,000)</span>
              </button>
            </div>

            {/* Right Inclusions Checklist */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-base font-bold text-[#ffffff] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#d4d4d4]" />
                <span>What Is Included in Your ₹20,000 Fee?</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {inclusions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#1e1e1e] border border-[#b3b3b3]/30">
                    <CheckCircle2 className="w-4 h-4 text-[#ffffff] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#d4d4d4] font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center lg:text-left text-xs text-[#b3b3b3] flex items-center justify-center lg:justify-start gap-2">
                <HelpCircle className="w-4 h-4 text-[#ffffff]" />
                <span>Need financial assistance or installment details? Contact our counseling team.</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
