type OrbitItem = {
  title: string;
  position: string;
};

function SolutionOrbit({
  title,
  items,
}: {
  title: React.ReactNode;
  items: OrbitItem[];
}) {
  return (
    <div className="relative flex h-[450px] w-[450px] items-center justify-center 2xl:h-[600px] 2xl:w-[600px]">
      {/* Orbit */}
      <div className="absolute h-[800px] w-[800px] shrink-0 scale-[0.6] 2xl:scale-[0.8]">
        <div className="absolute inset-0 animate-spin-orbit">
          {items.map((item) => (
            <div
              key={item.title}
              className={`absolute ${item.position} -translate-x-1/2 -translate-y-1/2`}
            >
              {/* Counter rotation */}
              <div className="animate-spin-upright">
                <div className="flex h-[100px] w-[280px] items-center justify-center">
                  <div className="flex items-center gap-4">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#FFC700]" />

                    <span className="max-w-[180px] text-left font-sans text-2xl leading-tight text-white">
                      {item.title}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center */}
        <div className="absolute left-1/2 top-1/2 z-10 flex h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40">
          <h2 className="text-center text-3xl font-bold leading-snug text-white md:text-4xl">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
}

const techOrbitItems: OrbitItem[] = [
  {
    title: "Digital Transformation",
    position: "left-[700px] top-[400px]",
  },
  {
    title: "Cloud & Infrastructure Management",
    position: "left-[550px] top-[660px]",
  },
  {
    title: "Data Analytics",
    position: "left-[250px] top-[660px]",
  },
  {
    title: "Payment Automation Platform",
    position: "left-[100px] top-[400px]",
  },
  {
    title: "QA & Security Focused",
    position: "left-[250px] top-[140px]",
  },
  {
    title: "Sysadmin as a Service",
    position: "left-[550px] top-[140px]",
  },
];

const talentOrbitItems: OrbitItem[] = [
  {
    title: "IT Outsourcing",
    position: "left-[700px] top-[400px]",
  },
  {
    title: "Head Hunting",
    position: "left-[400px] top-[700px]",
  },
  {
    title: "Project-Based",
    position: "left-[100px] top-[400px]",
  },
  {
    title: "IT Community",
    position: "left-[400px] top-[100px]",
  },
];

export default function Solutions() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black font-sans">
      {/* Heading */}
      <div className="absolute top-10 z-30 flex w-full justify-center pt-8">
        <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-[40px]">
          SOLUTIONS<span className="text-[#FFC700]">.</span>
        </h2>
      </div>

      {/* Desktop */}
      <div className="container mx-auto flex min-h-screen w-full flex-col items-center justify-center px-5 pt-32 pb-20 xl:flex-row xl:gap-0">
        {/* TECH SOLUTION */}
        <div className="hidden w-full justify-center xl:flex xl:w-1/2">
          <SolutionOrbit
            title={
              <>
                All-In-One
                <br />
                Tech
                <br />
                Solution
              </>
            }
            items={techOrbitItems}
          />
        </div>

        {/* TALENT SOLUTION */}
        <div className="hidden w-full justify-center xl:flex xl:w-1/2">
          <SolutionOrbit
            title={
              <>
                Talent
                <br />
                Solution
                <br />
                Services
              </>
            }
            items={talentOrbitItems}
          />
        </div>

        {/* Mobile */}
        <div className="flex w-full flex-col gap-6 xl:hidden">
          {/* Tech */}
          <div className="mx-auto w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-6 border-b border-white/20 pb-4 text-center text-2xl font-bold text-white">
              All-In-One Tech Solution
            </h2>

            <ul className="space-y-4">
              {techOrbitItems.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#FFC700]" />

                  <span className="text-lg leading-tight text-gray-300">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Talent */}
          <div className="mx-auto w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-6 border-b border-white/20 pb-4 text-center text-2xl font-bold text-white">
              Talent Solution Services
            </h2>

            <ul className="space-y-4">
              {talentOrbitItems.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#FFC700]" />

                  <span className="text-lg leading-tight text-gray-300">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
