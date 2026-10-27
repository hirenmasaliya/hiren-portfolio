"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowRightLeft,
  Bell,
  BriefcaseBusiness,
  Code2,
  Leaf,
  Search,
  ShieldCheck,
  Smartphone,
  UserRoundCheck,
  Upload,
  X,
  Clock3,
  BookOpen,
} from "lucide-react";

const categories = [
  "All",
  "Case Studies",
  "Guides",
  "Business Advice",
  "App Ideas",
] as const;

type Category = (typeof categories)[number];

const articles = [
  {
    id: "aptro-app-case-study",
    slug: "/articles/aptro-app-case-study",
    title: "Introducing Aptro: A Modern B2B Trading & Bidding App",
    excerpt:
      "A look at the product thinking and architecture behind Aptro, designed to simplify business operations and make B2B workflows easier to manage.",
    category: "Case Studies",
    date: "Oct 28, 2026",
    readTime: "6 min read",
    icon: ArrowRightLeft,
    featured: false,
  },
  {
    id: "fcm-notification-guide",
    slug: "/articles/fcm-notification-guide",
    title: "Step-by-Step Guide to FCM Push Notifications",
    excerpt:
      "Integrate Firebase Cloud Messaging, manage device tokens, and handle foreground and background notification flows in your app.",
    category: "Guides",
    date: "Oct 27, 2026",
    readTime: "7 min read",
    icon: Bell,
    featured: false,
  },
  {
    id: "create-google-play-developer-account",
    slug: "/articles/create-google-play-developer-account",
    title: "How to Create a Google Play Developer Account",
    excerpt:
      "Understand the account setup process, registration fee, identity verification, and the essentials to prepare before publishing.",
    category: "Guides",
    date: "Oct 26, 2026",
    readTime: "5 min read",
    icon: UserRoundCheck,
    featured: false,
  },
  {
    id: "create-apple-developer-account",
    slug: "/articles/create-apple-developer-account",
    title: "How to Enroll in the Apple Developer Program",
    excerpt:
      "Learn about enrollment, organization requirements, D-U-N-S numbers, and the annual membership needed to distribute Apple apps.",
    category: "Guides",
    date: "Oct 25, 2026",
    readTime: "6 min read",
    icon: BriefcaseBusiness,
    featured: false,
  },
  {
    id: "apple-app-store-upload",
    slug: "/articles/apple-app-store-upload",
    title: "Apple App Store Submission Requirements",
    excerpt:
      "Prepare App Store Connect, certificates, provisioning profiles, and your app listing while avoiding common review issues.",
    category: "Guides",
    date: "Oct 24, 2026",
    readTime: "8 min read",
    icon: Upload,
    featured: false,
  },
  {
    id: "google-play-store-upload",
    slug: "/articles/google-play-store-upload",
    title: "Google Play Store Submission Requirements",
    excerpt:
      "A practical guide to app signing, keystores, Play Console setup, store listings, and preparing an Android app for release.",
    category: "Guides",
    date: "Oct 22, 2026",
    readTime: "7 min read",
    icon: Smartphone,
    featured: false,
  },
  {
    id: "voting-app",
    slug: "/articles/voting-app",
    title: "How I Designed and Built a Secure Digital Voting App",
    excerpt:
      "Explore the design decisions behind voter verification, vote privacy, duplicate-vote prevention, election timing, and a trustworthy voting experience.",
    category: "Case Studies",
    date: "Oct 2, 2026",
    readTime: "10 min read",
    icon: ShieldCheck,
    featured: true,
  },
  {
    id: "eco-temple-waste-app",
    slug: "/articles/eco-temple-waste-app",
    title: "App Idea: Upcycling Temple & Household Offerings",
    excerpt:
      "A concept connecting temples and homes with collection systems that can turn floral and organic offerings into useful sustainable products.",
    category: "App Ideas",
    date: "Oct 5, 2026",
    readTime: "4 min read",
    icon: Leaf,
    featured: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const reduceMotion = useReducedMotion();

  const featuredArticle = articles.find((article) => article.featured);

  const filteredArticles = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === "All" || article.category === activeCategory;

      const matchesSearch =
        !query ||
        `${article.title} ${article.excerpt} ${article.category}`
          .toLowerCase()
          .includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const showFeatured =
    activeCategory === "All" &&
    !searchQuery.trim() &&
    Boolean(featuredArticle);

  const gridArticles = filteredArticles.filter(
    (article) => !showFeatured || article.id !== featuredArticle?.id
  );

  const animationProps = reduceMotion
    ? {}
    : {
        initial: "hidden" as const,
        animate: "show" as const,
        variants: {
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.07 },
          },
        },
      };

  return (
    <main className="min-h-screen overflow-x-clip bg-[#FAFAF8] text-[#171717] selection:bg-blue-100 selection:text-blue-950">
      {/* Intro */}
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-20 sm:px-8 sm:pt-24 lg:px-10 lg:pb-14 lg:pt-32">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-2 text-sm font-medium text-blue-800">
            <Code2 size={16} aria-hidden="true" />
            Developer journal
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
            Ideas, lessons, and
            <span className="block text-[#64748B]">things I build.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#62666D] sm:text-lg sm:leading-8">
            Practical guides, real project case studies, and product ideas from
            my work across mobile apps, web platforms, and software architecture.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#62666D]">
            <span className="inline-flex items-center gap-2">
              <BookOpen size={16} aria-hidden="true" />
              {articles.length} articles
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-gray-300 sm:block" />
            <span>Flutter · Next.js · Firebase</span>
          </div>
        </motion.div>
      </section>

      {/* Search and category controls */}
      <section className="sticky top-18 z-30 border-y border-black/[0.06] bg-[#FAFAF8]/95 py-4 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-sm">
              <Search
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#777D86]"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search articles..."
                aria-label="Search articles"
                className="h-12 w-full rounded-2xl border border-[#E4E5E7] bg-white pl-11 pr-11 text-sm text-[#171717] outline-none transition placeholder:text-[#92969D] focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-[#777D86] transition hover:bg-gray-100 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <div
              className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              aria-label="Filter articles by category"
            >
              {categories.map((category) => {
                const selected = activeCategory === category;
                const count =
                  category === "All"
                    ? articles.length
                    : articles.filter((article) => article.category === category)
                        .length;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={selected}
                    className={`inline-flex h-10 shrink-0 items-center gap-2 rounded-full border px-4 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                      selected
                        ? "border-[#171717] bg-[#171717] text-white"
                        : "border-[#E4E5E7] bg-white text-[#555B64] hover:border-[#B8BDC5] hover:bg-[#F3F4F6]"
                    }`}
                  >
                    {category}
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[11px] ${
                        selected
                          ? "bg-white/15 text-white"
                          : "bg-gray-100 text-[#6B7280]"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 pb-20 pt-9 sm:px-8 lg:px-10 lg:pt-12">
        {/* Featured article */}
        {showFeatured && featuredArticle && (
          <motion.section
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            aria-labelledby="featured-heading"
            className="mb-14"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                  Editor&apos;s pick
                </p>
                <h2 id="featured-heading" className="mt-1 text-xl font-semibold tracking-tight">
                  Featured case study
                </h2>
              </div>
              <span className="hidden rounded-full border border-[#E5E7EB] bg-white px-3 py-1.5 text-xs font-medium text-[#6B7280] sm:inline-flex">
                Start here
              </span>
            </div>

            <Link
              href={featuredArticle.slug}
              className="group grid overflow-hidden rounded-[28px] border border-[#E6E7EB] bg-white transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20 md:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="relative flex min-h-60 items-center justify-center overflow-hidden bg-[#EAF0FF] p-8 md:min-h-[340px]">
                <div className="absolute -left-14 -top-16 h-56 w-56 rounded-full bg-blue-200/50 blur-2xl" />
                <div className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-violet-200/60 blur-2xl" />
                <div className="relative flex h-28 w-28 items-center justify-center rounded-[30px] border border-white/80 bg-white/80 text-blue-800 shadow-xl shadow-blue-900/10 backdrop-blur">
                  <ShieldCheck size={54} strokeWidth={1.4} aria-hidden="true" />
                </div>
                <span className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/85 px-3 py-1.5 text-xs font-semibold text-blue-900 backdrop-blur">
                  Case study
                </span>
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium text-[#777D86]">
                  <span>{featuredArticle.date}</span>
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gray-300" />
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 size={14} aria-hidden="true" />
                    {featuredArticle.readTime}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.035em] sm:text-3xl lg:text-4xl">
                  {featuredArticle.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-[#62666D] sm:text-base">
                  {featuredArticle.excerpt}
                </p>
                <span className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-700">
                  Read case study
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          </motion.section>
        )}

        {/* Article results */}
        <section aria-labelledby="articles-heading">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 id="articles-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {searchQuery.trim()
                  ? "Search results"
                  : activeCategory === "All"
                    ? "Latest articles"
                    : activeCategory}
              </h2>
              <p className="mt-2 text-sm text-[#777D86]" aria-live="polite">
                {filteredArticles.length}{" "}
                {filteredArticles.length === 1 ? "article" : "articles"}
                {searchQuery.trim() ? ` matching “${searchQuery.trim()}”` : ""}
              </p>
            </div>

            {(searchQuery || activeCategory !== "All") && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="rounded-lg px-3 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Clear filters
              </button>
            )}
          </div>

          {gridArticles.length > 0 ? (
            <motion.div
              layout
              {...animationProps}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
            >
              <AnimatePresence mode="popLayout">
                {gridArticles.map((article) => {
                  const Icon = article.icon;

                  return (
                    <motion.article
                      layout
                      key={article.id}
                      variants={fadeUp}
                      initial={reduceMotion ? false : "hidden"}
                      animate="show"
                      exit={reduceMotion ? undefined : { opacity: 0, y: 8 }}
                      transition={{ duration: 0.22 }}
                      className="h-full"
                    >
                      <Link
                        href={article.slug}
                        className="group flex h-full flex-col rounded-[22px] border border-[#E6E7EA] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_16px_40px_rgba(15,23,42,0.06)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20 sm:p-6"
                      >
                        <div className="mb-6 flex items-start justify-between gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2F5FA] text-[#3D5A80] transition-colors group-hover:bg-blue-50 group-hover:text-blue-700">
                            <Icon size={23} strokeWidth={1.7} aria-hidden="true" />
                          </div>
                          <span className="rounded-full bg-[#F4F5F7] px-2.5 py-1 text-[11px] font-semibold text-[#606773]">
                            {article.category}
                          </span>
                        </div>

                        <h3 className="text-lg font-semibold leading-snug tracking-[-0.02em] text-[#202124] transition-colors group-hover:text-blue-700 sm:text-xl">
                          {article.title}
                        </h3>

                        <p className="mt-3 flex-1 text-sm leading-6 text-[#686E77]">
                          {article.excerpt}
                        </p>

                        <div className="mt-6 flex items-center justify-between gap-3 border-t border-[#EFF0F2] pt-4 text-xs font-medium text-[#777D86]">
                          <span>{article.date}</span>
                          <span className="inline-flex shrink-0 items-center gap-1.5">
                            <Clock3 size={13} aria-hidden="true" />
                            {article.readTime}
                          </span>
                        </div>

                        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#303846] transition-colors group-hover:text-blue-700">
                          Read article
                          <ArrowRight
                            size={16}
                            className="transition-transform group-hover:translate-x-1"
                            aria-hidden="true"
                          />
                        </span>
                      </Link>
                    </motion.article>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="rounded-3xl border border-dashed border-[#D8DCE2] bg-white px-6 py-14 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 text-gray-500">
                <Search size={22} aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">No articles found</h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#686E77]">
                Try another keyword or choose a different category to find what
                you are looking for.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-5 inline-flex h-10 items-center justify-center rounded-full bg-[#171717] px-5 text-sm font-semibold text-white transition hover:bg-[#333] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Show all articles
              </button>
            </div>
          )}
        </section>
      </div>

      {/* Contact CTA */}
      <section className="border-t border-[#E8E9EB] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 py-16 sm:px-8 md:flex-row md:items-center lg:px-10 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-700">Have an idea?</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Let&apos;s build something useful.
            </h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-[#686E77]">
              Need a mobile app, web platform, or a custom digital product?
              Tell me what you are working on.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#171717] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20"
          >
            Start a conversation
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
