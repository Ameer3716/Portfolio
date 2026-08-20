import { Inter } from "next/font/google";
import "./globals.css";
import AppWrapper from "@/components/AppWrapper";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ameer Sultan | AI & Full Stack Developer",
  description: "Portfolio of Ameer Sultan, specializing in AI, Full Stack, and Cloud Engineering. Building scalable intelligent systems and robust cloud architectures.",
  icons: {
    icon: '/favicon.jpg',
    apple: '/favicon.jpg',
  },
  openGraph: {
    title: 'Ameer Sultan | AI & Full Stack Developer',
    description: 'Portfolio of Ameer Sultan, specializing in AI, Full Stack, and Cloud Engineering.',
    url: 'https://portfolio-next.vercel.app',
    siteName: 'Ameer Sultan Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ameer Sultan | AI & Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ameer Sultan | AI & Full Stack Developer',
    description: 'Portfolio of Ameer Sultan, specializing in AI, Full Stack, and Cloud Engineering.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark h-full">
      <body className={`${inter.className} min-h-full bg-black text-white`}>
        <AppWrapper>
          {children}
        </AppWrapper>
        <Script 
          src="https://ai-support-agent-1biy.onrender.com/widget/embed.js" 
          data-client="8a7234342e10d85e" 
          strategy="lazyOnload" 
        />
      </body>
    </html>
  );
}
