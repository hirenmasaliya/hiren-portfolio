"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Menu, X, Lightbulb } from "lucide-react";

const customEase = [0.25, 1, 0.5, 1] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Clean the path to match the links perfectly
  const cleanPath = pathname.replace(/\/$/, "") || "/";

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close mobile menu when changing pages
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Plain English navigation links (No Icons)
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about" },
    { name: "Past Work", href: "/projects" },
    { name: "Prices", href: "/pricing" },
    { name: "Articles", href: "/articles" }, 
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 h-[72px]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-full flex justify-between items-center">

        {/* 1. Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tighter text-gray-900 z-[70] hover:opacity-80 transition-opacity flex items-center gap-1">
          HM<span className="text-blue-600">.</span>
        </Link>

        {/* 2. Desktop Navigation - Clean Text Style */}
        <div className="hidden md:flex items-center gap-8 h-full absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive = cleanPath === link.href || (link.href !== '/' && cleanPath.startsWith(link.href));
            
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative flex items-center h-full text-[15px] transition-colors duration-200 ${
                  isActive ? "text-blue-600 font-bold" : "text-gray-600 font-semibold hover:text-gray-900"
                }`}
              >
                {link.name}

                {/* Active Underline Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-600 rounded-t-md"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* 3. Desktop Call to Actions */}
        <div className="hidden md:flex items-center gap-6 h-full">
          {/* Secondary Action */}
          <Link
            href="/founder"
            className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Lightbulb size={18} />
            My App
          </Link>

          {/* Primary Action Button */}
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 active:scale-95 transition-all duration-200 flex items-center gap-2 shadow-md shadow-blue-600/20"
          >
            <MessageCircle size={18} />
            Contact Me
          </Link>
        </div>

        {/* 4. Mobile Menu Toggle Button */}
        <button
          className="md:hidden p-2 text-gray-900 z-[70] transition-transform active:scale-95"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* 5. Mobile Menu Overlay - Clean & Minimalist */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: customEase }}
            className="fixed inset-0 w-full h-screen bg-white z-[60] flex flex-col pt-[80px] px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col py-6 space-y-2 mt-4">
              {navLinks.map((link) => {
                const isActive = cleanPath === link.href || (link.href !== '/' && cleanPath.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-6 py-4 rounded-2xl transition-colors text-xl ${
                      isActive ? "bg-blue-50 text-blue-600 font-bold" : "text-gray-800 font-semibold hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="w-full h-[1px] bg-gray-100 my-6"></div>

              <Link
                href="/founder"
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-colors text-xl ${
                  cleanPath === "/founder" ? "bg-blue-50 text-blue-600 font-bold" : "text-gray-800 font-semibold hover:bg-gray-50"
                }`}
              >
                <Lightbulb size={24} className={cleanPath === "/founder" ? "text-blue-600" : "text-gray-400"} />
                My App (Aptro)
              </Link>
            </div>

            {/* Mobile Contact Button placed at bottom */}
            <div className="mt-auto pb-12 pt-6">
              <Link
                href="/contact"
                className="w-full bg-blue-600 text-white py-5 rounded-full text-lg font-bold active:scale-95 transition-transform flex items-center justify-center gap-3 shadow-lg shadow-blue-600/20"
              >
                <MessageCircle size={22} />
                Contact Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}