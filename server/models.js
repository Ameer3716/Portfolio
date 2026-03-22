/**
 * MongoDB Schemas Reference
 * ─────────────────────────
 * All three collections used in the AI Portfolio backend.
 * Import and use in your route files as needed.
 */

const mongoose = require("mongoose");

// ── 1. Project ────────────────────────────────────────────────────────────────
const projectSchema = new mongoose.Schema(
  {
    id:          { type: Number, required: true, unique: true },
    title:       { type: String, required: true },
    description: { type: String, required: true },
    impact:      { type: String },
    stack:       [{ type: String }],
    category:    { type: String, enum: ["RAG System", "NLP Automation", "NLP Pipeline",
                    "Generative AI", "Automation Tool", "AI Agents", "DevOps AI"] },
    github:      { type: String },
    live:        { type: String },
    featured:    { type: Boolean, default: false },
    icon:        { type: String },
    badge:       { type: String },          // e.g. "Coming Soon"
    order:       { type: Number, default: 0 },
  },
  { timestamps: true }
);

// ── 2. ContactMessage ─────────────────────────────────────────────────────────
const contactSchema = new mongoose.Schema(
  {
    name:    { type: String, required: true, trim: true },
    email:   { type: String, required: true, trim: true, lowercase: true },
    message: { type: String, required: true },
    read:    { type: Boolean, default: false },
    replied: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// ── 3. AIDemo Log (optional — audit trail) ────────────────────────────────────
const aiDemoLogSchema = new mongoose.Schema(
  {
    task:       { type: String, enum: ["summarize", "rag", "classify"], required: true },
    input:      { type: String, required: true },
    output:     { type: mongoose.Schema.Types.Mixed },
    latency_ms: { type: Number },
    ip:         { type: String },
  },
  { timestamps: true }
);

module.exports = {
  Project:      mongoose.model("Project",      projectSchema),
  ContactMessage: mongoose.model("ContactMessage", contactSchema),
  AIDemoLog:    mongoose.model("AIDemoLog",    aiDemoLogSchema),
};
