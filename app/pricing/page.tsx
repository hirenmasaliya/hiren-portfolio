"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, Zap, Rocket, Shield, ExternalLink, Globe, Sparkles } from "lucide-react";

// --- Premium Easing ---
const customEase = [0.25, 1, 0.5, 1] as const;

// --- Data ---
const plans = [
    {
        name: "Starter",
        price: "15,000",
        desc: "Ideal for rapid validation, MVP deployment, and early-stage technical prototyping.",
        icon: <Zap size={20} />,
        features: ["3–5 Core Screens", "Standard UI Architecture", "Firebase Auth Integration", "Android APK Generation", "7 Days Priority Support"],
    },
    {
        name: "Business",
        price: "40,000",
        desc: "Complete market-ready solution architected for growing startups and user acquisition.",
        popular: true,
        icon: <Rocket size={20} />,
        features: ["6–12 Custom Screens", "Premium UI/UX Design System", "OAuth/Social Logins", "FCM Push Notifications", "15 Days Priority Support"],
    },
    {
        name: "Advanced",
        price: "1,20,000",
        desc: "Enterprise-grade architecture for heavy-duty scaling and complex data operations.",
        icon: <Shield size={20} />,
        features: ["Unlimited App Screens", "Bespoke Design System", "Microservices Architecture", "Razorpay/Stripe Gateway", "30 Days Retainer Support"],
    },
];

const addOnCategories = [
    {
        title: "Quick Fixes",
        items: [
            { name: "Bug Resolution", price: "₹300+", desc: "Crashes, logical errors, or API failure debugging." },
            { name: "UI Refinement", price: "₹300+", desc: "Color palettes, spacing, and strict layout fixes." },
            { name: "Responsive Fix", price: "₹1,500+", desc: "Mobile-friendly optimization across all viewports." },
        ]
    },
    {
        title: "Feature Boost",
        items: [
            { name: "Payment Gateway", price: "₹3,000+", desc: "Razorpay, Stripe, or direct UPI integrations." },
            { name: "Social Auth", price: "₹2,000+", desc: "Google, Apple, or GitHub secure OAuth login." },
            { name: "Admin Console", price: "₹10,000+", desc: "Secure web dashboard for direct data manipulation." },
        ]
    },
    {
        title: "Deployment",
        items: [
            { name: "Play Store", price: "₹1,500+", desc: "Google Console submission and review management." },
            { name: "App Store", price: "₹2,300+", desc: "iOS Certificates, Provisioning, and Xcode uploads." },
            { name: "SEO Audit", price: "₹2,000+", desc: "Technical structural audit for Google ranking algorithms." },
        ]
    }
];

export default function Pricing() {
    const [activeTab, setActiveTab] = useState(0);

    const sendWhatsApp = (item: string, price: string) => {
        const msg = `Hello! I'm initiating contact regarding the *${item}* service (${price}). Can we establish a technical brief?`;
        window.open(`https://wa.me/916353361223?text=${encodeURIComponent(msg)}`, '_blank');
    };

    return (
        <main className="bg-slate-50 text-slate-900 min-h-screen pt-40 pb-24 selection:bg-blue-200 selection:text-blue-900 font-sans overflow-hidden">
            
            {/* Soft Background Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                {/* --- HEADER --- */}
                <div className="mb-24 md:mb-32 text-left border-b border-slate-200 pb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: customEase }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-8"
                    >
                        <div>
                            <div className="flex items-center gap-3 px-4 py-2 bg-white border border-blue-100 rounded-full shadow-sm w-max mb-6">
                                <Sparkles className="w-3 h-3 text-blue-500" />
                                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-700">
                                    Investment Strategy
                                </span>
                            </div>
                            <h1 className="text-[12vw] md:text-[8.5rem] font-black tracking-tighter leading-[0.85] text-slate-950 uppercase">
                                Clear Rates. <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Global Scale.</span>
                            </h1>
                        </div>
                        <p className="text-slate-500 text-base md:text-lg max-w-sm font-medium pb-2 md:pb-4 leading-relaxed">
                            Transparent financial structuring for high-performance engineering and architectural solutions.
                        </p>
                    </motion.div>
                </div>

                {/* --- MAIN PLANS - Premium Floating Cards --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32 md:mb-48">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.6, ease: customEase }}
                            className={`relative flex flex-col p-10 md:p-12 transition-all duration-500 group rounded-3xl ${
                                plan.popular 
                                ? 'bg-slate-950 text-white border border-slate-800 shadow-2xl shadow-blue-900/20 md:-translate-y-4' 
                                : 'bg-white text-slate-900 border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5'
                            }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 right-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[9px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg shadow-blue-900/30">
                                    Recommended Focus
                                </div>
                            )}
                            
                            <div className="flex justify-between items-start mb-10">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 ${
                                    plan.popular ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' : 'bg-blue-50 text-blue-600 border border-blue-100'
                                }`}>
                                    {plan.icon}
                                </div>
                            </div>
                            
                            <h3 className="text-3xl font-black uppercase tracking-tight mb-4">{plan.name}</h3>
                            <p className={`text-sm font-medium leading-relaxed mb-10 h-16 ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                                {plan.desc}
                            </p>
                            
                            <div className={`mb-10 border-b pb-10 ${plan.popular ? 'border-slate-800' : 'border-slate-100'}`}>
                                <span className={`block text-[9px] font-bold uppercase tracking-[0.2em] mb-2 ${plan.popular ? 'text-slate-500' : 'text-slate-400'}`}>Starting Baseline</span>
                                <div className="text-5xl md:text-6xl font-black tracking-tighter">
                                    ₹{plan.price}
                                </div>
                            </div>
                            
                            <ul className="space-y-4 mb-12 flex-1">
                                {plan.features.map(f => (
                                    <li key={f} className={`flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.1em] ${plan.popular ? 'text-slate-300' : 'text-slate-600'}`}>
                                        <div className={`w-1.5 h-1.5 rounded-full shadow-sm ${plan.popular ? 'bg-blue-500 shadow-blue-500/50' : 'bg-blue-600'}`}></div>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            
                            <button
                                onClick={() => sendWhatsApp(plan.name + " Plan", "₹" + plan.price)}
                                className={`w-full py-5 rounded-full flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 px-6 group/btn ${
                                    plan.popular 
                                    ? 'bg-blue-600 text-white hover:bg-blue-500 hover:shadow-[0_8px_30px_rgb(37,99,235,0.4)]' 
                                    : 'bg-slate-100 text-slate-900 hover:bg-slate-950 hover:text-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]'
                                }`}
                            >
                                <span>Initiate {plan.name}</span>
                                <ArrowUpRight size={14} className="group-hover/btn:rotate-45 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* --- ADD-ONS SECTION - Elevated White Container --- */}
                <div className="bg-white border border-slate-200 rounded-[4rem] p-8 md:p-16 lg:p-24 relative overflow-hidden shadow-2xl shadow-blue-900/5">
                    
                    {/* Subtle Inner Accent */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16 border-b border-slate-100 pb-16 relative z-10">
                        <div className="max-w-xl">
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-[0.9] text-slate-950">
                                Modular <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Extensions.</span>
                            </h2>
                            <p className="text-slate-500 text-base font-medium leading-relaxed">
                                Specific, high-precision technical solutions designed to resolve granular operational needs without requiring full-scale restructuring.
                            </p>
                        </div>
                        
                        {/* Tab Headers - Premium Underline Style */}
                        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 w-full lg:w-auto mt-4">
                            {addOnCategories.map((cat, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveTab(i)}
                                    className={`pb-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 relative ${
                                        activeTab === i ? "text-blue-600" : "text-slate-400 hover:text-slate-900"
                                    }`}
                                >
                                    {cat.title}
                                    {activeTab === i && (
                                        <motion.div
                                            layoutId="activeTab"
                                            transition={{ duration: 0.5, ease: customEase }}
                                            className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 rounded-t-full"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="min-h-[220px] relative z-10">
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, ease: customEase }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                            >
                                {addOnCategories[activeTab].items.map((item, i) => (
                                    <div
                                        key={item.name}
                                        onClick={() => sendWhatsApp(item.name, item.price)}
                                        className="group p-8 md:p-10 bg-slate-50 border border-slate-200 rounded-3xl hover:bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 cursor-pointer flex flex-col"
                                    >
                                        <div className="flex justify-between items-start mb-10">
                                            <span className="text-[10px] font-bold text-blue-700 bg-blue-50 uppercase tracking-[0.2em] border border-blue-100 rounded-full px-4 py-2 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors duration-500">
                                                {item.price}
                                            </span>
                                            <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors duration-500">
                                                <ArrowUpRight size={14} className="text-slate-400 group-hover:text-blue-600 group-hover:rotate-45 transition-all duration-500" />
                                            </div>
                                        </div>
                                        <h4 className="text-xl font-black uppercase text-slate-950 mb-4 tracking-tight">{item.name}</h4>
                                        <p className="text-slate-500 text-xs leading-relaxed font-medium mt-auto">{item.desc}</p>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* --- FOOTER CTA - Integrated Data View --- */}
                    <div className="mt-20 pt-16 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                        <div className="flex flex-col items-center md:items-start gap-8 w-full md:w-auto">
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-slate-200 bg-slate-50 shadow-sm">
                                    <Globe size={20} className="text-blue-600" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                                        <p className="text-[9px] font-bold text-slate-950 uppercase tracking-[0.2em]">Live Operations Active</p>
                                    </div>
                                    <p className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.2em]">Global Architecture Support</p>
                                </div>
                            </div>
                            <div className="max-w-sm text-center md:text-left">
                                <h4 className="text-2xl font-black text-slate-950 uppercase tracking-tight mb-4">Custom Architecture?</h4>
                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] leading-relaxed">
                                    Required for complex systems, legacy migrations, or long-term retainer agreements.
                                </p>
                            </div>
                        </div>

                        <a
                            href="https://wa.me/916353361223"
                            className="w-full md:w-auto bg-slate-950 text-white rounded-full px-10 py-6 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-blue-600 hover:shadow-[0_8px_30px_rgb(37,99,235,0.3)] transition-all duration-300 flex items-center justify-center gap-4 group/cta"
                        >
                            Discuss Retainer <ArrowUpRight size={14} className="group-hover/cta:rotate-45 transition-transform duration-300" />
                        </a>
                    </div>
                </div>

                {/* --- TECH MARQUEE --- */}
                <div className="mt-32 md:mt-48 overflow-hidden relative border-y border-slate-200 py-12">
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />
                    
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                        className="flex gap-16 md:gap-24 whitespace-nowrap items-center"
                    >
                        {[
                            "Flutter", "Next.js", "Firebase", "PostgreSQL",
                            "Tailwind", "TypeScript", "Node.js", "Stripe", "Supabase"
                        ].concat([
                            "Flutter", "Next.js", "Firebase", "PostgreSQL",
                            "Tailwind", "TypeScript", "Node.js", "Stripe", "Supabase"
                        ]).map((tech, i) => (
                            <span key={i} className="text-lg md:text-2xl font-black text-slate-200 uppercase tracking-[0.2em] hover:text-blue-600 transition-colors duration-500 cursor-default">
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>

            <footer className="mt-32 text-center">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em]">
                    © {new Date().getFullYear()} Hiren Masaliya — Rate Card
                </p>
            </footer>
        </main>
    );
}