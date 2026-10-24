"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  ShieldCheck,
  Lock,
  UserCheck,
  Database,
  Smartphone,
  Code,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Shield,
  Key
} from "lucide-react";

const smoothEase = [0.2, 0, 0, 1] as const;

const tableOfContents = [
  { id: "challenge", label: "The Security Challenge" },
  { id: "verification", label: "Voter Verification" },
  { id: "privacy", label: "Ensuring Vote Privacy" },
  { id: "ux", label: "Accessible UX" },
  { id: "architecture", label: "System Architecture" },
  { id: "conclusion", label: "Conclusion" },
];

export default function VotingAppArticle() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setMounted(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-15% 0px -80% 0px" } 
    );

    tableOfContents.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  if (!mounted) return null;

  return (
    <main className="bg-[#F8F9FA] text-[#1F1F1F] min-h-screen pt-24 md:pt-32 pb-24 font-sans selection:bg-[#D3E3FD] selection:text-[#041E49] relative">
      
      {/* Material Linear Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#0A56D1] origin-left z-50"
        style={{ scaleX }}
      />

      <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row gap-12 xl:gap-20">
        
        {/* =====================================================
            LEFT SIDEBAR - TABLE OF CONTENTS
        ====================================================== */}
        <aside className="hidden lg:block w-64 shrink-0 relative">
          <div className="sticky top-32">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#444746] hover:bg-[#1F1F1F]/5 transition-colors border border-[#747775] px-4 py-2 rounded-full mb-10"
            >
              <ArrowLeft size={16} />
              Back to Articles
            </Link>

            <h4 className="text-sm font-medium text-[#1F1F1F] mb-4 uppercase tracking-wider">
              In this article
            </h4>
            
            <nav className="flex flex-col border-l-2 border-[#E0E2E0]">
              {tableOfContents.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      text-left px-4 py-2.5 text-sm font-medium transition-all relative -ml-[2px] border-l-2
                      ${
                        isActive
                          ? "border-[#0A56D1] text-[#0A56D1] bg-[#D3E3FD]/30"
                          : "border-transparent text-[#444746] hover:border-[#747775] hover:text-[#1F1F1F] hover:bg-[#1F1F1F]/5"
                      }
                    `}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* =====================================================
            MAIN CONTENT AREA
        ====================================================== */}
        <article className="flex-1 max-w-[840px]">
          
          {/* Mobile Back Button (Visible only on small screens) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: smoothEase }}
            className="mb-12 block lg:hidden"
          >
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#444746] hover:bg-[#1F1F1F]/5 transition-colors border border-[#747775] px-5 py-2 rounded-full"
            >
              <ArrowLeft size={18} />
              Back to Articles
            </Link>
          </motion.div>

          {/* Header Section */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: smoothEase }}
            className="mb-16 border-b border-[#E0E2E0] pb-12"
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-[#D3E3FD] text-[#041E49] px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2">
                <ShieldCheck size={16} />
                Case Studies
              </span>
              <span className="bg-[#E8DEF8] text-[#1D192B] px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2">
                <Lock size={16} />
                Security
              </span>
              <span className="text-[#444746] text-sm font-medium flex items-center gap-1.5">
                <Clock size={16} />
                10 min read
              </span>
            </div>

            <h1 className="text-[40px] md:text-[57px] font-normal tracking-[-0.25px] text-[#1F1F1F] mb-8 leading-[1.15] md:leading-[64px]">
              How I Designed and Built a Secure Digital Voting App
            </h1>

            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[#E1E3E1]">
                <img
                  src="/images/hero.png" // Ensure this image path is correct in your public folder
                  alt="Hiren Masaliya"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <div>
                <p className="text-base font-medium text-[#1F1F1F]">
                  Hiren Masaliya
                </p>
                <p className="text-sm text-[#444746]">Oct 2, 2026</p>
              </div>
            </div>

            <p className="text-[18px] md:text-[20px] text-[#444746] font-normal leading-[32px]">
              Digital voting is considered one of the hardest problems in computer science. Why? Because it requires two properties that fundamentally contradict each other: strict identity verification (to prevent fraud) and absolute anonymity (to prevent coercion).
            </p>

            <p className="text-[18px] md:text-[20px] text-[#444746] font-normal leading-[32px] mt-6">
              This case study breaks down how I approached voter verification, vote privacy, duplicate-vote prevention, and overall election integrity while maintaining a simple, accessible user experience.
            </p>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: smoothEase }}
            className="space-y-16"
          >
            {/* SECTION: CHALLENGE */}
            <section id="challenge" className="space-y-6 scroll-mt-24">
              <h2 className="text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] font-normal text-[#1F1F1F]">
                The Core Security Challenge
              </h2>
              <p className="text-[18px] text-[#444746] leading-[28px]">
                In traditional e-commerce or banking apps, every action is tied tightly to a user's identity. If you transfer money, the database needs to know exactly who sent it and who received it. Digital voting flips this on its head.
              </p>
              
              <div className="bg-[#FFD8E4] text-[#31111D] p-8 md:p-10 rounded-[24px] mt-8 flex flex-col md:flex-row gap-8 items-center">
                <AlertTriangle size={64} className="text-[#8C1D40] shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-[#492532] text-sm font-medium tracking-wide uppercase mb-3">
                    The Paradox
                  </p>
                  <p className="text-[20px] md:text-[24px] leading-[32px] md:leading-[36px] font-normal">
                    We must prove exactly <strong>who</strong> voted, but we must be mathematically incapable of proving <strong>what</strong> they voted for.
                  </p>
                  <p className="text-[#492532] text-base mt-4">
                    If an admin or database breach can link a ballot to a voter, the entire system fails.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION: VERIFICATION */}
            <section id="verification" className="space-y-6 scroll-mt-24">
              <h2 className="text-[28px] md:text-[32px] leading-[40px] font-normal text-[#1F1F1F]">
                Voter Verification & Fraud Prevention
              </h2>
              <p className="text-[18px] text-[#444746] leading-[28px] mb-6">
                To solve the verification problem, I separated the system into two distinct environments: the <strong>Authentication Layer</strong> and the <strong>Ballot Box</strong>.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Identity Verification (Auth Layer)",
                    desc: "Voters authenticate using multi-factor authentication (MFA) and a government-issued ID API. Once verified, the system marks them as 'Eligible to Vote'.",
                    icon: <UserCheck className="text-[#0A56D1]" size={28} />
                  },
                  {
                    title: "The Anonymous Token",
                    desc: "Upon authentication, the user is issued a single-use, cryptographic token. This token is blind-signed, meaning the server signs the token as valid without knowing its contents.",
                    icon: <Key className="text-[#0A56D1]" size={28} />
                  },
                  {
                    title: "Casting the Ballot",
                    desc: "The voter submits their choice along with the signed token to a completely separate 'Ballot Box' server. The server verifies the token is valid, records the vote, and burns the token.",
                    icon: <Shield className="text-[#0A56D1]" size={28} />
                  }
                ].map((node, idx) => (
                  <div key={idx} className="flex gap-6 items-start bg-[#F0F4F9] p-6 rounded-[20px]">
                    <span className="w-14 h-14 rounded-full bg-[#D3E3FD] text-[#041E49] flex items-center justify-center text-[22px] font-normal shrink-0">
                      {node.icon}
                    </span>
                    <div>
                      <h3 className="text-[22px] font-medium text-[#1F1F1F] mb-2">{node.title}</h3>
                      <p className="text-[#444746] text-[16px] leading-[26px]">{node.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION: PRIVACY */}
            <section id="privacy" className="space-y-6 scroll-mt-24">
              <h2 className="text-[28px] md:text-[32px] font-normal text-[#1F1F1F] leading-[36px]">
                Ensuring Vote Privacy
              </h2>
              <p className="text-[18px] text-[#444746] leading-[28px] mb-8">
                How do we ensure that even database administrators cannot piece together who voted for whom using timestamp correlation?
              </p>

              <div className="bg-[#FAFDFC] border border-[#747775] p-8 rounded-[24px]">
                <h3 className="font-normal text-[24px] text-[#1F1F1F] mb-4">Time-Shifting and Shuffling</h3>
                <p className="text-[18px] text-[#444746] leading-[28px] mb-4">
                  If Voter A logs in at 10:01 AM, and a ballot for Candidate X is cast at 10:01 AM, a malicious actor could assume Voter A voted for Candidate X. 
                </p>
                <p className="text-[18px] text-[#444746] leading-[28px]">
                  To prevent this, the app uses a delayed queue. Votes are encrypted locally on the device, held in memory, and transmitted at randomized intervals. On the server side, ballots are mathematically shuffled before being decrypted and tallied.
                </p>
              </div>
            </section>

            {/* SECTION: UX */}
            <section id="ux" className="space-y-6 scroll-mt-24">
              <h2 className="text-[28px] md:text-[32px] font-normal text-[#1F1F1F] leading-[36px]">
                Accessible UX Design
              </h2>
              <p className="text-[18px] text-[#444746] leading-[28px]">
                High security usually means high friction. But voting must be accessible to everyone, regardless of technical literacy.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                {[
                  {
                    title: "High Contrast UI",
                    desc: "Designed with WCAG AAA compliance, utilizing large tap targets and clear typography for elderly voters.",
                    icon: <Smartphone className="text-[#0A56D1] mb-4" size={32} />
                  },
                  {
                    title: "Clear Confirmations",
                    desc: "A distinct, multi-step review process so voters never accidentally cast their ballot prematurely.",
                    icon: <CheckCircle2 className="text-[#0A56D1] mb-4" size={32} />
                  }
                ].map((product, idx) => (
                  <div key={idx} className="bg-[#FAFDFC] border border-[#747775] p-6 rounded-[16px] hover:bg-[#F0F4F9] transition-colors">
                    {product.icon}
                    <h3 className="font-medium text-[#1F1F1F] text-[20px] mb-2">{product.title}</h3>
                    <p className="text-[#444746] text-sm leading-[22px]">{product.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION: ARCHITECTURE */}
            <section id="architecture" className="space-y-6 scroll-mt-24">
              <h2 className="text-[28px] md:text-[32px] font-normal text-[#1F1F1F] leading-[36px]">
                Data Architecture
              </h2>
              <p className="text-[18px] text-[#444746] leading-[28px]">
                To maintain the separation of identity and vote, the database schema strictly isolates voter records from ballot records. They do not share foreign keys.
              </p>

              <div className="bg-[#1E1E1E] rounded-[24px] p-6 md:p-8 overflow-x-auto shadow-lg">
                <div className="flex items-center gap-2 mb-4 text-[#A8C7FA]">
                  <Code size={18} />
                  <span className="text-sm font-mono tracking-wider">schema.prisma</span>
                </div>
                <pre className="text-[#E3E3E3] font-mono text-[14px] leading-relaxed m-0">
{`// Strict separation: No relationship between Voter and Ballot

model Voter {
  id              String   @id @default(uuid())
  nationalIdHash  String   @unique
  hasVoted        Boolean  @default(false)
  authenticatedAt DateTime
  
  // Notice: No link to their ballot.
}

model Ballot {
  id           String   @id @default(uuid())
  electionId   String
  candidateId  String
  
  // Only generic timestamp batches to prevent correlation
  recordedAt   DateTime 
}`}
                </pre>
              </div>
            </section>

            {/* SECTION: CONCLUSION */}
            <section id="conclusion" className="space-y-8 mt-12 border-t border-[#E0E2E0] pt-12 scroll-mt-24">
              <h2 className="text-[32px] font-normal text-[#1F1F1F]">
                Main Takeaways
              </h2>

              <div className="bg-[#D3E3FD] text-[#041E49] p-8 md:p-12 rounded-[28px]">
                <Database className="text-[#0A56D1] mb-6" size={48} />
                <h3 className="text-[28px] md:text-[36px] font-normal leading-[40px] md:leading-[48px] mb-6">
                  Design for zero trust.
                </h3>
                <p className="text-[#001D35] text-[18px] leading-[28px]">
                  When building a system where integrity is paramount, you must assume the database itself could be compromised. By designing a system where even a database admin cannot decipher voter choices, we build true digital trust.
                </p>
              </div>

              <p className="text-[18px] text-[#444746] leading-[28px]">
                Building high-stakes software requires shifting our mindset from "how do we track everything?" to "how do we mathematically prove something happened without tracking the person?"
              </p>
            </section>

          </motion.div>

          {/* CTA */}
          <div className="mt-20 mb-8 bg-[#EADDFF] rounded-[28px] p-10 md:p-14 text-[#21005D] flex flex-col items-center text-center">
            <h3 className="text-[32px] md:text-[40px] font-normal mb-4">
              Need secure, robust architecture?
            </h3>
            <p className="text-[#4F378B] text-[18px] leading-relaxed mb-8 max-w-2xl">
              I specialize in designing secure data flows, intuitive UX, and scalable systems for complex applications. Let's discuss how we can build your next high-stakes digital product.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#6750A4] text-white px-8 h-14 rounded-full font-medium hover:bg-[#7D66B6] transition-colors shadow-[0_4px_8px_3px_rgba(103,80,164,0.15)]"
            >
              Contact Me
              <ArrowRight size={20} />
            </Link>
          </div>

        </article>

      </div>

      <footer className="border-t border-[#E0E2E0] py-8 text-center bg-[#F8F9FA] mt-12">
        <p className="text-sm font-medium text-[#747775]">
          © {new Date().getFullYear()} Hiren Masaliya — Software Developer
        </p>
      </footer>

    </main>
  );
}