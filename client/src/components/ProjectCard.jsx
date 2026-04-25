import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 25 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig);
  const glowX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

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
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="relative group"
    >
      <div
        className="relative bg-[#0A0A0A]/70 backdrop-blur-sm rounded-2xl border border-white/5 p-6 flex flex-col gap-4 overflow-hidden h-full transition-all duration-300 group-hover:border-[#FACC15]/30"
        style={{ transform: "translateZ(0)" }}
      >
        {/* Dynamic glow on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glowX.get()} ${glowY.get()}, ${catColor}15 0%, transparent 60%)`,
          }}
        />

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
