"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, MessageSquare, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'; 
import { ref, push, serverTimestamp } from 'firebase/database';
import { database } from '@/lib/firebase';

const customEase = [0.25, 1, 0.5, 1] as const;

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

  return (
    <main className="bg-[#FAFAFA] text-gray-900 min-h-screen pt-32 pb-16 selection:bg-blue-600 selection:text-white font-sans overflow-x-hidden">
      
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* 1. HEADER AREA */}
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
                          Contact Me
                      </span>
                  </div>
                  <h1 className="text-[12vw] md:text-[6rem] lg:text-[7rem] font-bold tracking-tight leading-[1] text-gray-900">
                      Let's Start <br /> 
                      <span className="font-light italic text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                          Your Project.
                      </span>
                  </h1>
              </div>
              <p className="text-gray-600 text-lg md:text-xl max-w-sm font-normal pb-2 leading-relaxed">
                  Have an idea? I am here to help you plan, design, and build it from start to finish.
              </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32 border-b border-gray-200 pb-32">
          
          {/* LEFT SIDE: INFO & SOCIALS */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            
            <div className="space-y-12 mb-16">
              {/* Direct Comm */}
              <div>
                <p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold mb-6 border-b border-gray-200 pb-3">Send an Email</p>
                <div className="inline-block relative group">
                  <a href="mailto:hirenmasliya14@gmail.com" className="relative z-10 text-2xl md:text-3xl font-bold tracking-tight text-blue-600 hover:text-blue-800 transition-colors break-all">
                    hirenmasliya14@gmail.com
                  </a>
                </div>
              </div>

              {/* Operations Base */}
              <div>
                <p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold mb-6 border-b border-gray-200 pb-3">Where I Live</p>
                <p className="text-2xl font-bold tracking-tight text-gray-900">Jetpur, Gujarat <br/> <span className="text-gray-600 font-normal text-lg mt-2 block">India — I work with clients all over the world.</span></p>
              </div>
            </div>

            {/* Social Grid */}
            <div>
              <p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold mb-6 border-b border-gray-200 pb-3">My Social Media</p>
              <div className="flex flex-col gap-4">
                <a href="https://linkedin.com/in/hiren-masaliya" target="_blank" rel="noreferrer" className="flex justify-between items-center text-sm font-bold border border-gray-200 rounded-2xl bg-white px-6 py-5 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md transition-all duration-300 group">
                  <span className="flex items-center gap-4"><Linkedin size={20} className="text-blue-600" /> LinkedIn</span>
                  <ArrowUpRight size={18} className="text-gray-400 group-hover:text-blue-600 group-hover:rotate-45 transition-transform" />
                </a>
                <a href="https://github.com/hirenmasaliya" target="_blank" rel="noreferrer" className="flex justify-between items-center text-sm font-bold border border-gray-200 rounded-2xl bg-white px-6 py-5 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md transition-all duration-300 group">
                  <span className="flex items-center gap-4"><Github size={20} className="text-gray-800" /> GitHub</span>
                  <ArrowUpRight size={18} className="text-gray-400 group-hover:text-blue-600 group-hover:rotate-45 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2.5rem] border border-gray-200 shadow-xl shadow-gray-200/50 p-8 md:p-14 h-full flex flex-col justify-center relative overflow-hidden">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20 flex flex-col items-center"
                  >
                    <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-8 border border-green-100 shadow-sm">
                      <CheckCircle2 size={40} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900">Message Sent!</h2>
                    <p className="text-gray-600 font-normal text-lg max-w-sm mb-10 leading-relaxed">
                      Thank you for reaching out! I have received your details and will reply to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)} 
                      className="text-sm font-bold rounded-full border border-gray-200 bg-white text-gray-900 px-8 py-4 hover:bg-gray-50 active:scale-95 transition-all shadow-sm"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: customEase }}
                  >
                    <div className="mb-8">
                        <h3 className="text-3xl font-bold tracking-tight mb-3 text-gray-900">Tell me about your idea</h3>
                        <p className="text-base font-normal text-gray-600">Please fill out this form so I can understand exactly how to help you.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-[11px] uppercase tracking-widest font-bold text-gray-500 pl-1">Full Name</label>
                        <input 
                          required
                          type="text" 
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-gray-900 font-medium"
                        />
                      </div>
                      
                      {/* Email */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-[11px] uppercase tracking-widest font-bold text-gray-500 pl-1">Email Address</label>
                        <input 
                          required
                          type="email" 
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-gray-900 font-medium"
                        />
                      </div>

                      {/* Mobile */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="mobile" className="text-[11px] uppercase tracking-widest font-bold text-gray-500 pl-1">Phone Number</label>
                        <input 
                          required
                          type="tel" 
                          id="mobile"
                          value={formData.mobile}
                          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-gray-900 font-medium"
                        />
                      </div>

                      {/* Company (Optional) */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="company" className="text-[11px] uppercase tracking-widest font-bold text-gray-500 pl-1">Company Name (Optional)</label>
                        <input 
                          type="text" 
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-gray-900 font-medium"
                        />
                      </div>

                      {/* Budget Range (Dropdown) */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="budget" className="text-[11px] uppercase tracking-widest font-bold text-gray-500 pl-1">Your Budget</label>
                        <select 
                          required
                          id="budget"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-gray-900 font-medium cursor-pointer"
                        >
                          <option value="" disabled hidden>Choose an option...</option>
                          {activeBudgets.map((tier, idx) => (
                            <option key={idx} value={tier}>{tier}</option>
                          ))}
                        </select>
                      </div>

                      {/* Project Type (Dropdown) */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="projectType" className="text-[11px] uppercase tracking-widest font-bold text-gray-500 pl-1">What do you need?</label>
                        <select 
                          required
                          id="projectType"
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-gray-900 font-medium cursor-pointer"
                        >
                          <option value="" disabled hidden>Choose an option...</option>
                          <option value="Mobile App">Mobile App (iPhone & Android)</option>
                          <option value="Website">Website or Online Store</option>
                          <option value="App + Website">App & Website together</option>
                          <option value="Question">I just have a question</option>
                        </select>
                      </div>
                    </div>

                    {/* Brief */}
                    <div className="flex flex-col gap-2 pt-2">
                      <label htmlFor="brief" className="text-[11px] uppercase tracking-widest font-bold text-gray-500 pl-1">Message</label>
                      <textarea 
                        required
                        id="brief"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me a little bit about what you want to build or what you need help with..."
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-gray-900 font-medium resize-none leading-relaxed"
                      ></textarea>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-gray-100">
                        <button 
                          disabled={isSubmitting}
                          className="w-full sm:w-auto bg-blue-600 text-white rounded-full font-bold text-sm px-10 py-4 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group/btn disabled:opacity-50 disabled:hover:shadow-none"
                        >
                          {isSubmitting ? 'Sending Message...' : 'Send Message'} 
                          <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold text-center sm:text-right">
                            Your details are completely safe and private.
                        </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* 2. WORK PROCESS - Plain English */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.2]">
                  How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Work Together.</span>
              </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { step: "01", icon: <MessageSquare size={24}/>, title: "Talk & Plan", desc: "First, we discuss your idea. We figure out exactly what you need, who will use it, and how much it will cost." },
              { step: "02", icon: <Zap size={24}/>, title: "Build & Show", desc: "I start building your app or website. I will show you updates regularly so you can tell me if you like how it looks." },
              { step: "03", icon: <ShieldCheck size={24}/>, title: "Test & Launch", desc: "Once everything is tested and working perfectly, we put your app on the internet and the App Store for people to use." },
            ].map((step, i) => (
              <div key={i} className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-200 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 transition-all duration-500 group flex flex-col">
                  <div className="flex justify-between items-center mb-10">
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Step {step.step}</span>
                      <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 shadow-sm">
                          {step.icon}
                      </div>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-base font-normal text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. INQUIRIES (FAQ) - Deep Slate Mode */}
        <div className="bg-slate-900 text-white rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
            {/* Subtle Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="mb-16 border-b border-white/10 pb-12 relative z-10">
                <span className="text-blue-400 font-bold text-[11px] uppercase tracking-widest mb-6 block">Questions</span>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-[1.2]">
                    Common <span className="font-bold">Questions.</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 relative z-10">
            {[
              { q: "How long will my project take?", a: "Most projects take 1 to 2 months, depending on how big the app or website is." },
              { q: "Will you help me after the app is finished?", a: "Yes! After we launch, I can help you fix issues, make changes, or add new things later on." },
              { q: "Can we work together if I am not in India?", a: "Yes, definitely. I work with people all over the world. We can talk on WhatsApp or Google Meet easily." },
              { q: "How do I pay you?", a: "We split the payment into safe steps. You pay a little bit before we start, a little in the middle, and the rest when it is completely finished." }
            ].map((item, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col">
                <h3 className="font-bold mb-4 text-base tracking-wide text-white flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 bg-blue-400 rounded-full group-hover:scale-150 transition-transform duration-300 shrink-0 shadow-sm"></span>
                    {item.q}
                </h3>
                <p className="text-gray-300 font-light text-sm leading-relaxed pl-5 flex-1">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      <footer className="mt-24 text-center border-t border-gray-200 pt-10 pb-8 mx-6 md:mx-12">
          <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
              © {new Date().getFullYear()} Hiren Masaliya — Jetpur, Gujarat
          </p>
      </footer>
    </main>
  );
}