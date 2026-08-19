import { Inter } from "next/font/google";
import Navbar from "./components/layout/navbar";
import "./globals.css";

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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
