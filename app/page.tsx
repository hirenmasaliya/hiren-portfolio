"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  Code2,
  Copy,
  ExternalLink,
  Layers3,
  Mail,
  MapPin,
  MessageCircle,
  Smartphone,
  Sparkles,
  Globe2,
  Workflow,
  Zap,
} from "lucide-react";

const EMAIL = "hirenmasliya14@gmail.com";
const WORDS = ["mobile apps", "web platforms", "business tools"];
const ease = [0.2, 0, 0, 1] as const;

const projects = [
  {
    title: "Aptro",
    category: "Business management · Mobile app",
    description:
      "A practical business tool that helps small businesses manage products, stock, orders and everyday operations in one place.",
    image: "/images/projects/aptro-website.png",
    link: "https://aptrooms.web.app/",
    label: "Explore Aptro",
  },
  {
    title: "Clothiva Elite",
    category: "E-commerce · Web",
    description:
      "An online shopping experience designed to make product discovery and browsing feel clear, smooth and simple.",
    image: "/images/projects/clothiva-thumbnail.png",
    link: "https://clothivaelite.vercel.app/",
    label: "Visit website",
  },
  {
    title: "Buildart Industries",
    category: "Business website · Web",
    description:
      "A company website that presents the business, its offerings and key information in a professional way.",
    image: "/images/projects/buildart-website.png",
    link: "https://buildartind.com",
    label: "Visit website",
  },
];

const experience = [
  {
    company: "Aptro",
    role: "Founder & Lead Developer",
    date: "Oct 2025 – Present",
    location: "Jetpur, India",
    tags: ["Flutter", "Firebase", "Web dashboard"],
  },
  {
    company: "Buildart Industries",
    role: "Freelance Web Developer",
    date: "Jan 2026 – Present",
    location: "Remote",
    tags: ["Next.js", "React"],
  },
  {
    company: "50% App",
    role: "Mobile App Developer",
    date: "Jan 2026",
    location: "Remote",
    tags: ["Flutter", "Firebase", "Android & iOS"],
  },
  {
    company: "DIRA Infratech",
    role: "Web Developer",
    date: "Aug 2025 – Sep 2025",
    location: "Remote",
    tags: ["Web development"],
  },
  {
    company: "Wallzer",
    role: "Founder",
    date: "May 2025 – Jul 2025",
    location: "Jetpur, India",
    tags: ["Product design", "Mobile app"],
  },
];

const services = [
  {
    icon: Smartphone,
    title: "Mobile app development",
    description:
      "Cross-platform Android and iOS apps built with Flutter, from the first screen to release.",
    tags: ["Flutter", "Android", "iOS"],
  },
  {
    icon: Globe2,
    title: "Websites & web apps",
    description:
      "Fast, responsive websites and dashboards that help customers understand your business and get things done.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    icon: Workflow,
    title: "Business systems",
    description:
      "Useful tools that simplify daily workflows, connect data and reduce repetitive manual work.",
    tags: ["Firebase", "APIs", "Automation"],
  },
  {
    icon: Layers3,
    title: "Product delivery",
    description:
      "Practical support across UI implementation, backend integration, testing and deployment.",
    tags: ["UI/UX", "Integration", "Launch"],
  },
];

export default function HomeContent() {
  const reduceMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setTypedText(WORDS[0]);
      return;
    }

    let timeout: ReturnType<typeof setTimeout>;
    let current = typedText;
    const target = WORDS[wordIndex];

    if (current === target) {
      timeout = setTimeout(() => {
        setTypedText("");
        setWordIndex((index) => (index + 1) % WORDS.length);
      }, 1900);
    } else {
      timeout = setTimeout(() => {
        setTypedText(target.slice(0, current.length + 1));
      }, 75);
    }

    return () => clearTimeout(timeout);
  }, [typedText, wordIndex, reduceMotion]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.55, ease },
    },
  };

  const reveal = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: reduceMotion ? 0 : 0.09 },
    },
  };

  return (
    <main className="min-h-screen overflow-x-clip bg-[#f8f9fc] text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-950">
      {/* Hero */}
      <section className="relative isolate px-5 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-16 lg:px-12 lg:pt-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[620px] overflow-hidden">
          <div className="absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-blue-200/40 blur-3xl" />
          <div className="absolute left-[15%] top-36 h-56 w-56 rounded-full bg-indigo-100/60 blur-3xl" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={reveal}
          className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
        >
          <div className="relative z-10 max-w-3xl">
            <motion.div variants={fadeUp} className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3.5 py-2 text-sm font-medium text-blue-800 shadow-sm backdrop-blur">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              Available for select projects
            </motion.div>

            <motion.p variants={fadeUp} className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Flutter & Full-Stack Developer
            </motion.p>

            <motion.h1 variants={fadeUp} className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-5xl md:text-6xl lg:text-[4.35rem]">
              I turn ideas into
              <span className="mt-2 block min-h-[1.12em] text-blue-700" aria-label={WORDS[wordIndex]}>
                <span aria-hidden="true">{reduceMotion ? WORDS[0] : typedText}</span>
                {!reduceMotion && <span aria-hidden="true" className="ml-0.5 animate-pulse font-normal">|</span>}
              </span>
              digital products.
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              I’m Hiren Masaliya, a developer from Gujarat, India. I build mobile apps, websites and business tools that make complex tasks feel simple—from the first idea to launch.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
              >
                Let’s discuss your idea
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
              >
                Explore my work
                <ArrowDownRight size={18} />
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2"><MapPin size={16} /> Jetpur, Gujarat, India</span>
              <span className="inline-flex items-center gap-2"><Code2 size={16} /> Flutter · Next.js · Firebase</span>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="relative mx-auto w-full max-w-[440px] lg:max-w-none">
            <div aria-hidden="true" className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-blue-200/70 via-indigo-100/60 to-white blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white bg-slate-200 shadow-2xl shadow-slate-900/10">
              <img
                src="/images/hero.png"
                alt="Portrait of Hiren Masaliya"
                className="h-full w-full object-cover object-center"
                onError={(event) => {
                  event.currentTarget.style.opacity = "0";
                }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 via-slate-950/25 to-transparent p-6 pt-24 sm:p-8 sm:pt-28">
                <p className="text-sm font-medium text-blue-100">Founder · Developer · Builder</p>
                <p className="mt-1 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Hiren Masaliya</p>
              </div>
            </div>

            <div className="absolute -left-3 top-8 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-xl shadow-slate-900/10 sm:-left-8 sm:p-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700"><CheckCircle2 size={22} /></span>
              <span><strong className="block text-sm font-semibold text-slate-900">Built for real needs</strong><span className="mt-0.5 block text-xs text-slate-500">People-first products</span></span>
            </div>
            <div className="absolute -bottom-4 right-2 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3.5 shadow-xl shadow-slate-900/10 sm:-right-6 sm:p-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-700"><BriefcaseBusiness size={21} /></span>
              <span><strong className="block text-sm font-semibold text-slate-900">End-to-end delivery</strong><span className="mt-0.5 block text-xs text-slate-500">Idea to deployment</span></span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Value strip */}
      <section aria-label="What you can expect" className="border-y border-slate-200 bg-white px-5 py-6 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-8">
          {[
            { icon: Zap, title: "Performance-minded", text: "Fast, responsive experiences" },
            { icon: Sparkles, title: "Simple by design", text: "Clear interfaces, less friction" },
            { icon: CheckCircle2, title: "Practical outcomes", text: "Technology built around your goals" },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-3 sm:justify-center">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-700"><item.icon size={21} /></span>
              <span><strong className="block text-sm font-semibold text-slate-900">{item.title}</strong><span className="mt-1 block text-sm text-slate-500">{item.text}</span></span>
            </div>
          ))}
        </div>
      </section>

      {/* About and services */}
      <section id="about" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">How I can help</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Good technology should make work easier.</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                I work with founders and businesses to turn rough ideas into reliable digital products. I focus on understanding the problem first, then choosing the right tools to solve it.
              </p>
              <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900">
                Tell me what you’re building <ArrowRight size={17} />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <article key={service.title} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-950/5 sm:p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white"><service.icon size={23} /></span>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">{tag}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-slate-200 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">A clear process</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">From idea to launch, step by step.</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">You’ll know what we’re building, why it matters and what comes next.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              { n: "01", title: "Understand", text: "We discuss your goals, users and biggest pain points before choosing a solution." },
              { n: "02", title: "Design & build", text: "I shape the user experience and develop the product in clear, manageable steps." },
              { n: "03", title: "Test & launch", text: "We check the details, prepare the release and get your product ready for real users." },
            ].map((step) => (
              <div key={step.n} className="rounded-3xl bg-[#f8f9fc] p-6 sm:p-8">
                <span className="text-sm font-bold tracking-widest text-blue-700">{step.n}</span>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-4 md:grid-cols-[1fr_0.7fr] md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">The journey so far</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Experience & collaboration</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-600 md:justify-self-end">A selection of product, mobile and web development work across independent projects and business teams.</p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            {experience.map((job, index) => (
              <article key={job.company} className={`grid gap-4 p-5 sm:p-6 md:grid-cols-[1fr_1.2fr_1fr] md:items-center ${index !== experience.length - 1 ? "border-b border-slate-200" : ""} transition-colors hover:bg-slate-50`}>
                <div>
                  <h3 className="font-semibold text-slate-900">{job.company}</h3>
                  <p className="mt-1 text-sm text-slate-500">{job.location}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800">{job.role}</p>
                  <p className="mt-1 text-sm text-slate-500">{job.date}</p>
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {job.tags.map((tag) => <span key={tag} className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600">{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="portfolio" className="scroll-mt-24 border-y border-slate-200 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Selected work</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Products built to solve problems.</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">A few examples of the products and websites I’ve helped bring to life.</p>
            </div>
            <Link href="/projects" className="inline-flex min-h-11 shrink-0 items-center gap-2 self-start rounded-full border border-slate-300 px-5 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:bg-blue-50 sm:self-auto">
              View all projects <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/5">
                <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`${project.label}: ${project.title}`} className="relative block aspect-[16/10] overflow-hidden bg-slate-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-blue-300">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    onError={(event) => {
                      event.currentTarget.style.opacity = "0";
                    }}
                  />
                  <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/95 text-slate-800 opacity-0 shadow-sm transition group-hover:opacity-100"><ExternalLink size={17} /></span>
                </a>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-700">{project.category}</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900">
                    {project.label} <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-12 text-center sm:px-12 sm:py-16">
          <div aria-hidden="true" className="absolute -right-10 -top-24 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-32 -left-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="relative mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">Have an idea?</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">Let’s make something useful.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">Tell me what you’re trying to build or improve. We can talk through the idea, the users and the best next step—without making it complicated.</p>
            <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Let's discuss a project")}`} className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300">
              <MessageCircle size={18} /> Start a conversation <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="scroll-mt-24 border-t border-slate-200 bg-white px-5 pb-8 pt-14 sm:px-8 sm:pt-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Get in touch</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">What can we build together?</h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">For project enquiries, collaborations or a quick conversation, email is the best place to start.</p>
              <a href={`mailto:${EMAIL}`} className="mt-5 inline-flex items-center gap-2 break-all text-lg font-semibold text-blue-700 hover:text-blue-900 sm:text-xl">
                <Mail size={20} className="shrink-0" /> {EMAIL}
              </a>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-300 px-5 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
              >
                {copied ? <Check size={17} /> : <Copy size={17} />}
                {copied ? "Email copied" : "Copy email"}
              </button>
              <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Project enquiry")}`} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-blue-700 px-5 text-sm font-semibold text-white transition hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300">
                Send an email <ArrowRight size={17} />
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p className="inline-flex items-center gap-2"><MapPin size={15} /> Jetpur, Gujarat, India</p>
            <p>© {new Date().getFullYear()} Hiren Masaliya. Built with care.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
