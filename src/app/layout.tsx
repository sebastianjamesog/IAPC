import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteUrl, siteName, siteTitle, siteDescription } from "@/lib/site";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: "IAPC",
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
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
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/hero.png", alt: "Acupuncture education at IAPC, Kochi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/hero.png"],
  },
  alternates: { canonical: siteUrl },
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
        "@id": `${siteUrl}#organization`,
        name: "Institute of Acupuncture & Pain Control",
        alternateName: "IAPC",
        url: siteUrl,
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
        "@id": `${siteUrl}#diploma-course`,
        name: "Diploma Course in Acupuncture",
        description:
          "Comprehensive clinical diploma covering TCM theories, meridian pathways, point location, needling techniques, and specialized pain management for arthritis, back pain, migraines, and sciatica.",
        provider: {
          "@type": "Organization",
          name: "Institute of Acupuncture & Pain Control",
          "@id": `${siteUrl}#organization`,
          url: siteUrl,
        },
        offers: {
          "@type": "Offer",
          price: "20000",
          priceCurrency: "INR",
          category: "Full Course All-Inclusive Fee",
          availability: "https://schema.org/InStock",
        },
      },

    ],
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className="bg-[#2b2b2b] text-slate-100 antialiased min-h-screen flex flex-col selection:bg-[#ffffff] selection:text-[#2b2b2b]">
        {children}
      </body>
    </html>
  );
}
