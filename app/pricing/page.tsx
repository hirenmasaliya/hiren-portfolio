"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Check, ArrowRight, Zap, Shield, Rocket, 
    Globe, Smartphone, Wrench, Plus, ExternalLink
} from "lucide-react";

// --- Data ---
const plans = [
    {
        name: "Starter",
        price: "15,000",
        desc: "Ideal for validation, MVPs, and early-stage prototypes.",
        icon: <Zap size={22} />,
        color: "zinc",
        features: ["3–5 Screens", "Standard UI Kit", "Firebase Auth", "Android APK", "7 Days Support"],
    },
    {
        name: "Business",
        price: "40,000",
        desc: "Complete market-ready solution for growing startups.",
        popular: true,
        icon: <Rocket size={22} />,
        color: "blue",
        features: ["6–12 Screens", "Premium UI/UX", "Social Login", "Push Notifications", "15 Days Support"],
    },
    {
        name: "Advanced",
        price: "1,20,000",
        desc: "Enterprise-grade architecture for heavy-duty scaling.",
        icon: <Shield size={22} />,
        color: "indigo",
        features: ["Unlimited Screens", "Design System", "Microservices", "Payment Gateways", "30 Days Support"],
    },
];

const addOnCategories = [
    {
        title: "Quick Fixes",
        items: [
            { name: "Bug Fixing", price: "₹300+", desc: "Crashes, logic errors, or API bugs." },
            { name: "UI Tweaks", price: "₹300+", desc: "Colors, spacing, and layout fixes." },
            { name: "Responsive Fix", price: "₹1,500+", desc: "Mobile-friendly optimization." },
        ]
    },
    {
        title: "Feature Boost",
        items: [
            { name: "Payment Gateway", price: "₹3,000+", desc: "Razorpay, Stripe, or UPI." },
            { name: "Social Auth", price: "₹2,000+", desc: "Google/Apple/FB Login." },
            { name: "Admin Panel", price: "₹10,000+", desc: "Web dashboard for data." },
        ]
    },
    {
        title: "Deployment",
        items: [
            { name: "Play Store", price: "₹1,500+", desc: "Submission & Review help." },
            { name: "App Store", price: "₹3,000+", desc: "iOS Certificates & Xcode." },
            { name: "SEO Audit", price: "₹2,000+", desc: "Google ranking basics." },
        ]
    }
];

export default function Pricing() {
    const [activeTab, setActiveTab] = useState(0);

    const sendWhatsApp = (item: string, price: string) => {
        const msg = `Hello! I'm interested in the *${item}* service (${price}). Can we discuss the details?`;
        window.open(`https://wa.me/916353361223?text=${encodeURIComponent(msg)}`, '_blank');
    };

    return (
        <main className="bg-white text-zinc-900 min-h-screen pt-32 pb-24 selection:bg-blue-100 selection:text-blue-700">
            <div className="max-w-7xl mx-auto px-6">

                {/* --- Header --- */}
                <div className="mb-24 text-left md:text-center">
                    <motion.span
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                        className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] block mb-6"
                    >
                        Investment Strategy
                    </motion.span>
                    <h1 className="text-5xl md:text-9xl font-black tracking-tighter text-zinc-950 mb-8 leading-[0.85]">
                        Clear Rates. <br /><span className="text-zinc-400 italic">Global Scale.</span>
                    </h1>
                </div>

                {/* --- Main Plans --- */}
                <div className="grid lg:grid-cols-3 gap-8 mb-40">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative p-10 rounded-[3rem] border transition-all duration-500 hover:shadow-2xl ${
                                plan.popular 
                                ? 'border-blue-100 bg-blue-50/30 shadow-xl shadow-blue-50' 
                                : 'border-zinc-100 bg-white'
                            }`}
                        >
                            {plan.popular && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-zinc-950 text-[10px] font-black px-6 py-2 rounded-full text-white uppercase tracking-widest shadow-xl">
                                    Recommended
                                </span>
                            )}
                            
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-sm ${
                                plan.popular ? 'bg-blue-600 text-white' : 'bg-zinc-100 text-zinc-900'
                            }`}>
                                {plan.icon}
                            </div>
                            
                            <h3 className="text-2xl font-black text-zinc-950 mb-2 tracking-tighter">{plan.name}</h3>
                            <p className="text-zinc-500 text-sm mb-8 font-medium leading-relaxed">{plan.desc}</p>
                            
                            <div className="text-5xl font-black text-zinc-950 mb-10 tracking-tighter">
                                <span className="text-xl font-medium text-zinc-400 mr-2 uppercase">From</span>
                                ₹{plan.price}
                            </div>
                            
                            <ul className="space-y-4 mb-12">
                                {plan.features.map(f => (
                                    <li key={f} className="flex items-center gap-4 text-xs font-bold text-zinc-600 uppercase tracking-tight">
                                        <Check size={16} className="text-blue-600" /> {f}
                                    </li>
                                ))}
                            </ul>
                            
                            <button
                                onClick={() => sendWhatsApp(plan.name + " Plan", "₹" + plan.price)}
                                className={`w-full py-5 rounded-full font-black text-[11px] tracking-widest transition-all uppercase ${
                                    plan.popular 
                                    ? 'bg-zinc-950 text-white hover:bg-blue-600 shadow-xl shadow-zinc-200' 
                                    : 'bg-white border border-zinc-200 text-zinc-950 hover:bg-zinc-50'
                                }`}
                            >
                                Start with {plan.name}
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* --- Add-Ons Section --- */}
                <div className="bg-zinc-50 border border-zinc-100 rounded-[4rem] p-8 md:p-20">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-20">
                        <div className="max-w-xl">
                            <h2 className="text-4xl md:text-5xl font-black text-zinc-950 mb-4 tracking-tighter leading-none">Modular Extensions</h2>
                            <p className="text-zinc-500 text-lg font-medium leading-relaxed">Specific solutions for precise technical needs.</p>
                        </div>
                        <div className="flex gap-2 bg-white p-2 rounded-full border border-zinc-200 shadow-sm">
                            {addOnCategories.map((cat, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveTab(i)}
                                    className={`px-8 py-3 rounded-full text-[10px] font-black uppercase transition-all tracking-widest ${
                                        activeTab === i 
                                        ? 'bg-zinc-950 text-white shadow-lg' 
                                        : 'text-zinc-400 hover:text-zinc-950'
                                    }`}
                                >
                                    {cat.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={activeTab}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="contents"
                            >
                                {addOnCategories[activeTab].items.map((item, i) => (
                                    <div
                                        key={item.name}
                                        onClick={() => sendWhatsApp(item.name, item.price)}
                                        className="group p-10 rounded-[2.5rem] bg-white border border-zinc-100 hover:border-blue-200 transition-all cursor-pointer shadow-sm hover:shadow-xl"
                                    >
                                        <div className="flex justify-between items-start mb-6">
                                            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                                                {item.price}
                                            </span>
                                            <ExternalLink size={14} className="text-zinc-300 group-hover:text-zinc-950 transition-colors" />
                                        </div>
                                        <h4 className="text-xl font-black text-zinc-950 mb-3 tracking-tight">{item.name}</h4>
                                        <p className="text-zinc-500 text-xs leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* --- Footer CTA --- */}
                    <div className="mt-24 pt-16 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="flex flex-col items-center md:items-start gap-8">
                            <div className="flex items-center gap-6">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-12 h-12 rounded-full border-4 border-zinc-50 bg-zinc-200 flex items-center justify-center text-[10px] font-black text-zinc-400">
                                            U{i}
                                        </div>
                                    ))}
                                    <div className="w-12 h-12 rounded-full border-4 border-zinc-50 bg-zinc-950 flex items-center justify-center text-[10px] font-black text-white">
                                        +40
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                                        <p className="text-[10px] font-black text-zinc-950 uppercase tracking-[0.2em]">Live Support Available</p>
                                    </div>
                                    <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Global Operations Q2 2026</p>
                                </div>
                            </div>
                            <div className="max-w-sm">
                                <h4 className="text-2xl font-black text-zinc-950 tracking-tighter mb-2">Need a Custom Quote?</h4>
                                <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest leading-loose">
                                    For complex architectures or long-term <span className="text-blue-600">retainer agreements</span>.
                                </p>
                            </div>
                        </div>

                        <a
                            href="https://wa.me/916353361223"
                            className="bg-zinc-950 text-white px-12 py-6 rounded-full font-black text-[11px] tracking-[0.3em] hover:bg-blue-600 transition-all shadow-2xl shadow-zinc-200 flex items-center gap-4"
                        >
                            TALK TO HIREN <ArrowRight size={14} />
                        </a>
                    </div>
                </div>

                {/* --- Tech Marquee (Clean Version) --- */}
                <div className="mt-40 overflow-hidden relative">
                    <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white to-transparent z-10" />
                    
                    <div className="text-center mb-16">
                        <span className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.5em]">The Infrastructure</span>
                    </div>

                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                        className="flex gap-20 whitespace-nowrap opacity-30 grayscale hover:grayscale-0 transition-all"
                    >
                        {[
                            "Flutter", "Next.js", "Firebase", "PostgreSQL",
                            "Tailwind", "TypeScript", "Node.js", "Stripe", "Supabase"
                        ].concat([
                            "Flutter", "Next.js", "Firebase", "PostgreSQL",
                            "Tailwind", "TypeScript", "Node.js", "Stripe", "Supabase"
                        ]).map((tech, i) => (
                            <span key={i} className="text-2xl font-black text-zinc-950 uppercase tracking-[0.3em]">
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>

            <footer className="mt-40 text-center">
                <p className="text-[10px] font-bold text-zinc-300 uppercase tracking-[0.5em]">
                    © {new Date().getFullYear()} Hiren Masaliya — Rate Card v2.0
                </p>
            </footer>
        </main>
    );
}