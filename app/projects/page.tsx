"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Smartphone,
    ArrowRight,
    Code,
    Sparkles,
    Languages,
    Palette,
    Terminal,
    Rocket,
} from "lucide-react";

const materialEase = [0.2, 0, 0, 1] as const;

export default function Projects() {
    const [filter, setFilter] = useState("All");

    const projects = [
        {
            id: "01",
            title: "Aptro",
            category: "App",
            description: "An all-in-one app for small business owners to easily manage billing, inventory, and daily operations from their phone or computer.",
            tech: ["Flutter", "Firebase", "Razorpay"],
            role: "Founder & Lead Developer",
            year: "2025 — Present",
            link: "https://aptro.vercel.app/",
            image: "/images/projects/aptro.png",
            mobileApp: true,
            playStore: "https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro",
            featured: true,
        },
        {
            id: "02",
            title: "Clothiva Elite",
            category: "Website",
            description: "A premium online clothing store designed for fast loading times and a smooth, modern shopping experience.",
            tech: ["Next.js", "TypeScript", "Razorpay"],
            role: "Full-Stack Developer",
            year: "2026",
            link: "https://clothivaelite.vercel.app/",
            image: "/images/projects/clothiva-thumbnail.png",
            mobileApp: false,
            featured: true,
        },
        {
            id: "03",
            title: "Buildart Industries",
            category: "Website",
            description: "A professional corporate website built to help the business showcase its industrial services and connect with clients easily.",
            tech: ["React.js", "Tailwind", "Firebase"],
            role: "Frontend Developer",
            year: "2026",
            link: "https://buildartind.com",
            image: "/images/projects/buildart-website.png",
            mobileApp: false,
        },
        {
            id: "04",
            title: "Dira Infratech",
            category: "Website",
            description: "A clean, fast-loading website built for an infrastructure company to display their past work and core services.",
            tech: ["HTML", "CSS", "JavaScript"],
            role: "Lead Developer",
            year: "2026",
            link: "https://www.dirainfratech.com/",
            image: "/images/projects/dira-website.png",
            mobileApp: false,
        },
    ];

    const categories = ["All", "App", "Website"];

    const categoryCounts = useMemo(() => {
        const counts: Record<string, number> = { All: projects.length };
        categories.filter((c) => c !== "All").forEach((cat) => {
            counts[cat] = projects.filter((p) => p.category === cat).length;
        });
        return counts;
    }, [projects, categories]);

    const filteredProjects = filter === "All" ? projects : projects.filter((p) => p.category === filter);

    return (
        <main className="bg-[#F8F9FA] text-[#1F1F1F] min-h-screen pt-24 md:pt-32 pb-16 selection:bg-[#D3E3FD] selection:text-[#041E49] font-sans">
            <section className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
                {/* HEADER SECTION - Material Display Typography */}
                <div className="mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: materialEase }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8DEF8] text-[#1D192B] rounded-full text-sm font-medium mb-6">
                            <Code size={16} />
                            <span>Selected Work</span>
                        </div>

                        <h1 className="text-[45px] md:text-[57px] leading-[1.1] md:leading-[64px] font-normal tracking-[-0.25px] text-[#1F1F1F] mb-6">
                            Recent Projects
                        </h1>

                        <p className="text-[18px] md:text-[20px] text-[#444746] font-normal leading-[32px] max-w-2xl">
                            Building fast, reliable apps and websites that solve real business problems and look great doing it.
                        </p>
                    </motion.div>
                </div>

                {/* FILTER CHIPS - Material Design 3 Style */}
                <div className="sticky top-[72px] z-30 py-4 bg-[#F8F9FA]/90 backdrop-blur-md border-b border-[#E0E2E0] mb-8 md:mb-12 -mx-4 px-4 md:mx-0 md:px-0">
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide items-center">
                        {categories.map((cat) => {
                            const isSelected = filter === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`
                                        flex items-center gap-2 h-8 px-4 rounded-lg text-sm font-medium transition-all shrink-0
                                        ${
                                            isSelected
                                                ? "bg-[#C2E7FF] text-[#001D35] hover:bg-[#B1DDF6]" // Primary Container
                                                : "bg-transparent border border-[#747775] text-[#444746] hover:bg-[#1F1F1F]/5" // Outlined Chip
                                        }
                                    `}
                                >
                                    {cat}
                                    <span
                                        className={`text-[12px] flex items-center justify-center w-5 h-5 rounded-full ${
                                            isSelected ? "bg-[#001D35]/10 text-[#001D35]" : "bg-[#E1E3E1] text-[#444746]"
                                        }`}
                                    >
                                        {categoryCounts[cat]}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* PROJECTS GRID - Material Outlined Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24 md:mb-32">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.98, y: 10 }}
                                transition={{ duration: 0.4, ease: materialEase }}
                                className="group flex flex-col bg-[#FAFDFC] border border-[#747775] rounded-[24px] overflow-hidden hover:bg-[#F0F4F9] transition-colors duration-300"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[16/9] bg-[#E1E3E1] overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).style.display = "none";
                                        }}
                                    />
                                    {/* Gradient overlay for text readability if needed */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                                    {project.featured && (
                                        <div className="absolute top-4 left-4 bg-[#E8DEF8] text-[#1D192B] px-3 py-1 text-xs font-medium rounded-full flex items-center gap-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                                            <Sparkles size={14} /> Featured
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-1 p-6 md:p-8">
                                    <div className="flex justify-between items-center mb-4 text-[#444746]">
                                        <span className="text-[#0A56D1] text-xs font-medium tracking-wide uppercase">
                                            {project.category}
                                        </span>
                                        {project.mobileApp ? <Smartphone size={20} /> : <Languages size={20} />}
                                    </div>

                                    {/* Material Headline Small */}
                                    <h2 className="text-[24px] leading-[32px] font-normal text-[#1F1F1F] mb-3 group-hover:text-[#0A56D1] transition-colors">
                                        {project.title}
                                    </h2>

                                    {/* Material Body Medium */}
                                    <p className="text-[#444746] text-sm leading-relaxed mb-6 flex-1">
                                        {project.description}
                                    </p>

                                    {/* Tech Tags - Material Assist Chips style */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-[12px] font-medium text-[#444746] border border-[#747775] px-3 py-1 rounded-lg">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Link Actions */}
                                    <div className="flex items-center gap-4 mt-auto">
                                        {/* Material Text Button */}
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 text-[#0A56D1] hover:bg-[#0A56D1]/10 px-4 py-2 rounded-full text-sm font-medium transition-colors -ml-4"
                                        >
                                            View Project <ArrowRight size={18} />
                                        </a>

                                        {project.playStore && (
                                            <a
                                                href={project.playStore}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center text-[#444746] hover:bg-[#1F1F1F]/5 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                                            >
                                                Play Store
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* THE APPROACH SECTION - Material Tonal Surface */}
                <div className="mb-24 md:mb-32 bg-[#EADDFF] rounded-[28px] p-8 md:p-12 text-[#21005D]">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6 border-b border-[#CAC4D0] pb-8">
                        {/* Material Headline Medium */}
                        <h2 className="text-[28px] md:text-[32px] leading-[36px] md:leading-[40px] font-normal max-w-sm">
                            How I Build
                        </h2>
                        <p className="text-[#4F378B] text-[18px] leading-[28px] max-w-md">
                            A great app requires more than just code. It needs a clear plan, smooth design, and a solid foundation to handle growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { step: "01", title: "Plan", icon: <Palette size={28} />, desc: "We figure out exactly what your business needs, plan the features, and design the look before writing any code." },
                            { step: "02", title: "Build", icon: <Terminal size={28} />, desc: "I write clean, secure code using modern tools to make sure the app works perfectly and safely on all devices." },
                            { step: "03", title: "Launch", icon: <Rocket size={28} />, desc: "I thoroughly test everything, optimize it for speed, and help you launch it to the public or the App Store." },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col">
                                <div className="w-12 h-12 rounded-full bg-[#6750A4] text-white flex items-center justify-center mb-6 shadow-md">
                                    {item.icon}
                                </div>
                                <h3 className="text-[22px] leading-[28px] font-normal mb-3">{item.title}</h3>
                                <p className="text-[#4F378B] text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* EXPERIMENTAL LABS - Dark Surface / Inverse Surface */}
                <div className="bg-[#1F1F1F] rounded-[28px] text-[#F8F9FA] p-8 md:p-12 mb-16">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8 border-b border-[#444746] pb-10">
                        <div className="max-w-xl">
                            <span className="text-[#A8C7FA] font-medium text-xs tracking-wide uppercase mb-4 block">Open Source</span>
                            <h2 className="text-[32px] leading-[40px] font-normal mb-4">
                                Free Code Resources
                            </h2>
                            <p className="text-[#C4C7C5] text-[18px] leading-[28px]">
                                Where I test new ideas, learn new tools, and build free templates to share with other developers.
                            </p>
                        </div>
                        {/* Inverse Primary Button */}
                        <a
                            href="https://github.com/hirenmasaliya"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#A8C7FA] text-[#062E6F] rounded-full text-sm font-medium hover:bg-[#D3E3FD] transition-colors whitespace-nowrap"
                        >
                            <Code size={18} />
                            View GitHub
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { name: "Starter Kit", desc: "A fast, ready-to-use template for starting new Next.js websites.", tech: "Next.js" },
                            { name: "Login System", desc: "A secure and reusable way to handle user logins and accounts.", tech: "TypeScript" },
                            { name: "UI Components", desc: "A collection of beautiful, ready-to-use buttons and cards.", tech: "Tailwind CSS" },
                        ].map((lab, i) => (
                            <div key={i} className="p-6 rounded-[16px] border border-[#444746] hover:bg-[#2E2E2E] transition-colors flex flex-col">
                                <h3 className="text-[20px] font-medium text-[#F8F9FA] mb-3">{lab.name}</h3>
                                <p className="text-sm text-[#C4C7C5] leading-relaxed mb-6 flex-1">{lab.desc}</p>
                                <span className="text-[12px] font-medium text-[#A8C7FA] border border-[#A8C7FA]/30 bg-[#A8C7FA]/10 rounded-lg px-3 py-1 w-max">
                                    {lab.tech}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <footer className="text-center border-t border-[#E0E2E0] pt-8 pb-8">
                    <p className="text-sm font-medium text-[#747775]">
                        © {new Date().getFullYear()} Hiren Masaliya — Jetpur, Gujarat
                    </p>
                </footer>
            </section>
        </main>
    );
}