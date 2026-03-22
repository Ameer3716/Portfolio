const express = require("express");
const router  = express.Router();

/**
 * POST /ai-demo
 * Mock AI inference endpoint — demonstrates API integration capability.
 * Replace the mock logic with real model calls (LangChain, HuggingFace, etc.)
 *
 * Body: { task: "summarize" | "rag" | "classify", input: string }
 */
router.post("/", async (req, res) => {
  const { task, input } = req.body;

  if (!task || !input) {
    return res.status(400).json({ success: false, message: "`task` and `input` are required." });
  }

  try {
    let result;
    const start = Date.now();

    switch (task) {
      case "summarize":
        // TODO: Replace with real T5 / HuggingFace Inference API call
        result = {
          task: "Text Summarization (T5-Base)",
          summary: `[MOCK] Summary of: "${input.slice(0, 80)}..." — T5 would generate a concise abstractive summary here.`,
          model: "t5-base (fine-tuned on CNN/DailyMail)",
          metrics: { rouge_l: 0.42 },
        };
        break;

      case "rag":
        // TODO: Replace with real FAISS + LangChain RAG call
        result = {
          task: "RAG Query (Medical / Legal)",
          answer: `[MOCK] Based on retrieved context: the answer to "${input.slice(0, 60)}..." is — TinyLlama + FAISS would return a grounded answer from the indexed corpus.`,
          model: "TinyLlama-1.1B + FAISS",
          retrieved_docs: 3,
          inference_cost: "$0.00",
        };
        break;

      case "classify":
        // TODO: Replace with real classification model
        const labels = ["positive", "negative", "neutral"];
        result = {
          task: "Text Classification",
          label: labels[Math.floor(Math.random() * labels.length)],
          confidence: (0.75 + Math.random() * 0.24).toFixed(3),
          model: "distilbert-base-uncased (mock)",
        };
        break;

      default:
        return res.status(400).json({
          success: false,
          message: `Unknown task "${task}". Use: summarize | rag | classify`,
        });
    }

    const latency_ms = Date.now() - start;

    res.json({
      success: true,
      task,
      latency_ms,
      data: result,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

/**
 * GET /ai-demo
 * Returns available demo tasks and usage instructions.
 */
router.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "AI Demo Endpoint — POST with { task, input }",
    available_tasks: {
      summarize: "Abstractive text summarization (T5-Base)",
      rag:       "Retrieval-augmented QA (TinyLlama + FAISS)",
      classify:  "Sentiment / intent classification",
    },
    example: {
      method: "POST",
      body: { task: "rag", input: "What are the symptoms of hypertension?" },
    },
  });
});

module.exports = router;
