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
  const [selectedProgram, setSelectedProgram] = useState("Module 1: Diploma in Acupuncture (₹25,000)");

  const handleOpenDiploma = () => {
    setSelectedProgram("Module 1: Diploma in Acupuncture (₹25,000)");
    setEnrollModalOpen(true);
  };

  const handleOpenReflexology = () => {
    setSelectedProgram("Module 4: Diploma in Reflexology (₹5,000)");
    setEnrollModalOpen(true);
  };

  const handleOpenCounseling = (programName?: string) => {
    setSelectedProgram(programName || "General Admission & Counseling Inquiry");
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
        <DiplomaCourseSection
          onOpenEnrollModal={handleOpenDiploma}
          onOpenReflexologyModal={handleOpenReflexology}
        />
        <PainExplorer />
        <PublicationsSection onOpenEnrollModal={handleOpenDiploma} />
        <HigherEducationSection onOpenCounselingModal={handleOpenCounseling} />
        <FeeSection
          onOpenEnrollModal={handleOpenDiploma}
          onOpenReflexologyModal={handleOpenReflexology}
        />
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
