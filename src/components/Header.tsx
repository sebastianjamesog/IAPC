"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, Menu, X, GraduationCap } from "lucide-react";

interface HeaderProps {
  onOpenEnrollModal?: () => void;
}

export default function Header({ onOpenEnrollModal }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Diploma", href: "#diploma" },
    { name: "Pain Relief", href: "#pain-explorer" },
    { name: "Publications", href: "#publications" },
    { name: "MD & PhD", href: "#higher-education" },
    { name: "Fees", href: "#fee" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1e1e1e]/90 backdrop-blur-md border-b border-[#b3b3b3]/30 shadow-2xl py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Title */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ffffff] via-[#d4d4d4] to-[#b3b3b3] p-0.5 shadow-lg group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#2b2b2b] rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#ffffff] group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <div>
              <span className="text-lg sm:text-xl font-black tracking-tight text-[#ffffff] flex items-center gap-2">
                IAPC <span className="text-[#2b2b2b] bg-[#d4d4d4] font-bold text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full border border-[#ffffff] uppercase">ISO Certified</span>
              </span>
              <span className="block text-[9px] sm:text-[10px] text-[#d4d4d4] font-semibold tracking-wider uppercase">
                Institute of Acupuncture & Pain Control
              </span>
            </div>
          </Link>

          {/* Desktop Navigation with Clean Spacing */}
          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-[#d4d4d4] hover:text-[#ffffff] px-2 py-1 rounded-lg hover:bg-[#242424] transition-all tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Navigation for Medium/Large Screens */}
          <nav className="hidden lg:flex xl:hidden items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-[#d4d4d4] hover:text-[#ffffff] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Clean Primary Action Button (No Counseling Button) */}
          <div className="hidden sm:flex items-center shrink-0">
            <button
              onClick={onOpenEnrollModal}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ffffff] via-[#d4d4d4] to-[#b3b3b3] text-[#2b2b2b] font-black text-xs flex items-center gap-2 shadow-lg hover:shadow-white/20 hover:scale-[1.03] transition-all"
            >
              <GraduationCap className="w-4 h-4 text-[#2b2b2b]" />
              <span>Enroll Now (₹25,000)</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#242424] text-[#d4d4d4] hover:text-[#ffffff] border border-[#b3b3b3]/40"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1e1e1e]/98 border-b border-[#b3b3b3]/40 px-5 pt-4 pb-6 space-y-4 backdrop-blur-xl">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-[#d4d4d4] hover:text-[#ffffff] px-4 py-2.5 rounded-xl hover:bg-[#242424] transition"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#b3b3b3]/30">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenEnrollModal) onOpenEnrollModal();
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#ffffff] to-[#d4d4d4] text-[#2b2b2b] font-black text-sm flex items-center justify-center gap-2 shadow-lg"
            >
              <GraduationCap className="w-5 h-5 text-[#2b2b2b]" />
              <span>Enroll in Diploma Course (₹25,000)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
