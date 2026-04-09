"use client";

import { motion } from 'framer-motion';
import React from 'react';
import { Mail, Github, Linkedin, ExternalLink, FileText, Code, Smartphone, Briefcase } from 'lucide-react';

export default function Home() {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } }
  };

  return (
    <main className="bg-white text-zinc-900 min-h-screen selection:bg-blue-100 selection:text-blue-700 font-sans">

      {/* 2. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVars}
            className="text-left"
          >
            <motion.span variants={itemVars} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Available for New Projects
            </motion.span>

            <motion.h1 variants={itemVars} className="text-5xl md:text-8xl font-black text-zinc-950 tracking-tight leading-[0.9] mb-8">
              Digital <br /> Experience <br /> 
              <span className="text-blue-600">Designer.</span>
            </motion.h1>

            <motion.div variants={itemVars} className="grid md:grid-cols-2 gap-12 items-end">
              <p className="text-xl text-zinc-600 leading-relaxed max-w-xl">
                I am <span className="text-zinc-950 font-semibold underline decoration-blue-500/30">Hiren Masaliya</span>, 
                specializing in high-performance <span className="text-zinc-950 font-medium">Flutter</span> mobile applications and 
                modern web solutions. Founder of Aptro.
              </p>
              
              <div className="flex gap-4">
                <a href="#contact" className="bg-zinc-950 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all flex items-center gap-2 group">
                  Let's Talk <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/resume.pdf" className="border border-zinc-200 text-zinc-950 px-8 py-4 rounded-full font-bold hover:bg-zinc-50 transition-all flex items-center gap-2">
                  CV <FileText size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. CORE SERVICES / STATS */}
      <section className="py-20 border-y border-zinc-100 bg-zinc-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Years Exp", val: "1+", icon: <Briefcase size={20}/> },
              { label: "Total Projects", val: "5+", icon: <Code size={20}/> },
              { label: "App Platforms", val: "iOS & Android", icon: <Smartphone size={20}/> },
              { label: "Client Satisfaction", val: "100%", icon: <ExternalLink size={20}/> }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-blue-600 mb-2">{stat.icon}</div>
                <p className="text-3xl font-bold text-zinc-950">{stat.val}</p>
                <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROFESSIONAL JOURNEY */}
      <section id="journey" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-4">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-950">Professional Journey</h2>
            <p className="text-zinc-500 max-w-xs text-sm uppercase tracking-tighter font-medium">Selected experience from 2025 – Present</p>
          </div>

          <div className="space-y-4">
            {[
              {
                role: "Founder & Lead Developer",
                company: "Aptro",
                period: "Oct 2025 - Present",
                desc: "Developing a full-scale business management ecosystem using Flutter and Firebase, featuring real-time inventory and Razorpay integration."
              },
              {
                role: "App Developer",
                company: "Freelance",
                period: "Jan 2026",
                desc: "Performance optimization and UI restructuring for existing Flutter applications, focusing on API efficiency."
              },
              {
                role: "Founder",
                company: "Wallzer",
                period: "May 2025 - Jul 2025",
                desc: "Launched a niche community app for devotional content, reaching production on Google Play Store."
              }
            ].map((job, i) => (
              <motion.div 
                whileHover={{ x: 10 }}
                key={i} 
                className="group border-b border-zinc-100 py-10 flex flex-col md:grid md:grid-cols-12 gap-4 items-start cursor-default"
              >
                <span className="md:col-span-2 text-zinc-400 font-mono text-sm">{job.period}</span>
                <div className="md:col-span-4">
                  <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">{job.role}</h3>
                  <p className="text-zinc-500 font-medium">{job.company}</p>
                </div>
                <p className="md:col-span-6 text-zinc-600 leading-relaxed italic">{job.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EDUCATION */}
      <section id="education" className="py-24 bg-zinc-950 text-white rounded-t-[3rem]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16">Academic Foundation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">2023 – 2025</span>
              <h3 className="text-2xl font-bold mt-4 mb-2">M.Sc. IT</h3>
              <p className="text-zinc-400 text-sm mb-4">Gujarat University</p>
              <p className="text-zinc-300">Specialized in Mobile Application Architecture and UI/UX Design.</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">2020 – 2023</span>
              <h3 className="text-2xl font-bold mt-4 mb-2">B.Com (Computer Science)</h3>
              <p className="text-zinc-400 text-sm mb-4">G.K. & C.K. Boshimiya College</p>
              <p className="text-zinc-300">Foundational logic building and structured database management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT */}
      <section id="contact" className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-zinc-950 tracking-tighter mb-8">
            Let's create the <br /> <span className="text-zinc-400">next big thing.</span>
          </h2>
          <a 
            href="mailto:hirenmasliya14@gmail.com" 
            className="text-2xl md:text-4xl font-light text-blue-600 hover:text-zinc-950 underline underline-offset-8 transition-all"
          >
            hirenmasliya14@gmail.com
          </a>

          <div className="flex justify-center gap-12 mt-20">
            <a href="https://linkedin.com/in/hiren-masaliya" className="flex items-center gap-2 font-bold hover:text-blue-600 transition-colors">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="https://github.com/hirenmasaliya" className="flex items-center gap-2 font-bold hover:text-blue-600 transition-colors">
              <Github size={20} /> GitHub
            </a>
          </div>
          
          <p className="mt-32 text-zinc-400 text-sm uppercase tracking-widest font-medium">
            © {new Date().getFullYear()} Hiren Masaliya — Crafted with Precision
          </p>
        </div>
      </section>

    </main>
  );
}