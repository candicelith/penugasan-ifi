export default function Specialist() {
  return (
    <section className="relative w-full h-125 md:h-175 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/industries/bg-specialist.webp"
          alt="Office Background"
          className="object-cover absolute inset-0 w-full h-full top-0 left-0 right-0 bottom-0"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/4 to-transparent z-1 pointer-events-none"></div>
      </div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-[50px] font-bold text-white mb-10 tracking-tight">
          Speak with a Specialist
        </h2>
        <p className="text-white text-base md:text-[20px] mx-auto mb-10 leading-relaxed font-light">
          Book a complimentary consultation with an experienced specialist.
          Schedule a meeting today.
        </p>
        <a
          className="relative group overflow-hidden inline-block bg-[#FFC700] text-black text-base px-10 py-3 rounded-lg shadow-xl transition-colors duration-300 ease-out border-2 border-[#FFC700]"
          href="/contact"
        >
          <div className="absolute inset-0 w-full h-full bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
          <span className="relative z-10 group-hover:text-[#FFC700] transition-colors duration-300 ease-out">
            Contact Us
          </span>
        </a>
      </div>
    </section>
  );
}
