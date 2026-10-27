"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Lightbulb,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";

const materialEase = [0.2, 0, 0, 1] as const;

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Pricing", href: "/pricing" },
  { name: "Articles", href: "/articles" },
];

function isLinkActive(pathname: string, href: string) {
  const cleanPath = pathname.replace(/\/+$/, "") || "/";
  if (href === "/") return cleanPath === "/";
  return cleanPath === href || cleanPath.startsWith(`${href}/`);
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const motionTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.24, ease: materialEase };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40">
        <nav
          aria-label="Main navigation"
          className="border-b border-slate-200/80 bg-white/90 shadow-[0_2px_16px_rgba(15,23,42,0.035)] backdrop-blur-xl"
        >
          <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between gap-4 px-4 sm:px-6 lg:h-[76px] lg:px-8">
            {/* Brand */}
            <Link
              href="/"
              aria-label="Hiren Masaliya — home"
              className="group inline-flex shrink-0 items-center rounded-lg text-[25px] font-semibold tracking-[-0.07em] text-slate-950 outline-none transition-opacity hover:opacity-75 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
            >
              HM<span className="text-blue-600">.</span>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden h-full items-center gap-1 lg:flex">
              {navLinks.map((link) => {
                const active = isLinkActive(pathname, link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative inline-flex h-10 items-center rounded-full px-4 text-[13px] font-medium transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
                      active
                        ? "bg-blue-50 text-blue-700"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                    }`}
                  >
                    {link.name}
                    {active && (
                      <motion.span
                        layoutId="navbar-active-pill"
                        transition={{
                          type: "spring",
                          stiffness: 360,
                          damping: 32,
                        }}
                        className="absolute inset-0 -z-10 rounded-full bg-blue-50"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop actions */}
            <div className="hidden shrink-0 items-center gap-2 lg:flex">
              <Link
                href="/founder"
                className="inline-flex h-10 items-center gap-2 rounded-full px-4 text-[13px] font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                <Lightbulb size={16} aria-hidden="true" />
                Aptro
                <ArrowUpRight size={14} className="text-slate-400" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-blue-600 px-5 text-[13px] font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                Let&apos;s talk
                <MessageCircle size={16} aria-hidden="true" />
              </Link>
            </div>

            {/* Mobile actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="/contact"
                aria-label="Contact Hiren"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-blue-700 transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                <MessageCircle size={20} aria-hidden="true" />
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                <Menu size={21} aria-hidden="true" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile navigation drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={motionTransition}
              className="fixed inset-0 z-50 cursor-default bg-slate-950/40 backdrop-blur-[2px] lg:hidden"
            />

            <motion.aside
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={motionTransition}
              className="fixed inset-y-0 left-0 z-[60] flex w-[min(88vw,380px)] flex-col overflow-hidden rounded-r-[28px] bg-white shadow-2xl lg:hidden"
            >
              <div className="flex h-[76px] shrink-0 items-center justify-between border-b border-slate-100 px-6">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="inline-flex items-center text-[24px] font-semibold tracking-[-0.07em] text-slate-950"
                >
                  HM<span className="text-blue-600">.</span>
                </Link>
                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close navigation menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <X size={21} aria-hidden="true" />
                </button>
              </div>

              <div className="px-6 pb-2 pt-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                  Explore
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Development, projects, and ideas by Hiren Masaliya.
                </p>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-4">
                <div className="space-y-1">
                  {navLinks.map((link, index) => {
                    const active = isLinkActive(pathname, link.href);

                    return (
                      <motion.div
                        key={link.href}
                        initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          ...motionTransition,
                          delay: reduceMotion ? 0 : index * 0.035,
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={closeMenu}
                          aria-current={active ? "page" : undefined}
                          className={`flex min-h-[52px] items-center justify-between rounded-2xl px-4 text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                            active
                              ? "bg-blue-50 text-blue-700"
                              : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                          }`}
                        >
                          <span>{link.name}</span>
                          {active ? (
                            <Check size={17} aria-hidden="true" />
                          ) : (
                            <ArrowUpRight
                              size={16}
                              className="text-slate-300"
                              aria-hidden="true"
                            />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="my-5 border-t border-slate-100" />

                <Link
                  href="/founder"
                  onClick={closeMenu}
                  aria-current={isLinkActive(pathname, "/founder") ? "page" : undefined}
                  className="flex min-h-[52px] items-center gap-3 rounded-2xl px-4 text-[15px] font-medium text-slate-700 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                    <Lightbulb size={18} aria-hidden="true" />
                  </span>
                  <span className="flex-1">My app · Aptro</span>
                  <ArrowUpRight size={16} className="text-slate-400" aria-hidden="true" />
                </Link>
              </div>

              <div className="shrink-0 border-t border-slate-100 bg-slate-50/80 p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
                <p className="mb-3 text-center text-xs text-slate-500">
                  Have a project in mind?
                </p>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  <MessageCircle size={17} aria-hidden="true" />
                  Let&apos;s talk
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}