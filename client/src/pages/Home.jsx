import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight, FiGithub } from "react-icons/fi";
import SkillsSection from "../components/SkillsSection";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

const ROLES = [
  "AI Engineer",
  "RAG Systems Engineer",
  "NLP Pipeline Builder",
  "LangChain Developer",
  "Automation Specialist",
];

export default function Home() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2500);
    return () => clearInterval(t);
  }, []);

  const featured = projects.filter((p) => p.featured);

  return (
    <div className="min-h-screen">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-10 max-w-6xl mx-auto relative">
        {/* BG glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <p className="text-sm font-mono text-primary mb-3 tracking-widest">
            &gt; Available for Remote Work
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">
            Ameer Sultan
          </h1>

          <div className="h-14 mb-6">
            <motion.p
              key={roleIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-2xl md:text-3xl font-bold gradient-text"
            >
              {ROLES[roleIdx]}
            </motion.p>
          </div>

          <p className="text-muted text-lg max-w-2xl mb-10 leading-relaxed">
            I engineer production-grade AI systems — RAG pipelines, NLP automation, and LLM-powered tools.
            <br />
            <span className="text-white font-medium">6 deployed projects</span> ·{" "}
            <span className="text-white font-medium">95% workflow acceleration</span> ·{" "}
            <span className="text-white font-medium">zero-cost inference architectures</span>
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/80 transition-colors"
            >
              View Projects <FiArrowRight />
            </Link>
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-muted font-semibold text-sm hover:text-white hover:border-white/30 transition-colors"
            >
              <FiGithub /> GitHub
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/30 text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              Hire Me
            </Link>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "6+", label: "AI Projects Shipped" },
            { value: "95%", label: "Process Acceleration" },
            { value: "15K+", label: "Training Samples" },
            { value: "0$", label: "Cloud Inference Cost" },
          ].map((stat) => (
            <div key={stat.label} className="bg-surface/60 rounded-xl border border-white/5 p-4 text-center">
              <p className="text-2xl font-bold gradient-text">{stat.value}</p>
              <p className="text-xs text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────────────────── */}
      <SkillsSection />

      {/* ── FEATURED PROJECTS ────────────────────────────────────────────── */}
      <section className="py-10 px-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
            <div className="section-divider" />
          </div>
          <Link to="/projects" className="text-sm text-primary hover:underline flex items-center gap-1">
            View All <FiArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
