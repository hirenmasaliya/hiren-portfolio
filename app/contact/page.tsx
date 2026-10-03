"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  MessageCircle, 
  ShieldCheck, 
  Zap,  
  CheckCircle,
  LocationEdit,
  ArrowRight,
} from 'lucide-react'; // Mapped standard Lucide icons
import { ref, push, serverTimestamp } from 'firebase/database';
import { database } from '@/lib/firebase';

// Google Material 3 Emphasized Decelerate easing
const materialEase = [0.2, 0, 0, 1] as const;

// Define pricing tiers based on currency
const budgetRanges = {
  USD: ["Under $5,000", "$5,000 - $10,000", "$10,000 - $25,000", "$25,000+"],
  INR: ["Under ₹50,000", "₹50,000 - ₹2,00,000", "₹2,00,000 - ₹5,00,000", "₹5,00,000+"],
  EUR: ["Under €5,000", "€5,000 - €10,000", "€10,000 - €25,000", "€25,000+"],
  GBP: ["Under £4,000", "£4,000 - £8,000", "£8,000 - £20,000", "£20,000+"]
};

export default function Contact() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    mobile: '',
    company: '',
    projectType: '',
    budget: '',
    message: '' 
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeBudgets, setActiveBudgets] = useState(budgetRanges.USD); // Default to USD

  // Auto-detect country and set currency on load
  useEffect(() => {
    const detectCurrency = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data.currency === 'INR') setActiveBudgets(budgetRanges.INR);
        else if (data.currency === 'EUR') setActiveBudgets(budgetRanges.EUR);
        else if (data.currency === 'GBP') setActiveBudgets(budgetRanges.GBP);
        else setActiveBudgets(budgetRanges.USD);
      } catch (error) {
        console.warn("Could not detect location, defaulting to USD.");
        setActiveBudgets(budgetRanges.USD);
      }
    };

    detectCurrency();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const inquiriesRef = ref(database, 'inquiries');
      
      await push(inquiriesRef, {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile || 'N/A',
        company: formData.company || 'N/A',
        projectType: formData.projectType,
        budget: formData.budget || 'Not specified',
        message: formData.message,
        timestamp: serverTimestamp(),
      });

      setSubmitted(true);
      setFormData({ name: '', email: '', mobile: '', company: '', projectType: '', budget: '', message: '' });
    } catch (error) {
      console.error("Error writing to Firebase:", error);
      alert("Something went wrong. Please check your internet and try again.");
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
    <main className="bg-[#F8F9FA] text-[#1F1F1F] min-h-screen pt-24 md:pt-32 pb-16 selection:bg-[#D3E3FD] selection:text-[#041E49] font-sans overflow-x-hidden antialiased">
      
      <section className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* =====================================================
            1. HEADER AREA - Material Display Typography
        ====================================================== */}
        <div className="mb-16 md:mb-24 border-b border-[#E0E2E0] pb-16">
          <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVars}
              className="max-w-3xl"
          >
              {/* Material Tertiary Container Chip */}
              <motion.div variants={itemVars} className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8DEF8] text-[#1D192B] rounded-full text-sm font-medium mb-6">
                  <span>Contact Me</span>
              </motion.div>
              
              {/* Material Display Large */}
              <motion.h1 variants={itemVars} className="text-[44px] md:text-[57px] lg:text-[64px] font-normal tracking-[-0.25px] leading-[1.1] text-[#1F1F1F] mb-6">
                  Let's Start <br /> 
                  <span className="text-[#0A56D1]">
                      Your Project.
                  </span>
              </motion.h1>
              
              {/* Material Body Large */}
              <motion.p variants={itemVars} className="text-[#444746] text-[18px] md:text-[20px] font-normal leading-[32px] max-w-2xl">
                  Have an idea? I am here to help you plan, design, and build it from start to finish. Reach out directly or fill out the form below.
              </motion.p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24 md:mb-32">
          
          {/* =====================================================
              LEFT SIDE: INFO & SOCIALS
          ====================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            
            <div className="space-y-12 mb-16">
              {/* Direct Comm */}
              <div>
                <span className="text-[#747775] text-xs font-medium uppercase tracking-wide mb-2 block">Send an Email</span>
                <a href="mailto:hirenmasliya14@gmail.com" className="text-[22px] md:text-[28px] font-normal text-[#0A56D1] hover:text-[#0842A0] hover:underline transition-colors break-all">
                  hirenmasliya14@gmail.com
                </a>
              </div>

              {/* Operations Base */}
              <div>
                <span className="text-[#747775] text-xs font-medium uppercase tracking-wide mb-2 block">Location</span>
                <div className="flex items-start gap-2">
                  <LocationEdit size={24} className="text-[#0A56D1] mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-[22px] font-normal text-[#1F1F1F] leading-tight">Jetpur, Gujarat</h3>
                    <p className="text-[#444746] text-base font-normal mt-1 leading-[24px]">India — Available for remote work worldwide.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Grid - Material Outlined Buttons */}
            <div>
              <span className="text-[#747775] text-xs font-medium uppercase tracking-wide mb-4 block">Connect</span>
              <div className="flex flex-col gap-3">
                <a href="https://linkedin.com/in/hiren-masaliya" target="_blank" rel="noreferrer" className="flex justify-between items-center px-6 h-14 rounded-full border border-[#747775] text-[#1F1F1F] hover:bg-[#1F1F1F]/5 transition-colors group">
                  <span className="flex items-center gap-3 text-sm font-medium"><Linkedin size={20} className="text-[#0A56D1]" /> LinkedIn</span>
                  <ArrowUpRight size={20} className="text-[#444746]" />
                </a>
                <a href="https://github.com/hirenmasaliya" target="_blank" rel="noreferrer" className="flex justify-between items-center px-6 h-14 rounded-full border border-[#747775] text-[#1F1F1F] hover:bg-[#1F1F1F]/5 transition-colors group">
                  <span className="flex items-center gap-3 text-sm font-medium"><Github size={20} className="text-[#1F1F1F]" /> GitHub</span>
                  <ArrowUpRight size={20} className="text-[#444746]" />
                </a>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE: CONTACT FORM - Material Outlined Surface
          ====================================================== */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAFDFC] border border-[#747775] rounded-[28px] p-8 md:p-12 relative overflow-hidden h-full flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: materialEase }}
                    className="text-center py-16 flex flex-col items-center"
                  >
                    <div className="w-20 h-20 bg-[#D3E3FD] text-[#0A56D1] rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} />
                    </div>
                    <h2 className="text-[32px] font-normal mb-4 tracking-tight text-[#1F1F1F]">Message Sent</h2>
                    <p className="text-[#444746] font-normal text-base max-w-sm mb-10 leading-[26px]">
                      Thank you for reaching out! I have received your details and will reply to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)} 
                      className="inline-flex items-center justify-center px-6 h-12 rounded-full text-sm font-medium border border-[#747775] text-[#1F1F1F] hover:bg-[#1F1F1F]/5 transition-colors active:scale-95"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: materialEase }}
                  >
                    <div className="mb-8">
                        <h3 className="text-[28px] font-normal tracking-tight mb-2 text-[#1F1F1F]">Project Details</h3>
                        <p className="text-sm font-normal text-[#444746]">Please fill out this form so I can understand exactly how to help you.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Material Outlined Text Fields */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-xs font-medium text-[#444746] px-1">Full Name</label>
                        <input 
                          required type="text" id="name"
                          value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-transparent border border-[#747775] rounded-[4px] px-4 py-3 focus:outline-none focus:border-[#0A56D1] focus:ring-1 focus:ring-[#0A56D1] text-[#1F1F1F] text-base transition-shadow"
                        />
                      </div>
                      
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-xs font-medium text-[#444746] px-1">Email Address</label>
                        <input 
                          required type="email" id="email"
                          value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-transparent border border-[#747775] rounded-[4px] px-4 py-3 focus:outline-none focus:border-[#0A56D1] focus:ring-1 focus:ring-[#0A56D1] text-[#1F1F1F] text-base transition-shadow"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="mobile" className="text-xs font-medium text-[#444746] px-1">Phone Number</label>
                        <input 
                          required type="tel" id="mobile"
                          value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                          className="w-full bg-transparent border border-[#747775] rounded-[4px] px-4 py-3 focus:outline-none focus:border-[#0A56D1] focus:ring-1 focus:ring-[#0A56D1] text-[#1F1F1F] text-base transition-shadow"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="company" className="text-xs font-medium text-[#444746] px-1">Company Name (Optional)</label>
                        <input 
                          type="text" id="company"
                          value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full bg-transparent border border-[#747775] rounded-[4px] px-4 py-3 focus:outline-none focus:border-[#0A56D1] focus:ring-1 focus:ring-[#0A56D1] text-[#1F1F1F] text-base transition-shadow"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="budget" className="text-xs font-medium text-[#444746] px-1">Your Budget</label>
                        <select 
                          required id="budget"
                          value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full bg-transparent border border-[#747775] rounded-[4px] px-4 py-3 focus:outline-none focus:border-[#0A56D1] focus:ring-1 focus:ring-[#0A56D1] text-[#1F1F1F] text-base transition-shadow cursor-pointer appearance-none"
                        >
                          <option value="" disabled hidden>Choose an option...</option>
                          {activeBudgets.map((tier, idx) => (
                            <option key={idx} value={tier}>{tier}</option>
                          ))}
                        </select>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="projectType" className="text-xs font-medium text-[#444746] px-1">What do you need?</label>
                        <select 
                          required id="projectType"
                          value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full bg-transparent border border-[#747775] rounded-[4px] px-4 py-3 focus:outline-none focus:border-[#0A56D1] focus:ring-1 focus:ring-[#0A56D1] text-[#1F1F1F] text-base transition-shadow cursor-pointer appearance-none"
                        >
                          <option value="" disabled hidden>Choose an option...</option>
                          <option value="Mobile App">Mobile App (iPhone & Android)</option>
                          <option value="Website">Website or Online Store</option>
                          <option value="App + Website">App & Website together</option>
                          <option value="Question">I just have a question</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5 pt-2">
                      <label htmlFor="message" className="text-xs font-medium text-[#444746] px-1">Message</label>
                      <textarea 
                        required id="message" rows={4}
                        value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me a little bit about what you want to build..."
                        className="w-full bg-transparent border border-[#747775] rounded-[4px] px-4 py-3 focus:outline-none focus:border-[#0A56D1] focus:ring-1 focus:ring-[#0A56D1] text-[#1F1F1F] text-base transition-shadow resize-none"
                      ></textarea>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-[#E0E2E0]">
                        <button 
                          disabled={isSubmitting}
                          className="w-full sm:w-auto bg-[#0A56D1] text-white rounded-full font-medium text-sm px-8 h-12 hover:bg-[#0842A0] active:scale-95 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.2)] flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'} 
                          {!isSubmitting && <ArrowRight size={18} />}
                        </button>
                        <p className="text-[12px] text-[#747775] font-medium text-center sm:text-right max-w-[200px]">
                            Your details are completely safe and private.
                        </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* =====================================================
            3. WORK PROCESS - Material Outlined Cards
        ====================================================== */}
        <div className="mb-24 md:mb-32">
          <div className="mb-12">
              <h2 className="text-[32px] md:text-[40px] font-normal tracking-tight text-[#1F1F1F] leading-tight">
                  How We Work Together
              </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", icon: <MessageCircle size={28}/>, title: "Talk & Plan", desc: "First, we discuss your idea. We figure out exactly what you need, who will use it, and how much it will cost." },
              { step: "02", icon: <Zap size={28}/>, title: "Build & Show", desc: "I start building your app or website. I will show you updates regularly so you can tell me if you like how it looks." },
              { step: "03", icon: <ShieldCheck size={28}/>, title: "Test & Launch", desc: "Once everything is tested and working perfectly, we put your app on the internet and the App Store for people to use." },
            ].map((step, i) => (
              <div key={i} className="bg-[#FAFDFC] rounded-[24px] p-8 border border-[#747775] hover:bg-[#F0F4F9] transition-colors duration-300 flex flex-col">
                  <div className="flex justify-between items-center mb-8">
                      <span className="text-xs font-medium uppercase tracking-wider text-[#747775]">Step {step.step}</span>
                      <div className="w-14 h-14 rounded-full bg-[#E8DEF8] text-[#1D192B] flex items-center justify-center">
                          {step.icon}
                      </div>
                  </div>
                  <h3 className="text-[22px] font-normal mb-2 text-[#1F1F1F]">{step.title}</h3>
                  <p className="text-sm font-normal text-[#444746] leading-[24px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            4. INQUIRIES (FAQ) - Material Inverse Surface
        ====================================================== */}
        <div className="bg-[#1F1F1F] text-[#F8F9FA] rounded-[28px] p-8 md:p-16 relative overflow-hidden">
            <div className="mb-12 border-b border-[#444746] pb-10">
                <span className="text-[#A8C7FA] font-medium text-xs uppercase tracking-wider mb-4 block">Questions</span>
                <h2 className="text-[32px] md:text-[40px] font-normal leading-tight text-[#F8F9FA]">
                    Common Questions
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              { q: "How long will my project take?", a: "Most projects take 1 to 2 months, depending on how big the app or website is." },
              { q: "Will you help me after the app is finished?", a: "Yes! After we launch, I can help you fix issues, make changes, or add new features later on." },
              { q: "Can we work together if I am not in India?", a: "Yes, definitely. I work with clients all over the world via Google Meet or standard email." },
              { q: "How do I pay you?", a: "We split the payment into safe milestones. You pay a percentage before we start, in the middle, and when it is completely finished." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col">
                <h3 className="font-medium mb-3 text-[18px] text-[#F8F9FA] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 mt-2.5 bg-[#A8C7FA] rounded-full shrink-0"></span>
                    {item.q}
                </h3>
                <p className="text-[#C4C7C5] font-normal text-[15px] leading-[26px] pl-[18px]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      <footer className="mt-20 text-center border-t border-[#E0E2E0] pt-10 pb-8 mx-4 md:mx-8">
          <p className="text-xs font-medium text-[#747775]">
              © {new Date().getFullYear()} Hiren Masaliya — Jetpur, Gujarat, India
          </p>
      </footer>
    </main>
  );
}