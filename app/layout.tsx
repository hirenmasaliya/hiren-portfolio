
import type { Metadata } from "next";
import "@/app/globals.css";
import ConditionalNavbar from "./components/ConditionalNavbar";

const SITE_URL = "https://hirenmasaliya1411.web.app";
const SITE_NAME = "Hiren Masaliya";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "Hiren Masaliya | Flutter & Next.js Developer",
    template: "%s | Hiren Masaliya",
  },

  description:
    "Hiren Masaliya is a Flutter and Next.js developer building mobile apps, web platforms, and scalable business software with Firebase and modern technologies.",

  keywords: [
    "Hiren Masaliya",
    "Hiren Masaliya Developer",
    "Flutter Developer India",
    "Next.js Developer India",
    "Full Stack Developer Gujarat",
    "Mobile App Developer",
    "Firebase Developer",
    "React Developer",
    "Web Application Development",
    "Software Engineering Case Studies",
  ],

  authors: [
    {
      name: SITE_NAME,
      url: SITE_URL,
    },
  ],

  creator: SITE_NAME,
  publisher: SITE_NAME,

  // Set canonical URLs in each page's metadata.
  // Do not define "/" as the canonical for every route.

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Hiren Masaliya | Flutter & Next.js Developer",
    description:
      "Explore real-world software projects, Flutter apps, Next.js platforms, technical articles, and development case studies by Hiren Masaliya.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hiren Masaliya — Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hiren Masaliya | Flutter & Next.js Developer",
    description:
      "Mobile apps, web development, software architecture, and real-world engineering case studies.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/images/hero.png`,
  jobTitle: "Flutter and Full-Stack Developer",
  description:
    "Software developer specializing in Flutter, Next.js, React, Firebase, and scalable business applications.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jetpur",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/in/hiren-masaliya/",
    "https://github.com/hirenmasaliya",
    "https://www.instagram.com/hirenmasaliya14",
  ],
  knowsAbout: [
    "Flutter Development",
    "Next.js Development",
    "React",
    "Firebase",
    "Mobile App Development",
    "Web Application Development",
    "Software Architecture",
    "SaaS Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <meta
          name="google-site-verification"
          content="uljdxnlbbu3lWTHQtj1pHRdt_-KURCN0cdngsmV7LJ0"
        />

        <link rel="icon" href="/favicon.ico" />
        <meta
          name="application-name"
          content="Hiren Masaliya Portfolio"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />
      </head>

      <body className="bg-black text-white antialiased">
        <ConditionalNavbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
