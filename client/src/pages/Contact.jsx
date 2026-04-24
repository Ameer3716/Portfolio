import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiSend, FiArrowRight } from "react-icons/fi";
import { BsMedium } from "react-icons/bs";
import axios from "axios";

const SOCIALS = [
  { href: "mailto:ameersultan0310@gmail.com", icon: <FiMail />, label: "Email", value: "ameersultan0310@gmail.com" },
  { href: "https://github.com/Ameer3716", icon: <FiGithub />, label: "GitHub", value: "github.com/Ameer3716" },
  { href: "https://medium.com/@ameersultan0310", icon: <BsMedium />, label: "Medium", value: "medium.com/@ameersultan0310" },
];

function FloatingInput({ label, type = "text", value, onChange, placeholder, required }) {
  const [focused, setFocused] = useState(false);
  const active = focused || value;

  return (
    <div className="relative">
      <label
        className={`absolute left-4 transition-all duration-200 pointer-events-none z-10 ${
          active
            ? "top-2 text-[10px] text-[#A5B4FC] font-mono tracking-wider"
            : "top-1/2 -translate-y-1/2 text-sm text-[#94A3B8]"
        }`}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={active ? placeholder : ""}
        required={required}
        className="w-full bg-[#0F172A] border border-white/10 rounded-xl px-4 pt-6 pb-2.5 text-white text-sm focus:outline-none focus:border-[#6366F1]/60 transition-all duration-200 placeholder-[#94A3B8]/30"
      />
      {active && (
        <motion.div
          layoutId={`underline-${label}`}
          className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-xl bg-gradient-to-r from-[#6366F1] to-[#A5B4FC]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: focused ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </div>
  );
}

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

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 max-w-5xl mx-auto">
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-14">
          <p className="section-label">Let's connect</p>
          <h1 className="font-display text-5xl font-bold text-white mb-2">
            Get In <span className="gradient-text-animate">Touch</span>
          </h1>
          <div className="section-divider" />
          <p className="text-[#94A3B8] max-w-lg mt-2">
            Open to AI Developer roles, internships, and collaborations. I respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div variants={itemVariants} className="md:col-span-3">
            <form onSubmit={handleSubmit} className="card-glass p-8 space-y-5">
              <FloatingInput
                label="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Ameer Sultan"
                required
              />
              <FloatingInput
                label="Email Address"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                required
              />

              {/* Textarea */}
              <div className="relative">
                <label
                  className={`absolute left-4 transition-all duration-200 pointer-events-none z-10 ${
                    form.message
                      ? "top-2 text-[10px] text-[#A5B4FC] font-mono tracking-wider"
                      : "top-4 text-sm text-[#94A3B8]"
                  }`}
                >
                  Message
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="w-full bg-[#0F172A] border border-white/10 rounded-xl px-4 pt-7 pb-3 text-white text-sm focus:outline-none focus:border-[#6366F1]/60 transition-all duration-200 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full justify-center disabled:opacity-50"
              >
                {status === "sending" ? (
                  <>Sending<span className="typing-cursor" /></>
                ) : (
                  <><FiSend /> Send Message</>
                )}
              </motion.button>

              {status === "sent" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm text-center flex items-center justify-center gap-2"
                >
                  ✅ Message sent! I'll reply within 24 hours.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm text-center"
                >
                  ⚠️ Failed to send. Email me directly below.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Right side info */}
          <motion.div variants={itemVariants} className="md:col-span-2 space-y-5">
            {/* Availability */}
            <div className="card-glass p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="available-dot" />
                <span className="font-semibold text-white text-sm">Currently Available</span>
              </div>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                Open to full-time AI developer roles, internships, and freelance projects. Remote-friendly and ready to start immediately.
              </p>
            </div>

            {/* Social links */}
            <div className="card-glass p-6">
              <h3 className="font-semibold text-white mb-4 text-sm">Contact Links</h3>
              <div className="space-y-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-3 py-2.5 px-3.5 rounded-xl bg-[#0F172A]/60 border border-white/5 text-[#94A3B8] hover:text-[#A5B4FC] hover:border-[#6366F1]/30 transition-all duration-200 group"
                  >
                    <span className="text-[#6366F1]">{s.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] text-[#6366F1] font-mono">{s.label}</p>
                      <p className="text-xs truncate">{s.value}</p>
                    </div>
                    <FiArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div className="card-glass p-6">
              <h3 className="font-semibold text-white mb-3 text-sm">What to expect</h3>
              <ul className="space-y-2.5">
                {["Response within 24 hours", "Open to async communication", "Can start immediately", "Remote-first preferred"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <span className="text-[#6366F1] text-xs">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
