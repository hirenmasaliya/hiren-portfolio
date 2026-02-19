"use client";

import React, { useState } from 'react';
import { Mail, MapPin, Calendar, Github, Linkedin, Twitter, ArrowRight, MessageSquare, ShieldCheck, Zap } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-black text-white min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[120px] -z-10" />

      <section className="max-w-7xl mx-auto px-6">
        
        {/* HEADER AREA */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tighter leading-none">
            Let’s build <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              something iconic.
            </span>
          </h1>
          <p className="text-gray-400 text-xl leading-relaxed">
            Whether you have a fully-formed idea or just the spark of one, I’m here to help you architect and engineer it into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-32">
          
          {/* LEFT SIDE: INFO & SOCIALS (4 Cols) */}
          <div className="lg:col-span-5 space-y-10">
            
            <div className="space-y-6">
              <div className="flex items-center gap-5 group p-4 rounded-3xl hover:bg-white/5 transition-all">
                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center border border-white/5 text-blue-400 shadow-xl group-hover:border-blue-500/50 transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-bold tracking-[0.2em] mb-1">Direct Email</p>
                  <a href="mailto:hirenmasaliya14@gmail.com" className="text-lg font-semibold hover:text-blue-400 transition-colors">hirenmasaliya14@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-5 group p-4 rounded-3xl hover:bg-white/5 transition-all">
                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center border border-white/5 text-cyan-400 shadow-xl group-hover:border-cyan-500/50 transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-bold tracking-[0.2em] mb-1">Based In</p>
                  <p className="text-lg font-semibold text-zinc-200">Gujarat, India <span className="text-zinc-500 font-normal">| Remote Worldwide</span></p>
                </div>
              </div>
            </div>

            {/* Quick Actions / Schedule */}
            <div className="p-8 bg-gradient-to-br from-zinc-900 to-black border border-white/5 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <Calendar size={80} />
              </div>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Calendar size={20} className="text-blue-500" /> Prefer a call?
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Skip the back-and-forth. Book a 15-minute discovery session directly on my calendar.
              </p>
              <button className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-blue-400 hover:text-white transition-colors">
                Book a meeting <ArrowRight size={16} />
              </button>
            </div>

            {/* Social Grid */}
            <div className="flex gap-4">
              {[
                { icon: <Github size={20}/>, link: "#", color: "hover:text-white" },
                { icon: <Linkedin size={20}/>, link: "#", color: "hover:text-blue-500" },
                { icon: <Twitter size={20}/>, link: "#", color: "hover:text-cyan-400" },
              ].map((social, i) => (
                <a key={i} href={social.link} className={`w-12 h-12 bg-zinc-900 border border-white/5 rounded-xl flex items-center justify-center text-zinc-500 transition-all ${social.color} hover:border-current`}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: CONTACT FORM (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-900/30 backdrop-blur-md p-8 md:p-14 rounded-[3rem] border border-white/10 relative shadow-2xl">
              {submitted ? (
                <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-blue-500/20 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap size={40} />
                  </div>
                  <h2 className="text-3xl font-bold mb-3 tracking-tight">Transmission Received!</h2>
                  <p className="text-gray-400 max-w-xs mx-auto mb-8">
                    I've received your message. Expect a response in your inbox within 24 hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)} 
                    className="text-sm font-black uppercase tracking-widest border-b-2 border-blue-500 pb-1 hover:text-blue-400 transition-all"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Your Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Elon Musk"
                        className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4.5 focus:outline-none focus:border-blue-500 focus:ring-4 ring-blue-500/10 transition-all placeholder:text-zinc-700"
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="elon@mars.com"
                        className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4.5 focus:outline-none focus:border-blue-500 focus:ring-4 ring-blue-500/10 transition-all placeholder:text-zinc-700"
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Project Details</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="Tell me about the problem we're solving..."
                      className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4.5 focus:outline-none focus:border-blue-500 focus:ring-4 ring-blue-500/10 transition-all placeholder:text-zinc-700 resize-none"
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button className="group w-full bg-white text-black font-black uppercase tracking-[0.3em] text-xs py-5 rounded-2xl transition-all hover:bg-blue-500 hover:text-white active:scale-[0.98] flex items-center justify-center gap-3">
                    Inquire Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-[10px] text-zinc-600 font-medium uppercase tracking-widest">
                    Safe & Secure | No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* WORK PROCESS SECTION */}
        <div className="mb-32">
          <h2 className="text-center text-xs font-black uppercase tracking-[0.4em] text-zinc-600 mb-12">The Collaboration Path</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <MessageSquare size={20}/>, title: "1. Discovery", desc: "We discuss your goals, target audience, and technical requirements in detail." },
              { icon: <Zap size={20}/>, title: "2. Execution", desc: "Rapid prototyping and development with weekly updates and live staging access." },
              { icon: <ShieldCheck size={20}/>, title: "3. Launch", desc: "Rigorous testing, SEO optimization, and deployment to your production environment." },
            ].map((step, i) => (
              <div key={i} className="p-8 rounded-[2rem] border border-white/5 bg-zinc-900/20 hover:border-blue-500/20 transition-all group">
                <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform">{step.icon}</div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center tracking-tight italic">Commonly Asked</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { q: "What is your typical project timeline?", a: "Most MVP projects take 4-6 weeks from discovery to deployment." },
              { q: "Do you offer post-launch support?", a: "Yes, I offer monthly maintenance packages for updates and scaling." },
              { q: "Can you work with my existing team?", a: "Absolutely. I often join teams as a technical consultant or lead developer." },
              { q: "Which payment methods do you accept?", a: "I accept Wire Transfer, Stripe, and Crypto (USDC/ETH)." }
            ].map((item, i) => (
              <div key={i} className="bg-zinc-900/30 p-8 rounded-3xl border border-white/5 hover:bg-zinc-900/50 transition-all">
                <h3 className="font-bold mb-3 text-blue-400 text-sm">Q: {item.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}