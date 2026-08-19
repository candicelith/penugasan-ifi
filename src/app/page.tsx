import Image from "next/image";
import Hero from "./components/landing/hero";
import Stats from "./components/landing/stats";
import Works from "./components/landing/works";
import Solutions from "./components/landing/solutions";
import Partners from "./components/landing/partners";
import Faq from "./components/landing/faq";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Works />
      <Solutions />
      <Partners />
      <Faq />
    </main>
  );
}
