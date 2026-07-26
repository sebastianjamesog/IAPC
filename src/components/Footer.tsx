"use client";

import React from "react";
import { Sparkles, Phone, Mail, Globe, MapPin, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-[#b3b3b3]/30 text-[#d4d4d4] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#b3b3b3]/20">
          
          {/* Col 1 Brand */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ffffff] via-[#d4d4d4] to-[#b3b3b3] p-0.5 shadow-lg">
                <div className="w-full h-full bg-[#2b2b2b] rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#ffffff]" />
                </div>
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-[#ffffff] block">
                  IAPC
                </span>
                <span className="text-[10px] text-[#d4d4d4] font-medium tracking-wide uppercase">
                  Institute of Acupuncture & Pain Control
                </span>
              </div>
            </div>

            <p className="text-[#d4d4d4] leading-relaxed max-w-sm">
              Empowering Healing Through Ancient Wisdom & Modern Science. The premier institution for authentic acupuncture education, clinical pain management, and global university academic preparation.
            </p>

            <div className="flex items-center gap-4 text-[#d4d4d4] pt-1">
              <a href="tel:+919876543210" className="hover:text-[#ffffff] flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#ffffff]" />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:admissions@iapc.com" className="hover:text-[#ffffff] flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#d4d4d4]" />
                <span>admissions@iapc.com</span>
              </a>
            </div>
          </div>

          {/* Col 2 Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#ffffff] uppercase tracking-wider">Programs & Education</h4>
            <ul className="space-y-2 text-[#d4d4d4]">
              <li>
                <a href="#diploma" className="hover:text-[#ffffff] transition">
                  Diploma Course in Acupuncture (₹25,000)
                </a>
              </li>
              <li>
                <a href="#pain-explorer" className="hover:text-[#ffffff] transition">
                  Interactive Pain Relief Map
                </a>
              </li>
              <li>
                <a href="#higher-education" className="hover:text-[#ffffff] transition">
                  MD (Acupuncture) University Prep
                </a>
              </li>
              <li>
                <a href="#higher-education" className="hover:text-[#ffffff] transition">
                  PhD (Acupuncture) Research Guidance
                </a>
              </li>
              <li>
                <a href="#fee" className="hover:text-[#ffffff] transition">
                  Affordable Fee Structure & Installments
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 Institutional Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-[#ffffff] uppercase tracking-wider">Official Domain & Address</h4>
            <div className="space-y-2 text-[#d4d4d4]">
              <p className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#ffffff] shrink-0" />
                <span>Domain: <strong className="text-[#ffffff]">iapc.com</strong></span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d4d4d4] shrink-0 mt-0.5" />
                <span>Institute of Acupuncture & Pain Control, Main Academic Campus, Healthcare & Wellness Corridor, India.</span>
              </p>
              <div className="p-3 rounded-xl bg-[#2b2b2b] border border-[#b3b3b3]/30 text-[11px] text-[#d4d4d4] space-y-1">
                <div className="flex items-center gap-1 text-[#ffffff] font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>ISO 9001:2015 Certified Educational Institution</span>
                </div>
                <p>Authorized Clinical Practical Training Center</p>
              </div>
            </div>
          </div>

        </div>

        {/* Institutional Disclaimer Banner */}
        <div className="py-6 border-b border-[#b3b3b3]/20 text-[11px] text-[#b3b3b3] leading-relaxed">
          <p>
            <strong className="text-[#d4d4d4]">Academic & Regulatory Disclaimer:</strong> Institute of Acupuncture & Pain Control (IAPC) is an institution dedicated to vocational and clinical acupuncture education. IAPC does not directly award MD or PhD degree credentials; we assist, mentor, and prepare students to qualify for MD and PhD degree programs offered by recognized Global Universities.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#b3b3b3]">
          <p>© {new Date().getFullYear()} Institute of Acupuncture & Pain Control (IAPC). All rights reserved. Registered domain: <a href="https://iapc.com" className="text-[#ffffff] hover:underline">iapc.com</a></p>
          <div className="flex items-center gap-4 text-[11px]">
            <a href="#about" className="hover:text-[#ffffff]">Privacy Policy</a>
            <span>•</span>
            <a href="#about" className="hover:text-[#ffffff]">Terms of Admission</a>
            <span>•</span>
            <a href="#contact" className="hover:text-[#ffffff]">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
