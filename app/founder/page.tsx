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
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
  };

  return (
    <main className="bg-slate-50 text-slate-900 min-h-screen pt-40 pb-20 selection:bg-blue-200 selection:text-blue-900 font-sans overflow-hidden">
      
      {/* Soft Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <section className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* 1. HERO SECTION - Premium Monolith */}
        <div className="mb-24 md:mb-32 border-b border-slate-200 pb-16">
          <motion.div 
            initial="initial" animate="animate" variants={fadeInUp}
            className="flex flex-col items-start"
          >
            <div className="flex items-center gap-3 px-4 py-2 bg-white border border-blue-100 rounded-full shadow-sm w-max mb-8">
                <Smartphone size={14} className="text-blue-500" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700">
                    Mobile-First OS
                </span>
                <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 border-l border-slate-200 pl-3">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                    Production Live
                </span>
            </div>
            
            <h1 className="text-[14vw] md:text-[9.5rem] font-black mb-8 tracking-tighter leading-[0.85] text-slate-950 uppercase">
              Aptro <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">System.</span>
            </h1>
            
            <div className="grid md:grid-cols-12 gap-12 w-full pt-8 border-t border-slate-200">
                <div className="md:col-span-7">
                    <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium">
                        Architected by <span className="text-slate-950 font-bold">Hiren Masaliya</span>. 
                        A unified operational workspace engineered to bridge the gap between bloated ERP systems and fragile spreadsheet networks.
                    </p>
                </div>

                <div className="md:col-span-5 flex flex-col gap-6 md:justify-end">
                    <div className="grid grid-cols-2 gap-4 border-l-2 border-slate-200 pl-6 mb-4">
                        <div>
                            <span className="block text-[8px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-1">Architecture</span>
                            <span className="text-xs font-bold text-slate-950 uppercase tracking-[0.1em]">Flutter / Firebase</span>
                        </div>
                        <div>
                            <span className="block text-[8px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-1">Target Market</span>
                            <span className="text-xs font-bold text-slate-950 uppercase tracking-[0.1em]">B2B / SME</span>
                        </div>
                    </div>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro"
                        target="_blank"
                        rel="noreferrer"
                        className="group relative overflow-hidden bg-slate-950 text-white px-8 py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_8px_30px_rgb(37,99,235,0.3)] flex items-center justify-between max-w-sm"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            <Download size={14} /> Download Platform
                        </span>
                        <ArrowUpRight size={14} className="relative z-10 group-hover:rotate-45 transition-transform duration-300" />
                    </a>
                </div>
            </div>
          </motion.div>
        </div>

        {/* 2. THE MANIFESTO (Vision/Mission) */}
        <div className="mb-32 md:mb-48 bg-slate-950 text-white p-10 md:p-24 rounded-[4rem] relative overflow-hidden shadow-2xl">
            {/* Subtle Inner Glow */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none" />

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
                <div>
                    <span className="text-blue-400 text-[9px] font-bold uppercase tracking-[0.2em] mb-6 block bg-blue-950/50 w-max px-4 py-2 rounded-full border border-blue-800/50">Core Directive</span>
                    <p className="text-2xl md:text-4xl font-black leading-[1.1] tracking-tighter uppercase text-slate-300">
                        "To render business management <span className="text-white">invisible</span>, engineering an environment where founders focus purely on the art of scale."
                    </p>
                </div>
                <div>
                    <span className="text-blue-400 text-[9px] font-bold uppercase tracking-[0.2em] mb-6 block bg-blue-950/50 w-max px-4 py-2 rounded-full border border-blue-800/50">Operational Mission</span>
                    <p className="text-base md:text-lg text-slate-400 leading-relaxed font-medium">
                        Modern enterprises operate on fragmented data. Aptro consolidates operations, automates billing cycles, and transforms raw input into strict, actionable financial telemetry. We provide a highly available, scalable infrastructure that refuses to compromise on speed or data integrity.
                    </p>
                </div>
            </div>
        </div>

        {/* 3. SYSTEM MODULES (Features Grid) */}
        <div className="mb-32 md:mb-48">
            <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8 border-b border-slate-200 pb-16">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 uppercase leading-[0.9]">
                    Engineered <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Modules.</span>
                </h2>
                <div className="md:text-right">
                    <p className="text-slate-500 text-sm font-medium max-w-sm leading-relaxed mb-4">
                        Aptro is constructed as a monolithic ecosystem containing 6 distinct, highly-optimized operational nodes.
                    </p>
                    <span className="text-blue-700 text-[9px] font-bold uppercase tracking-[0.2em] bg-blue-50 border border-blue-100 rounded-full px-4 py-2">System Capacity: 06</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((f, i) => (
                    <div key={i} className="group p-10 md:p-12 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 transition-all duration-500 flex flex-col">
                        <div className="flex justify-between items-start mb-10">
                            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">Node 0{i + 1}</span>
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                                {f.icon}
                            </div>
                        </div>
                        <h3 className="text-2xl font-black mb-4 tracking-tight uppercase text-slate-950">{f.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed font-medium mt-auto">{f.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* 4. TECHNICAL ARCHITECTURE */}
        <div className="mb-32 md:mb-48 border border-slate-200 bg-white shadow-xl shadow-blue-900/5 rounded-[4rem] p-10 md:p-24 relative overflow-hidden">
            {/* Subtle corner glow */}
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[100px] pointer-events-none" />

            <div className="mb-16 border-b border-slate-100 pb-12 relative z-10">
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-950 uppercase">System <br/> Architecture.</h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-12 relative z-10">
                {[
                    { icon: <Smartphone size={20}/>, title: "Client Layer", stack: "Flutter / Dart", desc: "Compiled natively to ARM machine code for 60fps rendering." },
                    { icon: <Database size={20}/>, title: "Data Layer", stack: "Firebase NoSQL", desc: "Real-time document syncing with offline-first persistence logic." },
                    { icon: <Lock size={20}/>, title: "Auth & Rules", stack: "Identity Platform", desc: "Granular security rules ensuring tenant data isolation." },
                    { icon: <Globe size={20}/>, title: "Edge Logic", stack: "Cloud Functions", desc: "Serverless execution for heavy financial computations and webhooks." },
                ].map((tech, i) => (
                    <div key={i} className="flex flex-col group">
                        <div className="w-12 h-12 rounded-full border border-slate-200 bg-slate-50 text-slate-600 flex items-center justify-center mb-6 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors duration-300">
                            {tech.icon}
                        </div>
                        <h4 className="text-lg font-black uppercase tracking-tight mb-2 text-slate-950">{tech.title}</h4>
                        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">{tech.stack}</span>
                        <p className="text-slate-500 text-xs font-medium leading-relaxed">{tech.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* 5. PRODUCT PHILOSOPHY (The Advantage) */}
        <div className="mb-32 md:mb-48">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                <div className="lg:w-1/2">
                    <span className="text-blue-600 text-[9px] font-bold uppercase tracking-[0.2em] mb-6 block border-b border-slate-200 pb-4">Value Proposition</span>
                    <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter uppercase leading-[0.9] text-slate-950">The Aptro <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Advantage.</span></h2>
                    
                    <div className="space-y-12">
                        {benefits.map((b, i) => (
                            <div key={i} className="flex gap-6 group">
                                <div className="mt-1 flex-shrink-0">
                                    <div className="w-3 h-3 bg-blue-100 border border-blue-500 rounded-full group-hover:bg-blue-600 transition-colors duration-300 shadow-[0_0_8px_rgba(59,130,246,0.3)]"></div>
                                </div>
                                <div>
                                    <h4 className="font-black text-xl md:text-2xl text-slate-950 mb-3 uppercase tracking-tight">{b.title}</h4>
                                    <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">{b.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* PREMIUM WIREFRAME CONTAINER */}
                <div className="lg:w-1/2 w-full aspect-[4/5] bg-white border border-slate-200 rounded-[3rem] shadow-xl shadow-blue-900/5 flex flex-col items-center justify-center relative p-12 overflow-hidden">
                    <div className="absolute top-6 left-6 flex gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                    </div>
                    <div className="absolute bottom-6 right-6 text-[8px] font-bold uppercase tracking-[0.3em] text-slate-300">
                        UI Build_v1.0.4
                    </div>

                    <div className="relative z-10 text-center w-full max-w-xs">
                        <div className="w-full aspect-[9/19] bg-slate-50 border border-slate-200 shadow-[0_20px_60px_-15px_rgba(37,99,235,0.15)] rounded-[2rem] mx-auto mb-8 relative flex flex-col overflow-hidden p-2">
                            {/* Fake App Header */}
                            <div className="h-14 border-b border-slate-200 flex items-center px-4 justify-between bg-white rounded-t-3xl">
                                <div className="w-16 h-2 bg-slate-200 rounded-full"></div>
                                <div className="w-7 h-7 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                </div>
                            </div>
                            {/* Fake App Body */}
                            <div className="flex-1 p-4 flex flex-col gap-4 bg-slate-50">
                                <div className="h-24 bg-white border border-slate-200 rounded-2xl shadow-sm"></div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="h-24 bg-blue-600 rounded-2xl shadow-md shadow-blue-600/20"></div>
                                    <div className="h-24 bg-white border border-slate-200 rounded-2xl shadow-sm"></div>
                                </div>
                                <div className="h-12 bg-slate-900 rounded-xl w-full mt-auto"></div>
                            </div>
                        </div>
                        <p className="text-slate-950 uppercase font-black tracking-[0.2em] text-[10px] flex items-center justify-center gap-2">
                            <Sparkles size={12} className="text-blue-600" /> Aptro Dashboard
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* 6. FINAL CALL TO ACTION - Elevated Floating Card */}
        <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: customEase }}
            className="mb-20 bg-white border border-slate-200 shadow-2xl shadow-blue-900/10 rounded-[4rem] p-12 md:p-24 flex flex-col md:flex-row justify-between items-center gap-12 relative overflow-hidden"
        >
            {/* Subtle blue accent */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] pointer-events-none" />

            <div className="max-w-2xl text-center md:text-left relative z-10">
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase leading-[0.9] text-slate-950">
                    Deploy <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Aptro Today.</span>
                </h2>
                <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
                    Join the next iteration of founders running their infrastructure on highly-optimized, secure architecture.
                </p>
            </div>
            <a
                href="https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro"
                target="_blank"
                rel="noreferrer"
                className="group w-full md:w-auto bg-slate-950 text-white rounded-full px-10 py-6 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_8px_30px_rgb(37,99,235,0.3)] flex items-center justify-center gap-4 shrink-0 relative z-10"
            >
                Install on Android <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
            </a>
        </motion.div>

      </section>

      <footer className="text-center pb-12 border-t border-slate-200 pt-10 mx-6 md:mx-12">
        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em]">
            Aptro by Hiren Masaliya — Engineered in Jetpur, Gujarat
        </p>
      </footer>
    </main>
  );
}

const features = [
  {
    icon: <LayoutDashboard strokeWidth={1.5} size={24} />,
    title: "Unified Hub",
    desc: "A centralized command architecture for parsing projects, orders, and macro cash flow in a single query."
  },
  {
    icon: <Receipt strokeWidth={1.5} size={24} />,
    title: "Smart Billing",
    desc: "Generate strict, compliant invoices, track partial payment states, and automate collection protocols."
  },
  {
    icon: <Package strokeWidth={1.5} size={24} />,
    title: "Stock Control",
    desc: "Real-time ledger synchronization with predictive low-stock algorithms and automated deductions."
  },
  {
    icon: <Users strokeWidth={1.5} size={24} />,
    title: "Granular Access",
    desc: "Strict Role-Based Access Control (RBAC) ensuring tenant and employee data remains perfectly isolated."
  },
  {
    icon: <PieChart strokeWidth={1.5} size={24} />,
    title: "Data Telemetry",
    desc: "Deep visual rendering of profitability matrices, operational bottlenecks, and financial velocity."
  },
  {
    icon: <ShieldCheck strokeWidth={1.5} size={24} />,
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