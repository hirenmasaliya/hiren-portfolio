"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Zap, Rocket, Shield, Globe, X, CheckCircle2, ArrowRight } from "lucide-react";
import { ref, push, serverTimestamp } from 'firebase/database';
import { database } from '@/lib/firebase';

const customEase = [0.25, 1, 0.5, 1] as const;

// --- Regional Pricing Data ---
const regionalData = {
    USD: {
        symbol: "$",
        plans: ["180", "480", "1,450"],
        addons: [
            ["45+", "45+", "180+"],
            ["350+", "250+", "120+"],
            ["180+", "280+", "250+"]
        ],
        budgets: ["Under $5,000", "$5,000 - $10,000", "$10,000 - $25,000", "$25,000+"]
    },
    INR: {
        symbol: "₹",
        plans: ["15,000", "40,000", "1,20,000"],
        addons: [
            ["3,000+", "3,000+", "15,000+"],
            ["30,000+", "20,000+", "10,000+"],
            ["15,000+", "23,000+", "20,000+"]
        ],
        budgets: ["Under ₹50,000", "₹50,000 - ₹2,00,000", "₹2,00,000 - ₹5,00,000", "₹5,00,000+"]
    },
    EUR: {
        symbol: "€",
        plans: ["165", "440", "1,350"],
        addons: [
            ["40+", "40+", "160+"],
            ["320+", "220+", "110+"],
            ["160+", "260+", "220+"]
        ],
        budgets: ["Under €5,000", "€5,000 - €10,000", "€10,000 - €25,000", "€25,000+"]
    },
    GBP: {
        symbol: "£",
        plans: ["140", "380", "1,150"],
        addons: [
            ["35+", "35+", "140+"],
            ["280+", "180+", "95+"],
            ["140+", "220+", "180+"]
        ],
        budgets: ["Under £4,000", "£4,000 - £8,000", "£8,000 - £20,000", "£20,000+"]
    }
};

type Currency = 'USD' | 'INR' | 'EUR' | 'GBP';

// --- Static Plan Meta ---
const planMeta = [
    {
        name: "Starter",
        desc: "Perfect for testing a new idea or launching a simple, clean app quickly.",
        icon: <Zap size={22} />,
        features: ["3–5 Core App Screens", "Standard Clean Design", "Secure Login System", "Android App (APK)", "7 Days Free Support"],
        popular: false
    },
    {
        name: "Business",
        desc: "A fully featured, launch-ready app designed to help your business grow.",
        popular: true,
        icon: <Rocket size={22} />,
        features: ["6–12 Custom Screens", "Premium User Interface", "Google/Apple Login", "Push Notifications", "15 Days Free Support"],
    },
    {
        name: "Advanced",
        desc: "A powerful, highly scalable custom system for large or fast-growing businesses.",
        icon: <Shield size={22} />,
        features: ["Unlimited Screens", "100% Custom Design", "Complex Cloud Setup", "Online Payments Setup", "30 Days Priority Support"],
        popular: false
    },
];

const addOnCategoriesMeta = [
    {
        title: "Quick Fixes",
        items: [
            { name: "Bug Fixes", desc: "Fixing crashes, errors, or broken features in your existing app." },
            { name: "Design Polish", desc: "Updating colors, spacing, and making your app look modern." },
            { name: "Mobile Optimization", desc: "Ensuring your website looks perfect on all mobile phone sizes." },
        ]
    },
    {
        title: "Extra Features",
        items: [
            { name: "Payment Gateway", desc: "Add Razorpay, Stripe, or UPI to accept payments easily." },
            { name: "Social Login", desc: "Let users sign in instantly with Google, Apple, or GitHub." },
            { name: "Admin Dashboard", desc: "A private web page to manage your app's users and data." },
        ]
    },
    {
        title: "App Launch",
        items: [
            { name: "Play Store Upload", desc: "Managing the upload and review process for Android apps." },
            { name: "App Store Upload", desc: "Handling Apple certificates and submitting your iOS app." },
            { name: "SEO Setup", desc: "Improving your website's code so it ranks better on Google." },
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
            // Save to Firebase Realtime Database
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

            // Show Success State
            setIsSuccess(true);
        } catch (error) {
            console.error("Error saving to Firebase:", error);
            alert("Connection error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="bg-[#FAFAFA] text-[#111111] min-h-screen pt-32 pb-16 selection:bg-[#111111] selection:text-[#FFFFFF] font-sans overflow-x-hidden relative">
            
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

                {/* --- HEADER --- */}
                <div className="mb-20 md:mb-28 text-left border-b border-gray-200 pb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: customEase }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-8"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-2 h-2 bg-[#111111] rounded-full"></div>
                                <span className="text-gray-500 text-xs uppercase tracking-widest font-semibold">
                                    Simple Pricing
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-[6rem] lg:text-[7rem] font-light tracking-tight leading-[1] text-[#111111]">
                                Clear Rates. <br /> <span className="font-medium text-gray-400 italic">No Surprises.</span>
                            </h1>
                        </div>
                        <p className="text-gray-500 text-lg md:text-xl max-w-sm font-light pb-2 md:pb-4 leading-relaxed">
                            Honest, straightforward pricing for high-quality apps and websites. Pick a plan that fits your needs.
                        </p>
                    </motion.div>
                </div>

                {/* --- MAIN PLANS --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32 md:mb-40">
                    {planMeta.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6, ease: customEase }}
                            className={`relative flex flex-col p-8 md:p-10 transition-all duration-500 group rounded-[2rem] border ${
                                plan.popular 
                                ? 'bg-[#111111] text-[#FFFFFF] border-[#111111] shadow-2xl md:-translate-y-4' 
                                : 'bg-[#FFFFFF] text-[#111111] border-gray-200 hover:shadow-xl hover:border-gray-300'
                            }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 right-8 bg-white text-[#111111] text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-md">
                                    Most Popular
                                </div>
                            )}
                            
                            <div className="flex justify-between items-start mb-8">
                                <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${
                                    plan.popular ? 'bg-white/10 text-white' : 'bg-gray-50 text-[#111111]'
                                }`}>
                                    {plan.icon}
                                </div>
                            </div>
                            
                            <h3 className="text-3xl font-medium tracking-tight mb-3">{plan.name}</h3>
                            <p className={`text-base font-light leading-relaxed mb-8 min-h-[70px] ${plan.popular ? 'text-gray-300' : 'text-gray-500'}`}>
                                {plan.desc}
                            </p>
                            
                            <div className={`mb-10 border-b pb-8 ${plan.popular ? 'border-white/10' : 'border-gray-100'}`}>
                                <span className={`block text-[10px] uppercase tracking-widest font-semibold mb-2 ${plan.popular ? 'text-gray-400' : 'text-gray-400'}`}>Starting At</span>
                                <div className="text-5xl md:text-6xl font-light tracking-tight">
                                    {activeData.symbol}{activeData.plans[i]}
                                </div>
                            </div>
                            
                            <ul className="space-y-4 mb-10 flex-1">
                                {plan.features.map(f => (
                                    <li key={f} className={`flex items-center gap-3 text-sm font-medium ${plan.popular ? 'text-white' : 'text-[#111111]'}`}>
                                        <CheckCircle2 size={18} className={plan.popular ? 'text-green-400' : 'text-green-500'} />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            
                            <button
                                onClick={() => handleSelectService(`${plan.name} Plan`, `${activeData.symbol}${activeData.plans[i]}`, 'Plan')}
                                className={`w-full py-4 flex items-center justify-center gap-3 rounded-full text-sm font-medium transition-all duration-300 group/btn border ${
                                    plan.popular 
                                    ? 'bg-white text-[#111111] border-white hover:bg-gray-100' 
                                    : 'bg-transparent text-[#111111] border-gray-300 hover:bg-[#111111] hover:text-white hover:border-[#111111]'
                                }`}
                            >
                                <span>Choose {plan.name}</span>
                                <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* --- ADD-ONS SECTION --- */}
                <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-16 lg:p-20 shadow-sm relative overflow-hidden">
                    
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16 border-b border-gray-100 pb-12 relative z-10">
                        <div className="max-w-xl">
                            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4 leading-[1.2] text-[#111111]">
                                Extra <span className="font-medium">Services.</span>
                            </h2>
                            <p className="text-gray-500 text-base font-light leading-relaxed">
                                Need something specific? You can add these services to any plan above, or request them completely on their own.
                            </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 w-full lg:w-auto mt-4 bg-gray-50 p-2 rounded-2xl">
                            {addOnCategoriesMeta.map((cat, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveTab(i)}
                                    className={`px-6 py-3 text-sm rounded-xl transition-all duration-300 relative font-medium ${
                                        activeTab === i ? "bg-white text-[#111111] shadow-sm" : "text-gray-500 hover:text-[#111111]"
                                    }`}
                                >
                                    {cat.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="min-h-[240px] relative z-10">
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
                                            className="group p-8 bg-[#FAFAFA] rounded-3xl border border-gray-100 hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
                                        >
                                            <div className="flex justify-between items-start mb-8">
                                                <span className="text-xs font-semibold text-[#111111] uppercase tracking-widest border border-gray-200 bg-white rounded-full px-4 py-2 group-hover:border-gray-400 transition-colors duration-300">
                                                    {dynamicPrice}
                                                </span>
                                                <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-[#111111] group-hover:border-[#111111] group-hover:text-white transition-all duration-300">
                                                    <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                                                </div>
                                            </div>
                                            <h4 className="text-xl font-medium text-[#111111] mb-2 tracking-tight">{item.name}</h4>
                                            <p className="text-gray-500 font-light text-sm leading-relaxed mt-auto">{item.desc}</p>
                                        </div>
                                    )
                                })}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* --- FOOTER CTA --- */}
                    <div className="mt-20 pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                        <div className="flex flex-col items-center md:items-start gap-6 w-full md:w-auto">
                            <div className="max-w-sm text-center md:text-left">
                                <h4 className="text-2xl font-medium text-[#111111] tracking-tight mb-2">Need Ongoing Help?</h4>
                                <p className="text-base text-gray-500 font-light leading-relaxed">
                                    Hire me on a monthly retainer to keep your apps updated, secure, and running smoothly.
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => handleSelectService('Monthly Support', 'Custom Price', 'Retainer')}
                            className="w-full md:w-auto bg-[#111111] rounded-full text-white px-8 py-4 text-sm font-medium hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-3 group/cta"
                        >
                            Let's Talk <ArrowRight size={18} className="group-hover/cta:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>
                </div>

                {/* --- TECH MARQUEE --- */}
                <div className="mt-24 md:mt-32 overflow-hidden relative border-y border-gray-200 py-10">
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10" />
                    
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                        className="flex gap-16 md:gap-24 whitespace-nowrap items-center"
                    >
                        {[
                            "Flutter", "Next.js", "Firebase", "PostgreSQL",
                            "Tailwind CSS", "TypeScript", "Node.js", "Stripe", "Supabase"
                        ].concat([
                            "Flutter", "Next.js", "Firebase", "PostgreSQL",
                            "Tailwind CSS", "TypeScript", "Node.js", "Stripe", "Supabase"
                        ]).map((tech, i) => (
                            <span key={i} className="text-2xl md:text-4xl font-medium text-gray-200 uppercase tracking-widest cursor-default">
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>

            <footer className="mt-20 text-center border-t border-gray-200 pt-10 pb-8 mx-6 md:mx-12">
                <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-widest">
                    © {new Date().getFullYear()} Hiren Masaliya — Jetpur, Gujarat
                </p>
            </footer>

            {/* --- INQUIRY MODAL (CLEAN UX) --- */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm"
                    >
                        <motion.div 
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, ease: customEase }}
                            className="bg-white w-full max-w-3xl rounded-[2rem] shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]"
                        >
                            {/* Modal Header */}
                            <div className="flex justify-between items-center p-6 md:px-10 md:py-8 border-b border-gray-100 shrink-0 bg-[#FAFAFA]">
                                <h3 className="text-2xl font-medium tracking-tight text-[#111111]">
                                    Request Details
                                </h3>
                                <button onClick={handleCloseModal} className="text-gray-400 hover:text-[#111111] transition-colors p-2 hover:bg-gray-200 rounded-full">
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Modal Body / Form */}
                            <div className="p-6 md:p-10 overflow-y-auto">
                                {isSuccess ? (
                                    <div className="text-center py-16">
                                        <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-100">
                                            <CheckCircle2 size={32} />
                                        </div>
                                        <h4 className="text-3xl font-medium mb-4 text-[#111111]">Request Sent.</h4>
                                        <p className="text-gray-500 mb-10 font-light max-w-sm mx-auto">Thank you for your interest in the <strong className="font-medium">{selectedService.name}</strong>. I will get back to you within 24 hours.</p>
                                        <button 
                                            onClick={handleCloseModal}
                                            className="text-sm font-semibold rounded-full border border-gray-200 bg-white text-[#111111] px-8 py-3 hover:bg-gray-50 transition-colors shadow-sm"
                                        >
                                            Close Window
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        
                                        {/* --- LOCKED SERVICE DETAILS --- */}
                                        <div className="flex flex-col md:flex-row gap-4 bg-blue-50/50 p-5 rounded-2xl border border-blue-100">
                                            <div className="flex-1">
                                                <span className="text-xs uppercase tracking-widest font-semibold text-blue-500 mb-1 block">You Selected</span>
                                                <p className="text-[#111111] font-medium text-lg">{selectedService.name}</p>
                                            </div>
                                            <div className="flex-1 md:text-right">
                                                <span className="text-xs uppercase tracking-widest font-semibold text-blue-500 mb-1 block">Starting Price</span>
                                                <p className="text-[#111111] font-medium text-lg">{selectedService.price}</p>
                                            </div>
                                        </div>

                                        {/* --- USER DETAILS (Modern Fixed Labels) --- */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="modal-name" className="text-xs uppercase tracking-widest font-semibold text-gray-500 pl-1">Full Name</label>
                                                <input 
                                                    required type="text" id="modal-name"
                                                    value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full bg-[#FAFAFA] border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all text-[#111111]"
                                                />
                                            </div>
                                            
                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="modal-email" className="text-xs uppercase tracking-widest font-semibold text-gray-500 pl-1">Email Address</label>
                                                <input 
                                                    required type="email" id="modal-email"
                                                    value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full bg-[#FAFAFA] border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all text-[#111111]"
                                                />
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="modal-mobile" className="text-xs uppercase tracking-widest font-semibold text-gray-500 pl-1">Phone Number</label>
                                                <input 
                                                    required type="tel" id="modal-mobile"
                                                    value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                                    className="w-full bg-[#FAFAFA] border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all text-[#111111]"
                                                />
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="modal-company" className="text-xs uppercase tracking-widest font-semibold text-gray-500 pl-1">Company (Optional)</label>
                                                <input 
                                                    type="text" id="modal-company"
                                                    value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                    className="w-full bg-[#FAFAFA] border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all text-[#111111]"
                                                />
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="modal-budget" className="text-xs uppercase tracking-widest font-semibold text-gray-500 pl-1">Your Budget</label>
                                                <select 
                                                    required id="modal-budget"
                                                    value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                                    className="w-full bg-[#FAFAFA] border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all text-[#111111] cursor-pointer"
                                                >
                                                    <option value="" disabled hidden>Select a budget...</option>
                                                    {activeData.budgets.map((tier, idx) => (
                                                        <option key={idx} value={tier}>{tier}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="modal-projectType" className="text-xs uppercase tracking-widest font-semibold text-gray-500 pl-1">Project Type</label>
                                                <select 
                                                    required id="modal-projectType"
                                                    value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                                                    className="w-full bg-[#FAFAFA] border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all text-[#111111] cursor-pointer"
                                                >
                                                    <option value="" disabled hidden>Select a type...</option>
                                                    <option value="Mobile Application">Mobile App (Flutter)</option>
                                                    <option value="Web Application">Website / Web App</option>
                                                    <option value="Full Stack System">Full-Stack System</option>
                                                    <option value="Other">Just need advice</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2 pt-2">
                                            <label htmlFor="modal-brief" className="text-xs uppercase tracking-widest font-semibold text-gray-500 pl-1">Tell me about your idea</label>
                                            <textarea 
                                                required id="modal-brief" rows={3}
                                                value={formData.brief} onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                                                placeholder="What are you trying to build?"
                                                className="w-full bg-[#FAFAFA] border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all text-[#111111] resize-none leading-relaxed"
                                            ></textarea>
                                        </div>

                                        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-100 mt-4 pt-6">
                                            <button 
                                                disabled={isSubmitting}
                                                className="w-full md:w-auto bg-[#111111] rounded-full text-white font-medium text-sm px-10 py-4 hover:bg-gray-800 transition-colors duration-300 disabled:opacity-50 flex justify-center items-center gap-2"
                                            >
                                                {isSubmitting ? 'Sending...' : `Send Request`}
                                            </button>
                                            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Your details are safe with me.</p>
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