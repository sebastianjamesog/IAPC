"use client";

import React from "react";
import Image from "next/image";
import { Compass, Activity, Brain, HeartPulse, Sparkles, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const pillars = [
    {
      icon: Compass,
      title: "Authentic TCM Philosophy",
      description: "Rooted in classical Traditional Chinese Medicine theories, understanding body energy flow (Qi) and meridians to address root causes.",
      color: "from-[#ffffff] to-[#d4d4d4]",
    },
    {
      icon: Activity,
      title: "Contemporary Pain Protocols",
      description: "Modern neuro-anatomical evidence-based techniques specifically tailored for effective, non-invasive pain management.",
      color: "from-[#d4d4d4] to-[#b3b3b3]",
    },
    {
      icon: HeartPulse,
      title: "Patient-Centered Healing",
      description: "Empowering practitioners with compassionate diagnostic care and safe clinical needling standards from day one.",
      color: "from-[#ffffff] to-[#b3b3b3]",
    },
    {
      icon: Brain,
      title: "Academic Escalation Ladder",
      description: "Continuous learning infrastructure guiding dedicated scholars toward advanced international university degrees.",
      color: "from-[#d4d4d4] to-[#808080]",
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#2b2b2b] relative overflow-hidden border-t border-b border-[#b3b3b3]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1e1e1e] border border-[#b3b3b3]/40 text-[#d4d4d4] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#ffffff]" />
            <span>About Our Institution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#ffffff] tracking-tight">
            Bridging <span className="gradient-text-silver">Traditional Oriental Medicine</span> & <span className="text-[#d4d4d4] underline">Modern Science</span>
          </h2>
          <p className="text-base text-[#d4d4d4] leading-relaxed">
            The Institute of Acupuncture & Pain Control (IAPC) is dedicated to propagating authentic acupuncture education. Our mission is to produce competent, confident, and compassionate practitioners who effectively alleviate pain and promote holistic wellness.
          </p>
        </div>

        {/* Story Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text & Mission */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-2xl bg-[#242424] border border-[#b3b3b3]/30 relative">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#ffffff] to-[#b3b3b3] rounded-l-2xl" />
              <h3 className="text-xl font-bold text-[#ffffff] mb-2">Our Core Mission</h3>
              <p className="text-sm text-[#d4d4d4] leading-relaxed">
                Whether you are a healthcare professional looking to expand your therapeutic arsenal or a wellness seeker aiming for a fulfilling career in natural healing, IAPC provides the ideal environment to master the art and science of pain relief.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#ffffff]">Why Students Choose IAPC:</h4>
              <ul className="space-y-2">
                {[
                  "Rigorous practical needle technique workshops & clinical case studies",
                  "Deep focus on chronic pain conditions (Back pain, Sciatica, Migraines)",
                  "Experienced faculty blending decades of clinical practice & academic rigor",
                  "Structured mentorship for international university higher education (MD/PhD)",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-[#d4d4d4]">
                    <CheckCircle2 className="w-4 h-4 text-[#ffffff] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Consultation Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-1 bg-gradient-to-br from-[#ffffff]/40 via-[#b3b3b3]/30 to-[#2b2b2b] shadow-2xl overflow-hidden group">
              <div className="relative h-80 sm:h-96 w-full rounded-[22px] overflow-hidden">
                <Image
                  src="/images/consultation.png"
                  alt="Doctor performing acupuncture consultation and diagnostic mapping"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#1e1e1e]/85 backdrop-blur-md border border-[#b3b3b3]/30 text-xs">
                  <p className="font-bold text-[#ffffff]">Clinical Faculty Mentorship</p>
                  <p className="text-[11px] text-[#d4d4d4]">Direct one-on-one diagnostic case study evaluation</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillar Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="p-5 rounded-2xl bg-[#242424] border border-[#b3b3b3]/30 hover:border-[#ffffff] transition-all group hover:-translate-y-1"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${pillar.color} p-0.5 mb-3 shadow-md`}>
                  <div className="w-full h-full bg-[#2b2b2b] rounded-[10px] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#ffffff] group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <h4 className="text-base font-bold text-[#ffffff] mb-1">{pillar.title}</h4>
                <p className="text-xs text-[#b3b3b3] leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
