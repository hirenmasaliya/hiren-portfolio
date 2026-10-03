"use client";

import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Code,
  Smartphone,
  Database,
  Palette,
  Sparkles,
  CheckCircle2,
  Briefcase,
  Play,
  MapPin,
  Calendar,
  Copy,
  MessageCircle
} from 'lucide-react';

// Google Material 3 Emphasized Decelerate easing
const materialEase = [0.2, 0, 0, 1] as const;

export default function HomeContent() {
  // --- Typing Effect State & Logic ---
  const words = ["Flutter", "Next.js", "React", "Full-Stack"];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      handleType();
    }, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed]);

  const handleType = () => {
    const i = loopNum % words.length;
    const fullText = words[i];

    setText(
      isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
    );

    setTypingSpeed(isDeleting ? 40 : 120);

    if (!isDeleting && text === fullText) {
      setTypingSpeed(2500);
      setIsDeleting(true);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(500);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hirenmasliya14@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  // -----------------------------------

  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: materialEase } }
  };

  return (
    <main className="bg-[#F8F9FA] text-[#1F1F1F] min-h-screen font-sans overflow-x-hidden selection:bg-[#D3E3FD] selection:text-[#041E49] antialiased">

      {/* =====================================================
          1. HERO SECTION - Material Display Typography & Surfaces
      ====================================================== */}
      <section className="relative pt-32 md:pt-40 pb-20 px-4 md:px-8 max-w-[1280px] mx-auto min-h-[90vh] flex items-center justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVars}
          className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full"
        >
          {/* Left Column: Copy & CTAs */}
          <div className="flex flex-col relative z-10 max-w-2xl">
            {/* M3 Primary Container Chip */}
            <motion.div variants={itemVars} className="mb-8 inline-flex self-start">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D3E3FD] text-[#041E49] transition-colors hover:bg-[#B1DDF6]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0A56D1] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0A56D1]"></span>
                </span>
                <span className="text-sm font-medium">Available for new projects</span>
              </div>
            </motion.div>

            {/* M3 Display Large */}
            <motion.h1
              variants={itemVars}
              className="text-[44px] sm:text-[57px] lg:text-[64px] font-normal tracking-[-0.25px] text-[#1F1F1F] leading-[1.1] mb-6"
            >
              Building great <br />
              <span className="inline-block min-w-[280px] text-[#0A56D1]">
                {text || "\u00A0"}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                  className="font-light text-[#0A56D1] -ml-1"
                >
                  |
                </motion.span>
              </span>
              <br />
              experiences.
            </motion.h1>

            {/* M3 Body Large */}
            <motion.p variants={itemVars} className="text-[#444746] text-[18px] md:text-[20px] font-normal leading-[32px] mb-10 max-w-xl">
              Hi, I'm <strong className="font-medium text-[#1F1F1F]">Hiren Masaliya</strong>, a developer based in Gujarat. I build fast, easy-to-use mobile apps and websites that solve real business problems without the technical headaches.
            </motion.p>

            {/* M3 Buttons */}
            <motion.div variants={itemVars} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Filled Button */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#0A56D1] text-white px-8 h-12 rounded-full text-sm font-medium transition-colors hover:bg-[#0842A0] shadow-[0_1px_2px_rgba(0,0,0,0.2)] active:scale-95"
              >
                Discuss Your Idea
                <ArrowRight size={18} />
              </a>
              {/* Outlined Button */}
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 h-12 rounded-full text-sm font-medium border border-[#747775] text-[#1F1F1F] transition-colors hover:bg-[#1F1F1F]/5 active:scale-95"
              >
                <Play size={18} />
                See My Work
              </a>
            </motion.div>
          </div>

          {/* Right Column: Hero Image & M3 Elevation Cards */}
          <motion.div
            variants={itemVars}
            // CHANGED: aspect-[3/4] for Instagram portrait ratio and max-w-[420px] to balance height
            className="relative w-full aspect-[3/4] max-w-[420px] mx-auto mt-12 lg:mt-0"
          >
            <div className="w-full h-full relative z-10">
              {/* Main Image - Material Outlined Surface */}
              <div className="w-full h-full bg-[#E1E3E1] rounded-[28px] overflow-hidden relative border border-[#C4C7C5]">
                <img
                  src="/images/hero.png"
                  alt="Hiren Masaliya"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>

              {/* Stat 1 - Material Surface Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5, ease: materialEase }}
                className="absolute -right-2 sm:-right-12 top-10 bg-white border border-[#E0E2E0] p-4 rounded-[20px] shadow-[0_2px_6px_rgba(0,0,0,0.1)] z-20 flex items-center gap-4"
              >
                <div className="bg-[#C2E7FF] p-2.5 rounded-full flex-shrink-0 text-[#001D35]">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="text-[22px] font-medium text-[#1F1F1F] leading-none">100%</h4>
                  <p className="text-[11px] font-medium text-[#747775] uppercase tracking-wider mt-1">Happy Clients</p>
                </div>
              </motion.div>

              {/* Stat 2 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5, ease: materialEase }}
                className="absolute -left-2 sm:-left-12 bottom-10 bg-white border border-[#E0E2E0] p-4 rounded-[20px] shadow-[0_2px_6px_rgba(0,0,0,0.1)] z-20 flex items-center gap-4"
              >
                <div className="bg-[#E8DEF8] p-2.5 rounded-full flex-shrink-0 text-[#1D192B]">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h4 className="text-[22px] font-medium text-[#1F1F1F] leading-none">5+</h4>
                  <p className="text-[11px] font-medium text-[#747775] uppercase tracking-wider mt-1">Apps Launched</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* =====================================================
          2. ABOUT & SERVICES - M3 Tonal Surfaces
      ====================================================== */}
      <section id="about" className="py-24 px-4 md:px-8 bg-white border-y border-[#E0E2E0]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVars}
          className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={itemVars} className="flex flex-col gap-6 max-w-xl">
            <h2 className="text-[32px] md:text-[40px] font-normal text-[#1F1F1F] leading-tight">What I Do</h2>
            <p className="text-[#444746] text-[18px] leading-[28px] font-normal">
              I create smooth mobile apps that work on both Android and iPhone using <strong className="font-medium text-[#1F1F1F]">Flutter</strong>. I also build fast, modern websites using <strong className="font-medium text-[#1F1F1F]">Next.js and React</strong>.
              <br /><br />
              Whether you need an online store, a system to manage your business, or a simple company website, I handle everything from the first design to putting it live on the app store or the web.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {/* M3 Primary Container */}
            <motion.div variants={itemVars} className="bg-[#D3E3FD] text-[#041E49] p-8 rounded-[24px] flex flex-col justify-center">
              <h3 className="text-[24px] md:text-[28px] font-normal mb-2">Fast & Reliable</h3>
              <p className="text-[#001D35] text-sm leading-[24px]">Built for speed so your users never have to wait.</p>
            </motion.div>

            {/* M3 Inverse Surface */}
            <motion.div variants={itemVars} className="bg-[#1F1F1F] text-[#F8F9FA] rounded-[24px] p-8 flex flex-col justify-center">
              <p className="text-[#A8C7FA] font-medium mb-4 text-xs uppercase tracking-wider">Tools I Use</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3"><Smartphone size={20} className="text-[#C4C7C5]" /> <span className="text-sm font-medium">Flutter</span></div>
                <div className="flex items-center gap-3"><Code size={20} className="text-[#C4C7C5]" /> <span className="text-sm font-medium">Next.js</span></div>
                <div className="flex items-center gap-3"><Database size={20} className="text-[#C4C7C5]" /> <span className="text-sm font-medium">Firebase</span></div>
                <div className="flex items-center gap-3"><Palette size={20} className="text-[#C4C7C5]" /> <span className="text-sm font-medium">React</span></div>
              </div>
            </motion.div>

            {/* M3 Outlined Container */}
            <motion.div variants={itemVars} className="col-span-2 bg-[#FAFDFC] border border-[#747775] p-8 rounded-[24px] flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="bg-[#E8DEF8] text-[#1D192B] p-4 rounded-full shrink-0">
                <Sparkles size={28} />
              </div>
              <p className="text-[#1F1F1F] text-[18px] font-normal leading-[28px]">
                From setting up the database to publishing on the <strong className="font-medium">Apple App Store and Google Play</strong>, I take care of the entire process so you don't have to worry.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          3. EXPERIENCE SECTION - Material Lists & Assist Chips
      ====================================================== */}
      <section className="py-24 px-4 md:px-8 bg-[#F8F9FA]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVars}
          className="max-w-[1280px] mx-auto"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-[#E0E2E0] pb-8">
            <div>
              <p className="text-[#0A56D1] text-xs uppercase tracking-wider font-medium mb-2">My Background</p>
              <h2 className="text-[32px] md:text-[40px] font-normal text-[#1F1F1F]">Work History</h2>
            </div>
            <p className="text-[#444746] max-w-md text-base leading-[24px]">
              A quick look at the apps, online stores, and digital tools I have built for different businesses over the years.
            </p>
          </div>

          <div className="flex flex-col">
            {[
              { company: "Aptro (Business App)", location: "Jetpur, India", role: "Founder & Lead Developer", date: "Oct 2025 - Present", tags: ["Flutter", "Web Dashboard", "Firebase"] },
              { company: "Buildart Industries", location: "Remote", role: "Freelance Web Developer", date: "Jan 2026 - Present", tags: ["Next.js", "React"] },
              { company: "50% App", location: "Remote", role: "Mobile App Developer", date: "Jan 2026", tags: ["Flutter", "Firebase", "Android & iOS"] },
              { company: "DIRA Infratech", location: "Remote", role: "Web Developer", date: "Aug 2025 – Sep 2025", tags: ["Web Development"] },
              { company: "Wallzer", location: "Jetpur, India", role: "Founder", date: "May 2025 - Jul 2025", tags: ["App Design", "Mobile Dev"] }
            ].map((job, i) => (
              <motion.div
                variants={itemVars}
                key={i}
                className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-[#E0E2E0] hover:bg-[#1F1F1F]/5 px-4 -mx-4 rounded-xl transition-colors duration-200"
              >
                <div className="md:w-1/3 mb-2 md:mb-0">
                  <h3 className="text-[20px] font-medium text-[#1F1F1F]">{job.company}</h3>
                </div>
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <p className="text-[#1F1F1F] font-medium text-base">{job.role}</p>
                  <p className="text-[#747775] text-sm mt-0.5">{job.date} • {job.location}</p>
                </div>
                <div className="md:w-1/3 flex flex-wrap md:justify-end gap-2">
                  {/* M3 Assist Chips */}
                  {job.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 border border-[#747775] rounded-lg text-xs font-medium text-[#444746]">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          4. CTA BANNER - Material Tertiary Container
      ====================================================== */}
      <section className="px-4 md:px-8 py-12 bg-[#F8F9FA]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: materialEase }}
          className="max-w-[1280px] mx-auto bg-[#EADDFF] rounded-[28px] py-16 px-8 text-center flex flex-col items-center justify-center"
        >
          <h2 className="text-[32px] md:text-[44px] font-normal text-[#21005D] mb-8 max-w-2xl leading-tight">
            Need a reliable developer? <br /> Let's build your idea.
          </h2>
          <a href="#contact" className="inline-flex items-center gap-2 bg-[#6750A4] text-white px-8 h-12 rounded-full text-sm font-medium transition-colors hover:bg-[#7D66B6] shadow-[0_1px_2px_rgba(0,0,0,0.2)] active:scale-95">
            Talk to Me for Free
            <MessageCircle size={18} />
          </a>
        </motion.div>
      </section>

      {/* =====================================================
          5. PORTFOLIO - Material Outlined Cards
      ====================================================== */}
      <section id="portfolio" className="py-24 px-4 md:px-8 bg-white border-t border-[#E0E2E0]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVars}
          className="max-w-[1280px] mx-auto"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 md:mb-12 gap-4 sm:gap-6">
            <div>
              <p className="text-[#0A56D1] text-xs uppercase tracking-wider font-medium mb-1.5 md:mb-2">
                Past Work
              </p>
              <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-normal text-[#1F1F1F] leading-tight">
                Featured Projects
              </h2>
            </div>

            <a
              href="/projects"
              className="inline-flex items-center gap-2 text-[#0A56D1] text-sm font-medium hover:bg-[#0A56D1]/10 px-4 h-10 rounded-full transition-colors shrink-0 -ml-4 sm:ml-0"
            >
              See All Projects <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Aptro", desc: "Business Management App", image: "/images/projects/aptro-website.png", link: "https://aptrooms.web.app/" },
              { title: "Clothiva Elite", desc: "Online Shopping Website", image: "/images/projects/clothiva-thumbnail.png", link: "https://clothivaelite.vercel.app/" },
              { title: "Buildart Industries", desc: "Company Website", image: "/images/projects/buildart-website.png", link: "https://buildartind.com" }
            ].map((work, i) => (
              <motion.div variants={itemVars} key={i} className="group flex flex-col bg-[#FAFDFC] border border-[#747775] rounded-[20px] overflow-hidden hover:bg-[#F0F4F9] transition-colors duration-200">
                <a href={work.link} target="_blank" rel="noreferrer" className="block aspect-[16/9] bg-[#E1E3E1] relative overflow-hidden border-b border-[#747775]">
                  <img
                    src={work.image}
                    alt={`${work.title} - ${work.desc}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-[20px] font-medium text-[#1F1F1F] mb-1 group-hover:text-[#0A56D1] transition-colors">
                    <a href={work.link} target="_blank" rel="noreferrer">{work.title}</a>
                  </h3>
                  <p className="text-[#444746] text-sm">{work.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8 md:hidden">
            <a href="/projects" className="inline-flex items-center gap-2 text-[#0A56D1] text-sm font-medium hover:bg-[#0A56D1]/10 px-4 h-10 rounded-full transition-colors">
              See All Projects <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </section>


      <footer id="contact" className="bg-[#001D35] pt-20 md:pt-24 pb-10 px-4 md:px-8 text-[#F8F9FA] relative">
        <div className="max-w-[1000px] mx-auto text-center mb-16 md:mb-20">

          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#388E3C] animate-pulse"></span>
            <span className="text-xs font-medium text-[#C2E7FF] uppercase tracking-wider">Ready to start a project</span>
          </div>

          {/* Fluid Headline */}
          <h2 className="text-[36px] sm:text-[44px] md:text-[57px] font-normal tracking-[-0.25px] text-white mb-4 md:mb-6 leading-[1.15]">
            Let's build something <br className="hidden sm:block" />
            <span className="text-[#A8C7FA]">great together.</span>
          </h2>

          <p className="text-[#D3E3FD] text-[16px] sm:text-[18px] font-normal mb-10 md:mb-12 max-w-2xl mx-auto leading-[26px] md:leading-[28px] px-4">
            Need a new app or a website? I am here to turn your idea into a real, working product. Send me an email and let's chat.
          </p>

          <div className="flex flex-col items-center gap-6 w-full max-w-xl mx-auto">

            {/* Responsive Email Group (Stacks on mobile, Pill on desktop) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 bg-white/5 p-2 rounded-[24px] sm:rounded-full border border-white/10 w-full sm:w-auto">
              <a
                href="mailto:hirenmasliya14@gmail.com"
                className="text-[18px] sm:text-[20px] md:text-[24px] font-normal text-white px-4 sm:px-6 py-3 sm:py-2 hover:text-[#A8C7FA] transition-colors break-all text-center"
              >
                hirenmasliya14@gmail.com
              </a>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 bg-[#A8C7FA] text-[#001D35] px-6 h-12 sm:h-12 rounded-full text-sm font-medium hover:bg-[#D3E3FD] transition-colors w-full sm:w-auto active:scale-95 shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
              >
                {isCopied ? (
                  <>
                    <CheckCircle2 size={18} className="text-[#001D35]" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    Copy Email
                  </>
                )}
              </button>
            </div>

            <p className="text-white/40 text-sm font-medium">or</p>

            {/* Alternative Contact */}
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#A8C7FA] hover:bg-[#A8C7FA]/10 px-6 h-12 rounded-full text-sm font-medium transition-colors"
            >
              <Calendar size={18} />
              Schedule a quick chat
            </a>
          </div>
        </div>

        {/* Bottom Bar - Stacks on mobile, Row on Desktop */}
        <div className="max-w-[1280px] mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">

          {/* Location - Top on Mobile, Left on Desktop */}
          <div className="flex items-center gap-2 text-[#C2E7FF] text-sm font-medium order-1">
            <MapPin size={18} className="text-[#A8C7FA]" />
            <p>Jetpur, Gujarat, India</p>
          </div>

          {/* Socials - Middle on Mobile, Center on Desktop */}
          <div className="flex flex-wrap justify-center gap-6 order-2">
            {['LinkedIn', 'GitHub', 'Twitter'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-[#C2E7FF] text-sm font-medium hover:text-white transition-colors"
              >
                {social}
              </a>
            ))}
          </div>

          {/* Copyright - Bottom on Mobile, Right on Desktop */}
          <div className="text-white/50 text-sm font-medium order-3">
            <p>© {new Date().getFullYear()} Hiren Masaliya.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}