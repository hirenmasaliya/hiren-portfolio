"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, Smartphone, ArrowUpRight, ArrowRight, ShieldCheck, HeartHandshake, CheckCircle2, Rocket } from "lucide-react";

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
    <main className="bg-[#FAFAFA] text-gray-900 min-h-screen pt-32 pb-16 selection:bg-blue-600 selection:text-white font-sans overflow-x-hidden">
      
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
            <div className="mb-8 inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              <span className="text-gray-600 text-xs uppercase tracking-widest font-semibold">
                Software Developer & Founder
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
              Building great apps, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 font-light italic">
                made simple.
              </span>
            </h1>

            <div className="grid md:grid-cols-12 gap-8 border-t border-gray-200 pt-8 mt-8">
              <div className="md:col-span-8">
                {/* Jargon-free introduction */}
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-normal">
                  Hi, I’m <strong className="font-semibold text-gray-900">Hiren Masaliya</strong>, a software developer based in Jetpur, India. 
                  I help businesses grow by building mobile apps and websites that are fast, secure, and incredibly easy for anyone to use. No confusing tech talk—just real results.
                </p>
              </div>

              <div className="md:col-span-4 flex flex-col justify-end items-start md:items-end">
                <a href="/contact" className="group text-sm font-semibold border-b-2 border-gray-900 text-gray-900 pb-1 flex items-center justify-between hover:text-blue-600 hover:border-blue-600 transition-all w-max gap-3">
                  Let's Connect
                  <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Image Section - Friendly & Premium */}
          <motion.div variants={fadeInUp} className="relative w-full lg:w-[450px] shrink-0 mt-10 lg:mt-0">
            <motion.div 
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative aspect-[3/4] bg-gray-200 overflow-hidden rounded-[2.5rem] md:rounded-[3rem] shadow-2xl shadow-gray-200"
            >
               <Image
                src="/images/hiro.png" /* Verify your image name is correct */
                alt="Hiren Masaliya - App Developer"
                fill
                priority
                className="object-cover object-center scale-100 hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Floating Metric Card - Easier to read */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: customEase }}
              className="absolute bottom-10 -left-4 md:-left-12 bg-white/95 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col gap-1"
            >
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle2 size={24} className="text-green-600" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">6+</p>
              </div>
              <p className="text-gray-500 text-[11px] md:text-xs uppercase tracking-widest mt-2 font-bold pl-1">Live Projects</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* 2. WHAT I DO - Plain English Services */}
        <div className="mb-32 md:mb-40 border-t border-gray-200 pt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">How I Can Help You</h2>
            <p className="text-gray-500 text-xs uppercase tracking-widest font-bold md:pb-2">My Services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Mobile Apps (iOS & Android)",
                icon: <Smartphone className="w-7 h-7" />,
                desc: "I build smooth, fast mobile apps that work perfectly on both iPhones and Androids. I handle everything from the first design to getting your app live on the App Store."
              },
              {
                title: "Websites & Online Stores",
                icon: <Globe className="w-7 h-7" />,
                desc: "Need a beautiful website or a store to sell your products online? I create fast-loading, modern websites that look great on phones and computers alike."
              },
              {
                title: "Secure Payments & Data",
                icon: <ShieldCheck className="w-7 h-7" />,
                desc: "I set up secure databases to keep your customer information safe, and integrate payment systems like Razorpay so you can get paid easily and securely."
              },
            ].map((skill, i) => (
              <div
                key={i}
                className="p-8 md:p-10 bg-white rounded-3xl border border-gray-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 group flex flex-col"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 shadow-sm">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-4 text-gray-900">{skill.title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. THE FOUNDER'S JOURNEY - Relatable & Trust-building */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: customEase }}
          className="mb-32 md:mb-40 bg-slate-900 rounded-[2rem] md:rounded-[3rem] text-white relative overflow-hidden p-10 md:p-20 shadow-2xl"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-start justify-between">
            <div className="flex-1 max-w-2xl">
              <span className="text-blue-400 text-xs uppercase tracking-widest font-bold mb-8 block">My Approach</span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-light mb-10 leading-[1.3] tracking-tight text-white">
                "Apps should be smart, <br /> 
                <span className="text-gray-400 font-medium">so your users don't have to think hard."</span>
              </h3>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
                <p>
                  As the creator of an app called <strong className="text-white font-semibold">Aptro</strong>, I built a system from scratch to help small business owners easily manage their inventory, staff, and billing without needing a manual. 
                </p>
                <p>
                  Because I build and run my own products, I understand what business owners care about. When you hire me, I treat your project with that exact same care—making sure it's done right, on time, and ready to make you money.
                </p>
              </div>
            </div>
            
            <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-6 pt-8 lg:pt-0">
              <div className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 flex flex-col justify-center min-w-[240px]">
                <HeartHandshake className="w-8 h-8 text-blue-400 mb-4" />
                <p className="text-2xl font-bold text-white">I Handle Everything</p>
                <p className="text-xs text-gray-400 mt-2 font-medium">From idea to launch</p>
              </div>
              <div className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 flex flex-col justify-center min-w-[240px]">
                <Rocket className="w-8 h-8 text-blue-400 mb-4" />
                <p className="text-2xl font-bold tracking-tight text-white">Built to Grow</p>
                <p className="text-xs text-gray-400 mt-2 font-medium">Fast & Reliable</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4. TECH STACK & TOOLS - Friendly Title */}
        <div className="mb-32 md:mb-40 text-center max-w-4xl mx-auto border-t border-gray-200 pt-20">
            <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-10">The Tools I Use</p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {["Flutter", "Next.js", "React", "PHP", "TypeScript", "Firebase", "Supabase", "Tailwind CSS", "Razorpay", "Generative AI"].map((tech) => (
                    <span key={tech} className="px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-semibold tracking-wide text-gray-700 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md transition-all duration-300 cursor-default">
                        {tech}
                    </span>
                ))}
            </div>
        </div>

        {/* 5. CALL TO ACTION - Softer, Premium look */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="relative text-center py-24 md:py-32 px-6 bg-gradient-to-b from-white to-blue-50/50 rounded-[2.5rem] md:rounded-[3rem] shadow-xl shadow-gray-200/40 border border-gray-100 overflow-hidden"
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-10 tracking-tight leading-[1.1]">
              Ready to bring your <br/> <span className="text-blue-600">idea to life?</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-8 items-center">
              <a href="/contact" className="group bg-blue-600 text-white px-10 py-4 rounded-full text-base font-bold transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 flex justify-center items-center gap-3 active:scale-95">
                Send Me a Message
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/projects" className="text-gray-700 text-base font-semibold border-b-2 border-gray-300 pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors">
                View My Past Work
              </a>
            </div>
          </div>
        </motion.div>

      </section>

      {/* Footer */}
      <footer className="text-center pb-8 pt-16 border-t border-gray-200 mt-20 mx-6 md:mx-12">
        <p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} Hiren Masaliya — Jetpur, Gujarat
        </p>
      </footer>
    </main>
  );
}