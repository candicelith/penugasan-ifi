"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-999 h-18 transition-all duration-300 bg-transparent">
      <div className="container mx-auto flex justify-between items-center h-full px-4 md:px-0 text-white">
        <a href="/" className="text-xl font-bold">
          <img
            src="/logo.webp"
            alt="Coding Collective Logo"
            width="175"
            height="68"
            className="bg-transparent w-auto h-12 md:h-17 object-contain"
          />
        </a>
      </div>
    </nav>
  );
}
