import { Inter } from "next/font/google";
import Navbar from "./components/layout/navbar";
import "./globals.css";
import Footer from "./components/layout/footer";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("h-full", "scroll-smooth", "antialiased", "font-sans", inter.variable)}
    >
      <body className="bg-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
