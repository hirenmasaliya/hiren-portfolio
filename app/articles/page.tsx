"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  TrendingUp,
  Lightbulb,
  Code,
  FileText, // Replaced <articles />
  Gauge,    // Replaced <Speed />
  Bookmark, // Replaced <BookmarkBorder />
  ArrowRight, // Replaced <ArrowForward />
  ArrowUpRight, // Replaced <OpenInNew />
  ShieldCheck, // Replaced <Security />
} from "lucide-react"; 

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
      icon: <ShieldCheck size={24} />,
      featured: true,
    },
    {
      id: "small-business-app",
      slug: "/articles/small-business-app",
      title: "Why Your Small Business Needs an App in 2026",
      excerpt:
        "How a well-designed mobile app can help small businesses stay connected with customers and simplify operations.",
      category: "Business Advice",
      date: "Sep 28, 2026",
      readTime: "4 min read",
      icon: <TrendingUp size={24} />,
      featured: false,
    },
    {
      id: "website-vs-app",
      slug: "/articles/website-vs-app",
      title: "Website vs. Mobile App: Which Should You Build?",
      excerpt:
        "A practical comparison including customer acquisition, engagement, cost, scalability and when each makes sense.",
      category: "Business Advice",
      date: "Sep 18, 2026",
      readTime: "5 min read",
      icon: <FileText size={24} />,
      featured: false,
    },
    {
      id: "local-shop-ideas",
      slug: "/articles/local-shop-ideas",
      title: "3 Simple App Ideas for Local Shops and Services",
      excerpt:
        "Simple digital product ideas for local businesses to improve communication, bookings, and everyday management.",
      category: "App Ideas",
      date: "Sep 05, 2026",
      readTime: "3 min read",
      icon: <Lightbulb size={24} />,
      featured: false,
    },
    {
      id: "fast-apps-money",
      slug: "/articles/fast-apps-money",
      title: "Why Fast Apps Make More Money",
      excerpt:
        "Performance is part of the user experience. Explore why fast loading, responsive interactions and lightweight architecture matter.",
      category: "Business Advice",
      date: "Aug 10, 2026",
      readTime: "4 min read",
      icon: <Gauge size={24} />,
      featured: false,
    },
  ];

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((article) => article.category === activeCategory);

  const featuredArticle = articles.find((article) => article.featured);

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#1F1F1F] font-sans selection:bg-[#D3E3FD] selection:text-[#041E49]">
      
      {/* =====================================================
          HERO - Material "Display" Typography
      ====================================================== */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8DEF8] text-[#1D192B] rounded-full text-sm font-medium mb-6">
            <Code size={16} />
            <span>Developer Journal</span>
          </div>
          
          {/* Material 'Display Large' specification: 57px/64px */}
          <h1 className="text-[45px] md:text-[57px] leading-[1.1] md:leading-[64px] font-normal tracking-[-0.25px] text-[#1F1F1F] mb-6">
            Articles & Ideas
          </h1>
          
          {/* Material 'Body Large' specification */}
          <p className="text-lg md:text-xl text-[#444746] font-normal max-w-2xl leading-relaxed">
            Practical thoughts on building mobile apps, websites, and digital products — from real development experiences to business ideas and architecture decisions.
          </p>
        </div>
      </section>

      {/* =====================================================
          FILTER CHIPS - Material Design 3 Style
      ====================================================== */}
      <section className="sticky top-0 z-10 bg-[#F8F9FA]/90 backdrop-blur-md py-4 border-b border-[#E0E2E0] mb-8">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide items-center">
            {categories.map((category) => {
              const isSelected = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`
                    flex items-center gap-2 h-8 px-4 rounded-lg text-sm font-medium transition-all shrink-0
                    ${
                      isSelected
                        ? "bg-[#C2E7FF] text-[#001D35] hover:bg-[#B1DDF6]" 
                        : "bg-transparent border border-[#747775] text-[#444746] hover:bg-[#1F1F1F]/5"
                    }
                  `}
                >
                  {isSelected && <Check size={16} className="text-[#001D35]" />}
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED ARTICLE - Material "Elevated Card"
      ====================================================== */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 mb-12">
        {featuredArticle && activeCategory === "All" && (
          <Link href={featuredArticle.slug} className="block group">
            <div className="bg-white rounded-[28px] overflow-hidden shadow-[0_1px_3px_1px_rgba(0,0,0,0.15),0_1px_2px_0_rgba(0,0,0,0.3)] hover:shadow-[0_4px_8px_3px_rgba(0,0,0,0.15),0_1px_3px_0_rgba(0,0,0,0.3)] transition-shadow duration-300">
              <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start">
                {/* Visual Area */}
                <div className="w-full md:w-1/3 h-48 md:h-full min-h-[200px] bg-[#D3E3FD] rounded-[16px] flex flex-col items-center justify-center text-[#041E49] relative overflow-hidden group-hover:bg-[#C2E7FF] transition-colors">
                  <ShieldCheck size={64} strokeWidth={1.5} />
                  <div className="absolute top-4 left-4 bg-[#0A56D1] text-white text-xs font-medium px-3 py-1 rounded-full">
                    Case Study
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-sm text-[#444746] font-medium mb-3">
                    <span>{featuredArticle.date}</span>
                    <span>•</span>
                    <span>{featuredArticle.readTime}</span>
                  </div>

                  {/* Material 'Headline Medium' */}
                  <h2 className="text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] font-normal text-[#1F1F1F] mb-4 group-hover:text-[#0A56D1] transition-colors">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-[#444746] text-base leading-relaxed mb-8 max-w-2xl">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="mt-auto">
                    {/* Material "Filled Tonal Button" */}
                    <span className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#E8DEF8] hover:bg-[#EADDFF] text-[#1D192B] rounded-full text-sm font-medium transition-colors">
                      Read full article
                      <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* =====================================================
            ARTICLE GRID - Material "Outlined Cards"
        ====================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <AnimatePresence mode="popLayout">
            {filteredArticles
              .filter((article) => !article.featured || activeCategory !== "All")
              .map((article) => (
                <motion.article
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={article.id}
                  className="h-full"
                >
                  <Link href={article.slug} className="block h-full group">
                    <div className="h-full bg-[#FAFDFC] border border-[#747775] rounded-[16px] p-6 hover:bg-[#F0F4F9] transition-colors duration-200 flex flex-col">
                      
                      {/* Top row: Icon & Category */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-12 h-12 rounded-full bg-[#E1E3E1] text-[#444746] flex items-center justify-center group-hover:bg-[#C2E7FF] group-hover:text-[#001D35] transition-colors">
                          {article.icon}
                        </div>
                        <Bookmark size={24} className="text-[#747775] hover:text-[#1F1F1F]" />
                      </div>

                      <div className="mb-2">
                        <span className="text-[#0A56D1] text-xs font-medium tracking-wide uppercase">
                          {article.category}
                        </span>
                      </div>

                      {/* Material 'Title Large' */}
                      <h3 className="text-[22px] leading-[28px] font-normal text-[#1F1F1F] mb-3 group-hover:text-[#0A56D1] transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-[#444746] text-sm leading-relaxed mb-6 flex-1">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center gap-2 text-xs text-[#747775] font-medium pt-4 border-t border-[#E0E2E0]">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
          </AnimatePresence>
        </div>
      </div>

      {/* =====================================================
          CTA / BOTTOM BAR - Material "Bottom App Bar / FAB style"
      ====================================================== */}
      <section className="bg-[#E8DEF8] py-16 mt-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <h2 className="text-[32px] leading-[40px] font-normal text-[#1D192B] mb-4">
            Have a project in mind?
          </h2>
          <p className="text-[#4A4458] text-base mb-8 max-w-xl mx-auto">
            Whether you need a mobile app, web platform, or a completely new digital product, I can help turn your vision into reality.
          </p>
          
          {/* Material "Extended FAB (Primary)" */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#6750A4] hover:bg-[#7D66B6] text-white h-14 px-8 rounded-2xl shadow-[0_4px_8px_3px_rgba(103,80,164,0.15)] transition-all font-medium"
          >
            <ArrowUpRight size={20} />
            Start a Conversation
          </Link>
        </div>
      </section>
      
    </main>
  );
}