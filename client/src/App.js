import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { useCursor, useScrollProgress } from "./hooks/useCursor";

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.3, ease: [0.4, 0, 1, 1] } },
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} variants={pageVariants} initial="initial" animate="animate" exit="exit">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function AppInner() {
  const { dotRef, ringRef, isMobile } = useCursor();
  const progressRef = useScrollProgress();

  return (
    <div className="noise">
      {/* Custom cursor - Hidden on mobile */}
      {!isMobile && <div ref={dotRef} className="cursor-dot" />}
      {!isMobile && <div ref={ringRef} className="cursor-ring" />}
      {/* Scroll progress */}
      <div ref={progressRef} className="scroll-progress" style={{ width: "100%", transform: "scaleX(0)" }} />

      <div className="grid-pattern min-h-screen">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}
