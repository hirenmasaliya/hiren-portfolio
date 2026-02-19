"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Rocket, Cpu, Globe, Smartphone, Users, Layers, ArrowRight, Briefcase, Sparkles, Zap } from "lucide-react";

export default function About() {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <main className="bg-black text-white min-h-screen pt-32 pb-16 selection:bg-blue-500/30">
      {/* Background Floating Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-16 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] opacity-20"></div>
        <div className="absolute -bottom-20 -right-16 w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px] opacity-20"></div>
      </div>

      <section className="max-w-6xl mx-auto px-6 relative z-10">

        {/* 1. HERO SECTION */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="flex flex-col lg:flex-row items-center gap-12 mb-32"
        >
          {/* Text Section */}
          <motion.div variants={fadeInUp} className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Founder & Lead Developer
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight">
              Architecting the{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent relative">
                Future of Freelancing
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </span>
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              I'm <span className="text-white font-semibold">Hiren Masaliya</span>. Founder of <span className="text-blue-400 font-semibold">Aptro</span>. I bridge technical complexity and business growth, creating ecosystems that empower entrepreneurs.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-2 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
              >
                Let's Connect <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-2 hover:bg-zinc-800 transition-all"
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div variants={fadeInUp} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2.5rem] blur-xl opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative w-72 h-72 md:w-96 md:h-96 bg-zinc-900 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
              <Image
                src="/images/hiro.png"
                alt="Hiren Masaliya"
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-zinc-900/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hidden md:block shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <Briefcase className="w-8 h-8 text-blue-400" />
                <div>
                  <p className="text-blue-400 font-bold text-2xl">1+ Years</p>
                  <p className="text-gray-500 text-sm">Professional Experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* 2. EXPERTISE BENTO GRID */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Core Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Product Strategy",
                icon: <Rocket className="w-8 h-8" />,
                desc: "Translating business goals into scalable technical roadmaps and SaaS architecture.",
                gradient: "from-blue-600 to-cyan-600",
              },
              {
                title: "Mobile & Web",
                icon: <Globe className="w-8 h-8" />,
                desc: "Cross-platform Flutter apps and high-performance Next.js web applications.",
                gradient: "from-cyan-600 to-blue-600",
              },
              {
                title: "AI Integration",
                icon: <Cpu className="w-8 h-8" />,
                desc: "Leveraging LLMs to automate workflows and create intelligent user experiences.",
                gradient: "from-purple-600 to-blue-600",
              },
            ].map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative p-8 rounded-[2rem] bg-gradient-to-br from-zinc-900 to-black border border-white/10 hover:border-blue-500/30 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className={`relative z-10 w-16 h-16 bg-gradient-to-r ${skill.gradient} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{skill.title}</h3>
                <p className="text-gray-400 leading-relaxed">{skill.desc}</p>
                <div className="flex items-center text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 3. THE APTRO STORY */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32 bg-gradient-to-br from-zinc-900/50 to-black rounded-[3rem] p-8 md:p-16 border border-white/10 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 blur-[120px] group-hover:blur-[160px] transition-all duration-1000"></div>
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <h2 className="text-blue-400 font-mono text-sm font-bold uppercase tracking-[0.2em]">Founder's Vision</h2>
            </div>
            <h3 className="text-4xl md:text-6xl font-bold mb-8 italic tracking-tight">"Efficiency is the ultimate form of sophistication."</h3>
            <p className="text-gray-300 text-xl leading-relaxed mb-12">
              Aptro was born from a simple observation: freelancers spend 40% of their time on tasks that don't make them money. I built Aptro to give that time back. Technology should be invisible — it should just work.
            </p>
            <div className="flex flex-wrap gap-12">
              <div>
                <p className="text-5xl font-black text-white bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">100%</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider mt-2">Independent</p>
              </div>
              <div>
                <p className="text-5xl font-black text-white bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Fast</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider mt-2">Iteration</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4. TECH STACK */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32 text-center"
        >
          <h2 className="text-gray-500 uppercase tracking-[0.2em] text-sm mb-12 font-bold">Powering my projects with</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Next.js", "Flutter", "TypeScript", "Node.js", "Firebase", "PostgreSQL", "Tailwind", "OpenAI"].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-6 py-3 bg-zinc-900/50 border border-white/10 rounded-2xl text-lg font-medium text-gray-400 hover:text-blue-400 hover:border-blue-500/30 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* 5. CALL TO ACTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center py-24 relative bg-gradient-to-br from-zinc-900/50 to-black rounded-[4rem] border border-white/10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_70%)]"></div>
          <div className="relative z-10">
            <Rocket className="w-16 h-16 text-blue-400 mx-auto mb-8" />
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              Ready to build <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">something real?</span>
            </h2>
            <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
              Let's transform your vision into a powerful, scalable digital solution.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl flex items-center gap-3 transition-all hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]"
              >
                Start a Conversation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-zinc-900/80 backdrop-blur-sm hover:bg-zinc-800 border border-white/10 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-2"
              >
                <Briefcase className="w-5 h-5" />
                See My Work
              </motion.a>
            </div>
          </div>
        </motion.div>

      </section>
    </main>
  );
}
