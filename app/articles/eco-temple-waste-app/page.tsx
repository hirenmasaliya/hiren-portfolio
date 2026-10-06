"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Lightbulb,
  Leaf,
  Recycle,
  TrendingUp,
  Droplets,
  Sprout,
  Store,
  MapPin,
  Factory,
  Code,
  HandHeart,
  ArrowRight,
} from "lucide-react";

const smoothEase = [0.2, 0, 0, 1] as const;

const tableOfContents = [
  { id: "crisis", label: "The Waste Crisis" },
  { id: "current-market", label: "Market Mistakes" },
  { id: "solution", label: "The Solution Ecosystem" },
  { id: "products", label: "Eco Products Output" },
  { id: "business-model", label: "The Business Model" },
  { id: "architecture", label: "Tech Architecture" },
  { id: "conclusion", label: "Conclusion" },
];

export default function EcoTempleWasteArticle() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setMounted(true);

    // Observer to track which section is currently in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-15% 0px -80% 0px" } // Triggers when section is near the top
    );

    tableOfContents.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset by 100px to account for breathing room at the top
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  if (!mounted) return null;

  return (
    <main className="bg-[#F8F9FA] text-[#1F1F1F] min-h-screen pt-24 md:pt-32 pb-24 font-sans selection:bg-[#D3E3FD] selection:text-[#041E49] relative">
      
      {/* Material Linear Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#0A56D1] origin-left z-50"
        style={{ scaleX }}
      />

      <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row gap-12 xl:gap-20">
        
        {/* =====================================================
            LEFT SIDEBAR - TABLE OF CONTENTS
        ====================================================== */}
        <aside className="hidden lg:block w-64 shrink-0 relative">
          <div className="sticky top-32">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#444746] hover:bg-[#1F1F1F]/5 transition-colors border border-[#747775] px-4 py-2 rounded-full mb-10"
            >
              <ArrowLeft size={16} />
              Back to Articles
            </Link>

            <h4 className="text-sm font-medium text-[#1F1F1F] mb-4 uppercase tracking-wider">
              In this article
            </h4>
            
            <nav className="flex flex-col border-l-2 border-[#E0E2E0]">
              {tableOfContents.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      text-left px-4 py-2.5 text-sm font-medium transition-all relative -ml-[2px] border-l-2
                      ${
                        isActive
                          ? "border-[#0A56D1] text-[#0A56D1] bg-[#D3E3FD]/30"
                          : "border-transparent text-[#444746] hover:border-[#747775] hover:text-[#1F1F1F] hover:bg-[#1F1F1F]/5"
                      }
                    `}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* =====================================================
            MAIN CONTENT AREA
        ====================================================== */}
        <article className="flex-1 max-w-[840px]">
          
          {/* Mobile Back Button (Visible only on small screens) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: smoothEase }}
            className="mb-12 block lg:hidden"
          >
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#444746] hover:bg-[#1F1F1F]/5 transition-colors border border-[#747775] px-5 py-2 rounded-full"
            >
              <ArrowLeft size={18} />
              Back to Articles
            </Link>
          </motion.div>

          {/* Header Section */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: smoothEase }}
            className="mb-16 border-b border-[#E0E2E0] pb-12"
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-[#D3E3FD] text-[#041E49] px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2">
                <Lightbulb size={16} />
                App Ideas
              </span>
              <span className="bg-[#E8DEF8] text-[#1D192B] px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2">
                <Leaf size={16} />
                Sustainability
              </span>
              <span className="text-[#444746] text-sm font-medium flex items-center gap-1.5">
                <Clock size={16} />
                15 min read
              </span>
            </div>

            <h1 className="text-[40px] md:text-[57px] font-normal tracking-[-0.25px] text-[#1F1F1F] mb-8 leading-[1.15] md:leading-[64px]">
              App Idea: Upcycling Temple Offerings to Save Our Rivers
            </h1>

            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[#E1E3E1]">
                <img
                  src="/images/hero.png"
                  alt="Hiren Masaliya"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <div>
                <p className="text-base font-medium text-[#1F1F1F]">
                  Hiren Masaliya
                </p>
                <p className="text-sm text-[#444746]">Oct 5, 2026</p>
              </div>
            </div>

            <p className="text-[18px] md:text-[20px] text-[#444746] font-normal leading-[32px]">
              Every morning, millions of people across India and Southeast Asia offer flowers, leaves, and coconuts at temples and home shrines. It is a beautiful tradition. But there is a hidden problem: because these items are sacred, they are not thrown in the regular trash. Instead, they are dumped directly into rivers and lakes.
            </p>

            <p className="text-[18px] md:text-[20px] text-[#444746] font-normal leading-[32px] mt-6">
              This article outlines a blueprint for a digital platform that connects temples, households, and recycling hubs to turn sacred waste into eco-friendly products.
            </p>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: smoothEase }}
            className="space-y-16"
          >
            {/* SECTION: CRISIS */}
            <section id="crisis" className="space-y-6 scroll-mt-24">
              <h2 className="text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] font-normal text-[#1F1F1F]">
                The Invisible Waste Crisis
              </h2>
              <p className="text-[18px] text-[#444746] leading-[28px]">
                When we think of river pollution, we usually think of plastic or factory chemicals. But floral waste is a massive, silent killer of our water bodies.
              </p>
              
              <div className="bg-[#E8DEF8] text-[#1D192B] p-8 md:p-10 rounded-[24px] mt-8 flex flex-col md:flex-row gap-8 items-center">
                <TrendingUp size={64} className="text-[#6750A4] shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-[#4A4458] text-sm font-medium tracking-wide uppercase mb-3">
                    The Data Behind the Problem
                  </p>
                  <p className="text-[20px] md:text-[24px] leading-[32px] md:leading-[36px] font-normal">
                    Over <strong>8 million metric tons</strong> of floral waste go into India's rivers every year. 
                  </p>
                  <p className="text-[#4A4458] text-base mt-4">
                    Modern flowers are grown using harmful pesticides. When these flowers rot in the water, those chemicals mix with the river, killing fish and disrupting the entire ecosystem.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION: CURRENT MARKET */}
            <section id="current-market" className="space-y-6 scroll-mt-24">
              <h2 className="text-[28px] md:text-[32px] leading-[40px] font-normal text-[#1F1F1F]">
                Current Market & Its Mistakes
              </h2>
              <p className="text-[18px] text-[#444746] leading-[28px] mb-6">
                You might be wondering, <em>"Isn't someone already doing this?"</em> Yes. Startups like <strong>Phool</strong>, <strong>Nirmalaya</strong>, and <strong>HolyWaste</strong> have proven that upcycling floral waste works beautifully. But here is the major gap in the current market:
              </p>

              <div className="bg-[#FAFDFC] border border-[#747775] p-8 rounded-[24px]">
                <h3 className="font-normal text-[24px] text-[#1F1F1F] mb-4">The Centralization Problem</h3>
                <p className="text-[18px] text-[#444746] leading-[28px]">
                  These companies operate on a highly centralized factory model. They only exist in a few major cities (like Delhi, Kanpur, Hyderabad) or focus only on massive temples. If you live in a smaller city like Jetpur, or if you run a small local neighborhood temple, there is no system for you. 
                </p>
                <p className="text-[18px] text-[#444746] leading-[28px] mt-4 font-medium text-[#0A56D1]">
                  We don't just need a few big factories; we need a tech platform that decentralizes this process everywhere.
                </p>
              </div>
            </section>

            {/* SECTION: SOLUTION */}
            <section id="solution" className="space-y-6 scroll-mt-24">
              <h2 className="text-[28px] md:text-[32px] font-normal text-[#1F1F1F] leading-[36px]">
                The Solution: A Connected Ecosystem
              </h2>
              <p className="text-[18px] text-[#444746] leading-[28px] mb-8">
                To solve this everywhere, we need a digital platform—let's call it <strong>"EcoOffer"</strong>. This app acts as a bridge between the three key players in the cycle:
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Donors (Temples & Homes)",
                    desc: "Users can schedule a daily or weekly pickup. They get a dashboard showing their 'Karma Points'—exactly how much river water they saved from pollution.",
                    icon: <HandHeart className="text-[#0A56D1]" size={28} />
                  },
                  {
                    step: "2",
                    title: "Collectors (Delivery Drivers)",
                    desc: "Local municipal workers or gig drivers use the app's routing map to find the fastest way to collect flowers before they rot.",
                    icon: <MapPin className="text-[#0A56D1]" size={28} />
                  },
                  {
                    step: "3",
                    title: "Processors (NGOs & Startups)",
                    desc: "Local groups receive the waste, sort it, and use it as raw material to create brand new eco-friendly products in their own communities.",
                    icon: <Factory className="text-[#0A56D1]" size={28} />
                  }
                ].map((node) => (
                  <div key={node.step} className="flex gap-6 items-start bg-[#F0F4F9] p-6 rounded-[20px]">
                    <span className="w-14 h-14 rounded-full bg-[#D3E3FD] text-[#041E49] flex items-center justify-center text-[22px] font-normal shrink-0">
                      {node.icon}
                    </span>
                    <div>
                      <h3 className="text-[22px] font-medium text-[#1F1F1F] mb-2">{node.title}</h3>
                      <p className="text-[#444746] text-[16px] leading-[26px]">{node.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION: PRODUCTS */}
            <section id="products" className="space-y-6 scroll-mt-24">
              <h2 className="text-[28px] md:text-[32px] font-normal text-[#1F1F1F] leading-[36px]">
                The Output: Eco Products
              </h2>
              <p className="text-[18px] text-[#444746] leading-[28px]">
                What happens to all this waste? Local factories and women's self-help groups (SHGs) turn it into high-value consumer goods.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                {[
                  {
                    title: "Charcoal-Free Incense",
                    desc: "Floral waste is dried and rolled into 100% natural, chemical-free incense sticks.",
                    icon: <Leaf className="text-[#0A56D1] mb-4" size={32} />
                  },
                  {
                    title: "Organic Compost",
                    desc: "Leaves and old flowers are turned into highly nutrient-rich fertilizer for home gardens.",
                    icon: <Sprout className="text-[#0A56D1] mb-4" size={32} />
                  },
                  {
                    title: "Natural Colors",
                    desc: "Marigolds and roses are used to make skin-safe, organic gulal for festivals like Holi.",
                    icon: <Droplets className="text-[#0A56D1] mb-4" size={32} />
                  },
                  {
                    title: "Vegan Leather",
                    desc: "Advanced biotech uses flower cellulose to create a material that feels like leather.",
                    icon: <Recycle className="text-[#0A56D1] mb-4" size={32} />
                  }
                ].map((product, idx) => (
                  <div key={idx} className="bg-[#FAFDFC] border border-[#747775] p-6 rounded-[16px] hover:bg-[#F0F4F9] transition-colors">
                    {product.icon}
                    <h3 className="font-medium text-[#1F1F1F] text-[20px] mb-2">{product.title}</h3>
                    <p className="text-[#444746] text-sm leading-[22px]">{product.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION: BUSINESS MODEL */}
            <section id="business-model" className="space-y-6 scroll-mt-24">
              <h2 className="text-[28px] md:text-[32px] font-normal text-[#1F1F1F] leading-[36px]">
                The Business Model
              </h2>
              <p className="text-[18px] text-[#444746] leading-[28px]">
                For this app to survive, it cannot just be a charity; it needs a strong business model to keep logistics running.
              </p>

              <div className="bg-[#F0F4F9] p-8 rounded-[24px]">
                <ul className="space-y-5">
                  {[
                    { label: "Convenience Fees", text: "Individual households pay a tiny monthly subscription to have their daily prayer waste picked up." },
                    { label: "B2B Raw Material Sales", text: "Selling bulk sorted flowers to incense factories as cheap, reliable raw material." },
                    { label: "In-App Store (B2C)", text: "A marketplace taking a commission on the finished eco-products sold back to consumers." },
                    { label: "Corporate CSR", text: "Companies sponsor specific river clean-up drives through the app to fulfill social responsibility goals." },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <Store className="text-[#0A56D1] shrink-0 mt-1" size={24} />
                      <div>
                        <strong className="text-[#1F1F1F] text-[18px] block mb-1">{item.label}</strong>
                        <span className="text-[#444746] text-[16px] leading-[24px] block">{item.text}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* SECTION: ARCHITECTURE */}
            <section id="architecture" className="space-y-6 scroll-mt-24">
              <h2 className="text-[28px] md:text-[32px] font-normal text-[#1F1F1F] leading-[36px]">
                Building the Tech Architecture
              </h2>
              <p className="text-[18px] text-[#444746] leading-[28px]">
                From a developer's perspective, handling locations, weights, and user impact metrics requires a clean database schema.
              </p>

              <div className="bg-[#1E1E1E] rounded-[24px] p-6 md:p-8 overflow-x-auto shadow-lg">
                <div className="flex items-center gap-2 mb-4 text-[#A8C7FA]">
                  <Code size={18} />
                  <span className="text-sm font-mono tracking-wider">schema_architecture.ts</span>
                </div>
                <pre className="text-[#E3E3E3] font-mono text-[14px] leading-relaxed m-0">
{`// Simplified Prisma Schema for the EcoOffer App

model PickupRequest {
  id          String    @id @default(uuid())
  donorType   String    // 'TEMPLE' or 'HOME'
  location    Json      // Maps coordinates
  weightEst   Float     // Estimated kg of waste
  status      String    // PENDING, COLLECTED
  driverId    String?
  createdAt   DateTime  @default(now())
}

model ImpactMetric {
  id               String  @id @default(uuid())
  userId           String
  kgSaved          Float
  waterSavedLitres Float   // Automatically calculated
}`}
                </pre>
              </div>
            </section>

            {/* SECTION: CONCLUSION */}
            <section id="conclusion" className="space-y-8 mt-12 border-t border-[#E0E2E0] pt-12 scroll-mt-24">
              <h2 className="text-[32px] font-normal text-[#1F1F1F]">
                Main Takeaways
              </h2>

              <div className="bg-[#D3E3FD] text-[#041E49] p-8 md:p-12 rounded-[28px]">
                <Leaf className="text-[#0A56D1] mb-6" size={48} />
                <h3 className="text-[28px] md:text-[36px] font-normal leading-[40px] md:leading-[48px] mb-6">
                  Work with human habits, not against them.
                </h3>
                <p className="text-[#001D35] text-[18px] leading-[28px]">
                  We should not ask people to stop their beautiful religious practices. But by building a smart, connected app, we can bridge the gap between temples and recycling hubs, decentralizing a process that is currently locked to a few big cities.
                </p>
              </div>

              <p className="text-[18px] text-[#444746] leading-[28px]">
                Building this platform isn't just about writing code; it is about protecting our rivers for the next generation while creating jobs for local workers.
              </p>
            </section>

          </motion.div>

          {/* CTA */}
          <div className="mt-20 mb-8 bg-[#EADDFF] rounded-[28px] p-10 md:p-14 text-[#21005D] flex flex-col items-center text-center">
            <h3 className="text-[32px] md:text-[40px] font-normal mb-4">
              Want to build something impactful?
            </h3>
            <p className="text-[#4F378B] text-[18px] leading-relaxed mb-8 max-w-2xl">
              I publish app concepts and system architectures like this to inspire developers and founders. If you want to build this and need help with the technical architecture, let's talk.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#6750A4] text-white px-8 h-14 rounded-full font-medium hover:bg-[#7D66B6] transition-colors shadow-[0_4px_8px_3px_rgba(103,80,164,0.15)]"
            >
              Contact Me
              <ArrowRight size={20} />
            </Link>
          </div>

        </article>

      </div>

      <footer className="border-t border-[#E0E2E0] py-8 text-center bg-[#F8F9FA] mt-12">
        <p className="text-sm font-medium text-[#747775]">
          © {new Date().getFullYear()} Hiren Masaliya — Software Developer
        </p>
      </footer>

    </main>
  );
}