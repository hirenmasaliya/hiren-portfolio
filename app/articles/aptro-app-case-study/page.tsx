"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Briefcase,
  PackagePlus,
  Search,
  ArrowRightLeft,
  TrendingUp,
  Info,
  CheckCircle2,
  BarChart4
} from "lucide-react";

export default function AptroAppArticle() {
  const [activeSection, setActiveSection] = useState("business-need");

  // Intersection observer to highlight the active section in the sidebar
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { id: "business-need", label: "1. The Business Need" },
    { id: "entries-sales", label: "2. Entries & Sales Tracking" },
    { id: "advanced-search", label: "3. Advanced Search" },
    { id: "bidding-system", label: "4. Buy & Sell Bids" },
  ];

  return (
    <main className="min-h-screen bg-white text-[#1F1F1F] font-sans selection:bg-[#D3E3FD] selection:text-[#041E49] pb-32">
      
      {/* =====================================================
          HEADER SECTION 
      ====================================================== */}
      <header className="pt-24 pb-12 max-w-7xl mx-auto px-6 md:px-12 border-b border-[#E0E2E0]">
        <Link 
          href="/articles" 
          className="inline-flex items-center gap-2 text-[#444746] hover:text-[#0A56D1] transition-colors font-medium mb-8"
        >
          <ArrowLeft size={20} />
          Back to Articles
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 text-sm text-[#747775] font-medium mb-4">
            <span className="text-[#0A56D1] font-semibold tracking-wide uppercase">Case Study</span>
            <span className="w-1 h-1 rounded-full bg-[#747775]"></span>
            <span>Oct 28, 2026</span>
            <span className="w-1 h-1 rounded-full bg-[#747775]"></span>
            <span>6 min read</span>
          </div>

          <h1 className="text-[40px] md:text-[52px] leading-[1.15] font-normal text-[#1F1F1F] mb-6 tracking-tight">
            Introducing Aptro: A Modern B2B Trading & Bidding App
          </h1>
          
          <p className="text-xl text-[#444746] leading-relaxed">
            A deep dive into the business requirements and architecture behind Aptro—an application designed to streamline product entries, track sales, and revolutionize B2B commerce with a real-time buy and sell bidding engine.
          </p>
        </motion.div>
      </header>

      {/* =====================================================
          TWO-COLUMN LAYOUT
      ====================================================== */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 flex flex-col lg:flex-row gap-16 relative">
        
        {/* LEFT SIDEBAR NAVIGATION */}
        <aside className="hidden lg:block w-[280px] shrink-0">
          <div className="sticky top-24">
            <h3 className="text-sm font-semibold text-[#1F1F1F] uppercase tracking-wider mb-6">On this page</h3>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`px-4 py-2.5 rounded-r-full border-l-4 transition-colors text-sm font-medium ${
                    activeSection === link.id
                      ? "border-[#0A56D1] bg-[#F0F4F9] text-[#0A56D1]"
                      : "border-transparent text-[#444746] hover:bg-[#F8F9FA] hover:text-[#1F1F1F]"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* RIGHT CONTENT AREA */}
        <motion.article 
          className="flex-1 max-w-3xl space-y-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          
          {/* SECTION 1: The Business Need */}
          <section id="business-need" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <Briefcase className="text-[#0A56D1]" size={32} strokeWidth={1.5} />
              <h2 className="text-3xl font-normal text-[#1F1F1F]">1. The Business Need</h2>
            </div>
            
            <div className="space-y-6 text-[#444746] text-lg leading-relaxed">
              <p>In the wholesale and B2B market, traditional trading is often chaotic. Wholesalers, distributors, and retailers rely heavily on fragmented communication channels like WhatsApp groups, Excel spreadsheets, and endless phone calls to negotiate prices.</p>
              
              <div className="bg-[#FFF8E1] rounded-2xl p-6 border-l-4 border-[#FF8F00] my-8">
                <h3 className="text-xl font-medium text-[#1F1F1F] mb-3">The Core Problem</h3>
                <p className="text-base text-[#5D4037]">
                  Businesses lack a centralized platform where they can openly list their inventory, track ongoing sales, and negotiate prices securely. There is zero price transparency, leading to inefficient markets and lost revenue margins.
                </p>
              </div>

              <p>To solve this, I designed <strong>Aptro</strong>—a digital platform built specifically for trading businesses. It serves as a unified ecosystem for inventory management and dynamic pricing.</p>
            </div>
          </section>

          {/* SECTION 2: Entries & Sales */}
          <section id="entries-sales" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <PackagePlus className="text-[#0A56D1]" size={32} strokeWidth={1.5} />
              <h2 className="text-3xl font-normal text-[#1F1F1F]">2. Product Entries & Sales Tracking</h2>
            </div>
            
            <div className="space-y-6 text-[#444746] text-lg">
              <p>The foundation of the Aptro app is its robust inventory and ledger system. A business cannot trade effectively if they do not know exactly what they have.</p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[#0A56D1] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1F1F1F]">Dynamic Product Entries</strong>
                    <p className="mt-1 text-base">Sellers can instantly create "Entries" for new stock batches. Each entry records the product category, quality grading, volume/weight, and the base asking price.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <BarChart4 size={24} className="text-[#0A56D1] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1F1F1F]">Automated Sales Ledger</strong>
                    <p className="mt-1 text-base">When a deal is struck, the app automatically moves the entry to the "Sales" ledger. This gives businesses a real-time dashboard of their daily, weekly, and monthly trading volume and revenue.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* SECTION 3: Advanced Search */}
          <section id="advanced-search" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <Search className="text-[#0A56D1]" size={32} strokeWidth={1.5} />
              <h2 className="text-3xl font-normal text-[#1F1F1F]">3. Advanced Search & Discovery</h2>
            </div>
            
            <div className="space-y-8 text-[#444746] text-lg">
              <p>In a marketplace with thousands of active listings, discoverability is critical. Buyers do not want to scroll through endless feeds; they need precision.</p>
              
              <div className="bg-[#F8F9FA] rounded-2xl p-8 border border-[#E0E2E0]">
                <strong className="text-xl font-medium text-[#1F1F1F] block mb-4">Search Capabilities in Aptro:</strong>
                <ul className="space-y-3 text-base">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#0A56D1]"></div> <strong>Category & Grade Filters:</strong> Quickly isolate products matching exact quality standards.</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#0A56D1]"></div> <strong>Location-Based Matching:</strong> Find sellers within a specific logistics radius to save on freight costs.</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#0A56D1]"></div> <strong>Live Price Sorting:</strong> Sort search results based on the lowest asking price or highest active bid.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION 4: Bidding System */}
          <section id="bidding-system" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-8">
              <ArrowRightLeft className="text-[#0A56D1]" size={32} strokeWidth={1.5} />
              <h2 className="text-3xl font-normal text-[#1F1F1F]">4. The Bidding Engine: Buy & Sell Bids</h2>
            </div>
            
            <div className="space-y-8 text-[#444746] text-lg">
              <p>The most innovative feature of Aptro is its stock-market-style bidding engine. Instead of static, non-negotiable prices, the app facilitates dynamic price discovery.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#E9F3EA] rounded-2xl p-6 border border-[#A3D9A5]">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="text-[#2E7D32]" size={24} />
                    <h3 className="text-xl font-medium text-[#1F1F1F]">Buy Bids</h3>
                  </div>
                  <p className="text-base text-[#1F1F1F]">
                    Buyers can place a "Buy Bid" specifying the exact quantity they need and the maximum price they are willing to pay. Sellers are notified instantly and can choose to accept the bid to close a fast deal.
                  </p>
                </div>
                
                <div className="bg-[#FCE8E6] rounded-2xl p-6 border border-[#F1A9A0]">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="text-[#C62828] rotate-180" size={24} />
                    <h3 className="text-xl font-medium text-[#1F1F1F]">Sell Bids (Asks)</h3>
                  </div>
                  <p className="text-base text-[#1F1F1F]">
                    Sellers list their product entries with a "Sell Bid" (an asking price). Multiple buyers can counter-offer on this listing. The seller has the power to review the highest counter-bids and award the sale to the best buyer.
                  </p>
                </div>
              </div>

              <div className="bg-[#F0F4F9] rounded-2xl p-8 border-l-4 border-[#0A56D1] mt-8">
                <div className="flex gap-4">
                  <Info className="text-[#0A56D1] shrink-0 mt-1" size={28} />
                  <div>
                    <strong className="text-xl font-medium text-[#1F1F1F] block mb-2">Real-Time Negotiation</strong>
                    <p className="text-base text-[#444746]">
                      By utilizing WebSockets, Aptro updates these bids in real-time. A user watching a listing will see the price flash and update immediately when a competitor places a higher buy bid, driving engagement and ensuring fair market value for the goods.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </motion.article>
      </div>
    </main>
  );
}