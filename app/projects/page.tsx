"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Smartphone, ExternalLink, Code2, Layers } from "lucide-react";

export default function Projects() {
    const [filter, setFilter] = useState("All");

    const projects = [
        {
            title: "Aptro Platform",
            category: "SaaS",
            description: "A comprehensive ecosystem for freelancers to automate invoicing, client onboarding, and project tracking.",
            tech: ["Flutter", "Firebase", "Razorpay", "Android"],
            link: "https://aptrooms.web.app/",
            github: "https://github.com/hirenmasaliya/aptro",
            image: "/images/projects/aptro-website.png",
            mobileApp: true,
            playStore: "https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro",
            featured: true
        },
        {
            title: "Buildart Industries Website",
            category: "Web App",
            description: "A full-featured business website for Buildart Industries, showcasing services, portfolio, and contact integration with modern responsive design.",
            tech: ["React js", "Tailwind CSS", "Firebase"],
            link: "https://buildartind.com",
            github: "https://github.com/hirenmasaliya/buildart-website",
            image: "/images/projects/buildart-website.png",
            mobileApp: false
        },

        {
            title: "Dira Website",
            category: "Web App",
            description: "A simple, fast, and responsive static website for Dira, showcasing services and company information with modern UI design.",
            tech: ["HTML", "CSS", "JavaScript"],
            link: "https://www.dirainfratech.com/",
            github: "https://github.com/hirenmasaliya/dira-website",
            image: "/images/projects/dira-website.png",
            mobileApp: false
        },

    ];

    const categories = ["All", "SaaS", "Web App"];
    const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

    return (
        <main className="bg-black text-white min-h-screen pt-32 pb-20 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] -z-10"></div>

            <section className="max-w-7xl mx-auto px-6 relative z-10">

                {/* HEADER SECTION */}
                <div className="mb-20 text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                        <Layers className="w-3 h-3" /> Portfolio
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                        Digital <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">Creations</span>
                    </h1>
                    <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                        Crafting high-performance digital products at the intersection of design and data.
                    </p>
                </div>

                {/* FILTER TABS */}
                <div className="flex justify-center mb-16">
                    <div className="bg-zinc-900/50 p-1.5 rounded-2xl border border-white/5 backdrop-blur-md inline-flex gap-1">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${filter === cat
                                    ? "bg-white text-black shadow-xl"
                                    : "text-gray-500 hover:text-white"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* PROJECTS MASONRY-STYLE GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col bg-zinc-950 rounded-[2.5rem] border border-white/5 hover:border-blue-500/30 transition-all duration-700 hover:-translate-y-2 overflow-hidden"
                        >
                            {/* Visual Header */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>

                                {project.featured && (
                                    <div className="absolute top-6 left-6 flex items-center gap-2 bg-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl">
                                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                                        Featured
                                    </div>
                                )}
                            </div>

                            {/* Info Content */}
                            <div className="p-8 flex flex-col flex-1 relative mt-[-40px]">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="bg-zinc-900/80 border border-white/10 backdrop-blur-md px-4 py-1.5 rounded-xl text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                                        {project.category}
                                    </div>
                                    {project.mobileApp && <Smartphone className="w-5 h-5 text-zinc-600" />}
                                </div>

                                <h2 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h2>
                                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">
                                    {project.description}
                                </p>

                                {/* Tech Stack Pillbox */}
                                <div className="flex flex-wrap gap-2 mb-10">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-[9px] font-black uppercase tracking-tighter bg-zinc-900 text-zinc-400 px-2.5 py-1 rounded-md group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-colors">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Actions Container */}
                                <div className="space-y-3">
                                    <a
                                        href={project.link}
                                        className="w-full flex items-center justify-center gap-2 bg-white text-black py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all shadow-xl group/btn"
                                    >
                                        Launch Project <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                                    </a>

                                    <div className="flex gap-3">
                                        {project.github && (
                                            <a href={project.github} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/5 text-zinc-500 hover:text-white hover:bg-white/5 transition-all text-[10px] font-bold uppercase">
                                                <Code2 className="w-3 h-3" /> Source
                                            </a>
                                        )}
                                        {project.playStore && (
                                            <a href={project.playStore} className="flex-1 flex items-center justify-center py-3 rounded-xl border border-white/5 hover:border-green-500/30 transition-all grayscale hover:grayscale-0">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" className="w-3 h-3" alt="Store" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* LABS / EXPERIMENTAL SECTION */}
                <div className="bg-zinc-900/20 border border-white/5 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]"></div>

                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 relative z-10">
                        <div className="max-w-xl">
                            <h2 className="text-4xl font-bold mb-4 tracking-tight italic">Experimental Labs</h2>
                            <p className="text-gray-500 text-lg">Where I break things to learn how they work. Open-source utilities, patterns, and proofs of concept.</p>
                        </div>
                        <button className="px-8 py-3 bg-zinc-900 border border-white/10 rounded-2xl font-bold text-sm hover:border-blue-500 transition-all">
                            Browse GitHub Archive
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                        {[
                            { name: "Next.js Boilerplate", desc: "Performance-tuned starter with pre-configured CI/CD.", tech: "Next.js" },
                            { name: "Custom Auth Hook", desc: "Zustand-powered reactive auth management.", tech: "TypeScript" },
                            { name: "Tailwind Component Lib", desc: "Atomic UI system for internal tools.", tech: "PostCSS" },
                        ].map((lab, i) => (
                            <div key={i} className="p-8 bg-black/40 backdrop-blur-md border border-white/5 rounded-[2rem] hover:border-blue-500/20 transition-all group">
                                <div className="text-blue-500 mb-4 opacity-50 group-hover:opacity-100 transition-opacity italic font-mono text-xs">#00{i + 1}</div>
                                <h3 className="text-xl font-bold mb-3">{lab.name}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed mb-6">{lab.desc}</p>
                                <div className="inline-block px-3 py-1 bg-zinc-900 rounded-lg text-[9px] font-black uppercase text-zinc-500 tracking-widest">{lab.tech}</div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </main>
    );
}