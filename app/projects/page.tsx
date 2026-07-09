"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, ArrowUpRight, Github, Code2, Cpu, GitBranch, ArrowRight } from "lucide-react";

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
        <main className="bg-[#F8F8F8] text-[#222222] min-h-screen pt-32 pb-16 selection:bg-[#222222] selection:text-[#FFFFFF] font-sans overflow-hidden">
            
            <section className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">

                {/* HEADER SECTION */}
                <div className="mb-24 md:mb-32 text-left border-b border-[#222222]/10 pb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: customEase }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-8"
                    >
                        <div>
                            <div className="flex items-center gap-2 mb-8">
                                <div className="w-2 h-2 bg-[#222222] rounded-full"></div>
                                <span className="text-[#7B7B7B] text-xs uppercase tracking-widest font-medium">
                                    Selected Portfolio
                                </span>
                            </div>
                            <h1 className="text-[12vw] md:text-[8rem] font-light tracking-tighter leading-[0.85] text-[#222222]">
                                Digital <br /> <span className="text-[#7B7B7B] italic">Products.</span>
                            </h1>
                        </div>
                        <p className="text-[#7B7B7B] text-lg max-w-sm font-medium pb-2 md:pb-4 leading-relaxed">
                            Building high-performance digital products at the intersection of stark business logic and human experience.
                        </p>
                    </motion.div>
                </div>

                {/* FILTER TABS */}
                <div className="flex justify-start mb-16 md:mb-20 sticky top-20 z-20 bg-[#F8F8F8]/90 backdrop-blur-md py-6 border-b border-[#222222]/5">
                    <div className="flex flex-wrap gap-8 md:gap-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`pb-2 text-xs uppercase tracking-widest transition-colors duration-300 relative flex items-start gap-1 font-medium ${
                                    filter === cat ? "text-[#222222]" : "text-[#7B7B7B] hover:text-[#222222]"
                                }`}
                            >
                                {cat}
                                <span className="text-[9px] opacity-60 relative -top-1 font-light">{categoryCounts[cat]}</span>
                                {filter === cat && (
                                    <motion.div
                                        layoutId="activeFilter"
                                        transition={{ duration: 0.5, ease: customEase }}
                                        className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#222222]"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* PROJECTS GRID - Minimalist Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-16 mb-32 md:mb-48">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.98, y: 20 }}
                                transition={{ duration: 0.5, ease: customEase }}
                                className="group flex flex-col cursor-pointer"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[4/3] overflow-hidden bg-[#E5E5E5] rounded-2xl mb-8 transition-all duration-700">
                                    <div className="absolute top-6 right-6 z-10">
                                        <motion.span 
                                            initial={{ y: -10, opacity: 0 }} 
                                            whileInView={{ y: 0, opacity: 1 }} 
                                            transition={{ duration: 0.6, ease: customEase, delay: 0.2 }}
                                            className="block text-[#222222] text-sm font-medium"
                                        >
                                            {project.id}
                                        </motion.span>
                                    </div>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 ease-[0.25,1,0.5,1] group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-[#222222]/5 mix-blend-multiply pointer-events-none"></div>
                                    
                                    {project.featured && (
                                        <div className="absolute top-6 left-6 bg-[#FFFFFF] px-4 py-2 text-[10px] font-medium uppercase tracking-widest text-[#222222] rounded-full shadow-sm">
                                            Featured
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-3">
                                        <span className="text-[10px] text-[#7B7B7B] uppercase tracking-widest">
                                            {project.category}
                                        </span>
                                        {project.mobileApp && <Smartphone size={16} className="text-[#222222]" />}
                                    </div>

                                    <h2 className="text-2xl font-medium mb-4 tracking-tight text-[#222222]">
                                        {project.title}
                                    </h2>

                                    <p className="text-[#7B7B7B] text-sm leading-relaxed mb-6 font-medium line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-[10px] uppercase tracking-widest text-[#7B7B7B] px-3 py-1.5 rounded-full border border-[#222222]/10 group-hover:border-[#222222]/30 transition-colors">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Link Actions */}
                                    <div className="flex items-center gap-6 mt-auto border-t border-[#222222]/10 pt-6">
                                        <a
                                            href={project.link}
                                            className="text-sm font-medium text-[#222222] flex items-center gap-2 border-b border-[#222222] pb-0.5 hover:text-[#7B7B7B] hover:border-[#7B7B7B] transition-colors"
                                        >
                                            View Project <ArrowUpRight size={14} />
                                        </a>
                                        {project.playStore && (
                                            <a
                                                href={project.playStore}
                                                className="text-sm font-medium text-[#7B7B7B] flex items-center gap-2 hover:text-[#222222] transition-colors"
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
                <div className="mb-32 md:mb-48 border-t border-[#222222]/10 pt-24">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
                        <h2 className="text-4xl md:text-6xl font-light tracking-tight text-[#222222] leading-[1.1]">
                            Development <br/> <span className="text-[#7B7B7B] italic">Methodology.</span>
                        </h2>
                        <p className="text-[#7B7B7B] text-base font-medium max-w-md leading-relaxed">
                            Scaling an idea requires more than just code. It requires a disciplined approach to architecture, performance, and user psychology.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {[
                            { step: "01", title: "Architecture", icon: <Code2 size={20}/>, desc: "Defining strict database models, API structures, and state management before writing visual code." },
                            { step: "02", title: "Execution", icon: <Cpu size={20}/>, desc: "Building modular, type-safe components. Ensuring cross-platform fluidity using modern frameworks." },
                            { step: "03", title: "Scale", icon: <ArrowUpRight size={20}/>, desc: "Implementing edge-caching, optimizing bundle sizes, and preparing the infrastructure for acquisition." }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#FFFFFF] p-10 md:p-12 border border-[#222222]/5 hover:border-[#222222]/20 transition-all duration-500 group flex flex-col">
                                <div className="flex justify-between items-center mb-12">
                                    <span className="text-[10px] uppercase tracking-widest text-[#7B7B7B]">{item.step}</span>
                                    <div className="w-12 h-12 rounded-full bg-[#F8F8F8] text-[#222222] flex items-center justify-center group-hover:bg-[#222222] group-hover:text-[#FFFFFF] transition-colors duration-500">
                                        {item.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-medium tracking-tight mb-4 text-[#222222]">{item.title}</h3>
                                <p className="text-sm text-[#7B7B7B] leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* EXPERIMENTAL LABS - Stark Dark Section */}
                <div className="bg-[#222222] text-[#FFFFFF] p-10 md:p-24 relative overflow-hidden">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12 border-b border-[#FFFFFF]/10 pb-16 relative z-10">
                        <div className="max-w-xl">
                            <span className="text-[#7B7B7B] text-[10px] uppercase tracking-widest mb-8 block">Archive</span>
                            <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-8 leading-[1.1]">
                                Experimental <br /> <span className="text-[#7B7B7B] italic">Labs.</span>
                            </h2>
                            <p className="text-[#F8F8F8]/70 text-lg font-medium leading-relaxed">
                                Where I break things to learn how they work. Open-source utilities, architectural patterns, and UI systems.
                            </p>
                        </div>
                        <a href="https://github.com/hirenmasaliya" target="_blank" className="flex items-center gap-3 px-8 py-4 bg-[#FFFFFF] text-[#222222] text-sm font-medium hover:scale-105 transition-transform duration-300">
                            <Github size={16} />
                            GitHub Archive
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                        {[
                            { name: "Boilerplate", desc: "Performance-tuned Next.js startup foundation.", tech: "Next.js" },
                            { name: "Auth Hook", desc: "Reactive state and authentication management.", tech: "TypeScript" },
                            { name: "UI System", desc: "Strict atomic design system for internal tools.", tech: "Tailwind" },
                        ].map((lab, i) => (
                            <div key={i} className="p-8 md:p-10 border border-[#FFFFFF]/10 hover:border-[#FFFFFF]/30 transition-all duration-500 flex flex-col group">
                                <h3 className="text-2xl font-light tracking-tight mb-4 text-[#FFFFFF] group-hover:translate-x-2 transition-transform duration-300">{lab.name}</h3>
                                <p className="text-sm text-[#7B7B7B] leading-relaxed mb-10 flex-1">{lab.desc}</p>
                                <span className="text-[10px] uppercase tracking-widest text-[#7B7B7B] border border-[#FFFFFF]/10 px-4 py-2 w-max">
                                    {lab.tech}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <footer className="mt-24 text-center border-t border-[#222222]/10 pt-12 pb-8">
                    <p className="text-[10px] text-[#7B7B7B] uppercase tracking-widest">
                        © {new Date().getFullYear()} Hiren Masaliya — Jetpur, Gujarat
                    </p>
                </footer>

            </section>
        </main>
    );
}