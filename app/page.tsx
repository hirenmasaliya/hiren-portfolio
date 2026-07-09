"use client";

import { motion } from 'framer-motion';
import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
  };

  return (
    <main className="bg-[#F8F8F8] text-[#222222] min-h-screen font-sans overflow-x-hidden selection:bg-[#222222] selection:text-white">

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 md:pt-24 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto overflow-hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVars}
          className="grid md:grid-cols-12 gap-8 items-center"
        >
          {/* Left Side Content */}
          <div className="md:col-span-7 flex flex-col relative z-10">
            {/* Sideways Text - Hidden on mobile for cleaner layout */}
            <div className="hidden lg:block absolute -left-18 top-1/2 -translate-y-1/2 -rotate-90 text-[#7B7B7B] text-xs tracking-widest uppercase origin-center">
              Freelance App Developer
            </div>

            <motion.div variants={itemVars} className="flex gap-12 mb-12 pl-0 lg:pl-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-light text-[#222222] tracking-tight">+5</h3>
                <p className="text-[#7B7B7B] text-xs uppercase tracking-wider mt-2">Projects completed</p>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-light text-[#222222] tracking-tight">100%</h3>
                <p className="text-[#7B7B7B] text-xs uppercase tracking-wider mt-2">Client Satisfaction</p>
              </div>
            </motion.div>

            <motion.h1 variants={itemVars} className="text-[20vw] md:text-[14rem] font-light tracking-tighter leading-[0.8] text-[#222222] mb-6 pl-0 lg:pl-8">
              Hello
            </motion.h1>

            <motion.p variants={itemVars} className="text-[#222222] text-xl md:text-2xl font-medium pl-0 lg:pl-8">
              — It's Hiren, a freelance Flutter developer
            </motion.p>

            <motion.div variants={itemVars} className="mt-16 pl-0 lg:pl-8">
              <span className="text-[#7B7B7B] text-sm flex items-center gap-2">
                Scroll down <ArrowRight size={14} className="rotate-90" />
              </span>
            </motion.div>
          </div>

          {/* Right Side Image Placeholder (Replace bg-slate-200 with your actual image) */}
          <motion.div variants={itemVars} className="md:col-span-5 h-[500px] md:h-[700px] bg-[#E5E5E5] rounded-t-full overflow-hidden relative transition-all duration-700">

            {/* Your Portrait Image */}
            <img
              src="/images/hiro.png"
              alt="Hiren Masaliya"
              className="w-full h-full object-cover"
            />

            {/* Subtle Dark Overlay */}
            <div className="absolute inset-0 bg-[#222222]/5 mix-blend-multiply pointer-events-none"></div>

          </motion.div>
        </motion.div>
      </section>

      {/* 2. ABOUT ME & BENTO GRID */}
      <section id="about" className="py-24 px-6 md:px-12 bg-[#FFFFFF]">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-6 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#222222]">About Me</h2>
            <p className="text-[#7B7B7B] text-lg leading-relaxed">
              I am Hiren Masaliya, a specialist in high-performance Flutter mobile applications and scalable Next.js architectures. With a focus on clean code and robust systems, I bridge the gap between aesthetic design and complex backend logic to deliver premium web and mobile solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="bg-[#F8F8F8] p-8 rounded-2xl flex flex-col justify-center">
              <h3 className="text-5xl font-light tracking-tight text-[#222222] mb-2">120%</h3>
              <p className="text-[#7B7B7B] text-sm">Increase in rendering performance for NextGen Architecture.</p>
            </div>
            <div className="bg-[#E5E5E5] rounded-2xl min-h-[200px] relative overflow-hidden grayscale">
              {/* Decorative Image/Box */}
            </div>
            <div className="col-span-2 bg-[#F8F8F8] p-8 rounded-2xl flex items-center gap-6">
              <div className="bg-[#222222] text-[#FFFFFF] p-4 rounded-full">
                <ArrowRight size={24} className="-rotate-45" />
              </div>
              <p className="text-[#222222] font-medium">Delivering end-to-end mobile and web solutions. Focus on UI/UX restructuring and API efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. JOURNEY / EXPERIENCE */}
      <section className="py-24 px-6 md:px-12 bg-[#F8F8F8]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <p className="text-[#7B7B7B] text-sm uppercase tracking-wider mb-4">Experience</p>
              <h2 className="text-4xl md:text-6xl font-light tracking-tight text-[#222222]">Explore My <br /> Tech Journey</h2>
            </div>
            <p className="text-[#7B7B7B] max-w-md">
              A timeline of my professional roles building full-scale business management ecosystems and high-retention applications.
            </p>
          </div>

          <div className="flex flex-col">
            {[
              {
                company: "Aptro",
                location: "Jetpur, India",
                role: "Founder & Lead Developer",
                date: "Oct 2025 - Present",
                tags: ["Flutter", "Firebase"]
              },
              {
                company: "Freelance",
                location: "Remote",
                role: "App Developer",
                date: "Jan 2026 - Present",
                tags: ["Next.js", "Mobile"]
              },
              {
                company: "Wallzer",
                location: "Jetpur, India",
                role: "Founder",
                date: "May 2025 - Jul 2025",
                tags: ["UI/UX", "Production"]
              }
            ].map((job, i) => (
              <div key={i} className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-[#222222]/10 hover:px-6 transition-all duration-500 cursor-pointer">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <h3 className="text-2xl font-medium text-[#222222]">{job.company}</h3>
                  <p className="text-[#7B7B7B] text-sm mt-1">{job.location}</p>
                </div>
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <p className="text-[#222222] font-medium">{job.role}</p>
                  <p className="text-[#7B7B7B] text-sm mt-1">{job.date}</p>
                </div>
                <div className="md:w-1/3 flex md:justify-end gap-3">
                  {job.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 border border-[#222222]/20 rounded-full text-xs text-[#7B7B7B] group-hover:border-[#222222] group-hover:text-[#222222] transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROMO BANNER */}
      <section className="px-6 md:px-12 py-12 bg-[#F8F8F8]">
        <div className="max-w-[1600px] mx-auto bg-[#222222] rounded-3xl py-16 px-8 md:py-24 text-center relative overflow-hidden flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#FFFFFF] mb-6 max-w-2xl relative z-10">
            Looking for a scalable tech solution? Get a Free Consultation!
          </h2>
          <button className="bg-[#FFFFFF] text-[#222222] px-8 py-3 rounded-full text-sm font-medium hover:scale-105 transition-transform relative z-10">
            Contact Now
          </button>
        </div>
      </section>

      {/* 5. LATEST WORKS */}
      <section id="portfolio" className="py-24 px-6 md:px-12 bg-[#FFFFFF]">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#7B7B7B] text-sm uppercase tracking-wider mb-2">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#222222]">Latest Works</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Aptro Ecosystem", desc: "SaaS / Mobile Platform" },
              { title: "Wallzer", desc: "Community Application" },
              { title: "NextGen Dashboard", desc: "Web Architecture" }
            ].map((work, i) => (
              <div key={i} className="group cursor-pointer">
                {/* Project Image Placeholder */}
                <div className="aspect-[4/3] bg-[#F8F8F8] rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center">
                  <div className="w-12 h-12 bg-[#FFFFFF] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                    <ArrowUpRight size={20} className="text-[#222222]" />
                  </div>
                </div>
                <h3 className="text-xl font-medium text-[#222222] mb-2">{work.title}</h3>
                <p className="text-[#7B7B7B] text-sm">{work.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <a href="#" className="text-[#222222] font-medium flex items-center gap-2 border-b border-[#222222] pb-1 hover:text-[#7B7B7B] hover:border-[#7B7B7B] transition-colors">
              View All Works <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer id="contact" className="bg-[#222222] pt-24 pb-12 px-6 md:px-12 text-center rounded-t-3xl md:rounded-t-[4rem]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#FFFFFF] mb-6">
            Got a Vision? Let's Bring it to Life!
          </h2>
          <p className="text-[#7B7B7B] mb-12 max-w-xl mx-auto">
            Whether you need a robust Flutter mobile application or a high-performance Next.js web platform, I'm ready to build it.
          </p>

          <a
            href="mailto:hirenmasliya14@gmail.com"
            className="inline-block text-2xl md:text-4xl font-light text-[#FFFFFF] border-b-2 border-[#FFFFFF]/30 hover:border-[#FFFFFF] pb-2 transition-colors mb-24"
          >
            hirenmasliya14@gmail.com
          </a>
        </div>

        <div className="max-w-[1600px] mx-auto border-t border-[#FFFFFF]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[#7B7B7B] text-sm">
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#FFFFFF] transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-[#FFFFFF] transition-colors">GitHub</a>
            <a href="#" className="hover:text-[#FFFFFF] transition-colors">Twitter</a>
          </div>
          <p>© {new Date().getFullYear()} Hiren Masaliya — Jetpur, Gujarat</p>
        </div>
      </footer>

    </main>
  );
}