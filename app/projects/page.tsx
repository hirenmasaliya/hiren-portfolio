"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Smartphone, ExternalLink, Code2, Layers, Globe } from "lucide-react";

export default function Projects() {
    const [filter, setFilter] = useState("All");

    const projects = [
        {
            title: "Aptro Platform",
            category: "SaaS",
            description: "A comprehensive ecosystem for freelancers to automate invoicing, client onboarding, and project tracking.",
            tech: ["Flutter", "Firebase", "Razorpay"],
            link: "https://aptrooms.web.app/",
            github: "",
            image: "/images/projects/aptro-website.png",
            mobileApp: true,
            playStore: "https://play.google.com/store/apps/details?id=com.hirenmasaliya.aptro",
            featured: true
        },
        {
            title: "Buildart Industries",
            category: "Web App",
            description: "High-performance corporate platform with service showcases and real-time contact management.",
            tech: ["React js", "Tailwind CSS", "Firebase"],
            link: "https://buildartind.com",
            github: "",
            image: "/images/projects/buildart-website.png",
            mobileApp: false
        },
        {
            title: "Dira Infratech",
            category: "Web App",
            description: "A precision-engineered static site focusing on performance and modern UI for infrastructure services.",
            tech: ["HTML", "CSS", "JavaScript"],
            link: "https://www.dirainfratech.com/",
            github: "",
            image: "/images/projects/dira-website.png",
            mobileApp: false
        },
        {
            title: "Clothiva Elite",
            category: "Web App",
            description: "A premium e-commerce experience architected for the modern fashion industry. Features a high-conversion UI, seamless Razorpay integration, and a performance-optimized Next.js foundation.",
            tech: ["Next.js", "TypeScript", "Razorpay", "REST API"],
            link: "https://clothivaelite.vercel.app/",
            github: "", // Leave empty to hide the source button
            image: "/images/projects/clothiva-thumbnail.png", // Ensure you update this path to your actual image
            mobileApp: false,
            featured: true // Setting this to true will give it the 'Featured' badge in the UI
        },
    ];

    const categories = ["All", "SaaS", "Web App"];
    const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

    return (
        <main className="bg-white text-zinc-900 min-h-screen pt-32 pb-20 selection:bg-blue-100 selection:text-blue-700">

            <section className="max-w-7xl mx-auto px-6 relative z-10">

                {/* HEADER SECTION */}
                <div className="mb-24 text-left space-y-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em]"
                    >
                        <Layers className="w-3 h-3" /> Selected Portfolio
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] text-zinc-950"
                    >
                        Digital <br /> <span className="text-blue-600 italic">Creations.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-500 text-lg md:text-xl max-w-2xl font-medium pt-4"
                    >
                        Building high-performance digital products at the intersection of business logic and human experience.
                    </motion.p>
                </div>

                {/* FILTER TABS */}
                <div className="flex justify-start mb-16 border-b border-zinc-100">
                    <div className="flex gap-8">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`pb-4 text-xs font-bold uppercase tracking-widest transition-all relative ${filter === cat ? "text-blue-600" : "text-zinc-400 hover:text-zinc-950"
                                    }`}
                            >
                                {cat}
                                {filter === cat && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-0 w-full h-1 bg-blue-600"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* PROJECTS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                layout
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="group flex flex-col bg-white rounded-4xl border border-zinc-100 hover:border-blue-100 transition-all duration-500 hover:shadow-2xl overflow-hidden"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-video overflow-hidden bg-zinc-100">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {project.featured && (
                                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600 shadow-sm border border-blue-50">
                                            Featured
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-10 flex flex-col flex-1">
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                                            {project.category}
                                        </span>
                                        {project.mobileApp && <Smartphone size={16} className="text-zinc-300" />}
                                    </div>

                                    <h2 className="text-3xl font-black mb-4 tracking-tighter text-zinc-950">
                                        {project.title}
                                    </h2>

                                    <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-1">
                                        {project.description}
                                    </p>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-2 mb-10">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-[9px] font-bold uppercase tracking-widest bg-zinc-50 text-zinc-500 px-3 py-1 rounded-full border border-zinc-100">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Link Actions */}
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a
                                            href={project.link}
                                            className="flex-1 flex items-center justify-center gap-2 bg-zinc-950 text-white py-4 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg shadow-zinc-200"
                                        >
                                            View Project <ExternalLink size={14} />
                                        </a>
                                        {project.playStore && (
                                            <a
                                                href={project.playStore}
                                                className="px-6 flex items-center justify-center py-4 rounded-full border border-zinc-200 hover:bg-zinc-50 transition-all"
                                            >
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" className="w-4 h-4 grayscale opacity-50" alt="Store" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* EXPERIMENTAL LABS (Inverted Theme for contrast) */}
                <div className="bg-zinc-950 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
                        <div className="max-w-xl">
                            <span className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Archive</span>
                            <h2 className="text-5xl font-black tracking-tighter mb-4">Experimental <br /> <span className="text-zinc-500">Labs.</span></h2>
                            <p className="text-zinc-400 text-lg">Where I break things to learn how they work. Open-source utilities and design patterns.</p>
                        </div>
                        <a href="https://github.com/hirenmasaliya" target="_blank" className="px-10 py-4 bg-white text-zinc-950 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all shadow-xl">
                            GitHub Archive
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { name: "Boilerplate", desc: "Performance-tuned Next.js starter.", tech: "Next.js" },
                            { name: "Auth Hook", desc: "Reactive reactive auth management.", tech: "TypeScript" },
                            { name: "UI System", desc: "Atomic system for internal tools.", tech: "Tailwind" },
                        ].map((lab, i) => (
                            <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group">
                                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{lab.name}</h3>
                                <p className="text-xs text-zinc-500 leading-relaxed mb-8">{lab.desc}</p>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 border border-zinc-800 px-3 py-1 rounded-md">
                                    {lab.tech}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <footer className="mt-40 text-center">
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest pb-10">
                        © {new Date().getFullYear()} Hiren Masaliya — Crafted with Precision
                    </p>
                </footer>

            </section>
        </main>
    );
}