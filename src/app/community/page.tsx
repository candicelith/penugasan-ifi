import Colab from "../components/community/colab";
import WhatWeDo from "../components/community/what-we-do";
import Partners from "../components/landing/partners";

export default function Community() {
  return (
    <main>
      <section className="relative w-full h-screen bg-black text-white flex flex-col justify-center items-center overflow-hidden py-20">
        <div className="relative w-full z-10 flex flex-col justify-center items-center h-full">
          <div className="flex items-center justify-center pt-30 md:pt-40">
            <h1 className="text-3xl md:text-[50px] font-bold text-center leading-tight animate-fade-up [animation-delay:100ms] will-change-transform">
              Powered by a Growing Tech Ecosystem
            </h1>
          </div>
          <div className="relative w-full h-full mt-auto">
            <img
              src="/community/bg-comunity.webp"
              alt="Dithered Hands Graphic"
              className="object-contain object-bottom absolute inset-0 w-full h-full top-0 left-0 right-0 bottom-0 bg-transparent"
              sizes="100vw"
            />
          </div>
        </div>
      </section>
      <Colab />
      <WhatWeDo />
      <Partners />
    </main>
  );
}
