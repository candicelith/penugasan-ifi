export default function HowWeWork() {
  return (
    <section className="w-full h-screen flex flex-col justify-center px-6 md:px-12 ">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-6xl md:text-[90px] font-bold text-white leading-none tracking-tight mb-10">
            How <br className="hidden md:block" />
            We Work<span className="text-[#FFC700]">.</span>
          </h2>
          <p className="text-xl text-white">
            A Structured and Collaborative Delivery Approach
          </p>
        </div>
        <div className="w-full">
          <div className="bg-[#232323] rounded-[10px] w-full p-10 md:p-20 flex items-center justify-center">
            <img
              src="/industries/how-we-work-desktop.svg"
              alt="A Structured and Collaborative Delivery Approach"
              className="w-full h-auto max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
