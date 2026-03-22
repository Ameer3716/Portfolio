import React from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

export default function About() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6 max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left */}
        <div>
          <h1 className="text-4xl font-extrabold text-white mb-2">Ameer Sultan</h1>
          <div className="section-divider" />
          <p className="text-muted leading-relaxed mb-6">
            I'm a final-year Software Engineering student at <span className="text-white font-medium">FAST-NUCES CFD</span>,
            specializing in building AI systems that solve real-world problems — not just toy demos.
          </p>
          <p className="text-muted leading-relaxed mb-6">
            My focus is on <span className="text-secondary font-medium">retrieval-augmented generation</span>,{" "}
            <span className="text-secondary font-medium">NLP automation</span>, and{" "}
            <span className="text-secondary font-medium">LLM integration</span> — with a hard constraint on
            cost-efficiency (most of my systems run on CPU, zero API fees).
          </p>
          <p className="text-muted leading-relaxed mb-8">
            I believe in shipping things. 6 deployed AI projects, ROUGE/BLEU evaluated models, and systems that
            reduced human workload by up to 95%.
          </p>
          <a
            href="/AI_Developer_CV.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-primary/80 transition-colors"
          >
            <FiDownload /> Download CV
          </a>
        </div>

        {/* Right */}
        <div className="space-y-6">
          <div className="bg-surface rounded-2xl border border-white/5 p-5">
            <h3 className="font-semibold text-white mb-3">Education</h3>
            <p className="text-sm text-muted">BS Software Engineering</p>
            <p className="text-sm text-primary font-medium">FAST-NUCES, CFD Campus</p>
            <p className="text-xs text-muted mt-1">2022– 2026 · 8th Semester</p>
            <p className="text-xs text-muted mt-1">Focus: Full Stack, React, Node.js</p>
          </div>

          <div className="bg-surface rounded-2xl border border-white/5 p-5">
            <h3 className="font-semibold text-white mb-3">I'm Looking For</h3>
            <ul className="text-sm text-muted space-y-1.5">
              <li>• AI Developer / Machine Learning Engineer roles</li>
              <li>• Remote-first companies</li>
              <li>• Teams building with LLMs & automation</li>
              <li>• Internship → Full-time opportunities</li>
            </ul>
          </div>

          <div className="bg-surface rounded-2xl border border-white/5 p-5">
            <h3 className="font-semibold text-white mb-3">Links</h3>
            <div className="space-y-2 text-sm">
              <a href="https://github.com/Ameer3716" className="block text-primary hover:underline">github.com/Ameer3716</a>
              <a href="https://medium.com/@ameersultan0310" className="block text-primary hover:underline">medium.com/@yourusername</a>
              <a href="mailto:ameersultan0310@gmail.com" className="block text-primary hover:underline">ameersultan0310@gmail.com</a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
