"use client";

import { motion } from 'framer-motion';
import React from 'react';

export default function Home() {

  const heading = "Hi, I'm Hiren 👋";

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <main className="bg-black text-white min-h-screen selection:bg-blue-500/30">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-30 overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/2 w-[400px] h-[400px] bg-purple-600/10 rounded-full translate-x-1/2 translate-y-1/2 blur-[100px]"></div>

        <div className="relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            Available for New Projects
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight leading-tight">

            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Hiren
            </span>{' '}
            <motion.span
              className="inline-block"
              animate={{ rotate: [0, 20, -20, 20, 0] }} // waving motion
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              👋
            </motion.span>
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-gray-400 mb-6 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">

            <span className="text-white font-semibold">Flutter Mobile App Developer</span> & Web Developer.
            I create <span className="text-white">cross-platform mobile apps for Android & iOS</span> using Flutter, alongside high-performance web applications. My focus is on building scalable, intuitive, and visually engaging digital experiences.
          </p>

          <p className="text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Founder of <span className="text-white font-semibold">Aptro</span>, a platform that helps freelancers and business owners manage projects, orders, payments, and inventory efficiently.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-blue-600/20"
            >
              Start a Project
            </a>
            <a
              href="/resume.pdf"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>

      {/* 2. STATS & SKILLS SECTION */}
      <section className="py-24 bg-zinc-950/50 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { label: "Years Experience", val: "1+" },
              { label: "Projects Completed", val: "5+" },
              { label: "Happy Clients", val: "4+" },
              { label: "Coffee Consumed", val: "∞" }
            ].map((stat, i) => (
              <div key={i} className="hover:scale-105 transition-transform">
                <p className="text-4xl font-bold text-white mb-1">{stat.val}</p>
                <p className="text-gray-500 text-sm uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Next.js",
              "React",
              "Flutter",
              "Android",
              "PHP",
              "Tailwind CSS",
              "Firebase",
              "REST APIs"
            ].map((skill) => (
              <span
                key={skill}
                className="px-5 py-2 rounded-lg bg-zinc-900 border border-white/5 text-gray-300 text-sm hover:border-blue-500/50 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EXPERIENCE SECTION */}
      <section className="py-24 bg-zinc-950/50 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            Professional Journey <div className="h-px flex-1 bg-white/10"></div>
          </h2>
          
          <div className="space-y-12">
            {[
              {
                role: "Founder & Lead Developer",
                company: "Aptro – Order & Billing App · Self-employed",
                period: "Oct 2025 - Present · 5 mos",
                location: "Jetpur, Gujarat, India · Remote",
                desc: "Founded and developed Aptro to help small business owners manage orders, payments, customers, stock, and inventory. Built from scratch using Flutter, Firebase, Razorpay, and Android. Features include role-based access, subscription plans, real-time data, billing & reporting. Available on Google Play Store."
              },
              {
                role: "App Developer",
                company: "Freelance · Self-Employed",
                period: "Jan 2026 - Jan 2026 · 1 mo",
                location: "Ahmedabad, Gujarat, India · Remote",
                desc: "Worked on existing mobile applications improving performance, UI screens, API integration, and overall app stability on Android & iOS using Flutter, REST APIs, Firebase."
              },
              {
                role: "Web Developer",
                company: "Freelance · Self-Employed",
                period: "Aug 2025 - Sep 2025 · 2 mos",
                location: "Ahmedabad, Gujarat, India · Remote",
                desc: "Designed and developed professional business websites with responsive design, clean UI, performance optimization, contact forms, and basic CMS integration."
              },
              {
                role: "Founder",
                company: "Wallzer – Bhakti & God Images · Self-employed",
                period: "May 2025 - Jul 2025 · 3 mos",
                location: "Jetpur, Gujarat, India · Remote",
                desc: "Built Wallzer, an Instagram-style devotional photo-sharing app on Google Play Store. Developed features like likes, shares, push notifications, in-app purchases, and real-time engagement using Flutter, Firebase, FCM, and REST APIs."
              },
              {
                role: "PHP Web Developer",
                company: "Freelance · Self-Employed",
                period: "Apr 2025 - May 2025 · 2 mos",
                location: "Ahmedabad, Gujarat, India · Remote",
                desc: "Developed a PHP-based society/apartment management system with member & unit management, billing, notices, and admin dashboard with role-based access. Focused on usability, security, and scalability."
              }
            ].map((job, i) => (
              <div key={i} className="relative pl-10 border-l border-blue-600/30">
                {/* Timeline Dot */}
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[8.5px] top-2 shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>

                {/* Role & Period */}
                <div className="flex flex-col md:flex-row md:justify-between mb-1">
                  <h3 className="text-xl font-bold text-white">{job.role}</h3>
                  <span className="text-blue-400 font-mono text-sm mt-1 md:mt-0">{job.period}</span>
                </div>

                {/* Company & Location */}
                <p className="text-lg text-gray-300 mb-1 font-medium">{job.company}</p>
                <p className="text-gray-400 mb-4 text-sm md:text-base">{job.location}</p>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">{job.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS SECTION */}
      <section className="py-24 bg-black px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
              Trusted by <span className="text-blue-500 text-glow">Visionaries</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg px-4">
              See how Aptro and my custom development solutions have helped founders and businesses scale their operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Patel",
                role: "Founder, Retail Solutions",
                text: "The Aptro app completely automated our inventory and billing. What used to take hours now happens in minutes. Hiren's eye for efficiency is unmatched.",
                img: "https://ui-avatars.com/api/?name=Rajesh+Patel&background=2563eb&color=fff"
              },
              {
                name: "Meera Shah",
                role: "Independent Creative",
                text: "Hiren built a mobile experience that feels native and buttery smooth. As a freelancer, having a tool this intuitive makes project management feel like second nature.",
                img: "https://ui-avatars.com/api/?name=Meera+Shah&background=0891b2&color=fff"
              },
              {
                name: "Yash Masaliya",
                role: "CEO, Buildart Industries",
                text: "Hiren developed our company website for Buildart Industries. The design is professional, responsive, and perfectly showcases our services and products. The result exceeded our expectations in both usability and performance.",
                img: "https://ui-avatars.com/api/?name=Yash+Masaliya&background=4f46e5&color=fff"
              }

            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-zinc-900/40 backdrop-blur-sm rounded-[2rem] p-8 border border-white/5 hover:border-blue-500/30 transition-all duration-500 group"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.946a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.287 3.946c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.286-3.946a1 1 0 00-.364-1.118L2.049 9.373c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.946z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-300 italic leading-relaxed mb-8 text-sm md:text-base">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center border-t border-white/5 pt-6">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-11 h-11 rounded-full border border-white/10 mr-4 group-hover:scale-110 transition-transform"
                  />
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wide">{testimonial.name}</h4>
                    <p className="text-blue-500 text-xs font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROJECTS SECTION */}
      <section className="py-24 bg-zinc-950 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
              <p className="text-gray-400">Projects I've built that demonstrate my skills in mobile, web, and SaaS development.</p>
            </div>
            <a href="https://github.com/hirenmasaliya" className="text-blue-400 hover:text-blue-300 font-medium">
              View all GitHub →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Aptro Platform */}
            <div className="group relative bg-zinc-900 rounded-2xl p-8 border border-white/5 hover:border-blue-500/50 transition-all overflow-hidden">
              <h3 className="text-2xl font-bold mb-3">Aptro – Order & Billing App</h3>
              <p className="text-gray-400 mb-6 text-sm md:text-base">
                A Flutter-based mobile application to help small businesses manage orders, payments, customers, stock, and generate billing & reports. Supports role-based access and subscription plans via Razorpay.
              </p>
              <div className="flex gap-3 flex-wrap">
                <span className="text-xs font-bold text-blue-400 px-3 py-1 bg-blue-500/10 rounded">Flutter</span>
                <span className="text-xs font-bold text-blue-400 px-3 py-1 bg-blue-500/10 rounded">Firebase</span>
                <span className="text-xs font-bold text-blue-400 px-3 py-1 bg-blue-500/10 rounded">Razorpay</span>
              </div>
            </div>

            {/* Wallzer App */}
            <div className="group relative bg-zinc-900 rounded-2xl p-8 border border-white/5 hover:border-purple-500/50 transition-all overflow-hidden">
              <h3 className="text-2xl font-bold mb-3">Wallzer – Devotional Photo App</h3>
              <p className="text-gray-400 mb-6 text-sm md:text-base">
                An Instagram-style devotional photo-sharing mobile application built with Flutter and Firebase. Features include likes, shares, push notifications, in-app purchases, and real-time engagement.
              </p>
              <div className="flex gap-3 flex-wrap">
                <span className="text-xs font-bold text-purple-400 px-3 py-1 bg-purple-500/10 rounded">Flutter</span>
                <span className="text-xs font-bold text-purple-400 px-3 py-1 bg-purple-500/10 rounded">Firebase</span>
                <span className="text-xs font-bold text-purple-400 px-3 py-1 bg-purple-500/10 rounded">FCM</span>
              </div>
            </div>

            {/* Freelance Web Projects */}
            <div className="group relative bg-zinc-900 rounded-2xl p-8 border border-white/5 hover:border-green-500/50 transition-all overflow-hidden">
              <h3 className="text-2xl font-bold mb-3">Dira – Business Website</h3>
              <p className="text-gray-400 mb-6 text-sm md:text-base">
                Designed and developed the official website for Dira, a business-focused platform. Built a responsive layout with clean UI/UX, optimized performance, and integrated client-specific features to showcase services and products effectively.
              </p>
              <div className="flex gap-3 flex-wrap">
                <span className="text-xs font-bold text-green-400 px-3 py-1 bg-green-500/10 rounded">HTML</span>
                <span className="text-xs font-bold text-green-400 px-3 py-1 bg-green-500/10 rounded">CSS</span>
                <span className="text-xs font-bold text-green-400 px-3 py-1 bg-green-500/10 rounded">Java Script</span>
              </div>
            </div>

            <div className="group relative bg-zinc-900 rounded-2xl p-8 border border-white/5 hover:border-pink-500/50 transition-all overflow-hidden">
              <h3 className="text-2xl font-bold mb-3">Local Link – Mobile App</h3>
              <p className="text-gray-400 mb-6 text-sm md:text-base">
                A Flutter-based mobile application that helps users share and discover local connections easily. Features include real-time chat, location-based suggestions, and secure user profiles.
              </p>
              <div className="flex gap-3 flex-wrap">
                <span className="text-xs font-bold text-pink-400 px-3 py-1 bg-pink-500/10 rounded">Flutter</span>
                <span className="text-xs font-bold text-pink-400 px-3 py-1 bg-pink-500/10 rounded">Firebase</span>
                <span className="text-xs font-bold text-pink-400 px-3 py-1 bg-pink-500/10 rounded">Google Maps API</span>
              </div>
            </div>

            <div className="group relative bg-zinc-900 rounded-2xl p-8 border border-white/5 hover:border-green-500/50 transition-all overflow-hidden">
              <h3 className="text-2xl font-bold mb-3">Builart Industries – Website</h3>
              <p className="text-gray-400 mb-6 text-sm md:text-base">
                Designed and developed the official website for Builart Industries, owned by Yash Masaliya. Responsive and optimized with clean UI, showcasing products, services, and company info professionally.
              </p>
              <div className="flex gap-3 flex-wrap">
                <span className="text-xs font-bold text-green-400 px-3 py-1 bg-green-500/10 rounded">Next.js</span>
                <span className="text-xs font-bold text-green-400 px-3 py-1 bg-green-500/10 rounded">React</span>
                <span className="text-xs font-bold text-green-400 px-3 py-1 bg-green-500/10 rounded">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT & FOOTER SECTION */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's build something <span className="text-blue-500">extraordinary.</span></h2>
          <p className="text-gray-400 text-lg mb-12">I'm currently accepting new freelance projects and consulting opportunities.</p>

          <div className="bg-zinc-900 p-6 md:p-8 rounded-3xl border border-white/5 mb-12">
            <p className="text-gray-500 mb-2 uppercase tracking-widest text-sm">Direct Email</p>
            <a href="mailto:hirenmasliya14@gmail.com" className="text-[18px] md:text-xl font-bold hover:text-blue-400 transition-colors break-all">
              hirenmasliya14@gmail.com
            </a>
          </div>

          <div className="flex justify-center gap-8">
            {[
              { name: "LinkedIn", url: "https://www.linkedin.com/in/hiren-masaliya" },
              { name: "GitHub", url: "https://github.com/hirenmasaliya" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors font-medium"
              >
                {social.name}
              </a>
            ))}
          </div>

          <p className="mt-20 text-gray-600 text-sm">
            © {new Date().getFullYear()} Hiren Masaliya.
          </p>
        </div>
      </section>

    </main>
  );
}