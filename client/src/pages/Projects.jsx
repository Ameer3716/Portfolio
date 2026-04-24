import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

// Dynamically generate categories based on the projects to ensure no filters are missed
const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-extrabold text-white mb-2">My Projects</h1>
        <div className="section-divider" />
        <p className="text-muted mb-8 max-w-2xl">
          End-to-end systems built for real-world impact — from zero-cost RAG pipelines to autonomous AI agents.
        </p>
      </motion.div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${
              active === cat
                ? "bg-primary text-white border-primary"
                : "border-white/10 text-muted hover:border-primary/50 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </div>
  );
}
