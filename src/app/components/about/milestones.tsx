"use client";
import { useEffect, useRef, useState, type CSSProperties } from "react";

type Milestone = {
  year: string;
  endYear?: string;
  title: string;
  description: string;
  points?: string[];
};

const milestones: Milestone[] = [
  {
    year: "16",
    title: "Coding Collective opens for business",
    description: "",
  },
  {
    year: "17",
    title: "Software Development Studio",
    description: "Providing web & mobile app development for global businesses",
    points: ["Web Development", "App Development", "System Integration"],
  },
  {
    year: "21",
    title: "Tech Talent Aggregator",
    description:
      "Helping companies access reliable & cost-efficient tech talents",
    points: ["IT Outsourcing", "IT Recruitment", "Project-Based"],
  },
  {
    year: "22",
    title: "Digital Solutions Partner",
    description: "Supporting end-to-end business digitalization needs",
    points: ["IT Recruitment", "Product Development", "Process Automation"],
  },
  {
    year: "23",
    endYear: "26",
    title: "360° Custom Digitalization Partner",
    description:
      "Delivering complete tech solutions combining software, talent, and strategy",
    points: [
      "Custom Software",
      "Digital Transformation",
      "Managed Tech Teams",
      "Tech Community Building",
    ],
  },
];

export default function Milestones() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  const [index, setIndex] = useState(0);
  const [itemHeight, setItemHeight] = useState(400);
  // "top": haven't reached the section yet -> content sits at the top of it (normal)
  // "fixed": inside the scrollable range -> content is truly pinned to the viewport
  // "bottom": scrolled past the section -> content sticks to the bottom of it
  const [pinMode, setPinMode] = useState<"top" | "fixed" | "bottom">("top");

  // measure actual rendered item height (300px mobile / 400px desktop)
  useEffect(() => {
    const measure = () => {
      if (itemRef.current) setItemHeight(itemRef.current.offsetHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Enable CSS scroll-snap only while this component is mounted, so it
  // doesn't affect scrolling anywhere else on the site.
  useEffect(() => {
    const html = document.documentElement;
    const prev = html.style.scrollSnapType;
    html.style.scrollSnapType = "y proximity";
    return () => {
      html.style.scrollSnapType = prev;
    };
  }, []);

  // Real page scroll (native scrollbar keeps moving, exactly like the reference site).
  // We manually flip the content to position:fixed while the section is being
  // scrolled through -- this can't be broken by any ancestor's overflow:hidden,
  // unlike CSS `position: sticky`.
  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      if (rect.top > 0) {
        setPinMode("top");
      } else if (rect.bottom <= vh) {
        setPinMode("bottom");
      } else {
        setPinMode("fixed");
      }

      const scrollableHeight = section.offsetHeight - vh;
      if (scrollableHeight > 0) {
        const currentScroll = Math.max(-rect.top, 0);
        const progress = Math.min(currentScroll / scrollableHeight, 1);
        const nextIndex = Math.round(progress * (milestones.length - 1));
        setIndex(Math.min(Math.max(nextIndex, 0), milestones.length - 1));
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const translateY = -(index * itemHeight);

  const pinStyle: CSSProperties =
    pinMode === "fixed"
      ? { position: "fixed", top: 0, left: 0, right: 0, zIndex: 20 }
      : pinMode === "bottom"
        ? { position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 20 }
        : { position: "absolute", top: 0, left: 0, right: 0, zIndex: 20 };

  return (
    // Total scrollable distance = (milestones.length - 1) full screens,
    // plus the 1 screen that's always visible = milestones.length * 100vh.
    <section
      ref={sectionRef}
      className="relative bg-black"
      style={{ height: `${milestones.length * 100}vh` }}
    >
      {/* Invisible snap markers: define where the native scroll snaps to.
          They don't render anything, they just occupy the scroll height. */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {milestones.map((m) => (
          <div
            key={m.year}
            className="h-screen"
            style={{ scrollSnapAlign: "start" }}
          />
        ))}
      </div>

      {/* PINNED VISUAL CONTENT — position toggled manually via JS (see pinStyle),
          not CSS `sticky`, so an ancestor with overflow:hidden can't break it */}
      <div className="h-screen w-full overflow-hidden" style={pinStyle}>
        <div className="flex h-full flex-col items-center justify-center">
          {/* TITLE */}
          <div className="mb-12 w-full text-center md:mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-[70px]">
              Milestones
              <span className="text-[#FFC700]">.</span>
            </h2>
          </div>

          {/* CONTENT */}
          <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-5 md:grid-cols-2">
            {/* YEAR */}
            <div className="relative flex h-[300px] justify-center md:h-[400px] md:justify-end">
              <div className="flex h-full items-center">
                <span className="mr-4 text-[70px] font-bold leading-none tracking-tighter text-white md:text-[180px]">
                  20
                </span>
                <div className="h-full overflow-hidden ">
                  <div
                    className="transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                    style={{ transform: `translateY(${translateY}px)` }}
                  >
                    {milestones.map((milestone, i) => (
                      <div
                        key={milestone.year}
                        ref={i === 0 ? itemRef : undefined}
                        className="flex h-[300px] items-center md:h-[400px]"
                      >
                        {milestone.endYear ? (
                          <div className="flex flex-col items-center tracking-tighter leading-none text-[#FFC700]">
                            <span className="text-[70px] font-bold md:text-[180px]">
                              {milestone.year}
                            </span>

                            <div className="my-1 h-10 w-px bg-[#FFC700] md:my-2 md:h-12" />

                            <span className="text-[70px] font-bold md:text-[180px]">
                              {milestone.endYear}
                            </span>
                          </div>
                        ) : (
                          <span className="text-[70px] font-bold leading-none tracking-tighter text-[#FFC700] md:text-[180px]">
                            {milestone.year}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="relative h-[300px] overflow-hidden text-center md:h-[400px] md:text-left">
              <div
                className="transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{ transform: `translateY(${translateY}px)` }}
              >
                {milestones.map((milestone) => (
                  <div
                    key={milestone.year}
                    className="flex h-[300px] flex-col justify-center px-0 md:h-[400px] md:px-8"
                  >
                    <h3 className="mb-3 text-xl font-bold text-white">
                      {milestone.title}
                    </h3>
                    {milestone.description && (
                      <p className="mb-6 max-w-md text-base leading-relaxed text-white">
                        {milestone.description}
                      </p>
                    )}
                    {milestone.points && (
                      <ul className="mx-auto space-y-3 text-left md:mx-0">
                        {milestone.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-center text-base text-white"
                          >
                            <span className="mr-4 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
