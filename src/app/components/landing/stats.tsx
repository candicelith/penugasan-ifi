export default function Stats() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-5 md:px-4 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-4xl md:text-[40px] font-extrabold text-white mb-4 tracking-tight">
            Statistics
            <span className="text-[#FFC700]">.</span>
          </h2>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-30">
          <div className="flex flex-col">
            <h3 className="text-[30px] md:text[40px] lg:text-5xl font-bold mb-3">
              10 +
            </h3>
            <p className="text-gray-400 text-sm md:text-base whitespace-pre-line leading-relaxed">
              Years of Experience
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[30px] md:text[40px] lg:text-5xl font-bold mb-3">
              100 +
            </h3>
            <p className="text-gray-400 text-sm md:text-base whitespace-pre-line leading-relaxed">
              Total satisfied global clients
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[30px] md:text[40px] lg:text-5xl font-bold mb-3">
              9
            </h3>
            <p className="text-gray-400 text-sm md:text-base whitespace-pre-line leading-relaxed">
              Countries business operation
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[30px] md:text[40px] lg:text-5xl font-bold mb-3">
              6
            </h3>
            <p className="text-gray-400 text-sm md:text-base whitespace-pre-line leading-relaxed">
              Countries with established office locations
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[30px] md:text[40px] lg:text-5xl font-bold mb-3">
              200+
            </h3>
            <p className="text-gray-400 text-sm md:text-base whitespace-pre-line leading-relaxed">
              Certified Developers
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_2fr] gap-10">
          <div className="space-y-6 text-gray-300 text-base leading-relaxed order-1">
            <p className="text-justify">
              <span className="text-[#FFC700] font-bold">
                Coding Collective
              </span>{" "}
              is a technology partner supporting businesses in delivering
              software solutions and building scalable technology teams.
              <br />
              We operate across six countries, including{" "}
              <span className="text-white font-bold">
                Singapore, Indonesia, Thailand, Taiwan, Hong Kong, and Dubai
              </span>
              , with development centers in Indonesia enabling near-shore
              delivery and regional execution.
            </p>
            <p className="text-justify">
              Businesses across the Asia-Pacific region choose Coding Collective
              to improve efficiency, productivity, and innovation while
              supporting sustainable growth. Through future-ready technology,
              experienced professionals, and a strong cross-border delivery
              model, we help organizations establish resilient digital
              foundations and remain competitive in an evolving technology
              landscape.
            </p>
          </div>
          <div className="relative w-full overflow-hidden order-2 rounded-xl hidden md:block">
            <video
              className="w-full h-auto object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/landing/stats/globe.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-linear-to-t from-black to-transparent pointer-events-none"></div>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <h2 className="text-white text-center text-base font-bold mb-12">
            Our Partner
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 lg:gap-28">
            <div className="relative opacity-70 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
              <img
                src="/landing/stats/tencent.webp"
                alt="Tencent Logo"
                loading="lazy"
                width="160"
                height="32"
                decoding="async"
                data-nimg="1"
                className="w-auto h-8 object-contain bg-transparent"
              />
            </div>
            <div className="relative opacity-70 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
              <img
                src="/landing/stats/aws-v2.webp"
                alt="AWS Logo"
                loading="lazy"
                width="160"
                height="32"
                decoding="async"
                data-nimg="1"
                className="w-auto h-8 object-contain bg-transparent"
              />
            </div>
            <div className="relative opacity-70 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
              <img
                src="/landing/stats/azure.webp"
                alt="Azure Logo"
                loading="lazy"
                width="160"
                height="32"
                decoding="async"
                data-nimg="1"
                className="w-auto h-8 object-contain bg-transparent"
              />
            </div>
            <div className="relative opacity-70 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
              <img
                src="/landing/stats/alibaba.webp"
                alt="Alibaba Logo"
                loading="lazy"
                width="160"
                height="32"
                decoding="async"
                data-nimg="1"
                className="w-auto h-8 object-contain bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
