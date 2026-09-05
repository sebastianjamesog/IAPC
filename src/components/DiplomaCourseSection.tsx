"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BookOpen, Award, Clock, Users, Sparkles, ChevronRight, Layers, CheckCircle2, ShieldCheck, HeartPulse, ArrowRight } from "lucide-react";

interface DiplomaCourseSectionProps {
  onOpenEnrollModal?: () => void;
  onOpenReflexologyModal?: () => void;
}

export default function DiplomaCourseSection({ onOpenEnrollModal, onOpenReflexologyModal }: DiplomaCourseSectionProps) {
  const [activeModule, setActiveModule] = useState(0);

  const features = [
    {
      title: "Comprehensive Curriculum",
      desc: "Covers classical Yin-Yang & Five Elements, scientific endorphin & gate-control theories, meridian point localization, and disease treatments.",
      icon: BookOpen,
    },
    {
      title: "Hands-On Practical Needling",
      desc: "Master sterile needle insertion, electro-acupuncture stimulators, 7-star needles, ear needles, and moxibustion under supervision.",
      icon: Users,
    },
    {
      title: "Effects of Acupuncture & Deqi",
      desc: "Learn to elicit Deqi sensation, master 14 meridians & 361 points, and classify Ah-Shi, Front-Mu, Back-Shu, Analgesic, and Motor points.",
      icon: Layers,
    },
    {
      title: "W.H.O. Recognized Practice",
      desc: "Clinical treatment protocols for neurological, respiratory, cardiovascular, gastro-intestinal, genito-urinary, skin, and psychiatric disorders.",
      icon: Award,
    },
  ];

  const syllabusModules = [
    {
      part: "Part 1",
      title: "Theories of Acupuncture",
      subtitle: "Ancient TCM Principles & Modern Neurophysiology",
      topics: [
        "Theory of Yin and Yang (Dynamic equilibrium in health & pathology)",
        "Theory of Five Elements (Wood, Fire, Earth, Metal, Water correspondences)",
        "Mother and Son Theory (Sheng & Ke nourishing and controlling cycles)",
        "Endorphin Release Theory (Neurochemical modulation of endogenous opioids)",
        "Gate Control Theory of Pain (Spinal dorsal horn pain gating mechanism)",
      ],
    },
    {
      part: "Part 2",
      title: "Materials of Acupuncture",
      subtitle: "Clinical Instrumentation & Anatomical Precision",
      topics: [
        "Acupuncture Needles (Gauges, lengths, metal types & sterile insertion)",
        "Acupuncture Stimulator (Electro-acupuncture frequency & pulse parameters)",
        "7-Star Needles (Plum blossom dermal tapping technique for blood stasis)",
        "Moxa (Direct and indirect Artemisia moxibustion warming therapy)",
        "Ear Acupuncture Needles (Auricular press needles & intradermal tacks)",
        "Anatomy of Acupuncture (Safe needle angles, organ depth & regional landmarks)",
      ],
    },
    {
      part: "Part 3",
      title: "Effects of Acupuncture, Deqi & Point Classification",
      subtitle: "14 Meridians, 361 Points & Functional Categories",
      topics: [
        "14 Meridians and 361 Standard Acupuncture Points (Pathways & localization)",
        "Elicitation of Deqi (Needling sensation arrival, soreness, numbness & fullness)",
        "Ah-Shi Points (Tender trigger points) & Alarm Points",
        "Front-Mu and Back-Shu Points (Organ diagnostic and therapeutic association)",
        "Dangerous Points & Critical Anatomical Precautions",
        "Analgesic & Sedation Points (Pain alleviation and neural pacification)",
        "Homeostatic Points & Immunity Enhancing Points",
        "Motor Points (Neuromuscular junction activation) & Psychological Points",
      ],
    },
    {
      part: "Part 4",
      title: "Treatment of Various Diseases by Acupuncture",
      subtitle: "Comprehensive Clinical Disease Formulations",
      topics: [
        "Neurological Diseases (Stroke paralysis, Bell's palsy, neuralgia, neuropathy)",
        "Respiratory Diseases (Bronchial asthma, sinusitis, bronchitis, allergic rhinitis)",
        "Cardio-Vascular Diseases (Hypertension, palpitations, circulatory impairment)",
        "Disorders of Gastro-Intestinal System (Gastritis, IBS, acid reflux, constipation)",
        "Genito-Urinary Disorders (Nephritis, renal colic, urinary retention & incontinence)",
        "Skin Disorders (Leukoderma/Vitiligo, eczema, psoriasis, pruritus)",
        "Psychiatric Disorders (Depression, anxiety, panic/hysteria, addiction)",
        "Acute Disorders and Emergencies (Acute syncope, sprains, colic & trauma relief)",
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
            <span>Module 1 • Flagship Professional Program</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#ffffff] tracking-tight">
            Module 1: Diploma in <span className="gradient-text-silver">Acupuncture</span>
          </h2>
          <p className="text-base sm:text-lg text-[#d4d4d4] font-medium">
            W.H.O. Recognized Vocational Curriculum for Health Promoters & Health Seekers
          </p>
          <p className="text-sm sm:text-base text-[#b3b3b3] leading-relaxed">
            The foundational program bridging ancient oriental wisdom and modern medical science. Designed for doctors, healthcare workers, and wellness seekers wishing to establish an independent clinical acupuncture practice.
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

        {/* Course Highlights & Interactive Syllabus Explorer */}
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
                Module 1 Overview
              </span>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#ffffff] shrink-0" />
                  <div>
                    <span className="text-xs text-[#b3b3b3] block">Duration & Format</span>
                    <span className="text-sm font-bold text-[#ffffff]">6 Months (Lectures + Hands-on Workshops)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#ffffff] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-[#b3b3b3] block">Certification</span>
                    <span className="text-sm font-bold text-[#ffffff]">W.H.O. Recognized Professional Practice Certificate</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#d4d4d4] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-[#b3b3b3] block">Tuition & Kit</span>
                    <span className="text-sm font-bold text-[#ffffff]">₹25,000 (All-Inclusive with Needling Kit)</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#b3b3b3]/20 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#ffffff]">Clinical Treatments Covered:</h4>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  {[
                    "Neurological Diseases",
                    "Respiratory Disorders",
                    "Cardio-Vascular Diseases",
                    "Gastro-Intestinal System",
                    "Genito-Urinary Disorders",
                    "Skin & Dermatological",
                    "Psychiatric Disorders",
                    "Acute & Emergencies",
                  ].map((disease, i) => (
                    <div key={i} className="flex items-center gap-1.5 p-2 rounded-lg bg-[#2b2b2b] border border-[#b3b3b3]/30 font-medium text-[#d4d4d4]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ffffff] shrink-0" />
                      <span className="truncate">{disease}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={onOpenEnrollModal}
              className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-[#ffffff] via-[#d4d4d4] to-[#b3b3b3] text-[#2b2b2b] font-extrabold text-sm shadow-lg hover:shadow-white/20 transition"
            >
              Enroll in Module 1 (₹25,000 Full Fee)
            </button>
          </div>

          {/* Interactive Syllabus Explorer */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#242424] border border-[#b3b3b3]/40 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#ffffff] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#d4d4d4]" />
                <span>Module 1: Detailed Curriculum Breakdown</span>
              </h3>
              <p className="text-xs text-[#b3b3b3]">Comprehensive 4-part syllabus covering theories, instruments, points, and disease management</p>
            </div>

            {/* Part Selectors */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {syllabusModules.map((mod, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveModule(idx)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-bold transition text-center ${
                    activeModule === idx
                      ? "bg-[#ffffff] text-[#2b2b2b] shadow-lg scale-[1.02]"
                      : "bg-[#2b2b2b] text-[#b3b3b3] hover:text-[#ffffff] border border-[#b3b3b3]/30"
                  }`}
                >
                  <span className="block text-[10px] uppercase opacity-75">{mod.part}</span>
                  <span className="truncate block">{mod.title.split(" ")[0]}</span>
                </button>
              ))}
            </div>

            {/* Active Part Details */}
            <div className="p-6 rounded-2xl bg-[#1e1e1e] border border-[#b3b3b3]/30 space-y-4">
              <div>
                <span className="text-xs font-bold text-[#d4d4d4] uppercase tracking-wider">{syllabusModules[activeModule].part}</span>
                <h4 className="text-xl font-extrabold text-[#ffffff] mt-1">{syllabusModules[activeModule].title}</h4>
                <p className="text-xs text-[#b3b3b3] mt-0.5">{syllabusModules[activeModule].subtitle}</p>
              </div>

              <ul className="space-y-2.5 pt-2">
                {syllabusModules[activeModule].topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#d4d4d4] leading-relaxed">
                    <ChevronRight className="w-4 h-4 text-[#ffffff] shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-[#1e1e1e] border border-[#b3b3b3]/30 flex items-center justify-between text-xs text-[#d4d4d4]">
              <span className="font-semibold text-[#ffffff]">Progressive Academic Ladder:</span>
              <span>Leads directly to Module 2 (MD) & Module 3 (PhD)</span>
            </div>
          </div>

        </div>

        {/* DEDICATED SHOWCASE: MODULE 4 - DIPLOMA IN REFLEXOLOGY */}
        <div className="mt-16 rounded-3xl p-1 bg-gradient-to-r from-[#ffffff]/40 via-[#b3b3b3]/30 to-[#2b2b2b] shadow-2xl overflow-hidden">
          <div className="bg-[#242424] rounded-[22px] p-6 sm:p-10 border border-[#b3b3b3]/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-[#b3b3b3]/40 shadow-xl group">
                <Image
                  src="/images/reflexology.jpg"
                  alt="Clinical foot and hand reflexology treatment session"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#2b2b2b] bg-[#ffffff] px-3 py-1 rounded-full shadow border border-[#d4d4d4]">
                    Module 4 Program
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 p-2.5 rounded-xl bg-[#1e1e1e]/90 backdrop-blur-md border border-[#b3b3b3]/30 text-xs flex items-center justify-between">
                  <span className="font-bold text-[#ffffff]">Zone Therapy & Disease Detection</span>
                  <span className="text-[10px] text-[#d4d4d4] font-semibold uppercase">2 Days Intensive</span>
                </div>
              </div>
            </div>

            {/* Right Reflexology Details */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2b2b2b] bg-[#d4d4d4] px-3 py-1 rounded-full border border-[#ffffff]">
                    Specialized Certification
                  </span>
                  <span className="text-xs font-bold text-[#ffffff] bg-[#1e1e1e] px-3 py-1 rounded-full border border-[#b3b3b3]/40">
                    Duration: 2 Days
                  </span>
                  <span className="text-xs font-black text-[#2b2b2b] bg-[#ffffff] px-3 py-1 rounded-full">
                    Fee: ₹5,000/-
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#ffffff] tracking-tight">
                  Module 4: Diploma in <span className="gradient-text-silver">Reflexology</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#d4d4d4] leading-relaxed">
                  Master the art and science of detecting and treating internal diseases through reflex zones on the feet and hands. Learn how reflex stimulation restores vitality and supports success in life.
                </p>
              </div>

              {/* Core Syllabus Topics */}
              <div className="space-y-2.5 pt-1">
                <h4 className="text-xs font-bold text-[#ffffff] uppercase tracking-wider flex items-center gap-2">
                  <HeartPulse className="w-4 h-4 text-[#d4d4d4]" />
                  <span>Module 4 Curriculum Highlights:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#d4d4d4]">
                  {[
                    "Importance of Health for Success in Life",
                    "What is Reflexology? (Principles & Zones)",
                    "Detection of Diseases by Reflexology",
                    "Treatment of Asthma & Respiratory Allergies",
                    "Treatment of Diabetes & Endocrine Imbalance",
                    "Treatment of Kidney Diseases & Fluid Balance",
                    "Treatment of Cardiac & Cardiovascular Diseases",
                    "Treatment of Diseases of the Nervous System",
                  ].map((topic, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded-xl bg-[#1e1e1e] border border-[#b3b3b3]/30">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ffffff] shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action and Summary */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={onOpenReflexologyModal || onOpenEnrollModal}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#ffffff] via-[#d4d4d4] to-[#b3b3b3] text-[#2b2b2b] font-extrabold text-xs shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition"
                >
                  <span>Enroll in Module 4 Reflexology (₹5,000)</span>
                  <ArrowRight className="w-4 h-4 text-[#2b2b2b]" />
                </button>

                <span className="text-xs text-[#b3b3b3]">
                  2-Day Hands-on Workshop • Includes Chart & Kit
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
