"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  UserCheck,
  CreditCard,
  Building2,
  ShieldCheck,
  AlertTriangle,
  Info,
  CheckCircle2,
  Briefcase
} from "lucide-react";

export default function CreateAppleDeveloperAccountArticle() {
  const [activeSection, setActiveSection] = useState("prerequisites");

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
    { id: "prerequisites", label: "1. What You Need First" },
    { id: "duns-number", label: "2. The D-U-N-S Nightmare" },
    { id: "enrollment", label: "3. How to Enroll" },
    { id: "challenges", label: "4. Real-World Problems" },
  ];

  return (
    <main className="min-h-screen bg-white text-[#1F1F1F] font-sans selection:bg-[#D3E3FD] selection:text-[#041E49] pb-32">
      
      {/* =====================================================
          HEADER SECTION 
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
            <span>Oct 27, 2026</span>
            <span className="w-1 h-1 rounded-full bg-[#747775]"></span>
            <span>6 min read</span>
          </div>

          <h1 className="text-[40px] md:text-[52px] leading-[1.15] font-normal text-[#1F1F1F] mb-6 tracking-tight">
            How to Enroll in the Apple Developer Program
          </h1>
          
          <p className="text-xl text-[#444746] leading-relaxed">
            Enrolling sounds easy on paper, but in the real world, it can be a frustrating loop of vague errors and delayed approvals. Here is my developer's guide to navigating the process, the $99 fee, and the dreaded D-U-N-S number.
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
          
          {/* SECTION 1: Prerequisites */}
          <section id="prerequisites" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <CheckCircle2 className="text-[#0A56D1]" size={32} strokeWidth={1.5} />
              <h2 className="text-3xl font-normal text-[#1F1F1F]">1. What You Need First</h2>
            </div>
            
            <div className="space-y-6 text-[#444746] text-lg leading-relaxed">
              <p>Apple is notoriously strict about verification. Before you start, prepare these essentials to avoid instant rejection:</p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <UserCheck size={24} className="text-[#0A56D1] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1F1F1F]">A Clean Apple ID</strong>
                    <p className="mt-1 text-base">You must use an email-based Apple ID. Phone-number-format Apple IDs are known to cause strict failures in the system. Furthermore, Two-Factor Authentication (2FA) must be fully enabled.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CreditCard size={24} className="text-[#0A56D1] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1F1F1F]">International Card for the $99 Fee</strong>
                    <p className="mt-1 text-base">You need an international credit or debit card. Apple does <strong>not</strong> accept Apple Gift Cards or Apple ID balance for developer enrollment.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck size={24} className="text-[#0A56D1] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1F1F1F]">A Professional Web Presence</strong>
                    <p className="mt-1 text-base">If enrolling as a company, Apple strictly requires a professional, publicly accessible website. They will reject placeholder pages, parked domains, or social media profiles. You must also have a domain-matching work email address.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 2: D-U-N-S Number */}
          <section id="duns-number" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <Building2 className="text-[#0A56D1]" size={32} strokeWidth={1.5} />
              <h2 className="text-3xl font-normal text-[#1F1F1F]">2. The D-U-N-S Nightmare</h2>
            </div>
            
            <div className="space-y-6 text-[#444746] text-lg">
              <p>If you enroll as an Organization (LLC, Corporation), you must provide a 9-digit D-U-N-S number issued by Dun & Bradstreet. This is where 90% of developers get stuck.</p>
              
              <div className="bg-[#FFF8E1] rounded-2xl p-6 border-l-4 border-[#FF8F00]">
                <h3 className="text-xl font-medium text-[#1F1F1F] mb-3">The Sync Delay Reality</h3>
                <p className="text-base text-[#5D4037]">
                  Even if you pay Dun & Bradstreet to expedite issuing your number, you cannot speed up the sync to Apple. Apple's database takes up to two weeks to pick up newly issued D-U-N-S numbers. If Apple says your number is "Not Found," wait out the sync window before assuming something is broken.
                </p>
              </div>

              <p>Also, ensure your legal entity name exactly matches your D-U-N-S record, down to the punctuation (e.g., "Inc." vs "Inc"). A mismatch will permanently block recognition.</p>
            </div>
          </section>

          {/* SECTION 3: Enrollment Steps */}
          <section id="enrollment" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <Briefcase className="text-[#0A56D1]" size={32} strokeWidth={1.5} />
              <h2 className="text-3xl font-normal text-[#1F1F1F]">3. How to Enroll (The Smart Way)</h2>
            </div>
            
            <div className="space-y-10 text-[#444746] text-lg">
              <p>Do <strong>not</strong> use the web browser to enroll if you can avoid it. The web portal is notorious for throwing vague "Your request could not be processed" errors.</p>

              <ol className="space-y-6 list-decimal list-inside ml-2">
                <li>
                  <strong className="text-[#1F1F1F] font-medium">Download the Developer App:</strong> Install the "Apple Developer" app directly on your iPhone or Mac.
                </li>
                <li>
                  <strong className="text-[#1F1F1F] font-medium">Sign In & Verify:</strong> Sign in with the Apple ID you want to use. The app utilizes FaceID/TouchID, which clears identity verification hurdles much faster.
                </li>
                <li>
                  <strong className="text-[#1F1F1F] font-medium">Select Entity Type:</strong> Choose "Individual" (your legal name shows on the App Store) or "Organization" (your company name shows).
                </li>
                <li>
                  <strong className="text-[#1F1F1F] font-medium">Purchase Membership:</strong> Pay the $99 annual fee through the app using Apple Pay or your linked card.
                </li>
              </ol>
            </div>
          </section>

          {/* SECTION 4: Real-World Problems */}
          <section id="challenges" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <AlertTriangle className="text-[#0A56D1]" size={32} strokeWidth={1.5} />
              <h2 className="text-3xl font-normal text-[#1F1F1F]">4. Real-World Challenges & Fixes</h2>
            </div>
            
            <div className="space-y-8 text-[#444746] text-lg">
              
              <div className="bg-[#F0F4F9] rounded-2xl p-8 border border-[#E0E2E0]">
                <strong className="text-xl font-medium text-[#1F1F1F] block mb-2">Issue 1: Payment Declines & VPNs</strong>
                <p className="text-base mb-4">Are you using a VPN? Turn it off immediately. VPNs are one of the most common causes of payment and enrollment failures. Furthermore, your Apple ID region, your billing address, and your phone number's country code must all perfectly match.</p>
                
                <strong className="text-xl font-medium text-[#1F1F1F] block mb-2">Issue 2: Stuck on "Pending"</strong>
                <p className="text-base mb-4">Apple explicitly states that purchase processing can take up to 48 hours. Wait two full days before contacting support. If you are an Organization, the manual review (including a legal authority check) can take two to four weeks.</p>

                <strong className="text-xl font-medium text-[#1F1F1F] block mb-2">Issue 3: The Verification Call</strong>
                <p className="text-base">Apple's review team will physically call the phone number listed on your D-U-N-S profile to verify your company exists. Ensure that line is active, can receive international calls, and that someone is prepared to answer and confirm your identity.</p>
              </div>

            </div>
          </section>

        </motion.article>
      </div>
    </main>
  );
}