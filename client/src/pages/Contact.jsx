import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await axios.post("/contact", form);
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 max-w-2xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-extrabold text-white mb-2">Get In Touch</h1>
        <div className="section-divider" />
        <p className="text-muted mb-10">
          Open to AI Developer roles, internships, and collaborations. I respond within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="bg-surface rounded-2xl border border-white/5 p-8 space-y-5">
          {[
            { name: "name", label: "Name", type: "text", placeholder: "Your Name" },
            { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
          ].map((f) => (
            <div key={f.name}>
              <label className="block text-sm font-medium text-muted mb-1.5">{f.label}</label>
              <input
                type={f.type}
                value={form[f.name]}
                onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                placeholder={f.placeholder}
                required
                className="w-full bg-dark border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder-muted/50 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-muted mb-1.5">Message</label>
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="What are you working on?"
              required
              className="w-full bg-dark border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder-muted/50 focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-3 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-primary/80 transition-colors disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="text-green-400 text-sm text-center">✔️ Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm text-center">⚠️ Failed to send. Try emailing directly.</p>
          )}
        </form>

        <div className="mt-8 text-center text-sm text-muted">
          Or email directly:{" "}
          <a href="mailto:ameersultan0310@gmail.com" className="text-primary hover:underline">
            ameersultan0310@gmail.com
          </a>
        </div>
      </motion.div>
    </div>
  );
}
