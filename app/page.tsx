"use client";

import { motion } from 'framer-motion';
import React from 'react';
import { Github, Linkedin, ArrowUpRight, MapPin } from 'lucide-react';

const customEase = [0.25, 1, 0.5, 1] as const;

export default function Home() {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
  };

  return (
    <main className="bg-slate-50 text-slate-900 min-h-screen selection:bg-blue-200 selection:text-blue-900 font-sans overflow-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-32 px-6 md:px-12 overflow-hidden">
        {/* Soft Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVars}
            className="flex flex-col items-start"
          >
            <motion.div variants={itemVars} className="flex items-center gap-6 mb-12">
              <div className="flex items-center gap-3 px-4 py-2 bg-white border border-blue-100 rounded-full shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700">
                  Available for Projects
                </span>
              </div>
              <div className="hidden md:flex items-center gap-2 text-slate-500 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                <MapPin size={14} className="text-blue-600" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Jetpur, India</span>
              </div>
            </motion.div>

            <motion.h1 variants={itemVars} className="text-[14vw] md:text-[8.5rem] font-black uppercase tracking-tighter leading-[0.85] mb-12 text-slate-950">
              Crafting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Digital</span> <br />
              Products.
            </motion.h1>

            <motion.div variants={itemVars} className="grid md:grid-cols-12 gap-12 w-full items-end border-t border-slate-200 pt-12">
              <div className="md:col-span-7 lg:col-span-6">
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                  I am <span className="text-slate-950 font-bold">Hiren Masaliya</span>, specializing in high-performance <span className="text-blue-600 font-bold">Flutter</span> mobile applications, <span className="text-blue-600 font-bold">Next.js</span> architectures, and premium web solutions. Founder of Aptro.
                </p>
              </div>

              <div className="md:col-span-5 lg:col-span-6 flex flex-wrap gap-4 md:justify-end">
                <a href="#contact" className="group relative overflow-hidden bg-slate-950 text-white px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_8px_30px_rgb(37,99,235,0.3)] flex items-center gap-3">
                  <span className="relative z-10">Start a Project</span>
                  <ArrowUpRight size={14} className="relative z-10 group-hover:rotate-45 transition-transform duration-300" />
                </a>
                <a href="/resume.pdf" className="group bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 flex items-center gap-3 shadow-sm">
                  View CV
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. CORE STATS */}
      <section className="py-16 border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "Years Experience", val: "1+" },
              { label: "Shipped Projects", val: "5+" },
              { label: "Core Stack", val: "Flutter / Next.js" },
              { label: "Client Satisfaction", val: "100%" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-3">
                <p className="text-3xl md:text-5xl font-black tracking-tighter text-slate-950">{stat.val}</p>
                <p className="text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SELECTED WORKS */}
      <section id="projects" className="py-32 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col mb-20 gap-4">
            <p className="text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold">Featured Projects</p>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-slate-950">Selected <br /> Works</h2>
          </div>

          <div className="flex flex-col gap-6">
            {[
              {
                id: "01",
                title: "Aptro Ecosystem",
                category: "SaaS / Mobile Platform",
                desc: "A comprehensive business management tool featuring real-time inventory tracking, payroll processing, and multi-platform synchronization built with Flutter and Firebase.",
                year: "2025"
              },
              {
                id: "02",
                title: "Wallzer",
                category: "Community Application",
                desc: "A beautifully crafted devotional content platform designed for high-retention. Features custom audio playback architecture and a seamless UI built entirely in Flutter.",
                year: "2025"
              },
              {
                id: "03",
                title: "NextGen Dashboard",
                category: "Web Architecture",
                desc: "An internal analytics dashboard optimized for heavy data processing. Built using Next.js and Tailwind CSS, focusing on micro-interactions and render performance.",
                year: "2026"
              }
            ].map((project, i) => (
              <div key={i} className="group flex flex-col md:flex-row md:items-center justify-between bg-white border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 rounded-3xl p-8 md:p-12 gap-6 md:gap-12 cursor-pointer transition-all duration-500">
                <div className="flex items-start gap-6 md:gap-12 md:w-2/3">
                  <span className="text-slate-300 text-lg md:text-2xl font-black mt-1 md:mt-2 group-hover:text-blue-600 transition-colors duration-500">{project.id}</span>
                  <div>
                    <h3 className="text-3xl md:text-5xl font-black tracking-tight uppercase mb-6 text-slate-950 group-hover:translate-x-2 transition-transform duration-500 ease-[0.25,1,0.5,1]">{project.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em]">
                      <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full border border-blue-100">{project.category}</span>
                      <span className="text-slate-500">{project.year}</span>
                    </div>
                    <p className="mt-8 text-slate-600 text-sm md:text-base leading-relaxed font-medium max-w-xl group-hover:text-slate-900 transition-colors duration-500">
                      {project.desc}
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center w-20 h-20 rounded-full bg-slate-50 border border-slate-200 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500 ease-[0.25,1,0.5,1]">
                  <ArrowUpRight className="text-slate-400 group-hover:text-white group-hover:rotate-45 transition-all duration-500" size={24} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROFESSIONAL JOURNEY */}
      <section id="journey" className="py-32 px-6 md:px-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col mb-20 gap-4">
            <p className="text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold">Selected Experience</p>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-slate-950">Professional <br /> Journey</h2>
          </div>

          <div className="border-t border-slate-200">
            {[
              {
                role: "Founder & Lead Developer",
                company: "Aptro",
                period: "Oct 2025 - Present",
                desc: "Developing a full-scale business management ecosystem. Architecting real-time inventory and payroll systems using Flutter and Firebase."
              },
              {
                role: "App Developer",
                company: "Freelance",
                period: "Jan 2026 - Present",
                desc: "Delivering end-to-end mobile and web solutions. Focus on UI/UX restructuring, API efficiency, and high-conversion SaaS interfaces."
              },
              {
                role: "Founder",
                company: "Wallzer",
                period: "May 2025 - Jul 2025",
                desc: "Designed and launched a niche community application, managing the entire lifecycle from UI design to production on the Google Play Store."
              }
            ].map((job, i) => (
              <div
                key={i}
                className="group border-b border-slate-200 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start hover:bg-slate-50 transition-colors duration-500 -mx-6 px-6 md:-mx-12 md:px-12 rounded-3xl"
              >
                <div className="md:col-span-3 flex flex-col gap-1">
                  <span className="text-slate-950 text-[10px] font-bold uppercase tracking-[0.2em] bg-slate-200/50 w-max px-3 py-1 rounded-md">{job.period}</span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-2 text-slate-950 group-hover:text-blue-600 transition-colors duration-500">{job.role}</h3>
                  <p className="text-slate-500 text-[11px] uppercase tracking-[0.2em] font-bold">{job.company}</p>
                </div>
                <div className="md:col-span-5 flex justify-between items-start gap-6">
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">{job.desc}</p>
                  <ArrowUpRight className="text-slate-300 group-hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-4 group-hover:translate-x-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNICAL ARSENAL */}
      <section className="py-32 px-6 md:px-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-5">
              <p className="text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Core Capabilities</p>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase text-slate-950 mb-6">Technical <br/> Arsenal</h2>
              <p className="text-slate-600 font-medium leading-relaxed max-w-sm">
                I specialize in modern stacks that prioritize performance, scalability, and seamless user experiences across all devices.
              </p>
            </div>
            
            <div className="md:col-span-7 grid sm:grid-cols-2 gap-x-8 gap-y-12">
              {[
                { title: "Mobile Engineering", items: ["Flutter", "Dart", "Native Integrations", "Complex Animations"] },
                { title: "Web Architecture", items: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"] },
                { title: "Backend & Cloud", items: ["Firebase", "Node.js", "Supabase", "RESTful APIs"] },
                { title: "Design & UX", items: ["Figma", "Wireframing", "Prototyping", "Interaction Design"] }
              ].map((skillBlock, i) => (
                <div key={i} className="flex flex-col gap-5 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                  <h3 className="text-lg font-black uppercase tracking-tight text-slate-950">{skillBlock.title}</h3>
                  <ul className="flex flex-col gap-3">
                    {skillBlock.items.map((item, j) => (
                      <li key={j} className="text-slate-600 text-sm font-medium flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. EDUCATION */}
      <section id="education" className="py-32 bg-slate-950 text-white rounded-t-[4rem] relative overflow-hidden">
        {/* Soft Inner Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <p className="text-blue-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Background</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-20 text-white">Academic <br /> Foundation</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 md:p-14 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-3xl hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-500 flex flex-col justify-between min-h-[300px]">
              <div>
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] bg-slate-950 px-3 py-1 rounded-md">2023 – 2025</span>
                <h3 className="text-3xl font-black tracking-tight mt-8 mb-3 text-white">M.Sc. IT</h3>
                <p className="text-blue-400 text-[11px] uppercase tracking-[0.2em] font-bold mb-8">Gujarat University</p>
              </div>
              <p className="text-slate-300 font-medium leading-relaxed">Specialized in Mobile Application Architecture, scalable database systems, and advanced UI/UX Design methodologies.</p>
            </div>

            <div className="p-10 md:p-14 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-3xl hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-500 flex flex-col justify-between min-h-[300px]">
              <div>
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] bg-slate-950 px-3 py-1 rounded-md">2020 – 2023</span>
                <h3 className="text-3xl font-black tracking-tight mt-8 mb-3 text-white">B.Com (CS)</h3>
                <p className="text-blue-400 text-[11px] uppercase tracking-[0.2em] font-bold mb-8">G.K. & C.K. Boshimiya College</p>
              </div>
              <p className="text-slate-300 font-medium leading-relaxed">Built a strong foundation in computational logic, structured database management, and business-oriented software solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT */}
      <section id="contact" className="py-32 md:py-48 px-6 text-center bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-[6rem] font-black uppercase tracking-tighter leading-[0.9] mb-12 text-slate-950">
            Let's build <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">the future.</span>
          </h2>

          <div className="inline-block relative group mt-8">
            <a
              href="mailto:hirenmasliya14@gmail.com"
              className="relative z-10 text-xl md:text-4xl font-black tracking-tight text-slate-900 transition-colors group-hover:text-blue-600"
            >
              hirenmasliya14@gmail.com
            </a>
            <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-blue-600 origin-right scale-x-100 transition-transform duration-500 ease-[0.25,1,0.5,1] group-hover:origin-left group-hover:scale-x-0 rounded-full"></div>
          </div>

          <div className="flex justify-center gap-6 mt-24">
            <a href="https://linkedin.com/in/hiren-masaliya" className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-600 bg-white border border-slate-200 px-6 py-4 rounded-full hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all shadow-sm">
              <Linkedin size={14} /> LinkedIn
            </a>
            <a href="https://github.com/hirenmasaliya" className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-600 bg-white border border-slate-200 px-6 py-4 rounded-full hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all shadow-sm">
              <Github size={14} /> GitHub
            </a>
          </div>

          <p className="mt-32 text-slate-400 text-[10px] uppercase tracking-[0.3em] font-bold">
            © {new Date().getFullYear()} Hiren Masaliya — Jetpur, Gujarat
          </p>
        </div>
      </section>

    </main>
  );
}