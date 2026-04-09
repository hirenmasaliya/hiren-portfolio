"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Rocket, Cpu, Globe, Smartphone, Users, Layers, ArrowRight, Briefcase, Sparkles, Zap, CheckCircle2 } from "lucide-react";

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <main className="bg-white text-zinc-900 min-h-screen pt-32 pb-16 selection:bg-blue-100 selection:text-blue-700">
      
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px]"></div>
      </div>

      <section className="max-w-6xl mx-auto px-6 relative z-10">

        {/* 1. HERO SECTION */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="flex flex-col lg:flex-row items-center gap-16 mb-40"
        >
          {/* Text Section */}
          <motion.div variants={fadeInUp} className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest mb-8 border border-blue-100">
              <Sparkles className="w-3 h-3" />
              Founder & Lead Developer
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-zinc-950 mb-8 leading-[0.9] tracking-tighter">
              Crafting <br />
              <span className="text-blue-600 italic">Simplicity</span> <br />
              at Scale.
            </h1>

            <p className="text-xl text-zinc-600 leading-relaxed max-w-xl mb-10">
              I’m <span className="text-zinc-950 font-semibold underline decoration-blue-500/20">Hiren Masaliya</span>. 
              As the founder of <span className="text-zinc-950 font-medium">Aptro</span>, I build technical ecosystems that help 
              modern entrepreneurs focus on growth, not overhead.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="/contact"
                whileHover={{ y: -2 }}
                className="bg-zinc-950 text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest flex items-center gap-2 transition-all hover:bg-blue-600 shadow-xl shadow-zinc-200"
              >
                Let's Connect <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="/projects"
                whileHover={{ y: -2 }}
                className="bg-white border border-zinc-200 text-zinc-950 px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:bg-zinc-50 transition-all"
              >
                View Work
              </motion.a>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div variants={fadeInUp} className="relative group lg:w-[450px]">
            <div className="relative aspect-square bg-zinc-100 rounded-[3rem] overflow-hidden border border-zinc-100 shadow-2xl">
               <Image
                src="/images/hiro.png"
                alt="Hiren Masaliya"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            {/* Floating Metric Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-2xl border border-zinc-50 hidden md:block"
            >
              <p className="text-4xl font-black text-zinc-950 tracking-tighter">1+</p>
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Years Mastery</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* 2. CORE EXPERTISE BENTO */}
        <div className="mb-40">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-3xl font-black tracking-tight">Core Expertise</h2>
            <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Philosophy & Skills</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Product Strategy",
                icon: <Rocket className="w-6 h-6" />,
                desc: "Scaling SaaS roadmaps from zero to production ready.",
                color: "bg-blue-50 text-blue-600"
              },
              {
                title: "App Engineering",
                icon: <Smartphone className="w-6 h-6" />,
                desc: "Fluid, native-feeling experiences built with Flutter.",
                color: "bg-zinc-100 text-zinc-900"
              },
              {
                title: "Next.js Systems",
                icon: <Globe className="w-6 h-6" />,
                desc: "Highly-optimized web apps designed for the modern web.",
                color: "bg-blue-600 text-white"
              },
            ].map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-10 rounded-[2.5rem] bg-white border border-zinc-100 hover:border-blue-200 transition-all shadow-sm hover:shadow-xl group"
              >
                <div className={`${skill.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:rotate-6`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. THE VISION CARD (Aptro) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-40 bg-zinc-950 rounded-[4rem] p-10 md:p-20 text-white relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-6 block">Visionary Logic</span>
              <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
                "Code is just a tool; <br /> <span className="text-zinc-500">Value is the product."</span>
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
                Aptro was founded on the belief that software should work for the human, not the other way around. 
                I focus on eliminating friction for small business owners through invisible, powerful technology.
              </p>
            </div>
            <div className="w-full md:w-auto grid grid-cols-2 gap-8">
              <div className="text-center p-8 bg-white/5 rounded-3xl border border-white/10">
                <p className="text-4xl font-black">100%</p>
                <p className="text-[10px] text-zinc-500 font-bold uppercase mt-2 tracking-widest">Independent</p>
              </div>
              <div className="text-center p-8 bg-white/5 rounded-3xl border border-white/10">
                <p className="text-4xl font-black">Fast</p>
                <p className="text-[10px] text-zinc-500 font-bold uppercase mt-2 tracking-widest">Iteration</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4. TECH STACK (MINIMALIST) */}
        <div className="mb-40 text-center">
            <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-12">Built with Excellence</p>
            <div className="flex flex-wrap justify-center gap-3">
                {["Next.js", "Flutter", "TypeScript", "Node.js", "Firebase", "PostgreSQL", "Tailwind"].map((tech) => (
                    <span key={tech} className="px-6 py-2 rounded-full border border-zinc-100 text-sm font-bold text-zinc-600 hover:text-blue-600 hover:border-blue-200 transition-all cursor-default">
                        {tech}
                    </span>
                ))}
            </div>
        </div>

        {/* 5. CALL TO ACTION */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-center py-20 px-6 rounded-[4rem] bg-blue-50/50 border border-blue-100 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-600/5 blur-[80px] rounded-full"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-zinc-950 mb-8 tracking-tighter">
              Ready to create <br /> the <span className="text-blue-600 underline decoration-blue-200">extraordinary?</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-zinc-950 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-all shadow-xl shadow-blue-100">
                Start a Conversation
              </a>
              <a href="/projects" className="bg-white border border-zinc-200 text-zinc-950 px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-zinc-50 transition-all">
                See Portfolio
              </a>
            </div>
          </div>
        </motion.div>

      </section>

      {/* Simplified Footer Text */}
      <footer className="mt-20 text-center">
        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
            © {new Date().getFullYear()} Hiren Masaliya — Design & Development
        </p>
      </footer>
    </main>
  );
}