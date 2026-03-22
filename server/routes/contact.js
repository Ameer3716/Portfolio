const express  = require("express");
const router   = express.Router();

// ── Mongoose model ────────────────────────────────────────────────────────────
let ContactMessage;
try {
  const mongoose = require("mongoose");
  const contactSchema = new mongoose.Schema(
    {
      name:    { type: String, required: true, trim: true },
      email:   { type: String, required: true, trim: true, lowercase: true },
      message: { type: String, required: true },
      read:    { type: Boolean, default: false },
    },
    { timestamps: true }
  );
  ContactMessage = mongoose.model("ContactMessage", contactSchema);
} catch (_) {}

// ── Input validation ──────────────────────────────────────────────────────────
function validateContact({ name, email, message }) {
  const errors = [];
  if (!name || name.trim().length < 2)      errors.push("Name must be at least 2 characters.");
  if (!email || !/\S+@\S+\.\S+/.test(email)) errors.push("Valid email is required.");
  if (!message || message.trim().length < 10) errors.push("Message must be at least 10 characters.");
  return errors;
}

// ── POST /contact ─────────────────────────────────────────────────────────────
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  const errors = validateContact({ name, email, message });
  if (errors.length > 0) return res.status(400).json({ success: false, errors });

  try {
    // Save to DB if available
    if (ContactMessage) {
      await ContactMessage.create({ name, email, message });
    }

const nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },     
    });
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    res.status(201).json({
      success: true,
      message: "Message received! I'll respond within 24 hours.",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ── GET /contact (admin — fetch all messages) ─────────────────────────────────
router.get("/", async (req, res) => {
  try {
    if (!ContactMessage) return res.json({ success: true, data: [] });
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json({ success: true, count: messages.length, data: messages });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
