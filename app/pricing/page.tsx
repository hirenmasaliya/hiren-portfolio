"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    ArrowUpRight, Shield, CheckCircle, 
    MessageSquare, Edit, Code, Rocket, 
    Clock, Layers, ChevronDown, HelpCircle,
    X, ArrowRight
} from "lucide-react"; 
import { ref, push, serverTimestamp } from 'firebase/database';
import { database } from '@/lib/firebase'; // Ensure your firebase config path is correct

// Google Material 3 Emphasized Decelerate easing
const materialEase = [0.2, 0, 0, 1] as const;

// --- Regional Pricing Data ---
const regionalData = {
    USD: {
        symbol: "$",
        servicesPrices: [
            ["45+", "45+", "180+"],
            ["350+", "250+", "120+"],
            ["180+", "280+", "250+"]
        ],
        budgets: ["Under $5,000", "$5,000 - $10,000", "$10,000 - $25,000", "$25,000+"]
    },
    INR: {
        symbol: "₹",
        servicesPrices: [
            ["2,000+", "2,400+", "15,000+"],
            ["3,000+", "2,500+", "10,000+"],
            ["2,500+", "3,200+", "2,000+"]
        ],
        budgets: ["Under ₹50,000", "₹50,000 - ₹2,00,000", "₹2,00,000 - ₹5,00,000", "₹5,00,000+"]
    },
    EUR: {
        symbol: "€",
        servicesPrices: [
            ["40+", "40+", "160+"],
            ["320+", "220+", "110+"],
            ["160+", "260+", "220+"]
        ],
        budgets: ["Under €5,000", "€5,000 - €10,000", "€10,000 - €25,000", "€25,000+"]
    },
    GBP: {
        symbol: "£",
        servicesPrices: [
            ["35+", "35+", "140+"],
            ["280+", "180+", "95+"],
            ["140+", "220+", "180+"]
        ],
        budgets: ["Under £4,000", "£4,000 - £8,000", "£8,000 - £20,000", "£20,000+"]
    }
};

type Currency = 'USD' | 'INR' | 'EUR' | 'GBP';

// --- Plain English Page Data ---
const serviceCategoriesMeta = [
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
    { title: "The Plan", desc: "We discuss your idea, target audience, and the features you actually need.", icon: <MessageSquare size={24} /> },
    { title: "The Design", desc: "I draw out the screens so you can see exactly what the app will look like.", icon: <Edit size={24} /> },
    { title: "The Build", desc: "I build the software, providing regular updates along the way.", icon: <Code size={24} /> },
    { title: "The Launch", desc: "We test everything thoroughly, and then I help you publish it to the world.", icon: <Rocket size={24} /> }
];

const faqs = [
    { q: "Are there any hidden fees or monthly charges?", a: "No! The prices I give you are one-time costs for my development services. You will only have to pay for your own third-party accounts (like Apple Developer fees or domain hosting), and I will guide you to the best options." },
    { q: "Who owns the code after you build it?", a: "You do. 100%. Once you make the final payment, all files, source code, and intellectual property rights belong completely to you." },
    { q: "How are payments structured?", a: "We break it into safe milestones. Usually: 30% upfront to start, 40% after design approval and core development, and the final 30% only when the project is finished and ready to launch." },
    { q: "What if my request doesn't fit these categories?", a: "No problem! The services listed are just common requests. If you need something completely custom, send me a message and I will provide a tailored quote." }
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
        setFormData({ name: '', email: '', mobile: '', company: '', projectType: 'Mobile App', budget: '', brief: '' });
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

    const containerVars = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVars = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: materialEase } }
    };

    return (
        <main className="bg-[#F8F9FA] text-[#1F1F1F] min-h-screen pt-24 md:pt-32 pb-16 selection:bg-[#D3E3FD] selection:text-[#041E49] font-sans relative">
            
            <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">

                {/* =====================================================
                    1. HEADER - Material Display Typography
                ====================================================== */}
                <div className="mb-16 md:mb-24">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVars}
                        className="max-w-3xl"
                    >
                        {/* M3 Tertiary Container Chip */}
                        <motion.div variants={itemVars} className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8DEF8] text-[#1D192B] rounded-full text-sm font-medium mb-6">
                            <span>Services & Pricing</span>
                        </motion.div>
                        
                        {/* M3 Display Large */}
                        <motion.h1 variants={itemVars} className="text-[44px] md:text-[57px] lg:text-[64px] font-normal tracking-[-0.25px] leading-[1.1] text-[#1F1F1F] mb-6">
                            Clear Prices.
                            <span className="text-[#0A56D1]">No Surprises.</span>
                        </motion.h1>
                        
                        {/* M3 Body Large */}
                        <motion.p variants={itemVars} className="text-[#444746] text-[18px] md:text-[20px] font-normal leading-[32px]">
                            Honest, straightforward pricing for high-quality development services. Request a specific service or get a custom quote for your next big project.
                        </motion.p>
                    </motion.div>
                </div>

                {/* =====================================================
                    2. SERVICES SECTION (Previously Add-ons)
                ====================================================== */}
                <div className="mb-24 md:mb-32">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
                        <div>
                            <h2 className="text-[32px] md:text-[40px] font-normal tracking-tight leading-[1.2] text-[#1F1F1F]">
                                Specialized Services
                            </h2>
                            <p className="text-[#444746] text-[18px] font-normal leading-[28px] mt-2 max-w-xl">
                                Need specific features, design updates, or publishing help? Select a category below.
                            </p>
                        </div>
                    </div>

                    {/* Material Filter Chips */}
                    <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide items-center mb-6">
                        {serviceCategoriesMeta.map((cat, i) => {
                            const isSelected = activeTab === i;
                            return (
                                <button
                                    key={i}
                                    onClick={() => setActiveTab(i)}
                                    className={`
                                        flex items-center gap-2 h-9 px-4 rounded-lg text-sm font-medium transition-all shrink-0
                                        ${
                                            isSelected
                                            ? "bg-[#C2E7FF] text-[#001D35] hover:bg-[#B1DDF6]" // Primary Container
                                            : "bg-transparent border border-[#747775] text-[#444746] hover:bg-[#1F1F1F]/5" // Outlined Chip
                                        }
                                    `}
                                >
                                    {cat.title}
                                </button>
                            );
                        })}
                    </div>

                    <div className="min-h-[200px]">
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3, ease: materialEase }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                            >
                                {serviceCategoriesMeta[activeTab].items.map((item, i) => {
                                    const dynamicPrice = `${activeData.symbol}${activeData.servicesPrices[activeTab][i]}`;
                                    
                                    return (
                                        <div
                                            key={item.name}
                                            onClick={() => handleSelectService(item.name, dynamicPrice, 'Service')}
                                            className="group p-6 bg-[#FAFDFC] border border-[#747775] rounded-[24px] hover:bg-[#F0F4F9] transition-colors duration-200 cursor-pointer flex flex-col h-full"
                                        >
                                            <div className="flex justify-between items-start mb-6">
                                                <span className="text-sm font-medium text-[#0A56D1] bg-[#D3E3FD] rounded-full px-3 py-1">
                                                    {dynamicPrice}
                                                </span>
                                                <div className="w-10 h-10 rounded-full flex items-center justify-center text-[#747775] group-hover:bg-[#C2E7FF] group-hover:text-[#001D35] transition-colors">
                                                    <ArrowUpRight size={20} />
                                                </div>
                                            </div>
                                            <h3 className="text-[22px] font-normal text-[#1F1F1F] mb-3 leading-tight">{item.name}</h3>
                                            <p className="text-[#444746] font-normal text-sm leading-[24px] mt-auto">{item.desc}</p>
                                        </div>
                                    )
                                })}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* =====================================================
                    3. VALUE PROPOSITION - Material Outlined Cards
                ====================================================== */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 md:mb-32">
                    <div className="p-8 rounded-[24px] bg-[#FAFDFC] border border-[#747775]">
                        <div className="w-12 h-12 bg-[#D3E3FD] text-[#041E49] rounded-full flex items-center justify-center mb-6">
                            <Shield size={24} />
                        </div>
                        <h4 className="text-[22px] font-normal mb-3 text-[#1F1F1F]">You Own Everything</h4>
                        <p className="text-[#444746] font-normal text-sm leading-[24px]">Once the project is finished and paid for, the source code and the app belong entirely to you.</p>
                    </div>
                    <div className="p-8 rounded-[24px] bg-[#FAFDFC] border border-[#747775]">
                        <div className="w-12 h-12 bg-[#D3E3FD] text-[#041E49] rounded-full flex items-center justify-center mb-6">
                            <Clock size={24} />
                        </div>
                        <h4 className="text-[22px] font-normal mb-3 text-[#1F1F1F]">Always On Time</h4>
                        <p className="text-[#444746] font-normal text-sm leading-[24px]">I respect your time. We set clear milestones and deadlines on day one, so you know exactly what to expect.</p>
                    </div>
                    <div className="p-8 rounded-[24px] bg-[#FAFDFC] border border-[#747775]">
                        <div className="w-12 h-12 bg-[#D3E3FD] text-[#041E49] rounded-full flex items-center justify-center mb-6">
                            <Layers size={24} />
                        </div>
                        <h4 className="text-[22px] font-normal mb-3 text-[#1F1F1F]">Built to Scale</h4>
                        <p className="text-[#444746] font-normal text-sm leading-[24px]">I use modern, robust tools ensuring your application is fast, secure, and ready to handle business growth.</p>
                    </div>
                </div>

                {/* =====================================================
                    4. PROCESS - Material Tonal Surface
                ====================================================== */}
                <div className="mb-24 md:mb-32 bg-[#EADDFF] rounded-[28px] p-8 md:p-14 text-[#21005D]">
                    <div className="text-center mb-12 max-w-2xl mx-auto">
                        <h2 className="text-[32px] md:text-[40px] font-normal tracking-tight mb-4">
                            How We Work Together
                        </h2>
                        <p className="text-[#4F378B] font-normal text-[18px]">A structured, stress-free process from our first hello to your launch day.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        {processSteps.map((step, idx) => (
                            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-[#6750A4] text-white rounded-full flex items-center justify-center mb-6 shadow-md">
                                    {step.icon}
                                </div>
                                <h4 className="text-[20px] font-medium mb-3">{idx + 1}. {step.title}</h4>
                                <p className="text-[#4F378B] font-normal text-sm leading-[24px]">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* =====================================================
                    5. FAQ SECTION - Material Expansion Panels
                ====================================================== */}
                <div className="max-w-3xl mx-auto mb-24 md:mb-32">
                    <div className="text-center mb-12">
                        <div className="w-16 h-16 bg-[#D3E3FD] text-[#0A56D1] rounded-full flex items-center justify-center mx-auto mb-6">
                            <HelpCircle size={32} />
                        </div>
                        <h2 className="text-[32px] md:text-[40px] font-normal text-[#1F1F1F]">
                            Common Questions
                        </h2>
                    </div>
                    
                    <div className="space-y-3">
                        {faqs.map((faq, idx) => {
                            const isOpen = openFaq === idx;
                            return (
                                <div 
                                    key={idx} 
                                    className={`border rounded-[16px] overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-[#F0F4F9] border-[#C2E7FF]' : 'bg-[#FAFDFC] border-[#747775]'}`}
                                >
                                    <button 
                                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                                        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                                    >
                                        <span className={`text-[16px] font-medium ${isOpen ? 'text-[#041E49]' : 'text-[#1F1F1F]'}`}>{faq.q}</span>
                                        <ChevronDown size={24} className={`text-[#444746] transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#0A56D1]' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                            >
                                                <div className="px-6 pb-6 text-sm text-[#444746] font-normal leading-[24px]">
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
            <footer className="text-center pt-10 pb-8 mx-4 md:mx-8 border-t border-[#E0E2E0]">
                <p className="text-sm font-medium text-[#747775]">
                    © {new Date().getFullYear()} Hiren Masaliya — Jetpur, Gujarat, India
                </p>
            </footer>

            {/* =====================================================
                6. INQUIRY MODAL - Material Dialog
            ====================================================== */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1F1F1F]/40 backdrop-blur-sm"
                    >
                        <motion.div 
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ duration: 0.3, ease: materialEase }}
                            className="bg-[#FAFDFC] w-full max-w-2xl rounded-[28px] shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]"
                        >
                            {/* Modal Header */}
                            <div className="flex justify-between items-center px-8 py-6 border-b border-[#E0E2E0] shrink-0">
                                <h3 className="text-[24px] font-normal text-[#1F1F1F]">
                                    Request Service
                                </h3>
                                <button onClick={handleCloseModal} className="text-[#444746] hover:bg-[#1F1F1F]/5 transition-colors p-2 rounded-full">
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Modal Body / Form */}
                            <div className="p-8 overflow-y-auto">
                                {isSuccess ? (
                                    <div className="text-center py-12">
                                        <div className="w-20 h-20 bg-[#D3E3FD] text-[#0A56D1] rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle size={40} />
                                        </div>
                                        <h4 className="text-[28px] font-normal mb-4 text-[#1F1F1F]">Message Sent</h4>
                                        <p className="text-[#444746] mb-8 font-normal max-w-sm mx-auto leading-[24px]">
                                            Thank you for your interest in the <strong>{selectedService.name}</strong> service. I will contact you within 24 hours.
                                        </p>
                                        <button 
                                            onClick={handleCloseModal}
                                            className="inline-flex items-center justify-center px-6 h-10 rounded-full text-sm font-medium border border-[#747775] text-[#1F1F1F] hover:bg-[#1F1F1F]/5 transition-colors"
                                        >
                                            Close Dialog
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        
                                        {/* Material Tonal Block for Service Info */}
                                        <div className="flex flex-col md:flex-row gap-4 bg-[#F0F4F9] p-5 rounded-[16px]">
                                            <div className="flex-1">
                                                <span className="text-xs font-medium text-[#444746] mb-1 block">Service</span>
                                                <p className="text-[#1F1F1F] font-medium text-base">{selectedService.name}</p>
                                            </div>
                                            <div className="flex-1 md:text-right">
                                                <span className="text-xs font-medium text-[#444746] mb-1 block">Estimated Starting Price</span>
                                                <p className="text-[#0A56D1] font-medium text-base">{selectedService.price}</p>
                                            </div>
                                        </div>

                                        {/* Material Outlined Text Fields */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="flex flex-col gap-1.5">
                                                <label htmlFor="modal-name" className="text-xs font-medium text-[#444746] px-1">Full Name</label>
                                                <input 
                                                    required type="text" id="modal-name"
                                                    value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full bg-transparent border border-[#747775] rounded-[4px] px-4 py-3 focus:outline-none focus:border-[#0A56D1] focus:ring-1 focus:ring-[#0A56D1] text-[#1F1F1F] text-base transition-shadow"
                                                />
                                            </div>
                                            
                                            <div className="flex flex-col gap-1.5">
                                                <label htmlFor="modal-email" className="text-xs font-medium text-[#444746] px-1">Email Address</label>
                                                <input 
                                                    required type="email" id="modal-email"
                                                    value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full bg-transparent border border-[#747775] rounded-[4px] px-4 py-3 focus:outline-none focus:border-[#0A56D1] focus:ring-1 focus:ring-[#0A56D1] text-[#1F1F1F] text-base transition-shadow"
                                                />
                                            </div>

                                            <div className="flex flex-col gap-1.5">
                                                <label htmlFor="modal-mobile" className="text-xs font-medium text-[#444746] px-1">Phone Number</label>
                                                <input 
                                                    required type="tel" id="modal-mobile"
                                                    value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                                    className="w-full bg-transparent border border-[#747775] rounded-[4px] px-4 py-3 focus:outline-none focus:border-[#0A56D1] focus:ring-1 focus:ring-[#0A56D1] text-[#1F1F1F] text-base transition-shadow"
                                                />
                                            </div>

                                            <div className="flex flex-col gap-1.5">
                                                <label htmlFor="modal-budget" className="text-xs font-medium text-[#444746] px-1">Your Budget</label>
                                                <select 
                                                    required id="modal-budget"
                                                    value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                                    className="w-full bg-transparent border border-[#747775] rounded-[4px] px-4 py-3 focus:outline-none focus:border-[#0A56D1] focus:ring-1 focus:ring-[#0A56D1] text-[#1F1F1F] text-base transition-shadow cursor-pointer appearance-none"
                                                >
                                                    <option value="" disabled hidden>Select a budget...</option>
                                                    {activeData.budgets.map((tier, idx) => (
                                                        <option key={idx} value={tier}>{tier}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-1.5">
                                            <label htmlFor="modal-brief" className="text-xs font-medium text-[#444746] px-1">Project Details</label>
                                            <textarea 
                                                required id="modal-brief" rows={4}
                                                value={formData.brief} onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                                                placeholder="Tell me a bit about what you need..."
                                                className="w-full bg-transparent border border-[#747775] rounded-[4px] px-4 py-3 focus:outline-none focus:border-[#0A56D1] focus:ring-1 focus:ring-[#0A56D1] text-[#1F1F1F] text-base transition-shadow resize-none"
                                            ></textarea>
                                        </div>

                                        {/* Material Actions */}
                                        <div className="flex justify-end gap-3 pt-6 mt-6 border-t border-[#E0E2E0]">
                                            <button 
                                                type="button"
                                                onClick={handleCloseModal}
                                                className="px-6 h-10 rounded-full text-sm font-medium text-[#0A56D1] hover:bg-[#0A56D1]/10 transition-colors"
                                            >
                                                Cancel
                                            </button>
                                            <button 
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="inline-flex items-center gap-2 bg-[#0A56D1] text-white px-6 h-10 rounded-full text-sm font-medium hover:bg-[#0842A0] transition-colors disabled:opacity-50 shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
                                            >
                                                {isSubmitting ? 'Sending...' : 'Submit Request'}
                                                {!isSubmitting && <ArrowRight size={18} />}
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