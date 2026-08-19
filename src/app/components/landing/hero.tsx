"use client";

import { useEffect, useState } from "react";

const words = [
  "Tech Talent Aggregator",
  "IT Community",
  "360° Custom Digitalization Partner",
];

export function TypingText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    let delay = isDeleting ? 35 : 100;

    if (!isDeleting && text === currentWord) {
      delay = 1500;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentWord.length) {
          setText(currentWord.slice(0, text.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (text.length > 0) {
          setText(currentWord.slice(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return <span>{text}</span>;
}

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-150 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent z-0 pointer-events-none" />
      <div className="container mx-auto relative z-20 h-full flex flex-col justify-between pt-30 pb-20 md:pt-60 md:pb-40">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-6">
          <h1 className="text-5xl md:text-[70px] font-bold text-white tracking-tight">
            Coding Collective
            <span className="text-[#FFC700] text-2xl md:text-4xl align-top ml-1">
              ®
            </span>
          </h1>
          <div className="text-white font-bold text-xl md:text-[40px] flex items-center justify-center md:justify-start min-h-10 md:min-h-12.5 gap-2 my-auto">
            <span>{<TypingText />}</span>
            <span className="inline-block ml-1 w-1 md:w-1.5 h-[1.2em] bg-[#FFC700] animate-pulse"></span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end text-center md:text-left gap-8 mt-auto w-full">
          <div className="max-w-3xl flex flex-col items-center md:items-start w-full">
            <p className="text-gray-300 text-lg md:text-[20px] leading-relaxed mb-8 animate-fade-up [animation-delay:400ms] will-change-transform">
              Your Go-To Hub for Custom Software & Scalable Tech Teams
              <br className="hidden md:block" />
              We help businesses build reliable software and scale tech teams
              <br className="hidden md:block" />
              efficiently to support long-term growth.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="/services"
                className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors backdrop-blur-sm animate-fade-up [animation-delay:600ms] will-change-transform"
              >
                View Work
              </a>
              <a
                href="/contact"
                className="px-6 py-3 rounded-lg bg-[#FFC700] text-black font-medium hover:bg-[#e6b300] transition-colors shadow-lg animate-fade-up [animation-delay:800ms] will-change-transform"
              >
                Book Consultation
              </a>
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-8 md:mt-0">
            © 2026 Coding Collective
          </p>
        </div>
      </div>
    </section>
  );
}
