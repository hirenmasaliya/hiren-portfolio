"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Vote,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  TrendingUp,
  Lightbulb,
  BookOpen,
  MessageCircle,
  Sparkles,
  Code2,
  Smartphone,
  Layers3,
  Database,
  Search,
  ChevronRight,
  CalendarDays,
  PenLine,
  LockKeyhole,
} from "lucide-react";

const customEase = [0.25, 1, 0.5, 1] as const;

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Case Studies",
    "Business Advice",
    "App Ideas",
  ];

  const articles = [
    {
      id: "voting-app",
      slug: "/articles/voting-app",
      title: "How I Designed and Built a Secure Digital Voting App",
      excerpt:
        "A deep look at how I approached voter verification, vote privacy, duplicate-vote prevention, election timing, backend validation, and the overall voting experience.",
      category: "Case Studies",
      date: "Oct 2, 2026",
      readTime: "10 min read",
      icon: <Vote size={25} />,
      featured: true,
      tags: ["Mobile App", "Security", "UX"],
    },

    {
      id: "small-business-app",
      slug: "/articles/small-business-app",
      title: "Why Your Small Business Needs an App in 2026",
      excerpt:
        "How a well-designed mobile app can help small businesses stay connected with customers, simplify daily operations and create a stronger digital presence.",
      category: "Business Advice",
      date: "Sep 28, 2026",
      readTime: "4 min read",
      icon: <TrendingUp size={24} />,
      featured: false,
      tags: ["Business", "Mobile App"],
    },

    {
      id: "website-vs-app",
      slug: "/articles/website-vs-app",
      title: "Website vs. Mobile App: Which Should You Build?",
      excerpt:
        "A practical comparison of websites and mobile apps, including customer acquisition, engagement, cost, scalability and when each option makes sense.",
      category: "Business Advice",
      date: "Sep 18, 2026",
      readTime: "5 min read",
      icon: <BookOpen size={24} />,
      featured: false,
      tags: ["Web", "Mobile App"],
    },

    {
      id: "local-shop-ideas",
      slug: "/articles/local-shop-ideas",
      title: "3 Simple App Ideas for Local Shops and Services",
      excerpt:
        "Simple digital product ideas for local businesses that want to improve customer communication, bookings, orders and everyday business management.",
      category: "App Ideas",
      date: "Sep 05, 2026",
      readTime: "3 min read",
      icon: <Lightbulb size={24} />,
      featured: false,
      tags: ["Ideas", "Local Business"],
    },

    {
      id: "fast-apps-money",
      slug: "/articles/fast-apps-money",
      title: "Why Fast Apps Make More Money",
      excerpt:
        "Performance is part of the user experience. Explore why fast loading, responsive interactions and lightweight architecture matter for modern apps.",
      category: "Business Advice",
      date: "Aug 10, 2026",
      readTime: "4 min read",
      icon: <Sparkles size={24} />,
      featured: false,
      tags: ["Performance", "UX"],
    },
  ];

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter(
          (article) => article.category === activeCategory
        );

  const featuredArticle = articles.find(
    (article) => article.featured
  );

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sans selection:bg-blue-600 selection:text-white">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">

        {/* Background decoration */}

        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-500/[0.06] blur-[100px] rounded-full" />

          <div className="absolute top-32 left-[8%] w-2 h-2 rounded-full bg-blue-600" />

          <div className="absolute top-52 right-[12%] w-3 h-3 rounded-full bg-blue-200" />

        </div>

        <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: customEase }}
            className="max-w-4xl mx-auto text-center"
          >

            {/* Small Label */}

            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 shadow-sm rounded-full px-4 py-2 mb-7">

              <PenLine
                size={14}
                className="text-blue-600"
              />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
                Hiren's Journal
              </span>

            </div>

            {/* Heading */}

            <h1 className="text-5xl md:text-7xl font-bold tracking-[-0.04em] leading-[1.05] text-gray-950">

              Articles &{" "}

              <span className="text-blue-600">
                Ideas.
              </span>

            </h1>

            <p className="mt-7 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">

              Practical thoughts on building mobile apps, websites and
              digital products — from real development experiences to
              business ideas and product decisions.

            </p>

            {/* Stats */}

            <div className="flex flex-wrap justify-center gap-3 mt-9">

              <div className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm">

                <BookOpen
                  size={15}
                  className="text-blue-600"
                />

                <span className="text-sm font-semibold">
                  {articles.length} Articles
                </span>

              </div>

              <div className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm">

                <Code2
                  size={15}
                  className="text-blue-600"
                />

                <span className="text-sm font-semibold">
                  Real Projects
                </span>

              </div>

              <div className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm">

                <Lightbulb
                  size={15}
                  className="text-blue-600"
                />

                <span className="text-sm font-semibold">
                  Practical Ideas
                </span>

              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          FEATURED ARTICLE
      ====================================================== */}

      {featuredArticle && (

        <section className="pb-20 md:pb-28">

          <div className="max-w-[1200px] mx-auto px-6 md:px-12">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: customEase }}
            >

              <div className="flex items-center gap-3 mb-6">

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                  Featured Case Study
                </span>

                <div className="h-px bg-blue-100 flex-1" />

              </div>

              <Link href={featuredArticle.slug}>

                <article className="group relative overflow-hidden bg-slate-950 rounded-[2.5rem] p-8 md:p-12 lg:p-14 shadow-2xl">

                  {/* Glow */}

                  <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-600/20 blur-[110px] rounded-full" />

                  <div className="absolute -bottom-40 -left-40 w-[350px] h-[350px] bg-blue-500/10 blur-[100px] rounded-full" />

                  <div className="relative z-10 grid lg:grid-cols-[1fr_320px] gap-12 items-center">

                    <div>

                      {/* Meta */}

                      <div className="flex flex-wrap items-center gap-3 mb-7">

                        <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-blue-600 text-white text-xs font-bold">

                          <Vote size={14} />

                          Case Study

                        </span>

                        <span className="text-gray-400 text-sm flex items-center gap-1.5">

                          <Clock size={14} />

                          {featuredArticle.readTime}

                        </span>

                        <span className="text-gray-500 text-sm">
                          {featuredArticle.date}
                        </span>

                      </div>

                      <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight max-w-3xl group-hover:text-blue-300 transition-colors">

                        {featuredArticle.title}

                      </h2>

                      <p className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">

                        {featuredArticle.excerpt}

                      </p>

                      {/* Tags */}

                      <div className="flex flex-wrap gap-2 mt-7">

                        {featuredArticle.tags.map((tag) => (

                          <span
                            key={tag}
                            className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs font-semibold text-gray-400"
                          >
                            {tag}
                          </span>

                        ))}

                      </div>

                      <div className="mt-9 inline-flex items-center gap-3 text-white font-bold">

                        Read Case Study

                        <span className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center group-hover:translate-x-1 transition-transform">

                          <ArrowUpRight size={18} />

                        </span>

                      </div>

                    </div>


                    {/* Feature Visual */}

                    <div className="hidden lg:flex justify-center">

                      <div className="relative w-64 h-64">

                        <div className="absolute inset-5 rounded-[3rem] bg-blue-600/20 blur-2xl" />

                        <div className="absolute inset-8 rounded-[2.5rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl flex items-center justify-center">

                          <div className="w-28 h-28 rounded-[2rem] bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-600/30">

                            <ShieldCheck
                              size={58}
                              className="text-white"
                              strokeWidth={1.6}
                            />

                          </div>

                        </div>

                        <div className="absolute top-0 right-2 w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">

                          <Smartphone
                            size={22}
                            className="text-blue-300"
                          />

                        </div>

                        <div className="absolute bottom-2 left-0 w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">

                          <LockKeyhole
                            size={22}
                            className="text-blue-300"
                          />

                        </div>

                      </div>

                    </div>

                  </div>

                </article>

              </Link>

            </motion.div>

          </div>

        </section>

      )}


      {/* =====================================================
          TOPICS
      ====================================================== */}

      <section className="pb-20">

        <div className="max-w-[1200px] mx-auto px-6 md:px-12">

          <div className="grid md:grid-cols-3 gap-5">

            <TopicCard
              icon={<Smartphone size={22} />}
              title="Mobile Apps"
              description="Product ideas, UX decisions and lessons from building mobile applications."
            />

            <TopicCard
              icon={<Layers3 size={22} />}
              title="Product Thinking"
              description="How I approach features, workflows and real-world problems before writing code."
            />

            <TopicCard
              icon={<Database size={22} />}
              title="Engineering"
              description="Architecture, backend systems, performance and practical development lessons."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          ARTICLE SECTION
      ====================================================== */}

      <section className="pb-32">

        <div className="max-w-[1200px] mx-auto px-6 md:px-12">

          {/* Section Header */}

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 mb-3">
                Explore
              </p>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Latest Articles
              </h2>

            </div>

            <p className="text-gray-500 max-w-md text-sm leading-relaxed">
              Browse practical articles about apps, websites, business
              technology and product development.
            </p>

          </div>


          {/* Filter */}

          <div className="mb-10">

            <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">

              {categories.map((category) => (

                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`
                    shrink-0 px-5 py-2.5 rounded-full text-sm font-bold
                    transition-all duration-300 border
                    ${
                      activeCategory === category
                        ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20"
                        : "bg-white border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-300"
                    }
                  `}
                >
                  {category}
                </button>

              ))}

            </div>

          </div>


          {/* Grid */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <AnimatePresence mode="popLayout">

              {filteredArticles
                .filter((article) => !article.featured)
                .map((article) => (

                  <motion.article
                    layout
                    initial={{
                      opacity: 0,
                      y: 20,
                      scale: 0.97,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: 20,
                      scale: 0.97,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: customEase,
                    }}
                    key={article.id}
                    className="group"
                  >

                    <Link href={article.slug}>

                      <div className="h-full bg-white border border-gray-200 rounded-[2rem] p-7 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/[0.06] transition-all duration-500 flex flex-col">

                        {/* Icon + Category */}

                        <div className="flex items-center justify-between mb-8">

                          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">

                            {article.icon}

                          </div>

                          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">

                            {article.category}

                          </span>

                        </div>


                        {/* Title */}

                        <h3 className="text-2xl font-bold leading-[1.25] tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors">

                          {article.title}

                        </h3>


                        {/* Excerpt */}

                        <p className="text-gray-600 text-sm leading-relaxed mt-4 flex-1">

                          {article.excerpt}

                        </p>


                        {/* Tags */}

                        <div className="flex flex-wrap gap-2 mt-6">

                          {article.tags.map((tag) => (

                            <span
                              key={tag}
                              className="text-[11px] font-semibold text-gray-500 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-full"
                            >
                              {tag}
                            </span>

                          ))}

                        </div>


                        {/* Bottom */}

                        <div className="border-t border-gray-100 mt-7 pt-5 flex items-center justify-between">

                          <div className="flex items-center gap-2 text-xs text-gray-400 font-semibold">

                            <CalendarDays size={13} />

                            {article.date}

                            <span>•</span>

                            <Clock size={13} />

                            {article.readTime.replace(" read", "")}

                          </div>

                          <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all">

                            <ArrowUpRight
                              size={16}
                              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                            />

                          </div>

                        </div>

                      </div>

                    </Link>

                  </motion.article>

                ))}

            </AnimatePresence>

          </div>


          {/* Empty State */}

          {filteredArticles.filter(
            (article) => !article.featured
          ).length === 0 && (

            <div className="py-20 text-center">

              <div className="w-14 h-14 mx-auto rounded-2xl bg-gray-100 flex items-center justify-center mb-5">

                <Search
                  size={24}
                  className="text-gray-400"
                />

              </div>

              <h3 className="font-bold text-xl">
                No articles found
              </h3>

              <p className="text-gray-500 mt-2">
                Try selecting another category.
              </p>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          WRITING PHILOSOPHY
      ====================================================== */}

      <section className="pb-32">

        <div className="max-w-[1200px] mx-auto px-6 md:px-12">

          <div className="bg-white border border-gray-200 rounded-[2.5rem] p-8 md:p-12">

            <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 items-center">

              <div>

                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600 mb-5">

                  <Code2 size={15} />

                  My Perspective

                </span>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">

                  I write about what I build, learn and discover.

                </h2>

              </div>

              <div className="text-gray-600 leading-relaxed space-y-4">

                <p>
                  These articles are based around real product ideas,
                  development challenges and practical observations from
                  building digital products.
                </p>

                <p>
                  My goal is not to make technology sound complicated. I want
                  to break down technical and business decisions into simple
                  ideas that developers, founders and business owners can
                  actually understand and use.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="pb-16">

        <div className="max-w-[1200px] mx-auto px-6 md:px-12">

          <div className="relative overflow-hidden bg-slate-950 rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-16">

            {/* Glow */}

            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full" />

            <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-10 items-center">

              <div className="max-w-2xl">

                <span className="inline-flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-[0.18em] mb-5">

                  <Sparkles size={15} />

                  Have an idea?

                </span>

                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">

                  Let's turn your idea into a real product.

                </h2>

                <p className="text-gray-400 text-base md:text-lg mt-5 leading-relaxed">

                  Whether you are thinking about a mobile app, business
                  platform, website or a completely new digital product, I
                  can help turn the idea into a practical product experience.

                </p>

                <div className="flex flex-wrap gap-3 mt-7">

                  <span className="px-3 py-2 rounded-full bg-white/[0.05] border border-white/10 text-xs text-gray-400">
                    Mobile Apps
                  </span>

                  <span className="px-3 py-2 rounded-full bg-white/[0.05] border border-white/10 text-xs text-gray-400">
                    Web Platforms
                  </span>

                  <span className="px-3 py-2 rounded-full bg-white/[0.05] border border-white/10 text-xs text-gray-400">
                    UI / UX
                  </span>

                  <span className="px-3 py-2 rounded-full bg-white/[0.05] border border-white/10 text-xs text-gray-400">
                    Product Development
                  </span>

                </div>

              </div>


              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-7 py-4 rounded-full font-bold shadow-xl shadow-blue-600/20 active:scale-95 transition-all whitespace-nowrap"
              >

                <MessageCircle size={19} />

                Start a Conversation

                <ChevronRight size={18} />

              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}


/* ============================================================
   TOPIC CARD
============================================================ */

function TopicCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (

    <div className="group bg-white border border-gray-200 rounded-[1.75rem] p-6 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/[0.04] transition-all duration-500">

      <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">

        {icon}

      </div>

      <h3 className="font-bold text-lg text-gray-900">
        {title}
      </h3>

      <p className="text-gray-500 text-sm leading-relaxed mt-2">
        {description}
      </p>

    </div>

  );
}

