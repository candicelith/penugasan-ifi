export default function Contact() {
  return (
    <main>
      <section className="flex min-h-screen justify-center bg-[#0a0a0a] px-6 py-30 text-white antialiased md:px-12 md:py-50 lg:px-24">
        <div className="container mx-auto">
          {/* Header */}
          <div className="pb-20">
            <h1 className="mb-5 text-4xl font-bold tracking-tight animate-fade-up [animation-delay:100ms] will-change-transform md:text-[50px]">
              Get in Touch.
            </h1>

            <p className="text-base text-white animate-fade-up [animation-delay:300ms] will-change-transform md:text-[20px]">
              Whether you are exploring a new technology initiative,
              <br />
              looking for a delivery partner, or seeking IT talent support,
              <br />
              please complete the form below.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-base text-white">
                  Your Name*
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Ex: John Doe"
                  className="w-full rounded-lg border border-[#333] bg-transparent p-3.5 text-white transition-colors focus:border-white focus:outline-none"
                  required
                />
              </div>

              {/* Role */}
              <div className="flex flex-col gap-2">
                <label htmlFor="role" className="text-base text-white">
                  Role*
                </label>

                <input
                  id="role"
                  name="role"
                  type="text"
                  placeholder="Ex: CEO"
                  className="w-full rounded-lg border border-[#333] bg-transparent p-3.5 text-white transition-colors focus:border-white focus:outline-none"
                  required
                />
              </div>

              {/* Company */}
              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-base text-white">
                  Company Name*
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Ex: Coding Collective"
                  className="w-full rounded-lg border border-[#333] bg-transparent p-3.5 text-white transition-colors focus:border-white focus:outline-none"
                  required
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-base text-white">
                  Phone Number*
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Ex: +62xxx"
                  className="w-full rounded-lg border border-[#333] bg-transparent p-3.5 text-white transition-colors focus:border-white focus:outline-none"
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-base text-white">
                  Work Email*
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Ex: name@company.com"
                  className="w-full rounded-lg border border-[#333] bg-transparent p-3.5 text-white transition-colors focus:border-white focus:outline-none"
                  required
                />
              </div>

              {/* Need */}
              <div className="flex flex-col gap-2">
                <label htmlFor="need" className="text-base text-white">
                  Your Need*
                </label>

                <div className="relative">
                  <select
                    id="need"
                    name="need"
                    defaultValue=""
                    className="w-full cursor-pointer appearance-none rounded-lg border border-[#333] bg-transparent p-3.5 text-white transition-colors focus:border-white focus:outline-none"
                    required
                  >
                    <option value="" disabled className="bg-[#1c1c1c]">
                      Choose Your Need
                    </option>

                    <option value="Talent Solution" className="bg-[#1c1c1c]">
                      Talent Solution
                    </option>

                    <option
                      value="IT Digital Solution"
                      className="bg-[#1c1c1c]"
                    >
                      IT Digital Solution
                    </option>

                    <option value="General IT Need" className="bg-[#1c1c1c]">
                      General IT Need
                    </option>

                    <option value="Other" className="bg-[#1c1c1c]">
                      Other
                    </option>
                  </select>

                  {/* Dropdown Icon */}
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-base text-white">
                Message*
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full resize-none rounded-lg border border-[#333] bg-transparent p-4 text-white transition-colors focus:border-white focus:outline-none"
                required
              />
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="group relative overflow-hidden rounded-lg border-2 border-[#FFC700] bg-[#FFC700] px-10 py-3 text-base text-black shadow-xl transition-all duration-300 ease-out disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-70"
              >
                <div className="absolute inset-0 z-0 h-full w-full -translate-x-full bg-black transition-transform duration-300 ease-out group-hover:translate-x-0" />

                <span className="relative z-10 font-semibold transition-colors duration-300 ease-out group-hover:text-[#FFC700]">
                  Submit
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
