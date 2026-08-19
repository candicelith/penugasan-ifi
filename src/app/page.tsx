import Image from "next/image";
import Hero from "./components/landing/hero";
import Stats from "./components/landing/stats";
import Works from "./components/landing/works";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Works />
    </main>
  );
}
