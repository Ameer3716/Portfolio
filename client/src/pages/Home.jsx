import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiGithub, FiMail, FiDownload, FiTerminal, FiZap, FiDatabase, FiCloud } from "react-icons/fi";
import SkillsSection from "../components/SkillsSection";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

const ROLES = [
  "AI Engineer",
  "RAG Systems Engineer",
  "NLP Pipeline Builder",
  "LangChain Developer",
  "Automation Specialist",
];

const STATS = [
  { value: "20+", label: "Total Projects Shipped", icon: <FiTerminal /> },
  { value: "95%", label: "Task Time Saved via AI", icon: <FiZap /> },
  { value: "15K+", label: "Dataset Samples Trained", icon: <FiDatabase /> },
  { value: "60+", label: "Cloud Resources Provisioned", icon: <FiCloud /> },
];

function Counter({ target }) {
  const [count, setCount] = useState(0);
  const numTarget = parseFloat(target.replace(/[^0-9.]/g, ""));
  const suffix = target.replace(/[0-9.]/g, "");

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const step = numTarget / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= numTarget) { setCount(numTarget); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [numTarget]);

  return <span>{suffix === "$" ? `$${count}` : `${count}${suffix}`}</span>;
}

export default function Home() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);
  const heroRef = useRef(null);

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);
  const heroY = useTransform(scrollY, [0, 400], [0, 60]);

  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2800);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true); }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const featured = projects.filter((p) => p.featured);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
  };

  return (
    <div className="min-h-screen">
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="min-h-screen flex flex-col justify-center px-6 pt-28 pb-16 max-w-6xl mx-auto relative overflow-hidden"
      >
        {/* Floating orbs */}
        <motion.div style={{ opacity: heroOpacity, y: heroY }}>
          <div
            className="orb"
            style={{
              width: 600, height: 600,
              background: "radial-gradient(circle, rgba(250, 204, 21,0.14) 0%, transparent 70%)",
              top: "10%", left: "50%", transform: "translateX(-50%)",
            }}
          />
          <div
            className="orb"
            style={{
              width: 300, height: 300,
              background: "radial-gradient(circle, rgba(253, 224, 71,0.1) 0%, transparent 70%)",
              bottom: "20%", right: "10%",
              animationDelay: "3s",
            }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          {/* Availability badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#111111]/80 border border-[#FACC15]/20 text-sm text-[#FEF08A]">
              <span className="available-dot" />
              <span className="font-mono text-xs tracking-wider">Available for Remote Work</span>
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-6xl md:text-8xl font-semibold text-white leading-none mb-4 tracking-tight"
          >
            Ameer Sultan
          </motion.h1>

          {/* Animated role */}
          <motion.div variants={itemVariants} className="h-12 md:h-14 mb-8 flex items-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIdx}
                initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-2xl md:text-3xl font-semibold gradient-text font-display"
              >
                {ROLES[roleIdx]}
              </motion.p>
            </AnimatePresence>
            <span className="typing-cursor ml-1" />
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-[#94A3B8] text-lg max-w-2xl mb-10 leading-relaxed">
            I am passionate about turning complex problems into intelligent, scalable solutions — whether that means fine-tuning language models, architecting cloud-native pipelines, or shipping full-stack applications from backend to mobile. I thrive at the intersection of AI research and real-world engineering, where ideas meet production.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            <Link to="/projects" className="btn-primary">
              View Projects <FiArrowRight />
            </Link>
            <a
              href="https://github.com/Ameer3716"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              <FiGithub /> GitHub
            </a>
            <Link to="/contact" className="btn-outline">
              <FiMail /> Hire Me
            </Link>
            <a href="/AI_Developer_CV.pdf" download className="btn-outline">
              <FiDownload /> CV
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[#94A3B8] text-xs font-mono tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-0.5 h-8 rounded-full bg-gradient-to-b from-[#FACC15] to-transparent"
          />
        </motion.div>
      </section>

      {/* ── STATS ───────────────────────────────────────────────── */}
      <section ref={statsRef} className="py-6 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="stat-card"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <p className="text-3xl font-bold gradient-text font-display mb-1">
                {statsVisible ? <Counter target={stat.value} /> : stat.value}
              </p>
              <p className="text-xs text-[#94A3B8] leading-snug">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SKILLS ──────────────────────────────────────────────── */}
      <SkillsSection />

      {/* ── FEATURED PROJECTS ───────────────────────────────────── */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <p className="section-label">Selected work</p>
            <h2 className="font-display text-4xl font-bold text-white">Featured Projects</h2>
            <div className="section-divider" />
          </div>
          <Link
            to="/projects"
            className="hidden md:flex items-center gap-2 text-sm text-[#FEF08A] hover:text-white transition-colors group"
          >
            View all 20+
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center md:hidden"
        >
          <Link to="/projects" className="btn-outline">
            View all projects <FiArrowRight />
          </Link>
        </motion.div>
      </section>

      {/* ── CTA STRIP ───────────────────────────────────────────── */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden border border-[#FACC15]/20 p-10 md:p-16 text-center"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(250, 204, 21,0.15) 0%, rgba(15,23,42,0.8) 60%)" }}
        >
          <div className="orb" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(250, 204, 21,0.15) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
          <p className="section-label justify-center">Open to opportunities</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">Let's Build Something Together</h2>
          <p className="text-[#94A3B8] max-w-lg mx-auto mb-8">
            Looking for AI developer roles, internships, and freelance collaborations. I respond within 24 hours.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="btn-primary">
              Get In Touch <FiArrowRight />
            </Link>
            <a href="mailto:ameersultan0310@gmail.com" className="btn-outline">
              <FiMail /> ameersultan0310@gmail.com
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
