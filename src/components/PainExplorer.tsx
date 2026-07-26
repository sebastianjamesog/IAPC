"use client";

import React, { useState } from "react";
import { Activity, Zap, CheckCircle, Shield } from "lucide-react";

interface Condition {
  id: string;
  name: string;
  category: string;
  symptoms: string;
  acupuncturePoints: string[];
  tcmPhilosophy: string;
  modernMechanism: string;
  clinicalSuccessRate: string;
}

export default function PainExplorer() {
  const conditions: Condition[] = [
    {
      id: "back-pain",
      name: "Chronic Lower Back Pain",
      category: "Musculoskeletal",
      symptoms: "Stiffness, lumbar spasms, sciatica nerve radiation, restricted mobility",
      acupuncturePoints: ["BL23 (Shenshu)", "BL40 (Weizhong)", "GV4 (Mingmen)", "GB34 (Yanglingquan)"],
      tcmPhilosophy: "Disperses Kidney Qi deficiency, moves stagnant Blood & Dampness in the Bladder Meridian.",
      modernMechanism: "Stimulates endorphin release, reduces pro-inflammatory cytokines, relaxes deep multifidus muscle tension.",
      clinicalSuccessRate: "88% Significant Pain Reduction",
    },
    {
      id: "sciatica",
      name: "Sciatica & Nerve Compression",
      category: "Neurological",
      symptoms: "Sharp shooting leg pain, numbness along sciatic nerve pathway, tingling",
      acupuncturePoints: ["GB30 (Hantiao)", "GB34 (Yanglingquan)", "BL54 (Zhibian)", "ST36 (Zusanli)"],
      tcmPhilosophy: "Clears Obstruction (Bi Syndrome) in Gallbladder & Bladder channels.",
      modernMechanism: "Relieves piriformis muscle spasms, improves nerve micro-circulation and myelin sheath repair.",
      clinicalSuccessRate: "85% Functional Recovery",
    },
    {
      id: "migraines",
      name: "Migraines & Chronic Headaches",
      category: "Vascular & Neurological",
      symptoms: "Throbbing unilateral head pain, photophobia, nausea, neck tightness",
      acupuncturePoints: ["GB20 (Fengchi)", "LI4 (Hegu)", "LV3 (Taichong)", "Taiyang (Extra Point)"],
      tcmPhilosophy: "Pacifies Liver Yang Rising and clears Wind-Heat obstruction from cranial meridians.",
      modernMechanism: "Regulates serotonin levels, normalizes cerebral vascular constriction/dilation dynamics.",
      clinicalSuccessRate: "90% Reduction in Attack Frequency",
    },
    {
      id: "arthritis",
      name: "Knee & Joint Arthritis (Osteoarthritis)",
      category: "Degenerative Joint",
      symptoms: "Joint swelling, crepitus, pain on weight-bearing, morning stiffness",
      acupuncturePoints: ["ST35 (Dubi)", "MN-LE-16 (Xiyan)", "SP9 (Yinlingquan)", "GB34"],
      tcmPhilosophy: "Expels Cold-Dampness from joint spaces and nourishes Tendon & Bone Qi.",
      modernMechanism: "Promotes synovial fluid secretion, decreases cartilage degradation markers, enhances local tissue perfusion.",
      clinicalSuccessRate: "84% Joint Mobility Improvement",
    },
    {
      id: "cervical",
      name: "Cervical Spondylosis & Neck Pain",
      category: "Spinal & Postural",
      symptoms: "Stiff neck, radiating pain down shoulders and arms, tension headaches",
      acupuncturePoints: ["GB20 (Fengchi)", "SI3 (Houxi)", "BL10 (Tianzhu)", "Jiaji (C4-C7)"],
      tcmPhilosophy: "Unblocks Qi flow along Small Intestine and Bladder meridians in cervical spine.",
      modernMechanism: "Relieves trapezius spasm, decompresses spinal nerve roots, reduces cervical tension.",
      clinicalSuccessRate: "87% Symptom Relief",
    },
  ];

  const [selectedCondition, setSelectedCondition] = useState<Condition>(conditions[0]);

  return (
    <section id="pain-explorer" className="py-20 bg-[#2b2b2b] relative overflow-hidden border-t border-[#b3b3b3]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1e1e1e] border border-[#b3b3b3]/40 text-[#d4d4d4] text-xs font-bold uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5 text-[#ffffff]" />
            <span>Interactive Pain Management Explorer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#ffffff] tracking-tight">
            How Acupuncture <span className="gradient-text-silver">Relieves Specific Pain Conditions</span>
          </h2>
          <p className="text-sm sm:text-base text-[#d4d4d4]">
            Select a condition below to explore the acupuncture meridian points, traditional Chinese medicine energy philosophy, and modern anatomical mechanisms taught in our Diploma Course.
          </p>
        </div>

        {/* Condition Selector Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {conditions.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedCondition(item)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                selectedCondition.id === item.id
                  ? "bg-gradient-to-r from-[#ffffff] to-[#d4d4d4] text-[#2b2b2b] shadow-lg scale-105"
                  : "bg-[#242424] text-[#d4d4d4] hover:text-[#ffffff] border border-[#b3b3b3]/30"
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        {/* Explorer Content Box */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-[#242424] border border-[#b3b3b3]/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Summary & Points */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2b2b2b] bg-[#d4d4d4] px-3 py-1 rounded-full border border-[#ffffff]">
                {selectedCondition.category}
              </span>
              <h3 className="text-2xl font-black text-[#ffffff] mt-3">{selectedCondition.name}</h3>
              <p className="text-xs text-[#b3b3b3] mt-1">Common symptoms: {selectedCondition.symptoms}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#1e1e1e] border border-[#b3b3b3]/30 space-y-3">
              <h4 className="text-xs font-bold text-[#ffffff] uppercase tracking-wider flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#d4d4d4]" />
                <span>Primary Meridian Points Taught:</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedCondition.acupuncturePoints.map((point, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-[#2b2b2b] border border-[#b3b3b3]/40 text-[#ffffff] text-xs font-semibold"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#1e1e1e] border border-[#b3b3b3]/40 text-[#d4d4d4] text-xs font-bold">
              <Shield className="w-4 h-4 text-[#ffffff] shrink-0" />
              <span>Clinical Benchmark: {selectedCondition.clinicalSuccessRate}</span>
            </div>
          </div>

          {/* Right TCM vs Modern Dual Cards */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-5 rounded-2xl bg-[#1e1e1e] border border-[#b3b3b3]/30 space-y-2">
              <div className="flex items-center gap-2 text-[#ffffff] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#ffffff]" />
                <span>Ancient TCM Energy Philosophy</span>
              </div>
              <p className="text-xs sm:text-sm text-[#d4d4d4] leading-relaxed font-medium">
                "{selectedCondition.tcmPhilosophy}"
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#1e1e1e] border border-[#b3b3b3]/30 space-y-2">
              <div className="flex items-center gap-2 text-[#d4d4d4] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#d4d4d4]" />
                <span>Modern Medical & Neuro-Anatomical Action</span>
              </div>
              <p className="text-xs sm:text-sm text-[#d4d4d4] leading-relaxed font-medium">
                "{selectedCondition.modernMechanism}"
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
