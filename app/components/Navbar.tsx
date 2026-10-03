"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Menu, X, Lightbulb } from "lucide-react";

// Material Emphasized Decelerate easing for authentic Google motion
const materialEase = [0.2, 0, 0, 1] as const;

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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about" },
    { name: "Past Work", href: "/projects" },
    { name: "Prices", href: "/pricing" },
    { name: "Articles", href: "/articles" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-40 bg-white/95 backdrop-blur-md border-b border-[#E0E2E0] h-[72px]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 h-full flex justify-between items-center">
          
          {/* 1. Mobile Menu Toggle Button (Left aligned in Material) */}
          <div className="flex md:hidden items-center">
            <button
              className="p-2 -ml-2 text-[#444746] hover:bg-[#1F1F1F]/5 rounded-full transition-colors active:scale-95"
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* 2. Logo */}
          <Link 
            href="/" 
            className="text-[22px] font-normal tracking-tight text-[#1F1F1F] z-[40] hover:opacity-80 transition-opacity flex items-center md:flex-none flex-1 justify-center md:justify-start"
          >
            HM<span className="text-[#0A56D1]">.</span>
          </Link>

          {/* 3. Desktop Navigation - Material Tabs Style */}
          <div className="hidden md:flex items-center gap-2 h-full absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = cleanPath === link.href || (link.href !== "/" && cleanPath.startsWith(link.href));

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative flex items-center px-4 h-full text-[14px] transition-colors duration-200 ${
                    isActive
                      ? "text-[#0A56D1] font-medium"
                      : "text-[#444746] font-medium hover:text-[#1F1F1F] hover:bg-[#1F1F1F]/5"
                  }`}
                >
                  {link.name}

                  {/* Material Active Underline Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="active-tab"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#0A56D1] rounded-t-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* 4. Desktop Call to Actions */}
          <div className="hidden md:flex items-center gap-3 h-full">
            {/* Material Text Button */}
            <Link
              href="/founder"
              className="flex items-center gap-2 text-sm font-medium text-[#444746] hover:text-[#1F1F1F] hover:bg-[#1F1F1F]/5 px-4 py-2 rounded-full transition-colors"
            >
              <Lightbulb size={18} className="text-[#444746]" />
              My App
            </Link>

            {/* Material Filled Button */}
            <Link
              href="/contact"
              className="bg-[#0A56D1] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#0842A0] active:scale-95 transition-all duration-200 flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Contact Me
            </Link>
          </div>

          {/* Placeholder for symmetry on mobile */}
          <div className="w-10 md:hidden" />
        </div>
      </nav>

      {/* 5. Mobile Navigation Drawer (Material Design 3 Style) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Material Scrim (Dark Overlay) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-[#1F1F1F]/40 z-50 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Material Modal Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: materialEase }}
              className="fixed top-0 left-0 w-[80%] max-w-[360px] h-screen bg-[#FAFDFC] z-50 md:hidden rounded-r-[16px] flex flex-col shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 h-[72px] border-b border-[#E0E2E0]">
                <span className="text-[20px] font-normal tracking-tight text-[#1F1F1F]">
                  Navigation
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 -mr-2 text-[#444746] hover:bg-[#1F1F1F]/5 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Drawer Destinations */}
              <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                {navLinks.map((link) => {
                  const isActive = cleanPath === link.href || (link.href !== "/" && cleanPath.startsWith(link.href));
                  
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`flex items-center px-4 h-14 rounded-full transition-colors text-[14px] font-medium ${
                        isActive
                          ? "bg-[#C2E7FF] text-[#001D35]" // Material Primary Container
                          : "text-[#444746] hover:bg-[#1F1F1F]/5 hover:text-[#1F1F1F]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                <div className="my-4 border-t border-[#E0E2E0] mx-4" />

                <Link
                  href="/founder"
                  className={`flex items-center gap-3 px-4 h-14 rounded-full transition-colors text-[14px] font-medium ${
                    cleanPath === "/founder"
                      ? "bg-[#C2E7FF] text-[#001D35]"
                      : "text-[#444746] hover:bg-[#1F1F1F]/5 hover:text-[#1F1F1F]"
                  }`}
                >
                  <Lightbulb size={20} className={cleanPath === "/founder" ? "text-[#001D35]" : "text-[#444746]"} />
                  My App (Aptro)
                </Link>
              </div>

              {/* Drawer Bottom Action */}
              <div className="p-4 border-t border-[#E0E2E0]">
                <Link
                  href="/contact"
                  className="w-full bg-[#0A56D1] text-white h-12 rounded-full text-sm font-medium active:scale-95 transition-transform flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  Contact Me
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}