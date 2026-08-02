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
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-[#FAFAFA] text-[#111111] min-h-screen pt-32 pb-16 selection:bg-[#111111] selection:text-[#FFFFFF] font-sans overflow-x-hidden">
      
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
                  <div className="flex items-center gap-3 mb-8">
                      <div className="w-2 h-2 bg-[#111111] rounded-full"></div>
                      <span className="text-gray-500 text-xs uppercase tracking-widest font-semibold">
                          Start a Project
                      </span>
                  </div>
                  <h1 className="text-[12vw] md:text-[7rem] lg:text-[8rem] font-light tracking-tight leading-[0.95] text-[#111111]">
                      Let's Work <br /> <span className="text-gray-400 italic">Together.</span>
                  </h1>
              </div>
              <p className="text-gray-600 text-lg md:text-xl max-w-sm font-light pb-2 leading-relaxed">
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
                <p className="text-[11px] text-gray-500 uppercase tracking-widest font-semibold mb-6 border-b border-gray-200 pb-3">Email Me</p>
                <div className="inline-block relative group">
                  <a href="mailto:hirenmasliya14@gmail.com" className="relative z-10 text-2xl md:text-3xl font-light tracking-tight text-[#111111] hover:text-gray-500 transition-colors break-all">
                    hirenmasliya14@gmail.com
                  </a>
                </div>
              </div>

              {/* Operations Base */}
              <div>
                <p className="text-[11px] text-gray-500 uppercase tracking-widest font-semibold mb-6 border-b border-gray-200 pb-3">My Location</p>
                <p className="text-2xl font-light tracking-tight text-[#111111]">Jetpur, Gujarat <br/> <span className="text-gray-500 font-medium text-lg">India — I work with clients worldwide.</span></p>
              </div>
            </div>

            {/* Social Grid */}
            <div>
              <p className="text-[11px] text-gray-500 uppercase tracking-widest font-semibold mb-6 border-b border-gray-200 pb-3">Find Me On</p>
              <div className="flex flex-col gap-4">
                <a href="https://linkedin.com/in/hiren-masaliya" className="flex justify-between items-center text-sm font-medium border border-gray-200 rounded-2xl bg-white px-6 py-5 hover:border-gray-400 hover:shadow-md transition-all duration-300 group">
                  <span className="flex items-center gap-4"><Linkedin size={18} className="text-gray-500 group-hover:text-[#111111] transition-colors" /> LinkedIn</span>
                  <ArrowUpRight size={18} className="text-gray-400 group-hover:text-[#111111] group-hover:rotate-45 transition-transform" />
                </a>
                <a href="https://github.com/hirenmasaliya" className="flex justify-between items-center text-sm font-medium border border-gray-200 rounded-2xl bg-white px-6 py-5 hover:border-gray-400 hover:shadow-md transition-all duration-300 group">
                  <span className="flex items-center gap-4"><Github size={18} className="text-gray-500 group-hover:text-[#111111] transition-colors" /> GitHub</span>
                  <ArrowUpRight size={18} className="text-gray-400 group-hover:text-[#111111] group-hover:rotate-45 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-xl shadow-black/5 p-8 md:p-14 h-full flex flex-col justify-center relative overflow-hidden">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20 flex flex-col items-center"
                  >
                    <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-8 border border-green-100">
                      <CheckCircle2 size={32} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight text-[#111111]">Message <span className="font-medium">Sent.</span></h2>
                    <p className="text-gray-500 font-light text-lg max-w-sm mb-10 leading-relaxed">
                      Thank you for reaching out! I have received your details and will get back to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)} 
                      className="text-sm font-semibold rounded-full border border-gray-200 bg-white text-[#111111] px-8 py-3 hover:bg-gray-50 transition-colors shadow-sm"
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
                        <h3 className="text-3xl font-light tracking-tight mb-2 text-[#111111]">Tell me about your project</h3>
                        <p className="text-base font-light text-gray-500">Please fill out the form below so I can better understand your needs.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-xs uppercase tracking-widest font-semibold text-gray-500 pl-1">Full Name</label>
                        <input 
                          required
                          type="text" 
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-[#FAFAFA] border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all text-[#111111]"
                        />
                      </div>
                      
                      {/* Email */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs uppercase tracking-widest font-semibold text-gray-500 pl-1">Email Address</label>
                        <input 
                          required
                          type="email" 
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#FAFAFA] border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all text-[#111111]"
                        />
                      </div>

                      {/* Mobile */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="mobile" className="text-xs uppercase tracking-widest font-semibold text-gray-500 pl-1">Phone Number</label>
                        <input 
                          required
                          type="tel" 
                          id="mobile"
                          value={formData.mobile}
                          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                          className="w-full bg-[#FAFAFA] border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all text-[#111111]"
                        />
                      </div>

                      {/* Company (Optional) */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="company" className="text-xs uppercase tracking-widest font-semibold text-gray-500 pl-1">Company (Optional)</label>
                        <input 
                          type="text" 
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full bg-[#FAFAFA] border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all text-[#111111]"
                        />
                      </div>

                      {/* Budget Range (Dropdown) */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="budget" className="text-xs uppercase tracking-widest font-semibold text-gray-500 pl-1">Your Budget</label>
                        <select 
                          required
                          id="budget"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full bg-[#FAFAFA] border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all text-[#111111] cursor-pointer"
                        >
                          <option value="" disabled hidden>Select a range...</option>
                          {activeBudgets.map((tier, idx) => (
                            <option key={idx} value={tier}>{tier}</option>
                          ))}
                        </select>
                      </div>

                      {/* Project Type (Dropdown) */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="projectType" className="text-xs uppercase tracking-widest font-semibold text-gray-500 pl-1">What do you need?</label>
                        <select 
                          required
                          id="projectType"
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full bg-[#FAFAFA] border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all text-[#111111] cursor-pointer"
                        >
                          <option value="" disabled hidden>Select an option...</option>
                          <option value="Mobile Application">Mobile App (Flutter)</option>
                          <option value="Web Application">Website / Web App (Next.js)</option>
                          <option value="Full Stack System">Full-Stack System</option>
                          <option value="AI Integration">AI Integration</option>
                          <option value="Other">Just need advice / Consultation</option>
                        </select>
                      </div>
                    </div>

                    {/* Brief */}
                    <div className="flex flex-col gap-2 pt-2">
                      <label htmlFor="brief" className="text-xs uppercase tracking-widest font-semibold text-gray-500 pl-1">Project Details</label>
                      <textarea 
                        required
                        id="brief"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me a little bit about what you want to build..."
                        className="w-full bg-[#FAFAFA] border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all text-[#111111] resize-none leading-relaxed"
                      ></textarea>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-gray-100">
                        <button 
                          disabled={isSubmitting}
                          className="w-full sm:w-auto bg-[#111111] text-white rounded-full font-medium text-sm px-10 py-4 hover:bg-gray-800 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 group/btn disabled:opacity-50 disabled:hover:shadow-none"
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'} 
                          <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-[11px] text-gray-400 uppercase tracking-widest font-medium text-center sm:text-right">
                            Your details are safe with me.
                        </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* 2. WORK PROCESS - Minimal Grid */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#111111] leading-[1.2]">
                  How I <span className="font-medium">Work.</span>
              </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { step: "01", icon: <MessageSquare size={22}/>, title: "1. Plan", desc: "First, we talk about your idea. We figure out exactly what you need, who it is for, and how we will build it." },
              { step: "02", icon: <Zap size={22}/>, title: "2. Build", desc: "I start writing the code. I will show you updates regularly so you can give feedback as the app comes to life." },
              { step: "03", icon: <ShieldCheck size={22}/>, title: "3. Launch", desc: "Once everything is tested and perfect, we launch your app to the public. I also make sure it is fast and secure." },
            ].map((step, i) => (
              <div key={i} className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-100 hover:shadow-xl hover:shadow-gray-100 transition-all duration-500 group flex flex-col">
                  <div className="flex justify-between items-center mb-10">
                      <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">{step.step}</span>
                      <div className="w-14 h-14 rounded-full bg-[#FAFAFA] text-[#111111] flex items-center justify-center group-hover:bg-[#111111] group-hover:text-white transition-colors duration-500 shadow-sm">
                          {step.icon}
                      </div>
                  </div>
                  <h3 className="text-2xl font-medium tracking-tight mb-3 text-[#111111]">{step.title}</h3>
                  <p className="text-base font-light text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. INQUIRIES (FAQ) - Dark Mode Section */}
        <div className="bg-[#111111] text-white rounded-[2rem] md:rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
            <div className="mb-16 border-b border-white/10 pb-12 relative z-10">
                <span className="text-gray-400 font-semibold text-[11px] uppercase tracking-widest mb-6 block">Questions</span>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-[1.2]">
                    Frequent <span className="font-medium">Questions.</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 relative z-10">
            {[
              { q: "How long will my project take?", a: "Most projects take 4 to 8 weeks, depending on how many features you need." },
              { q: "Do you offer support after we launch?", a: "Yes! After we launch, I offer monthly plans to keep your app updated, secure, and running smoothly." },
              { q: "Can we work together if I am not in India?", a: "Absolutely. I work with clients all over the world, including the US, UK, and Europe. We will easily find times to chat that work for both of us." },
              { q: "How do payments work?", a: "We split the payment into parts based on project milestones. We usually start with a 50% deposit before work begins." }
            ].map((item, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col">
                <h3 className="font-medium mb-4 text-base tracking-wide text-white flex items-start gap-3">
                    <span className="w-1.5 h-1.5 mt-2 bg-white rounded-full group-hover:scale-150 transition-transform duration-300 shrink-0"></span>
                    {item.q}
                </h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed pl-5 flex-1">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      <footer className="mt-24 text-center border-t border-gray-200 pt-10 pb-8 mx-6 md:mx-12">
          <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">
              © {new Date().getFullYear()} Hiren Masaliya — Jetpur, Gujarat
          </p>
      </footer>
    </main>
  );
}