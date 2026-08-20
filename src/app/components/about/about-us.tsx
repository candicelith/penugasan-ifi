export default function aboutUs() {
  return (
    <section className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center md:items-end mx-auto mt-auto pb-16 w-full">
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-4xl md:text-[96px] font-extrabold text-white leading-tight animate-fade-up [animation-delay:300ms] will-change-transform">
          Who <br className="hidden xl:block" />
          We Are
          <span className="text-[#FFC700]">.</span>
        </h2>
      </div>
      <div className="text-center md:text-right flex flex-col w-full animate-fade-up [animation-delay:500ms] will-change-transform px-5 md:px-0">
        <h3 className="text-base md:text-xl text-white mb-6 drop-shadow-lg">
          A Technology Ecosystem Company Built for Long-Term Impact
        </h3>
        <p className="text-gray-300 text-base leading-relaxed drop-shadow-md">
          Coding Collective empowers organizations to scale through Digital
          Solutions, IT Recruitment, and Tech Community Building. We deliver
          high-value digital products, connect companies with exceptional tech
          talent, and cultivate a vibrant and forward-focused technology
          community.
        </p>
      </div>
    </section>
  );
}
