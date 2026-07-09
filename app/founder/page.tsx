"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Receipt, 
  Users, 
  Package, 
  PieChart, 
  ShieldCheck, 
  Smartphone,
  ArrowUpRight,
  Download,
  Database,
  Lock,
  Globe,
  Sparkles
} from 'lucide-react';

const customEase = [0.25, 1, 0.5, 1] as const;

export default function AptroPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
  };

  return (
    <main className="bg-[#F8F8F8] text-[#222222] min-h-screen pt-32 pb-16 selection:bg-[#222222] selection:text-[#FFFFFF] font-sans overflow-x-hidden">
      
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">

        {/* 1. HERO SECTION - Minimal Monolith */}
        <div className="mb-24 md:mb-32 border-b border-[#222222]/10 pb-16">
          <motion.div 
            initial="initial" animate="animate" variants={fadeInUp}
            className="flex flex-col items-start"
          >
            <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                    <Smartphone size={14} className="text-[#222222]" />
                    <span className="text-[#7B7B7B] text-xs uppercase tracking-widest font-medium">
                        Mobile-First OS
                    </span>
                </div>
                <span className="flex items-center gap-2 text-[#7B7B7B] text-[10px] uppercase tracking-widest border-l border-[#222222]/20 pl-4 font-medium">
                    <span className="w-1.5 h-1.5 bg-[#222222] rounded-full animate-pulse"></span>
                    Production Live
                </span>
            </div>
            
            <h1 className="text-[14vw] md:text-[10rem] font-light mb-8 tracking-tighter leading-[0.85] text-[#222222]">
              Aptro <br />
              <span className="text-[#7B7B7B] italic">System.</span>
            </h1>
            
            <div className="grid md:grid-cols-12 gap-12 w-full pt-8 border-t border-[#222222]/10">
                <div className="md:col-span-7">
                    <p className="text-lg md:text-xl text-[#7B7B7B] leading-relaxed font-medium">
                        Architected by <span className="text-[#222222]">Hiren Masaliya</span>. 
                        A unified operational workspace engineered to bridge the gap between bloated ERP systems and fragile spreadsheet networks.
                    </p>
                </div>

                <div className="md:col-span-5 flex flex-col gap-8 md:justify-end">
                    <div className="grid grid-cols-2 gap-4 border-l border-[#222222]/10 pl-6">
                        <div>
                            <span className="block text-[10px] uppercase tracking-widest text-[#7B7B7B] mb-2">Architecture</span>
                            <span className="text-xs font-medium text-[#222222] uppercase tracking-wider">Flutter / Firebase</span>
                        </div>
                        <div>
                            <span className="block text-[10px] uppercase tracking-widest text-[#7B7B7B] mb-2">Target Market</span>
                            <span className="text-xs font-medium text-[#222222] uppercase tracking-wider">B2B / SME</span>
                        </div>
                    </div>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro"
                        target="_blank"
                        rel="noreferrer"
                        className="group w-full md:w-auto bg-[#222222] text-[#FFFFFF] px-8 py-4 text-sm font-medium transition-all duration-300 hover:bg-transparent hover:text-[#222222] border border-[#222222] flex items-center justify-between max-w-sm"
                    >
                        <span className="flex items-center gap-3">
                            <Download size={16} /> Download Platform
                        </span>
                        <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-300" />
                    </a>
                </div>
            </div>
          </motion.div>
        </div>

        {/* 2. THE MANIFESTO (Vision/Mission) - Stark Black Container */}
        <div className="mb-32 md:mb-48 bg-[#222222] text-[#FFFFFF] p-10 md:p-24 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
                <div>
                    <span className="text-[#7B7B7B] text-[10px] uppercase tracking-widest mb-8 block">Core Directive</span>
                    <p className="text-3xl md:text-5xl font-light leading-[1.1] tracking-tight text-[#FFFFFF]">
                        "To render business management <span className="italic text-[#7B7B7B]">invisible</span>, engineering an environment where founders focus purely on the art of scale."
                    </p>
                </div>
                <div>
                    <span className="text-[#7B7B7B] text-[10px] uppercase tracking-widest mb-8 block">Operational Mission</span>
                    <p className="text-base md:text-lg text-[#F8F8F8]/70 leading-relaxed font-medium">
                        Modern enterprises operate on fragmented data. Aptro consolidates operations, automates billing cycles, and transforms raw input into strict, actionable financial telemetry. We provide a highly available, scalable infrastructure that refuses to compromise on speed or data integrity.
                    </p>
                </div>
            </div>
        </div>

        {/* 3. SYSTEM MODULES (Features Grid) */}
        <div className="mb-32 md:mb-48">
            <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8 border-b border-[#222222]/10 pb-16">
                <h2 className="text-4xl md:text-6xl font-light tracking-tight text-[#222222] leading-[1.1]">
                    Engineered <br/> <span className="text-[#7B7B7B] italic">Modules.</span>
                </h2>
                <div className="md:text-right">
                    <p className="text-[#7B7B7B] text-sm font-medium max-w-sm leading-relaxed mb-6">
                        Aptro is constructed as a monolithic ecosystem containing 6 distinct, highly-optimized operational nodes.
                    </p>
                    <span className="text-[#222222] text-[10px] font-medium uppercase tracking-widest border border-[#222222]/10 rounded-full px-4 py-2">System Capacity: 06</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {features.map((f, i) => (
                    <div key={i} className="group p-10 md:p-12 bg-[#FFFFFF] border border-[#222222]/5 hover:border-[#222222]/20 transition-all duration-500 flex flex-col">
                        <div className="flex justify-between items-start mb-12">
                            <span className="text-[10px] uppercase tracking-widest text-[#7B7B7B]">Node 0{i + 1}</span>
                            <div className="w-12 h-12 rounded-full bg-[#F8F8F8] text-[#222222] flex items-center justify-center group-hover:bg-[#222222] group-hover:text-[#FFFFFF] transition-colors duration-500">
                                {f.icon}
                            </div>
                        </div>
                        <h3 className="text-2xl font-medium mb-4 tracking-tight text-[#222222]">{f.title}</h3>
                        <p className="text-[#7B7B7B] text-sm leading-relaxed mt-auto">{f.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* 4. TECHNICAL ARCHITECTURE - Minimal Line Box */}
        <div className="mb-32 md:mb-48 border border-[#222222]/10 bg-[#FFFFFF] p-10 md:p-24 relative overflow-hidden">
            <div className="mb-16 border-b border-[#222222]/10 pb-12 relative z-10">
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#222222]">System <br/> <span className="italic text-[#7B7B7B]">Architecture.</span></h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-12 relative z-10">
                {[
                    { icon: <Smartphone size={20}/>, title: "Client Layer", stack: "Flutter / Dart", desc: "Compiled natively to ARM machine code for 60fps rendering." },
                    { icon: <Database size={20}/>, title: "Data Layer", stack: "Firebase NoSQL", desc: "Real-time document syncing with offline-first persistence logic." },
                    { icon: <Lock size={20}/>, title: "Auth & Rules", stack: "Identity Platform", desc: "Granular security rules ensuring tenant data isolation." },
                    { icon: <Globe size={20}/>, title: "Edge Logic", stack: "Cloud Functions", desc: "Serverless execution for heavy financial computations and webhooks." },
                ].map((tech, i) => (
                    <div key={i} className="flex flex-col group">
                        <div className="w-12 h-12 rounded-full border border-[#222222]/10 bg-[#F8F8F8] text-[#222222] flex items-center justify-center mb-8 group-hover:bg-[#222222] group-hover:text-[#FFFFFF] transition-colors duration-300">
                            {tech.icon}
                        </div>
                        <h4 className="text-xl font-medium tracking-tight mb-2 text-[#222222]">{tech.title}</h4>
                        <span className="text-[10px] text-[#222222] uppercase tracking-widest mb-4 border border-[#222222]/10 px-3 py-1 w-max rounded-full">{tech.stack}</span>
                        <p className="text-[#7B7B7B] text-sm leading-relaxed">{tech.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* 5. PRODUCT PHILOSOPHY & WIREFRAME */}
        <div className="mb-32 md:mb-48">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                <div className="lg:w-1/2">
                    <span className="text-[#7B7B7B] text-[10px] uppercase tracking-widest mb-8 block border-b border-[#222222]/10 pb-4">Value Proposition</span>
                    <h2 className="text-4xl md:text-6xl font-light mb-16 tracking-tight leading-[1.1] text-[#222222]">
                        The Aptro <br /> <span className="text-[#7B7B7B] italic">Advantage.</span>
                    </h2>
                    
                    <div className="space-y-12">
                        {benefits.map((b, i) => (
                            <div key={i} className="flex gap-6 group">
                                <div className="mt-2 flex-shrink-0">
                                    <div className="w-2 h-2 bg-[#222222] rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                                </div>
                                <div>
                                    <h4 className="font-medium text-xl md:text-2xl text-[#222222] mb-3 tracking-tight">{b.title}</h4>
                                    <p className="text-[#7B7B7B] text-sm md:text-base leading-relaxed">{b.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* GREYSCALE WIREFRAME CONTAINER */}
                <div className="lg:w-1/2 w-full aspect-[4/5] bg-[#E5E5E5] flex flex-col items-center justify-center relative p-12 overflow-hidden grayscale">
                    <div className="absolute top-6 left-6 flex gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#222222]/20"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#222222]/20"></div>
                    </div>
                    <div className="absolute bottom-6 right-6 text-[10px] uppercase tracking-widest text-[#7B7B7B]">
                        UI Build_v1.0.4
                    </div>

                    <div className="relative z-10 text-center w-full max-w-xs">
                        <div className="w-full aspect-[9/19] bg-[#F8F8F8] border border-[#222222]/10 rounded-[2rem] mx-auto mb-8 relative flex flex-col overflow-hidden p-2 shadow-sm">
                            {/* Fake App Header */}
                            <div className="h-14 border-b border-[#222222]/5 flex items-center px-4 justify-between bg-[#FFFFFF] rounded-t-3xl">
                                <div className="w-16 h-2 bg-[#222222]/10 rounded-full"></div>
                                <div className="w-7 h-7 rounded-full bg-[#222222]/5 border border-[#222222]/10 flex items-center justify-center">
                                    <div className="w-3 h-3 bg-[#222222] rounded-full"></div>
                                </div>
                            </div>
                            {/* Fake App Body */}
                            <div className="flex-1 p-4 flex flex-col gap-4 bg-[#F8F8F8]">
                                <div className="h-24 bg-[#FFFFFF] border border-[#222222]/5 rounded-2xl"></div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="h-24 bg-[#222222] rounded-2xl"></div>
                                    <div className="h-24 bg-[#FFFFFF] border border-[#222222]/5 rounded-2xl"></div>
                                </div>
                                <div className="h-12 bg-[#222222]/80 rounded-xl w-full mt-auto"></div>
                            </div>
                        </div>
                        <p className="text-[#222222] uppercase font-medium tracking-widest text-[10px] flex items-center justify-center gap-2">
                            <Sparkles size={12} className="text-[#222222]" /> Aptro Dashboard
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* 6. FINAL CALL TO ACTION - Clean Typography Card */}
        <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: customEase }}
            className="mb-20 bg-[#FFFFFF] border border-[#222222]/10 p-12 md:p-24 flex flex-col md:flex-row justify-between items-center gap-12 relative overflow-hidden"
        >
            <div className="max-w-2xl text-center md:text-left relative z-10">
                <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-tight leading-[1.1] text-[#222222]">
                    Deploy <br/> <span className="text-[#7B7B7B] italic">Aptro Today.</span>
                </h2>
                <p className="text-[#7B7B7B] text-sm md:text-base leading-relaxed">
                    Join the next iteration of founders running their infrastructure on highly-optimized, secure architecture.
                </p>
            </div>
            <a
                href="https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro"
                target="_blank"
                rel="noreferrer"
                className="group w-full md:w-auto bg-[#222222] text-[#FFFFFF] border border-[#222222] px-10 py-5 text-sm font-medium transition-all duration-300 hover:bg-transparent hover:text-[#222222] flex items-center justify-center gap-4 shrink-0 relative z-10"
            >
                Install on Android <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-300" />
            </a>
        </motion.div>

      </section>

      <footer className="text-center pb-12 border-t border-[#222222]/10 pt-12 mx-6 md:mx-12">
        <p className="text-[10px] text-[#7B7B7B] uppercase tracking-widest">
            Aptro by Hiren Masaliya — Engineered in Jetpur, Gujarat
        </p>
      </footer>
    </main>
  );
}

const features = [
  {
    icon: <LayoutDashboard strokeWidth={1.5} size={20} />,
    title: "Unified Hub",
    desc: "A centralized command architecture for parsing projects, orders, and macro cash flow in a single query."
  },
  {
    icon: <Receipt strokeWidth={1.5} size={20} />,
    title: "Smart Billing",
    desc: "Generate strict, compliant invoices, track partial payment states, and automate collection protocols."
  },
  {
    icon: <Package strokeWidth={1.5} size={20} />,
    title: "Stock Control",
    desc: "Real-time ledger synchronization with predictive low-stock algorithms and automated deductions."
  },
  {
    icon: <Users strokeWidth={1.5} size={20} />,
    title: "Granular Access",
    desc: "Strict Role-Based Access Control (RBAC) ensuring tenant and employee data remains perfectly isolated."
  },
  {
    icon: <PieChart strokeWidth={1.5} size={20} />,
    title: "Data Telemetry",
    desc: "Deep visual rendering of profitability matrices, operational bottlenecks, and financial velocity."
  },
  {
    icon: <ShieldCheck strokeWidth={1.5} size={20} />,
    title: "Infrastructure",
    desc: "Enterprise-grade AES-256 encryption logic and automated CRON backups for catastrophic recovery."
  }
];

const benefits = [
  {
    title: "Total Centralization",
    desc: "Refactor your operational stack. Aptro deprecates fragmented third-party apps into one cohesive, strongly-typed business environment."
  },
  {
    title: "Elastic Scaling",
    desc: "Engineered on cloud-native architecture that supports operational load from solo-freelancing up to high-volume retail transactions."
  },
  {
    title: "Offline-First Sync",
    desc: "Operational continuity regardless of network state. The system caches writes locally and intelligently resolves conflicts upon reconnection."
  }
];