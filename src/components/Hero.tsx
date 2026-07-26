"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Award, GraduationCap, CheckCircle2, ArrowRight, Zap } from "lucide-react";

interface HeroProps {
  onOpenEnrollModal?: () => void;
}

export default function Hero({ onOpenEnrollModal }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#1e1e1e] via-[#2b2b2b] to-[#242424]">
      {/* Subtle Monochrome Glow Background Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#d4d4d4]/10 rounded-full blur-[150px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-[#ffffff]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e1e1e] border border-[#b3b3b3]/50 text-[#d4d4d4] text-xs font-bold tracking-wide shadow-inner">
              <SparkleIcon className="w-4 h-4 text-[#ffffff] animate-spin-slow" />
              <span>Admissions Open 2026-2027 • Limited Seats Available</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#ffffff] leading-[1.15] tracking-tight">
              Empowering Healing Through{" "}
              <span className="gradient-text-silver">Ancient Wisdom</span> &{" "}
              <span className="text-[#d4d4d4] underline decoration-[#b3b3b3]/50">Modern Science</span>
            </h1>

            <p className="text-base sm:text-lg text-[#d4d4d4] font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              The premier institution for authentic acupuncture education. We bridge traditional oriental medicine with contemporary healthcare, empowering health promoters and seekers with certified clinical mastery.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-2 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-sm text-[#ffffff] bg-[#242424] p-2.5 rounded-xl border border-[#b3b3b3]/30">
                <CheckCircle2 className="w-4 h-4 text-[#ffffff] shrink-0" />
                <span>100% Practical Training</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#ffffff] bg-[#242424] p-2.5 rounded-xl border border-[#b3b3b3]/30">
                <CheckCircle2 className="w-4 h-4 text-[#d4d4d4] shrink-0" />
                <span>Global MD/PhD Prep</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#ffffff] bg-[#242424] p-2.5 rounded-xl border border-[#b3b3b3]/30">
                <CheckCircle2 className="w-4 h-4 text-[#ffffff] shrink-0" />
                <span>₹25,000 All-Inclusive Fee</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#ffffff] bg-[#242424] p-2.5 rounded-xl border border-[#b3b3b3]/30">
                <CheckCircle2 className="w-4 h-4 text-[#d4d4d4] shrink-0" />
                <span>Recognized Certification</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenEnrollModal}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#ffffff] via-[#d4d4d4] to-[#b3b3b3] text-[#2b2b2b] text-base font-extrabold shadow-xl hover:shadow-white/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2.5"
              >
                <GraduationCap className="w-5 h-5 text-[#2b2b2b]" />
                <span>Enroll in Diploma (₹25,000)</span>
                <ArrowRight className="w-4 h-4 text-[#2b2b2b]" />
              </button>

              <a
                href="#diploma"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#242424] hover:bg-[#1e1e1e] border border-[#b3b3b3]/50 text-[#ffffff] text-sm font-semibold transition flex items-center justify-center gap-2"
              >
                <span>View Course Details</span>
              </a>
            </div>
          </div>

          {/* Right Column Visual Banner / Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-[#ffffff]/40 via-[#b3b3b3]/20 to-[#2b2b2b] shadow-2xl overflow-hidden group">
              <div className="bg-[#242424] rounded-[22px] overflow-hidden border border-[#b3b3b3]/30 relative">
                
                {/* Clinical Image Container */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <Image
                    src="/images/hero.png"
                    alt="Clinical Electro-Acupuncture Therapy for Pain Relief"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#242424] via-[#242424]/40 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#2b2b2b] bg-[#ffffff] px-3 py-1 rounded-full shadow border border-[#d4d4d4]">
                      Clinical Acupuncture Practice
                    </span>
                    <div className="flex items-center gap-1 text-[#ffffff] text-xs font-bold bg-[#1e1e1e]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#b3b3b3]/40">
                      <Zap className="w-3.5 h-3.5 text-[#ffffff] fill-[#ffffff]" />
                      <span>Next Batch Starting Soon</span>
                    </div>
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-6 space-y-4 relative z-10 -mt-6 bg-[#242424] rounded-t-2xl border-t border-[#b3b3b3]/20">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-extrabold text-[#ffffff]">Diploma in Acupuncture</h3>
                      <p className="text-xs text-[#d4d4d4] font-medium">For Healthcare Professionals & Seekers</p>
                    </div>
                    <span className="text-sm font-black text-[#2b2b2b] bg-[#ffffff] px-2.5 py-1 rounded-lg border border-[#b3b3b3]">
                      ₹25,000
                    </span>
                  </div>

                  <div className="space-y-2 text-xs text-[#d4d4d4]">
                    <div className="flex justify-between">
                      <span className="text-[#b3b3b3]">Duration:</span>
                      <span className="font-semibold text-[#ffffff]">6 Months Intensive</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#b3b3b3]">Clinical Focus:</span>
                      <span className="font-semibold text-[#d4d4d4]">Arthritis, Back Pain, Migraines, Sciatica</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#b3b3b3]">Materials Included:</span>
                      <span className="font-semibold text-[#ffffff]">Practical Needling Kit & Notes</span>
                    </div>
                  </div>

                  {/* Pathway Box */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#2b2b2b] to-[#1e1e1e] border border-[#b3b3b3]/40 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-[#ffffff] text-[#2b2b2b]">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#ffffff]">MD & PhD Pathways</h4>
                        <p className="text-[10px] text-[#d4d4d4]">Academic prep for Global Universities</p>
                      </div>
                    </div>
                    <a href="#higher-education" className="text-xs text-[#ffffff] font-semibold hover:underline">
                      Learn More
                    </a>
                  </div>
                </div>

                {/* Bottom Trust Stat */}
                <div className="px-6 py-3 bg-[#1e1e1e] border-t border-[#b3b3b3]/20 flex items-center justify-between text-xs text-[#d4d4d4] relative z-10">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#ffffff]" />
                    <span>Authorized Training Center</span>
                  </div>
                  <span className="text-[#ffffff] font-medium">Hands-On Guarantee</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SparkleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
    </svg>
  );
}
