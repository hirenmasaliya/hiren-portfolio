"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, ArrowUpRight, Github, Code2, Cpu, Rocket, Sparkles, Globe } from "lucide-react";

const customEase = [0.25, 1, 0.5, 1] as const;

export default function Projects() {
    const [filter, setFilter] = useState("All");

    // Simplified categories for non-technical clients
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
            featured: true
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
            featured: true 
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
            mobileApp: false
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
            mobileApp: false
        },
    ];

    const categories = ["All", "App", "Website"];
    
    const categoryCounts = useMemo(() => {
        const counts: Record<string, number> = { All: projects.length };
        categories.filter(c => c !== "All").forEach(cat => {
            counts[cat] = projects.filter(p => p.category === cat).length;
        });
        return counts;
    }, [projects, categories]);

    const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

    return (
        <main className="bg-[#FAFAFA] text-gray-900 min-h-screen pt-32 pb-16 selection:bg-blue-600 selection:text-white font-sans overflow-hidden">
            
            <section className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">

                {/* HEADER SECTION */}
                <div className="mb-16 md:mb-24 text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: customEase }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-8"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-6 bg-white w-max px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                                <span className="text-gray-600 text-xs uppercase tracking-widest font-bold">
                                    Selected Work
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-[6rem] lg:text-[7rem] font-bold tracking-tight leading-[1] text-gray-900">
                                Recent <br className="md:hidden" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 font-light italic">Projects.</span>
                            </h1>
                        </div>
                        <p className="text-gray-600 text-lg md:text-xl max-w-sm font-normal pb-2 leading-relaxed">
                            Building fast, reliable apps and websites that solve real business problems and look great doing it.
                        </p>
                    </motion.div>
                </div>

                {/* FILTER TABS (Upgraded Pill Design) */}
                <div className="flex justify-start mb-12 md:mb-16 sticky top-20 z-30 py-4 bg-[#FAFAFA]/90 backdrop-blur-md">
                    <div className="flex flex-wrap gap-4 p-1.5 bg-white border border-gray-200 rounded-full shadow-sm">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2.5 rounded-full text-sm transition-all duration-300 flex items-center gap-2 font-bold ${
                                    filter === cat 
                                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20" 
                                    : "bg-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                                }`}
                            >
                                {cat}
                                <span className={`text-[11px] px-2 py-0.5 rounded-full transition-colors ${
                                    filter === cat ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                                }`}>
                                    {categoryCounts[cat]}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* PROJECTS GRID - Premium Card Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ duration: 0.5, ease: customEase }}
                                className="group flex flex-col bg-white rounded-[2rem] border border-gray-100 p-5 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500"
                            >
                                {/* Image Container */}
                                <a href={project.link} target="_blank" rel="noreferrer" className="relative aspect-[3/2] overflow-hidden bg-gray-100 rounded-[1.5rem] mb-6 block">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="transition-transform duration-700 ease-out group-hover:scale-105 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                                    
                                    {project.featured && (
                                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-900 rounded-full shadow-sm flex items-center gap-1.5">
                                            <Sparkles size={12} className="text-blue-600" /> Featured
                                        </div>
                                    )}
                                </a>

                                {/* Content */}
                                <div className="flex flex-col flex-1 px-2">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                                            {project.category}
                                        </span>
                                        {project.mobileApp ? <Smartphone size={18} className="text-gray-400" /> : <Globe size={18} className="text-gray-400" />}
                                    </div>

                                    <h2 className="text-2xl font-bold mb-3 tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors">
                                        <a href={project.link} target="_blank" rel="noreferrer">{project.title}</a>
                                    </h2>

                                    <p className="text-gray-600 text-sm font-normal leading-relaxed mb-6 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-[11px] font-semibold uppercase tracking-wider text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Link Actions */}
                                    <div className="flex items-center gap-6 mt-auto border-t border-gray-100 pt-5">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-sm font-bold text-gray-900 flex items-center gap-2 hover:text-blue-600 transition-colors"
                                        >
                                            View Project <ArrowUpRight size={16} />
                                        </a>
                                        {project.playStore && (
                                            <a
                                                href={project.playStore}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-sm font-semibold text-gray-500 flex items-center gap-2 hover:text-gray-900 transition-colors border-l border-gray-200 pl-6"
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
                <div className="mb-32 md:mb-40 border-t border-gray-200 pt-20">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.2]">
                            How I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Build.</span>
                        </h2>
                        <p className="text-gray-600 text-lg font-normal max-w-md leading-relaxed">
                            A great app requires more than just code. It needs a clear plan, smooth design, and a solid foundation to handle growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {[
                            { step: "01", title: "Plan", icon: <Code2 size={24}/>, desc: "We figure out exactly what your business needs, plan the features, and design the look before writing any code." },
                            { step: "02", title: "Build", icon: <Cpu size={24}/>, desc: "I write clean, secure code using modern tools to make sure the app works perfectly and safely on all devices." },
                            { step: "03", title: "Launch", icon: <Rocket size={24}/>, desc: "I thoroughly test everything, optimize it for speed, and help you launch it to the public or the App Store." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 group flex flex-col">
                                <div className="flex justify-between items-center mb-10">
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Step {item.step}</span>
                                    <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 shadow-sm">
                                        {item.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight mb-4 text-gray-900">{item.title}</h3>
                                <p className="text-gray-600 font-normal leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* EXPERIMENTAL LABS - Deep Slate & Premium Feel */}
                <div className="bg-slate-900 rounded-[2.5rem] md:rounded-[3rem] text-white p-10 md:p-20 relative overflow-hidden shadow-2xl">
                    {/* Subtle Background Glow */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-10 border-b border-white/10 pb-16 relative z-10">
                        <div className="max-w-xl">
                            <span className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-6 block">Open Source</span>
                            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 leading-[1.2]">
                                Free Code <br /> <span className="font-bold text-white">Resources.</span>
                            </h2>
                            <p className="text-gray-400 text-lg font-light leading-relaxed">
                                Where I test new ideas, learn new tools, and build free templates to share with other developers.
                            </p>
                        </div>
                        <a href="https://github.com/hirenmasaliya" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-blue-600 rounded-full text-white text-sm font-bold hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95 transition-all duration-300">
                            <Github size={18} />
                            View GitHub
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                        {[
                            { name: "Starter Kit", desc: "A fast, ready-to-use template for starting new Next.js websites.", tech: "Next.js" },
                            { name: "Login System", desc: "A secure and reusable way to handle user logins and accounts.", tech: "TypeScript" },
                            { name: "UI Components", desc: "A collection of beautiful, ready-to-use buttons and cards.", tech: "Tailwind CSS" },
                        ].map((lab, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col group">
                                <h3 className="text-xl font-bold tracking-tight mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">{lab.name}</h3>
                                <p className="text-sm font-light text-gray-400 leading-relaxed mb-8 flex-1">{lab.desc}</p>
                                <span className="text-[11px] font-bold uppercase tracking-widest text-gray-300 border border-white/20 bg-white/5 rounded-lg px-3 py-1.5 w-max">
                                    {lab.tech}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <footer className="mt-20 text-center border-t border-gray-200 pt-10 pb-8">
                    <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                        © {new Date().getFullYear()} Hiren Masaliya — Jetpur, Gujarat
                    </p>
                </footer>

            </section>
        </main>
    );
}