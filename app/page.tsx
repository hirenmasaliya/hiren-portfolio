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
  Copy,
  MessageCircle
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
    <main className="bg-[#FAFAFA] text-[#111111] min-h-screen font-sans overflow-x-hidden selection:bg-blue-600 selection:text-white">

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 md:pt-40 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto min-h-[90vh] flex items-center justify-center">
        {/* Refined Background - Softer, less distracting, better depth */}
        <div className="absolute inset-0 bg-white -z-20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px] -z-20 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVars}
          className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center w-full"
        >
          {/* Left Column: Copy & CTAs */}
          <div className="flex flex-col relative z-10 max-w-2xl">
            
            {/* Status Badge - Made more clickable-looking and aligned perfectly */}
            <motion.div variants={itemVars} className="mb-8 inline-flex self-start">
              <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm transition-all hover:shadow-md hover:border-gray-300">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-xs font-semibold text-gray-700">Available for new projects</span>
              </div>
            </motion.div>

            {/* H1 - Fixed height jumping and improved typography hierarchy */}
            <motion.h1 
              variants={itemVars} 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.15] mb-6"
            >
              Building great <br />
              {/* Wrapping the dynamic text in a span with a min-width prevents layout shifting */}
              <span className="inline-block min-w-[280px] text-blue-600">
                {text || "\u00A0"}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                  className="font-light text-blue-400 -ml-1"
                >
                  |
                </motion.span>
              </span>
              <br />
              experiences.
            </motion.h1>

            {/* Bio - Increased contrast and improved line height for readability */}
            <motion.p variants={itemVars} className="text-gray-600 text-lg sm:text-xl font-normal leading-relaxed mb-10 max-w-xl">
              Hi, I'm <span className="font-semibold text-gray-900">Hiren Masaliya</span>, a developer based in Gujarat. I build fast, easy-to-use mobile apps and websites that solve real business problems without the technical headaches.
            </motion.p>

            {/* CTAs - Improved touch targets and distinct primary/secondary visual weights */}
            <motion.div variants={itemVars} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a 
                href="#contact" 
                className="group flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95"
              >
                Discuss Your Idea
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#portfolio" 
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-white border-2 border-gray-200 text-gray-700 transition-all duration-300 hover:border-gray-900 hover:text-gray-900 active:scale-95"
              >
                <Play size={18} className="fill-current" />
                See My Work
              </a>
            </motion.div>
          </div>

          {/* Right Column: Hero Image & Stats */}
          <motion.div
            variants={itemVars}
            className="relative w-full aspect-square max-w-[550px] mx-auto mt-8 lg:mt-0"
          >
            {/* Main Image Container */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="w-full h-full relative z-10"
            >
              {/* Removed the heavy 4px white border for a cleaner modern shadow */}
              <div className="w-full h-full bg-gray-100 rounded-[2rem] sm:rounded-[3rem] overflow-hidden relative group shadow-2xl ring-1 ring-gray-900/5">
                <img
                  src="/images/hero.png" 
                  alt="Hiren Masaliya"
                  className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Stat 1 - Repositioned to stay within viewport on mobile */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -right-4 sm:-right-8 top-12 sm:top-20 bg-white/95 backdrop-blur-md border border-gray-100 p-4 sm:p-5 rounded-2xl shadow-xl z-20 flex items-center gap-4"
              >
                <div className="bg-green-100 p-2.5 rounded-full flex-shrink-0">
                  <CheckCircle2 size={24} className="text-green-600" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 leading-none">100%</h4>
                  <p className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">Happy Clients</p>
                </div>
              </motion.div>

              {/* Stat 2 - Repositioned to stay within viewport on mobile */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute -left-4 sm:-left-8 bottom-12 sm:bottom-20 bg-gray-900/95 backdrop-blur-md border border-gray-800 p-4 sm:p-5 rounded-2xl shadow-xl z-20 flex items-center gap-4"
              >
                <div className="bg-white/10 p-2.5 rounded-full flex-shrink-0">
                  <Briefcase size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white leading-none">5+</h4>
                  <p className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wider mt-1">Apps Launched</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. ABOUT & SERVICES */}
      <section id="about" className="py-32 px-6 md:px-12 bg-white relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVars}
          className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          <motion.div variants={scrollRevealVars} className="flex flex-col gap-8 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#111111]">What I Do</h2>
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              I create smooth mobile apps that work on both Android and iPhone using <strong className="font-semibold text-[#111111]">Flutter</strong>. I also build fast, modern websites using <strong className="font-semibold text-[#111111]">Next.js and React</strong>.
              <br /><br />
              Whether you need an online store, a system to manage your business, or a simple company website, I handle everything from the first design to putting it live on the app store or the web.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <motion.div variants={scrollRevealVars} className="bg-blue-50 border border-blue-100 p-8 md:p-10 rounded-3xl flex flex-col justify-center hover:shadow-lg hover:shadow-blue-100 transition-all duration-300">
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-blue-900 mb-3">Fast & Reliable</h3>
              <p className="text-blue-700/80 text-sm md:text-base leading-relaxed">Built for speed so your users never have to wait.</p>
            </motion.div>

            <motion.div variants={scrollRevealVars} className="bg-[#111111] text-white rounded-3xl p-8 flex flex-col justify-center hover:shadow-lg transition-all duration-300">
              <p className="text-gray-400 font-semibold mb-6 text-xs uppercase tracking-widest">Tools I Use</p>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex items-center gap-3"><Smartphone size={20} className="text-gray-300" /> <span className="text-sm font-medium">Flutter</span></div>
                <div className="flex items-center gap-3"><Code2 size={20} className="text-gray-300" /> <span className="text-sm font-medium">Next.js</span></div>
                <div className="flex items-center gap-3"><Database size={20} className="text-gray-300" /> <span className="text-sm font-medium">Firebase</span></div>
                <div className="flex items-center gap-3"><Palette size={20} className="text-gray-300" /> <span className="text-sm font-medium">React</span></div>
              </div>
            </motion.div>

            <motion.div variants={scrollRevealVars} className="col-span-2 bg-[#FAFAFA] border border-gray-100 p-8 md:p-10 rounded-3xl flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 group">
              <div className="bg-white border border-gray-200 text-blue-600 p-5 rounded-full group-hover:rotate-12 transition-transform duration-500 shadow-sm flex-shrink-0">
                <Sparkles size={28} />
              </div>
              <p className="text-[#111111] text-lg font-light leading-relaxed">
                From setting up the database to publishing on the <strong className="font-semibold">Apple App Store and Google Play</strong>, I take care of the entire process so you don't have to worry.
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
              <p className="text-gray-500 text-sm uppercase tracking-widest font-semibold mb-4">My Background</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#111111]">Work History</h2>
            </div>
            <p className="text-gray-600 max-w-md text-lg font-light leading-relaxed">
              A quick look at the apps, online stores, and digital tools I have built for different businesses over the years.
            </p>
          </div>

          <div className="flex flex-col">
            {[
              { company: "Aptro (Business App)", location: "Jetpur, India", role: "Founder & Lead Developer", date: "Oct 2025 - Present", tags: ["Flutter", "Web Dashboard", "Firebase", "Payments"] },
              { company: "Buildart Industries", location: "Remote", role: "Freelance Web Developer", date: "Jan 2026 - Present", tags: ["Next.js", "React"] },
              { company: "50% App", location: "Remote", role: "Mobile App Developer", date: "Jan 2026", tags: ["Flutter", "Firebase", "Android & iOS"] },
              { company: "DIRA Infratech", location: "Remote", role: "Web Developer", date: "Aug 2025 – Sep 2025", tags: ["Web Development"] },
              { company: "Wallzer", location: "Jetpur, India", role: "Founder", date: "May 2025 - Jul 2025", tags: ["App Design", "Mobile Dev"] }
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
          className="max-w-[1600px] mx-auto bg-blue-600 rounded-[2rem] md:rounded-[3rem] py-20 px-8 md:py-28 text-center relative overflow-hidden flex flex-col items-center justify-center shadow-2xl shadow-blue-600/20"
        >
          {/* Decorative Background inside banner */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent pointer-events-none"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-8 max-w-3xl relative z-10 leading-tight">
            Need a reliable developer? <br /> <span className="font-semibold">Let's build your idea.</span>
          </h2>
          <a href="#contact" className="group bg-white text-blue-700 px-8 py-4 rounded-full text-sm font-bold hover:scale-105 transition-all duration-300 relative z-10 flex items-center gap-3 shadow-lg hover:shadow-white/20">
            Talk to Me for Free
            <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
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
              <p className="text-gray-500 text-sm uppercase tracking-widest font-semibold mb-4">Past Work</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#111111]">Featured Projects</h2>
            </div>
            <a href="/projects" className="hidden md:flex group text-blue-600 text-base font-semibold items-center gap-2 border-b-2 border-transparent hover:border-blue-600 pb-1 transition-all">
              See All Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Aptro",
                desc: "Business Management App",
                image: "/images/projects/aptro-website.png",
                link: "https://aptrooms.web.app/"
              },
              {
                title: "Clothiva Elite",
                desc: "Online Shopping Website",
                image: "/images/projects/clothiva-thumbnail.png",
                link: "https://clothivaelite.vercel.app/"
              },
              {
                title: "Buildart Industries",
                desc: "Company Website",
                image: "/images/projects/buildart-website.png",
                link: "https://buildartind.com"
              }
            ].map((work, i) => (
              <motion.div variants={scrollRevealVars} key={i} className="group cursor-pointer">
                <a href={work.link} target="_blank" rel="noreferrer" className="block aspect-[3/2] bg-gray-100 border border-gray-100 rounded-3xl mb-5 relative overflow-hidden flex items-center justify-center transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/50">
                  <img
                    src={work.image}
                    alt={`${work.title} - ${work.desc}`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                  <div className="absolute z-10 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                    <ArrowUpRight size={22} className="text-blue-600" />
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
            <a href="/projects" className="group text-blue-600 text-base font-semibold flex items-center gap-2 border-b-2 border-transparent hover:border-blue-600 pb-1 transition-all">
              See All Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* 6. FOOTER */}
      <footer id="contact" className="bg-[#111111] pt-32 pb-10 px-6 md:px-12 rounded-t-[2.5rem] md:rounded-t-[4rem] relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/[0.05] rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10 text-center mb-24 md:mb-32">

          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-gray-300 uppercase tracking-widest">Ready to start a project</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6">
            Let's build something <br className="hidden md:block" />
            <span className="font-medium text-blue-400">great together.</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl font-light mb-16 max-w-2xl mx-auto leading-relaxed">
            Need a new app or a website? I am here to turn your idea into a real, working product. Send me an email and let's chat.
          </p>

          {/* Interactive Contact Actions */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 bg-white/5 p-2 rounded-full border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
              <a
                href="mailto:hirenmasliya14@gmail.com"
                className="text-xl md:text-3xl font-light text-white px-6 py-3 hover:text-blue-300 transition-colors break-all sm:break-normal"
              >
                hirenmasliya14@gmail.com
              </a>
              <button
                onClick={handleCopyEmail}
                className="flex items-center justify-center gap-2 bg-white text-[#111111] px-6 py-4 rounded-full text-sm font-semibold hover:scale-105 hover:bg-gray-100 transition-all duration-300 w-full sm:w-auto shadow-lg"
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
              href="#" // Add your WhatsApp link here
              className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm font-medium border-b border-gray-700 hover:border-white pb-1"
            >
              <Calendar size={16} className="group-hover:-translate-y-0.5 transition-transform" />
              Schedule a quick chat
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-[1600px] mx-auto border-t border-white/10 pt-8 flex flex-col lg:flex-row justify-between items-center gap-8 relative z-10">
          
          <div className="flex items-center gap-2 text-gray-400 text-sm font-medium order-2 lg:order-1">
            <MapPin size={16} className="text-blue-400" />
            <p>Based in Jetpur, Gujarat, India</p>
          </div>

          <div className="flex gap-8 order-1 lg:order-2">
            {['LinkedIn', 'GitHub', 'Twitter'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-gray-400 text-sm font-medium hover:text-white relative group transition-colors"
              >
                {social}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="text-gray-500 text-sm font-medium order-3">
            <p>© {new Date().getFullYear()} Hiren Masaliya.</p>
          </div>
        </div>
      </footer>

    </main>
  );
}