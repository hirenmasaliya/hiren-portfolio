"use client";

import React from 'react';
import { 
  LayoutDashboard, 
  Receipt, 
  Users, 
  Package, 
  PieChart, 
  ShieldCheck, 
  Smartphone,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export default function AptroPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-600/20 to-transparent blur-[120px] -z-10" />
        
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Smartphone size={14} /> Mobile First Business OS
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter bg-gradient-to-r from-white via-blue-100 to-zinc-500 bg-clip-text text-transparent">
            Aptro App
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Founded by <span className="text-white font-semibold">Hiren Masaliya</span>. 
            The all-in-one workspace designed to bridge the gap between complex ERPs and simple spreadsheets.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
             <a
              href="https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro"
              target="_blank"
              className="bg-white text-black px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-blue-500 hover:text-white transition-all flex items-center gap-2"
            >
              Get it on Play Store <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* CORE STATS / QUICK INFO */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 bg-zinc-900/50 border border-white/5 rounded-[2rem] backdrop-blur-sm">
            <h3 className="text-zinc-500 text-xs font-black uppercase tracking-[0.2em] mb-4">The Vision</h3>
            <p className="text-zinc-300 leading-relaxed italic">
              "To empower small businesses with an intuitive platform that makes management feel invisible, so they can focus on growth."
            </p>
          </div>
          <div className="p-8 bg-zinc-900/50 border border-white/5 rounded-[2rem] backdrop-blur-sm md:col-span-2">
            <h3 className="text-zinc-500 text-xs font-black uppercase tracking-[0.2em] mb-4">The Mission</h3>
            <p className="text-zinc-300 leading-relaxed text-lg">
              We provide a reliable, user-friendly, and scalable solution that simplifies business operations, automates billing, and offers real-time insights for informed decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Powerful Features for Modern Business</h2>
          <p className="text-zinc-500">Everything you need to run your freelance career or small shop from your pocket.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="group p-8 bg-zinc-900/30 border border-white/5 rounded-[2.5rem] hover:bg-zinc-900/60 hover:border-blue-500/30 transition-all">
              <div className="w-12 h-12 bg-blue-600/10 text-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY APTRO? (The Details) */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-8 tracking-tight">Why choose Aptro?</h2>
            <div className="space-y-6">
              {benefits.map((b, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 text-blue-500"><CheckCircle2 size={20} /></div>
                  <div>
                    <h4 className="font-bold text-lg">{b.title}</h4>
                    <p className="text-zinc-500 text-sm">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* PLACEHOLDER FOR APP SCREENSHOT/MOCKUP */}
          <div className="lg:w-1/2 w-full aspect-square bg-gradient-to-br from-zinc-800 to-zinc-950 rounded-[3rem] border border-white/10 flex items-center justify-center relative overflow-hidden p-8">
             <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
             <div className="text-center z-10">
                <Smartphone size={120} className="mx-auto text-blue-500/20 mb-4" />
                <p className="text-zinc-600 uppercase font-black tracking-widest text-xs">Aptro Interface Preview</p>
             </div>
             {/* Decorative Elements */}
             <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="bg-gradient-to-b from-zinc-900 to-black p-12 md:p-20 rounded-[4rem] border border-white/10 relative overflow-hidden">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to scale your business?</h2>
          <p className="text-zinc-400 mb-10 text-lg">Join the growing community of entrepreneurs using Aptro to simplify their daily workflows.</p>
          <a
            href="https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro"
            target="_blank"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all hover:scale-105"
          >
            Download Now
          </a>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    icon: <LayoutDashboard />,
    title: "Unified Dashboard",
    desc: "A birds-eye view of your business. Monitor ongoing projects, pending orders, and cash flow in a single glance."
  },
  {
    icon: <Receipt />,
    title: "Automated Billing",
    desc: "Generate professional GST/non-GST invoices. Track partial payments and send automated reminders to clients."
  },
  {
    icon: <Package />,
    title: "Inventory Sync",
    desc: "Real-time stock tracking. Automatically deduct items when an order is fulfilled and get low-stock alerts."
  },
  {
    icon: <Users />,
    title: "Team Roles",
    desc: "Invite employees with specific permissions. Ensure your delivery team only sees what they need to see."
  },
  {
    icon: <PieChart />,
    title: "Financial Analytics",
    desc: "Visual reports on your profit and loss. Understand which products or services are your top performers."
  },
  {
    icon: <ShieldCheck />,
    title: "Data Security",
    desc: "Your data is encrypted and backed up daily. Access your business records securely from any Android device."
  }
];

const benefits = [
  {
    title: "Centralized Management",
    desc: "Eliminate the need for multiple apps. Aptro handles everything from the first client lead to the final payment."
  },
  {
    title: "Scalable Infrastructure",
    desc: "Whether you are a solo freelancer or a shop with 10 employees, our architecture grows with your volume."
  },
  {
    title: "Offline-First Capability",
    desc: "Keep working even when the internet is spotty. Sync your data to the cloud whenever you're back online."
  }
];