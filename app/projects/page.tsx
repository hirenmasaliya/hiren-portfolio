"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, ArrowUpRight, Github, Code2, Cpu, GitBranch, Sparkles } from "lucide-react";

const customEase = [0.25, 1, 0.5, 1] as const;

export default function Projects() {
    const [filter, setFilter] = useState("All");

    const projects = [
        {
            id: "01",
            title: "Aptro Platform",
            category: "SaaS",
            description: "A comprehensive ecosystem for entrepreneurs to automate invoicing, client onboarding, and project tracking.",
            tech: ["Flutter", "Firebase", "Razorpay"],
            role: "Founder & Lead Engineer",
            year: "2025 — Present",
            metric: "Live Business Ecosystem",
            link: "https://aptrooms.web.app/",
            github: "",
            image: "/images/projects/aptro-website.png",
            mobileApp: true,
            playStore: "https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro",
            featured: true
        },
        {
            id: "02",
            title: "Clothiva Elite",
            category: "Web App",
            description: "A premium e-commerce experience architected for the modern fashion industry. Features a high-conversion UI and performance-optimized foundation.",
            tech: ["Next.js", "TypeScript", "Razorpay"],
            role: "Full-Stack Architect",
            year: "2026",
            metric: "High-Conversion UI",
            link: "https://clothivaelite.vercel.app/",
            github: "", 
            image: "/images/projects/clothiva-thumbnail.png", 
            mobileApp: false,
            featured: true 
        },
        {
            id: "03",
            title: "Buildart Industries",
            category: "Web App",
            description: "High-performance corporate platform with service showcases and real-time contact management built for scale.",
            tech: ["React.js", "Tailwind", "Firebase"],
            role: "Frontend Engineer",
            year: "2026",
            metric: "Performance Optimized",
            link: "https://buildartind.com",
            github: "",
            image: "/images/projects/buildart-website.png",
            mobileApp: false
        },
        {
            id: "04",
            title: "Dira Infratech",
            category: "Web App",
            description: "A precision-engineered static site focusing on performance and modern UI for infrastructure services.",
            tech: ["HTML", "CSS", "JavaScript"],
            role: "Lead Developer",
            year: "2026",
            metric: "Zero-Latency Delivery",
            link: "https://www.dirainfratech.com/",
            github: "",
            image: "/images/projects/dira-website.png",
            mobileApp: false
        },
    ];

    const categories = ["All", "SaaS", "Web App"];
    
    // Dynamically calculate project counts for the filter
    const categoryCounts = useMemo(() => {
        const counts: Record<string, number> = { All: projects.length };
        categories.filter(c => c !== "All").forEach(cat => {
            counts[cat] = projects.filter(p => p.category === cat).length;
        });
        return counts;
    }, [projects, categories]);

    const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

    return (
        <main className="bg-slate-50 text-slate-900 min-h-screen pt-40 pb-20 selection:bg-blue-200 selection:text-blue-900 font-sans overflow-hidden">
            
            {/* Soft Background Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

            <section className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                {/* HEADER SECTION */}
                <div className="mb-24 md:mb-32 text-left border-b border-slate-200 pb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: customEase }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-8"
                    >
                        <div>
                            <div className="flex items-center gap-3 px-4 py-2 bg-white border border-blue-100 rounded-full shadow-sm w-max mb-6">
                                <Sparkles className="w-3 h-3 text-blue-500" />
                                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-700">
                                    Selected Portfolio
                                </span>
                            </div>
                            <h1 className="text-[12vw] md:text-[8.5rem] font-black tracking-tighter leading-[0.85] text-slate-950 uppercase">
                                Digital <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Products.</span>
                            </h1>
                        </div>
                        <p className="text-slate-500 text-base md:text-lg max-w-sm font-medium pb-2 md:pb-4 leading-relaxed">
                            Building high-performance digital products at the intersection of stark business logic and human experience.
                        </p>
                    </motion.div>
                </div>

                {/* FILTER TABS */}
                <div className="flex justify-start mb-16 md:mb-20 sticky top-24 z-20 bg-slate-50/90 backdrop-blur-md py-4 border-b border-slate-200/50">
                    <div className="flex flex-wrap gap-8 md:gap-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`pb-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 relative flex items-start gap-1 ${
                                    filter === cat ? "text-blue-600" : "text-slate-400 hover:text-slate-900"
                                }`}
                            >
                                {cat}
                                <span className="text-[8px] opacity-60 relative -top-1">{categoryCounts[cat]}</span>
                                {filter === cat && (
                                    <motion.div
                                        layoutId="activeFilter"
                                        transition={{ duration: 0.5, ease: customEase }}
                                        className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 rounded-t-full"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* PROJECTS GRID - 4 Column Premium Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32 md:mb-48">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.98, y: 20 }}
                                transition={{ duration: 0.5, ease: customEase }}
                                className="group flex flex-col bg-white border border-slate-200 hover:border-blue-200 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 overflow-hidden"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 border-b border-slate-100">
                                    <div className="absolute top-4 right-4 z-10">
                                        <motion.span 
                                            initial={{ y: -10, opacity: 0 }} 
                                            whileInView={{ y: 0, opacity: 1 }} 
                                            transition={{ duration: 0.6, ease: customEase, delay: 0.2 }}
                                            className="block px-3 py-1 bg-white/90 backdrop-blur-md text-blue-600 rounded-full text-[10px] font-black shadow-sm"
                                        >
                                            {project.id}
                                        </motion.span>
                                    </div>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-[0.25,1,0.5,1] group-hover:scale-105"
                                    />
                                    {project.featured && (
                                        <div className="absolute top-4 left-4 bg-blue-600 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.2em] text-white rounded-full shadow-md">
                                            Featured
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-[8px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                                            {project.category}
                                        </span>
                                        {project.mobileApp && <Smartphone size={14} className="text-blue-600" />}
                                    </div>

                                    <h2 className="text-xl font-black mb-4 tracking-tight uppercase text-slate-950 line-clamp-2">
                                        {project.title}
                                    </h2>

                                    {/* Detailed Metadata Grid */}
                                    <div className="flex flex-col gap-3 mb-6 border-l-2 border-slate-100 pl-3">
                                        <div>
                                            <span className="block text-[8px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-0.5">Role</span>
                                            <span className="text-[10px] font-bold text-slate-700">{project.role}</span>
                                        </div>
                                        <div>
                                            <span className="block text-[8px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-0.5">Timeline</span>
                                            <span className="text-[10px] font-bold text-slate-700">{project.year}</span>
                                        </div>
                                    </div>

                                    <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-1 font-medium line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex items-center gap-1.5 mb-6 pb-4 border-b border-slate-100">
                                        <GitBranch size={12} className="text-blue-500 shrink-0" />
                                        <span className="text-[8px] font-bold uppercase tracking-[0.1em] text-slate-500 truncate">
                                            Highlight: <span className="text-slate-900">{project.metric}</span>
                                        </span>
                                    </div>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-1.5 mb-6">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-[8px] font-bold uppercase tracking-[0.2em] text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Link Actions */}
                                    <div className="flex flex-col gap-2 pt-4 border-t border-slate-100 mt-auto">
                                        <a
                                            href={project.link}
                                            className="w-full flex items-center justify-between group/btn bg-slate-950 text-white px-5 py-3.5 rounded-full text-[9px] uppercase tracking-[0.2em] font-bold hover:bg-blue-600 hover:shadow-[0_8px_30px_rgb(37,99,235,0.3)] transition-all duration-300"
                                        >
                                            <span>View Project</span>
                                            <ArrowUpRight size={12} className="group-hover/btn:rotate-45 transition-transform duration-300" />
                                        </a>
                                        {project.playStore && (
                                            <a
                                                href={project.playStore}
                                                className="w-full flex items-center justify-center py-3.5 rounded-full border border-slate-200 hover:border-blue-200 hover:bg-blue-50 transition-colors duration-300 text-slate-700 text-[9px] font-bold uppercase tracking-[0.2em]"
                                                title="View on Play Store"
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

                {/* THE APPROACH SECTION */}
                <div className="mb-32 md:mb-48 border-t border-slate-200 pt-20">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-slate-950">
                            Development <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Methodology.</span>
                        </h2>
                        <p className="text-slate-500 text-sm font-medium max-w-md leading-relaxed">
                            Scaling an idea requires more than just code. It requires a disciplined approach to architecture, performance, and user psychology.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { step: "01", title: "Architecture", icon: <Code2 size={20}/>, desc: "Defining strict database models, API structures, and state management (Next.js / Firebase) before writing visual code." },
                            { step: "02", title: "Execution", icon: <Cpu size={20}/>, desc: "Building modular, type-safe components. Ensuring cross-platform fluidity using Flutter and Tailwind CSS." },
                            { step: "03", title: "Scale", icon: <ArrowUpRight size={20}/>, desc: "Implementing edge-caching, optimizing bundle sizes, and preparing the infrastructure for user acquisition." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 md:p-12 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-500 group">
                                <div className="flex justify-between items-center mb-8">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{item.step}</span>
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                                        {item.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-slate-950">{item.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* EXPERIMENTAL LABS */}
                <div className="bg-slate-950 text-white rounded-[4rem] p-10 md:p-24 relative overflow-hidden shadow-2xl">
                    {/* Inner Blue Glow */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

                    <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12 border-b border-slate-800 pb-16 relative z-10">
                        <div className="max-w-xl">
                            <span className="text-blue-400 text-[9px] font-bold uppercase tracking-[0.2em] mb-6 block bg-blue-950/50 w-max px-4 py-2 rounded-full border border-blue-800/50">Archive</span>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-[0.9]">
                                Experimental <br /> <span className="text-slate-500">Labs.</span>
                            </h2>
                            <p className="text-slate-400 text-base font-medium leading-relaxed">
                                Where I break things to learn how they work. Open-source utilities, architectural patterns, and UI systems.
                            </p>
                        </div>
                        <a href="https://github.com/hirenmasaliya" target="_blank" className="flex items-center gap-3 px-8 py-5 bg-white text-slate-950 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white hover:shadow-[0_8px_30px_rgb(37,99,235,0.3)] transition-all duration-300">
                            <Github size={14} />
                            GitHub Archive
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                        {[
                            { name: "Boilerplate", desc: "Performance-tuned Next.js startup foundation.", tech: "Next.js" },
                            { name: "Auth Hook", desc: "Reactive state and authentication management.", tech: "TypeScript" },
                            { name: "UI System", desc: "Strict atomic design system for internal tools.", tech: "Tailwind" },
                        ].map((lab, i) => (
                            <div key={i} className="p-10 md:p-12 bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-3xl hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-500 group">
                                <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-white group-hover:text-blue-400 transition-colors duration-500">{lab.name}</h3>
                                <p className="text-sm text-slate-400 font-medium leading-relaxed mb-10">{lab.desc}</p>
                                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-400 bg-slate-950 px-4 py-2 rounded-md">
                                    {lab.tech}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <footer className="mt-32 text-center border-t border-slate-200 pt-10">
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em]">
                        © {new Date().getFullYear()} Hiren Masaliya — Jetpur, Gujarat
                    </p>
                </footer>

            </section>
        </main>
    );
}