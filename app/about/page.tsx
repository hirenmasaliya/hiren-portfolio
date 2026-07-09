"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Rocket, Globe, Smartphone, ArrowUpRight, ArrowRight } from "lucide-react";

// Premium easing curve
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
      
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">

        {/* 1. HERO SECTION */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32 md:mb-48"
        >
          {/* Text Section */}
          <motion.div variants={fadeInUp} className="flex-1 text-left w-full lg:pr-12">
            <div className="mb-12 inline-flex items-center gap-2">
              <div className="w-2 h-2 bg-[#222222] rounded-full"></div>
              <span className="text-[#7B7B7B] text-xs uppercase tracking-widest font-medium">
                Founder & Lead Developer
              </span>
            </div>

            <h1 className="text-[12vw] md:text-[8rem] font-light text-[#222222] mb-12 leading-[0.85] tracking-tighter">
              Crafting <br />
              <span className="text-[#7B7B7B]">Simplicity</span> <br />
              at Scale.
            </h1>

            <div className="grid md:grid-cols-12 gap-8 border-t border-[#222222]/10 pt-12">
              <div className="md:col-span-8">
                <p className="text-lg md:text-xl text-[#7B7B7B] leading-relaxed font-medium">
                  I’m <span className="text-[#222222]">Hiren Masaliya</span>. 
                  As the founder of <span className="text-[#222222]">Aptro</span>, I build technical ecosystems that help 
                  modern entrepreneurs focus on growth, not overhead.
                </p>
              </div>

              <div className="md:col-span-4 flex flex-col justify-end">
                <a href="/contact" className="group text-sm font-medium border-b border-[#222222] text-[#222222] pb-1 flex items-center justify-between hover:text-[#7B7B7B] hover:border-[#7B7B7B] transition-all w-max gap-4">
                  Let's Connect
                  <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Image Section - Editorial Treatment */}
          <motion.div variants={fadeInUp} className="relative w-full lg:w-[450px] shrink-0">
            <div className="relative aspect-[3/4] bg-[#E5E5E5] overflow-hidden rounded-tl-full rounded-tr-full grayscale hover:grayscale-0 transition-all duration-1000">
               <Image
                src="/images/hiro.png"
                alt="Hiren Masaliya"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#222222]/5 mix-blend-multiply pointer-events-none"></div>
            </div>

            {/* Minimal Floating Metric */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: customEase }}
              className="absolute bottom-12 -left-12 bg-[#FFFFFF] p-8 hidden md:flex flex-col gap-1 shadow-sm border border-[#222222]/5"
            >
              <p className="text-5xl font-light text-[#222222] tracking-tighter">1+</p>
              <p className="text-[#7B7B7B] text-[10px] uppercase tracking-widest mt-2">Years Mastery</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* 2. CORE EXPERTISE - Minimal Grid */}
        <div className="mb-32 md:mb-48 border-t border-[#222222]/10 pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-[#222222]">Core <br/> Expertise</h2>
            <p className="text-[#7B7B7B] text-xs uppercase tracking-widest md:pb-2">Philosophy & Skills</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {[
              {
                title: "Product Strategy",
                icon: <Rocket className="w-5 h-5" />,
                desc: "Scaling SaaS roadmaps from zero to production ready with precise execution."
              },
              {
                title: "App Engineering",
                icon: <Smartphone className="w-5 h-5" />,
                desc: "Fluid, native-feeling experiences built with Flutter and seamless API integration."
              },
              {
                title: "Next.js Systems",
                icon: <Globe className="w-5 h-5" />,
                desc: "Highly-optimized, server-side rendered web applications designed for performance."
              },
            ].map((skill, i) => (
              <div
                key={i}
                className="p-8 md:p-10 bg-[#FFFFFF] border border-[#222222]/5 hover:border-[#222222]/20 transition-all duration-500 group flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-[#F8F8F8] text-[#222222] flex items-center justify-center mb-10 group-hover:bg-[#222222] group-hover:text-[#FFFFFF] transition-colors duration-500">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-medium tracking-tight mb-4 text-[#222222]">{skill.title}</h3>
                <p className="text-[#7B7B7B] text-sm leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. THE VISION CARD (Aptro) - Stark Black Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: customEase }}
          className="mb-32 md:mb-48 bg-[#222222] text-[#FFFFFF] relative overflow-hidden p-10 md:p-24"
        >
          <div className="relative z-10 flex flex-col md:flex-row gap-16 items-start justify-between">
            <div className="flex-1 max-w-3xl">
              <span className="text-[#7B7B7B] text-xs uppercase tracking-widest mb-8 block">Visionary Logic</span>
              <h3 className="text-4xl md:text-6xl font-light mb-12 leading-[1.1] tracking-tight text-[#FFFFFF]">
                "Code is just a tool; <br /> 
                <span className="text-[#7B7B7B]">Value is the product."</span>
              </h3>
              <p className="text-[#F8F8F8]/70 text-lg leading-relaxed font-medium max-w-xl">
                Aptro was founded on the belief that software should work for the human, not the other way around. 
                I focus on eliminating friction for small business owners through invisible, powerful technology.
              </p>
            </div>
            
            <div className="w-full md:w-auto flex flex-col sm:flex-row md:flex-col gap-6 pt-8 md:pt-0">
              <div className="p-8 border border-[#FFFFFF]/10 flex flex-col justify-center min-w-[200px]">
                <p className="text-4xl md:text-5xl font-light text-[#FFFFFF]">100%</p>
                <p className="text-[10px] text-[#7B7B7B] uppercase mt-3 tracking-widest">Independent</p>
              </div>
              <div className="p-8 border border-[#FFFFFF]/10 flex flex-col justify-center min-w-[200px]">
                <p className="text-4xl md:text-5xl font-light tracking-tight text-[#FFFFFF]">Fast</p>
                <p className="text-[10px] text-[#7B7B7B] uppercase mt-3 tracking-widest">Iteration</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4. TECH STACK (MINIMALIST PILLS) */}
        <div className="mb-32 md:mb-48 text-center max-w-4xl mx-auto border-t border-[#222222]/10 pt-16">
            <p className="text-[#7B7B7B] text-xs uppercase tracking-widest mb-12">Arsenal</p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {["Next.js", "Flutter", "TypeScript", "Node.js", "Firebase", "PostgreSQL", "Tailwind"].map((tech) => (
                    <span key={tech} className="px-6 py-2.5 border border-[#222222]/20 rounded-full text-xs font-medium tracking-wide text-[#7B7B7B] hover:text-[#222222] hover:border-[#222222] transition-colors duration-300 cursor-default">
                        {tech}
                    </span>
                ))}
            </div>
        </div>

        {/* 5. CALL TO ACTION - Clean Typography */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="text-center py-24 md:py-32 px-6 bg-[#FFFFFF] border-t border-[#222222]/10"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-light text-[#222222] mb-12 tracking-tight leading-[1.1]">
              Ready to build <br/> <span className="text-[#7B7B7B] italic">the extraordinary?</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-8 items-center">
              <a href="/contact" className="group bg-[#222222] text-[#FFFFFF] px-8 py-4 text-sm font-medium transition-transform hover:scale-105 flex justify-center items-center gap-3">
                Start a Conversation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/projects" className="text-[#222222] text-sm font-medium border-b border-[#222222] pb-1 hover:text-[#7B7B7B] hover:border-[#7B7B7B] transition-colors">
                See Portfolio
              </a>
            </div>
          </div>
        </motion.div>

      </section>

      {/* Footer */}
      <footer className="text-center pb-8 pt-12 border-t border-[#222222]/10 mx-6 md:mx-12">
        <p className="text-[10px] text-[#7B7B7B] uppercase tracking-widest">
            © {new Date().getFullYear()} Hiren Masaliya — Jetpur, Gujarat
        </p>
      </footer>
    </main>
  );
}