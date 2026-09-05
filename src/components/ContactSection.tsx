"use client";

import React, { useState } from "react";
import { Phone, Mail, Globe, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [quickForm, setQuickForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#1e1e1e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2b2b2b] border border-[#b3b3b3]/40 text-[#d4d4d4] text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-[#ffffff]" />
            <span>Connect With Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#ffffff] tracking-tight">
            Contact Institute of <span className="gradient-text-silver">Acupuncture & Pain Control</span>
          </h2>
          <p className="text-sm text-[#d4d4d4]">
            Have questions about admissions, syllabus, or campus visits? Reach out to our academic team today.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-[#242424] border border-[#b3b3b3]/40 space-y-6">
              <h3 className="text-lg font-bold text-[#ffffff] border-b border-[#b3b3b3]/20 pb-3">Institutional Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#2b2b2b] border border-[#b3b3b3]/40 text-[#ffffff] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#b3b3b3] block">Admissions & Counseling Phone:</span>
                    <a href="tel:+919847335788" className="text-sm font-bold text-[#ffffff] hover:text-[#d4d4d4] transition">
                      +91 9847335788
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#2b2b2b] border border-[#b3b3b3]/40 text-[#ffffff] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#b3b3b3] block">Official Email Address:</span>
                    <a href="mailto:iapcoo123@gmail.com" className="text-sm font-bold text-[#ffffff] hover:text-[#d4d4d4] transition">
                      iapcoo123@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#2b2b2b] border border-[#b3b3b3]/40 text-[#ffffff] shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#b3b3b3] block">Website Portal:</span>
                    <a href="https://iapc.com" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[#ffffff] hover:underline">
                      www.iapc.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#2b2b2b] border border-[#b3b3b3]/40 text-[#ffffff] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#b3b3b3] block">Campus Address:</span>
                    <p className="text-sm font-medium text-[#d4d4d4]">
                      Institute of Acupuncture & Pain Control (IAPC),<br />
                      Parinamam Road, Kaloor,<br />
                      Kochi - 682017, Kerala, India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#2b2b2b] text-[#d4d4d4] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#b3b3b3] block">Office & Counseling Hours:</span>
                    <p className="text-xs font-semibold text-[#ffffff]">Monday - Saturday: 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Quick Inquiry Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#242424] border border-[#b3b3b3]/40 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#ffffff]">Send Us a Quick Message</h3>
              <p className="text-xs text-[#b3b3b3]">Request call back, syllabus PDF, or schedule a campus visit.</p>
            </div>

            {sent ? (
              <div className="p-6 rounded-2xl bg-[#1e1e1e] border border-[#b3b3b3]/40 text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-[#ffffff] mx-auto" />
                <h4 className="text-base font-bold text-[#ffffff]">Message Sent Successfully!</h4>
                <p className="text-xs text-[#d4d4d4]">Our academic team will respond to your query shortly.</p>
                <button
                  onClick={() => setSent(false)}
                  className="px-4 py-2 rounded-xl bg-[#2b2b2b] text-xs font-semibold text-[#ffffff]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#d4d4d4]">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Ramesh"
                      value={quickForm.name}
                      onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#1e1e1e] border border-[#b3b3b3]/30 text-[#ffffff] text-xs focus:outline-none focus:border-[#ffffff]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#d4d4d4]">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9847335788"
                      value={quickForm.phone}
                      onChange={(e) => setQuickForm({ ...quickForm, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#1e1e1e] border border-[#b3b3b3]/30 text-[#ffffff] text-xs focus:outline-none focus:border-[#ffffff]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#d4d4d4]">How can we help you? *</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us what information you need regarding Diploma course, fees, or university degree guidance..."
                    value={quickForm.message}
                    onChange={(e) => setQuickForm({ ...quickForm, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1e1e1e] border border-[#b3b3b3]/30 text-[#ffffff] text-xs focus:outline-none focus:border-[#ffffff] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#ffffff] via-[#d4d4d4] to-[#b3b3b3] text-[#2b2b2b] font-extrabold text-sm shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#2b2b2b]" />
                  <span>Send Quick Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
