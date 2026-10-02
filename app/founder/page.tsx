"use client";

import React from 'react';
import Image from 'next/image';
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
  ArrowRight,
  XCircle,
  CheckCircle2
} from 'lucide-react';

const customEase = [0.25, 1, 0.5, 1] as const;

export default function AptroPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
  };

  return (
    <main className="bg-[#FAFAFA] text-gray-900 min-h-screen pt-32 pb-16 selection:bg-blue-600 selection:text-white font-sans overflow-x-hidden">
      
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

        {/* 1. HERO SECTION - Plain English & Logo Added */}
        <div className="mb-24 md:mb-32 border-b border-gray-200 pb-16">
          <motion.div 
            initial="initial" animate="animate" variants={fadeInUp}
            className="flex flex-col items-start"
          >
            {/* Aptro Logo & Badges */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
                {/* Logo Placeholder (Replace src with your actual logo path) */}
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20 mr-2">
                    {/* <span className="text-white font-bold text-2xl">A</span> */}
                    <Image src="https://play-lh.googleusercontent.com/NGLIMqfdTLJPzeqRHJBAKmAOFucu9pzICIxzUKThGcQdg1e3FhGMBtPWNazC-gmxKrMGxCvRBkm0KvcqzcNn9w=s96-rw" alt="Aptro Logo" width={64} height={64} className="rounded-2xl" />
                </div>
                
                <div className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm">
                    <Smartphone size={16} className="text-blue-600" />
                    <span className="text-gray-700 text-xs uppercase tracking-widest font-bold">
                        Business Manager
                    </span>
                </div>
                <span className="flex items-center gap-2 bg-green-50 text-green-700 border border-green-200 px-4 py-2 rounded-full text-xs uppercase tracking-widest font-bold">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Live on Android
                </span>
            </div>
            
            <h1 className="text-5xl md:text-[6rem] lg:text-[7.5rem] font-bold mb-8 tracking-tight leading-[1] text-gray-900">
              Run your shop <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 font-light italic">
                from your phone.
              </span>
            </h1>
            
            <div className="grid md:grid-cols-12 gap-12 w-full pt-8 mt-4 border-t border-gray-200">
                <div className="md:col-span-7">
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-normal">
                        Meet <strong className="font-bold text-gray-900">Aptro</strong>. 
                        It is a simple mobile app that replaces messy notebooks, lost bills, and confusing software. Track your stock, create bills, and manage your staff all in one easy place.
                    </p>
                </div>

                <div className="md:col-span-5 flex flex-col gap-8 md:justify-end">
                    <a
                        href="https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro"
                        target="_blank"
                        rel="noreferrer"
                        className="group w-full md:w-auto bg-blue-600 text-white px-8 py-4 rounded-full text-sm font-bold transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 active:scale-95 flex items-center justify-between max-w-sm"
                    >
                        <span className="flex items-center gap-3">
                            <Download size={20} /> Download Aptro Free
                        </span>
                        <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </a>
                </div>
            </div>
          </motion.div>
        </div>

        {/* 2. BEFORE VS AFTER - Visual Storytelling for Non-Tech Users */}
        <div className="mb-32 md:mb-40">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
                    Why do you need Aptro?
                </h2>
                <p className="text-gray-600 text-lg font-normal">See the difference it makes in your daily life.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-10">
                {/* BEFORE APTRO */}
                <div className="bg-red-50/50 border border-red-100 p-8 md:p-12 rounded-[2rem] relative">
                    <div className="absolute top-0 right-8 -translate-y-1/2 bg-red-100 text-red-600 px-6 py-2 rounded-full font-bold text-sm border border-red-200 shadow-sm">
                        Before Aptro
                    </div>
                    <ul className="space-y-6 mt-4">
                        <li className="flex gap-4 items-start">
                            <XCircle className="text-red-500 shrink-0 mt-1" size={24} />
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg">Paper Notebooks</h4>
                                <p className="text-gray-600">Writing everything down in books that get lost, torn, or ruined.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <XCircle className="text-red-500 shrink-0 mt-1" size={24} />
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg">Guessing Stock</h4>
                                <p className="text-gray-600">Never knowing exactly how many items you have left to sell.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <XCircle className="text-red-500 shrink-0 mt-1" size={24} />
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg">Messy Calculations</h4>
                                <p className="text-gray-600">Wasting time at night with a calculator trying to figure out daily profits.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* AFTER APTRO */}
                <div className="bg-blue-50/50 border border-blue-200 p-8 md:p-12 rounded-[2rem] relative shadow-lg shadow-blue-900/5">
                    <div className="absolute top-0 right-8 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-md">
                        With Aptro
                    </div>
                    <ul className="space-y-6 mt-4">
                        <li className="flex gap-4 items-start">
                            <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={24} />
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg">Everything on Phone</h4>
                                <p className="text-gray-600">All your bills and customer details are safely stored in your pocket.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={24} />
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg">Automatic Stock</h4>
                                <p className="text-gray-600">The app automatically deducts stock when you make a bill.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={24} />
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg">Instant Profit Reports</h4>
                                <p className="text-gray-600">See exactly how much money you made today with one simple tap.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* 3. CORE FEATURES - Simple English Grid */}
        <div className="mb-32 md:mb-40">
            <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8 border-b border-gray-200 pb-12">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.2]">
                    What can you do <br/> <span className="text-blue-600">with Aptro?</span>
                </h2>
                <div className="md:text-right flex flex-col items-start md:items-end justify-end">
                    <p className="text-gray-600 text-base font-normal max-w-sm leading-relaxed mb-6">
                        Six powerful tools combined into one simple app.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {features.map((f, i) => (
                    <div key={i} className="group p-8 md:p-10 bg-white rounded-[2rem] border border-gray-200 hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-200 transition-all duration-500 flex flex-col">
                        <div className="flex justify-between items-start mb-8">
                            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 shadow-sm">
                                {f.icon}
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 tracking-tight text-gray-900">{f.title}</h3>
                        <p className="text-gray-600 text-base font-normal leading-relaxed mt-auto">{f.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* 4. BENEFITS & UI PREVIEW */}
        <div className="mb-32 md:mb-40">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                <div className="lg:w-1/2">
                    <span className="text-blue-600 text-xs uppercase tracking-widest font-bold mb-6 block border-b border-gray-200 pb-4">Designed for You</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight leading-[1.2] text-gray-900">
                        So simple, anyone <br /> <span className="font-light italic text-gray-500">can use it.</span>
                    </h2>
                    
                    <div className="space-y-10">
                        {benefits.map((b, i) => (
                            <div key={i} className="flex gap-5 group">
                                <div className="mt-2 flex-shrink-0">
                                    <div className="w-3 h-3 bg-blue-600 rounded-full group-hover:scale-150 transition-transform duration-300 shadow-sm"></div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl text-gray-900 mb-2 tracking-tight">{b.title}</h4>
                                    <p className="text-gray-600 text-base font-normal leading-relaxed">{b.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* MODERN MOBILE DASHBOARD WIREFRAME */}
                <div className="lg:w-1/2 w-full aspect-[4/5] bg-slate-900 rounded-[2.5rem] md:rounded-[3rem] border border-gray-800 flex flex-col items-center justify-center relative p-8 md:p-12 shadow-2xl overflow-hidden">
                    
                    {/* Background decoration */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/20 blur-[80px] rounded-full pointer-events-none"></div>

                    {/* Wireframe Phone Frame */}
                    <div className="relative z-10 w-full max-w-[280px]">
                        <div className="w-full aspect-[9/19.5] bg-[#FAFAFA] border-8 border-gray-800 rounded-[2.5rem] mx-auto relative flex flex-col overflow-hidden shadow-2xl">
                            
                            {/* App Header */}
                            <div className="pt-10 pb-4 px-5 flex items-center justify-between bg-white border-b border-gray-200">
                                <div className="flex flex-col gap-1.5">
                                    <div className="w-24 h-4 bg-gray-900 rounded-full"></div>
                                    <div className="w-12 h-2 bg-gray-300 rounded-full"></div>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center relative">
                                    <Bell size={18} className="text-blue-600" />
                                    {/* Backend Notification Integration Dot (Red) */}
                                    <div className="absolute top-2 right-2 w-2.5 h-2.5 border-2 border-white bg-red-500 rounded-full animate-pulse"></div>
                                </div>
                            </div>

                            {/* App Body */}
                            <div className="flex-1 p-5 flex flex-col gap-4 overflow-hidden bg-gray-50">
                                
                                {/* Sales Summary Card */}
                                <div className="bg-blue-600 p-5 rounded-2xl flex flex-col gap-2 shadow-lg shadow-blue-600/20">
                                    <span className="text-blue-200 text-[10px] uppercase tracking-widest font-bold">Today's Sales</span>
                                    <div className="w-24 h-6 bg-white rounded-md mt-1"></div>
                                </div>

                                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-2">Recent Orders</span>
                                
                                {/* Order Card 1 */}
                                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-100 shrink-0"></div>
                                    <div className="flex flex-col gap-2 w-full">
                                        <div className="w-2/3 h-3 bg-gray-800 rounded-full"></div>
                                        <div className="w-1/3 h-2 bg-gray-300 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Order Card 2 */}
                                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-yellow-100 shrink-0"></div>
                                    <div className="flex flex-col gap-2 w-full">
                                        <div className="w-1/2 h-3 bg-gray-800 rounded-full"></div>
                                        <div className="w-1/4 h-2 bg-gray-300 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* 5. FINAL CALL TO ACTION */}
        <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: customEase }}
            className="mb-20 bg-blue-600 rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-20 flex flex-col md:flex-row justify-between items-center gap-10 shadow-2xl shadow-blue-900/20 relative overflow-hidden"
        >
            {/* Decorative background circle */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-xl text-center md:text-left text-white relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-[1.2]">
                    Stop struggling with <br/> <span className="text-blue-200">paper and pen.</span>
                </h2>
                <p className="text-blue-100 text-lg font-normal leading-relaxed">
                    Download Aptro today and start managing your shop the smart, modern way. It's completely free to try.
                </p>
            </div>
            <a
                href="https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro"
                target="_blank"
                rel="noreferrer"
                className="group w-full md:w-auto bg-white text-blue-700 rounded-full px-10 py-5 text-base font-bold transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-3 shrink-0 active:scale-95 relative z-10"
            >
                Download Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
        </motion.div>

      </section>

      <footer className="text-center pb-10 border-t border-gray-200 pt-10 mx-6 md:mx-12">
        <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
            Aptro by Hiren Masaliya — Made in Jetpur, Gujarat
        </p>
      </footer>
    </main>
  );
}

// Plain English Features Data
const features = [
  {
    icon: <LayoutDashboard strokeWidth={2} size={28} />,
    title: "Track Orders Easily",
    desc: "See exactly which customer ordered what, and know if the order is pending or completed in one tap."
  },
  {
    icon: <Receipt strokeWidth={2} size={28} />,
    title: "Quick Digital Bills",
    desc: "Create professional bills with GST automatically added. Send them to customers directly on WhatsApp."
  },
  {
    icon: <Package strokeWidth={2} size={28} />,
    title: "Know Your Stock",
    desc: "Aptro automatically removes items from your stock count when you sell them, so you never run out unexpectedly."
  },
  {
    icon: <Users strokeWidth={2} size={28} />,
    title: "Manage Your Staff",
    desc: "Give your workers access to the app, but hide your profits and private information from them."
  },
  {
    icon: <PieChart strokeWidth={2} size={28} />,
    title: "See Your Profits",
    desc: "Check your phone at the end of the day to see exactly how much money you made and what you spent."
  },
  {
    icon: <ShieldCheck strokeWidth={2} size={28} />,
    title: "Safe & Private",
    desc: "Your business data is safely backed up on the internet. If you lose your phone, your data is still safe."
  }
];

// Plain English Benefits Data
const benefits = [
  {
    title: "Everything in One App",
    desc: "Stop using a calculator, a notebook, and Excel all at once. Aptro puts all those tools into one simple app on your phone."
  },
  {
    title: "Works Without Internet",
    desc: "Internet stopped working? No problem. You can still make bills and add orders. Aptro will save them when the internet comes back."
  },
  {
    title: "Saves You Hours of Time",
    desc: "Instead of spending 2 hours every night counting cash and stock, Aptro gives you the final numbers instantly."
  }
];