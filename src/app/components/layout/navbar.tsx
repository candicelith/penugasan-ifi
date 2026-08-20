"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Community", href: "/community" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent body from scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 z-1000 h-18 w-full transition-all duration-300 md:px-4 lg:px-8 ${
          isScrolled
            ? "border-b border-white/10 bg-black/50 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex h-full items-center justify-between px-4 text-white md:px-0">
          {/* Logo */}
          <a href="/" className="text-xl font-bold">
            <img
              src="/logo.webp"
              alt="Coding Collective Logo"
              width="175"
              height="68"
              className="h-12 w-auto object-contain md:h-17"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden space-x-20 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white transition-colors duration-300 hover:text-[#FFC700]"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="relative z-2000 flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="text-white transition-colors hover:text-[#FFC700]"
            >
              {isOpen ? (
                // X icon
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[998] bg-black/50 transition-opacity duration-300 md:hidden ${
          isOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed right-0 top-0 z-999 flex h-full w-64 flex-col bg-[#232323] px-8 pt-24 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg text-white transition-colors duration-300 hover:text-[#FFC700]"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
