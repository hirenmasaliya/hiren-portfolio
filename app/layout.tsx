import type { Metadata } from "next";
import "@/app/globals.css";
import ConditionalNavbar from "./components/ConditionalNavbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://hirenmasaliya1411.web.app"),

  title: {
    default: "Hiren Masaliya | Full-Stack Developer, Case Studies & Tech Articles",
    template: "%s | Hiren Masaliya",
  },

  description:
    "Explore in-depth software engineering case studies, app architecture ideas, and technical insights by Hiren Masaliya. Full-stack Flutter & Next.js developer building scalable digital products.",

  keywords: [
    "Hiren Masaliya",
    "Developer Journal",
    "App Architecture Case Studies",
    "Software Engineering Articles",
    "Digital Product Ideas",
    "Freelance Flutter Developer India",
    "Next.js Developer Gujarat",
    "React Web Developer",
    "Firebase Expert",
    "SaaS Architecture",
    "Secure App Design",
    "Aptro Founder",
    "Custom Business Software",
    "Mobile App Developer Jetpur",
    "Tech Blog India"
  ],

  authors: [{ name: "Hiren Masaliya", url: "https://hirenmasaliya1411.web.app" }],
  creator: "Hiren Masaliya",
  publisher: "Hiren Masaliya",

  alternates: {
    canonical: "https://hirenmasaliya1411.web.app/",
  },

  openGraph: {
    title: "Hiren Masaliya | Full-Stack Developer, Case Studies & Tech Articles",
    description:
      "In-depth articles, real-world development case studies, and production blueprints for mobile apps and web platforms built with Flutter, Next.js, and Firebase.",
    url: "https://hirenmasaliya1411.web.app/",
    siteName: "Hiren Masaliya | Dev Journal & Portfolio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hiren Masaliya – Development Journal, Case Studies & Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hiren Masaliya | Full-Stack Developer & Tech Articles",
    description:
      "Deep dives into app development, secure voting system architecture, eco-friendly tech concepts, and scalable Next.js platforms.",
    images: ["/og-image.jpg"],
  },

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Person", "ProfessionalService"],
        "@id": "https://hirenmasaliya1411.web.app/#person",
        "name": "Hiren Masaliya",
        "url": "https://hirenmasaliya1411.web.app/",
        "image": "https://hirenmasaliya1411.web.app/images/hero.png",
        "jobTitle": "Full-Stack Web & Flutter Developer",
        "description":
          "Freelance Software Developer and technical writer specializing in Next.js, Flutter, React, system design, and scalable business applications.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Jetpur",
          "addressRegion": "Gujarat",
          "addressCountry": "IN",
        },
        "priceRange": "$$",
        "sameAs": [
          "https://www.linkedin.com/in/hiren-masaliya/",
          "https://github.com/hirenmasaliya",
          "https://www.instagram.com/hirenmasaliya14",
        ],
        "knowsAbout": [
          "Flutter App Development",
          "Next.js Web Development",
          "Software Architecture",
          "System Security & Verification",
          "Sustainable Tech Innovations",
          "React.js",
          "Firebase Integration",
          "SaaS Architecture",
          "Technical Writing & Case Studies",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://hirenmasaliya1411.web.app/#website",
        "url": "https://hirenmasaliya1411.web.app/",
        "name": "Hiren Masaliya | Dev Journal & Portfolio",
        "description":
          "Personal portfolio, technical journal, and case studies by Hiren Masaliya.",
        "publisher": {
          "@id": "https://hirenmasaliya1411.web.app/#person",
        },
      },
      {
        "@type": "Blog",
        "@id": "https://hirenmasaliya1411.web.app/#blog",
        "url": "https://hirenmasaliya1411.web.app/articles",
        "name": "Developer Journal by Hiren Masaliya",
        "description":
          "Practical articles on building mobile apps, web platforms, security design, and real-world system architecture.",
        "isPartOf": {
          "@id": "https://hirenmasaliya1411.web.app/#website",
        },
        "author": {
          "@id": "https://hirenmasaliya1411.web.app/#person",
        },
        "inLanguage": "en-US",
      },
      {
        "@type": "Organization",
        "@id": "https://hirenmasaliya1411.web.app/#organization",
        "name": "Aptro",
        "url": "https://hirenmasaliya1411.web.app/",
        "logo": "https://hirenmasaliya1411.web.app/favicon.ico",
        "founder": {
          "@id": "https://hirenmasaliya1411.web.app/#person",
        },
      },
    ],
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