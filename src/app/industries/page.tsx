import IndustriesWeServe from "../components/industries/industries-we-serve";
import HowWeWork from "../components/industries/how-we-work";
import Specialist from "../components/industries/specialist";

export default function Industries() {
  return (
    <main className="relative w-full min-h-[200vh] bg-black overflow-hidden">
      <section className="absolute inset-0 z-0 h-full w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-50"
        >
          <source src="/industries/industries-video.mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent z-1 pointer-events-none"></div>
      </section>
      <div className="relative z-10 w-full">
        <IndustriesWeServe />
        <HowWeWork />
      </div>
      <Specialist />
    </main>
  );
}
