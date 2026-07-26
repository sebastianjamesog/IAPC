"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BookOpen, Award, Clock, Users, Sparkles, ChevronRight, Layers } from "lucide-react";

interface DiplomaCourseSectionProps {
  onOpenEnrollModal?: () => void;
}

export default function DiplomaCourseSection({ onOpenEnrollModal }: DiplomaCourseSectionProps) {
  const [activeModule, setActiveModule] = useState(0);

  const features = [
    {
      title: "Comprehensive Curriculum",
      desc: "Covers TCM theories, meridian pathways, precise point locations, needle techniques, and evidence-based pain management.",
      icon: BookOpen,
    },
    {
      title: "Hands-On Practical Training",
      desc: "Extensive supervised practical sessions ensuring you gain the clinical confidence to treat patients effectively from day one.",
      icon: Users,
    },
    {
      title: "Holistic Energy Flow (Qi)",
      desc: "Learn not just techniques, but the core philosophy of restoring the body's natural balance to treat root causes rather than symptoms.",
      icon: Layers,
    },
    {
      title: "Expert Clinical Faculty",
      desc: "Learn directly from senior acupuncturists who combine decades of patient care with clear academic instruction.",
      icon: Award,
    },
  ];

  const syllabusModules = [
    {
      module: "Module 1",
      title: "Foundations of Traditional Chinese Medicine (TCM)",
      topics: [
        "Yin-Yang & Five Elements (Wu Xing) Theory",
        "Concept of Qi, Blood, and Body Fluids (Jin Ye)",
        "Zang-Fu Organ Pathology & Diagnostics",
        "Etiology of Pain in Traditional Acupuncture",
      ],
    },
    {
      module: "Module 2",
      title: "Meridian Anatomy & Point Location",
      topics: [
        "14 Primary Meridians & Extra Points Pathways",
        "Anatomical Landmark Measurement (Cun System)",
        "Top 60 High-Yield Clinical Acupuncture Points",
        "Meridian Pulse & Tongue Diagnostics",
      ],
    },
    {
      module: "Module 3",
      title: "Clinical Needling Techniques & Hygiene",
      topics: [
        "Sterile Needle Insertion, Angle & Depth Mastery",
        "De-Qi Energy Sensation Arrival Techniques",
        "Moxibustion, Cupping, and Electro-Acupuncture",
        "Safety Regulations, Clean Needle Technique (CNT)",
      ],
    },
    {
      module: "Module 4",
      title: "Specialized Pain Management Protocols",
      topics: [
        "Arthritis & Joint Degeneration Therapy",
        "Lumbar Back Pain & Sciatica Nerve Release",
        "Migraine, Tension Headaches & Facial Palsy",
        "Cervical Spondylosis & Shoulder Stiffness",
      ],
    },
    {
      module: "Module 5",
      title: "Clinical Internship & Practice Setup",
      topics: [
        "Live Patient Case Study Evaluations",
        "Patient Intake, History Taking & Charting",
        "Ethical Practice & Professional Standards",
        "Setting Up a Successful Acupuncture Clinic",
      ],
    },
  ];

  return (
    <section id="diploma" className="py-20 bg-[#1e1e1e] relative overflow-hidden">
      {/* Decorative ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#ffffff]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2b2b2b] border border-[#b3b3b3]/40 text-[#d4d4d4] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#ffffff]" />
            <span>Flagship Professional Program</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#ffffff] tracking-tight">
            Diploma Course in <span className="gradient-text-silver">Acupuncture</span>
          </h2>
          <p className="text-base sm:text-lg text-[#d4d4d4] font-medium">
            Designed for Health Promoters & Health Seekers
          </p>
          <p className="text-sm sm:text-base text-[#b3b3b3] leading-relaxed">
            Are you a healthcare professional looking to expand your therapeutic arsenal? Or a wellness enthusiast seeking a fulfilling career change? The Diploma Course in Acupuncture is your gateway to becoming a certified practitioner.
          </p>
        </div>

        {/* Why Choose Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#242424] border border-[#b3b3b3]/30 hover:border-[#ffffff] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2b2b2b] border border-[#b3b3b3]/40 flex items-center justify-center text-[#ffffff] mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-[#ffffff] mb-2">{item.title}</h3>
                <p className="text-xs text-[#b3b3b3] leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Course Highlights & Image Workshop Banner */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Key Specs Card with Workshop Image */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#242424] border border-[#b3b3b3]/40 space-y-6 flex flex-col justify-between overflow-hidden">
            <div>
              {/* Workshop Image Banner */}
              <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-6 border border-[#b3b3b3]/30 group">
                <Image
                  src="/images/workshop.png"
                  alt="Electro-acupuncture practical clinical workshop"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#242424] via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider text-[#2b2b2b] bg-[#ffffff] px-2.5 py-0.5 rounded-full border border-[#d4d4d4]">
                  Hands-On Clinical Workshop
                </span>
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#2b2b2b] bg-[#d4d4d4] px-3 py-1 rounded-full border border-[#ffffff]">
                Course Quick Overview
              </span>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#ffffff] shrink-0" />
                  <div>
                    <span className="text-xs text-[#b3b3b3] block">Duration & Format</span>
                    <span className="text-sm font-bold text-[#ffffff]">6 Months (Weekend/Flexible Batches + Practical Workshops)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#ffffff] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-[#b3b3b3] block">Certification</span>
                    <span className="text-sm font-bold text-[#ffffff]">Recognized Professional Practice Certificate</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#b3b3b3]/20 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#ffffff]">Special Focus Pain Management:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {["Arthritis & Joints", "Back Pain & Lumbar", "Migraines & Headaches", "Sciatica Nerve Pain"].map((pain, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-[#2b2b2b] border border-[#b3b3b3]/30 text-xs font-medium text-[#d4d4d4]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ffffff]" />
                      <span>{pain}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={onOpenEnrollModal}
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-[#ffffff] via-[#d4d4d4] to-[#b3b3b3] text-[#2b2b2b] font-extrabold text-sm shadow-lg hover:shadow-white/20 transition"
            >
              Enroll Now (₹25,000 Full Fee)
            </button>
          </div>

          {/* Interactive Syllabus Explorer */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#242424] border border-[#b3b3b3]/40 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#ffffff] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#d4d4d4]" />
                <span>Interactive Curriculum Breakdown</span>
              </h3>
              <p className="text-xs text-[#b3b3b3]">Explore what you will learn across the 5 structured modules</p>
            </div>

            {/* Module Selectors */}
            <div className="flex flex-wrap gap-2">
              {syllabusModules.map((mod, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveModule(idx)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition ${
                    activeModule === idx
                      ? "bg-[#ffffff] text-[#2b2b2b] shadow"
                      : "bg-[#2b2b2b] text-[#b3b3b3] hover:text-[#ffffff] border border-[#b3b3b3]/30"
                  }`}
                >
                  {mod.module}
                </button>
              ))}
            </div>

            {/* Active Module Details */}
            <div className="p-5 rounded-2xl bg-[#1e1e1e] border border-[#b3b3b3]/30 space-y-4">
              <div>
                <span className="text-xs font-semibold text-[#d4d4d4] uppercase tracking-wider">{syllabusModules[activeModule].module}</span>
                <h4 className="text-lg font-bold text-[#ffffff] mt-0.5">{syllabusModules[activeModule].title}</h4>
              </div>

              <ul className="space-y-2">
                {syllabusModules[activeModule].topics.map((topic, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#d4d4d4]">
                    <ChevronRight className="w-4 h-4 text-[#ffffff] shrink-0" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
