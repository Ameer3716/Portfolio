import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="relative bg-surface rounded-2xl border border-white/5 p-6 card-glow flex flex-col gap-4 overflow-hidden"
    >
      {/* Category badge */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/15 text-secondary border border-primary/20">
          {project.category}
        </span>
        {project.badge && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/20">
            {project.badge}
          </span>
        )}
        <span className="text-3xl">{project.icon}</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-white leading-snug">{project.title}</h3>

      {/* Description */}
      <p className="text-sm text-muted leading-relaxed flex-1">{project.description}</p>

      {/* Impact */}
      <div className="text-xs font-mono text-primary/80 bg-primary/5 border border-primary/10 rounded-lg px-3 py-2">
        📌 {project.impact}
      </div>

      {/* Stack */}
      <div className="flex flex-wrap gap-2">
        {project.stack.map((t) => (
          <span key={t} className="skill-badge">{t}</span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 pt-1">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-xs text-muted hover:text-white transition-colors"
        >
          <FiGithub size={14} /> GitHub
        </a>
        {project.live !== "#" && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs text-muted hover:text-primary transition-colors"
          >
            <FiExternalLink size={14} /> Live Demo
          </a>
        )}
      </div>

      {/* Featured glow */}
      {project.featured && (
        <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-primary/30" />
      )}
    </motion.div>
  );
}
