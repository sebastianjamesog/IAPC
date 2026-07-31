"use client";

import React, { useState } from "react";
import { X, CheckCircle, Send, Sparkles, ShieldCheck } from "lucide-react";

interface EnrollmentFormProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgram?: string;
}

export default function EnrollmentForm({ isOpen, onClose, defaultProgram = "Diploma Course in Acupuncture (₹20,000)" }: EnrollmentFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: defaultProgram,
    background: "Healthcare Professional",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = `IAPC-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(randomRef);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      program: defaultProgram,
      background: "Healthcare Professional",
      message: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1e1e1e]/85 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-[#242424] border border-[#b3b3b3]/50 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#2b2b2b] text-[#b3b3b3] hover:text-[#ffffff] border border-[#b3b3b3]/30"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#1e1e1e] border border-[#b3b3b3]/50 flex items-center justify-center text-[#ffffff] mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2b2b2b] bg-[#d4d4d4] px-3 py-1 rounded-full border border-[#ffffff]">
                Application Received
              </span>
              <h3 className="text-2xl font-black text-[#ffffff]">Enrollment Inquiry Submitted!</h3>
              <p className="text-xs sm:text-sm text-[#d4d4d4]">
                Thank you, <strong className="text-[#ffffff]">{formData.fullName}</strong>. Our admissions counseling team will contact you within 24 hours.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#1e1e1e] border border-[#b3b3b3]/30 space-y-1 text-left">
              <p className="text-xs text-[#b3b3b3]">Booking Reference Number:</p>
              <p className="text-lg font-mono font-bold text-[#ffffff]">{bookingRef}</p>
              <p className="text-[11px] text-[#d4d4d4]">Selected Program: {formData.program}</p>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ffffff] via-[#d4d4d4] to-[#b3b3b3] text-[#2b2b2b] font-bold text-sm shadow-md"
            >
              Done & Close
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#d4d4d4] uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4 text-[#ffffff]" />
                <span>Admissions & Counseling Booking</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#ffffff]">Admissions Open 2026-2027</h3>
              <p className="text-xs text-[#b3b3b3]">Fill in your details below to reserve your seat or request counseling.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#d4d4d4]">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Rajesh Sharma / Ananya Verma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1e1e1e] border border-[#b3b3b3]/30 text-[#ffffff] text-xs focus:outline-none focus:border-[#ffffff]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#d4d4d4]">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1e1e1e] border border-[#b3b3b3]/30 text-[#ffffff] text-xs focus:outline-none focus:border-[#ffffff]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#d4d4d4]">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1e1e1e] border border-[#b3b3b3]/30 text-[#ffffff] text-xs focus:outline-none focus:border-[#ffffff]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#d4d4d4]">Select Program of Interest *</label>
                <select
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1e1e1e] border border-[#b3b3b3]/30 text-[#ffffff] text-xs focus:outline-none focus:border-[#ffffff]"
                >
                  <option value="Diploma Course in Acupuncture (₹20,000)">
                    Diploma Course in Acupuncture (₹20,000 - Full Course)
                  </option>
                  <option value="MD (Acupuncture) University Preparation">
                    MD (Acupuncture) Global University Prep Guidance
                  </option>
                  <option value="PhD (Acupuncture) Research Preparation">
                    PhD (Acupuncture) Research & Thesis Guidance
                  </option>
                  <option value="General Admission & Counseling Inquiry">
                    General Admission & Counseling Inquiry
                  </option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#d4d4d4]">Your Background / Profession</label>
                <select
                  value={formData.background}
                  onChange={(e) => setFormData({ ...formData, background: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1e1e1e] border border-[#b3b3b3]/30 text-[#ffffff] text-xs focus:outline-none focus:border-[#ffffff]"
                >
                  <option value="Healthcare Professional">Healthcare Professional (Doctor / Physio / Nurse / Ayush)</option>
                  <option value="Wellness Enthusiast / Career Seeker">Wellness Enthusiast / Seeking Career Change</option>
                  <option value="Student / Scholar">Student / Academic Scholar</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#d4d4d4]">Message / Questions (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Any specific questions about batch timing or fee installments..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl bg-[#1e1e1e] border border-[#b3b3b3]/30 text-[#ffffff] text-xs focus:outline-none focus:border-[#ffffff] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#ffffff] via-[#d4d4d4] to-[#b3b3b3] text-[#2b2b2b] font-extrabold text-sm shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#2b2b2b]" />
                  <span>Submit Enrollment Application</span>
                </button>
              </div>

              <p className="text-[10px] text-center text-[#b3b3b3] flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#ffffff]" />
                <span>Your information is strictly private and secure. No spam.</span>
              </p>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
