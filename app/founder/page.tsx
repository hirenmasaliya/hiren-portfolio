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
  CheckCircle2,
  ArrowRight,
  Download
} from 'lucide-react';

export default function AptroPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <main className="bg-white text-zinc-900 min-h-screen pt-32 pb-20 selection:bg-blue-100 selection:text-blue-700">
      
      {/* 1. HERO SECTION */}
      <section className="relative px-6 pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-50/50 blur-[120px] -z-10" />
        
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            initial="initial" animate="animate" variants={fadeInUp}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-8 border border-zinc-200"
          >
            <Smartphone size={12} /> Mobile-First Business OS
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.85] text-zinc-950"
          >
            Aptro <br /><span className="text-blue-600 italic">Platform.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-500 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Architected by <span className="text-zinc-950">Hiren Masaliya</span>. 
            A unified workspace designed to bridge the gap between complex ERPs and fragile spreadsheets.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
             <a
              href="https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro"
              target="_blank"
              className="bg-zinc-950 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-blue-600 transition-all flex items-center gap-2 shadow-2xl shadow-zinc-200"
            >
              Get on Play Store <Download size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. VISION & MISSION BENTO */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-10 bg-zinc-50 border border-zinc-100 rounded-[3rem]">
            <h3 className="text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6">The Vision</h3>
            <p className="text-zinc-600 leading-relaxed font-medium text-lg italic">
              "To make business management invisible, allowing founders to focus purely on the art of growth."
            </p>
          </div>
          <div className="p-10 bg-zinc-950 text-white rounded-[3rem] md:col-span-2 shadow-2xl">
            <h3 className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6">The Mission</h3>
            <p className="text-zinc-300 leading-relaxed text-xl md:text-2xl font-light">
              We provide a <span className="text-white font-bold">reliable and scalable</span> solution that simplifies operations, automates billing, and transforms data into actionable insights.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FEATURES GRID (Clean Modern Style) */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-950">Engineered for <br /> Performance.</h2>
          </div>
          <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest">06 Core Modules</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-100 border border-zinc-100 rounded-[3rem] overflow-hidden">
          {features.map((f, i) => (
            <div key={i} className="group p-12 bg-white hover:bg-zinc-50 transition-colors">
              <div className="w-12 h-12 text-blue-600 mb-8 transition-transform group-hover:scale-110 group-hover:rotate-6">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight">{f.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PRODUCT PHILOSOPHY */}
      <section className="max-w-6xl mx-auto px-6 py-32 border-t border-zinc-100">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Why Aptro</span>
            <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter leading-[0.9]">The Aptro <br /> Advantage.</h2>
            <div className="space-y-10">
              {benefits.map((b, i) => (
                <div key={i} className="flex gap-6">
                  <div className="mt-1 text-blue-600 bg-blue-50 p-2 rounded-lg"><CheckCircle2 size={18} /></div>
                  <div>
                    <h4 className="font-bold text-xl text-zinc-950 mb-2">{b.title}</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* PRODUCT MOCKUP CONTAINER */}
          <div className="lg:w-1/2 w-full aspect-[4/5] bg-zinc-50 rounded-[4rem] border border-zinc-100 flex items-center justify-center relative overflow-hidden p-12">
             <div className="relative z-10 text-center">
                <div className="w-32 h-32 bg-white rounded-[2.5rem] shadow-2xl flex items-center justify-center mx-auto mb-8 border border-zinc-100">
                    <Smartphone size={48} className="text-zinc-950" />
                </div>
                <p className="text-zinc-400 uppercase font-black tracking-[0.3em] text-[10px]">Aptro OS v1.0 Preview</p>
             </div>
             {/* Abstract Decor */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-zinc-200/50 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* 5. FINAL CALL TO ACTION */}
      <section className="max-w-5xl mx-auto px-6 py-40 text-center">
        <motion.div 
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            className="bg-zinc-950 text-white py-24 px-8 rounded-[4rem] relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Scale with <span className="text-zinc-500 italic">Confidence.</span></h2>
            <p className="text-zinc-400 mb-12 text-lg md:text-xl max-w-xl mx-auto font-light">
              Join the new generation of entrepreneurs running their business with Aptro.
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro"
              target="_blank"
              className="inline-block bg-white text-zinc-950 px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs transition-all hover:bg-blue-600 hover:text-white"
            >
              Download on Play Store
            </a>
          </div>
          {/* Subtle decoration inside CTA */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_70%)]" />
        </motion.div>
      </section>

      <footer className="text-center pb-20">
        <p className="text-[10px] font-bold text-zinc-300 uppercase tracking-[0.5em]">
            Aptro by Hiren Masaliya — Engineered in India
        </p>
      </footer>
    </main>
  );
}

const features = [
  {
    icon: <LayoutDashboard strokeWidth={1.5} />,
    title: "Unified Hub",
    desc: "A centralized command center for monitoring projects, orders, and cash flow in one glance."
  },
  {
    icon: <Receipt strokeWidth={1.5} />,
    title: "Smart Billing",
    desc: "Generate professional invoices, track partial payments, and automate follow-ups."
  },
  {
    icon: <Package strokeWidth={1.5} />,
    title: "Stock Control",
    desc: "Real-time inventory synchronization with low-stock alerts and automated deductions."
  },
  {
    icon: <Users strokeWidth={1.5} />,
    title: "Granular Access",
    desc: "Role-based permissions to ensure your team has exactly the data they need, no more."
  },
  {
    icon: <PieChart strokeWidth={1.5} />,
    title: "Insights Engine",
    desc: "Deep visual reports on profitability, top performers, and monthly financial health."
  },
  {
    icon: <ShieldCheck strokeWidth={1.5} />,
    title: "Safe Infrastructure",
    desc: "Enterprise-grade encryption and daily automated backups for your vital business data."
  }
];

const benefits = [
  {
    title: "Total Centralization",
    desc: "Consolidate your stack. Aptro replaces five disparate apps with one cohesive business ecosystem."
  },
  {
    title: "Elastic Scaling",
    desc: "Built on high-performance architecture that supports you from solo-freelancing to high-volume retail."
  },
  {
    title: "Offline Sync",
    desc: "Operational continuity in any environment. Work offline; sync to the cloud when you connect."
  }
];