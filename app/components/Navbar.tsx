"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Easing } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const cleanPath = pathname.replace(/\/$/, "") || "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  // Premium easing curve for animations
  const customEase : Easing = [0.25, 1, 0.5, 1];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-black/5 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
        
        {/* Stark Typographic Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <span className="text-black font-black text-xl tracking-tighter uppercase">
            Hiren<span className="text-zinc-400">.</span>
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 border border-black/10 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] bg-transparent text-zinc-500 group-hover:text-black group-hover:border-black transition-all duration-300">
            Dev
          </span>
        </Link>

        {/* Desktop Nav - High Contrast Pill Style */}
        <div className="hidden md:flex items-center p-1.5 rounded-full border border-black/10 bg-white/50 backdrop-blur-md shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
          {navLinks.map((link) => {
            const isActive = cleanPath === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 z-10 ${
                  isActive ? "text-white" : "text-zinc-500 hover:text-black"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-black rounded-full -z-10"
                    transition={{ duration: 0.5, ease: customEase }}
                  />
                )}
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/founder"
            className="text-zinc-500 hover:text-black text-[10px] font-bold uppercase tracking-[0.2em] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:bg-black after:transition-transform after:duration-500 after:ease-[0.25,1,0.5,1]"
          >
            Founder
          </Link>

          <Link
            href="/pricing"
            className="group relative overflow-hidden bg-black text-white px-7 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:shadow-[0_0_0_1px_black] hover:bg-white hover:text-black"
          >
            <span className="relative z-10">Hire Me</span>
          </Link>
        </div>

        {/* Minimalist Mobile Toggle */}
        <button
          className="md:hidden w-8 h-8 flex flex-col items-end justify-center gap-1.5 z-[70] relative mix-blend-difference"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 7, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
            transition={{ duration: 0.4, ease: customEase }}
            className="h-[1.5px] bg-white rounded-full origin-center"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1, width: "70%" }}
            transition={{ duration: 0.4, ease: customEase }}
            className="h-[1.5px] bg-white rounded-full"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -7, width: "100%" } : { rotate: 0, y: 0, width: "50%" }}
            transition={{ duration: 0.4, ease: customEase }}
            className="h-[1.5px] bg-white rounded-full origin-center"
          />
        </button>
      </div>

      {/* Ultra-Stark Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 w-full h-screen bg-black z-[60] flex flex-col pt-32 px-8 md:hidden"
          >
            <div className="flex flex-col space-y-6 flex-grow">
              {navLinks.map((link, i) => {
                const isActive = cleanPath === link.href;
                return (
                  <div key={link.name} className="overflow-hidden">
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "100%" }}
                      transition={{ duration: 0.5, delay: i * 0.1, ease: customEase }}
                    >
                      <Link
                        href={link.href}
                        className={`block text-5xl md:text-7xl font-black tracking-tighter uppercase ${
                          isActive ? "text-white" : "text-zinc-600 hover:text-zinc-300 transition-colors"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  </div>
                );
              })}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="pb-12 flex flex-col gap-6 border-t border-white/10 pt-8"
            >
              <Link
                href="/pricing"
                className="w-full text-center bg-white text-black py-5 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-transform active:scale-95"
              >
                Start a Project
              </Link>
              <p className="text-center text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">
                hirenmasliya14@gmail.com
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}