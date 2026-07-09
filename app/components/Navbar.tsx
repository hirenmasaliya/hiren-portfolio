"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Easing } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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

  // Multi-page routing array
  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Pricing", href: "/pricing" },
  ];

  // Premium easing curve for animations
  const customEase: Easing = [0.25, 1, 0.5, 1];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${scrolled
          ? "bg-white/90 backdrop-blur-xl border-[#222222]/10 py-4 shadow-sm"
          : "bg-transparent border-[#222222]/10 py-6"
        }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">

        {/* Minimalist Logo */}
        <Link href="/" className="text-xl font-bold tracking-tighter text-[#222222] z-[70] relative">
          HM.
        </Link>

        {/* Desktop Nav - Clean Text Style */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = cleanPath === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors duration-300 relative ${isActive ? "text-[#222222]" : "text-[#7B7B7B] hover:text-[#222222]"
                  }`}
              >
                {link.name}
                {/* Optional underline indicator for active page */}
                {isActive && (
                  <motion.div
                    layoutId="desktop-active"
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#222222]"
                    transition={{ duration: 0.5, ease: customEase }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/founder"
            className="text-sm font-medium border-b border-[#222222] text-[#222222] pb-0.5 transition-all hover:text-[#7B7B7B] hover:border-[#7B7B7B]"
          >
            Founder
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium border-b border-[#222222] text-[#222222] pb-0.5 flex items-center gap-1 transition-all hover:text-[#7B7B7B] hover:border-[#7B7B7B]"
          >
            Book A Call <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Minimalist Mobile Toggle */}
        <button
          className="md:hidden w-8 h-8 flex flex-col items-end justify-center gap-1.5 z-[70] relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 7, width: "100%", backgroundColor: "#FFFFFF" } : { rotate: 0, y: 0, width: "100%", backgroundColor: "#222222" }}
            transition={{ duration: 0.4, ease: customEase }}
            className="h-[1.5px] rounded-full origin-center"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1, width: "70%", backgroundColor: "#222222" }}
            transition={{ duration: 0.4, ease: customEase }}
            className="h-[1.5px] rounded-full"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -7, width: "100%", backgroundColor: "#FFFFFF" } : { rotate: 0, y: 0, width: "50%", backgroundColor: "#222222" }}
            transition={{ duration: 0.4, ease: customEase }}
            className="h-[1.5px] rounded-full origin-center"
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
            className="fixed inset-0 w-full h-screen bg-[#222222] z-[60] flex flex-col pt-32 px-8 md:hidden"
          >
            <div className="flex flex-col space-y-6 flex-grow">
              {/* Added Home to mobile menu for easy navigation */}
              <div className="overflow-hidden">
                <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ duration: 0.5, delay: 0, ease: customEase }}>
                  <Link href="/" className={`block text-4xl font-light tracking-tight ${cleanPath === "/" ? "text-[#FFFFFF]" : "text-[#7B7B7B] hover:text-[#FFFFFF]"}`}>
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
                      transition={{ duration: 0.5, delay: (i + 1) * 0.1, ease: customEase }}
                    >
                      <Link
                        href={link.href}
                        className={`block text-4xl font-light tracking-tight transition-colors ${isActive ? "text-[#FFFFFF]" : "text-[#7B7B7B] hover:text-[#FFFFFF]"
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
              className="pb-12 flex flex-col gap-6 border-t border-[#FFFFFF]/10 pt-8"
            >
              <Link
                href="/contact"
                className="w-full text-center bg-[#FFFFFF] text-[#222222] py-4 rounded-full text-sm font-medium transition-transform active:scale-95 flex items-center justify-center gap-2"
              >
                Book A Call <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}