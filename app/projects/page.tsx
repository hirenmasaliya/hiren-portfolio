"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, ArrowUpRight, Github, Code2, Cpu, Rocket, ArrowRight, Sparkles } from "lucide-react";

const customEase = [0.25, 1, 0.5, 1] as const;

export default function Projects() {
    const [filter, setFilter] = useState("All");

    const projects = [
        {
            id: "01",
            title: "Aptro Platform",
            category: "SaaS",
            description: "An all-in-one app for small business owners to easily manage billing, inventory, and daily operations.",
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
            category: "Web App",
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
            category: "Web App",
            description: "A fast corporate website built to help the business showcase services and connect with clients easily.",
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
            category: "Web App",
            description: "A clean, fast-loading website built for an infrastructure company to display their work and services.",
            tech: ["HTML", "CSS", "JavaScript"],
            role: "Lead Developer",
            year: "2026",
            link: "https://www.dirainfratech.com/",
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
        <main className="bg-[#FAFAFA] text-[#111111] min-h-screen pt-32 pb-16 selection:bg-[#111111] selection:text-white font-sans overflow-hidden">
            
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
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-2 h-2 bg-[#111111] rounded-full"></div>
                                <span className="text-gray-500 text-xs uppercase tracking-widest font-semibold">
                                    Selected Work
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-[6rem] lg:text-[7rem] font-light tracking-tight leading-[1] text-[#111111]">
                                Recent <span className="font-medium text-gray-400 italic">Projects.</span>
                            </h1>
                        </div>
                        <p className="text-gray-500 text-lg md:text-xl max-w-sm font-light pb-2 leading-relaxed">
                            Building fast, reliable apps and websites that solve real business problems and look great doing it.
                        </p>
                    </motion.div>
                </div>

                {/* FILTER TABS (Modern Pill Design) */}
                <div className="flex justify-start mb-12 md:mb-16 sticky top-20 z-30 py-4 bg-[#FAFAFA]/90 backdrop-blur-md">
                    <div className="flex flex-wrap gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-3 rounded-full text-sm transition-all duration-300 flex items-center gap-2 font-medium border ${
                                    filter === cat 
                                    ? "bg-[#111111] text-white border-[#111111] shadow-md" 
                                    : "bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-[#111111]"
                                }`}
                            >
                                {cat}
                                <span className={`text-[11px] px-2 py-0.5 rounded-full ${
                                    filter === cat ? "bg-white/20" : "bg-gray-100 text-gray-500"
                                }`}>
                                    {categoryCounts[cat]}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* PROJECTS GRID - Premium Card Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 mb-32 md:mb-30">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ duration: 0.5, ease: customEase }}
                                className="group flex flex-col bg-white rounded-[2rem] border border-gray-100 p-6 md:p-4 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 cursor-pointer"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[3/2] overflow-hidden bg-gray-100 rounded-[1.5rem] mb-8">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                                    
                                    {project.featured && (
                                        <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#111111] rounded-full shadow-sm flex items-center gap-2">
                                            <Sparkles size={12} /> Featured
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-1">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                                            {project.category}
                                        </span>
                                        {project.mobileApp && <Smartphone size={18} className="text-gray-400" />}
                                    </div>

                                    <h2 className="text-3xl font-medium mb-3 tracking-tight text-[#111111] group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </h2>

                                    <p className="text-gray-500 text-base font-light leading-relaxed mb-8 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-[11px] font-medium uppercase tracking-wider text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Link Actions */}
                                    <div className="flex items-center gap-6 mt-auto border-t border-gray-100 pt-6">
                                        <a
                                            href={project.link}
                                            className="text-sm font-semibold text-[#111111] flex items-center gap-2 hover:text-blue-600 transition-colors"
                                        >
                                            View Project <ArrowUpRight size={16} />
                                        </a>
                                        {project.playStore && (
                                            <a
                                                href={project.playStore}
                                                className="text-sm font-medium text-gray-400 flex items-center gap-2 hover:text-[#111111] transition-colors"
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
                        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#111111] leading-[1.2]">
                            How I <br/> <span className="font-medium">Build.</span>
                        </h2>
                        <p className="text-gray-500 text-base font-light max-w-md leading-relaxed">
                            A great app requires more than just code. It needs a clear plan, smooth design, and a solid foundation to handle growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {[
                            { step: "01", title: "1. Plan", icon: <Code2 size={22}/>, desc: "We figure out the database, features, and design before writing any code." },
                            { step: "02", title: "2. Build", icon: <Cpu size={22}/>, desc: "I write clean, fast code using modern tools to make sure the app works perfectly on all devices." },
                            { step: "03", title: "3. Launch", icon: <Rocket size={22}/>, desc: "I test everything and optimize the app so it loads quickly and is ready for real users." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-100 hover:shadow-xl hover:shadow-gray-100 transition-all duration-500 group flex flex-col">
                                <div className="flex justify-between items-center mb-10">
                                    <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">{item.step}</span>
                                    <div className="w-14 h-14 rounded-full bg-gray-50 text-[#111111] flex items-center justify-center group-hover:bg-[#111111] group-hover:text-white transition-colors duration-500 shadow-sm">
                                        {item.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-medium tracking-tight mb-3 text-[#111111]">{item.title}</h3>
                                <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* EXPERIMENTAL LABS - Rounded Dark Section */}
                <div className="bg-[#111111] rounded-[2rem] md:rounded-[3rem] text-white p-10 md:p-20 relative overflow-hidden shadow-2xl">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-10 border-b border-white/10 pb-16 relative z-10">
                        <div className="max-w-xl">
                            <span className="text-gray-400 font-semibold text-xs uppercase tracking-widest mb-6 block">Open Source</span>
                            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 leading-[1.2]">
                                Code <br /> <span className="font-medium">Playground.</span>
                            </h2>
                            <p className="text-gray-400 text-base font-light leading-relaxed">
                                Where I test new ideas, learn new tools, and build free resources to share with other developers.
                            </p>
                        </div>
                        <a href="https://github.com/hirenmasaliya" target="_blank" className="flex items-center gap-3 px-8 py-4 bg-white rounded-full text-[#111111] text-sm font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300">
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
                                <h3 className="text-xl font-medium tracking-tight mb-3 text-white group-hover:translate-x-1 transition-transform duration-300">{lab.name}</h3>
                                <p className="text-sm font-light text-gray-400 leading-relaxed mb-8 flex-1">{lab.desc}</p>
                                <span className="text-[11px] font-medium uppercase tracking-widest text-gray-300 border border-white/20 bg-white/5 rounded-lg px-3 py-1.5 w-max">
                                    {lab.tech}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <footer className="mt-20 text-center border-t border-gray-200 pt-10 pb-8">
                    <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">
                        © {new Date().getFullYear()} Hiren Masaliya — Jetpur, Gujarat
                    </p>
                </footer>

            </section>
        </main>
    );
}