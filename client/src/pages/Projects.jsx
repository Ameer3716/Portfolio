import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="section-label">My work</p>
        <h1 className="font-display text-5xl font-bold text-white mb-2">
          All <span className="gradient-text">Projects</span>
        </h1>
        <div className="section-divider" />
        <p className="text-[#94A3B8] mb-10 max-w-2xl">
          End-to-end systems built for real-world impact — from zero-cost RAG pipelines to autonomous AI agents.
          <span className="text-[#A5B4FC] ml-2 font-mono text-sm">{projects.length} total</span>
        </p>
      </motion.div>

      {/* Filter tabs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="flex flex-wrap gap-2 mb-10"
      >
        {categories.map((cat) => {
          const count = cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length;
          return (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`relative text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all duration-200 flex items-center gap-1.5 ${
                active === cat
                  ? "bg-[#6366F1] text-white border-[#6366F1] shadow-lg shadow-[#6366F1]/30"
                  : "border-white/10 text-[#94A3B8] hover:border-[#6366F1]/40 hover:text-white"
              }`}
            >
              {cat}
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  active === cat ? "bg-white/20 text-white" : "bg-white/5 text-[#94A3B8]"
                }`}
              >
                {count}
              </span>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Results count */}
      <motion.p
        key={active}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-xs text-[#94A3B8] font-mono mb-6"
      >
        Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""} in{" "}
        <span className="text-[#A5B4FC]">{active}</span>
      </motion.p>

      {/* Project grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
            >
              <ProjectCard project={p} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
