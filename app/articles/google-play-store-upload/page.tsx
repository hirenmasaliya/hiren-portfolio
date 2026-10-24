"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Smartphone,
  FileText,
  ShieldCheck,
  Tag,
  Info,
  CheckCircle2,
  AlertTriangle,
  Image as ImageIcon
} from "lucide-react";

export default function GooglePlayStoreUploadArticle() {
  const [activeSection, setActiveSection] = useState("store-details");

  // Simple intersection observer to highlight the active section in the sidebar
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { id: "store-details", label: "1. Store Listing Details" },
    { id: "graphics", label: "2. Visual Assets" },
    { id: "privacy", label: "3. App Content & Privacy" },
    { id: "release-rules", label: "4. Release Rules" },
  ];

  return (
    <main className="min-h-screen bg-white text-[#1F1F1F] font-sans selection:bg-[#D3E3FD] selection:text-[#041E49] pb-32">
      
      {/* =====================================================
          HEADER SECTION (Flat, Google Style)
      ====================================================== */}
      <header className="pt-24 pb-12 max-w-7xl mx-auto px-6 md:px-12 border-b border-[#E0E2E0]">
        <Link 
          href="/articles" 
          className="inline-flex items-center gap-2 text-[#444746] hover:text-[#0A56D1] transition-colors font-medium mb-8"
        >
          <ArrowLeft size={20} />
          Back to Articles
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 text-sm text-[#747775] font-medium mb-4">
            <span className="text-[#0A56D1] font-semibold tracking-wide uppercase">Guide</span>
            <span className="w-1 h-1 rounded-full bg-[#747775]"></span>
            <span>Oct 22, 2026</span>
            <span className="w-1 h-1 rounded-full bg-[#747775]"></span>
            <span>7 min read</span>
          </div>

          <h1 className="text-[40px] md:text-[52px] leading-[1.15] font-normal text-[#1F1F1F] mb-6 tracking-tight">
            Google Play Store Submission Requirements
          </h1>
          
          <p className="text-xl text-[#444746] leading-relaxed">
            A complete breakdown of everything you need to prepare before publishing your Android app on the Google Play Console. Avoid common rejections and metadata errors.
          </p>
        </motion.div>
      </header>

      {/* =====================================================
          TWO-COLUMN LAYOUT
      ====================================================== */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 flex flex-col lg:flex-row gap-16 relative">
        
        {/* LEFT SIDEBAR NAVIGATION */}
        <aside className="hidden lg:block w-[280px] shrink-0">
          <div className="sticky top-24">
            <h3 className="text-sm font-semibold text-[#1F1F1F] uppercase tracking-wider mb-6">On this page</h3>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`px-4 py-2.5 rounded-r-full border-l-4 transition-colors text-sm font-medium ${
                    activeSection === link.id
                      ? "border-[#0A56D1] bg-[#F0F4F9] text-[#0A56D1]"
                      : "border-transparent text-[#444746] hover:bg-[#F8F9FA] hover:text-[#1F1F1F]"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* RIGHT CONTENT AREA */}
        <motion.article 
          className="flex-1 max-w-3xl space-y-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          
          {/* SECTION 1 */}
          <section id="store-details" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <Tag className="text-[#0A56D1]" size={32} strokeWidth={1.5} />
              <h2 className="text-3xl font-normal text-[#1F1F1F]">1. Store Listing Details</h2>
            </div>
            
            <div className="space-y-10 text-[#444746] text-lg leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <strong className="block text-[#1F1F1F] mb-2 font-medium">App Name</strong>
                  <p className="font-mono text-sm bg-[#F8F9FA] p-3 rounded text-[#1F1F1F] mb-2">Max 30 characters</p>
                  <p className="text-sm">Must accurately reflect the app without spammy keywords.</p>
                </div>
                <div>
                  <strong className="block text-[#1F1F1F] mb-2 font-medium">Short Description</strong>
                  <p className="font-mono text-sm bg-[#F8F9FA] p-3 rounded text-[#1F1F1F] mb-2">Max 80 characters</p>
                  <p className="text-sm">The first text users see. Make it engaging.</p>
                </div>
              </div>

              <div>
                <strong className="block text-[#1F1F1F] text-xl mb-3 font-medium">Full Description</strong>
                <p>Maximum 4,000 characters. Explain your app's value proposition, key features, and benefits. Use formatting (bullet points, short paragraphs) to make it highly readable.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#E0E2E0]">
                <div>
                  <strong className="block text-[#1F1F1F] mb-2 font-medium">App Category</strong>
                  <p className="text-[#444746]">Select one primary category (e.g., Productivity, Health & Fitness).</p>
                </div>
                <div>
                  <strong className="block text-[#1F1F1F] mb-2 font-medium">Tags</strong>
                  <p className="text-[#444746]">Select up to 5 relevant tags to improve search discoverability.</p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2 */}
          <section id="graphics" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <ImageIcon className="text-[#0A56D1]" size={32} strokeWidth={1.5} />
              <h2 className="text-3xl font-normal text-[#1F1F1F]">2. Visual Assets</h2>
            </div>
            
            <div className="space-y-10 text-[#444746] text-lg">
              <div>
                <h3 className="text-xl font-medium text-[#1F1F1F] mb-4">App Icon (Required)</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-[#0A56D1]" /> <span><strong>Size:</strong> 512px by 512px</span></li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-[#0A56D1]" /> <span><strong>Format:</strong> 32-bit PNG (with alpha)</span></li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-[#0A56D1]" /> <span><strong>Max File Size:</strong> 1024 KB</span></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#1F1F1F] mb-4">Feature Graphic (Required)</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-[#0A56D1]" /> <span><strong>Size:</strong> 1024px by 500px</span></li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-[#0A56D1]" /> <span><strong>Format:</strong> JPEG or 24-bit PNG (no alpha)</span></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#1F1F1F] mb-4">Screenshots (Required)</h3>
                <p className="mb-4">Minimum 2, maximum 8 per device type (Phone, 7-inch tablet, 10-inch tablet).</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-[#0A56D1]" /> <span><strong>Ratio:</strong> 16:9 or 9:16</span></li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-[#0A56D1]" /> <span><strong>Dimensions:</strong> Min length 320px, max length 3840px.</span></li>
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION 3 */}
          <section id="privacy" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <ShieldCheck className="text-[#0A56D1]" size={32} strokeWidth={1.5} />
              <h2 className="text-3xl font-normal text-[#1F1F1F]">3. App Content & Privacy</h2>
            </div>
            
            <div className="space-y-10 text-[#444746] text-lg">
              <div>
                <strong className="block text-[#1F1F1F] text-xl font-medium mb-2">Privacy Policy URL</strong>
                <p>You must link to an active privacy policy page that clearly states how your app handles user data. This is mandatory, especially for apps handling PII (Personally Identifiable Information).</p>
              </div>

              <div>
                <strong className="block text-[#1F1F1F] text-xl font-medium mb-2">Data Safety Form</strong>
                <p>You must declare what data your app collects, how it's shared, and its security practices (like encryption in transit). You fill this out inside the Play Console.</p>
              </div>

              <div>
                <strong className="block text-[#1F1F1F] text-xl font-medium mb-2">Target Audience & Content Rating</strong>
                <p>You will answer a detailed IARC questionnaire to generate your app's content rating (e.g., PEGI 3, E for Everyone). You must also define your target age groups.</p>
              </div>
            </div>
          </section>

          {/* SECTION 4 */}
          <section id="release-rules" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <AlertTriangle className="text-[#0A56D1]" size={32} strokeWidth={1.5} />
              <h2 className="text-3xl font-normal text-[#1F1F1F]">4. Important Release Rules</h2>
            </div>
            
            <div className="bg-[#F0F4F9] rounded-2xl p-8 border-l-4 border-[#0A56D1]">
              <div className="flex gap-4">
                <Info className="text-[#0A56D1] shrink-0 mt-1" size={28} />
                <div>
                  <strong className="text-xl font-medium text-[#1F1F1F] block mb-3">The 20 Tester Rule (New Accounts)</strong>
                  <p className="text-[#444746] text-lg mb-4 leading-relaxed">
                    If you created a <em>personal</em> developer account after November 13, 2023, Google enforces strict testing requirements before you can release to production:
                  </p>
                  <ul className="space-y-3 text-[#1F1F1F] font-medium">
                    <li className="flex items-center gap-2"><span>1.</span> You must run a <strong>Closed Test</strong> first.</li>
                    <li className="flex items-center gap-2"><span>2.</span> You must have at least <strong>20 unique testers</strong> opted-in.</li>
                    <li className="flex items-center gap-2"><span>3.</span> Those testers must test the app continuously for <strong>14 days</strong>.</li>
                    <li className="flex items-center gap-2"><span>4.</span> Only after successfully completing this can you apply for Production access.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

        </motion.article>
      </div>
    </main>
  );
}