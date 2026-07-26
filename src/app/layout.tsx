import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iapc.com"),
  title: "Institute of Acupuncture & Pain Control | Diploma Course, MD & PhD Guidance",
  description:
    "Empowering Healing Through Ancient Wisdom & Modern Science. Master clinical acupuncture with our Diploma Course for ₹25,000/- (All-Inclusive). Practical training for Back Pain, Sciatica, Migraines & Arthritis, plus Global University MD & PhD preparation.",
  keywords: [
    "Institute of Acupuncture & Pain Control",
    "IAPC",
    "Diploma Course in Acupuncture",
    "Acupuncture Course Fee 25000",
    "Pain Management Acupuncture",
    "MD Acupuncture University Preparation",
    "PhD Acupuncture Research Guidance",
    "Acupuncture for Health Promoters",
    "Traditional Chinese Medicine India",
    "Sciatica Acupuncture Protocol",
  ],
  authors: [{ name: "Institute of Acupuncture & Pain Control" }],
  creator: "Institute of Acupuncture & Pain Control",
  publisher: "IAPC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Institute of Acupuncture & Pain Control | Diploma & Doctoral Guidance",
    description:
      "Empowering Healing Through Ancient Wisdom & Modern Science. Certified Diploma Course in Acupuncture for ₹25,000/-. Practical clinical pain management training.",
    url: "https://iapc.com",
    siteName: "Institute of Acupuncture & Pain Control (IAPC)",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://iapc.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Institute of Acupuncture & Pain Control Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Institute of Acupuncture & Pain Control | Certified Acupuncture Education",
    description:
      "Empowering Healing Through Ancient Wisdom & Modern Science. Diploma Course (₹25,000) & Global University MD/PhD Guidance.",
    images: ["https://iapc.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://iapc.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://iapc.com/#organization",
        name: "Institute of Acupuncture & Pain Control",
        alternateName: "IAPC",
        url: "https://iapc.com",
        logo: "https://iapc.com/logo.png",
        description:
          "Premier educational institution dedicated to authentic acupuncture education, clinical pain management, and global university degree preparation.",
        telephone: "+91-9876543210",
        email: "admissions@iapc.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Healthcare & Wellness Corridor",
          addressCountry: "IN",
        },
      },
      {
        "@type": "Course",
        "@id": "https://iapc.com/#diploma-course",
        name: "Diploma Course in Acupuncture",
        description:
          "Comprehensive 6-month clinical diploma covering TCM theories, meridian pathways, point location, needling techniques, and specialized pain management for arthritis, back pain, migraines, and sciatica.",
        provider: {
          "@type": "Organization",
          name: "Institute of Acupuncture & Pain Control",
          sameAs: "https://iapc.com",
        },
        offers: {
          "@type": "Offer",
          price: "25000",
          priceCurrency: "INR",
          category: "Full Course All-Inclusive Fee",
          availability: "https://schema.org/InStock",
        },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "Blended (Practical Workshops & Online Modules)",
          duration: "P6M",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://iapc.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Who is eligible to enroll in the Diploma Course in Acupuncture?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Diploma Course is open to healthcare professionals (doctors, physiotherapists, nurses) and wellness enthusiasts/seekers wanting to master natural acupuncture healing.",
            },
          },
          {
            "@type": "Question",
            name: "Does IAPC issue MD or PhD degrees directly?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. IAPC does not issue MD or PhD degrees directly. We provide preparatory coaching, clinical research mentorship, and academic guidance to help students qualify for MD and PhD degrees awarded by recognized Global Universities.",
            },
          },
          {
            "@type": "Question",
            name: "What is the fee for the Diploma Course in Acupuncture?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The full course fee is ₹25,000/- all-inclusive, covering tuition, practical needle kits, study materials, and certification exam fees.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#04090d] text-slate-100 antialiased min-h-screen flex flex-col selection:bg-teal-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
