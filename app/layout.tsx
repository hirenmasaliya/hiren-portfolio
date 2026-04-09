import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hirenmasaliya1411.web.app"),

  title: {
    default: "Hiren Masaliya – Flutter & Web Developer",
    template: "%s | Hiren Masaliya",
  },

  description:
    "Official portfolio of Hiren Masaliya – Flutter Developer, Web Developer and Founder of Aptro App. Explore projects, experience and business solutions.",

  keywords: [
    "Hiren Masaliya",
    "Flutter Developer India",
    "Web Developer Portfolio",
    "Aptro Founder",
    "Business App Developer",
    "React Developer",
    "Next.js Developer"
  ],

  authors: [{ name: "Hiren Masaliya" }],
  creator: "Hiren Masaliya",
  publisher: "Hiren Masaliya",

  alternates: {
    canonical: "https://hirenmasaliya1411.web.app",
  },

  openGraph: {
    title: "Hiren Masaliya – Flutter & Web Developer",
    description:
      "Portfolio website of Hiren Masaliya. Flutter, Web Development & Aptro App Founder.",
    url: "https://hirenmasaliya1411.web.app",
    siteName: "Hiren Masaliya",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hiren Masaliya – Developer Portfolio",
    description:
      "Flutter Developer, Web Developer & Founder of Aptro App.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Verification */}
        <meta
          name="google-site-verification"
          content="uljdxnlbbu3lWTHQtj1pHRdt_-KURCN0cdngsmV7LJ0"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* App Name */}
        <meta name="application-name" content="Hiren Masaliya Portfolio" />

        {/* Structured Data (VERY IMPORTANT for Google identity) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Hiren Masaliya",
              url: "https://hirenmasaliya1411.web.app",
              jobTitle: "Flutter & Web Developer",
              sameAs: [
                "https://www.linkedin.com/in/hiren-masaliya/",
                "https://www.instagram.com/hirenmasaliya14?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                "https://github.com/hirenmasaliya"
              ],
            }),
          }}
        />
      </head>

      <body className="bg-black text-white antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}