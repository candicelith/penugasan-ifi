export default function service2() {
  return (
    <section className="w-full bg-black text-white py-24 antialiased">
      <div className="container mx-auto px-5 md:px-10">
        <div className="mb-16 md:mb-20 flex flex-col items-start">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#FFC700]"></div>
            <span className="text-white text-sm md:text-base font-semibold tracking-wide uppercase">
              Service 2
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[70px] font-bold tracking-tight leading-[1.1]">
            Solution On
            <br />
            Digital<span className="text-[#FFC700]">.</span>
          </h2>
        </div>
        <div className="relative w-full flex items-center justify-center gap-6 md:gap-10">
          <div className="relative w-full max-w-5xl aspect-16/10 md:aspect-video z-10 overflow-hidden">
            <img
              src="/services/1.webp"
              alt="service 1"
              decoding="async"
              data-nimg="fill"
              className="object-contain absolute inset-0 h-full w-full top-0 left-0 right-0 bottom-0 bg-transparent"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
