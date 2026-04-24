import React from "react";
import { Link } from "react-router-dom";
import { FiGithub, FiMail, FiArrowUp } from "react-icons/fi";
import { BsMedium } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="font-mono text-base font-bold">
              
              <span className="gradient-text">Ameer</span>
              
            </Link>
            <p className="text-[#94A3B8] text-xs mt-1.5">
              AI Engineer · RAG Systems · LLM Integration
            </p>
          </div>

          {/* Quick links */}
          <div className="flex items-center gap-6">
            {[
              { to: "/projects", label: "Projects" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-[#94A3B8] hover:text-white transition-colors highlight-line"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {[
              { href: "https://github.com/Ameer3716", icon: <FiGithub size={17} /> },
              { href: "https://medium.com/@ameersultan0310", icon: <BsMedium size={17} /> },
              { href: "mailto:ameersultan0310@gmail.com", icon: <FiMail size={17} /> },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="text-[#94A3B8] hover:text-white transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/5 pt-6">
          <p className="text-[#94A3B8] text-xs">
            Built with{" "}
            <span className="text-[#6366F1]">React</span> +{" "}
            <span className="text-[#6366F1]">Framer Motion</span> +{" "}
            <span className="text-[#6366F1]">Tailwind CSS</span>
          </p>
          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-xl bg-[#1E293B] border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#6366F1]/30 transition-all"
          >
            <FiArrowUp size={15} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
