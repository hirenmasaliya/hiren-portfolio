"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, MessageSquare, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

const customEase = [0.25, 1, 0.5, 1] as const;

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-[#F8F8F8] text-[#222222] min-h-screen pt-32 pb-16 selection:bg-[#222222] selection:text-[#FFFFFF] font-sans overflow-x-hidden">
      
      <section className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* 1. HEADER AREA */}
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
                          Initiate Project
                      </span>
                  </div>
                  <h1 className="text-[12vw] md:text-[9rem] font-light tracking-tighter leading-[0.85] text-[#222222]">
                      Let's <br /> <span className="text-[#7B7B7B] italic">Build.</span>
                  </h1>
              </div>
              <p className="text-[#7B7B7B] text-lg max-w-sm font-medium pb-2 md:pb-4 leading-relaxed">
                  From initial concept to production scale, I help you architect systems that are both powerful and intuitive.
              </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32 md:mb-48 border-b border-[#222222]/10 pb-32">
          
          {/* LEFT SIDE: INFO & SOCIALS - Editorial Layout */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            
            <div className="space-y-12 mb-16">
              {/* Direct Comm */}
              <div>
                <p className="text-[10px] text-[#7B7B7B] uppercase tracking-widest mb-6 border-b border-[#222222]/10 pb-4">Direct Communication</p>
                <div className="inline-block relative group">
                  <a href="mailto:hirenmasliya14@gmail.com" className="relative z-10 text-2xl md:text-3xl font-light tracking-tight text-[#222222] group-hover:text-[#7B7B7B] transition-colors">
                    hirenmasliya14@gmail.com
                  </a>
                  <div className="absolute -bottom-2 left-0 w-full h-[1.5px] bg-[#222222] origin-right scale-x-0 transition-transform duration-500 ease-[0.25,1,0.5,1] group-hover:origin-left group-hover:scale-x-100"></div>
                </div>
              </div>

              {/* Operations Base */}
              <div>
                <p className="text-[10px] text-[#7B7B7B] uppercase tracking-widest mb-6 border-b border-[#222222]/10 pb-4">Operations Base</p>
                <p className="text-2xl font-light tracking-tight text-[#222222]">Jetpur, Gujarat <br/> <span className="text-[#7B7B7B] font-medium text-lg">India — Available Remote</span></p>
              </div>
            </div>

            {/* Social Grid */}
            <div>
              <p className="text-[10px] text-[#7B7B7B] uppercase tracking-widest mb-6 border-b border-[#222222]/10 pb-4">Network</p>
              <div className="flex flex-col gap-4">
                <a href="https://linkedin.com/in/hiren-masaliya" className="flex justify-between items-center text-xs uppercase tracking-widest font-medium border border-[#222222]/10 bg-[#FFFFFF] p-6 hover:border-[#222222] transition-colors duration-300 group">
                  <span className="flex items-center gap-4"><Linkedin size={16} className="text-[#7B7B7B] group-hover:text-[#222222] transition-colors" /> LinkedIn</span>
                  <ArrowUpRight size={16} className="text-[#7B7B7B] group-hover:text-[#222222] group-hover:rotate-45 transition-transform" />
                </a>
                <a href="https://github.com/hirenmasaliya" className="flex justify-between items-center text-xs uppercase tracking-widest font-medium border border-[#222222]/10 bg-[#FFFFFF] p-6 hover:border-[#222222] transition-colors duration-300 group">
                  <span className="flex items-center gap-4"><Github size={16} className="text-[#7B7B7B] group-hover:text-[#222222] transition-colors" /> GitHub</span>
                  <ArrowUpRight size={16} className="text-[#7B7B7B] group-hover:text-[#222222] group-hover:rotate-45 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: CONTACT FORM - Stark UI */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] border border-[#222222]/10 p-10 md:p-16 h-full flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-20 flex flex-col items-center"
                  >
                    <div className="w-16 h-16 bg-[#F8F8F8] text-[#222222] rounded-full flex items-center justify-center mb-10">
                      <Zap size={24} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight text-[#222222]">Signal <br/> <span className="italic text-[#7B7B7B]">Received.</span></h2>
                    <p className="text-[#7B7B7B] font-medium max-w-sm mb-12 leading-relaxed">
                      Your inquiry has been logged in my system. I typically process and respond within 24 business hours.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)} 
                      className="text-[10px] font-medium uppercase tracking-widest border border-[#222222] bg-transparent text-[#222222] px-8 py-4 hover:bg-[#222222] hover:text-[#FFFFFF] transition-colors"
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
                        <h3 className="text-3xl font-light tracking-tight mb-4 text-[#222222]">Project Inquiry</h3>
                        <p className="text-sm font-medium text-[#7B7B7B]">Fill out the parameters below to establish context.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                      <div className="relative group/input mt-4">
                        <input 
                          required
                          type="text" 
                          id="name"
                          placeholder=" "
                          className="peer w-full bg-transparent border-b border-[#222222]/20 py-4 focus:outline-none focus:border-[#222222] transition-colors font-medium text-[#222222] placeholder-transparent rounded-none"
                        />
                        <label htmlFor="name" className="absolute left-0 top-4 text-xs uppercase tracking-widest text-[#7B7B7B] transition-all peer-focus:-top-6 peer-focus:text-[#222222] peer-focus:text-[10px] peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-[#222222] peer-not-placeholder-shown:text-[10px]">
                            Full Name
                        </label>
                      </div>
                      
                      <div className="relative group/input mt-4">
                        <input 
                          required
                          type="email" 
                          id="email"
                          placeholder=" "
                          className="peer w-full bg-transparent border-b border-[#222222]/20 py-4 focus:outline-none focus:border-[#222222] transition-colors font-medium text-[#222222] placeholder-transparent rounded-none"
                        />
                        <label htmlFor="email" className="absolute left-0 top-4 text-xs uppercase tracking-widest text-[#7B7B7B] transition-all peer-focus:-top-6 peer-focus:text-[#222222] peer-focus:text-[10px] peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-[#222222] peer-not-placeholder-shown:text-[10px]">
                            Work Email
                        </label>
                      </div>
                    </div>

                    <div className="relative group/input mt-8">
                      <textarea 
                        required
                        id="brief"
                        rows={5}
                        placeholder=" "
                        className="peer w-full bg-transparent border-b border-[#222222]/20 py-4 focus:outline-none focus:border-[#222222] transition-colors font-medium text-[#222222] placeholder-transparent resize-none leading-relaxed rounded-none"
                      ></textarea>
                      <label htmlFor="brief" className="absolute left-0 top-4 text-xs uppercase tracking-widest text-[#7B7B7B] transition-all peer-focus:-top-6 peer-focus:text-[#222222] peer-focus:text-[10px] peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-[#222222] peer-not-placeholder-shown:text-[10px]">
                          Project Brief & Architecture Goals
                      </label>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8">
                        <button className="w-full sm:w-auto bg-[#222222] text-[#FFFFFF] font-medium text-sm px-10 py-5 hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center gap-3 group/btn">
                          Initialize <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-[10px] text-[#7B7B7B] uppercase tracking-widest text-center sm:text-right">
                            Strictly Confidential
                        </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* 2. WORK PROCESS - Minimal Grid */}
        <div className="mb-32 md:mb-48">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
              <h2 className="text-4xl md:text-6xl font-light tracking-tight text-[#222222] leading-[1.1]">
                  Collaboration <br/> <span className="text-[#7B7B7B] italic">Workflow.</span>
              </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { step: "01", icon: <MessageSquare size={20}/>, title: "Audit", desc: "Deep-dive into your requirements, existing stack, and overall business objectives." },
              { step: "02", icon: <Zap size={20}/>, title: "Execution", desc: "Rapid development sprints with continuous staging deployments and iterative feedback loops." },
              { step: "03", icon: <ShieldCheck size={20}/>, title: "Deployment", desc: "Production launch with rigorous performance testing, security checks, and SEO tuning." },
            ].map((step, i) => (
              <div key={i} className="bg-[#FFFFFF] p-10 md:p-12 border border-[#222222]/5 hover:border-[#222222]/20 transition-all duration-500 group flex flex-col">
                  <div className="flex justify-between items-center mb-12">
                      <span className="text-[10px] uppercase tracking-widest text-[#7B7B7B]">{step.step}</span>
                      <div className="w-12 h-12 rounded-full bg-[#F8F8F8] text-[#222222] flex items-center justify-center group-hover:bg-[#222222] group-hover:text-[#FFFFFF] transition-colors duration-500">
                          {step.icon}
                      </div>
                  </div>
                  <h3 className="text-xl font-medium tracking-tight mb-4 text-[#222222]">{step.title}</h3>
                  <p className="text-sm text-[#7B7B7B] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. INQUIRIES (FAQ) - Dark Mode Section */}
        <div className="bg-[#222222] text-[#FFFFFF] p-10 md:p-24 relative overflow-hidden">
            <div className="mb-20 border-b border-[#FFFFFF]/10 pb-16 relative z-10">
                <span className="text-[#7B7B7B] text-[10px] uppercase tracking-widest mb-8 block">Logistics</span>
                <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.1]">
                    Common <br /> <span className="text-[#7B7B7B] italic">Inquiries.</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 relative z-10">
            {[
              { q: "What is your project timeline?", a: "Standard MVPs take 4 to 8 weeks depending on technical complexity and feature set." },
              { q: "Post-launch support?", a: "I provide monthly maintenance and priority scaling support packages to ensure system stability." },
              { q: "Regional availability?", a: "Based in Gujarat, India. However, my operations scale globally, aligning with US/UK/EU client schedules." },
              { q: "Financial structure?", a: "Projects operate on a milestone-based payment structure via Wire/Stripe, typically initiating with a 50% retainer." }
            ].map((item, i) => (
              <div key={i} className="group border border-[#FFFFFF]/10 p-8 hover:border-[#FFFFFF]/30 transition-all duration-500 flex flex-col">
                <h3 className="font-medium mb-6 text-sm tracking-wide text-[#FFFFFF] flex items-center gap-4">
                    <span className="w-1.5 h-1.5 bg-[#FFFFFF] rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                    {item.q}
                </h3>
                <p className="text-[#F8F8F8]/70 text-sm leading-relaxed pl-5 border-l border-[#FFFFFF]/10 group-hover:border-[#FFFFFF]/30 transition-colors flex-1">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      <footer className="mt-24 text-center border-t border-[#222222]/10 pt-12 pb-8 mx-6 md:mx-12">
          <p className="text-[10px] text-[#7B7B7B] uppercase tracking-widest">
              © {new Date().getFullYear()} Hiren Masaliya — Jetpur, Gujarat
          </p>
      </footer>
    </main>
  );
}