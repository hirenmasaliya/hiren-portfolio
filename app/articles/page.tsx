"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Check,
  TrendingUp,
  Lightbulb,
  Code,
  FileText,
  Gauge,
  Bookmark,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Leaf,
} from "lucide-react"; 

// --- Animation Variants ---
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 300, damping: 24 } 
  },
};

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Case Studies", "Business Advice", "App Ideas"];

  const articles = [
    {
      id: "voting-app",
      slug: "/articles/voting-app",
      title: "How I Designed and Built a Secure Digital Voting App",
      excerpt:
        "A deep look at how I approached voter verification, vote privacy, duplicate-vote prevention, election timing, and the overall voting experience.",
      category: "Case Studies",
      date: "Oct 2, 2026",
      readTime: "10 min read",
      icon: <ShieldCheck size={28} />,
      featured: true,
    },
    {
      id: "eco-temple-waste-app",
      slug: "/articles/eco-temple-waste-app",
      title: "App Idea: Upcycling Temple & Household Offerings",
      excerpt:
        "A platform connecting temples and homes to collect organic offerings and floral waste from followers, transforming them into sustainable eco-products to protect our environment and health.",
      category: "App Ideas",
      date: "Oct 5, 2026",
      readTime: "4 min read",
      icon: <Leaf size={24} />,
      featured: false,
    },
  ];

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((article) => article.category === activeCategory);

  const featuredArticle = articles.find((article) => article.featured);

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#1F1F1F] font-sans selection:bg-[#D3E3FD] selection:text-[#041E49] overflow-hidden">
      
      {/* =====================================================
          HERO - Staggered Entrance
      ====================================================== */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 max-w-[1200px] mx-auto px-4 md:px-8">
        <motion.div 
          className="max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#E8DEF8] text-[#1D192B] rounded-full text-sm font-medium mb-6 shadow-sm">
            <Code size={16} />
            <span>Developer Journal</span>
          </motion.div>
          
          <motion.h1 variants={fadeUpVariant} className="text-[40px] md:text-[57px] leading-[1.1] md:leading-[64px] font-normal tracking-[-0.25px] text-[#1F1F1F] mb-6">
            Articles & Ideas
          </motion.h1>
          
          <motion.p variants={fadeUpVariant} className="text-lg md:text-xl text-[#444746] font-normal max-w-2xl leading-relaxed">
            Practical thoughts on building mobile apps, websites, and digital products — from real development experiences to business ideas and architecture decisions.
          </motion.p>
        </motion.div>
      </section>

      {/* =====================================================
          FILTER CHIPS - Tactile Interaction
      ====================================================== */}
      <section className="sticky top-0 z-30 bg-[#F8F9FA]/80 backdrop-blur-xl py-4 border-b border-[#E0E2E0] mb-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide items-center">
            {categories.map((category) => {
              const isSelected = activeCategory === category;
              return (
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`
                    flex items-center gap-2 h-9 px-5 rounded-full text-sm font-medium transition-colors shrink-0 border
                    ${
                      isSelected
                        ? "bg-[#C2E7FF] border-[#C2E7FF] text-[#001D35] shadow-sm" 
                        : "bg-white border-[#E0E2E0] text-[#444746] hover:bg-[#F0F4F9] hover:border-[#747775]"
                    }
                  `}
                >
                  {isSelected && <Check size={16} className="text-[#001D35]" />}
                  {category}
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 mb-12">
        {/* =====================================================
            FEATURED ARTICLE
        ====================================================== */}
        <AnimatePresence mode="wait">
          {featuredArticle && activeCategory === "All" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <Link href={featuredArticle.slug} className="block group">
                <div className="bg-white rounded-[28px] overflow-hidden border border-[#E0E2E0] shadow-sm hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                  <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 items-stretch">
                    
                    {/* Visual Area with dynamic gradient & floating icon */}
                    <div className="w-full md:w-2/5 h-64 md:h-auto min-h-[240px] bg-gradient-to-br from-[#D3E3FD] to-[#E8DEF8] rounded-[20px] flex flex-col items-center justify-center text-[#041E49] relative overflow-hidden group-hover:from-[#C2E7FF] group-hover:to-[#D3E3FD] transition-colors duration-500">
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                      <motion.div 
                        animate={{ y: [0, -8, 0] }} 
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                      >
                        <ShieldCheck size={72} strokeWidth={1.5} className="drop-shadow-sm" />
                      </motion.div>
                      <div className="absolute top-4 left-4 bg-[#0A56D1] text-white text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full shadow-md">
                        Case Study
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 flex flex-col justify-center py-4">
                      <div className="flex items-center gap-3 text-sm text-[#747775] font-medium mb-4">
                        <span className="flex items-center gap-1.5"><Code size={14} />{featuredArticle.date}</span>
                        <span className="w-1 h-1 rounded-full bg-[#747775]"></span>
                        <span>{featuredArticle.readTime}</span>
                      </div>

                      <h2 className="text-[28px] md:text-[36px] leading-[1.2] font-normal text-[#1F1F1F] mb-4 group-hover:text-[#0A56D1] transition-colors">
                        {featuredArticle.title}
                      </h2>

                      <p className="text-[#444746] text-lg leading-relaxed mb-8 max-w-2xl">
                        {featuredArticle.excerpt}
                      </p>

                      <div className="mt-auto">
                        <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#E8DEF8] group-hover:bg-[#EADDFF] text-[#1D192B] rounded-full text-sm font-semibold transition-colors">
                          Read full article
                          <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =====================================================
            ARTICLE GRID
        ====================================================== */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredArticles
              .filter((article) => !article.featured || activeCategory !== "All")
              .map((article) => (
                <motion.article
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
                  key={article.id}
                  className="h-full"
                >
                  <Link href={article.slug} className="block h-full group">
                    <div className="h-full bg-white border border-[#E0E2E0] rounded-[24px] p-6 hover:border-[#C2E7FF] hover:shadow-[0_8px_24px_rgba(10,86,209,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden">
                      
                      {/* Subtle hover background highlight */}
                      <div className="absolute inset-0 bg-gradient-to-b from-[#F0F4F9]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                      {/* Top row: Icon & Bookmark */}
                      <div className="flex items-start justify-between mb-6 relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-[#F0F4F9] text-[#444746] flex items-center justify-center group-hover:bg-[#D3E3FD] group-hover:text-[#041E49] group-hover:scale-110 transition-all duration-300 shadow-sm">
                          {article.icon}
                        </div>
                        <button className="text-[#747775] hover:text-[#0A56D1] transition-colors p-2 -mr-2 -mt-2">
                          <Bookmark size={22} strokeWidth={1.5} />
                        </button>
                      </div>

                      <div className="mb-3 relative z-10">
                        <span className="inline-block px-2.5 py-1 bg-[#E8DEF8]/50 text-[#6750A4] text-xs font-semibold tracking-wide uppercase rounded-md">
                          {article.category}
                        </span>
                      </div>

                      <h3 className="text-[22px] leading-[1.3] font-normal text-[#1F1F1F] mb-3 group-hover:text-[#0A56D1] transition-colors relative z-10">
                        {article.title}
                      </h3>

                      <p className="text-[#444746] text-sm leading-relaxed mb-6 flex-1 relative z-10">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center gap-2 text-xs text-[#747775] font-medium pt-5 border-t border-[#E0E2E0] relative z-10">
                        <span>{article.date}</span>
                        <span className="w-1 h-1 rounded-full bg-[#E0E2E0]"></span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* =====================================================
          CTA / BOTTOM BAR
      ====================================================== */}
      <section className="relative py-20 mt-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FA] to-[#E8DEF8]"></div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-[36px] md:text-[44px] leading-[1.2] font-normal text-[#1D192B] mb-4">
            Have a project in mind?
          </h2>
          <p className="text-[#4A4458] text-lg mb-10 max-w-xl mx-auto">
            Whether you need a mobile app, web platform, or a completely new digital product, I can help turn your vision into reality.
          </p>
          
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-[#6750A4] hover:bg-[#7D66B6] hover:-translate-y-0.5 text-white h-14 px-8 rounded-full shadow-[0_4px_12px_rgba(103,80,164,0.25)] hover:shadow-[0_8px_20px_rgba(103,80,164,0.3)] transition-all duration-300 font-medium text-lg"
          >
            Start a Conversation
            <ArrowUpRight size={22} className="group-hover:rotate-12 transition-transform duration-300" />
          </Link>
        </div>
      </section>
      
    </main>
  );
}