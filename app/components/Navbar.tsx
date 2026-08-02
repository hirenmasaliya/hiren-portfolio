"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const customEase = [0.25, 1, 0.5, 1] as const;

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

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Simplified and clear navigation links
  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Work", href: "/projects" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-gray-200 py-4 shadow-sm"
          : "bg-transparent border-transparent py-6"
        }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">

        {/* Minimalist Logo */}
        <Link href="/" className="text-2xl font-semibold tracking-tighter text-[#111111] z-[70] relative hover:opacity-70 transition-opacity">
          HM.
        </Link>

        {/* Desktop Nav - Clean Text Style */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = cleanPath === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors duration-300 relative py-2 ${
                  isActive ? "text-[#111111]" : "text-gray-500 hover:text-[#111111]"
                }`}
              >
                {link.name}
                {/* Elegant underline indicator for active page */}
                {isActive && (
                  <motion.div
                    layoutId="desktop-active"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#111111] rounded-full"
                    transition={{ duration: 0.5, ease: customEase }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop Call to Actions */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/founder"
            className="text-sm font-medium text-gray-500 hover:text-[#111111] transition-colors"
          >
            My Startup
          </Link>

          <Link
            href="/contact"
            className="bg-[#111111] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            Let's Talk <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Minimalist Mobile Menu Toggle */}
        <button
          className="md:hidden w-8 h-8 flex flex-col items-end justify-center gap-1.5 z-[70] relative group"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 7, width: "100%", backgroundColor: "#FFFFFF" } : { rotate: 0, y: 0, width: "100%", backgroundColor: "#111111" }}
            transition={{ duration: 0.4, ease: customEase }}
            className="h-[2px] rounded-full origin-center"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1, width: "70%", backgroundColor: "#111111" }}
            transition={{ duration: 0.4, ease: customEase }}
            className="h-[2px] rounded-full group-hover:width-full transition-all"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -7, width: "100%", backgroundColor: "#FFFFFF" } : { rotate: 0, y: 0, width: "50%", backgroundColor: "#111111" }}
            transition={{ duration: 0.4, ease: customEase }}
            className="h-[2px] rounded-full origin-center"
          />
        </button>
      </div>

      {/* Elegant Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 w-full h-screen bg-[#111111] z-[60] flex flex-col pt-32 px-8 md:hidden"
          >
            <div className="flex flex-col space-y-6 flex-grow mt-10">
              
              <div className="overflow-hidden">
                <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ duration: 0.5, delay: 0.1, ease: customEase }}>
                  <Link href="/" className={`block text-5xl font-light tracking-tight ${cleanPath === "/" ? "text-white" : "text-gray-500 hover:text-white"}`}>
                    Home
                  </Link>
                </motion.div>
              </div>

              {navLinks.map((link, i) => {
                const isActive = cleanPath === link.href;
                return (
                  <div key={link.name} className="overflow-hidden">
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "100%" }}
                      transition={{ duration: 0.5, delay: (i + 2) * 0.1, ease: customEase }}
                    >
                      <Link
                        href={link.href}
                        className={`block text-5xl font-light tracking-tight transition-colors ${
                          isActive ? "text-white" : "text-gray-500 hover:text-white"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  </div>
                );
              })}

              <div className="overflow-hidden">
                <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ duration: 0.5, delay: 0.5, ease: customEase }}>
                  <Link href="/founder" className={`block text-5xl font-light tracking-tight ${cleanPath === "/founder" ? "text-white" : "text-gray-500 hover:text-white"}`}>
                    My Startup
                  </Link>
                </motion.div>
              </div>

            </div>

            {/* Mobile Call to Action */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="pb-12 flex flex-col gap-6 border-t border-white/10 pt-8"
            >
              <Link
                href="/contact"
                className="w-full text-center bg-white text-[#111111] py-5 rounded-full text-base font-medium transition-transform active:scale-95 flex items-center justify-center gap-3 shadow-lg"
              >
                Let's Talk <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}