"use client";

import React from "react";
import { GraduationCap, UserCheck, Star, Quote, CheckCircle2 } from "lucide-react";

export default function TestimonialsSection() {
  const pastStudents = [
    { id: 1, name: "Ismail Kunj", role: "Certified Acupuncture Alumni" },
    { id: 2, name: "Biswajith M", role: "Certified Acupuncture Alumni" },
    { id: 3, name: "Binoy John", role: "Certified Acupuncture Alumni" },
    { id: 4, name: "Ruby KB", role: "Certified Acupuncture Alumni" },
    { id: 5, name: "Augustine Stanly", role: "Certified Acupuncture Alumni" },
    { id: 6, name: "Robert KJ", role: "Certified Acupuncture Alumni" },
    { id: 7, name: "Justine", role: "Certified Acupuncture Alumni" },
    { id: 8, name: "KV Rajalin", role: "Certified Acupuncture Alumni" },
    { id: 9, name: "Vijayalakshmi Babu", role: "Certified Acupuncture Alumni" },
    { id: 10, name: "Josy Judson", role: "Certified Acupuncture Alumni" },
    { id: 11, name: "Benzi KB", role: "Certified Acupuncture Alumni" },
  ];

  const reviews = [
    {
      name: "Ismail Kunj",
      role: "Diploma Graduate & Practitioner",
      text: "The 3-month Diploma Course at IAPC provided exceptional practical exposure. The hands-on needle insertion techniques and meridian mapping gave me total confidence.",
      rating: 5,
    },
    {
      name: "Vijayalakshmi Babu",
      role: "Wellness Consultant & Certified Acupuncturist",
      text: "Learning under senior faculty at IAPC transformed my clinical practice. Pain relief protocols for sciatica and arthritis were remarkably effective.",
      rating: 5,
    },
    {
      name: "Binoy John",
      role: "Clinical Acupuncturist",
      text: "IAPC bridges classical TCM philosophy with modern clinical practice. The practical starter kit and faculty mentorship are second to none.",
      rating: 5,
    },
  ];

  return (
    <section id="students" className="py-20 bg-[#1e1e1e] relative overflow-hidden border-t border-[#b3b3b3]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Past Students Showcase */}
        <div>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2b2b2b] border border-[#b3b3b3]/40 text-[#d4d4d4] text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5 text-[#ffffff]" />
              <span>Alumni Roll of Honor</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#ffffff] tracking-tight">
              Our Past <span className="gradient-text-silver">Students & Graduates</span>
            </h2>
            <p className="text-sm text-[#d4d4d4]">
              Proudly presenting our accomplished alumni who have successfully completed the Diploma in Acupuncture program at IAPC.
            </p>
          </div>

          {/* Student Grid (11 Past Students) */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {pastStudents.map((student) => (
              <div
                key={student.id}
                className="p-4 rounded-2xl bg-[#242424] border border-[#b3b3b3]/30 hover:border-[#ffffff] transition-all flex items-center gap-3.5 group hover:-translate-y-0.5 shadow-md"
              >
                {/* Number Badge */}
                <div className="w-10 h-10 rounded-xl bg-[#2b2b2b] border border-[#b3b3b3]/40 flex items-center justify-center text-[#ffffff] font-extrabold text-xs shrink-0 group-hover:scale-105 transition-transform">
                  #{student.id}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm font-extrabold text-[#ffffff] truncate">{student.name}</h3>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ffffff] shrink-0" />
                  </div>
                  <p className="text-[11px] text-[#b3b3b3] font-medium truncate">{student.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Testimonials */}
        <div className="pt-8 border-t border-[#b3b3b3]/20">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2b2b2b] border border-[#b3b3b3]/40 text-[#d4d4d4] text-xs font-bold uppercase tracking-wider">
              <UserCheck className="w-3.5 h-3.5 text-[#ffffff]" />
              <span>Practitioner Testimonials</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#ffffff]">
              Graduate <span className="gradient-text-silver">Testimonials</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      </div>
    </section>
  );
}
