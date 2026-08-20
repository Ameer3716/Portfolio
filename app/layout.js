import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ameer Sultan | AI Developer",
  description: "Portfolio of Ameer Sultan, specializing in AI, Full Stack, and Cloud Engineering.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark h-full">
      <body className={`${inter.className} min-h-full flex flex-col bg-black text-white`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Script 
          src="https://ai-support-agent-1biy.onrender.com/widget/embed.js" 
          data-client="8a7234342e10d85e" 
          strategy="lazyOnload" 
        />
      </body>
    </html>
  );
}
