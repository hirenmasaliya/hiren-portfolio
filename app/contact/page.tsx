"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Calendar, Github, Linkedin, Twitter, ArrowRight, MessageSquare, ShieldCheck, Zap } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-white text-zinc-900 min-h-screen pt-32 pb-20 selection:bg-blue-100 selection:text-blue-700">
      
      {/* Background Soft Gradient */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px]" />
      </div>

      <section className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 1. HEADER AREA */}
        <div className="max-w-4xl mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black text-zinc-950 mb-8 tracking-tighter leading-[0.85]"
          >
            Let’s build <br />
            <span className="text-blue-600 italic">something iconic.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 text-xl md:text-2xl leading-relaxed max-w-2xl font-medium"
          >
            From initial concept to production scale, I help you architect systems that are both powerful and intuitive.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-40">
          
          {/* LEFT SIDE: INFO & SOCIALS */}
          <div className="lg:col-span-5 space-y-12">
            
            <div className="space-y-4">
              <div className="flex items-center gap-6 p-6 rounded-[2rem] bg-zinc-50 border border-zinc-100 group hover:border-blue-200 transition-all">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-zinc-100 text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-400 uppercase font-bold tracking-[0.3em] mb-1">Direct Communication</p>
                  <a href="mailto:hirenmasaliya14@gmail.com" className="text-lg font-bold hover:text-blue-600 transition-colors">hirenmasliya14@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 rounded-[2rem] bg-zinc-50 border border-zinc-100 group hover:border-blue-200 transition-all">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-zinc-100 text-zinc-900 shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-400 uppercase font-bold tracking-[0.3em] mb-1">Current Base</p>
                  <p className="text-lg font-bold text-zinc-950">Gujarat, India <span className="text-zinc-400 font-normal">| Remote</span></p>
                </div>
              </div>
            </div>

            {/* Schedule Section */}
            <div className="p-10 bg-zinc-950 text-white rounded-[3rem] relative overflow-hidden shadow-2xl">
              <div className="absolute -top-6 -right-6 opacity-10">
                <Calendar size={120} />
              </div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                Discovery Session
              </h3>
              <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
                Prefer a face-to-face? Book a 15-minute discovery call to discuss your technical roadmap.
              </p>
              <button className="bg-white text-zinc-950 px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">
                Book a meeting
              </button>
            </div>

            {/* Social Grid */}
            <div className="flex gap-4">
              {["LinkedIn", "GitHub", "Twitter"].map((name) => (
                <a key={name} href="#" className="text-[10px] font-black uppercase tracking-widest border border-zinc-100 px-6 py-3 rounded-full hover:bg-zinc-950 hover:text-white transition-all">
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-14 rounded-[3.5rem] border border-zinc-100 shadow-2xl shadow-zinc-200/50">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-8">
                      <Zap size={40} />
                    </div>
                    <h2 className="text-4xl font-black mb-4 tracking-tighter">Sent!</h2>
                    <p className="text-zinc-500 max-w-xs mx-auto mb-10">
                      I've received your inquiry. I typically respond within 24 business hours.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)} 
                      className="text-[11px] font-black uppercase tracking-widest text-blue-600 border-b-2 border-blue-600 pb-1"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-1">Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Your Name"
                          className="w-full bg-zinc-50/50 border-b border-zinc-200 py-4 px-1 focus:outline-none focus:border-blue-600 transition-all placeholder:text-zinc-300"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-1">Work Email</label>
                        <input 
                          required
                          type="email" 
                          placeholder="name@company.com"
                          className="w-full bg-zinc-50/50 border-b border-zinc-200 py-4 px-1 focus:outline-none focus:border-blue-600 transition-all placeholder:text-zinc-300"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-1">Project Brief</label>
                      <textarea 
                        required
                        rows={5}
                        placeholder="Tell me about your project or problem..."
                        className="w-full bg-zinc-50/50 border-b border-zinc-200 py-4 px-1 focus:outline-none focus:border-blue-600 transition-all placeholder:text-zinc-300 resize-none"
                      ></textarea>
                    </div>
                    <button className="w-full bg-zinc-950 text-white font-black uppercase tracking-[0.3em] text-[11px] py-6 rounded-full transition-all hover:bg-blue-600 shadow-xl shadow-zinc-200 flex items-center justify-center gap-3">
                      Send Inquiry <ArrowRight size={16} />
                    </button>
                    <p className="text-center text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
                      Strictly Confidential
                    </p>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* 3. WORK PROCESS (Minimalist Cards) */}
        <div className="mb-40">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-300 mb-16">Collaboration Workflow</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <MessageSquare size={20}/>, title: "1. Audit", desc: "We deep-dive into your requirements and business goals." },
              { icon: <Zap size={20}/>, title: "2. Build", desc: "Rapid sprints with weekly staging deployments and feedback." },
              { icon: <ShieldCheck size={20}/>, title: "3. Scale", desc: "Production launch with rigorous testing and SEO tuning." },
            ].map((step, i) => (
              <div key={i} className="p-12 rounded-[3rem] border border-zinc-100 bg-white shadow-sm hover:shadow-xl transition-all group">
                <div className="text-blue-600 mb-6 group-hover:rotate-12 transition-transform">{step.icon}</div>
                <h3 className="font-black text-2xl mb-4 tracking-tighter">{step.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. FAQ SECTION (High Contrast) */}
        <div className="max-w-4xl mx-auto py-24 border-t border-zinc-100">
          <h2 className="text-4xl font-black mb-16 text-center tracking-tighter">Common Inquiries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { q: "What is your project timeline?", a: "Standard MVPs take 4 to 8 weeks depending on technical complexity." },
              { q: "Post-launch support?", a: "I provide monthly maintenance and priority scaling support packages." },
              { q: "Regional availability?", a: "Based in India, but I operate on a global schedule for US/UK/EU clients." },
              { q: "Payment Terms?", a: "Standard 50/50 split or milestone-based payments via Wire/Stripe." }
            ].map((item, i) => (
              <div key={i}>
                <h3 className="font-black mb-4 text-zinc-950 text-sm uppercase tracking-widest">{item.q}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      <footer className="mt-20 text-center">
          <p className="text-[10px] font-bold text-zinc-300 uppercase tracking-[0.5em]">
              © {new Date().getFullYear()} Hiren Masaliya — High End Engineering
          </p>
      </footer>
    </main>
  );
}