import React from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Machine Learning",
    icon: "💻",
    skills: ["LangChain", "HuggingFace", "TinyLlama", "T5", "GPT-2", "FAISS", "RAG", "Transformers", "Seq2Seq"],
  },
  {
    label: "Backend",
    icon: "🔌",
    skills: ["Python", "Node.js", "Express.js", "FastAPI", "REST APIs", "MongoDB"],
  },
  {
    label: "Frontend",
    icon: "🖥️",
    skills: ["React.js", "Tailwind CSS", "Framer Motion", "Streamlit"],
  },
  {
    label: "DevOps & Tools",
    icon: "☁️",
    skills: ["Git", "Docker", "HuggingFace Hub", "Streamlit Cloud", "Kaggle GPU"],
  },
];

export default function SkillsSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-white">Technical Arsenal</h2>
        <div className="section-divider" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.1 }}
            className="bg-surface rounded-2xl p-5 border border-white/5"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">{group.icon}</span>
              <span className="font-semibold text-white">{group.label}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((s) => (
                <span key={s} className="skill-badge">{s}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
