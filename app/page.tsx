"use client";

import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  Code2,
  Smartphone,
  Database,
  Palette,
  Sparkles,
  CheckCircle2,
  Briefcase,
  Play,
  MapPin,
  Calendar,
  Copy
} from 'lucide-react';

const customEase = [0.25, 1, 0.5, 1] as const;

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
  }, [text, isDeleting]);

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
      setTypingSpeed(2500); // Pause time when word is fully typed
      setIsDeleting(true);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(500); // Pause before typing next word
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
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
  };

  const scrollRevealVars = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
  };

  return (
    <main className="bg-[#FAFAFA] text-[#111111] min-h-screen font-sans overflow-x-hidden selection:bg-[#111111] selection:text-white">

      {/* 1. HERO SECTION - UI/UX Upgraded */}
      <section className="relative pt-32 md:pt-28 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto overflow-hidden min-h-[95vh] flex items-center">
        {/* Background Enhancements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-20"></div>
        <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVars}
          className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full"
        >
          <div className="lg:col-span-7 flex flex-col relative z-10">

            <motion.div variants={itemVars} className="mb-6 inline-flex">
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-default">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-gray-700">Accepting New Projects</span>
              </div>
            </motion.div>

            {/* Upgraded Typing Effect H1 - Fixed height issues and added gradient */}
            <motion.h1 variants={itemVars} className="text-5xl md:text-7xl lg:text-[5.5rem] font-light tracking-tight leading-[1.1] text-[#111111] mb-6 min-h-[160px] md:min-h-[180px] lg:min-h-[200px]">
              Building modern <br />
              <span className="font-semibold bg-gradient-to-r from-blue-800 to-blue-500 bg-clip-text text-transparent">
                {text || "\u00A0"}
              </span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                className="font-thin text-[#111111] -ml-2"
              >
                |
              </motion.span> <br />
              applications.
            </motion.h1>

            {/* Improved UX Copywriting */}
            <motion.p variants={itemVars} className="text-gray-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-10">
              Hi, I'm <strong className="font-medium text-[#111111]">Hiren Masaliya</strong>, a full-stack developer based in Gujarat. I transform complex ideas into elegant, user-centric mobile and web experiences that drive real business growth.
            </motion.p>

            <motion.div variants={itemVars} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <a href="#contact" className="group flex items-center justify-center gap-3 bg-[#111111] text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-gray-800 hover:shadow-xl hover:shadow-gray-900/20 hover:-translate-y-1 transition-all duration-300">
                Start a Project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#portfolio" className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold bg-white border border-gray-200 text-[#111111] hover:border-[#111111] hover:shadow-md transition-all duration-300">
                <Play size={16} className="fill-current text-[#111111]" />
                Explore My Work
              </a>
            </motion.div>
          </div>

          {/* Upgraded Image Section with Floating Animation and Glassmorphism */}
          <motion.div
            variants={itemVars}
            className="lg:col-span-5 relative h-[450px] md:h-[650px] w-full mt-10 lg:mt-0"
          >
            {/* Gentle float animation for the main image wrapper */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="w-full h-full relative z-10"
            >
              <div className="w-full h-full bg-[#E5E5E5] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden relative group shadow-2xl shadow-black/10 border-4 border-white">
                <img
                  src="/images/hero.png" // Ensure this path is correct
                  alt="Hiren Masaliya - Full Stack Mobile and Web Developer"
                  className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>

              {/* Floating Stat 1 - Glassmorphism UI */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
                className="absolute -right-2 md:-right-8 top-16 md:top-24 bg-white/70 backdrop-blur-lg border border-white/60 p-5 rounded-3xl shadow-xl shadow-gray-200/50 max-w-[180px] z-20"
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle2 size={20} className="text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold tracking-tight text-[#111111]">100%</h4>
                </div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-2 pl-1">Client Satisfaction</p>
              </motion.div>

              {/* Floating Stat 2 - Glassmorphism UI */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.6, type: "spring" }}
                className="absolute -left-2 md:-left-12 bottom-16 md:bottom-24 bg-[#111111]/80 backdrop-blur-lg border border-gray-700 p-5 rounded-3xl shadow-2xl shadow-black/20 max-w-[200px] z-20"
              >
                <div className="flex items-center gap-3 mb-1">
                  <div className="bg-white/10 p-2 rounded-full">
                    <Briefcase size={20} className="text-white" />
                  </div>
                  <h4 className="text-2xl font-bold tracking-tight text-white">5+</h4>
                </div>
                <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mt-2 pl-1">Apps Deployed</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. ABOUT ME & SKILLS */}
      <section id="about" className="py-32 px-6 md:px-12 bg-white relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVars}
          className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          <motion.div variants={scrollRevealVars} className="flex flex-col gap-8 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#111111]">Custom App & <br /> Web Development</h2>
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              I specialize in creating smooth, high-performance mobile applications with <strong className="font-medium text-[#111111]">Flutter</strong> and lightning-fast SEO-friendly websites with <strong className="font-medium text-[#111111]">Next.js and React</strong>.
              <br /><br />
              Whether you need a full SaaS architecture built on Firebase or a clean UI/UX redesign, I deliver end-to-end solutions that solve real technical challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <motion.div variants={scrollRevealVars} className="bg-[#FAFAFA] border border-gray-100 p-8 md:p-10 rounded-3xl flex flex-col justify-center hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300">
              <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#111111] mb-3">Fast</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">Engineered for low latency and high user retention.</p>
            </motion.div>

            <motion.div variants={scrollRevealVars} className="bg-[#111111] text-white rounded-3xl p-8 flex flex-col justify-center hover:shadow-lg transition-all duration-300">
              <p className="text-white/60 font-medium mb-6 text-sm uppercase tracking-wider">Core Tech Stack</p>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex items-center gap-3"><Smartphone size={20} className="text-white/90" /> <span className="text-sm font-medium">Flutter</span></div>
                <div className="flex items-center gap-3"><Code2 size={20} className="text-white/90" /> <span className="text-sm font-medium">Next.js</span></div>
                <div className="flex items-center gap-3"><Database size={20} className="text-white/90" /> <span className="text-sm font-medium">Firebase</span></div>
                <div className="flex items-center gap-3"><Palette size={20} className="text-white/90" /> <span className="text-sm font-medium">React</span></div>
              </div>
            </motion.div>

            <motion.div variants={scrollRevealVars} className="col-span-2 bg-[#FAFAFA] border border-gray-100 p-8 md:p-10 rounded-3xl flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 group">
              <div className="bg-white border border-gray-200 text-[#111111] p-5 rounded-full group-hover:rotate-12 transition-transform duration-500 shadow-sm flex-shrink-0">
                <Sparkles size={28} />
              </div>
              <p className="text-[#111111] text-lg font-light leading-relaxed">
                From database structuring to Apple App Store deployment, I manage the entire <strong className="font-medium">software development lifecycle</strong>.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 3. EXPERIENCE SECTION */}
      <section className="py-32 px-6 md:px-12 bg-[#FAFAFA]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVars}
          className="max-w-[1200px] mx-auto"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-gray-200 pb-12">
            <div>
              <p className="text-gray-500 text-sm uppercase tracking-widest font-semibold mb-4">Professional Experience</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#111111]">Work History</h2>
            </div>
            <p className="text-gray-600 max-w-md text-lg font-light leading-relaxed">
              A timeline of my roles engineering full-scale business management ecosystems and e-commerce platforms.
            </p>
          </div>

          <div className="flex flex-col">
            {[
              { company: "Aptro (Order & Billing App)", location: "Jetpur, India", role: "Founder & Lead Developer", date: "Oct 2025 - Present", tags: ["Flutter", "SaaS Architecture", "Firebase", "Razorpay", "REST APIs", "Android"] },
              { company: "Buildart Industries", location: "Rajkot (Remote)", role: "Self-Employed", date: "Jan 2026 - Present", tags: ["Next.js", "React"] },
              { company: "50% Save More. Pollute Less.", location: "Ahmedabad, Gujarat, India (Remote)", role: "Self-Employed", date: "Jan 2026", tags: ["Flutter", "Firebase", "Android", "iOS", "REST APIs"] },
              { company: "DIRA Infratech Pvt Ltd", location: "Ahmedabad, Gujarat, India (Remote)", role: "Self-Employed", date: "Aug 2025 – Sep 2025", tags: ["PHP"] },
              { company: "Wallzer", location: "Jetpur, India", role: "Founder", date: "May 2025 - Jul 2025", tags: ["UI/UX Design", "Production"] },
              { company: "PHP Web Developer (Freelance)", location: "Ahmedabad, Gujarat, India (Remote)", role: "Self-Employed", date: "Apr 2025 – May 2025", tags: ["PHP"] },
            ].map((job, i) => (
              <motion.div
                variants={scrollRevealVars}
                key={i}
                className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-gray-200 hover:bg-white hover:px-6 -mx-6 px-6 transition-all duration-300 rounded-2xl cursor-default"
              >
                <div className="md:w-1/3 mb-3 md:mb-0">
                  <h3 className="text-xl md:text-2xl font-medium text-[#111111]">{job.company}</h3>
                </div>
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <p className="text-[#111111] font-medium">{job.role}</p>
                  <p className="text-gray-500 text-sm mt-1">{job.date} • {job.location}</p>
                </div>
                <div className="md:w-1/3 flex flex-wrap md:justify-end gap-2">
                  {job.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 border border-gray-200 bg-white md:bg-transparent rounded-full text-xs font-medium text-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. CALL TO ACTION BANNER */}
      <section className="px-6 md:px-12 py-16 bg-[#FAFAFA]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="max-w-[1600px] mx-auto bg-[#111111] rounded-[2rem] md:rounded-[3rem] py-20 px-8 md:py-28 text-center relative overflow-hidden flex flex-col items-center justify-center shadow-xl shadow-gray-200"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50 pointer-events-none"></div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-8 max-w-3xl relative z-10 leading-tight">
            Need a reliable developer? <br /> Let's build your software.
          </h2>
          <a href="#contact" className="group bg-white text-[#111111] px-8 py-4 rounded-full text-sm font-semibold hover:scale-105 transition-all duration-300 relative z-10 flex items-center gap-3 shadow-lg">
            Get a Free Technical Consultation
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>

      {/* 5. PORTFOLIO / WORKS */}
      <section id="portfolio" className="py-32 px-6 md:px-12 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVars}
          className="max-w-[1600px] mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <p className="text-gray-500 text-sm uppercase tracking-widest font-semibold mb-4">Web & App Portfolio</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#111111]">Featured Projects</h2>
            </div>
            <a href="/projects" className="hidden md:flex group text-[#111111] text-base font-medium items-center gap-2 border-b border-[#111111] pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors">
              Explore All <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Aptro",
                desc: "SaaS Business Management App",
                image: "/images/projects/aptro-website.png",
                link: "https://aptrooms.web.app/"
              },
              {
                title: "Clothiva Elite",
                desc: "Next.js E-Commerce Platform",
                image: "/images/projects/clothiva-thumbnail.png",
                link: "https://clothivaelite.vercel.app/"
              },
              {
                title: "Buildart Industries",
                desc: "React Corporate Website",
                image: "/images/projects/buildart-website.png",
                link: "https://buildartind.com"
              }
            ].map((work, i) => (
              <motion.div variants={scrollRevealVars} key={i} className="group cursor-pointer">
                <a href={work.link} target="_blank" rel="noreferrer" className="block aspect-[3/2] bg-gray-100 border border-gray-100 rounded-3xl mb-5 relative overflow-hidden flex items-center justify-center transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50">
                  <img
                    src={work.image}
                    alt={`${work.title} - ${work.desc}`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                  <div className="absolute z-10 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 shadow-md">
                    <ArrowUpRight size={22} className="text-[#111111]" />
                  </div>
                </a>

                <div className="px-2">
                  <h3 className="text-xl font-semibold text-[#111111] mb-1 group-hover:text-blue-600 transition-colors">
                    <a href={work.link} target="_blank" rel="noreferrer">{work.title}</a>
                  </h3>
                  <p className="text-gray-500 text-sm font-medium">{work.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={scrollRevealVars} className="flex justify-center mt-12 md:hidden">
            <a href="/projects" className="group text-[#111111] text-base font-medium flex items-center gap-2 border-b border-[#111111] pb-1 hover:text-gray-500 transition-colors">
              Explore All <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* 6. FOOTER */}
      {/* 6. FOOTER - UI/UX Upgraded */}
      <footer id="contact" className="bg-[#111111] pt-32 pb-10 px-6 md:px-12 rounded-t-[2.5rem] md:rounded-t-[4rem] relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center mb-24 md:mb-32">

          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-gray-300 uppercase tracking-widest">Available for new projects</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6">
            Let's build something <br className="hidden md:block" />
            <span className="font-medium">extraordinary.</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl font-light mb-16 max-w-2xl mx-auto leading-relaxed">
            Whether you need a scalable SaaS platform or a seamless mobile experience, I'm ready to turn your vision into reality.
          </p>

          {/* Interactive Contact Actions */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 bg-white/5 p-2 rounded-full border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
              <a
                href="mailto:hirenmasliya14@gmail.com"
                className="text-xl md:text-3xl font-light text-white px-6 py-3 hover:text-gray-300 transition-colors break-all sm:break-normal"
              >
                hirenmasliya14@gmail.com
              </a>
              <button
                onClick={handleCopyEmail}
                className="flex items-center justify-center gap-2 bg-white text-[#111111] px-6 py-4 rounded-full text-sm font-semibold hover:scale-105 transition-all duration-300 w-full sm:w-auto shadow-lg"
              >
                {isCopied ? (
                  <>
                    <CheckCircle2 size={18} className="text-green-600" />
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

            <p className="text-gray-500 text-sm font-light italic">or</p>

            <a
              href="#" // Add your Calendly or WhatsApp link here
              className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm font-medium border-b border-gray-700 hover:border-white pb-1"
            >
              <Calendar size={16} className="group-hover:-translate-y-0.5 transition-transform" />
              Schedule a quick discovery call
            </a>
          </div>
        </div>

        {/* Bottom Bar - Improved Layout */}
        <div className="max-w-[1600px] mx-auto border-t border-white/10 pt-8 flex flex-col lg:flex-row justify-between items-center gap-8 relative z-10">

          {/* Location details */}
          <div className="flex items-center gap-2 text-gray-500 text-sm font-medium order-2 lg:order-1">
            <MapPin size={16} />
            <p>Based in Jetpur, Gujarat, India</p>
          </div>

          {/* Social Links with Hover Underline effect */}
          <div className="flex gap-8 order-1 lg:order-2">
            {['LinkedIn', 'GitHub', 'Twitter'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-gray-400 text-sm font-medium hover:text-white relative group transition-colors"
              >
                {social}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-gray-600 text-sm font-medium order-3">
            <p>© {new Date().getFullYear()} Hiren Masaliya.</p>
          </div>
        </div>
      </footer>

    </main>
  );
}