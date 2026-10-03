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
  Download,
  Bell,
  ArrowRight, // Replaced ArrowForward
  XCircle,     // Replaced Cancel
  CheckCircle,
  ArrowUpRight // Replaced OpenInNew
} from 'lucide-react';

// Google Material 3 Emphasized Decelerate easing
const materialEase = [0.2, 0, 0, 1] as const;

export default function AptroPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: materialEase } }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <main className="bg-[#F8F9FA] text-[#1F1F1F] min-h-screen pt-24 md:pt-32 pb-16 selection:bg-[#D3E3FD] selection:text-[#041E49] font-sans overflow-x-hidden antialiased">
      
      <section className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10">

        {/* =====================================================
            1. HERO SECTION - Material Display Typography
        ====================================================== */}
        <div className="mb-20 md:mb-32 border-b border-[#E0E2E0] pb-16">
          <motion.div 
            initial="initial" animate="animate" variants={staggerContainer}
            className="flex flex-col items-start"
          >
            {/* Aptro Logo & Material Assist Chips */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3 mb-8">
                <div className="w-16 h-16 bg-[#0A56D1] rounded-[16px] flex items-center justify-center shadow-[0_1px_3px_1px_rgba(0,0,0,0.15)] mr-2 overflow-hidden">
                    <Image src="https://play-lh.googleusercontent.com/NGLIMqfdTLJPzeqRHJBAKmAOFucu9pzICIxzUKThGcQdg1e3FhGMBtPWNazC-gmxKrMGxCvRBkm0KvcqzcNn9w=s96-rw" alt="Aptro Logo" width={64} height={64} />
                </div>
                
                <div className="flex items-center gap-2 border border-[#747775] px-4 h-8 rounded-lg">
                    <Smartphone size={16} className="text-[#444746]" />
                    <span className="text-[#444746] text-xs font-medium tracking-wide">
                        Business Manager
                    </span>
                </div>
                {/* Material Tertiary Container Chip */}
                <span className="flex items-center gap-2 bg-[#C4EED0] text-[#072711] px-4 h-8 rounded-lg text-xs font-medium tracking-wide">
                    <span className="w-2 h-2 bg-[#146C2E] rounded-full animate-pulse"></span>
                    Live on Android
                </span>
            </motion.div>
            
            {/* Material Display Large */}
            <motion.h1 variants={fadeInUp} className="text-[44px] md:text-[64px] lg:text-[80px] font-normal mb-8 tracking-[-0.25px] leading-[1.05] text-[#1F1F1F]">
              Run your shop <br className="hidden md:block"/>
              <span className="text-[#0A56D1]">
                from your phone.
              </span>
            </motion.h1>
            
            <motion.div variants={fadeInUp} className="grid md:grid-cols-12 gap-8 w-full pt-8 mt-4 border-t border-[#E0E2E0]">
                <div className="md:col-span-7">
                    {/* Material Body Large */}
                    <p className="text-[18px] md:text-[20px] text-[#444746] leading-[32px] font-normal">
                        Meet <strong className="font-medium text-[#1F1F1F]">Aptro</strong>. 
                        It is a simple mobile app that replaces messy notebooks, lost bills, and confusing software. Track your stock, create bills, and manage your staff all in one easy place.
                    </p>
                </div>

                <div className="md:col-span-5 flex flex-col gap-6 md:justify-end md:items-end">
                    {/* Material Filled Button (Extended FAB Style) */}
                    <a
                        href="https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-[#0A56D1] text-white px-8 h-14 rounded-full text-sm font-medium transition-colors hover:bg-[#0842A0] shadow-[0_1px_3px_1px_rgba(0,0,0,0.15)] active:scale-95 w-full md:w-auto"
                    >
                        <Download size={20} />
                        Download Aptro Free
                        <ArrowUpRight size={18} className="ml-2 opacity-70" />
                    </a>
                </div>
            </motion.div>
          </motion.div>
        </div>

        {/* =====================================================
            2. BEFORE VS AFTER - Material Error/Primary Containers
        ====================================================== */}
        <div className="mb-24 md:mb-32">
            <div className="mb-12">
                <h2 className="text-[32px] md:text-[40px] font-normal tracking-tight text-[#1F1F1F] mb-4">
                    Why do you need Aptro?
                </h2>
                <p className="text-[#444746] text-[18px] font-normal">See the difference it makes in your daily life.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {/* BEFORE APTRO - Material Error Container */}
                <div className="bg-[#F9DEDC] border border-[#F2B8B5] p-8 md:p-12 rounded-[28px] relative overflow-hidden">
                    <div className="inline-flex items-center bg-[#8C1D18] text-white px-4 py-1.5 rounded-full font-medium text-xs tracking-wide mb-8">
                        Before Aptro
                    </div>
                    <ul className="space-y-6">
                        <li className="flex gap-4 items-start">
                            <XCircle className="text-[#8C1D18] shrink-0 mt-0.5" size={24} />
                            <div>
                                <h4 className="font-medium text-[#410E0B] text-[20px] mb-1">Paper Notebooks</h4>
                                <p className="text-[#8C1D18] text-sm leading-[24px]">Writing everything down in books that get lost, torn, or ruined.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <XCircle className="text-[#8C1D18] shrink-0 mt-0.5" size={24} />
                            <div>
                                <h4 className="font-medium text-[#410E0B] text-[20px] mb-1">Guessing Stock</h4>
                                <p className="text-[#8C1D18] text-sm leading-[24px]">Never knowing exactly how many items you have left to sell.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <XCircle className="text-[#8C1D18] shrink-0 mt-0.5" size={24} />
                            <div>
                                <h4 className="font-medium text-[#410E0B] text-[20px] mb-1">Messy Calculations</h4>
                                <p className="text-[#8C1D18] text-sm leading-[24px]">Wasting time at night with a calculator trying to figure out daily profits.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* AFTER APTRO - Material Primary Container */}
                <div className="bg-[#D3E3FD] border border-[#A8C7FA] p-8 md:p-12 rounded-[28px] relative">
                    <div className="inline-flex items-center bg-[#0A56D1] text-white px-4 py-1.5 rounded-full font-medium text-xs tracking-wide mb-8">
                        With Aptro
                    </div>
                    <ul className="space-y-6">
                        <li className="flex gap-4 items-start">
                            <CheckCircle className="text-[#041E49] shrink-0 mt-0.5" size={24} />
                            <div>
                                <h4 className="font-medium text-[#041E49] text-[20px] mb-1">Everything on Phone</h4>
                                <p className="text-[#001D35] text-sm leading-[24px]">All your bills and customer details are safely stored in your pocket.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <CheckCircle className="text-[#041E49] shrink-0 mt-0.5" size={24} />
                            <div>
                                <h4 className="font-medium text-[#041E49] text-[20px] mb-1">Automatic Stock</h4>
                                <p className="text-[#001D35] text-sm leading-[24px]">The app automatically deducts stock when you make a bill.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <CheckCircle className="text-[#041E49] shrink-0 mt-0.5" size={24} />
                            <div>
                                <h4 className="font-medium text-[#041E49] text-[20px] mb-1">Instant Profit Reports</h4>
                                <p className="text-[#001D35] text-sm leading-[24px]">See exactly how much money you made today with one simple tap.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* =====================================================
            3. CORE FEATURES - Material Outlined Cards
        ====================================================== */}
        <div className="mb-24 md:mb-32 border-t border-[#E0E2E0] pt-16">
            <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
                <h2 className="text-[32px] md:text-[40px] font-normal tracking-tight text-[#1F1F1F] leading-[1.2]">
                    What can you do <br className="hidden md:block" /> with Aptro?
                </h2>
                <div className="md:text-right flex flex-col items-start md:items-end justify-end">
                    <p className="text-[#444746] text-[18px] font-normal max-w-sm leading-[28px]">
                        Six powerful tools combined into one simple application.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((f, i) => (
                    <div key={i} className="p-8 bg-[#FAFDFC] rounded-[24px] border border-[#747775] hover:bg-[#F0F4F9] transition-colors duration-200 flex flex-col">
                        <div className="w-14 h-14 rounded-full bg-[#E8DEF8] text-[#1D192B] flex items-center justify-center mb-6">
                            {f.icon}
                        </div>
                        <h3 className="text-[22px] font-normal mb-3 text-[#1F1F1F]">{f.title}</h3>
                        <p className="text-[#444746] text-sm leading-[24px] mt-auto">{f.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* =====================================================
            4. BENEFITS & UI PREVIEW - Material Tonal Surface
        ====================================================== */}
        <div className="mb-24 md:mb-32">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2">
                    <span className="text-[#0A56D1] text-xs uppercase tracking-wider font-medium mb-4 block">
                        Designed for You
                    </span>
                    <h2 className="text-[32px] md:text-[48px] font-normal mb-10 tracking-tight leading-[1.1] text-[#1F1F1F]">
                        So simple, anyone <br /> can use it.
                    </h2>
                    
                    <div className="space-y-8">
                        {benefits.map((b, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="mt-1 flex-shrink-0">
                                    <div className="w-2.5 h-2.5 bg-[#0A56D1] rounded-full mt-2"></div>
                                </div>
                                <div>
                                    <h4 className="font-medium text-[20px] text-[#1F1F1F] mb-1">{b.title}</h4>
                                    <p className="text-[#444746] text-[16px] font-normal leading-[26px]">{b.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* MODERN MOBILE DASHBOARD WIREFRAME - Material Surface Container Highest */}
                <div className="lg:w-1/2 w-full aspect-[4/5] bg-[#E1E3E1] rounded-[32px] flex flex-col items-center justify-center relative p-8 shadow-inner border border-[#C4C7C5]">
                    
                    {/* Wireframe Phone Frame */}
                    <div className="relative z-10 w-full max-w-[280px]">
                        <div className="w-full aspect-[9/19.5] bg-[#F8F9FA] border-[12px] border-[#1F1F1F] rounded-[36px] mx-auto relative flex flex-col overflow-hidden shadow-[0_4px_8px_3px_rgba(0,0,0,0.15)]">
                            
                            {/* App Header */}
                            <div className="pt-12 pb-4 px-5 flex items-center justify-between bg-white border-b border-[#E0E2E0]">
                                <div className="flex flex-col gap-2">
                                    <div className="w-24 h-4 bg-[#1F1F1F] rounded-full"></div>
                                    <div className="w-12 h-2 bg-[#C4C7C5] rounded-full"></div>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-[#F0F4F9] flex items-center justify-center relative">
                                    <Bell size={20} className="text-[#444746]" />
                                    {/* Backend Notification Integration Dot (Red) */}
                                    <div className="absolute top-2 right-2 w-2.5 h-2.5 border-2 border-white bg-[#B3261E] rounded-full"></div>
                                </div>
                            </div>

                            {/* App Body */}
                            <div className="flex-1 p-5 flex flex-col gap-4 overflow-hidden bg-[#F8F9FA]">
                                
                                {/* Sales Summary Card (Primary) */}
                                <div className="bg-[#0A56D1] p-5 rounded-[16px] flex flex-col gap-2 shadow-[0_1px_3px_1px_rgba(0,0,0,0.15)]">
                                    <span className="text-[#D3E3FD] text-[10px] uppercase tracking-widest font-medium">Today's Sales</span>
                                    <div className="w-24 h-6 bg-white rounded-md mt-1"></div>
                                </div>

                                <span className="text-[12px] font-medium text-[#747775] mt-2">Recent Orders</span>
                                
                                {/* Order Card 1 */}
                                <div className="bg-white p-4 rounded-[12px] border border-[#E0E2E0] shadow-sm flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[#C4EED0] shrink-0"></div>
                                    <div className="flex flex-col gap-2 w-full">
                                        <div className="w-2/3 h-3 bg-[#444746] rounded-full"></div>
                                        <div className="w-1/3 h-2 bg-[#C4C7C5] rounded-full"></div>
                                    </div>
                                </div>

                                {/* Order Card 2 */}
                                <div className="bg-white p-4 rounded-[12px] border border-[#E0E2E0] shadow-sm flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[#FFDDA6] shrink-0"></div>
                                    <div className="flex flex-col gap-2 w-full">
                                        <div className="w-1/2 h-3 bg-[#444746] rounded-full"></div>
                                        <div className="w-1/4 h-2 bg-[#C4C7C5] rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* =====================================================
            5. FINAL CALL TO ACTION - Material Inverse Surface
        ====================================================== */}
        <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: materialEase }}
            className="mb-16 bg-[#1F1F1F] rounded-[28px] p-10 md:p-16 flex flex-col md:flex-row justify-between items-center gap-10 relative overflow-hidden"
        >
            <div className="max-w-xl text-center md:text-left text-[#F8F9FA] relative z-10">
                <h2 className="text-[32px] md:text-[44px] font-normal mb-4 tracking-[-0.25px] leading-tight">
                    Stop struggling with <br/> <span className="text-[#A8C7FA]">paper and pen.</span>
                </h2>
                <p className="text-[#C4C7C5] text-[18px] font-normal leading-[28px]">
                    Download Aptro today and start managing your shop the smart, modern way. It's completely free to try.
                </p>
            </div>
            {/* Inverse Primary Action Button */}
            <a
                href="https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#A8C7FA] text-[#062E6F] rounded-full px-8 h-14 text-sm font-medium transition-colors hover:bg-[#D3E3FD] shadow-[0_2px_4px_rgba(0,0,0,0.15)] active:scale-95 shrink-0 w-full md:w-auto relative z-10"
            >
                Download Now <ArrowRight size={20} />
            </a>
        </motion.div>

      </section>

      <footer className="text-center pb-8 border-t border-[#E0E2E0] pt-8 mx-4 md:mx-8">
        <p className="text-[12px] font-medium text-[#747775]">
            Aptro by Hiren Masaliya — Made in Jetpur, Gujarat
        </p>
      </footer>
    </main>
  );
}

// Plain English Features Data
const features = [
  {
    icon: <LayoutDashboard size={24} />,
    title: "Track Orders Easily",
    desc: "See exactly which customer ordered what, and know if the order is pending or completed in one tap."
  },
  {
    icon: <Receipt size={24} />,
    title: "Quick Digital Bills",
    desc: "Create professional bills with GST automatically added. Send them to customers directly on WhatsApp."
  },
  {
    icon: <Package size={24} />,
    title: "Know Your Stock",
    desc: "Aptro automatically removes items from your stock count when you sell them, so you never run out unexpectedly."
  },
  {
    icon: <Users size={24} />,
    title: "Manage Your Staff",
    desc: "Give your workers access to the app, but hide your profits and private information from them."
  },
  {
    icon: <PieChart size={24} />,
    title: "See Your Profits",
    desc: "Check your phone at the end of the day to see exactly how much money you made and what you spent."
  },
  {
    icon: <ShieldCheck size={24} />,
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