"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

export default function FaqSection() {
  const faqs = [
    {
      q: "Who is eligible to enroll in the Diploma Course in Acupuncture?",
      a: "The Diploma Course is open to healthcare professionals (allopaths, physiotherapists, AYUSH practitioners, nurses) looking to add acupuncture to their practice, as well as wellness enthusiasts, career seekers, and individuals seeking to master authentic natural healing.",
    },
    {
      q: "Do I need a prior medical degree to join the Diploma Course?",
      a: "No prior medical degree is strictly required for the basic Diploma Course. Our comprehensive curriculum starts from foundational anatomy, physiology, and TCM Meridian theories to ensure every student gains confidence.",
    },
    {
      q: "Does IAPC issue MD or PhD degrees directly?",
      a: "No. As per institutional guidelines, IAPC does not issue MD or PhD degrees directly. Instead, we provide premier preparatory coaching, clinical research mentorship, thesis guidance, and academic infrastructure to help students qualify for MD and PhD degrees offered by recognized Global Partner Universities.",
    },
    {
      q: "What is the fee for the Diploma Course in Acupuncture?",
      a: "The full course fee is ₹20,000/- (All-Inclusive). This covers all classroom lectures, hands-on clinical workshops, a complete practical acupuncture starter kit (needles, moxa, cupping set), study materials, and examination certification fees. Flexible payment options are available.",
    },
    {
      q: "What specific pain conditions are covered in the clinical training?",
      a: "Our practical protocols pay special attention to high-prevalence pain conditions including Chronic Lower Back Pain, Sciatica, Osteoarthritis, Migraines & Tension Headaches, and Cervical Spondylosis.",
    },
    {
      q: "How is the practical training conducted?",
      a: "Training involves live clinical workshops, hands-on point localization, sterile needle insertion practice under senior faculty supervision, and real patient case studies.",
    },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-20 bg-[#2b2b2b] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1e1e1e] border border-[#b3b3b3]/40 text-[#d4d4d4] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#ffffff]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#ffffff] tracking-tight">
            Frequently Asked <span className="gradient-text-silver">Questions</span>
          </h2>
          <p className="text-sm text-[#d4d4d4]">
            Find quick answers regarding our Diploma course, fee breakdown, clinical practice, and university degree preparation.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#242424] border border-[#b3b3b3]/30 overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-bold text-[#ffffff] hover:text-[#d4d4d4] transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#d4d4d4] shrink-0 transition-transform ${
                      isOpen ? "rotate-180 text-[#ffffff]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#d4d4d4] leading-relaxed border-t border-[#b3b3b3]/20 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
