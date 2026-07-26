"use client";

import React from "react";
import { Star, Quote, UserCheck } from "lucide-react";

export default function TestimonialsSection() {
  const reviews = [
    {
      name: "Dr. Aniruddh Kulkarni",
      role: "Physiotherapist & Clinical Acupuncturist",
      text: "The Diploma Course at IAPC transformed my clinical practice. The hands-on training for chronic sciatica and knee arthritis allowed me to offer immediate pain relief to patients who were unresponsive to conventional modalities.",
      rating: 5,
    },
    {
      name: "Priya Sundaram",
      role: "Wellness Consultant & Health Promoter",
      text: "Coming from a non-medical background, I was initially nervous. But IAPC's step-by-step needle safety and TCM meridian teaching gave me the confidence to open my own natural pain care practice.",
      rating: 5,
    },
    {
      name: "Dr. Meenakshi Sharma",
      role: "BAMS Practitioner (MD Prep Candidate)",
      text: "IAPC's guidance for global university MD preparation is unmatched. Their research orientation and clinical depth bridge ancient wisdom with modern medical evidence perfectly.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-[#1e1e1e] relative overflow-hidden border-t border-[#b3b3b3]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2b2b2b] border border-[#b3b3b3]/40 text-[#d4d4d4] text-xs font-bold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5 text-[#ffffff]" />
            <span>Practitioner Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#ffffff] tracking-tight">
            Hear From Our <span className="gradient-text-silver">Certified Graduates</span>
          </h2>
          <p className="text-sm text-[#d4d4d4]">
            Discover how our alumni are transforming lives and building rewarding clinical careers.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#242424] border border-[#b3b3b3]/30 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#ffffff]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#ffffff] text-[#ffffff]" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#b3b3b3]/40" />
                <p className="text-xs sm:text-sm text-[#d4d4d4] leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#b3b3b3]/20">
                <h4 className="text-sm font-bold text-[#ffffff]">{rev.name}</h4>
                <p className="text-xs text-[#b3b3b3] font-medium">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
