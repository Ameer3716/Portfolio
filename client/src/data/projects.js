const projects = [
  {
    id: 1,
    title: "Instagram AI Chatbot Backend",
    description:
      "A production-ready Instagram DM automation backend that integrates OpenAI's GPT-4o-mini to generate human-like conversational responses. Features real-time webhook processing, smart typing delay simulation, and session memory.",
    impact: "FastAPI + async Python · Smart typing delay · GPT-4o-mini",
    stack: ["Python", "FastAPI", "OpenAI GPT-4o-mini", "Instagram API", "asyncio"],
    category: "Backend",
    github: "https://github.com/Ameer3716/instagram-ai-chatbot",
    live: "#",
    featured: true,
    icon: "💬",
  },
  {
    id: 2,
    title: "SoulNest — Spiritual Grief Companion App",
    description:
      "A faith-based mobile application designed to support individuals navigating grief. Combines journaling, community prayer walls, scripture reflection, guided meditations, and a companion matching system.",
    impact: "Grief companion matching · Community prayer wall · Daily devotionals",
    stack: ["Flutter", "Firebase", "Cloud Functions", "Firestore"],
    category: "Mobile App",
    github: "https://github.com/Ameer3716/soulnest",
    live: "#",
    featured: true,
    icon: "🕊️",
  },
  {
    id: 3,
    title: "Universal Viseme System — Audio-to-Animation SDK",
    description:
      "A browser-based SDK that converts audio input into real-time 2D avatar lip-sync animations. Uses Web Audio API and FFT frequency analysis to map 15 viseme types to mouth shapes with coarticulation modeling.",
    impact: "Real-time FFT analysis · 15-viseme support · Coarticulation",
    stack: ["TypeScript", "React", "Web Audio API", "Canvas/SVG"],
    category: "Frontend",
    github: "https://github.com/Ameer3716/universal-viseme-system",
    live: "#",
    featured: true,
    icon: "🗣️",
  },
  {
    id: 4,
    title: "AgriConnect — Agricultural Management Platform",
    description:
      "A full-stack agricultural management platform connecting farmers with buyers. Uses a microservices architecture with role-based access, financial tracking, Redis caching, and a full shopping marketplace.",
    impact: "Microservices architecture · Redis caching · JWT + OAuth",
    stack: ["React", "Node.js", "MongoDB", "MySQL", "Redis", "Docker"],
    category: "Full Stack",
    github: "https://github.com/Ameer3716/agriconnect",
    live: "#",
    featured: true,
    icon: "🌾",
  },
  {
    id: 5,
    title: "Agents Boardroom — Premium Community App",
    description:
      "A premium mobile community platform for UK estate agents featuring a tiered membership model. Includes Stripe subscription integration, a points-based reputation system, and glassmorphism UI components.",
    impact: "Stripe Subscriptions · £500/mo Tier · Role-based access",
    stack: ["Flutter", "Firebase", "Riverpod", "GoRouter", "Stripe"],
    category: "Mobile App",
    github: "https://github.com/Ameer3716/agents-boardroom",
    live: "#",
    featured: true,
    icon: "🏢",
  },
  // ── PREVIOUS PROJECTS ────────────────────────────────────────────────────
  {
    id: 6,
    title: "Medical AI Assistant (RAG)",
    description:
      "Production RAG system that indexes 4,000+ medical transcriptions and delivers sub-second contextual answers using FAISS vector retrieval and LangChain orchestration — zero API cost, fully on-device.",
    impact: "Zero API Cost · 4,000+ docs indexed · CPU-only inference",
    stack: ["TinyLlama 1.1B", "FAISS", "LangChain", "Streamlit", "Python"],
    category: "AI",
    github: "https://github.com/Ameer3716/medical-ai-rag",
    live: "#",
    featured: false,
    icon: "🩺",
  },
  {
    id: 7,
    title: "AI Legal Contract Analyzer",
    description:
      "Automated contract review system trained on 510 real contracts. Enforces 15 compliance rules, generates explainable verdicts, and slashes review time from 3 hours to 5 minutes.",
    impact: "95% faster · 85% accuracy · $450 cost savings per review",
    stack: ["TinyLlama 1.1B", "FAISS", "LangChain", "Streamlit", "Python"],
    category: "AI",
    github: "https://github.com/Ameer3716/legal-ai-analyzer",
    live: "#",
    featured: false,
    icon: "⚖",
  }
];

export default projects;
