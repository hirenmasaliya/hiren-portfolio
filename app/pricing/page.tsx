"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Check, ArrowRight, Zap, Shield, Rocket, Bug,
    Layout, Globe, Smartphone, CreditCard, Wrench,
    ChevronRight, MessageSquare, Plus, ExternalLink
} from "lucide-react";

// --- Types ---
type PlanColor = "cyan" | "sky" | "violet";

interface Plan {
    name: string;
    price: string;
    desc: string;
    icon: React.ReactNode;
    color: PlanColor;
    popular?: boolean;
    features: string[];
}

// --- Data ---
const plans: Plan[] = [
    {
        name: "Starter",
        price: "15,000",
        desc: "Ideal for validation, MVPs, and early-stage prototypes.",
        icon: <Zap size={24} />,
        color: "cyan",
        features: ["3–5 Screens", "Standard UI Kit", "Firebase Auth", "Android APK", "7 Days Support"],
    },
    {
        name: "Business",
        price: "40,000",
        desc: "Complete market-ready solution for growing startups.",
        popular: true,
        icon: <Rocket size={24} />,
        color: "sky",
        features: ["6–12 Screens", "Premium UI/UX", "Social Login", "Push Notifications", "15 Days Support"],
    },
    {
        name: "Advanced",
        price: "1,20,000",
        desc: "Enterprise-grade architecture for heavy-duty scaling.",
        icon: <Shield size={24} />,
        color: "violet",
        features: ["Unlimited Screens", "Design System", "Microservices", "Payment Gateways", "30 Days Support"],
    },
];

const addOnCategories = [
    {
        title: "Quick Fixes",
        icon: <Wrench size={18} className="text-yellow-500" />,
        items: [
            { name: "Bug Fixing", price: "₹300+", desc: "Crashes, logic errors, or API bugs." },
            { name: "UI Tweaks", price: "₹300+", desc: "Colors, spacing, and layout fixes." },
            { name: "Responsive Fix", price: "₹1,500+", desc: "Mobile-friendly optimization." },
        ]
    },
    {
        title: "Feature Boost",
        icon: <Plus size={18} className="text-cyan-500" />,
        items: [
            { name: "Payment Gateway", price: "₹3,000+", desc: "Razorpay, Stripe, or UPI." },
            { name: "Social Auth", price: "₹2,000+", desc: "Google/Apple/FB Login." },
            { name: "Admin Panel", price: "₹10,000+", desc: "Web dashboard for data." },
        ]
    },
    {
        title: "Deployment",
        icon: <Globe size={18} className="text-emerald-500" />,
        items: [
            { name: "Play Store", price: "₹1,500+", desc: "Submission & Review help." },
            { name: "App Store", price: "₹3,000+", desc: "iOS Certificates & Xcode." },
            { name: "SEO Audit", price: "₹2,000+", desc: "Google ranking basics." },
        ]
    }
];

const colorMap = {
    cyan: { accent: "text-cyan-400", border: "border-cyan-500/20", button: "bg-cyan-500 hover:bg-cyan-400" },
    sky: { accent: "text-sky-400", border: "border-sky-400/40", button: "bg-sky-500 hover:bg-sky-400 shadow-sky-500/30" },
    violet: { accent: "text-violet-400", border: "border-violet-500/20", button: "bg-violet-600 hover:bg-violet-500" }
};

export default function Pricing() {
    const [activeTab, setActiveTab] = useState(0);

    const sendWhatsApp = (item: string, price: string) => {
        const msg = `Hello! I'm interested in the *${item}* service (${price}). Can we discuss the details?`;
        window.open(`https://wa.me/916353361223?text=${encodeURIComponent(msg)}`, '_blank');
    };

    return (
        <section className="min-h-screen bg-[#030303] text-slate-200 py-24 selection:bg-cyan-500/30">
            <div className="max-w-7xl mx-auto px-6">

                {/* --- Header --- */}
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                        className="text-cyan-500 text-[10px] font-black uppercase tracking-[0.4em] block mb-4"
                    >
                        Premium Development
                    </motion.span>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-8">
                        Simple Pricing.<br /><span className="text-slate-500 italic">No Hidden Fees.</span>
                    </h1>
                </div>

                {/* --- Main Plans --- */}
                <div className="grid lg:grid-cols-3 gap-8 mb-40">
                    {plans.map((plan, i) => {
                        const style = colorMap[plan.color];
                        return (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className={`relative p-8 rounded-[2rem] border transition-all duration-500 hover:bg-white/[0.02] ${plan.popular ? `${style.border} bg-white/[0.03] scale-105 z-10 shadow-2xl shadow-sky-500/10` : 'border-white/5 bg-transparent'}`}
                            >
                                {plan.popular && (
                                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sky-500 text-[10px] font-black px-4 py-1 rounded-full text-white uppercase">Most Selected</span>
                                )}
                                <div className={`w-12 h-12 rounded-xl border ${style.border} flex items-center justify-center mb-6 ${style.accent}`}>
                                    {plan.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-slate-500 text-sm mb-6">{plan.desc}</p>
                                <div className="text-4xl font-black text-white mb-8 italic">₹{plan.price}</div>
                                <ul className="space-y-4 mb-10">
                                    {plan.features.map(f => (
                                        <li key={f} className="flex items-center gap-3 text-sm font-medium text-slate-400">
                                            <Check size={14} className={style.accent} /> {f}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => sendWhatsApp(plan.name + " Plan", "₹" + plan.price)}
                                    className={`w-full py-4 rounded-xl font-black text-xs tracking-widest text-white transition-all uppercase ${style.button}`}
                                >
                                    Select Plan
                                </button>
                            </motion.div>
                        );
                    })}
                </div>

                {/* --- Add-Ons Section --- */}
                <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-8 md:p-16">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-2 tracking-tighter">On-Demand Add-ons</h2>
                            <p className="text-slate-500 font-medium">Modular services for existing projects or specific needs.</p>
                        </div>
                        <div className="flex gap-2 bg-white/5 p-1 rounded-2xl border border-white/10">
                            {addOnCategories.map((cat, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveTab(i)}
                                    className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${activeTab === i ? 'bg-white text-black shadow-xl' : 'text-slate-500 hover:text-white'}`}
                                >
                                    {cat.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <AnimatePresence mode="wait">
                            {addOnCategories[activeTab].items.map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => sendWhatsApp(item.name, item.price)}
                                    className="group p-6 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all cursor-pointer"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-[10px] font-black text-cyan-500 uppercase tracking-widest bg-cyan-500/10 px-2 py-1 rounded-md">{item.price}</span>
                                        <ExternalLink size={14} className="text-slate-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-1">{item.name}</h4>
                                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* --- Enhanced Footer CTA --- */}
                    <div className="mt-20 relative group">
                        {/* Background Glow Effect behind the footer */}
                        <div className="absolute -inset-x-6 -inset-y-4 bg-white/[0.02] rounded-[4rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="relative pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-10">

                            {/* Left Side: Trust & Social Proof */}
                            <div className="flex flex-col items-center md:items-start gap-6">
                                <div className="flex items-center gap-4">
                                    {/* Avatar Stack with individual rings */}
                                    <div className="flex -space-x-3">
                                        {[
                                            { bg: "bg-cyan-500", txt: "A" },
                                            { bg: "bg-violet-500", txt: "B" },
                                            { bg: "bg-emerald-500", txt: "S" }
                                        ].map((user, i) => (
                                            <div
                                                key={i}
                                                className={`w-10 h-10 rounded-full border-2 border-[#030303] ${user.bg} flex items-center justify-center text-[10px] font-black text-white shadow-xl ring-1 ring-white/10`}
                                            >
                                                {user.txt}
                                            </div>
                                        ))}
                                        <div className="w-10 h-10 rounded-full border-2 border-[#030303] bg-zinc-800 flex items-center justify-center text-[10px] font-black text-white ring-1 ring-white/10">
                                            +40
                                        </div>
                                    </div>

                                    <div className="h-8 w-px bg-white/10 hidden sm:block" />

                                    <div className="text-left">
                                        <div className="flex items-center gap-2">
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                            </span>
                                            <p className="text-[10px] font-black text-white uppercase tracking-widest">Available Now</p>
                                        </div>
                                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">For Q2 2026 Projects</p>
                                    </div>
                                </div>

                                <div className="space-y-1 text-center md:text-left">
                                    <h4 className="text-lg font-bold text-white tracking-tight italic">Have a complex vision?</h4>
                                    <p className="text-[11px] text-slate-500 font-medium max-w-sm leading-relaxed uppercase tracking-widest">
                                        Get a <span className="text-cyan-400">custom architectural roadmap</span> for enterprise-scale Flutter & Next.js apps.
                                    </p>
                                </div>
                            </div>

                            {/* Right Side: The "Power" Action */}
                            <div className="relative">
                                {/* Animated Shadow behind button */}
                                <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-110" />

                                <a
                                    href="https://wa.me/916353361223"
                                    className="relative flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full font-black text-[11px] tracking-[0.25em] hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_20px_40px_rgba(255,255,255,0.1)] group/btn"
                                >
                                    TALK TO HIREN
                                    <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center group-hover/btn:translate-x-1 transition-transform">
                                        <ArrowRight size={12} className="text-white" />
                                    </div>
                                </a>

                                {/* Minimal Sub-label for CTA */}
                                <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full text-center text-[9px] font-black text-slate-600 uppercase tracking-[0.3em] whitespace-nowrap">
                                    Response time: <span className="text-slate-400 italic">&lt; 2 hours</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Enhanced Infinite Tech Marquee --- */}
                <div className="mt-40 relative w-full overflow-hidden py-10">
                    {/* 1. The Gradient Masks - Creates the professional fade-in/out effect at screen edges */}
                    {/* Adjust from-[#030303] to match your exact section background color */}
                    <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-linear-to-r from-[#030303] via-[#030303]/80 to-transparent z-20 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-linear-to-l from-[#030303] via-[#030303]/80 to-transparent z-20 pointer-events-none" />

                    {/* 2. Sub-label */}
                    <div className="text-center mb-12">
                        <span className="text-[9px] font-black text-slate-700 uppercase tracking-[0.6em] inline-block">
                            Standard Tech Ecosystem
                        </span>
                    </div>

                    {/* 3. The Animation Container */}
                    <div className="flex overflow-hidden group">
                        <motion.div
                            // This moves the container to the left infinitely
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                ease: "linear",
                                duration: 30, // Adjust this number to make it faster (20) or slower (40)
                                repeat: Infinity
                            }}
                            className="flex flex-nowrap gap-16 items-center whitespace-nowrap px-8"
                        >
                            {/* Doubling the array to create a seamless loop */}
                            {[
                                "Flutter", "Next.js", "Firebase", "Razorpay", "PostgreSQL",
                                "Tailwind CSS", "TypeScript", "Node.js", "Stripe", "App Store",
                                "Play Store", "Google Cloud", "Supabase", "Framer Motion"
                            ].concat([
                                "Flutter", "Next.js", "Firebase", "Razorpay", "PostgreSQL",
                                "Tailwind CSS", "TypeScript", "Node.js", "Stripe", "App Store",
                                "Play Store", "Google Cloud", "Supabase", "Framer Motion"
                            ]).map((tech, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-4 transition-all duration-700 opacity-20 group-hover:opacity-70 group-hover:scale-110"
                                >
                                    {/* Technical Accent: A small glowing cyan dot */}
                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)]" />

                                    <span className="text-[12px] font-black text-white uppercase tracking-[0.4em] italic leading-none">
                                        {tech}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* 4. Bottom Decorative Divider */}
                    <div className="mt-16 flex justify-center opacity-10">
                        <div className="h-[1px] w-48 bg-gradient-to-r from-transparent via-white to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    );
}