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
  Cloud,
  Lock,
  Zap,
  Bell,
  ArrowRight
} from 'lucide-react';

const customEase = [0.25, 1, 0.5, 1] as const;

export default function AptroPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
  };

  return (
    <main className="bg-[#FAFAFA] text-[#111111] min-h-screen pt-32 pb-16 selection:bg-[#111111] selection:text-[#FFFFFF] font-sans overflow-x-hidden">
      
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

        {/* 1. HERO SECTION - Clean & Accessible */}
        <div className="mb-24 md:mb-32 border-b border-gray-200 pb-16">
          <motion.div 
            initial="initial" animate="animate" variants={fadeInUp}
            className="flex flex-col items-start"
          >
            <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm">
                    <Smartphone size={16} className="text-gray-600" />
                    <span className="text-gray-600 text-xs uppercase tracking-widest font-semibold">
                        Business Management App
                    </span>
                </div>
                <span className="flex items-center gap-2 text-green-600 text-xs uppercase tracking-widest font-semibold">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Live on Android
                </span>
            </div>
            
            <h1 className="text-5xl md:text-[7rem] lg:text-[8.5rem] font-light mb-8 tracking-tight leading-[0.9] text-[#111111]">
              Meet <span className="font-medium">Aptro.</span>
            </h1>
            
            <div className="grid md:grid-cols-12 gap-12 w-full pt-8 mt-4 border-t border-gray-200">
                <div className="md:col-span-7">
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                        Built by <strong className="font-medium text-[#111111]">Hiren Masaliya</strong>. 
                        Aptro is an all-in-one workspace designed to replace messy spreadsheets and complicated software, making it incredibly easy to manage your daily business operations.
                    </p>
                </div>

                <div className="md:col-span-5 flex flex-col gap-8 md:justify-end">
                    <div className="grid grid-cols-2 gap-4 border-l-2 border-gray-200 pl-6">
                        <div>
                            <span className="block text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1">Built With</span>
                            <span className="text-sm font-medium text-[#111111]">Flutter & Firebase</span>
                        </div>
                        <div>
                            <span className="block text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1">Made For</span>
                            <span className="text-sm font-medium text-[#111111]">Small Businesses</span>
                        </div>
                    </div>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro"
                        target="_blank"
                        rel="noreferrer"
                        className="group w-full md:w-auto bg-[#111111] text-white px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 hover:bg-gray-800 hover:shadow-lg flex items-center justify-between max-w-sm"
                    >
                        <span className="flex items-center gap-3">
                            <Download size={18} /> Download Aptro
                        </span>
                        <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </a>
                </div>
            </div>
          </motion.div>
        </div>

        {/* 2. THE MISSION - Modern Card */}
        <div className="mb-32 md:mb-40 bg-[#111111] rounded-[2rem] md:rounded-[3rem] text-white p-10 md:p-20 relative overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">
                <div>
                    <span className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-6 block">The Goal</span>
                    <p className="text-3xl md:text-5xl font-light leading-[1.2] tracking-tight text-white">
                        "To make running a business so <span className="font-medium italic">effortless</span>, that you can focus purely on growing it."
                    </p>
                </div>
                <div className="flex flex-col justify-center">
                    <span className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-6 block">Why Aptro Exists</span>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light">
                        Most small businesses struggle by using too many different tools to manage billing, inventory, and staff. Aptro brings everything together in one fast, reliable, and premium mobile experience. No clutter, just the tools you need to succeed.
                    </p>
                </div>
            </div>
        </div>

        {/* 3. CORE FEATURES - Card Based Grid */}
        <div className="mb-32 md:mb-40">
            <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8 border-b border-gray-200 pb-12">
                <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#111111] leading-[1.2]">
                    Everything you need <br/> <span className="font-medium">in one place.</span>
                </h2>
                <div className="md:text-right flex flex-col items-start md:items-end justify-end">
                    <p className="text-gray-500 text-base font-light max-w-sm leading-relaxed mb-6">
                        Aptro is built with exactly what a modern business needs to operate smoothly every day.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {features.map((f, i) => (
                    <div key={i} className="group p-8 md:p-10 bg-white rounded-[2rem] border border-gray-100 hover:shadow-xl hover:shadow-black/5 transition-all duration-500 flex flex-col">
                        <div className="flex justify-between items-start mb-10">
                            <div className="w-14 h-14 rounded-full bg-[#FAFAFA] border border-gray-100 text-[#111111] flex items-center justify-center group-hover:bg-[#111111] group-hover:text-white transition-colors duration-500 shadow-sm">
                                {f.icon}
                            </div>
                        </div>
                        <h3 className="text-2xl font-medium mb-3 tracking-tight text-[#111111]">{f.title}</h3>
                        <p className="text-gray-500 text-base font-light leading-relaxed mt-auto">{f.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* 4. UNDER THE HOOD - Minimalist Architecture */}
        <div className="mb-32 md:mb-40 bg-white rounded-[2rem] md:rounded-[3rem] border border-gray-100 p-10 md:p-20 shadow-sm relative overflow-hidden">
            <div className="mb-16 border-b border-gray-100 pb-12 relative z-10">
                <span className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-4 block">Technology</span>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#111111]">How it <span className="font-medium">Works.</span></h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-10 relative z-10">
                {[
                    { icon: <Smartphone size={22}/>, title: "Smooth App", desc: "Built with Flutter for a fast, premium mobile experience." },
                    { icon: <Cloud size={22}/>, title: "Live Sync", desc: "Uses Firebase to instantly save your data to the cloud." },
                    { icon: <Lock size={22}/>, title: "Secure Login", desc: "Your account is protected with strict security rules." },
                    { icon: <Zap size={22}/>, title: "Fast Actions", desc: "Designed to load quickly so you never waste time waiting." },
                ].map((tech, i) => (
                    <div key={i} className="flex flex-col group">
                        <div className="w-12 h-12 rounded-xl bg-gray-50 text-gray-700 flex items-center justify-center mb-6 group-hover:bg-[#111111] group-hover:text-white transition-colors duration-300">
                            {tech.icon}
                        </div>
                        <h4 className="text-lg font-medium tracking-tight mb-2 text-[#111111]">{tech.title}</h4>
                        <p className="text-gray-500 text-sm font-light leading-relaxed">{tech.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* 5. BENEFITS & UI PREVIEW */}
        <div className="mb-32 md:mb-40">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                <div className="lg:w-1/2">
                    <span className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-6 block border-b border-gray-200 pb-4">Why choose Aptro?</span>
                    <h2 className="text-4xl md:text-5xl font-light mb-12 tracking-tight leading-[1.2] text-[#111111]">
                        The Smart Way <br /> to <span className="font-medium">Manage Work.</span>
                    </h2>
                    
                    <div className="space-y-10">
                        {benefits.map((b, i) => (
                            <div key={i} className="flex gap-5 group">
                                <div className="mt-2 flex-shrink-0">
                                    <div className="w-2 h-2 bg-[#111111] rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                                </div>
                                <div>
                                    <h4 className="font-medium text-xl text-[#111111] mb-2 tracking-tight">{b.title}</h4>
                                    <p className="text-gray-500 text-base font-light leading-relaxed">{b.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* MODERN NOTIFICATION & DASHBOARD WIREFRAME */}
                <div className="lg:w-1/2 w-full aspect-[4/5] bg-white rounded-[2rem] md:rounded-[3rem] border border-gray-100 flex flex-col items-center justify-center relative p-8 md:p-12 shadow-xl shadow-black/5 overflow-hidden">
                    
                    {/* Wireframe Phone Frame */}
                    <div className="relative z-10 w-full max-w-[280px]">
                        <div className="w-full aspect-[9/19.5] bg-[#FAFAFA] border-8 border-gray-200 rounded-[2.5rem] mx-auto relative flex flex-col overflow-hidden shadow-inner">
                            
                            {/* App Header */}
                            <div className="pt-10 pb-4 px-5 flex items-center justify-between bg-white border-b border-gray-100">
                                <div className="flex flex-col gap-1.5">
                                    <div className="w-20 h-3 bg-gray-200 rounded-full"></div>
                                    <div className="w-12 h-2 bg-gray-100 rounded-full"></div>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center relative">
                                    <Bell size={14} className="text-gray-400" />
                                    {/* Notification Dot reflecting user ledger instruction */}
                                    <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                                </div>
                            </div>

                            {/* App Body (Notifications/Dashboard View) */}
                            <div className="flex-1 p-5 flex flex-col gap-4 overflow-hidden">
                                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Recent Activity</span>
                                
                                {/* Notification Card 1 */}
                                <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-green-50 shrink-0"></div>
                                    <div className="flex flex-col gap-2 w-full mt-1">
                                        <div className="w-full h-2 bg-gray-200 rounded-full"></div>
                                        <div className="w-2/3 h-2 bg-gray-100 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Notification Card 2 */}
                                <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 shrink-0"></div>
                                    <div className="flex flex-col gap-2 w-full mt-1">
                                        <div className="w-4/5 h-2 bg-gray-200 rounded-full"></div>
                                        <div className="w-1/2 h-2 bg-gray-100 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Summary Card */}
                                <div className="mt-4 bg-[#111111] p-4 rounded-xl flex flex-col gap-3">
                                    <div className="w-16 h-2 bg-white/20 rounded-full"></div>
                                    <div className="w-24 h-4 bg-white rounded-full mt-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* 6. FINAL CALL TO ACTION */}
        <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: customEase }}
            className="mb-20 bg-[#111111] rounded-[2rem] md:rounded-[3rem] p-10 md:p-20 flex flex-col md:flex-row justify-between items-center gap-10 shadow-2xl"
        >
            <div className="max-w-xl text-center md:text-left text-white">
                <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight leading-[1.2]">
                    Ready to simplify <br/> <span className="font-medium">your business?</span>
                </h2>
                <p className="text-gray-400 text-base font-light leading-relaxed">
                    Join other smart founders who are running their business on a fast, secure, and easy-to-use platform.
                </p>
            </div>
            <a
                href="https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro"
                target="_blank"
                rel="noreferrer"
                className="group w-full md:w-auto bg-white text-[#111111] rounded-full px-8 py-4 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3 shrink-0"
            >
                Get it on Android <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
        </motion.div>

      </section>

      <footer className="text-center pb-10 border-t border-gray-200 pt-10 mx-6 md:mx-12">
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">
            Aptro by Hiren Masaliya — Made in Jetpur, Gujarat
        </p>
      </footer>
    </main>
  );
}

const features = [
  {
    icon: <LayoutDashboard strokeWidth={1.5} size={24} />,
    title: "Smart Orders",
    desc: "Easily manage customer orders and track their progress from start to finish in one clean dashboard."
  },
  {
    icon: <Receipt strokeWidth={1.5} size={24} />,
    title: "GST Billing",
    desc: "Create professional, GST-ready invoices in seconds and easily track which payments are pending or cleared."
  },
  {
    icon: <Package strokeWidth={1.5} size={24} />,
    title: "Live Inventory",
    desc: "Always know exactly what is in stock. Aptro automatically updates your item counts every time you make a sale."
  },
  {
    icon: <Users strokeWidth={1.5} size={24} />,
    title: "Payroll & Staff",
    desc: "Manage your team's payroll and control exactly what information each staff member is allowed to see."
  },
  {
    icon: <PieChart strokeWidth={1.5} size={24} />,
    title: "Clear Insights",
    desc: "Understand your profits, daily sales, and business expenses at a glance with simple, easy-to-read charts."
  },
  {
    icon: <ShieldCheck strokeWidth={1.5} size={24} />,
    title: "Safe & Secure",
    desc: "Your business data is safely backed up to the cloud automatically, ensuring you never lose important information."
  }
];

const benefits = [
  {
    title: "Replace Scattered Tools",
    desc: "Stop jumping between different apps. Replace your messy spreadsheets and notes with one clean, easy-to-use platform."
  },
  {
    title: "Grows With Your Business",
    desc: "Whether you are a solo freelancer or running a busy retail shop, Aptro easily handles your daily workload without slowing down."
  },
  {
    title: "Works Offline Too",
    desc: "No internet? No problem. Keep working offline, and Aptro will automatically save and sync your data the moment you reconnect."
  }
];