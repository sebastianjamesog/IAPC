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
    "Empowering Healing Through Ancient Wisdom & Modern Science. Master clinical acupuncture with our 3-Month Diploma Course for ₹20,000/- (All-Inclusive) at Parinamam Road, Kaloor, Kochi. Call +91 9847335788.",
  keywords: [
    "Institute of Acupuncture & Pain Control",
    "IAPC Kochi",
    "Acupuncture Course Kochi Kaloor",
    "Diploma Course in Acupuncture",
    "Acupuncture Course Fee 20000",
    "3 Month Acupuncture Course",
    "Pain Management Acupuncture Kerala",
    "MD Acupuncture University Preparation",
    "PhD Acupuncture Research Guidance",
    "Acupuncture Dr V Mohandas",
    "Total Health Through Alternative Medicines",
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
    title: "Institute of Acupuncture & Pain Control | Certified Diploma & Doctoral Guidance",
    description:
      "Empowering Healing Through Ancient Wisdom & Modern Science. Certified 3-Month Diploma Course in Acupuncture for ₹20,000/-. Located at Kaloor, Kochi. Call +91 9847335788.",
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
      "Empowering Healing Through Ancient Wisdom & Modern Science. 3-Month Diploma Course (₹20,000) & Global University MD/PhD Guidance. Kaloor, Kochi.",
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
        telephone: "+91-9847335788",
        email: "iapcoo123@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Parinamam Road, Kaloor",
          addressLocality: "Kochi",
          addressRegion: "Kerala",
          postalCode: "682017",
          addressCountry: "IN",
        },
      },
      {
        "@type": "Course",
        "@id": "https://iapc.com/#diploma-course",
        name: "Diploma Course in Acupuncture",
        description:
          "Comprehensive 3-month clinical diploma covering TCM theories, meridian pathways, point location, needling techniques, and specialized pain management for arthritis, back pain, migraines, and sciatica.",
        provider: {
          "@type": "Organization",
          name: "Institute of Acupuncture & Pain Control",
          sameAs: "https://iapc.com",
        },
        offers: {
          "@type": "Offer",
          price: "20000",
          priceCurrency: "INR",
          category: "Full Course All-Inclusive Fee",
          availability: "https://schema.org/InStock",
        },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "Blended (Practical Workshops & Online Modules)",
          duration: "P3M",
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
              text: "The full course fee is ₹20,000/- all-inclusive, covering tuition, practical needle kits, study materials, and certification exam fees.",
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
      <body className="bg-[#2b2b2b] text-slate-100 antialiased min-h-screen flex flex-col selection:bg-[#ffffff] selection:text-[#2b2b2b]">
        {children}
      </body>
    </html>
  );
}
