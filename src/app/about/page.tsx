import AboutUs from "../components/about/about-us";
import Milestones from "../components/about/milestones";
import Decade from "../components/about/decade";
import ChooseUs from "../components/about/why-choose-us";
import Partners from "../components/landing/partners";

export default function About() {
  return (
    <main className="relative w-full bg-black">
      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-cover"
        >
          <source src="/about/about-video.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-black/60" />

        {/* TITLE */}
        <div className="relative z-20 flex min-h-screen flex-col items-center justify-center">
          <h1 className="animate-fade-up text-6xl font-bold tracking-tight text-white md:text-[140px] [animation-delay:100ms]">
            ABOUT US
          </h1>
        </div>
      </section>

      {/* ABOUT */}
      <AboutUs />

      {/* MILESTONES */}
      <Milestones />

      <Decade />

      <ChooseUs />

      <Partners />
    </main>
  );
}
