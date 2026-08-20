"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ project, index }) {
  const categoryColors = {
    "AI": "#FACC15",
    "Backend": "#FDE047",
    "Frontend": "#FEF08A",
    "Full Stack": "#FACC15",
    "Mobile App": "#EAB308",
    "DevOps": "#FACC15",
    "Cloud": "#FDE047",
    "Web3": "#FACC15",
    "Healthtech": "#FEF08A",
    "SaaS": "#FACC15",
    "NLP / Fine-tuning": "#EAB308",
    "Web App": "#FACC15",
    "Desktop App": "#FACC15",
    "Scripts": "#FACC15",
    "AI Automation": "#FACC15",
  };
  const catColor = categoryColors[project.category] || "#FACC15";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="relative group h-full"
    >
      <div
        className="relative bg-[#0A0A0A]/70 backdrop-blur-sm rounded-2xl border border-white/5 p-6 flex flex-col gap-4 overflow-hidden h-full transition-all duration-300 group-hover:border-[#FACC15]/30 group-hover:-translate-y-1 group-hover:shadow-[0_8px_30px_rgba(250,204,21,0.12)]"
      >

        {/* Top row: category + badge + icon */}
        <div className="flex items-center justify-between relative z-10">
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full border"
            style={{
              background: `${catColor}18`,
              color: catColor,
              borderColor: `${catColor}35`,
            }}
          >
            {project.category}
          </span>
          <div className="flex items-center gap-2">
            {project.badge && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/25">
                {project.badge}
              </span>
            )}
            <motion.span
              whileHover={{ scale: 1.3, rotate: 12 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="text-3xl"
            >
              {project.icon}
            </motion.span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-[0.95rem] font-bold text-white leading-snug relative z-10 group-hover:text-[#FEF08A] transition-colors duration-200">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-white leading-relaxed flex-1 relative z-10">
          {project.description}
        </p>

        {/* Impact */}
        <div
          className="text-xs font-mono rounded-lg px-3 py-2.5 relative z-10"
          style={{
            background: `${catColor}08`,
            border: `1px solid ${catColor}20`,
            color: catColor,
          }}
        >
          📌 {project.impact}
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 relative z-10">
          {project.stack.map((t) => (
            <span key={t} className="skill-badge text-[0.7rem] !py-[3px] !px-2.5">{t}</span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-1 relative z-10">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs text-white hover:text-[#FEF08A] transition-colors"
          >
            <FiGithub size={13} /> GitHub
          </a>
          {project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-white hover:text-[#FEF08A] transition-colors"
            >
              <FiExternalLink size={13} /> Live Demo
            </a>
          )}
        </div>

        {/* Featured indicator */}
        {project.featured && (
          <div
            className="absolute top-0 right-0 w-20 h-20 pointer-events-none"
            style={{
              background: `linear-gradient(225deg, ${catColor}30, transparent 70%)`,
              borderRadius: "0 20px 0 0",
            }}
          />
        )}
      </div>
    </motion.div>
  );
}
