"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Rocket, Globe, Smartphone, ArrowUpRight, Sparkles } from "lucide-react";

// Premium easing curve
const customEase = [0.25, 1, 0.5, 1] as const;

export default function About() {
  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.15 } },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } },
  };

  return (
    <main className="bg-slate-50 text-slate-900 min-h-screen pt-40 pb-16 selection:bg-blue-200 selection:text-blue-900 font-sans overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <section className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* 1. HERO SECTION */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24 mb-32 md:mb-48"
        >
          {/* Text Section */}
          <motion.div variants={fadeInUp} className="flex-1 text-left w-full">
            <div className="flex items-center gap-3 px-5 py-2.5 bg-white border border-blue-100 rounded-full shadow-sm w-max mb-12">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700">
                Founder & Lead Developer
              </span>
            </div>

            <h1 className="text-[12vw] md:text-[7.5rem] font-black text-slate-950 mb-12 leading-[0.85] tracking-tighter uppercase">
              Crafting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Simplicity</span> <br />
              at Scale.
            </h1>

            <div className="grid md:grid-cols-12 gap-8 border-t border-slate-200 pt-12">
              <div className="md:col-span-8">
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                  I’m <span className="text-slate-950 font-bold">Hiren Masaliya</span>. 
                  As the founder of <span className="text-slate-950 font-bold">Aptro</span>, I build technical ecosystems that help 
                  modern entrepreneurs focus on growth, not overhead.
                </p>
              </div>

              <div className="md:col-span-4 flex flex-col gap-4">
                <a href="/contact" className="group relative overflow-hidden bg-slate-950 text-white px-8 py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_8px_30px_rgb(37,99,235,0.3)] flex items-center justify-between">
                  <span className="relative z-10">Let's Connect</span>
                  <ArrowUpRight size={14} className="relative z-10 group-hover:rotate-45 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Image Section - Premium Treatment */}
          <motion.div variants={fadeInUp} className="relative group w-full lg:w-[450px] shrink-0">
            <div className="relative aspect-[4/5] bg-slate-100 overflow-hidden border border-slate-200 rounded-3xl shadow-2xl shadow-blue-900/10">
               <Image
                src="/images/hiro.png"
                alt="Hiren Masaliya"
                fill
                className="object-cover transition-all duration-1000 ease-[0.25,1,0.5,1] group-hover:scale-105"
              />
            </div>

            {/* Premium Floating Metric */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: customEase }}
              className="absolute -bottom-8 -left-8 bg-white p-8 border border-slate-100 shadow-xl shadow-slate-200/50 rounded-3xl hidden md:flex flex-col gap-2"
            >
              <p className="text-5xl font-black text-slate-950 tracking-tighter">1+</p>
              <p className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em]">Years Mastery</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* 2. CORE EXPERTISE - Premium Cards */}
        <div className="mb-32 md:mb-48 border-t border-slate-200 pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-slate-950">Core <br/> Expertise</h2>
            <p className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] md:pb-3">Philosophy & Skills</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Product Strategy",
                icon: <Rocket className="w-6 h-6" />,
                desc: "Scaling SaaS roadmaps from zero to production ready with precise execution."
              },
              {
                title: "App Engineering",
                icon: <Smartphone className="w-6 h-6" />,
                desc: "Fluid, native-feeling experiences built with Flutter and seamless API integration."
              },
              {
                title: "Next.js Systems",
                icon: <Globe className="w-6 h-6" />,
                desc: "Highly-optimized, server-side rendered web applications designed for performance."
              },
            ].map((skill, i) => (
              <div
                key={i}
                className="p-10 md:p-12 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 ease-[0.25,1,0.5,1]">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-slate-950">{skill.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. THE VISION CARD (Aptro) - Deep Navy Monolith */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: customEase }}
          className="mb-32 md:mb-48 bg-slate-950 text-white rounded-[3rem] relative overflow-hidden p-10 md:p-24 shadow-2xl"
        >
          {/* Subtle inner glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row gap-16 items-start">
            <div className="flex-1">
              <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 block bg-blue-950/50 w-max px-4 py-2 rounded-full border border-blue-800/50">Visionary Logic</span>
              <h3 className="text-4xl md:text-[4rem] font-black mb-10 leading-[0.9] tracking-tighter uppercase text-white">
                "Code is just <br className="hidden md:block" /> a tool; <br /> 
                <span className="text-slate-500">Value is the <br className="hidden md:block"/> product."</span>
              </h3>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-xl">
                Aptro was founded on the belief that software should work for the human, not the other way around. 
                I focus on eliminating friction for small business owners through invisible, powerful technology.
              </p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row md:flex-col gap-6">
              <div className="text-center p-10 bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-3xl flex flex-col justify-center min-w-[200px]">
                <p className="text-5xl font-black text-white">100%</p>
                <p className="text-[10px] text-blue-400 font-bold uppercase mt-3 tracking-[0.2em]">Independent</p>
              </div>
              <div className="text-center p-10 bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-3xl flex flex-col justify-center min-w-[200px]">
                <p className="text-5xl font-black tracking-tighter text-white">Fast</p>
                <p className="text-[10px] text-blue-400 font-bold uppercase mt-3 tracking-[0.2em]">Iteration</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4. TECH STACK (MINIMALIST) */}
        <div className="mb-32 md:mb-48 text-center max-w-4xl mx-auto border-t border-slate-200 pt-16">
            <p className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-12">Arsenal</p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {["Next.js", "Flutter", "TypeScript", "Node.js", "Firebase", "PostgreSQL", "Tailwind"].map((tech) => (
                    <span key={tech} className="px-6 py-3 bg-white border border-slate-200 rounded-full text-[11px] font-bold uppercase tracking-[0.1em] text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:shadow-sm hover:bg-blue-50 transition-all duration-300 cursor-default">
                        {tech}
                    </span>
                ))}
            </div>
        </div>

        {/* 5. CALL TO ACTION - Elevated Floating Card */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-center py-24 md:py-32 px-6 bg-white border border-slate-200 shadow-xl shadow-slate-200/50 rounded-[4rem] relative overflow-hidden"
        >
          {/* Subtle Accent */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-500/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black text-slate-950 mb-12 tracking-tighter uppercase leading-[0.9]">
              Ready to <br/> build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">the</span> <br/> extraordinary?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="/contact" className="group bg-slate-950 text-white px-10 py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-blue-600 hover:shadow-[0_8px_30px_rgb(37,99,235,0.3)] transition-all duration-300 flex justify-center items-center gap-3">
                Start a Conversation
                <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
              </a>
              <a href="/projects" className="bg-white border border-slate-200 text-slate-900 px-10 py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 flex justify-center items-center">
                See Portfolio
              </a>
            </div>
          </div>
        </motion.div>

      </section>

      {/* Footer */}
      <footer className="mt-20 text-center pb-8">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Hiren Masaliya — Jetpur, Gujarat
        </p>
      </footer>
    </main>
  );
}