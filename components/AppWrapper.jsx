"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useCursor, useScrollProgress } from "@/hooks/useCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.3, ease: [0.4, 0, 1, 1] } },
};

export default function AppWrapper({ children }) {
  const pathname = usePathname();
  const { dotRef, ringRef, isMobile } = useCursor();
  const progressRef = useScrollProgress();

  return (
    <div className="noise">
      {!isMobile && <div ref={dotRef} className="cursor-dot" />}
      {!isMobile && <div ref={ringRef} className="cursor-ring" />}
      <div ref={progressRef} className="scroll-progress" style={{ width: "100%", transform: "scaleX(0)" }} />

      <div className="grid-pattern min-h-screen flex flex-col">
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main 
            key={pathname} 
            variants={pageVariants} 
            initial="initial" 
            animate="animate" 
            exit="exit"
            className="flex-grow"
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  );
}
