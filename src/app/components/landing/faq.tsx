import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

const faqItems = [
  {
    question: "What does Coding Collective do?",
    answer:
      "Coding Collective is a 360 digital solutions partner that helps organizations design, build, and optimize digital systems—from software development to technology operations.",
  },
  {
    question: "Who do we work with?",
    answer:
      "We work with startups, SMEs, enterprises, and government institutions seeking reliable digital solutions and long-term technology partners.",
  },
  {
    question: "What services does Coding Collective provide?",
    answer:
      "We offer a range of services, including software development, technology consulting, and team augmentation. Our expertise spans web and mobile applications, cloud solutions, and digital transformation strategies.",
  },
  {
    question: "How does the collaboration process work?",
    answer:
      "We start by understanding your business objectives, then propose the most suitable digital solution or team setup. Coding Collective supports the process with structured communication, execution, and quality control.",
  },
];

export default function Faq() {
  return (
    <section className="bg-[#080808] py-20 md:py-24">
      <div className="container mx-auto px-5 md:px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* TITLE */}
          <div className="lg:col-span-4 lg:pt-1">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-[40px]">
              FAQ
              <span className="text-[#FFC700]">.</span>
            </h2>

            <p className="max-w-sm text-base leading-relaxed text-gray-300">
              Curious about how we work? You'll find all the answers you need
              right here.
            </p>
          </div>

          {/* ACCORDION */}
          <div className="lg:col-span-8">
            <Accordion className="flex flex-col gap-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`item-${index + 1}`}
                  className="overflow-hidden rounded-2xl border-0 bg-[#232323] px-6"
                >
                  <AccordionTrigger className="py-6 text-left text-base font-normal text-white hover:no-underline data-open:text-[#FFC700] [&>svg]:h-6 [&>svg]:w-6 [&>svg]:text-gray-400 data-open:[&>svg]:text-[#FFC700] aria-expanded:text-[#FFC700]">
                    {item.question}
                  </AccordionTrigger>

                  <AccordionContent className="pb-6 pt-2 text-base leading-relaxed text-gray-400">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
