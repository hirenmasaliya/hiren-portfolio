"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Zap, Rocket, Shield, Globe } from "lucide-react";

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
        <main className="bg-[#F8F8F8] text-[#222222] min-h-screen pt-32 pb-16 selection:bg-[#222222] selection:text-[#FFFFFF] font-sans overflow-x-hidden">
            
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">

                {/* --- HEADER --- */}
                <div className="mb-24 md:mb-32 text-left border-b border-[#222222]/10 pb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: customEase }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-8"
                    >
                        <div>
                            <div className="flex items-center gap-2 mb-8">
                                <div className="w-2 h-2 bg-[#222222] rounded-full"></div>
                                <span className="text-[#7B7B7B] text-xs uppercase tracking-widest font-medium">
                                    Investment Strategy
                                </span>
                            </div>
                            <h1 className="text-[12vw] md:text-[8rem] font-light tracking-tighter leading-[0.85] text-[#222222]">
                                Clear Rates. <br /> <span className="text-[#7B7B7B] italic">Global Scale.</span>
                            </h1>
                        </div>
                        <p className="text-[#7B7B7B] text-lg max-w-sm font-medium pb-2 md:pb-4 leading-relaxed">
                            Transparent financial structuring for high-performance engineering and architectural solutions.
                        </p>
                    </motion.div>
                </div>

                {/* --- MAIN PLANS - Minimalist Cards --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32 md:mb-48">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6, ease: customEase }}
                            className={`relative flex flex-col p-10 md:p-12 transition-all duration-500 group border ${
                                plan.popular 
                                ? 'bg-[#222222] text-[#FFFFFF] border-[#222222] md:-translate-y-4' 
                                : 'bg-[#FFFFFF] text-[#222222] border-[#222222]/10 hover:border-[#222222]/30'
                            }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#FFFFFF] text-[#222222] text-[10px] font-medium uppercase tracking-widest px-4 py-2 border border-[#222222]/10 shadow-sm">
                                    Recommended
                                </div>
                            )}
                            
                            <div className="flex justify-between items-start mb-10">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${
                                    plan.popular ? 'bg-[#FFFFFF]/10 text-[#FFFFFF]' : 'bg-[#F8F8F8] text-[#222222]'
                                }`}>
                                    {plan.icon}
                                </div>
                            </div>
                            
                            <h3 className="text-3xl font-medium tracking-tight mb-4">{plan.name}</h3>
                            <p className={`text-sm leading-relaxed mb-10 min-h-[60px] ${plan.popular ? 'text-[#F8F8F8]/70' : 'text-[#7B7B7B]'}`}>
                                {plan.desc}
                            </p>
                            
                            <div className={`mb-10 border-b pb-10 ${plan.popular ? 'border-[#FFFFFF]/10' : 'border-[#222222]/10'}`}>
                                <span className={`block text-[10px] uppercase tracking-widest mb-4 ${plan.popular ? 'text-[#7B7B7B]' : 'text-[#7B7B7B]'}`}>Starting Baseline</span>
                                <div className="text-5xl md:text-6xl font-light tracking-tighter">
                                    ₹{plan.price}
                                </div>
                            </div>
                            
                            <ul className="space-y-4 mb-12 flex-1">
                                {plan.features.map(f => (
                                    <li key={f} className={`flex items-center gap-4 text-xs font-medium tracking-wide ${plan.popular ? 'text-[#FFFFFF]' : 'text-[#222222]'}`}>
                                        <div className={`w-1.5 h-1.5 rounded-full ${plan.popular ? 'bg-[#FFFFFF]' : 'bg-[#222222]'}`}></div>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            
                            <button
                                onClick={() => sendWhatsApp(plan.name + " Plan", "₹" + plan.price)}
                                className={`w-full py-4 flex items-center justify-center gap-3 text-sm font-medium transition-all duration-300 group/btn border ${
                                    plan.popular 
                                    ? 'bg-[#FFFFFF] text-[#222222] border-[#FFFFFF] hover:bg-transparent hover:text-[#FFFFFF]' 
                                    : 'bg-transparent text-[#222222] border-[#222222] hover:bg-[#222222] hover:text-[#FFFFFF]'
                                }`}
                            >
                                <span>Initiate {plan.name}</span>
                                <ArrowUpRight size={16} className="group-hover/btn:rotate-45 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* --- ADD-ONS SECTION - Minimal Container --- */}
                <div className="bg-[#FFFFFF] border border-[#222222]/10 p-10 md:p-16 lg:p-24 relative overflow-hidden">
                    
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16 border-b border-[#222222]/10 pb-16 relative z-10">
                        <div className="max-w-xl">
                            <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6 leading-[1.1] text-[#222222]">
                                Modular <br/> <span className="text-[#7B7B7B] italic">Extensions.</span>
                            </h2>
                            <p className="text-[#7B7B7B] text-base font-medium leading-relaxed">
                                Specific, high-precision technical solutions designed to resolve granular operational needs without requiring full-scale restructuring.
                            </p>
                        </div>
                        
                        {/* Tab Headers */}
                        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 w-full lg:w-auto mt-4">
                            {addOnCategories.map((cat, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveTab(i)}
                                    className={`pb-3 text-xs uppercase tracking-widest transition-colors duration-300 relative font-medium ${
                                        activeTab === i ? "text-[#222222]" : "text-[#7B7B7B] hover:text-[#222222]"
                                    }`}
                                >
                                    {cat.title}
                                    {activeTab === i && (
                                        <motion.div
                                            layoutId="activeTab"
                                            transition={{ duration: 0.5, ease: customEase }}
                                            className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#222222]"
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
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4, ease: customEase }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                            >
                                {addOnCategories[activeTab].items.map((item, i) => (
                                    <div
                                        key={item.name}
                                        onClick={() => sendWhatsApp(item.name, item.price)}
                                        className="group p-8 md:p-10 bg-[#F8F8F8] border border-[#222222]/5 hover:border-[#222222]/20 hover:bg-[#FFFFFF] transition-all duration-500 cursor-pointer flex flex-col"
                                    >
                                        <div className="flex justify-between items-start mb-12">
                                            <span className="text-[10px] font-medium text-[#222222] uppercase tracking-widest border border-[#222222]/10 bg-[#FFFFFF] rounded-full px-4 py-2 group-hover:border-[#222222] transition-colors duration-500">
                                                {item.price}
                                            </span>
                                            <div className="w-10 h-10 rounded-full flex items-center justify-center text-[#7B7B7B] group-hover:text-[#222222] transition-colors duration-500">
                                                <ArrowUpRight size={16} className="group-hover:rotate-45 transition-all duration-500" />
                                            </div>
                                        </div>
                                        <h4 className="text-xl font-medium text-[#222222] mb-4 tracking-tight">{item.name}</h4>
                                        <p className="text-[#7B7B7B] text-sm leading-relaxed mt-auto">{item.desc}</p>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* --- FOOTER CTA - Clean Architecture --- */}
                    <div className="mt-20 pt-16 border-t border-[#222222]/10 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                        <div className="flex flex-col items-center md:items-start gap-8 w-full md:w-auto">
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#F8F8F8] text-[#222222]">
                                    <Globe size={20} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-1.5">
                                        <span className="h-2 w-2 rounded-full bg-[#222222] animate-pulse"></span>
                                        <p className="text-[10px] font-medium text-[#222222] uppercase tracking-widest">Live Operations Active</p>
                                    </div>
                                    <p className="text-[10px] text-[#7B7B7B] uppercase tracking-widest">Global Architecture Support</p>
                                </div>
                            </div>
                            <div className="max-w-sm text-center md:text-left">
                                <h4 className="text-2xl font-light text-[#222222] tracking-tight mb-4">Custom Architecture?</h4>
                                <p className="text-sm text-[#7B7B7B] leading-relaxed">
                                    Required for complex systems, legacy migrations, or long-term retainer agreements.
                                </p>
                            </div>
                        </div>

                        <a
                            href="https://wa.me/916353361223"
                            className="w-full md:w-auto bg-[#222222] text-[#FFFFFF] px-10 py-5 text-sm font-medium hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-3 group/cta"
                        >
                            Discuss Retainer <ArrowUpRight size={16} className="group-hover/cta:rotate-45 transition-transform duration-300" />
                        </a>
                    </div>
                </div>

                {/* --- TECH MARQUEE --- */}
                <div className="mt-32 md:mt-48 overflow-hidden relative border-y border-[#222222]/10 py-12">
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F8F8F8] to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F8F8F8] to-transparent z-10" />
                    
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
                            <span key={i} className="text-2xl md:text-4xl font-light text-[#222222]/10 uppercase tracking-widest hover:text-[#222222]/80 transition-colors duration-500 cursor-default">
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>

            <footer className="mt-24 text-center border-t border-[#222222]/10 pt-12 pb-8 mx-6 md:mx-12">
                <p className="text-[10px] text-[#7B7B7B] uppercase tracking-widest">
                    © {new Date().getFullYear()} Hiren Masaliya — Rate Card
                </p>
            </footer>
        </main>
    );
}