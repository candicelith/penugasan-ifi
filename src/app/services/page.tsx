export default function Services() {
  return (
    <main>
      <section className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden px-5 md:px-10 antialiased">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/services/services-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute bottom-0 inset-x-0 h-60 bg-linear-to-t from-black to-transparent z-0"></div>
        </div>
        <div className="relative z-20 container mx-auto flex flex-col items-center text-center">
          <h1 className="text-xl md:text-3xl lg:text-[45px] font-bold text-white leading-tight tracking-tight max-w-4xl animate-fade-up [animation-delay:100ms] will-change-transform">
            Integrated Technology and IT Talent Services for Growing and
            Enterprise Businesses
          </h1>
          <p className="text-white text-base md:text-[20px] leading-relaxed mt-8 max-w-3xl font-light opacity-90 animate-fade-up [animation-delay:400ms] will-change-transform">
            Coding Collective provides structured technology services and
            flexible IT talent solutions to help organizations build digital
            products, operate stable infrastructure, and scale teams
            efficiently.
          </p>
        </div>
      </section>
    </main>
  );
}
