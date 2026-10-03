"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ShieldCheck,
  ArrowLeft,
  Clock,
  CheckCircle2,
  Smartphone,
  Users,
  EyeOff,
  Activity,
  ArrowRight,
  Lightbulb,
  Fingerprint,
  UserCheck,
  Vote,
  LayoutDashboard,
} from "lucide-react";

const smoothEase = [0.2, 0, 0, 1] as const;

const tableOfContents = [
  { id: "problem", label: "The Core Problem" },
  { id: "architecture", label: "Architectural Questions" },
  { id: "step-1", label: "Creating the Election" },
  { id: "step-2", label: "Voter Experience" },
  { id: "step-3", label: "Multi-Layer Verification" },
  { id: "step-4", label: "Vote Privacy & Duplicates" },
  { id: "step-5", label: "Organizer Dashboard" },
  { id: "takeaways", label: "Main Takeaways" },
];

export default function VotingAppProcessArticle() {
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

    // Observer to track which section is currently in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-15% 0px -80% 0px" } // Triggers when section is near the top
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
      // Offset by 100px to account for breathing room at the top
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
                <Lightbulb size={16} />
                App Concept & Architecture
              </span>
              <span className="text-[#444746] text-sm font-medium flex items-center gap-1.5">
                <Clock size={16} />
                10 min read
              </span>
            </div>

            <h1 className="text-[40px] md:text-[57px] font-normal tracking-[-0.25px] text-[#1F1F1F] mb-8 leading-[1.15] md:leading-[64px]">
              How I Would Design a Secure Digital Voting App
            </h1>

            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[#E1E3E1]">
                <img
                  src="/images/hiro.png"
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
                <p className="text-sm text-[#444746]">Software Developer</p>
              </div>
            </div>

            <p className="text-[18px] md:text-[20px] text-[#444746] font-normal leading-[32px]">
              While exploring ideas for new digital products, I started thinking about the complexities of a digital voting application. My goal was to outline a concept that makes the voting experience simple for users while keeping the underlying process highly secure, private, and easy to manage.
            </p>

            <p className="text-[18px] md:text-[20px] text-[#444746] font-normal leading-[32px] mt-6">
              This article is a conceptual breakdown of how I would build a digital voting experience where users can verify themselves, view candidates, and cast their vote — while organizers manage the entire election from a separate backend dashboard.
            </p>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: smoothEase }}
            className="space-y-16"
          >
            {/* INTRO */}
            <section id="problem" className="space-y-6 scroll-mt-24">
              <h2 className="text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] font-normal text-[#1F1F1F]">
                The Core Problem to Solve
              </h2>
              <p className="text-[18px] text-[#444746] leading-[28px]">
                The first thing to focus on is the actual user friction.
                Traditional voting processes often involve paper forms, manual
                voter lists, physical verification, and a lot of coordination
                between organizers and voters.
              </p>
              <p className="text-[18px] text-[#444746] leading-[28px]">
                For smaller elections such as housing societies, universities, clubs, companies, and local associations, this process can become unnecessarily time-consuming.
              </p>
              <p className="text-[18px] text-[#444746] leading-[28px]">
                If I were to build this, I would want the complete experience to be moved into a seamless digital workflow without compromising integrity.
              </p>

              <div className="bg-[#E8DEF8] text-[#1D192B] p-8 md:p-10 rounded-[24px] mt-8">
                <p className="text-[#4A4458] text-sm font-medium tracking-wide uppercase mb-3">
                  The Proposed Flow
                </p>
                <p className="text-[22px] md:text-[28px] leading-[40px] md:leading-[48px] font-normal">
                  Verify → View Candidates → Vote → Confirm → Done.
                </p>
              </div>
            </section>

            {/* QUESTIONS */}
            <section id="architecture" className="space-y-6 scroll-mt-24">
              <h2 className="text-[28px] md:text-[32px] leading-[40px] font-normal text-[#1F1F1F]">
                Architectural Questions
              </h2>
              <p className="text-[18px] text-[#444746] leading-[28px] mb-6">
                Voting is vastly different from submitting a normal form. A voting app architecture needs to strictly handle identity, privacy, duplicate-vote prevention, and data integrity. Here are the questions the system must answer:
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Is this person an eligible voter?",
                  "Has this person already voted?",
                  "Can the same person vote twice?",
                  "Can someone vote on behalf of another person?",
                  "Can the organizer modify a submitted vote?",
                  "How can the vote remain completely private?",
                  "What happens if the internet connection drops midway?",
                  "How does voting automatically start and stop?",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#FAFDFC] border border-[#747775] rounded-[16px] p-5 flex items-start gap-3 hover:bg-[#F0F4F9] transition-colors"
                  >
                    <ShieldCheck size={24} className="text-[#0A56D1] shrink-0" />
                    <span className="text-[#1F1F1F] text-base">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* STEP 1 */}
            <section id="step-1" className="space-y-6 scroll-mt-24">
              <div className="flex items-center gap-4 mb-2">
                <span className="w-12 h-12 rounded-full bg-[#D3E3FD] text-[#041E49] flex items-center justify-center text-[22px] font-normal shrink-0">
                  1
                </span>
                <h2 className="text-[28px] md:text-[32px] font-normal text-[#1F1F1F] leading-[36px]">
                  Creating the Election (Admin Side)
                </h2>
              </div>
              <p className="text-[18px] text-[#444746] leading-[28px]">
                The process would start from the organizer's side. The organizer experience must be straightforward, requiring zero technical knowledge. They would simply create an election and configure the important parameters before voting begins.
              </p>

              <div className="bg-[#F0F4F9] p-8 rounded-[24px]">
                <div className="flex items-center gap-4 mb-6">
                  <LayoutDashboard className="text-[#0A56D1]" size={32} />
                  <h3 className="font-normal text-[#1F1F1F] text-[24px]">
                    Proposed Organizer Controls
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Election name and description",
                    "Candidates and candidate photos",
                    "Eligible voter list (CSV upload)",
                    "Registered phone numbers",
                    "Automated voting start & end times",
                    "Live election status tracking",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-4 text-[#444746] text-[18px]">
                      <div className="w-2 h-2 rounded-full bg-[#0A56D1]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* STEP 2 */}
            <section id="step-2" className="space-y-6 scroll-mt-24">
              <div className="flex items-center gap-4 mb-2">
                <span className="w-12 h-12 rounded-full bg-[#D3E3FD] text-[#041E49] flex items-center justify-center text-[22px] font-normal shrink-0">
                  2
                </span>
                <h2 className="text-[28px] md:text-[32px] font-normal text-[#1F1F1F] leading-[36px]">
                  Designing the Voter Experience
                </h2>
              </div>
              <p className="text-[18px] text-[#444746] leading-[28px]">
                User experience is critical for an app like this. Voting should not feel like navigating a complex banking app. The user should immediately understand what the election is, whether they are eligible, who the candidates are, and how they can submit their vote.
              </p>

              <div className="bg-[#C2E7FF] text-[#001D35] p-8 rounded-[24px]">
                <h3 className="font-normal text-[24px] mb-8">
                  The Ideal User Flow
                </h3>
                <div className="flex flex-wrap items-center gap-4">
                  {[
                    "Open App",
                    "Verify Identity",
                    "Enter Election",
                    "View Candidates",
                    "Select Candidate",
                    "Confirm Vote",
                    "Success Screen",
                  ].map((item, index) => (
                    <React.Fragment key={item}>
                      <span className="bg-white px-5 py-2.5 rounded-xl text-sm font-medium shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
                        {item}
                      </span>
                      {index < 6 && <ArrowRight size={20} className="text-[#0A56D1]" />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </section>

            {/* STEP 3 */}
            <section id="step-3" className="space-y-6 scroll-mt-24">
              <div className="flex items-center gap-4 mb-2">
                <span className="w-12 h-12 rounded-full bg-[#D3E3FD] text-[#041E49] flex items-center justify-center text-[22px] font-normal shrink-0">
                  3
                </span>
                <h2 className="text-[28px] md:text-[32px] font-normal text-[#1F1F1F] leading-[36px]">
                  Multi-Layer Verification Strategy
                </h2>
              </div>
              <p className="text-[18px] text-[#444746] leading-[28px]">
                Security begins before the user ever reaches the ballot screen. The system would first check if the user's phone number exists in the pre-approved voter list. If eligible, an OTP verifies possession. For high-stakes elections, the app could tap into the device's native biometric APIs (Face ID / Fingerprint) for a final layer of proof.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mt-6">
                <div className="bg-[#FAFDFC] border border-[#747775] p-6 rounded-[16px]">
                  <Smartphone className="text-[#0A56D1] mb-4" size={32} />
                  <h3 className="font-medium text-[#1F1F1F] text-[20px] mb-2">Phone Whitelist</h3>
                  <p className="text-[#444746] text-sm">Checked against the admin's approved voter database.</p>
                </div>
                <div className="bg-[#FAFDFC] border border-[#747775] p-6 rounded-[16px]">
                  <UserCheck className="text-[#0A56D1] mb-4" size={32} />
                  <h3 className="font-medium text-[#1F1F1F] text-[20px] mb-2">OTP Auth</h3>
                  <p className="text-[#444746] text-sm">Standard code verification via Firebase Auth or SMS.</p>
                </div>
                <div className="bg-[#FAFDFC] border border-[#747775] p-6 rounded-[16px]">
                  <Fingerprint className="text-[#0A56D1] mb-4" size={32} />
                  <h3 className="font-medium text-[#1F1F1F] text-[20px] mb-2">Biometrics</h3>
                  <p className="text-[#444746] text-sm">Local device-level hardware authentication trigger.</p>
                </div>
              </div>
            </section>

            {/* STEP 4 */}
            <section id="step-4" className="space-y-6 scroll-mt-24">
              <div className="flex items-center gap-4 mb-2">
                <span className="w-12 h-12 rounded-full bg-[#D3E3FD] text-[#041E49] flex items-center justify-center text-[22px] font-normal shrink-0">
                  4
                </span>
                <h2 className="text-[28px] md:text-[32px] font-normal text-[#1F1F1F] leading-[36px]">
                  Keeping the Vote Private & Preventing Duplicates
                </h2>
              </div>
              <p className="text-[18px] text-[#444746] leading-[28px]">
                There is a major architectural difference between knowing that a person has voted and knowing *who* they voted for. The database would need to treat these as two separate atomic transactions to maintain a secret ballot, while simultaneously marking the user as "voted" to prevent double-voting.
              </p>

              <div className="bg-[#FAFDFC] border border-[#747775] rounded-[24px] overflow-hidden">
                <div className="p-8 flex items-start gap-6">
                  <Users className="text-[#444746] shrink-0" size={32} />
                  <div>
                    <h3 className="font-medium text-[#1F1F1F] text-[22px] mb-2">Participation Status (Public)</h3>
                    <p className="text-[#444746] text-base">
                      The system updates a boolean (`hasVoted: true`) on the user's profile to prevent future voting attempts.
                    </p>
                  </div>
                </div>
                <div className="border-t border-[#C4C7C5] p-8 flex items-start gap-6 bg-[#F0F4F9]">
                  <EyeOff className="text-[#0A56D1] shrink-0" size={32} />
                  <div>
                    <h3 className="font-medium text-[#1F1F1F] text-[22px] mb-2">Vote Tally (Anonymous)</h3>
                    <p className="text-[#444746] text-base">
                      The candidate's vote count is incremented in a separate collection, stripped of any user-identifying metadata.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* STEP 5 */}
            <section id="step-5" className="space-y-6 scroll-mt-24">
              <div className="flex items-center gap-4 mb-2">
                <span className="w-12 h-12 rounded-full bg-[#D3E3FD] text-[#041E49] flex items-center justify-center text-[22px] font-normal shrink-0">
                  5
                </span>
                <h2 className="text-[28px] md:text-[32px] font-normal text-[#1F1F1F] leading-[36px]">
                  Organizer Dashboard
                </h2>
              </div>
              <p className="text-[18px] text-[#444746] leading-[28px]">
                While a voter needs absolute simplicity, an organizer needs absolute visibility. The backend web portal would be a dashboard providing real-time, aggregated data without compromising individual vote secrecy.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Total registered vs. active voters",
                  "Live vote count increments",
                  "Remaining eligible voters",
                  "Automated election status toggles",
                  "Candidate profile management",
                  "Final result generation",
                ].map((item, index) => (
                  <div key={index} className="bg-[#F0F4F9] p-5 rounded-[16px] flex items-center gap-4">
                    <Activity size={24} className="text-[#0A56D1]" />
                    <span className="text-[#1F1F1F] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* FINAL THOUGHT */}
            <section id="takeaways" className="space-y-8 mt-12 border-t border-[#E0E2E0] pt-12 scroll-mt-24">
              <h2 className="text-[32px] font-normal text-[#1F1F1F]">
                My Main Takeaways from this Concept
              </h2>

              <div className="bg-[#D3E3FD] text-[#041E49] p-8 md:p-12 rounded-[28px]">
                <Vote className="text-[#0A56D1] mb-6" size={48} />
                <h3 className="text-[28px] md:text-[36px] font-normal leading-[40px] md:leading-[48px] mb-6">
                  Make it easy for the user, but rigorous on the backend.
                </h3>
                <p className="text-[#001D35] text-[18px] leading-[28px]">
                  Conceptualizing this app helped me realize how modern frameworks (like Flutter and Next.js) can create a seamless surface for an incredibly strict set of backend rules. The user shouldn't need to understand the cryptography or database locks happening behind the scenes.
                </p>
              </div>

              <p className="text-[18px] text-[#444746] leading-[28px]">
                When a person presses a "Submit Vote" button, they should instantly understand what is happening and have complete confidence that the system is respecting the rules of the election.
              </p>
              <p className="text-[18px] text-[#444746] leading-[28px]">
                Designing the balance between <strong>effortless mobile UX and complex backend architecture</strong> is exactly what makes conceptualizing digital products so exciting to me.
              </p>
            </section>

          </motion.div>

          {/* CTA */}
          <div className="mt-20 mb-8 bg-[#EADDFF] rounded-[28px] p-10 md:p-14 text-[#21005D] flex flex-col items-center text-center">
            <h3 className="text-[32px] md:text-[40px] font-normal mb-4">
              Have an idea for a digital platform?
            </h3>
            <p className="text-[#4F378B] text-[18px] leading-relaxed mb-8 max-w-2xl">
              Whether it's a mobile app, web dashboard, or a complex system like this one, I enjoy turning ideas into reliable, user-friendly digital products.
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