export default function decade() {
  return (
    <section className="relative w-full flex items-center overflow-hidden bg-black py-20 md:py-40">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute right-0 top-0 w-full md:w-[75%] h-full object-cover z-0"
      >
        <source src="/about/decade-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-black/20 z-1 pointer-events-none"></div>
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent z-0 pointer-events-none"></div>
      <div className="absolute inset-0 bg-linear-to-b from-black via-black/10 to-transparent z-0 pointer-events-none"></div>
      <div className="container relative z-10 mx-auto px-5 md:px-0 w-full">
        <div className="max-w-2xl">
          <div className="relative w-full max-w-75 md:max-w-112.5 h-24 md:h-36 mb-6">
            <img
              src="/about/decade-v2.webp"
              alt="10th Connecting The World"
              decoding="async"
              data-nimg="fill"
              className="object-contain object-left absolute h-full w-fit left-0 top-0 right-0 bottom-0 bg-transparent"
            />
          </div>
          <h3 className="text-[#d8a832] text-base md:text-[20px] mb-6 drop-shadow-md">
            Connecting Businesses Through Technology for Over a Decade
          </h3>
          <p className="text-white text-sm md:text-base leading-relaxed text-justify md:text-left drop-shadow-md">
            For more than 10 years, we have been working with businesses across
            regions to build software solutions and support digital
            transformation initiatives. Through cross-border collaboration and
            practical technology delivery, we help organizations turn ideas into
            working systems that support day-to-day operations and long-term
            growth.
          </p>
        </div>
      </div>
    </section>
  );
}
