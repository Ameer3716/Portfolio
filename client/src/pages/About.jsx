import React from "react";
import { motion } from "framer-motion";
import { FiDownload, FiGithub, FiMail } from "react-icons/fi";
import { BsMedium } from "react-icons/bs";

const timelineItems = [
  {
    year: "2026",
    title: "Final Year — Graduation",
    subtitle: "FAST-NUCES CFD Campus",
    desc: "Completing BS Software Engineering, 8th Semester. Focus on AI systems, full-stack development.",
  },
  {
    year: "2024–25",
    title: "Independent AI Developer",
    subtitle: "Freelance & Open Source",
    desc: "Built 6+ production AI systems: RAG pipelines, NLP automation, LLM-powered tools. All CPU-only, zero API cost.",
  },
  {
    year: "2023",
    title: "Full Stack Development",
    subtitle: "Academic & Personal Projects",
    desc: "Shipped AgriConnect, SoulNest, Healthcare Platform. Mastered React, Node.js, MongoDB, Docker.",
  },
  {
    year: "2022",
    title: "Started SE Journey",
    subtitle: "FAST-NUCES",
    desc: "Enrolled in Software Engineering. Began with algorithms, data structures, and web fundamentals.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
};

export default function About() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6 max-w-5xl mx-auto">
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-14">
          <p className="section-label">Who I am</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-3">
            Ameer <span className="gradient-text-animate">Sultan</span>
          </h1>
          <div className="section-divider" />
          <p className="text-white text-lg max-w-xl leading-relaxed mt-2">
            Final-year Software Engineering student turned production AI developer. I ship real systems, not demos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Left — Bio + Links */}
          <motion.div variants={itemVariants} className="md:col-span-3 space-y-6">
            <div className="card-glass p-7">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-[#FACC15]">//</span> About Me
              </h3>
              <p className="text-white leading-relaxed mb-4">
                I'm a final-year Software Engineering student at{" "}
                <span className="text-white font-medium">FAST-NUCES CFD</span>, specializing in building AI systems
                that solve real-world problems — not just toy demos.
              </p>
              <p className="text-white leading-relaxed mb-4">
                My focus is on{" "}
                <span className="text-[#FEF08A] font-medium">retrieval-augmented generation</span>,{" "}
                <span className="text-[#FEF08A] font-medium">NLP automation</span>, and{" "}
                <span className="text-[#FEF08A] font-medium">LLM integration</span> — with a hard constraint on
                cost-efficiency (most of my systems run on CPU, zero API fees).
              </p>
              <p className="text-white leading-relaxed">
                I believe in shipping things. 6 deployed AI projects, ROUGE/BLEU evaluated models, and systems that
                reduced human workload by up to 95%.
              </p>
            </div>

            {/* Links */}
            <div className="card-glass p-7">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-[#FACC15]">//</span> Find Me
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { href: "https://github.com/Ameer3716", icon: <FiGithub />, label: "github.com/Ameer3716" },
                  { href: "https://medium.com/@ameersultan0310", icon: <BsMedium />, label: "medium.com/@ameersultan0310" },
                  { href: "mailto:ameersultan0310@gmail.com", icon: <FiMail />, label: "ameersultan0310@gmail.com" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#000000]/60 border border-white/5 text-white hover:text-[#FEF08A] hover:border-[#FACC15]/30 transition-all duration-200 group"
                  >
                    <span className="text-[#FACC15] group-hover:scale-110 transition-transform">{link.icon}</span>
                    <span className="text-sm">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <a href="/AI_Developer_CV.pdf" download className="btn-primary w-full justify-center">
              <FiDownload /> Download CV — AI Developer
            </a>
          </motion.div>

          {/* Right — Education + Looking for + Timeline */}
          <motion.div variants={itemVariants} className="md:col-span-2 space-y-5">
            <div className="card-glass p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-[#FACC15]">//</span> Education
              </h3>
              <div className="relative pl-4 border-l border-[#FACC15]/30">
                <p className="font-semibold text-white text-sm">BS Software Engineering</p>
                <p className="text-[#FEF08A] text-sm">FAST-NUCES, CFD Campus</p>
                <p className="text-xs text-white mt-1">2022 – 2026 · 8th Semester</p>
                <p className="text-xs text-white">Focus: Full Stack, React, Node.js, AI</p>
              </div>
            </div>

            <div className="card-glass p-6">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-[#FACC15]">//</span> I'm Looking For
              </h3>
              <ul className="space-y-2.5">
                {[
                  "AI Developer / ML Engineer roles",
                  "Remote-first companies",
                  "Teams building with LLMs & automation",
                  "Internship → Full-time opportunities",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white">
                    <span className="text-[#FACC15] mt-0.5 shrink-0">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mini timeline */}
            <div className="card-glass p-6">
              <h3 className="font-semibold text-white mb-5 flex items-center gap-2">
                <span className="text-[#FACC15]">//</span> Timeline
              </h3>
              <div className="space-y-5">
                {timelineItems.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative pl-5"
                  >
                    <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-[#FACC15]" />
                    {i < timelineItems.length - 1 && (
                      <div className="absolute left-[3.5px] top-4 w-0.5 h-full bg-[#FACC15]/20" />
                    )}
                    <span className="font-mono text-[10px] text-[#FACC15] tracking-wider">{item.year}</span>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-[11px] text-[#FEF08A]">{item.subtitle}</p>
                    <p className="text-xs text-white mt-1 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
