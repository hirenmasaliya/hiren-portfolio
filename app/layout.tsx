import type { Metadata } from "next";
import '@/app/globals.css';
import ConditionalNavbar from "./components/ConditionalNavbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://hirenmasaliya1411.web.app"),

  title: {
    default: "Hiren Masaliya | Expert Flutter & Next.js Developer",
    template: "%s | Hiren Masaliya",
  },

  description:
    "Hire Hiren Masaliya, a freelance Full-Stack Web and Flutter Developer based in India. Creator of Aptro. Specializing in custom mobile apps, Next.js websites, and scalable SaaS solutions.",

  keywords: [
    "Hiren Masaliya",
    "Freelance Flutter Developer India",
    "Next.js Developer Gujarat",
    "React Web Developer",
    "Firebase Expert",
    "Tailwind CSS Developer",
    "SaaS App Developer",
    "Aptro Founder",
    "Custom Business Software",
    "Mobile App Developer Jetpur",
    "Hire Full Stack Developer India"
  ],

  authors: [{ name: "Hiren Masaliya", url: "https://hirenmasaliya1411.web.app" }],
  creator: "Hiren Masaliya",
  publisher: "Hiren Masaliya",

  alternates: {
    canonical: "https://hirenmasaliya1411.web.app/",
  },

  openGraph: {
    title: "Hiren Masaliya | Expert Flutter & Next.js Developer",
    description:
      "Explore the portfolio of Hiren Masaliya. High-performance Next.js websites, Flutter mobile apps, and custom SaaS platforms built for modern businesses.",
    url: "https://hirenmasaliya1411.web.app/",
    siteName: "Hiren Masaliya Portfolio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Hiren Masaliya – Custom App & Web Development",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hiren Masaliya | Expert Flutter & Next.js Developer",
    description:
      "Looking for a reliable developer? I build custom mobile apps and enterprise web platforms using Flutter and Next.js.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  // Enhanced Structured Data targeting Professional Services and Location
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Person", "ProfessionalService"],
        "@id": "https://hirenmasaliya1411.web.app/#person",
        "name": "Hiren Masaliya",
        "url": "https://hirenmasaliya1411.web.app/",
        "image": "https://hirenmasaliya1411.web.app/og-image.jpg",
        "jobTitle": "Full-Stack Web & Flutter Developer",
        "description": "Freelance Software Developer specializing in Next.js, Flutter, React, and scalable business applications.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Jetpur",
          "addressRegion": "Gujarat",
          "addressCountry": "IN"
        },
        "priceRange": "$$",
        "sameAs": [
          "https://www.linkedin.com/in/hiren-masaliya/",
          "https://github.com/hirenmasaliya",
          "https://www.instagram.com/hirenmasaliya14"
        ],
        "knowsAbout": [
          "Flutter App Development",
          "Next.js Web Development",
          "React.js",
          "Firebase Integration",
          "SaaS Architecture",
          "Custom Software Solutions"
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://hirenmasaliya1411.web.app/#organization",
        "name": "Aptro",
        "url": "https://hirenmasaliya1411.web.app/", 
        "logo": "https://hirenmasaliya1411.web.app/favicon.ico",
        "founder": {
          "@id": "https://hirenmasaliya1411.web.app/#person"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://hirenmasaliya1411.web.app/#website",
        "url": "https://hirenmasaliya1411.web.app/",
        "name": "Hiren Masaliya - App & Web Development",
        "publisher": {
          "@id": "https://hirenmasaliya1411.web.app/#person"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="uljdxnlbbu3lWTHQtj1pHRdt_-KURCN0cdngsmV7LJ0"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="application-name" content="Hiren Masaliya Portfolio" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body className="bg-black text-white antialiased">
        <ConditionalNavbar />
        <main>{children}</main>
      </body>
    </html>
  );
}