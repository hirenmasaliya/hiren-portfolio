"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-zinc-100 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Typographic Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="text-zinc-950 font-black text-xl tracking-tighter">
            HIREN<span className="text-blue-600">.</span>
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest bg-zinc-100 text-zinc-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
            Dev
          </span>
        </Link>

        {/* Desktop Nav - Pill Style */}
        <div className="hidden md:flex items-center space-x-1 bg-zinc-100/50 p-1 rounded-full border border-zinc-200/50 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = cleanPath === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-6 py-2 text-[11px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${
                  isActive ? "text-zinc-950" : "text-zinc-500 hover:text-zinc-800"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-white shadow-sm rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/founder"
            className="text-zinc-600 hover:text-zinc-950 text-xs font-bold uppercase tracking-widest transition-colors"
          >
            Founder
          </Link>

          <Link
            href="/pricing"
            className="bg-zinc-950 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-zinc-200"
          >
            Hire Me
          </Link>
        </div>

        {/* Improved Mobile Toggle */}
        <button
          className="md:hidden w-8 h-8 flex flex-col items-end justify-center gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6, width: "1.5rem" } : { rotate: 0, y: 0, width: "1.5rem" }}
            className="h-0.5 bg-zinc-950 rounded-full"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1, width: "1rem" }}
            className="h-0.5 bg-zinc-950 rounded-full"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6, width: "1.5rem" } : { rotate: 0, y: 0, width: "0.75rem" }}
            className="h-[2px] bg-zinc-950 rounded-full"
          />
        </button>
      </div>

      {/* Mobile Menu - Full Screen White Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 top-0 left-0 w-full bg-white z-[60] flex flex-col pt-24 px-8 md:hidden"
          >
            {/* Close Button Inside Menu */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-xs font-bold uppercase tracking-widest text-zinc-400"
            >
              Close [×]
            </button>

            <div className="flex flex-col space-y-8">
              {navLinks.map((link, i) => {
                const isActive = cleanPath === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`text-5xl font-black tracking-tighter ${
                        isActive ? "text-blue-600" : "text-zinc-900"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-auto mb-20 flex flex-col gap-4"
            >
              <Link
                href="/pricing"
                className="w-full text-center bg-zinc-950 text-white py-5 rounded-2xl font-bold uppercase tracking-widest"
              >
                Start a Project
              </Link>
              <p className="text-center text-zinc-400 text-sm">hirenmasliya14@gmail.com</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}