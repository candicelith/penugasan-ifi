import { Inter } from "next/font/google";
import Navbar from "./components/layout/navbar";
import "./globals.css";
import Footer from "./components/layout/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="bg-black">
        <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
}
