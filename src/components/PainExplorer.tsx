"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Activity, Zap, CheckCircle2, Shield, HeartPulse, Sparkles, Wind, Droplets, Stethoscope, Brain, Gauge } from "lucide-react";

interface ConditionCategory {
  id: string;
  number: number;
  category: string;
  title: string;
  conditionsList: string[];
  image: string;
  imageAlt: string;
  imageCaption: string;
  symptoms: string;
  primaryPoints: string[];
  tcmPhilosophy: string;
  modernMechanism: string;
  whoRecognition: string;
  icon: React.ElementType;
}

export default function PainExplorer() {
  const categories: ConditionCategory[] = [
    {
      id: "painful-conditions",
      number: 1,
      category: "Pain Management Focus",
      title: "Painful Conditions",
      conditionsList: [
        "Headache",
        "Cervical Spondylitis",
        "Lumbago",
        "Knee Joint Pain",
      ],
      image: "/images/chronic_pain.jpg",
      imageAlt: "Clinical acupuncture treatment for joint and cervical chronic pain",
      imageCaption: "Clinical Knee Joint & Cervical Spine Needling Protocol",
      symptoms: "Throbbing cranial pressure, stiff neck, chronic lumbar spasm, restricted joint flexion & weight-bearing pain",
      primaryPoints: ["GB20", "LI4", "BL23", "BL40", "ST35", "GB34"],
      tcmPhilosophy: "Resolves Qi & Blood Stagnation, expels Wind-Cold-Damp Bi obstruction from spinal and joint meridians, restoring free flow.",
      modernMechanism: "Stimulates beta-endorphins & dynorphins release, downregulates substance P, dramatically reduces joint cytokines & inflammatory swelling.",
      whoRecognition: "W.H.O. Recognized: Primary recommendation for chronic back pain, cervical spondylitis, headache, and osteoarthritis.",
      icon: Activity,
    },
    {
      id: "respiratory-disorders",
      number: 2,
      category: "Respiratory Scope",
      title: "Respiratory Disorders",
      conditionsList: [
        "Bronchial Asthma",
        "Sinusitis",
        "Bronchitis",
        "Asthma & Allergic Rhinitis",
      ],
      image: "/images/chronic_respiratory.jpg",
      imageAlt: "Acupuncture treatment for respiratory airway relief and lung meridians",
      imageCaption: "Thoracic & Lung Meridian Point Stimulation",
      symptoms: "Wheezing, chronic productive cough, facial sinus pressure, shortness of breath, nocturnal dyspnea",
      primaryPoints: ["LU5", "LU7", "BL13", "Dingchuan", "LI20", "RN17"],
      tcmPhilosophy: "Clears Wind-Heat and Phlegm-Damp from the respiratory channels; restores the descending and dispersing function of Lung Qi.",
      modernMechanism: "Inhibits bronchospasm, normalizes airway autonomic tone, reduces IgE and histamine-mediated mucosal inflammation in bronchial tissues.",
      whoRecognition: "W.H.O. Recognized: Effective for bronchial asthma, acute/chronic sinusitis, and recurrent bronchitis.",
      icon: Wind,
    },
    {
      id: "skin-disorders",
      number: 3,
      category: "Dermatological Scope",
      title: "Skin Disorders",
      conditionsList: [
        "Leukoderma",
        "Eczema",
        "Psoriasis",
      ],
      image: "/images/chronic_skin.jpg",
      imageAlt: "Clinical dermatological acupuncture and cupping therapy on patient back",
      imageCaption: "Blood-Clearing Meridian & Dermal Needling Therapy",
      symptoms: "Depigmented cutaneous patches, erythematous pruritic rashes, scaly silvery plaques, epidermal irritation",
      primaryPoints: ["SP10", "SP6", "LI11", "BL17", "GV14", "Ashi Points"],
      tcmPhilosophy: "Cools Blood Heat, dispels Toxic Wind-Dampness from skin pores, and nourishes defensive Wei Qi to foster natural tissue repigmentation.",
      modernMechanism: "Regulates cutaneous T-lymphocytes, enhances microvascular perfusion to dermis, stimulates melanocyte migration, reduces chronic skin flaking.",
      whoRecognition: "W.H.O. Recognized: Documented therapeutic benefit in stubborn inflammatory and immune-mediated dermatological conditions.",
      icon: Droplets,
    },
    {
      id: "circulatory-disorders",
      number: 4,
      category: "Cardiovascular Scope",
      title: "Circulatory Disorders",
      conditionsList: [
        "Hypochromic Anemia",
        "Rheumatic Heart Disease",
        "Dizziness & Vertigo",
      ],
      image: "/images/chronic_circulatory.jpg",
      imageAlt: "Traditional pulse diagnosis and circulatory meridian acupuncture session",
      imageCaption: "Radial Pulse Diagnosis & Micro-Vascular Regulation",
      symptoms: "Chronic fatigue, orthostatic dizziness, vestibular vertigo, peripheral pallor, cardiac palpitations, low vitality",
      primaryPoints: ["PC6", "HT7", "ST36", "SP6", "BL15", "BL20"],
      tcmPhilosophy: "Tonifies Spleen Qi to generate Blood, harmonizes Heart Shen, and pacifies internal Liver Wind causing postural and vestibular vertigo.",
      modernMechanism: "Improves peripheral microcirculation, regulates coronary artery blood flow, stabilizes vestibular blood flow to the inner ear, enhances erythropoietin efficiency.",
      whoRecognition: "W.H.O. Recognized: Proven clinical efficacy for dizziness, vertigo (Ménière's), and circulatory neuro-vascular regulation.",
      icon: HeartPulse,
    },
    {
      id: "genital-urinary",
      number: 5,
      category: "Genito-Urinary Scope",
      title: "Genital & Urinary Disorders",
      conditionsList: [
        "Nephritis",
        "Renal Colic",
        "Retention of Urine",
      ],
      image: "/images/chronic_urinary.jpg",
      imageAlt: "Lower back kidney meridian acupuncture for renal and urinary wellness",
      imageCaption: "BL23 Renal & Bladder Pathway Decompression",
      symptoms: "Sharp spasmodic flank pain, painful urination, bladder distension, fluid retention, impaired micturition",
      primaryPoints: ["BL23", "BL28", "CV3", "CV4", "SP9", "KI3"],
      tcmPhilosophy: "Fortifies Kidney Yang, clears Damp-Heat obstruction from the Bladder meridian, and unblocks the physiological water gates.",
      modernMechanism: "Relieves smooth muscle spasm of the ureter and bladder neck, stimulates detrusor contraction reflex, promotes renal micro-filtration.",
      whoRecognition: "W.H.O. Recognized: Highly documented for acute renal colic spasm relief and neurogenic bladder/urine retention.",
      icon: Gauge,
    },
    {
      id: "mental-disorders",
      number: 6,
      category: "Psychiatric & Addiction Scope",
      title: "Mental Disorders",
      conditionsList: [
        "Depression",
        "Drug & Alcohol Addiction",
        "Hysteria",
      ],
      image: "/images/chronic_mental.jpg",
      imageAlt: "Calming cranial acupuncture for mental relief and nervous system balance",
      imageCaption: "Cranial Shen Harmony & NADA Addiction Protocol",
      symptoms: "Chronic low mood, addictive craving spikes, psychomotor agitation, emotional instability, sleep disturbances",
      primaryPoints: ["GV20", "Yintang", "Ear Shenmen", "Sympathetic Ear Point", "HT7", "LV3"],
      tcmPhilosophy: "Calms the disturbed Shen (Spiritual Mind), pacifies Liver Fire uprising, and clears mental stagnation to bring tranquility.",
      modernMechanism: "Triggers release of serotonin, dopamine, and GABA; regulates the hypothalamic-pituitary-adrenal (HPA) axis, suppresses substance withdrawal craving.",
      whoRecognition: "W.H.O. Recognized: Clinical evidence supporting acupuncture in depression, psychosomatic anxiety, and addiction recovery protocols.",
      icon: Brain,
    },
    {
      id: "neurological-disorders",
      number: 7,
      category: "Neurology & Rehabilitation",
      title: "Neurological Disorders",
      conditionsList: [
        "Facial Paralysis",
        "Sciatica & Peripheral Neuropathy",
        "Trigeminal Neuralgia",
        "Post-Stroke Rehabilitation",
      ],
      image: "/images/chronic_neurological.jpg",
      imageAlt: "Clinical cranial and facial nerve acupuncture rehabilitation",
      imageCaption: "Precision Facial & Motor Nerve Neurological Needling",
      symptoms: "Facial muscle drooping, loss of smile symmetry, sharp burning nerve pain, extremity weakness, post-stroke motor impairment",
      primaryPoints: ["ST4", "ST6", "GB14", "LI4", "GB30", "DU20", "Scalp Motor Line"],
      tcmPhilosophy: "Dispels External Wind-Phlegm obstructing the cranial channels, revives stagnant Qi along sinew meridians, and restores muscular movement.",
      modernMechanism: "Enhances facial and cranial nerve microcirculation, prevents nerve axonal degeneration, accelerates neuromuscular re-innervation and motor cortical neuroplasticity.",
      whoRecognition: "W.H.O. Recognized: Foremost official indication for Bell's palsy, facial paralysis recovery, and post-stroke rehabilitation.",
      icon: Stethoscope,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<ConditionCategory>(categories[0]);

  return (
    <section id="pain-explorer" className="py-20 bg-[#2b2b2b] relative overflow-hidden border-t border-[#b3b3b3]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1e1e1e] border border-[#b3b3b3]/40 text-[#d4d4d4] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#ffffff]" />
            <span>W.H.O. Recognized Clinical Scope</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#ffffff] tracking-tight">
            Chronic Disease & <span className="gradient-text-silver">Special Focus Pain Management</span>
          </h2>
          <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed">
            World Health Organization (W.H.O.) recognized clinical categories. Explore how acupuncture targets painful conditions, internal disorders, and chronic diseases taught comprehensively across our diploma and advanced degree curriculums.
          </p>
        </div>

        {/* 7 Categories Horizontal Selector Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {categories.map((item) => {
            const Icon = item.icon;
            const isSelected = selectedCategory.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedCategory(item)}
                className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  isSelected
                    ? "bg-gradient-to-r from-[#ffffff] via-[#e6e6e6] to-[#d4d4d4] text-[#2b2b2b] shadow-xl scale-[1.03] border-transparent"
                    : "bg-[#242424] text-[#d4d4d4] hover:text-[#ffffff] border border-[#b3b3b3]/30 hover:border-[#ffffff]/60"
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${
                  isSelected ? "bg-[#2b2b2b] text-[#ffffff]" : "bg-[#1e1e1e] text-[#b3b3b3]"
                }`}>
                  {item.number}
                </span>
                <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-[#2b2b2b]" : "text-[#ffffff]"}`} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Feature Display Box */}
        <div className="mt-10 p-6 sm:p-9 rounded-3xl bg-[#242424] border border-[#b3b3b3]/40 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Full-Height Image Showcase */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative h-72 sm:h-96 lg:h-full min-h-[340px] w-full rounded-2xl overflow-hidden border border-[#b3b3b3]/40 shadow-xl group">
              <Image
                src={selectedCategory.image}
                alt={selectedCategory.imageAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-[#1e1e1e]/20 to-transparent" />
              
              {/* Category Badge Over Photo */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#2b2b2b] bg-[#ffffff] px-3 py-1 rounded-full shadow border border-[#d4d4d4]">
                  Module #{selectedCategory.number} Focus
                </span>
                <span className="text-[11px] font-semibold text-[#ffffff] bg-[#1e1e1e]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#b3b3b3]/40">
                  {selectedCategory.category}
                </span>
              </div>

              {/* Bottom Photo Caption */}
              <div className="absolute bottom-3 left-4 right-4 p-2.5 rounded-xl bg-[#1e1e1e]/90 backdrop-blur-md border border-[#b3b3b3]/30 text-xs flex items-center justify-between">
                <span className="font-bold text-[#ffffff]">{selectedCategory.imageCaption}</span>
                <span className="text-[10px] text-[#d4d4d4] font-medium uppercase tracking-wide">Real Clinical Photo</span>
              </div>
            </div>
          </div>

          {/* Right Column: Category Details, Disorders List & Endorsement */}
          <div className="lg:col-span-7 space-y-5 flex flex-col justify-between">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2b2b2b] bg-[#d4d4d4] px-3 py-1 rounded-full border border-[#ffffff]">
                Category {selectedCategory.number} of 7
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#ffffff] mt-3">{selectedCategory.title}</h3>
              <p className="text-xs sm:text-sm text-[#b3b3b3] mt-1.5 leading-relaxed">
                <strong className="text-[#d4d4d4]">Clinical Manifestations & Symptoms:</strong> {selectedCategory.symptoms}
              </p>
            </div>

            {/* Disorders List Pill Section */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#1e1e1e] border border-[#b3b3b3]/30 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#ffffff] flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#d4d4d4]" />
                <span>Disorders Treated in This Category:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedCategory.conditionsList.map((cond, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-[#2b2b2b] border border-[#b3b3b3]/30 text-xs font-semibold text-[#ffffff]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4d4d4] shrink-0" />
                    <span>{cond}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* W.H.O. Recognized Endorsement Badge */}
            <div className="flex items-start gap-3 p-4 sm:p-5 rounded-2xl bg-[#1e1e1e] border border-[#b3b3b3]/50 text-xs text-[#d4d4d4]">
              <Shield className="w-5 h-5 text-[#ffffff] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#ffffff] block text-xs uppercase tracking-wide">Official Clinical Endorsement:</strong>
                <p className="mt-0.5 leading-relaxed">{selectedCategory.whoRecognition}</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
