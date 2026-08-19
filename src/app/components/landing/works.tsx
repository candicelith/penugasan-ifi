export default function Works() {
  return (
    <section className="bg-black py-20 text-white">
      <div className="container mx-auto px-5 md:px-0">
        <div className="mb-16">
          <h2 className="text-4xl md:text-[40px] font-extrabold text-white mb-4 tracking-tight">
            WORKS
            <span className="text-[#FFC700]">.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            <div className="relative w-full aspect-4/3 overflow-hidden bg-gray-200">
              <img
                src="/landing/works/tmii.webp"
                alt="Taman Mini Indonesia Indah"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover transition-transform duration-500 group-hover:scale-105 absolute h-full w-full inset-0 bg-transparent"
                sizes="100vw"
              />
            </div>
          </div>
          <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            <div className="relative w-full aspect-4/3 overflow-hidden bg-gray-200">
              <img
                src="/landing/works/mrt.webp"
                alt="MRT Jakarta"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover transition-transform duration-500 group-hover:scale-105 absolute h-full w-full inset-0 bg-transparent"
                sizes="100vw"
              />
            </div>
          </div>
          <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            <div className="relative w-full aspect-4/3 overflow-hidden bg-gray-200">
              <img
                src="/landing/works/ykexplore.webp"
                alt="YK Explore"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover transition-transform duration-500 group-hover:scale-105 absolute h-full w-full inset-0 bg-transparent"
                sizes="100vw"
              />
            </div>
          </div>
          <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            <div className="relative w-full aspect-4/3 overflow-hidden bg-gray-200">
              <img
                src="/landing/works/locate.webp"
                alt="Locate App"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover transition-transform duration-500 group-hover:scale-105 absolute h-full w-full inset-0 bg-transparent"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
