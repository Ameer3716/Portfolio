const express = require("express");
const router  = express.Router();

// ── Mongoose model (optional – falls back to static data if DB not connected) ─
let Project;
try {
  const mongoose = require("mongoose");
  const projectSchema = new mongoose.Schema({
    id:          Number,
    title:       String,
    description: String,
    impact:      String,
    stack:       [String],
    category:    String,
    github:      String,
    live:        String,
    featured:    Boolean,
    icon:        String,
    badge:       String,
  });
  Project = mongoose.model("Project", projectSchema);
} catch (_) {}

// ── Static seed data (always available) ──────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    title: "Medical AI Assistant (RAG)",
    description:
      "Production RAG system indexing 4,000+ medical transcriptions for zero-cost CPU inference using TinyLlama, FAISS, and LangChain.",
    impact: "Zero API Cost · 4,000+ docs indexed · CPU-only",
    stack: ["TinyLlama 1.1B", "FAISS", "LangChain", "Streamlit", "Python"],
    category: "RAG System",
    github: "https://github.com/yourgithub/medical-ai-rag",
    live: null,
    featured: true,
    icon: "🏥",
  },
  {
    id: 2,
    title: "AI Legal Contract Analyzer",
    description:
      "Automated contract review trained on 510 real contracts. Cuts review from 3 hours to 5 minutes, enforces 15 compliance rules at 85% accuracy.",
    impact: "95% faster · 85% accuracy · $450 savings/review",
    stack: ["TinyLlama 1.1B", "FAISS", "LangChain", "Streamlit"],
    category: "NLP Automation",
    github: "https://github.com/yourgithub/legal-ai-analyzer",
    live: null,
    featured: true,
    icon: "⚖️",
  },
  {
    id: 3,
    title: "DocuBot — Code Documentation Generator",
    description:
      "NLP pipeline that auto-generates and injects docstrings into source code using BPE, Word2Vec, and Seq2Seq+Attention. Evaluated with BLEU & Perplexity.",
    impact: "Auto-injection · BLEU-4 evaluated · OOV reduction via BPE",
    stack: ["BPE", "Word2Vec", "Seq2Seq+Attention", "Python"],
    category: "NLP Pipeline",
    github: "https://github.com/yourgithub/docubot",
    live: null,
    featured: true,
    icon: "📝",
  },
  {
    id: 4,
    title: "Text Summarization System (T5)",
    description:
      "Fine-tuned T5-Base on 5,000+ CNN/DailyMail articles. Deployed on HuggingFace Hub + Streamlit Cloud. Supports beam search, temperature tuning, and length control.",
    impact: "ROUGE-L optimized · Streamlit deployed · 5K+ articles",
    stack: ["T5-Base", "HuggingFace Transformers", "Streamlit", "Kaggle GPU"],
    category: "NLP / Fine-tuning",
    github: "https://github.com/yourgithub/t5-summarizer",
    live: null,
    featured: false,
    icon: "📰",
  },
  {
    id: 5,
    title: "AI Recipe Generator (GPT-2)",
    description:
      "GPT-2 fine-tuned on 10,000+ curated recipes. Generates coherent cooking instructions using top-p sampling and repetition penalty.",
    impact: "10K+ recipe dataset · top-p sampling · HuggingFace deployed",
    stack: ["GPT-2", "HuggingFace", "Streamlit"],
    category: "Generative AI",
    github: "https://github.com/yourgithub/gpt2-recipe-generator",
    live: null,
    featured: false,
    icon: "🍳",
  },
  {
    id: 6,
    title: "PDF → Audiobook Converter",
    description:
      "Converts any PDF into a structured MP3 audiobook with chapter detection, 4 TTS engines, and loudness normalization.",
    impact: "4 TTS engines · Chapter detection · Offline capable",
    stack: ["Python", "Streamlit", "Edge TTS", "Coqui XTTS v2", "pydub"],
    category: "Automation Tool",
    github: "https://github.com/yourgithub/pdf-audiobook",
    live: null,
    featured: false,
    icon: "🎧",
  },
];

// ── GET /projects ─────────────────────────────────────────────────────────────
router.get("/", async (req, res) => {
  try {
    const { category, featured } = req.query;
    let data = PROJECTS;

    if (category && category !== "All") {
      data = data.filter((p) => p.category === category);
    }
    if (featured === "true") {
      data = data.filter((p) => p.featured);
    }

    // Optionally try DB
    if (Project) {
      const dbCount = await Project.countDocuments();
      if (dbCount > 0) {
        const query = {};
        if (category && category !== "All") query.category = category;
        if (featured === "true") query.featured = true;
        data = await Project.find(query);
      }
    }

    res.json({ success: true, count: data.length, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ── GET /projects/:id ─────────────────────────────────────────────────────────
router.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) return res.status(404).json({ success: false, message: "Project not found" });
  res.json({ success: true, data: project });
});

module.exports = router;
