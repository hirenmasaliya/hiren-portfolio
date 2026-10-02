"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    ArrowUpRight, Zap, Rocket, Shield, X, CheckCircle2, 
    MessageSquare, PenTool, Code2, ShieldCheck, 
    Clock, ChevronDown, HelpCircle, Layers, Smartphone
} from "lucide-react";
import { ref, push, serverTimestamp } from 'firebase/database';
import { database } from '@/lib/firebase'; // Ensure your firebase config path is correct

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
        plans: ["25,000", "40,000", "1,20,000"],
        addons: [
            ["2,000+", "2,400+", "15,000+"],
            ["3,000+", "2,500+", "10,000+"],
            ["2,500+", "3,200+", "2,000+"]
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

// --- Plain English Page Data ---
const planMeta = [
    {
        name: "Basic App",
        desc: "Great for testing a new idea or building a simple, clean app quickly.",
        icon: <Zap size={24} />,
        features: ["3 to 5 App Pages", "Simple, Clean Look", "Secure Email Login", "Android Version Ready", "7 Days Free Help"],
        popular: false
    },
    {
        name: "Pro Business",
        desc: "A complete, ready-to-launch app designed to help your business grow.",
        popular: true,
        icon: <Rocket size={24} />,
        features: ["6 to 12 Custom Pages", "Premium Beautiful Design", "Google & Apple Login", "Push Notifications", "15 Days Free Help"],
    },
    {
        name: "Custom System",
        desc: "A powerful, large-scale app built from scratch for big ideas.",
        icon: <Shield size={24} />,
        features: ["Unlimited App Pages", "100% Unique Design", "Fast Cloud Servers", "Secure Online Payments", "30 Days Free Help"],
        popular: false
    },
];

const addOnCategoriesMeta = [
    {
        title: "Quick Fixes",
        items: [
            { name: "Fix Errors", desc: "I will find and fix crashes or broken buttons in your current app." },
            { name: "Design Update", desc: "Making your old app or website look fresh, modern, and beautiful." },
            { name: "Phone Friendly", desc: "Fixing your website so it looks perfect on mobile phone screens." },
        ]
    },
    {
        title: "Add Features",
        items: [
            { name: "Online Payments", desc: "Add secure payment methods so customers can buy from you easily." },
            { name: "Quick Login", desc: "Let users log in instantly using their Google or Apple accounts." },
            { name: "Admin Panel", desc: "A private webpage where you can manage your customers and data." },
        ]
    },
    {
        title: "Publishing",
        items: [
            { name: "Google Play Store", desc: "I will handle the confusing process of putting your app on Android." },
            { name: "Apple App Store", desc: "I will manage Apple's strict rules to get your iPhone app approved." },
            { name: "Get Found on Google", desc: "I will improve your website so it shows up higher in Google searches." },
        ]
    }
];

const processSteps = [
    { title: "1. The Plan", desc: "We get on a call to talk about your idea, who will use it, and what features you actually need.", icon: <MessageSquare size={24} /> },
    { title: "2. The Design", desc: "I draw out the screens so you can see exactly what the app will look like before I write any code.", icon: <PenTool size={24} /> },
    { title: "3. The Build", desc: "I start building the app. I will show you updates along the way so you know exactly what is happening.", icon: <Code2 size={24} /> },
    { title: "4. The Launch", desc: "We test the app to make sure there are no errors, and then I help you publish it to the world.", icon: <Rocket size={24} /> }
];

const faqs = [
    { q: "Are there any hidden fees or monthly charges?", a: "No! The prices I give you are one-time costs to build the app. You will only have to pay for your own third-party accounts (like paying Apple $99/year to have an app on their store, or paying for a website domain name), but I will guide you to the cheapest options." },
    { q: "Who owns the app after you build it?", a: "You do. 100%. Once you make the final payment, all the files, code, and rights belong completely to you. I don't own any piece of your business." },
    { q: "How do I pay you?", a: "We break it into safe steps. Usually, you pay 30% to start the project, 40% after you approve the designs and I finish building the main parts, and the final 30% only when the app is finished and ready to launch." },
    { q: "What if my idea doesn't fit these packages?", a: "No problem at all! The packages above are just examples. If you need something completely different, send me a message. We will chat, and I will give you a custom price based exactly on what you need." }
];

export default function Pricing() {
    const [currency, setCurrency] = useState<Currency>('USD');
    const [activeTab, setActiveTab] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    
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
        if (type === 'Plan') defaultProjectType = 'Full System';
        else if (type === 'Add-on') defaultProjectType = 'Mobile App';
        
        setFormData({ name: '', email: '', mobile: '', company: '', projectType: defaultProjectType, budget: '', brief: '' });
    };

    const handleCloseModal = () => setSelectedService(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
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
            setIsSuccess(true);
        } catch (error) {
            console.error("Error saving to Firebase:", error);
            alert("Connection error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="bg-[#FAFAFA] text-gray-900 min-h-screen pt-32 pb-16 selection:bg-blue-600 selection:text-white font-sans overflow-x-hidden relative">
            
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
                            <div className="flex items-center gap-3 mb-8 bg-white w-max px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                                <span className="text-gray-600 text-xs uppercase tracking-widest font-bold">
                                    Simple Pricing
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-[6rem] lg:text-[7rem] font-bold tracking-tight leading-[1] text-gray-900">
                                Clear Prices. <br className="hidden md:block" /> 
                                <span className="font-light italic text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                                    No Surprises.
                                </span>
                            </h1>
                        </div>
                        <p className="text-gray-600 text-lg md:text-xl max-w-sm font-normal pb-2 md:pb-4 leading-relaxed">
                            Honest, straightforward pricing for high-quality apps and websites. No hidden fees, just great software.
                        </p>
                    </motion.div>
                </div>

                {/* --- MAIN PLANS --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
                    {planMeta.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6, ease: customEase }}
                            className={`relative flex flex-col p-8 md:p-10 transition-all duration-500 group rounded-[2.5rem] border ${
                                plan.popular 
                                ? 'bg-slate-900 text-white border-slate-900 shadow-2xl shadow-blue-900/20 md:-translate-y-4' 
                                : 'bg-white text-gray-900 border-gray-200 hover:shadow-xl hover:shadow-gray-200/50 hover:border-gray-300'
                            }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 right-8 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-md">
                                    Most Popular
                                </div>
                            )}
                            
                            <div className="flex justify-between items-start mb-8">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-sm ${
                                    plan.popular ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'
                                }`}>
                                    {plan.icon}
                                </div>
                            </div>
                            
                            <h3 className="text-3xl font-bold tracking-tight mb-3">{plan.name}</h3>
                            <p className={`text-base font-normal leading-relaxed mb-8 min-h-[70px] ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                                {plan.desc}
                            </p>
                            
                            <div className={`mb-10 border-b pb-8 ${plan.popular ? 'border-slate-700' : 'border-gray-100'}`}>
                                <span className={`block text-[11px] uppercase tracking-widest font-bold mb-2 ${plan.popular ? 'text-blue-400' : 'text-gray-400'}`}>Starts At</span>
                                <div className="text-5xl md:text-6xl font-light tracking-tight">
                                    {activeData.symbol}{activeData.plans[i]}
                                </div>
                            </div>
                            
                            <ul className="space-y-4 mb-10 flex-1">
                                {plan.features.map(f => (
                                    <li key={f} className={`flex items-center gap-3 text-sm font-medium ${plan.popular ? 'text-gray-200' : 'text-gray-700'}`}>
                                        <CheckCircle2 size={20} className={plan.popular ? 'text-blue-400' : 'text-green-500'} />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            
                            <button
                                onClick={() => handleSelectService(`${plan.name} Plan`, `${activeData.symbol}${activeData.plans[i]}`, 'Plan')}
                                className={`w-full py-4 flex items-center justify-center gap-3 rounded-full text-sm font-bold transition-all duration-300 active:scale-95 group/btn border ${
                                    plan.popular 
                                    ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-900/20' 
                                    : 'bg-transparent text-gray-900 border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                                }`}
                            >
                                <span>Choose {plan.name}</span>
                                <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* --- VALUE PROPOSITION --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
                    <div className="p-8 rounded-[2rem] bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <ShieldCheck size={32} className="text-blue-600 mb-6" />
                        <h4 className="text-xl font-bold mb-3 text-gray-900">You Own Everything</h4>
                        <p className="text-gray-600 font-normal text-sm leading-relaxed">Once the project is finished and paid for, the code and the app belong entirely to you. No strings attached.</p>
                    </div>
                    <div className="p-8 rounded-[2rem] bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <Clock size={32} className="text-blue-600 mb-6" />
                        <h4 className="text-xl font-bold mb-3 text-gray-900">Always On Time</h4>
                        <p className="text-gray-600 font-normal text-sm leading-relaxed">I respect your time. We set clear deadlines on day one, so you know exactly when your app will be ready.</p>
                    </div>
                    <div className="p-8 rounded-[2rem] bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <Layers size={32} className="text-blue-600 mb-6" />
                        <h4 className="text-xl font-bold mb-3 text-gray-900">Built to Last</h4>
                        <p className="text-gray-600 font-normal text-sm leading-relaxed">I use the best modern tools. Your app will be fast, secure, and won't break when your business grows.</p>
                    </div>
                </div>

                {/* --- HOW IT WORKS (PROCESS) --- */}
                <div className="mb-32 md:mb-40">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">
                            How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Work Together.</span>
                        </h2>
                        <p className="text-gray-600 font-normal text-base md:text-lg">A simple, stress-free process from our first hello to your big launch.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                        {/* Connecting Line (Desktop only) */}
                        <div className="hidden md:block absolute top-10 left-12 right-12 h-[2px] bg-gray-100 z-0"></div>
                        
                        {processSteps.map((step, idx) => (
                            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                                <div className="w-20 h-20 bg-white border-2 border-gray-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:border-blue-600 group-hover:shadow-md transition-all duration-300">
                                    <div className="text-gray-400 group-hover:text-blue-600 transition-colors">
                                        {step.icon}
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h4>
                                <p className="text-gray-600 font-normal text-sm leading-relaxed px-4">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- ADD-ONS SECTION --- */}
                <div className="bg-white border border-gray-200 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 shadow-xl shadow-gray-200/40 relative overflow-hidden mb-32">
                    
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16 border-b border-gray-100 pb-12 relative z-10">
                        <div className="max-w-xl">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-[1.2] text-gray-900">
                                Need <span className="text-blue-600">Something Small?</span>
                            </h2>
                            <p className="text-gray-600 text-base font-normal leading-relaxed">
                                Don't need a whole new app? I also do small fixes, add new features, and help publish existing apps.
                            </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full lg:w-auto mt-4 bg-gray-50 p-2 rounded-2xl border border-gray-200">
                            {addOnCategoriesMeta.map((cat, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveTab(i)}
                                    className={`px-6 py-3 text-sm rounded-xl transition-all duration-300 relative font-bold ${
                                        activeTab === i ? "bg-white text-blue-600 shadow-sm border border-gray-200" : "text-gray-500 hover:text-gray-900"
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
                                            className="group p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 cursor-pointer flex flex-col active:scale-[0.98]"
                                        >
                                            <div className="flex justify-between items-start mb-8">
                                                <span className="text-xs font-bold text-gray-900 uppercase tracking-widest border border-gray-200 bg-white rounded-full px-4 py-2 group-hover:border-blue-300 group-hover:text-blue-600 transition-colors duration-300 shadow-sm">
                                                    {dynamicPrice}
                                                </span>
                                                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                                    <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                                                </div>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">{item.name}</h4>
                                            <p className="text-gray-600 font-normal text-sm leading-relaxed mt-auto">{item.desc}</p>
                                        </div>
                                    )
                                })}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* --- FAQ SECTION --- */}
                <div className="max-w-3xl mx-auto mb-32">
                    <div className="text-center mb-12">
                        <HelpCircle size={40} className="mx-auto text-blue-600 mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                            Common Questions
                        </h2>
                    </div>
                    
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => {
                            const isOpen = openFaq === idx;
                            return (
                                <div 
                                    key={idx} 
                                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white border-blue-600 shadow-md' : 'bg-white border-gray-200 hover:border-gray-300'}`}
                                >
                                    <button 
                                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                                        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                                    >
                                        <span className={`font-bold ${isOpen ? 'text-blue-600' : 'text-gray-800'}`}>{faq.q}</span>
                                        <ChevronDown size={20} className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="px-6 pb-6 text-sm text-gray-600 font-normal leading-relaxed border-t border-gray-100 pt-4">
                                                    {faq.a}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>

            {/* Footer */}
            <footer className="text-center pt-10 pb-8 mx-6 md:mx-12 border-t border-gray-200">
                <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest">
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
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md"
                    >
                        <motion.div 
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, ease: customEase }}
                            className="bg-white w-full max-w-3xl rounded-[2rem] shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]"
                        >
                            {/* Modal Header */}
                            <div className="flex justify-between items-center p-6 md:px-10 md:py-8 border-b border-gray-100 shrink-0 bg-gray-50">
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                                    Let's Get Started
                                </h3>
                                <button onClick={handleCloseModal} className="text-gray-400 hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-full">
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Modal Body / Form */}
                            <div className="p-6 md:p-10 overflow-y-auto">
                                {isSuccess ? (
                                    <div className="text-center py-16">
                                        <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-100 shadow-sm">
                                            <CheckCircle2 size={40} />
                                        </div>
                                        <h4 className="text-3xl font-bold mb-4 text-gray-900">Message Sent!</h4>
                                        <p className="text-gray-600 mb-10 font-normal max-w-sm mx-auto">Thank you for your interest in the <strong className="font-bold">{selectedService.name}</strong>. I will email or call you within 24 hours.</p>
                                        <button 
                                            onClick={handleCloseModal}
                                            className="text-sm font-bold rounded-full border border-gray-200 bg-white text-gray-900 px-8 py-3 hover:bg-gray-50 transition-colors shadow-sm active:scale-95"
                                        >
                                            Close Window
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        
                                        {/* --- LOCKED SERVICE DETAILS --- */}
                                        <div className="flex flex-col md:flex-row gap-4 bg-blue-50/50 p-5 rounded-2xl border border-blue-100">
                                            <div className="flex-1">
                                                <span className="text-[10px] uppercase tracking-widest font-bold text-blue-500 mb-1 block">You Selected</span>
                                                <p className="text-gray-900 font-bold text-lg">{selectedService.name}</p>
                                            </div>
                                            <div className="flex-1 md:text-right">
                                                <span className="text-[10px] uppercase tracking-widest font-bold text-blue-500 mb-1 block">Estimated Price</span>
                                                <p className="text-gray-900 font-bold text-lg">{selectedService.price}</p>
                                            </div>
                                        </div>

                                        {/* --- USER DETAILS --- */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="modal-name" className="text-[11px] uppercase tracking-widest font-bold text-gray-500 pl-1">Full Name</label>
                                                <input 
                                                    required type="text" id="modal-name"
                                                    value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-gray-900 font-medium"
                                                />
                                            </div>
                                            
                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="modal-email" className="text-[11px] uppercase tracking-widest font-bold text-gray-500 pl-1">Email Address</label>
                                                <input 
                                                    required type="email" id="modal-email"
                                                    value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-gray-900 font-medium"
                                                />
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="modal-mobile" className="text-[11px] uppercase tracking-widest font-bold text-gray-500 pl-1">Phone Number</label>
                                                <input 
                                                    required type="tel" id="modal-mobile"
                                                    value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-gray-900 font-medium"
                                                />
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="modal-company" className="text-[11px] uppercase tracking-widest font-bold text-gray-500 pl-1">Company Name (Optional)</label>
                                                <input 
                                                    type="text" id="modal-company"
                                                    value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-gray-900 font-medium"
                                                />
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="modal-budget" className="text-[11px] uppercase tracking-widest font-bold text-gray-500 pl-1">Your Budget</label>
                                                <select 
                                                    required id="modal-budget"
                                                    value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-gray-900 font-medium cursor-pointer"
                                                >
                                                    <option value="" disabled hidden>Select a budget...</option>
                                                    {activeData.budgets.map((tier, idx) => (
                                                        <option key={idx} value={tier}>{tier}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <label htmlFor="modal-projectType" className="text-[11px] uppercase tracking-widest font-bold text-gray-500 pl-1">What do you need?</label>
                                                <select 
                                                    required id="modal-projectType"
                                                    value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-gray-900 font-medium cursor-pointer"
                                                >
                                                    <option value="" disabled hidden>Select an option...</option>
                                                    <option value="Mobile App">Mobile App (iPhone & Android)</option>
                                                    <option value="Website">Website or Online Store</option>
                                                    <option value="Full System">App + Website together</option>
                                                    <option value="Other">I just need advice</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2 pt-2">
                                            <label htmlFor="modal-brief" className="text-[11px] uppercase tracking-widest font-bold text-gray-500 pl-1">Tell me about your idea</label>
                                            <textarea 
                                                required id="modal-brief" rows={4}
                                                value={formData.brief} onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                                                placeholder="What are you trying to build? How can I help?"
                                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-gray-900 font-medium resize-none leading-relaxed"
                                            ></textarea>
                                        </div>

                                        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-100 mt-4 pt-6">
                                            <button 
                                                disabled={isSubmitting}
                                                className="w-full md:w-auto bg-blue-600 rounded-full text-white font-bold text-sm px-10 py-4 hover:bg-blue-700 shadow-lg shadow-blue-600/30 transition-all duration-300 active:scale-95 disabled:opacity-50 flex justify-center items-center gap-2"
                                            >
                                                {isSubmitting ? 'Sending Message...' : `Send Request`}
                                            </button>
                                            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold text-center md:text-left">Your details are completely safe and private.</p>
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