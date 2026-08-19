"use client";

import Marquee from "react-fast-marquee";

const partners = [
  {
    name: "client1",
    image: "/landing/partners/client1.webp",
  },
  {
    name: "client2",
    image: "/landing/partners/client2.webp",
  },
  {
    name: "client3",
    image: "/landing/partners/client3.webp",
  },
  {
    name: "client4",
    image: "/landing/partners/client4.webp",
  },
];

function ClientPill({ name, image }: { name: string; image: string }) {
  return (
    <div className="group flex h-14 w-44 shrink-0 items-center justify-center rounded-full bg-[#E5E5E5] md:h-16 md:w-56 cursor-pointer">
      <img
        src={image}
        alt={name}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="block h-full w-full object-contain px-10 py-4 grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0 bg-transparent"
      />
    </div>
  );
}

function ClientMarquee({ direction }: { direction: "left" | "right" }) {
  return (
    <Marquee
      direction={direction}
      speed={40}
      pauseOnHover
      gradient={false}
      autoFill
      className="overflow-hidden"
    >
      <div className="flex items-center gap-4 pr-4 md:gap-6 md:pr-6">
        {partners.map((partner) => (
          <ClientPill
            key={`${direction}-${partner.name}`}
            name={partner.name}
            image={partner.image}
          />
        ))}
      </div>
    </Marquee>
  );
}

export default function Partners() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-20 md:px-0">
      <div className="container relative mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="px-0 text-4xl font-extrabold tracking-tight text-white md:px-4 md:text-[40px] lg:px-8">
            Our Partner & Clients
            <span className="text-[#FFC700]">.</span>
          </h2>
        </div>

        <div className="relative z-10 flex w-full flex-col gap-4 overflow-hidden md:gap-6">
          <ClientMarquee direction="left" />

          <ClientMarquee direction="right" />

          <ClientMarquee direction="left" />
        </div>
      </div>
    </section>
  );
}
