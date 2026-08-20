export default function Colab() {
  return (
    <section className="relative w-full h-screen bg-black flex items-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute right-0 top-0 w-full md:w-[75%] h-full object-cover z-0 pointer-events-none"
      >
        <source src="/community/weconnect-video.mp4" />
      </video>
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-black/20 z-0 pointer-events-none"></div>
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/5 to-transparent z-0 pointer-events-none"></div>
      <div className="absolute inset-0 bg-linear-to-b from-black via-black/5 to-transparent z-0 pointer-events-none"></div>
      <div className="container relative z-10 mx-auto px-5 md:px-4 lg:px-8">
        <div className="w-full max-w-2xl flex flex-col items-start">
          <h2 className="text-3xl md:text-[50px] font-bold text-white leading-[1.1] tracking-tight drop-shadow-lg mb-10 will-change-transform animate-fade-up">
            We Connect,
            <br /> Collaborate, and Grow
          </h2>
          <p className="text-white text-base md:text-[20px] leading-relaxed max-w-2xl drop-shadow-md font-light mb-10 will-change-transform animate-fade-up [animation-delay:200ms]">
            Behind every solution we deliver is a growing network of tech talent
            powered by{" "}
            <span className="text-[#FFC700] font-semibold">
              Jogja Coding House
            </span>
            . We continuously nurture and develop this ecosystem, giving you
            access to skilled and up-to-date professionals. Not just talent for
            today, but a foundation for long-term scalability.
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden mt-4 inline-block bg-[#FFC700] text-black text-base px-8 py-4 rounded-lg shadow-xl border-2 border-[#FFC700] will-change-transform transition-all duration-300 ease-out animate-fade-up [animation-delay:400ms]"
            href="https://jogjacodinghouse.com/"
          >
            <div className="absolute inset-0 w-full h-full bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
            <span className="relative z-10 font-semibold group-hover:text-[#FFC700] transition-colors duration-300 ease-out">
              Join Our Community
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
