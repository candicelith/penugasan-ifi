"use client";

const works = [
  {
    title: "Taman Mini Indonesia Indah",
    image: "/landing/works/tmii.webp",
  },
  {
    title: "MRT Jakarta",
    image: "/landing/works/mrt.webp",
  },
  {
    title: "YK Explore",
    image: "/landing/works/ykexplore.webp",
  },
  {
    title: "Locate App",
    image: "/landing/works/locate.webp",
  },
];

export default function Works() {
  return (
    <section className="bg-black py-20 text-white">
      <div className="container mx-auto px-5 md:px-4 lg:px-8">
        {/* TITLE */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-[40px] font-extrabold text-white mb-4 tracking-tight">
            WORKS
            <span className="text-[#FFC700]">.</span>
          </h2>
        </div>
        {/* WORKS CARD SECTION */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {works.map((work) => (
            <div
              key={work.title}
              className="group relative block overflow-hidden rounded-2xl shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-200">
                <img
                  src={work.image}
                  alt={work.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
