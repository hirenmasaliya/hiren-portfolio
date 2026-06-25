import type { Metadata } from "next";
import '@/app/globals.css';
import ConditionalNavbar from "./components/ConditionalNavbar";

export const metadata: Metadata = {
  // 1. Critical Fix: metadataBase must end without a trailing slash for relative URLs to resolve perfectly
  metadataBase: new URL("https://hirenmasaliya1411.web.app"),

  title: {
    default: "Hiren Masaliya – Professional Flutter & Web Developer",
    template: "%s | Hiren Masaliya",
  },

  description:
    "Official portfolio of Hiren Masaliya, professional Flutter & Full-Stack Web Developer and Founder of Aptro. Delivering high-performance mobile apps and premium business software systems.",

  keywords: [
    "Hiren Masaliya",
    "Flutter Developer India",
    "Next.js Developer India",
    "Full Stack Freelance Developer",
    "Aptro Founder",
    "Aptro App",
    "Order Management System Developer",
    "Payroll Management Software Development",
    "Hire Flutter Developer"
  ],

  authors: [{ name: "Hiren Masaliya", url: "https://hirenmasaliya1411.web.app" }],
  creator: "Hiren Masaliya",
  publisher: "Hiren Masaliya",

  // 2. Strict Canonical Match: Next.js standardizes root targets with a trailing slash
  alternates: {
    canonical: "https://hirenmasaliya1411.web.app/",
  },

  openGraph: {
    title: "Hiren Masaliya – Flutter & Web Developer",
    description:
      "Official portfolio of Hiren Masaliya. Discover high-quality full-stack applications, Flutter mobile apps, and enterprise software by the founder of Aptro.",
    url: "https://hirenmasaliya1411.web.app/",
    siteName: "Hiren Masaliya Portfolio",
    locale: "en_IN",
    type: "website",
    // 3. Essential for modern Rich Snippets & social shares
    images: [
      {
        url: "/og-image.jpg", // Place a 1200x630px branding image in your /public folder
        width: 1200,
        height: 630,
        alt: "Hiren Masaliya – Flutter & Web Developer Portfolio Image",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hiren Masaliya – Developer Portfolio & Aptro Founder",
    description:
      "Professional Flutter Developer and Web Developer building customized mobile apps and enterprise software solutions.",
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
  
  // 4. Enhanced Structured Data: Merging Person & Brand (Aptro) creates an interconnected entity for Google's Knowledge Graph
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://hirenmasaliya1411.web.app/#person",
        "name": "Hiren Masaliya",
        "url": "https://hirenmasaliya1411.web.app/",
        "jobTitle": "Full-Stack Web & Flutter Developer",
        "description": "Freelance Software Developer specializing in Next.js, Flutter, and cross-platform business applications.",
        "sameAs": [
          "https://www.linkedin.com/in/hiren-masaliya/",
          "https://github.com/hirenmasaliya",
          "https://www.instagram.com/hirenmasaliya14"
        ],
        "knowsAbout": [
          "Flutter Development",
          "Next.js Development",
          "Full-Stack Web Development",
          "Firebase",
          "Mobile Application Architecture"
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
        "name": "Hiren Masaliya Portfolio",
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
        
        {/* Injecting clean, nested Schema */}
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