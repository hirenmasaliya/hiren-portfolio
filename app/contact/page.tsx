"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, MessageSquare, ShieldCheck, Zap } from 'lucide-react';

const customEase = [0.25, 1, 0.5, 1] as const;

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-slate-50 text-slate-900 min-h-screen pt-40 pb-20 selection:bg-blue-200 selection:text-blue-900 font-sans overflow-hidden">
      
      {/* Soft Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <section className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* 1. HEADER AREA */}
        <div className="mb-24 md:mb-32 text-left border-b border-slate-200 pb-16">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: customEase }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
              <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-6 block">
                      Initiate Project
                  </span>
                  <h1 className="text-[12vw] md:text-[8.5rem] font-black tracking-tighter leading-[0.85] text-slate-950 uppercase">
                      Let's <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Build.</span>
                  </h1>
              </div>
              <p className="text-slate-500 text-base md:text-lg max-w-sm font-medium pb-2 md:pb-4 leading-relaxed">
                  From initial concept to production scale, I help you architect systems that are both powerful and intuitive.
              </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32 md:mb-48 border-b border-slate-200 pb-32">
          
          {/* LEFT SIDE: INFO & SOCIALS - Premium Editorial */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            
            <div className="space-y-12 mb-16">
              {/* Direct Comm */}
              <div>
                <p className="text-[9px] text-slate-400 uppercase font-bold tracking-[0.2em] mb-4 border-b border-slate-200 pb-4">Direct Communication</p>
                <div className="inline-block relative group">
                  <a href="mailto:hirenmasliya14@gmail.com" className="relative z-10 text-2xl md:text-3xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                    hirenmasliya14@gmail.com
                  </a>
                  <div className="absolute -bottom-1 left-0 w-full h-[3px] bg-blue-600 origin-right scale-x-0 transition-transform duration-500 ease-[0.25,1,0.5,1] group-hover:origin-left group-hover:scale-x-100 rounded-full"></div>
                </div>
              </div>

              {/* Operations Base */}
              <div>
                <p className="text-[9px] text-slate-400 uppercase font-bold tracking-[0.2em] mb-4 border-b border-slate-200 pb-4">Operations Base</p>
                <p className="text-2xl font-black tracking-tight text-slate-950">Jetpur, Gujarat <br/> <span className="text-slate-500 font-medium text-lg">India — Available Remote</span></p>
              </div>
            </div>

            {/* Social Grid */}
            <div>
              <p className="text-[9px] text-slate-400 uppercase font-bold tracking-[0.2em] mb-4 border-b border-slate-200 pb-4">Network</p>
              <div className="flex flex-col gap-3">
                <a href="https://linkedin.com/in/hiren-masaliya" className="flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] border border-slate-200 bg-white rounded-2xl p-5 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 hover:shadow-md transition-all duration-300 group">
                  <span className="flex items-center gap-3"><Linkedin size={16} className="text-blue-600 group-hover:scale-110 transition-transform" /> LinkedIn</span>
                  <ArrowUpRight size={14} className="text-slate-400 group-hover:text-blue-600 group-hover:rotate-45 transition-transform" />
                </a>
                <a href="https://github.com/hirenmasaliya" className="flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] border border-slate-200 bg-white rounded-2xl p-5 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 hover:shadow-md transition-all duration-300 group">
                  <span className="flex items-center gap-3"><Github size={16} className="text-slate-900 group-hover:scale-110 group-hover:text-blue-600 transition-colors" /> GitHub</span>
                  <ArrowUpRight size={14} className="text-slate-400 group-hover:text-blue-600 group-hover:rotate-45 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: CONTACT FORM - Premium UI */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-[3rem] p-8 md:p-14 h-full flex flex-col justify-center shadow-2xl shadow-blue-900/5">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-20 flex flex-col items-center"
                  >
                    <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-10 shadow-inner">
                      <Zap size={32} />
                    </div>
                    <h2 className="text-5xl font-black mb-6 tracking-tighter uppercase text-slate-950">Signal <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Received.</span></h2>
                    <p className="text-slate-500 font-medium max-w-sm mb-12">
                      Your inquiry has been logged in my system. I typically process and respond within 24 business hours.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)} 
                      className="text-[10px] font-bold uppercase tracking-[0.2em] border border-slate-200 bg-slate-50 px-8 py-4 rounded-full hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 transition-all shadow-sm"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: customEase }}
                  >
                    <div>
                        <h3 className="text-2xl font-black uppercase tracking-tight mb-2 text-slate-950">Project Inquiry</h3>
                        <p className="text-sm font-medium text-slate-500">Fill out the parameters below to establish context.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                      <div className="relative group/input">
                        <input 
                          required
                          type="text" 
                          id="name"
                          placeholder=" "
                          className="peer w-full bg-transparent border-b border-slate-200 py-4 focus:outline-none focus:border-blue-600 transition-colors font-medium text-slate-950 placeholder-transparent"
                        />
                        <label htmlFor="name" className="absolute left-0 top-4 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 transition-all peer-focus:-top-4 peer-focus:text-blue-600 peer-focus:text-[8px] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-slate-950 peer-not-placeholder-shown:text-[8px]">
                            Full Name
                        </label>
                      </div>
                      
                      <div className="relative group/input">
                        <input 
                          required
                          type="email" 
                          id="email"
                          placeholder=" "
                          className="peer w-full bg-transparent border-b border-slate-200 py-4 focus:outline-none focus:border-blue-600 transition-colors font-medium text-slate-950 placeholder-transparent"
                        />
                        <label htmlFor="email" className="absolute left-0 top-4 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 transition-all peer-focus:-top-4 peer-focus:text-blue-600 peer-focus:text-[8px] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-slate-950 peer-not-placeholder-shown:text-[8px]">
                            Work Email
                        </label>
                      </div>
                    </div>

                    <div className="relative group/input">
                      <textarea 
                        required
                        id="brief"
                        rows={6}
                        placeholder=" "
                        className="peer w-full bg-transparent border-b border-slate-200 py-4 focus:outline-none focus:border-blue-600 transition-colors font-medium text-slate-950 placeholder-transparent resize-none leading-relaxed"
                      ></textarea>
                      <label htmlFor="brief" className="absolute left-0 top-4 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 transition-all peer-focus:-top-4 peer-focus:text-blue-600 peer-focus:text-[8px] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-slate-950 peer-not-placeholder-shown:text-[8px]">
                          Project Brief & Architecture Goals
                      </label>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6 pt-8">
                        <button className="w-full sm:w-auto bg-slate-950 text-white font-bold uppercase tracking-[0.2em] text-[10px] px-12 py-5 rounded-full hover:bg-blue-600 hover:shadow-[0_8px_30px_rgb(37,99,235,0.3)] transition-all duration-300 flex items-center justify-center gap-3 group/btn">
                        Initialize <ArrowUpRight size={14} className="group-hover/btn:rotate-45 transition-transform" />
                        </button>
                        <p className="text-[8px] text-slate-400 font-bold uppercase tracking-[0.2em]">
                            Strictly Confidential
                        </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* 2. WORK PROCESS */}
        <div className="mb-32 md:mb-48">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-slate-950">
                  Collaboration <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Workflow.</span>
              </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", icon: <MessageSquare size={20}/>, title: "Audit", desc: "Deep-dive into your requirements, existing stack, and overall business objectives." },
              { step: "02", icon: <Zap size={20}/>, title: "Execution", desc: "Rapid development sprints with continuous staging deployments and iterative feedback loops." },
              { step: "03", icon: <ShieldCheck size={20}/>, title: "Deployment", desc: "Production launch with rigorous performance testing, security checks, and SEO tuning." },
            ].map((step, i) => (
              <div key={i} className="bg-white p-10 md:p-12 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 transition-all duration-500 group">
                  <div className="flex justify-between items-center mb-8">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{step.step}</span>
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                          {step.icon}
                      </div>
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-slate-950">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. INQUIRIES (FAQ) - Deep Navy Layout */}
        <div className="bg-slate-950 text-white p-10 md:p-24 rounded-[4rem] relative overflow-hidden shadow-2xl">
            {/* Subtle Inner Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none" />

            <div className="mb-20 border-b border-slate-800 pb-16 relative z-10">
                <span className="text-blue-400 text-[9px] font-bold uppercase tracking-[0.2em] mb-6 block bg-blue-950/50 w-max px-4 py-2 rounded-full border border-blue-800/50">Logistics</span>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
                    Common <br /> <span className="text-slate-500">Inquiries.</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 relative z-10">
            {[
              { q: "What is your project timeline?", a: "Standard MVPs take 4 to 8 weeks depending on technical complexity and feature set." },
              { q: "Post-launch support?", a: "I provide monthly maintenance and priority scaling support packages to ensure system stability." },
              { q: "Regional availability?", a: "Based in Gujarat, India. However, my operations scale globally, aligning with US/UK/EU client schedules." },
              { q: "Financial structure?", a: "Projects operate on a milestone-based payment structure via Wire/Stripe, typically initiating with a 50% retainer." }
            ].map((item, i) => (
              <div key={i} className="group bg-slate-900/50 backdrop-blur-md border border-slate-800 p-8 rounded-3xl hover:bg-slate-800 hover:border-blue-500/50 transition-all duration-500">
                <h3 className="font-bold mb-4 text-[11px] uppercase tracking-[0.2em] text-white flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></span>
                    {item.q}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium pl-4 border-l border-slate-800 group-hover:border-blue-500/30 transition-colors">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      <footer className="mt-32 text-center border-t border-slate-200 pt-10 mx-6">
          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em]">
              © {new Date().getFullYear()} Hiren Masaliya — Jetpur, Gujarat
          </p>
      </footer>
    </main>
  );
}