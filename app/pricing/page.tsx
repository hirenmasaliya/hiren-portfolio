"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Zap, Rocket, Shield, Globe, X, CheckCircle2 } from "lucide-react";
import { ref, push, serverTimestamp } from 'firebase/database';
import { database } from '@/lib/firebase';

const customEase = [0.25, 1, 0.5, 1] as const;

// --- Regional Pricing Data ---
const regionalData = {
    USD: {
        symbol: "$",
        plans: ["180", "480", "1,450"],
        addons: [
            ["4+", "4+", "18+"],
            ["35+", "25+", "120+"],
            ["18+", "28+", "25+"]
        ],
        budgets: ["Under $5,000", "$5,000 - $10,000", "$10,000 - $25,000", "$25,000+"]
    },
    INR: {
        symbol: "₹",
        plans: ["15,000", "40,000", "1,20,000"],
        addons: [
            ["300+", "300+", "1,500+"],
            ["3,000+", "2,000+", "10,000+"],
            ["1,500+", "2,300+", "2,000+"]
        ],
        budgets: ["Under ₹50,000", "₹50,000 - ₹2,00,000", "₹2,00,000 - ₹5,00,000", "₹5,00,000+"]
    },
    EUR: {
        symbol: "€",
        plans: ["165", "440", "1,350"],
        addons: [
            ["4+", "4+", "16+"],
            ["32+", "22+", "110+"],
            ["16+", "26+", "22+"]
        ],
        budgets: ["Under €5,000", "€5,000 - €10,000", "€10,000 - €25,000", "€25,000+"]
    },
    GBP: {
        symbol: "£",
        plans: ["140", "380", "1,150"],
        addons: [
            ["3+", "3+", "14+"],
            ["28+", "18+", "95+"],
            ["14+", "22+", "18+"]
        ],
        budgets: ["Under £4,000", "£4,000 - £8,000", "£8,000 - £20,000", "£20,000+"]
    }
};

type Currency = 'USD' | 'INR' | 'EUR' | 'GBP';

// --- Static Plan Meta ---
const planMeta = [
    {
        name: "Starter",
        desc: "Ideal for rapid validation, MVP deployment, and early-stage technical prototyping.",
        icon: <Zap size={20} />,
        features: ["3–5 Core Screens", "Standard UI Architecture", "Firebase Auth Integration", "Android APK Generation", "7 Days Priority Support"],
        popular: false
    },
    {
        name: "Business",
        desc: "Complete market-ready solution architected for growing startups and user acquisition.",
        popular: true,
        icon: <Rocket size={20} />,
        features: ["6–12 Custom Screens", "Premium UI/UX Design System", "OAuth/Social Logins", "FCM Push Notifications", "15 Days Priority Support"],
    },
    {
        name: "Advanced",
        desc: "Enterprise-grade architecture for heavy-duty scaling and complex data operations.",
        icon: <Shield size={20} />,
        features: ["Unlimited App Screens", "Bespoke Design System", "Microservices Architecture", "Razorpay/Stripe Gateway", "30 Days Retainer Support"],
        popular: false
    },
];

const addOnCategoriesMeta = [
    {
        title: "Quick Fixes",
        items: [
            { name: "Bug Resolution", desc: "Crashes, logical errors, or API failure debugging." },
            { name: "UI Refinement", desc: "Color palettes, spacing, and strict layout fixes." },
            { name: "Responsive Fix", desc: "Mobile-friendly optimization across all viewports." },
        ]
    },
    {
        title: "Feature Boost",
        items: [
            { name: "Payment Gateway", desc: "Razorpay, Stripe, or direct UPI integrations." },
            { name: "Social Auth", desc: "Google, Apple, or GitHub secure OAuth login." },
            { name: "Admin Console", desc: "Secure web dashboard for direct data manipulation." },
        ]
    },
    {
        title: "Deployment",
        items: [
            { name: "Play Store", desc: "Google Console submission and review management." },
            { name: "App Store", desc: "iOS Certificates, Provisioning, and Xcode uploads." },
            { name: "SEO Audit", desc: "Technical structural audit for Google ranking algorithms." },
        ]
    }
];

export default function Pricing() {
    const [currency, setCurrency] = useState<Currency>('USD');
    const [activeTab, setActiveTab] = useState(0);
    
    // Modal & Form State
    const [selectedService, setSelectedService] = useState<{ name: string, price: string, type: string } | null>(null);
    const [formData, setFormData] = useState({ 
        name: '', email: '', mobile: '', company: '', projectType: '', budget: '', brief: '' 
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Auto-detect currency
    useEffect(() => {
        const detectCurrency = async () => {
            try {
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();
                if (['INR', 'EUR', 'GBP'].includes(data.currency)) {
                    setCurrency(data.currency as Currency);
                }
            } catch (error) {
                console.warn("Could not detect location, defaulting to USD.");
            }
        };
        detectCurrency();
    }, []);

    const activeData = regionalData[currency];

    // Open Modal
    const handleSelectService = (name: string, price: string, type: string) => {
        setSelectedService({ name, price, type });
        setIsSuccess(false);
        
        let defaultProjectType = '';
        if (type === 'Plan') {
            defaultProjectType = 'Full Stack System';
        }
        
        setFormData({ name: '', email: '', mobile: '', company: '', projectType: defaultProjectType, budget: '', brief: '' });
    };

    const handleCloseModal = () => setSelectedService(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // 1. Save to Firebase Realtime Database
            const inquiriesRef = ref(database, 'pricing_inquiries');
            await push(inquiriesRef, {
                serviceName: selectedService?.name,
                servicePrice: selectedService?.price,
                serviceType: selectedService?.type,
                name: formData.name,
                email: formData.email,
                mobile: formData.mobile,
                company: formData.company || 'N/A',
                projectType: formData.projectType,
                budget: formData.budget || 'Not specified',
                brief: formData.brief,
                timestamp: serverTimestamp(),
            });

            // 2. Show Success State
            setIsSuccess(true);
        } catch (error) {
            console.error("Error saving to Firebase:", error);
            alert("Connection error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="bg-[#F8F8F8] text-[#222222] min-h-screen pt-32 pb-16 selection:bg-[#222222] selection:text-[#FFFFFF] font-sans overflow-x-hidden relative">
            
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

                {/* --- MAIN PLANS --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32 md:mb-48">
                    {planMeta.map((plan, i) => (
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
                                    {activeData.symbol}{activeData.plans[i]}
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
                                onClick={() => handleSelectService(`${plan.name} Plan`, `${activeData.symbol}${activeData.plans[i]}`, 'Plan')}
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

                {/* --- ADD-ONS SECTION --- */}
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
                        
                        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 w-full lg:w-auto mt-4">
                            {addOnCategoriesMeta.map((cat, i) => (
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
                                {addOnCategoriesMeta[activeTab].items.map((item, i) => {
                                    const dynamicPrice = `${activeData.symbol}${activeData.addons[activeTab][i]}`;
                                    
                                    return (
                                        <div
                                            key={item.name}
                                            onClick={() => handleSelectService(item.name, dynamicPrice, 'Add-on')}
                                            className="group p-8 md:p-10 bg-[#F8F8F8] border border-[#222222]/5 hover:border-[#222222]/20 hover:bg-[#FFFFFF] transition-all duration-500 cursor-pointer flex flex-col"
                                        >
                                            <div className="flex justify-between items-start mb-12">
                                                <span className="text-[10px] font-medium text-[#222222] uppercase tracking-widest border border-[#222222]/10 bg-[#FFFFFF] rounded-full px-4 py-2 group-hover:border-[#222222] transition-colors duration-500">
                                                    {dynamicPrice}
                                                </span>
                                                <div className="w-10 h-10 rounded-full flex items-center justify-center text-[#7B7B7B] group-hover:text-[#222222] transition-colors duration-500">
                                                    <ArrowUpRight size={16} className="group-hover:rotate-45 transition-all duration-500" />
                                                </div>
                                            </div>
                                            <h4 className="text-xl font-medium text-[#222222] mb-4 tracking-tight">{item.name}</h4>
                                            <p className="text-[#7B7B7B] text-sm leading-relaxed mt-auto">{item.desc}</p>
                                        </div>
                                    )
                                })}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* --- FOOTER CTA --- */}
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

                        <button
                            onClick={() => handleSelectService('Custom Retainer', 'Custom Price', 'Custom Architecture')}
                            className="w-full md:w-auto bg-[#222222] text-[#FFFFFF] px-10 py-5 text-sm font-medium hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-3 group/cta"
                        >
                            Discuss Retainer <ArrowUpRight size={16} className="group-hover/cta:rotate-45 transition-transform duration-300" />
                        </button>
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

            {/* --- INQUIRY MODAL (MATCHING CONTACT FORM) --- */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#F8F8F8]/90 backdrop-blur-sm"
                    >
                        <motion.div 
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, ease: customEase }}
                            className="bg-[#FFFFFF] w-full max-w-4xl border border-[#222222]/10 shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]"
                        >
                            {/* Modal Header */}
                            <div className="flex justify-between items-center p-6 md:p-10 border-b border-[#222222]/10 shrink-0">
                                <h3 className="text-2xl font-light tracking-tight text-[#222222]">
                                    Complete Inquiry
                                </h3>
                                <button onClick={handleCloseModal} className="text-[#7B7B7B] hover:text-[#222222] transition-colors p-2 hover:bg-[#F8F8F8] rounded-full">
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Modal Body / Form */}
                            <div className="p-6 md:p-10 overflow-y-auto">
                                {isSuccess ? (
                                    <div className="text-center py-16">
                                        <div className="w-16 h-16 bg-[#F8F8F8] text-[#222222] rounded-full flex items-center justify-center mx-auto mb-8">
                                            <CheckCircle2 size={24} />
                                        </div>
                                        <h4 className="text-3xl font-light mb-4">Request Logged.</h4>
                                        <p className="text-[#7B7B7B] mb-12">I have received your inquiry for the {selectedService.name}. I will contact you shortly.</p>
                                        <button 
                                            onClick={handleCloseModal}
                                            className="text-[10px] font-medium uppercase tracking-widest border border-[#222222] bg-transparent text-[#222222] px-8 py-4 hover:bg-[#222222] hover:text-[#FFFFFF] transition-colors"
                                        >
                                            Return to Pricing
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-10">
                                        
                                        {/* --- LOCKED SERVICE DETAILS --- */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 bg-[#F8F8F8] p-6 border border-[#222222]/5">
                                            <div className="relative group/input">
                                                <input 
                                                    readOnly type="text" id="locked-service" 
                                                    value={selectedService.name} 
                                                    className="peer w-full bg-transparent border-b border-[#222222]/10 py-4 focus:outline-none text-[#7B7B7B] cursor-not-allowed rounded-none font-medium"
                                                />
                                                <label htmlFor="locked-service" className="absolute left-0 -top-6 text-[#222222] text-[10px] uppercase tracking-widest">
                                                    Selected {selectedService.type}
                                                </label>
                                            </div>
                                            
                                            <div className="relative group/input">
                                                <input 
                                                    readOnly type="text" id="locked-price" 
                                                    value={selectedService.price} 
                                                    className="peer w-full bg-transparent border-b border-[#222222]/10 py-4 focus:outline-none text-[#7B7B7B] cursor-not-allowed rounded-none font-medium"
                                                />
                                                <label htmlFor="locked-price" className="absolute left-0 -top-6 text-[#222222] text-[10px] uppercase tracking-widest">
                                                    Base Price
                                                </label>
                                            </div>
                                        </div>

                                        {/* --- USER DETAILS --- */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mt-4">
                                            <div className="relative group/input">
                                                <input 
                                                    required type="text" id="modal-name" placeholder=" "
                                                    value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="peer w-full bg-transparent border-b border-[#222222]/20 py-4 focus:outline-none focus:border-[#222222] transition-colors font-medium text-[#222222] placeholder-transparent rounded-none"
                                                />
                                                <label htmlFor="modal-name" className="absolute left-0 top-4 text-xs uppercase tracking-widest text-[#7B7B7B] transition-all peer-focus:-top-6 peer-focus:text-[#222222] peer-focus:text-[10px] peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-[#222222] peer-not-placeholder-shown:text-[10px]">
                                                    Full Name
                                                </label>
                                            </div>
                                            
                                            <div className="relative group/input">
                                                <input 
                                                    required type="email" id="modal-email" placeholder=" "
                                                    value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="peer w-full bg-transparent border-b border-[#222222]/20 py-4 focus:outline-none focus:border-[#222222] transition-colors font-medium text-[#222222] placeholder-transparent rounded-none"
                                                />
                                                <label htmlFor="modal-email" className="absolute left-0 top-4 text-xs uppercase tracking-widest text-[#7B7B7B] transition-all peer-focus:-top-6 peer-focus:text-[#222222] peer-focus:text-[10px] peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-[#222222] peer-not-placeholder-shown:text-[10px]">
                                                    Work Email
                                                </label>
                                            </div>

                                            <div className="relative group/input">
                                                <input 
                                                    required type="tel" id="modal-mobile" placeholder=" "
                                                    value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                                    className="peer w-full bg-transparent border-b border-[#222222]/20 py-4 focus:outline-none focus:border-[#222222] transition-colors font-medium text-[#222222] placeholder-transparent rounded-none"
                                                />
                                                <label htmlFor="modal-mobile" className="absolute left-0 top-4 text-xs uppercase tracking-widest text-[#7B7B7B] transition-all peer-focus:-top-6 peer-focus:text-[#222222] peer-focus:text-[10px] peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-[#222222] peer-not-placeholder-shown:text-[10px]">
                                                    Mobile Number
                                                </label>
                                            </div>

                                            <div className="relative group/input">
                                                <input 
                                                    type="text" id="modal-company" placeholder=" "
                                                    value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                    className="peer w-full bg-transparent border-b border-[#222222]/20 py-4 focus:outline-none focus:border-[#222222] transition-colors font-medium text-[#222222] placeholder-transparent rounded-none"
                                                />
                                                <label htmlFor="modal-company" className="absolute left-0 top-4 text-xs uppercase tracking-widest text-[#7B7B7B] transition-all peer-focus:-top-6 peer-focus:text-[#222222] peer-focus:text-[10px] peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-[#222222] peer-not-placeholder-shown:text-[10px]">
                                                    Company (Optional)
                                                </label>
                                            </div>

                                            <div className="relative group/input">
                                                <select 
                                                    required id="modal-budget"
                                                    value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                                    className="peer w-full bg-transparent border-b border-[#222222]/20 py-4 focus:outline-none focus:border-[#222222] transition-colors font-medium text-[#222222] appearance-none rounded-none cursor-pointer"
                                                >
                                                    <option value="" disabled hidden></option>
                                                    {activeData.budgets.map((tier, idx) => (
                                                        <option key={idx} value={tier}>{tier}</option>
                                                    ))}
                                                </select>
                                                <label htmlFor="modal-budget" className={`absolute left-0 transition-all text-[#7B7B7B] uppercase tracking-widest pointer-events-none ${formData.budget ? '-top-6 text-[#222222] text-[10px]' : 'top-4 text-xs peer-focus:-top-6 peer-focus:text-[#222222] peer-focus:text-[10px]'}`}>
                                                    Budget Range
                                                </label>
                                            </div>

                                            <div className="relative group/input">
                                                <select 
                                                    required id="modal-projectType"
                                                    value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                                                    className="peer w-full bg-transparent border-b border-[#222222]/20 py-4 focus:outline-none focus:border-[#222222] transition-colors font-medium text-[#222222] appearance-none rounded-none cursor-pointer"
                                                >
                                                    <option value="" disabled hidden></option>
                                                    <option value="Web Application">Web App (React/Next)</option>
                                                    <option value="Mobile Application">Mobile App (Flutter)</option>
                                                    <option value="AI Integration">AI Integration</option>
                                                    <option value="Full Stack System">Full-Stack System</option>
                                                    <option value="Other">Other Consultation</option>
                                                </select>
                                                <label htmlFor="modal-projectType" className={`absolute left-0 transition-all text-[#7B7B7B] uppercase tracking-widest pointer-events-none ${formData.projectType ? '-top-6 text-[#222222] text-[10px]' : 'top-4 text-xs peer-focus:-top-6 peer-focus:text-[#222222] peer-focus:text-[10px]'}`}>
                                                    Primary Project Type
                                                </label>
                                            </div>
                                        </div>

                                        <div className="relative group/input">
                                            <textarea 
                                                required id="modal-brief" rows={3} placeholder=" "
                                                value={formData.brief} onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                                                className="peer w-full bg-transparent border-b border-[#222222]/20 py-4 focus:outline-none focus:border-[#222222] transition-colors font-medium text-[#222222] placeholder-transparent resize-none leading-relaxed rounded-none"
                                            ></textarea>
                                            <label htmlFor="modal-brief" className="absolute left-0 top-4 text-xs uppercase tracking-widest text-[#7B7B7B] transition-all peer-focus:-top-6 peer-focus:text-[#222222] peer-focus:text-[10px] peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-[#222222] peer-not-placeholder-shown:text-[10px]">
                                                Project Details & Scope
                                            </label>
                                        </div>

                                        <div className="pt-4">
                                            <button 
                                                disabled={isSubmitting}
                                                className="w-full bg-[#222222] text-[#FFFFFF] font-medium text-sm px-10 py-5 hover:bg-[#222222]/90 transition-colors duration-300 disabled:opacity-50 flex justify-center items-center gap-2"
                                            >
                                                {isSubmitting ? 'Transmitting...' : `Submit Request`}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}