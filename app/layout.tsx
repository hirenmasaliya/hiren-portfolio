import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"), // ⚠️ change to your real domain

  title: {
    default: "Hiren Masaliya – Flutter & Web Developer",
    template: "%s | Hiren.dev",
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
  publisher: "Hiren.dev",

  openGraph: {
    title: "Hiren Masaliya – Developer & Founder",
    description:
      "Portfolio website of Hiren Masaliya. Flutter, Web Development & Aptro App Founder.",
    url: "https://yourdomain.com",
    siteName: "Hiren.dev",
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
      <body className="bg-black text-white antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
