"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import DiplomaCourseSection from "@/components/DiplomaCourseSection";
import PainExplorer from "@/components/PainExplorer";
import PublicationsSection from "@/components/PublicationsSection";
import HigherEducationSection from "@/components/HigherEducationSection";
import FeeSection from "@/components/FeeSection";
import FaqSection from "@/components/FaqSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import EnrollmentForm from "@/components/EnrollmentForm";

export default function Home() {
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("Diploma Course in Acupuncture (₹20,000)");

  const handleOpenDiploma = () => {
    setSelectedProgram("Diploma Course in Acupuncture (₹20,000)");
    setEnrollModalOpen(true);
  };

  const handleOpenCounseling = () => {
    setSelectedProgram("General Admission & Counseling Inquiry");
    setEnrollModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#2b2b2b] text-slate-100 flex flex-col">
      {/* Header */}
      <Header onOpenEnrollModal={handleOpenDiploma} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenEnrollModal={handleOpenDiploma} />
        <AboutSection />
        <DiplomaCourseSection onOpenEnrollModal={handleOpenDiploma} />
        <PainExplorer />
        <PublicationsSection onOpenEnrollModal={handleOpenDiploma} />
        <HigherEducationSection onOpenCounselingModal={handleOpenCounseling} />
        <FeeSection onOpenEnrollModal={handleOpenDiploma} />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Enrollment / Counseling Form Modal */}
      <EnrollmentForm
        isOpen={enrollModalOpen}
        onClose={() => setEnrollModalOpen(false)}
        defaultProgram={selectedProgram}
      />
    </div>
  );
}
