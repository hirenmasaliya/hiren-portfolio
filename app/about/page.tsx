"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  CheckCircle2,
  Code2,
  Globe2,
  HeartHandshake,
  Layers3,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";

const materialEase = [0.2, 0, 0, 1] as const;

const services = [
  {
    title: "Mobile applications",
    eyebrow: "iOS · Android",
    icon: Smartphone,
    description:
      "Cross-platform apps built with Flutter, with thoughtful interactions, maintainable architecture, and reliable store releases.",
    tags: ["Flutter", "Dart"],
  },
  {
    title: "Web products",
    eyebrow: "Web · SaaS",
    icon: Globe2,
    description:
      "Responsive websites and web applications built with Next.js and React, focused on speed, accessibility, and usability.",
    tags: ["Next.js", "React"],
  },
  {
    title: "Backend & cloud",
    eyebrow: "APIs · Data",
    icon: ShieldCheck,
    description:
      "Secure authentication, practical database design, API integrations, and cloud services designed to grow with your product.",
    tags: ["Firebase", "PostgreSQL"],
  },
];

const technologies = [
  "Flutter",
  "Dart",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Firebase",
  "PostgreSQL",
  "REST APIs",
  "Git & CI/CD",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: materialEase },
  },
};

export default function About() {
  const reduceMotion = useReducedMotion();

  const reveal = reduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.15 },
        variants: fadeInUp,
      };

  return (
    <main className="min-h-screen overflow-hidden bg-[#F8FAFC] pt-24 font-sans text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-950 md:pt-32">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 md:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            animate={reduceMotion ? undefined : "visible"}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.div variants={reduceMotion ? undefined : fadeInUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-2 text-sm font-medium text-blue-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              Developer · Founder · Product Builder
            </motion.div>

            <motion.h1
              variants={reduceMotion ? undefined : fadeInUp}
              className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-5xl md:text-6xl xl:text-[68px]"
            >
              I turn complex ideas into{" "}
              <span className="text-blue-600">simple digital products.</span>
            </motion.h1>

            <motion.p
              variants={reduceMotion ? undefined : fadeInUp}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
            >
              I’m <strong className="font-semibold text-slate-900">Hiren Masaliya</strong>,
              a software developer based in Jetpur, India. I work with founders
              and businesses to build useful mobile apps, web platforms, and
              dependable backend systems.
            </motion.p>

            <motion.div
              variants={reduceMotion ? undefined : fadeInUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
              >
                Let’s talk about your project
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
              >
                Explore my work
                <ArrowDownRight size={17} />
              </Link>
            </motion.div>

            <motion.div
              variants={reduceMotion ? undefined : fadeInUp}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-200 pt-6 text-sm text-slate-500"
            >
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-600" />
                End-to-end development
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-600" />
                Clear communication
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            {...reveal}
            className="relative mx-auto w-full max-w-[420px] lg:mr-2"
          >
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-blue-100 via-sky-50 to-transparent blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white bg-slate-200 shadow-[0_24px_80px_-32px_rgba(15,23,42,0.35)]">
              <Image
                src="/images/hiro.png"
                alt="Portrait of Hiren Masaliya, software developer and founder"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent p-6 pt-24">
                <p className="text-sm font-medium text-white/75">Based in</p>
                <p className="mt-1 text-lg font-semibold text-white">Jetpur, Gujarat, India</p>
              </div>
            </div>

            <div className="absolute -bottom-5 left-3 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl shadow-slate-900/10 sm:-left-7 sm:p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Layers3 size={22} />
              </div>
              <div>
                <p className="text-xl font-bold tracking-tight text-slate-900">6+</p>
                <p className="text-xs font-medium text-slate-500">Live products</p>
              </div>
            </div>
            <div className="absolute right-3 top-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/80 bg-white/90 text-blue-600 shadow-lg backdrop-blur sm:-right-5 sm:top-8">
              <Sparkles size={21} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-y border-slate-200/80 bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div {...reveal} className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                What I do
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                From first idea to launch
              </h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-slate-600">
              Practical engineering and thoughtful design, aligned with the real
              needs of your users and business.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  {...reveal}
                  transition={reduceMotion ? undefined : { ...fadeInUp.visible.transition, delay: index * 0.06 }}
                  className="group rounded-3xl border border-slate-200 bg-[#FCFDFE] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_20px_55px_-32px_rgba(37,99,235,0.35)] sm:p-7"
                >
                  <div className="mb-8 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={23} />
                    </div>
                    <span className="pt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
                    {service.eyebrow}
                  </p>
                  <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 min-h-[96px] text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <motion.div
          {...reveal}
          className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-7 text-white sm:p-10 md:p-14"
        >
          <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-blue-600/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                Building Aptro
              </p>
              <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                “Complex systems should create simple experiences.”
              </h2>
              <div className="mt-6 max-w-2xl space-y-4 text-base leading-7 text-slate-300">
                <p>
                  I created <strong className="font-semibold text-white">Aptro</strong>,
                  a business management platform that brings GST billing,
                  inventory, staff records, and order workflows into one place.
                </p>
                <p>
                  Building a real product keeps me close to the challenges
                  business owners face. I bring that practical mindset to every
                  project: understand the problem, keep the experience clear,
                  and build software that is easier to maintain and improve.
                </p>
              </div>
              <Link
                href="/founder"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
              >
                Learn more about my work
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 sm:p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-200">
                  <HeartHandshake size={22} />
                </div>
                <h3 className="text-lg font-semibold">Clear collaboration</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Open communication, clear milestones, and practical decisions
                  throughout development.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 sm:p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-200">
                  <Rocket size={22} />
                </div>
                <h3 className="text-lg font-semibold">Built for what’s next</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Maintainable foundations that make future improvements and
                  new features easier to deliver.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 md:pb-28">
        <motion.div {...reveal} className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
            <Code2 size={23} />
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Tools of the trade
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            The right tools for the job
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">
            A flexible toolkit for building and shipping reliable digital products.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm shadow-slate-900/[0.02] transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 md:pb-24">
        <motion.div
          {...reveal}
          className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50 px-6 py-12 text-center sm:px-10 md:py-16"
        >
          <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-blue-100/70 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3 py-1.5 text-xs font-semibold text-blue-700">
              <Sparkles size={14} />
              Have an idea in mind?
            </span>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
              Let’s build something useful.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Tell me what you’re working on. We can discuss the problem,
              explore the right approach, and plan the next steps together.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
              >
                Start a conversation
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
              >
                View projects
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-5 py-7 text-center">
        <p className="text-xs font-medium text-slate-500">
          © {new Date().getFullYear()} Hiren Masaliya <span className="mx-1.5 text-slate-300">·</span> Jetpur, Gujarat, India
        </p>
      </footer>
    </main>
  );
}