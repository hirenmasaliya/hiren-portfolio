"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, Smartphone, ArrowUpRight, ArrowRight, Database, Layers, CheckCircle2 } from "lucide-react";

// Premium easing curve for smooth animations
const customEase = [0.25, 1, 0.5, 1] as const;

export default function About() {
  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.15 } },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } },
  };

  return (
    <main className="bg-[#F8F8F8] text-[#222222] min-h-screen pt-32 pb-16 selection:bg-[#222222] selection:text-white font-sans overflow-x-hidden">
      
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

        {/* 1. HERO SECTION */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20 mb-32"
        >
          {/* Text Section */}
          <motion.div variants={fadeInUp} className="flex-1 text-left w-full lg:pr-8">
            <div className="mb-10 inline-flex items-center gap-3">
              <div className="w-2 h-2 bg-[#222222] rounded-full"></div>
              <span className="text-[#7B7B7B] text-xs uppercase tracking-widest font-semibold">
                Founder & Full-Stack Developer
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-light text-[#222222] mb-10 leading-[1.05] tracking-tight">
              Engineering <br />
              <span className="text-[#7B7B7B]">complex systems,</span> <br />
              beautifully.
            </h1>

            <div className="grid md:grid-cols-12 gap-8 border-t border-[#222222]/10 pt-10">
              <div className="md:col-span-8">
                <p className="text-lg md:text-xl text-[#555555] leading-relaxed font-light">
                  Hi, I’m <strong className="font-medium text-[#222222]">Hiren Masaliya</strong>, a software developer and technical founder based in Jetpur, India. 
                  Whether I am engineering cross-platform mobile applications or architecting high-end web platforms, I focus on building scalable products that solve real business challenges.
                </p>
              </div>

              <div className="md:col-span-4 flex flex-col justify-end items-start md:items-end">
                <a href="/contact" className="group text-sm font-medium border-b-2 border-[#222222] text-[#222222] pb-1 flex items-center justify-between hover:text-[#7B7B7B] hover:border-[#7B7B7B] transition-all w-max gap-3">
                  Let's Connect
                  <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Image Section - Premium Treatment */}
          <motion.div variants={fadeInUp} className="relative w-full lg:w-[450px] shrink-0 mt-10 lg:mt-0">
            <div className="relative aspect-[3/4] bg-[#E5E5E5] overflow-hidden rounded-[2rem] md:rounded-[3rem] transition-all duration-1000 shadow-xl shadow-black/5">
               <Image
                src="/images/hiro.png" /* Make sure this path is correct */
                alt="Hiren Masaliya"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[#222222]/10 mix-blend-multiply pointer-events-none hover:opacity-0 transition-opacity duration-700"></div>
            </div>

            {/* Floating Metric Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: customEase }}
              className="absolute bottom-10 -left-6 md:-left-12 bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg border border-[#222222]/5 flex flex-col gap-1"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 size={28} className="text-green-500" />
                <p className="text-4xl md:text-5xl font-semibold text-[#222222] tracking-tighter">6+</p>
              </div>
              <p className="text-[#7B7B7B] text-[10px] md:text-xs uppercase tracking-widest mt-2 font-medium">Production Launches</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* 2. WHAT I DO - Technical Expertise */}
        <div className="mb-32 md:mb-40 border-t border-[#222222]/10 pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#222222]">Core Expertise</h2>
            <p className="text-[#7B7B7B] text-xs uppercase tracking-widest font-semibold md:pb-2">My Technical Focus</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cross-Platform Mobile",
                icon: <Smartphone className="w-6 h-6" />,
                desc: "Engineering high-performance applications for iOS and Android using Flutter. Implementing complex state management, custom layouts, and seamless Apple/Google store deployments."
              },
              {
                title: "Web Platforms & SaaS",
                icon: <Globe className="w-6 h-6" />,
                desc: "Architecting modern web applications, high-end e-commerce sites, and multi-role dashboards utilizing Next.js, React, PHP, and customized Tailwind CSS interfaces."
              },
              {
                title: "Cloud & Backend Systems",
                icon: <Database className="w-6 h-6" />,
                desc: "Structuring real-time databases, securing authentications, and integrating payment gateways like Razorpay utilizing cloud providers such as Firebase and Supabase."
              },
            ].map((skill, i) => (
              <div
                key={i}
                className="p-8 md:p-10 bg-[#FFFFFF] rounded-3xl border border-[#222222]/5 hover:shadow-xl hover:shadow-[#222222]/5 transition-all duration-500 group flex flex-col"
              >
                <div className="w-14 h-14 rounded-full bg-[#F8F8F8] text-[#222222] flex items-center justify-center mb-8 group-hover:bg-[#222222] group-hover:text-[#FFFFFF] transition-colors duration-500">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-medium tracking-tight mb-3 text-[#222222]">{skill.title}</h3>
                <p className="text-[#7B7B7B] text-sm md:text-base leading-relaxed font-light">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. THE FOUNDER'S JOURNEY (Aptro & Wallzer) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: customEase }}
          className="mb-32 md:mb-40 bg-[#111111] rounded-[2rem] md:rounded-[3rem] text-[#FFFFFF] relative overflow-hidden p-10 md:p-20 shadow-2xl"
        >
          <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-start justify-between">
            <div className="flex-1 max-w-2xl">
              <span className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-8 block">My Philosophy</span>
              <h3 className="text-4xl md:text-5xl font-light mb-10 leading-[1.2] tracking-tight text-[#FFFFFF]">
                "Software should manage the complexity, <br /> 
                <span className="text-gray-400">so the user doesn't have to."</span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed font-light max-w-xl mb-6">
                As the founder of <strong className="text-white font-medium">Aptro</strong>, I built an end-to-end management app from scratch to help small business owners seamlessly handle inventory, staff roles, and billing. 
              </p>
              <p className="text-gray-300 text-lg leading-relaxed font-light max-w-xl">
                Similarly, creating <strong className="text-white font-medium">Wallzer</strong> taught me how to scale social interactions, push notifications, and in-app economies. I bring this exact founder-level dedication to every freelance project, ensuring clear technical scope, solid architecture, and flawless delivery.
              </p>
            </div>
            
            <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-6 pt-8 lg:pt-0">
              <div className="p-8 bg-white/5 rounded-2xl border border-white/10 flex flex-col justify-center min-w-[220px]">
                <Layers className="w-8 h-8 text-white mb-4" />
                <p className="text-3xl font-semibold text-[#FFFFFF]">End-to-End</p>
                <p className="text-[11px] text-gray-400 uppercase mt-2 tracking-widest font-medium">Product Ownership</p>
              </div>
              <div className="p-8 bg-white/5 rounded-2xl border border-white/10 flex flex-col justify-center min-w-[220px]">
                <Globe className="w-8 h-8 text-white mb-4" />
                <p className="text-3xl font-semibold tracking-tight text-[#FFFFFF]">Scalable</p>
                <p className="text-[11px] text-gray-400 uppercase mt-2 tracking-widest font-medium">Cloud Infrastructure</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4. TECH STACK & TOOLS (MINIMALIST PILLS) */}
        <div className="mb-32 md:mb-40 text-center max-w-4xl mx-auto border-t border-[#222222]/10 pt-16">
            <p className="text-[#7B7B7B] text-xs uppercase tracking-widest font-semibold mb-10">Current Arsenal</p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {["Flutter", "Next.js", "React", "PHP", "TypeScript", "Firebase", "Supabase", "Tailwind CSS", "Razorpay", "Generative AI"].map((tech) => (
                    <span key={tech} className="px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-medium tracking-wide text-gray-600 hover:text-[#222222] hover:border-[#222222] hover:shadow-md transition-all duration-300 cursor-default">
                        {tech}
                    </span>
                ))}
            </div>
        </div>

        {/* 5. CALL TO ACTION */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-center py-24 md:py-32 px-6 bg-[#FFFFFF] rounded-[2rem] md:rounded-[3rem] shadow-sm border border-gray-100"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-light text-[#222222] mb-12 tracking-tight leading-[1.1]">
              Ready to build <br/> <span className="text-[#7B7B7B] italic">something great?</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-8 items-center">
              <a href="/contact" className="group bg-[#222222] text-[#FFFFFF] px-8 py-4 rounded-full text-sm font-medium transition-all hover:bg-gray-800 hover:shadow-lg flex justify-center items-center gap-3">
                Let's Talk
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/projects" className="text-[#222222] text-sm font-medium border-b-2 border-[#222222] pb-1 hover:text-[#7B7B7B] hover:border-[#7B7B7B] transition-colors">
                View My Work
              </a>
            </div>
          </div>
        </motion.div>

      </section>

      {/* Footer */}
      <footer className="text-center pb-8 pt-16 border-t border-[#222222]/10 mt-20 mx-6 md:mx-12">
        <p className="text-[11px] text-[#7B7B7B] uppercase tracking-widest font-medium">
            © {new Date().getFullYear()} Hiren Masaliya — Jetpur, Gujarat
        </p>
      </footer>
    </main>
  );
}