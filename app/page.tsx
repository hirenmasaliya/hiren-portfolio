"use client";

import { motion } from 'framer-motion';
import React from 'react';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Code2, 
  Smartphone, 
  Database, 
  Palette,
  Sparkles,
  CheckCircle2,
  Briefcase
} from 'lucide-react';

const customEase = [0.25, 1, 0.5, 1] as const;

export default function Home() {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
  };

  const scrollRevealVars = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
  };

  return (
    <main className="bg-[#FAFAFA] text-[#111111] min-h-screen font-sans overflow-x-hidden selection:bg-[#111111] selection:text-white">

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 md:pt-24 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto overflow-hidden min-h-[95vh] flex items-center">
        {/* Soft Background Glow */}
        <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-gray-200/40 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVars}
          className="grid md:grid-cols-12 gap-12 lg:gap-8 items-center w-full"
        >
          {/* Left Side Content */}
          <div className="md:col-span-7 flex flex-col relative z-10">
            
            {/* Availability Badge */}
            <motion.div variants={itemVars} className="mb-8 inline-flex">
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-default">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-700">Available for new projects</span>
              </div>
            </motion.div>

            <motion.h1 variants={itemVars} className="text-5xl md:text-7xl lg:text-[5.5rem] font-light tracking-tight leading-[1.1] text-[#111111] mb-6">
              Building <span className="font-medium">Great Apps</span> <br className="hidden lg:block" />
              & Websites.
            </motion.h1>

            <motion.p variants={itemVars} className="text-gray-600 text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-10">
              Hi, I'm <strong className="font-medium text-[#111111]">Hiren Masaliya</strong>. I build fast, reliable, and easy-to-use digital products using Next.js and Flutter to help your business grow.
            </motion.p>

            <motion.div variants={itemVars} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <a href="#contact" className="group flex items-center justify-center gap-3 bg-[#111111] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-800 hover:shadow-xl hover:shadow-black/10 transition-all duration-300">
                Start a Project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#portfolio" className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-medium border border-gray-300 hover:border-[#111111] hover:bg-white transition-all duration-300">
                View My Work
              </a>
            </motion.div>
          </div>

          {/* Right Side Image & Floating Stats */}
          <motion.div variants={itemVars} className="md:col-span-5 relative h-[450px] md:h-[700px] w-full mt-10 md:mt-0">
            <div className="w-full h-full bg-[#E5E5E5] rounded-[2rem] md:rounded-[4rem] overflow-hidden relative group shadow-2xl shadow-black/5">
              <img
                src="/images/hero.png" /* Replace with your actual image path */
                alt="Hiren Masaliya - Developer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
            </div>

            {/* Floating Card 1 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -right-2 md:-right-8 top-12 md:top-24 bg-white/90 backdrop-blur-md border border-white p-5 rounded-2xl shadow-xl shadow-black/5 max-w-[180px]"
            >
              <div className="flex items-center gap-3 mb-1">
                <CheckCircle2 size={24} className="text-green-500" />
                <h4 className="text-2xl font-bold tracking-tight">100%</h4>
              </div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-1">Happy Clients</p>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -left-2 md:-left-12 bottom-12 md:bottom-24 bg-[#111111]/95 backdrop-blur-md border border-gray-800 p-5 rounded-2xl shadow-xl shadow-black/10 max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-1">
                <Briefcase size={22} className="text-white" />
                <h4 className="text-2xl font-bold tracking-tight text-white">5+</h4>
              </div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mt-1">Projects Done</p>
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
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#111111]">About Me</h2>
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              I specialize in creating smooth mobile applications with <strong className="font-medium text-[#111111]">Flutter</strong> and fast websites with <strong className="font-medium text-[#111111]">Next.js</strong>. 
              <br/><br/>
              My goal is simple: to write clean code and build user-friendly designs that solve real problems. I handle everything from the way an app looks to how it works behind the scenes.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {/* Stats Box */}
            <motion.div variants={scrollRevealVars} className="bg-[#FAFAFA] border border-gray-100 p-8 md:p-10 rounded-3xl flex flex-col justify-center hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300">
              <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#111111] mb-3">Fast</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">I build apps optimized for speed and a great user experience.</p>
            </motion.div>
            
            {/* Tech Stack Box */}
            <motion.div variants={scrollRevealVars} className="bg-[#111111] text-white rounded-3xl p-8 flex flex-col justify-center hover:shadow-lg transition-all duration-300">
              <p className="text-white/60 font-medium mb-6 text-sm uppercase tracking-wider">My Tools</p>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex items-center gap-3"><Smartphone size={20} className="text-white/90" /> <span className="text-sm font-medium">Flutter</span></div>
                <div className="flex items-center gap-3"><Code2 size={20} className="text-white/90" /> <span className="text-sm font-medium">Next.js</span></div>
                <div className="flex items-center gap-3"><Database size={20} className="text-white/90" /> <span className="text-sm font-medium">Firebase</span></div>
                <div className="flex items-center gap-3"><Palette size={20} className="text-white/90" /> <span className="text-sm font-medium">UI / UX</span></div>
              </div>
            </motion.div>

            {/* Wide Information Box */}
            <motion.div variants={scrollRevealVars} className="col-span-2 bg-[#FAFAFA] border border-gray-100 p-8 md:p-10 rounded-3xl flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 group">
              <div className="bg-white border border-gray-200 text-[#111111] p-5 rounded-full group-hover:rotate-12 transition-transform duration-500 shadow-sm flex-shrink-0">
                <Sparkles size={28} />
              </div>
              <p className="text-[#111111] text-lg font-light leading-relaxed">
                I deliver complete solutions from start to finish, ensuring your product is both <strong className="font-medium">beautiful to look at</strong> and <strong className="font-medium">powerful to use</strong>.
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
              <p className="text-gray-500 text-sm uppercase tracking-widest font-semibold mb-4">Experience</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#111111]">Work History</h2>
            </div>
            <p className="text-gray-600 max-w-md text-lg font-light leading-relaxed">
              A quick look at my recent work and the roles I've played in building successful digital platforms.
            </p>
          </div>

          <div className="flex flex-col">
            {[
              { company: "Aptro", location: "Jetpur, India", role: "Founder & Lead Developer", date: "Oct 2025 - Present", tags: ["Flutter", "Firebase"] },
              { company: "Freelance", location: "Remote", role: "App Developer", date: "Jan 2026 - Present", tags: ["Next.js", "Mobile"] },
              { company: "Wallzer", location: "Jetpur, India", role: "Founder", date: "May 2025 - Jul 2025", tags: ["UI Design", "App Build"] }
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
          {/* Subtle Glow inside the dark box */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50 pointer-events-none"></div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-8 max-w-3xl relative z-10 leading-tight">
            Have an idea? <br /> Let's build it together.
          </h2>
          <a href="#contact" className="group bg-white text-[#111111] px-8 py-4 rounded-full text-sm font-semibold hover:scale-105 transition-all duration-300 relative z-10 flex items-center gap-3 shadow-lg">
            Get a Free Consultation 
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
              <p className="text-gray-500 text-sm uppercase tracking-widest font-semibold mb-4">Portfolio</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#111111]">Selected Works</h2>
            </div>
            <a href="/projects" className="hidden md:flex group text-[#111111] text-base font-medium items-center gap-2 border-b border-[#111111] pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors">
              Explore All <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { 
                title: "Aptro", 
                desc: "Business Management Platform",
                image: "/images/projects/aptro.png",
                link: "https://aptro.vercel.app/"
              },
              { 
                title: "Clothiva Elite", 
                desc: "Premium E-Commerce Web App",
                image: "/images/projects/clothiva-thumbnail.png",
                link: "https://clothivaelite.vercel.app/"
              },
              { 
                title: "Buildart Industries", 
                desc: "Corporate Service Platform",
                image: "/images/projects/buildart-website.png",
                link: "https://buildartind.com"
              }
            ].map((work, i) => (
              <motion.div variants={scrollRevealVars} key={i} className="group cursor-pointer">
                {/* Project Image Frame */}
                <a href={work.link} target="_blank" rel="noreferrer" className="block aspect-[3/2] bg-gray-100 border border-gray-100 rounded-3xl mb-5 relative overflow-hidden flex items-center justify-center transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50">
                  
                  {/* Actual Project Image */}
                  <img 
                    src={work.image} 
                    alt={work.title} 
                    className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                  
                  {/* Floating Icon */}
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
      <footer id="contact" className="bg-[#111111] pt-28 pb-10 px-6 md:px-12 text-center rounded-t-[2.5rem] md:rounded-t-[4rem]">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6">
            Ready to start?
          </h2>
          <p className="text-gray-400 text-lg font-light mb-16 max-w-xl mx-auto">
            Send me an email if you need a reliable developer for your next web or mobile project.
          </p>

          <a
            href="mailto:hirenmasliya14@gmail.com"
            className="inline-block text-3xl md:text-5xl font-light text-white hover:text-gray-300 transition-colors mb-28 relative group break-all md:break-normal px-4"
          >
            hirenmasliya14@gmail.com
            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-white/20 group-hover:bg-white transition-colors duration-300 hidden md:block"></span>
          </a>
        </div>

        <div className="max-w-[1600px] mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm font-medium">
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
          <p>© {new Date().getFullYear()} Hiren Masaliya — Jetpur, Gujarat</p>
        </div>
      </footer>

    </main>
  );
}