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
  MonitorPlay
} from "lucide-react";

export default function CreateGooglePlayAccountArticle() {
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
    { id: "account-types", label: "2. Personal vs. Organization" },
    { id: "registration", label: "3. Registration Steps" },
    { id: "verification", label: "4. Identity Verification" },
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
            <span>Oct 26, 2026</span>
            <span className="w-1 h-1 rounded-full bg-[#747775]"></span>
            <span>5 min read</span>
          </div>

          <h1 className="text-[40px] md:text-[52px] leading-[1.15] font-normal text-[#1F1F1F] mb-6 tracking-tight">
            How to Create a Google Play Developer Account
          </h1>
          
          <p className="text-xl text-[#444746] leading-relaxed">
            A complete walkthrough of setting up your Google Play Console account, paying the one-time $25 registration fee, and verifying your identity to start publishing Android apps.
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
              <h2 className="text-3xl font-normal text-[#1F1F1F]">1. What You Need Before Starting</h2>
            </div>
            
            <div className="space-y-6 text-[#444746] text-lg leading-relaxed">
              <p>Before you head over to the Google Play Console, make sure you have the following ready to avoid timeouts or delays during registration:</p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <UserCheck size={24} className="text-[#0A56D1] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1F1F1F]">A Standard Google Account</strong>
                    <p className="mt-1 text-base">You can use your personal Gmail or a Google Workspace account. It is highly recommended to create a dedicated email (like <em>dev@yourcompany.com</em>) rather than your personal email.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CreditCard size={24} className="text-[#0A56D1] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1F1F1F]">Payment Method for $25 Fee</strong>
                    <p className="mt-1 text-base">Unlike Apple's $99/year fee, Google charges a <strong>one-time $25 USD</strong> registration fee. Have an international credit or debit card ready.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck size={24} className="text-[#0A56D1] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1F1F1F]">Valid Government ID</strong>
                    <p className="mt-1 text-base">You will need a passport, driver's license, or national ID to verify your identity.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 2: Account Types */}
          <section id="account-types" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <Building2 className="text-[#0A56D1]" size={32} strokeWidth={1.5} />
              <h2 className="text-3xl font-normal text-[#1F1F1F]">2. Personal vs. Organization</h2>
            </div>
            
            <div className="space-y-8 text-[#444746] text-lg">
              <p>Google asks you to choose between a Personal account and an Organization account. You cannot easily change this later, so choose carefully.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#F8F9FA] rounded-2xl p-6 border border-[#E0E2E0]">
                  <h3 className="text-xl font-medium text-[#1F1F1F] mb-3">Personal Account</h3>
                  <p className="text-base mb-4">For solo developers, freelancers, or students.</p>
                  <ul className="text-base space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#0A56D1]" /> Only requires personal ID</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#0A56D1]" /> Displays your legal name on store</li>
                    <li className="flex items-center gap-2 text-[#B3261E]"><AlertTriangle size={16} /> <strong>Requires 20 testers for 14 days to publish apps</strong></li>
                  </ul>
                </div>
                
                <div className="bg-[#F8F9FA] rounded-2xl p-6 border border-[#E0E2E0]">
                  <h3 className="text-xl font-medium text-[#1F1F1F] mb-3">Organization Account</h3>
                  <p className="text-base mb-4">For registered businesses, LLCs, and corporations.</p>
                  <ul className="text-base space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#0A56D1]" /> Requires a D-U-N-S Number</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#0A56D1]" /> Displays company name on store</li>
                    <li className="flex items-center gap-2 text-[#0A56D1]"><CheckCircle2 size={16} /> <strong>Exempt from the 20-tester rule</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: Registration Steps */}
          <section id="registration" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <MonitorPlay className="text-[#0A56D1]" size={32} strokeWidth={1.5} />
              <h2 className="text-3xl font-normal text-[#1F1F1F]">3. Registration Steps</h2>
            </div>
            
            <div className="space-y-10 text-[#444746] text-lg">
              <ol className="space-y-6 list-decimal list-inside ml-2">
                <li>
                  <strong className="text-[#1F1F1F] font-medium">Go to the Play Console:</strong> Visit <a href="https://play.google.com/console" target="_blank" rel="noopener noreferrer" className="text-[#0A56D1] hover:underline">play.google.com/console</a> and sign in with your chosen Google account.
                </li>
                <li>
                  <strong className="text-[#1F1F1F] font-medium">Accept the Agreement:</strong> Read and accept the Google Play Developer Distribution Agreement.
                </li>
                <li>
                  <strong className="text-[#1F1F1F] font-medium">Enter Developer Details:</strong> You will need to provide your Developer Name (this is what users will see below your app's title on the store), an active contact email, and a contact phone number.
                </li>
                <li>
                  <strong className="text-[#1F1F1F] font-medium">Pay the Registration Fee:</strong> Proceed to checkout and pay the $25 one-time fee using your card. 
                </li>
              </ol>
            </div>
          </section>

          {/* SECTION 4: Identity Verification */}
          <section id="verification" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <ShieldCheck className="text-[#0A56D1]" size={32} strokeWidth={1.5} />
              <h2 className="text-3xl font-normal text-[#1F1F1F]">4. Identity Verification</h2>
            </div>
            
            <div className="space-y-8 text-[#444746] text-lg">
              <p>After payment, you cannot publish apps immediately. Google must verify your identity. This process typically takes <strong>2 to 4 business days</strong>.</p>
              
              <div className="bg-[#F0F4F9] rounded-2xl p-8 border-l-4 border-[#0A56D1]">
                <div className="flex gap-4">
                  <Info className="text-[#0A56D1] shrink-0 mt-1" size={28} />
                  <div>
                    <strong className="text-xl font-medium text-[#1F1F1F] block mb-3">Verification Requirements</strong>
                    <ul className="space-y-3 text-[#1F1F1F] font-medium">
                      <li className="flex items-start gap-2">
                        <span className="text-[#0A56D1] mt-1">•</span> 
                        <span>Upload a clear, uncropped photo of your government-issued ID.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#0A56D1] mt-1">•</span> 
                        <span>Ensure the name on the ID exactly matches the name on your Google account and payment profile.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#0A56D1] mt-1">•</span> 
                        <span>For organizations, you must provide your 9-digit D-U-N-S number (provided by Dun & Bradstreet) and an official organization document.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </motion.article>
      </div>
    </main>
  );
}