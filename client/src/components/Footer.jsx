import React from "react";
import { FiGithub, FiMail } from "react-icons/fi";
import { BsMedium } from "react-icons/bs";
export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm">
          Built with <span className="text-primary">React</span> + <span className="text-primary">Node.js</span> &middot; Software Developer
        </p>
        <div className="flex gap-5">
          <a href="https://github.com/Ameer3716" target="_blank" rel="noreferrer" className="text-muted hover:text-white transition-colors">
            <FiGithub size={18} />
          </a>
          <a href="https://medium.com/@ameersultan0310" target="_blank" rel="noreferrer" className="text-muted hover:text-white transition-colors">
            <BsMedium size={18} />
          </a>
          <a href="mailto:ameersultan0310@gmail.com" className="text-muted hover:text-white transition-colors">
            <FiMail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
