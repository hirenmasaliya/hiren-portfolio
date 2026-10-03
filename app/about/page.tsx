"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
  Rocket,
  Code,
  Sparkles,
} from "lucide-react";

// Google Material 3 Emphasized Decelerate easing
const materialEase = [0.2, 0, 0, 1] as const;

export default function About() {
  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.12 } },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: materialEase } },
  };

  return (
    <main className="bg-[#F8F9FA] text-[#1F1F1F] min-h-screen pt-24 md:pt-32 pb-20 font-sans selection:bg-[#D3E3FD] selection:text-[#041E49] antialiased">
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">

        {/* =====================================================
            1. HERO SECTION - Material Display Typography
        ====================================================== */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-16 mb-24 md:mb-32"
        >
          {/* Text Section */}
          <motion.div variants={fadeInUp} className="flex-1 w-full">
            {/* M3 Primary Container Chip */}
            <div className="mb-6 inline-flex items-center gap-2 bg-[#D3E3FD] text-[#041E49] px-3.5 py-1.5 rounded-lg text-sm font-medium">
              <Code size={16} />
              <span>Software Developer & Founder</span>
            </div>

            {/* M3 Display Large Scale */}
            <h1 className="text-[44px] md:text-[57px] lg:text-[64px] font-normal text-[#1F1F1F] mb-6 leading-[1.1] md:leading-[68px] tracking-[-0.25px]">
              Building thoughtful apps, made simple.
            </h1>

            {/* M3 Body Large */}
            <p className="text-[18px] md:text-[20px] text-[#444746] leading-[30px] md:leading-[32px] font-normal mb-8 max-w-2xl">
              Hi, I’m <strong className="font-medium text-[#1F1F1F]">Hiren Masaliya</strong>, a software developer based in Jetpur, India. 
              I help founders and businesses build modern mobile applications and web platforms that are fast, secure, and straightforward to use.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0A56D1] text-white px-7 h-12 rounded-full text-sm font-medium hover:bg-[#0842A0] transition-colors active:scale-95 shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
              >
                Let's Connect
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 border border-[#747775] text-[#1F1F1F] px-6 h-12 rounded-full text-sm font-medium hover:bg-[#1F1F1F]/5 transition-colors"
              >
                View Selected Work
              </Link>
            </div>
          </motion.div>

          {/* Profile Media - Material Outlined Container */}
          <motion.div variants={fadeInUp} className="relative w-full sm:w-[380px] lg:w-[400px] shrink-0 mx-auto lg:mx-0">
            <div className="relative aspect-[4/5] bg-[#E1E3E1] rounded-[28px] overflow-hidden border border-[#C4C7C5]">
              <Image
                src="/images/hiro.png"
                alt="Hiren Masaliya - App Developer"
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            {/* Floating Metric - Material Surface Card */}
            <div className="absolute -bottom-6 -left-4 md:-left-6 bg-white border border-[#E0E2E0] p-5 rounded-[20px] shadow-[0_2px_6px_rgba(0,0,0,0.1)] flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#C2E7FF] text-[#001D35] flex items-center justify-center shrink-0">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="text-2xl font-medium text-[#1F1F1F] leading-tight">6+</p>
                <p className="text-xs text-[#747775] font-medium uppercase tracking-wider mt-0.5">Live Products</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* =====================================================
            2. SERVICES - Material Outlined Cards
        ====================================================== */}
        <div className="mb-24 md:mb-32 border-t border-[#E0E2E0] pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-medium text-[#0A56D1] mb-2 block">
                Areas of Expertise
              </span>
              <h2 className="text-[32px] md:text-[40px] font-normal text-[#1F1F1F] leading-tight">
                How I Can Help You
              </h2>
            </div>
            <p className="text-[#444746] text-base max-w-md">
              Full lifecycle product engineering—from initial architectural decisions to store deployment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Mobile Apps (iOS & Android)",
                icon: <Smartphone size={24} />,
                desc: "High-performance cross-platform applications built with Flutter. Clean architectures, reactive state management, and direct App Store / Play Store releases."
              },
              {
                title: "Web Apps & Platforms",
                icon: <Globe size={24} />,
                desc: "Fast, responsive web applications engineered with Next.js and React. Designed with clean design systems, accessible UI, and optimized search performance."
              },
              {
                title: "Backend & Cloud Architecture",
                icon: <ShieldCheck size={24} />,
                desc: "Scalable cloud services powered by Firebase and PostgreSQL. Secure authentication, atomic database transactions, and compliant payment integrations with Razorpay."
              },
            ].map((service, i) => (
              <div
                key={i}
                className="p-8 bg-[#FAFDFC] border border-[#747775] rounded-[24px] hover:bg-[#F0F4F9] transition-colors duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#D3E3FD] text-[#041E49] flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-[22px] font-medium text-[#1F1F1F] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#444746] text-sm leading-[24px]">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            3. FOUNDER JOURNEY - Material Inverse Surface
        ====================================================== */}
        <div className="mb-24 md:mb-32 bg-[#1F1F1F] text-[#F8F9FA] rounded-[28px] p-8 md:p-14 relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
            <div>
              <span className="text-[#A8C7FA] text-xs uppercase tracking-wider font-medium mb-4 block">
                Founder Perspective
              </span>
              <h3 className="text-[28px] md:text-[38px] font-normal leading-[1.25] text-white mb-6">
                “Complex systems should always provide simple experiences.”
              </h3>
              
              <div className="space-y-4 text-[#C4C7C5] text-[16px] md:text-[17px] leading-[28px]">
                <p>
                  As the creator of <strong className="text-white font-medium">Aptro</strong>, I engineered an all-in-one business management platform that unifies GST billing, inventory tracking, staff records, and order operations into an accessible workflow.
                </p>
                <p>
                  Managing real-world commercial software shapes how I build for others. Every project receives the same standard of architectural rigor, uptime reliability, and maintainability.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="p-6 bg-[#2B2B2B] rounded-[20px] border border-[#444746] flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-[#0A56D1]/20 text-[#A8C7FA]">
                  <HeartHandshake size={22} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Full-Stack Accountability</h4>
                  <p className="text-xs text-[#C4C7C5] mt-1 leading-relaxed">
                    Direct communication, clear scope boundaries, and complete technical delivery.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#2B2B2B] rounded-[20px] border border-[#444746] flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-[#0A56D1]/20 text-[#A8C7FA]">
                  <Rocket size={22} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Engineered to Scale</h4>
                  <p className="text-xs text-[#C4C7C5] mt-1 leading-relaxed">
                    Clean codebases ready to handle growing data, transaction volume, and feature additions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            4. TECH STACK - Material 3 Assist Chips
        ====================================================== */}
        <div className="mb-24 md:mb-32 max-w-3xl mx-auto text-center border-t border-[#E0E2E0] pt-16">
          <span className="text-xs uppercase tracking-wider font-medium text-[#747775] mb-6 block">
            Technologies & Frameworks
          </span>
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              "Flutter",
              "Dart",
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Firebase",
              "PostgreSQL",
              "Razorpay",
              "REST APIs",
              "Git & CI/CD",
            ].map((tech) => (
              <span
                key={tech}
                className="h-9 px-4 inline-flex items-center text-sm font-medium text-[#444746] bg-transparent border border-[#747775] rounded-lg hover:bg-[#1F1F1F]/5 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* =====================================================
            5. CTA - Material Tertiary Container
        ====================================================== */}
        <div className="text-center py-16 px-6 bg-[#E8DEF8] text-[#1D192B] rounded-[28px]">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-[32px] md:text-[44px] font-normal mb-4 leading-tight">
              Ready to start your next project?
            </h2>
            <p className="text-[#4A4458] text-base md:text-lg mb-8 leading-relaxed">
              Whether you need to build a mobile app from scratch, launch an online platform, or streamline business workflows, I am here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4 items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#6750A4] text-white px-8 h-13 py-3.5 rounded-full text-sm font-medium hover:bg-[#7D66B6] transition-colors shadow-[0_2px_4px_rgba(0,0,0,0.15)] active:scale-95"
              >
                Start a Conversation
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-[#6750A4] hover:bg-[#6750A4]/10 px-6 h-13 py-3.5 rounded-full text-sm font-medium transition-colors"
              >
                Browse Projects
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer className="text-center pt-16 pb-8 border-t border-[#E0E2E0] mt-24">
        <p className="text-xs text-[#747775] font-medium">
          © {new Date().getFullYear()} Hiren Masaliya — Jetpur, Gujarat, India
        </p>
      </footer>
    </main>
  );
}