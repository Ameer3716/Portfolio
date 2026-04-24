import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skillGroups = [
  {
    label: "Machine Learning",
    icon: "🧠",
    color: "#FACC15",
    skills: ["LangChain", "HuggingFace", "TinyLlama", "T5", "GPT-2", "FAISS", "RAG", "Transformers", "Seq2Seq"],
  },
  {
    label: "Backend",
    icon: "🔌",
    color: "#FDE047",
    skills: ["Python", "Node.js", "Express.js", "FastAPI", "REST APIs", "MongoDB"],
  },
  {
    label: "Frontend",
    icon: "🖥️",
    color: "#FEF08A",
    skills: ["React.js", "Tailwind CSS", "Framer Motion", "Streamlit", "TypeScript"],
  },
  {
    label: "DevOps & Cloud",
    icon: "☁️",
    color: "#C7D2FE",
    skills: ["Git", "Docker", "Kubernetes", "AWS", "Terraform", "HuggingFace Hub"],
  },
];

export default function SkillsSection() {
  const [hoveredGroup, setHoveredGroup] = useState(null);

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="section-label">What I work with</p>
        <h2 className="font-display text-4xl font-extrabold text-white">Technical Arsenal</h2>
        <div className="section-divider" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.1, duration: 0.5 }}
            onMouseEnter={() => setHoveredGroup(gi)}
            onMouseLeave={() => setHoveredGroup(null)}
            className="relative card-glass p-6 overflow-hidden group cursor-default"
          >
            {/* Background glow on hover */}
            <AnimatePresence>
              {hoveredGroup === gi && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 50% 0%, ${group.color}18 0%, transparent 70%)`,
                  }}
                />
              )}
            </AnimatePresence>

            {/* Header */}
            <div className="flex items-center gap-3 mb-5 relative z-10">
              <motion.span
                animate={hoveredGroup === gi ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-2xl"
              >
                {group.icon}
              </motion.span>
              <span className="font-semibold text-white text-sm">{group.label}</span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 relative z-10">
              {group.skills.map((s, si) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: gi * 0.08 + si * 0.04, type: "spring", stiffness: 300 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="skill-badge"
                >
                  {s}
                </motion.span>
              ))}
            </div>

            {/* Bottom accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={hoveredGroup === gi ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full origin-left"
              style={{ background: `linear-gradient(90deg, ${group.color}, transparent)` }}
            />
          </motion.div>
        ))}
      </div>

      {/* Proficiency bars */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-10 card-glass p-8"
      >
        <h3 className="font-semibold text-white mb-6 text-sm tracking-wide uppercase">Core Proficiency</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            { name: "LangChain / RAG Systems", level: 92 },
            { name: "Python & FastAPI", level: 90 },
            { name: "React.js & Frontend", level: 82 },
            { name: "HuggingFace / Transformers", level: 85 },
            { name: "Docker & Kubernetes", level: 75 },
            { name: "Node.js / Express", level: 80 },
          ].map((skill, i) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1.5">
                <span className="text-sm text-[#94A3B8]">{skill.name}</span>
                <span className="text-xs text-[#FEF08A] font-mono">{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-[#000000] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.08, ease: [0.4, 0, 0.2, 1] }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, #FACC15, #FEF08A)` }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
