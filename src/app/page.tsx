import Image from "next/image";
import Hero from "./components/landing/hero";
import Stats from "./components/landing/stats";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
    </main>
  );
}
