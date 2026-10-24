"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Smartphone,
  FileText,
  Link as LinkIcon,
  ShieldCheck,
  Tag,
  Info,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

export default function AppleAppStoreUploadArticle() {
  const [activeSection, setActiveSection] = useState("basic-info");

  // Intersection observer to highlight the active section in the sidebar
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
    { id: "basic-info", label: "1. Basic App Information" },
    { id: "screenshots", label: "2. App Screenshots" },
    { id: "metadata", label: "3. App Metadata" },
    { id: "urls", label: "4. Required URLs" },
    { id: "review-privacy", label: "5. Review & Privacy" },
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
            <span>Oct 24, 2026</span>
            <span className="w-1 h-1 rounded-full bg-[#747775]"></span>
            <span>8 min read</span>
          </div>

          <h1 className="text-[40px] md:text-[52px] leading-[1.15] font-normal text-[#1F1F1F] mb-6 tracking-tight">
            Apple App Store Submission Requirements
          </h1>
          
          <p className="text-xl text-[#444746] leading-relaxed">
            A comprehensive checklist to prepare all your assets, metadata, and review information before hitting submit on App Store Connect.
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
          
          {/* SECTION 1: Basic App Info */}
          <section id="basic-info" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <Tag className="text-[#0A56D1]" size={32} strokeWidth={1.5} />
              <h2 className="text-3xl font-normal text-[#1F1F1F]">1. Basic App Information</h2>
            </div>
            
            <div className="space-y-10 text-[#444746] text-lg leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <strong className="block text-[#1F1F1F] mb-2 font-medium">App Name</strong>
                  <p className="font-mono text-sm bg-[#F8F9FA] p-3 rounded text-[#1F1F1F] mb-2">Your App Name</p>
                  <p className="text-sm">Keep it memorable and relevant to your core functionality.</p>
                </div>
                <div>
                  <strong className="block text-[#1F1F1F] mb-2 font-medium">Bundle ID</strong>
                  <p className="font-mono text-sm bg-[#F8F9FA] p-3 rounded text-[#1F1F1F] mb-2">Your App Bundle ID</p>
                  <p className="text-sm">Unique identifier directly from Xcode (e.g., com.company.app).</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#E0E2E0]">
                <div>
                  <strong className="block text-[#1F1F1F] mb-2 font-medium">App Category</strong>
                  <p className="text-[#444746]">e.g., Utilities, Lifestyle, Productivity.</p>
                </div>
                <div>
                  <strong className="block text-[#1F1F1F] mb-2 font-medium">Pricing</strong>
                  <p className="text-[#444746]">Set to Free, or specify an exact Paid tier.</p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: Visual Assets */}
          <section id="screenshots" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <Smartphone className="text-[#0A56D1]" size={32} strokeWidth={1.5} />
              <h2 className="text-3xl font-normal text-[#1F1F1F]">2. App Screenshots</h2>
            </div>
            
            <div className="space-y-8 text-[#444746] text-lg">
              <div>
                <h3 className="text-xl font-medium text-[#1F1F1F] mb-4">Required for iPhone Pro Max (6.7")</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-[#0A56D1]" /> <span><strong>Resolution:</strong> 1290 × 2796 px (Portrait)</span></li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-[#0A56D1]" /> <span><strong>Format:</strong> High-quality PNG or JPG</span></li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-[#0A56D1]" /> <span><strong>Quality:</strong> High resolution (no blur, no compression artifacts)</span></li>
                </ul>
              </div>

              <div className="bg-[#FFF8E1] rounded-2xl p-8 border-l-4 border-[#FF8F00]">
                <div className="flex gap-4">
                  <AlertCircle className="text-[#FF8F00] shrink-0 mt-1" size={28} />
                  <div>
                    <strong className="text-xl font-medium text-[#1F1F1F] block mb-3">Apple's Strict Screenshot Rules</strong>
                    <ul className="space-y-2 text-[#444746] font-medium">
                      <li className="flex items-start gap-2"><span>•</span> No device frames required (they are optional, but often cleaner without them).</li>
                      <li className="flex items-start gap-2"><span>•</span> Do not use misleading UI elements.</li>
                      <li className="flex items-start gap-2"><span>•</span> Screenshots must show the <em>real</em> app interface in action.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: Metadata */}
          <section id="metadata" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <FileText className="text-[#0A56D1]" size={32} strokeWidth={1.5} />
              <h2 className="text-3xl font-normal text-[#1F1F1F]">3. App Metadata</h2>
            </div>
            
            <div className="space-y-10 text-[#444746] text-lg">
              <div>
                <strong className="flex items-center gap-3 text-[#1F1F1F] text-xl font-medium mb-2">
                  Promotional Text 
                  <span className="text-xs bg-[#F0F4F9] text-[#444746] px-2 py-1 rounded-md font-normal tracking-wide uppercase">Optional</span>
                </strong>
                <p>Maximum 170 characters. Appears above the description and can be updated at any time without submitting a new app version.</p>
              </div>
              
              <div>
                <strong className="block text-[#1F1F1F] text-xl font-medium mb-2">Description</strong>
                <p className="mb-4">No strict character limit, but staying under 4,000 characters is highly recommended. Make sure to clearly explain:</p>
                <ul className="space-y-2 ml-2">
                  <li>• What the app does</li>
                  <li>• Core features</li>
                  <li>• Main benefits to the user</li>
                  <li>• Who the app is intended for</li>
                </ul>
              </div>

              <div>
                <strong className="block text-[#1F1F1F] text-xl font-medium mb-2">Keywords</strong>
                <p>Comma-separated words used for App Store search optimization (Max 100 characters total). Do not include spaces after commas to save characters.</p>
              </div>
            </div>
          </section>

          {/* SECTION 4: Required URLs */}
          <section id="urls" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <LinkIcon className="text-[#0A56D1]" size={32} strokeWidth={1.5} />
              <h2 className="text-3xl font-normal text-[#1F1F1F]">4. Required URLs</h2>
            </div>
            
            <div className="space-y-8 text-[#444746] text-lg">
              <div>
                <strong className="block text-[#1F1F1F] font-medium mb-1">Support URL (Required)</strong>
                <p>A website or contact page where users can reach you for help.</p>
              </div>
              <div>
                <strong className="block text-[#1F1F1F] font-medium mb-1">Marketing URL (Optional)</strong>
                <p>The main website or landing page for your product.</p>
              </div>
              <div>
                <strong className="block text-[#1F1F1F] font-medium mb-1">Domain Name</strong>
                <p>Your primary domain associated with the application.</p>
              </div>
            </div>
          </section>

          {/* SECTION 5: Review Info & Privacy */}
          <section id="review-privacy" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <ShieldCheck className="text-[#0A56D1]" size={32} strokeWidth={1.5} />
              <h2 className="text-3xl font-normal text-[#1F1F1F]">5. App Review & Privacy</h2>
            </div>
            
            <div className="space-y-10 text-[#444746] text-lg">
              <div>
                <strong className="block text-[#1F1F1F] text-xl font-medium mb-4">App Review Information</strong>
                <p className="mb-6">Apple's review team needs to be able to fully test your app. You must provide:</p>
                <div className="bg-[#F8F9FA] rounded-xl p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Info size={20} className="text-[#0A56D1]" /> 
                    <span><strong>Contact Information:</strong> First Name, Last Name, Phone Number, and Email.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Info size={20} className="text-[#0A56D1]" /> 
                    <span><strong>Sign-in Credentials:</strong> A dedicated, pre-populated test ID and password if your app requires login.</span>
                  </div>
                </div>
              </div>

              <div>
                <strong className="block text-[#1F1F1F] text-xl font-medium mb-4">Privacy Policies</strong>
                <ul className="space-y-4">
                  <li>
                    <strong className="text-[#1F1F1F]">App Privacy Policy (Required):</strong> 
                    <p className="mt-1">A URL linking to your privacy policy page outlining all data collection, retention, and deletion practices.</p>
                  </li>
                  <li>
                    <strong className="text-[#1F1F1F]">User Privacy Policy (Optional):</strong> 
                    <p className="mt-1">Specific user-level terms and conditions, if applicable.</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

        </motion.article>
      </div>
    </main>
  );
}