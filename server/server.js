require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const projectsRouter = require("./routes/projects");
const contactRouter  = require("./routes/contact");
const aiDemoRouter   = require("./routes/aiDemo");

const app = express();

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:3000" }));
app.use(express.json());

// ── Routes ────────────────────────────────────────────────────────────────────
app.use("/projects", projectsRouter);
app.use("/contact",  contactRouter);
app.use("/ai-demo",  aiDemoRouter);

// ── Health check ──────────────────────────────────────────────────────────────
app.get("/health", (_req, res) => res.json({ status: "ok", timestamp: new Date().toISOString() }));

// ── MongoDB Connection ────────────────────────────────────────────────────────
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/ai_portfolio";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✔️  MongoDB connected"))
  .catch((err) => console.warn("⚠️  MongoDB not connected (running without DB):", err.message));

// ── Start ─────────────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`  Server running on http://localhost:${PORT}`));
