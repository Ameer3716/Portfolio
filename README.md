# 🤖 AI Developer Portfolio — MERN Stack

**Built for:** ClickTake Technologies AI Developer Internship Application

---

## 📁 Structure

```
portfolio/
├── client/          # React + Tailwind frontend
│   ├── public/
│   └── src/
│       ├── components/   # Navbar, Footer, ProjectCard, SkillsSection
│       ├── pages/        # Home, Projects, About, Contact
│       └── data/         # projects.js (all 9 projects + 3 bonus)
└── server/          # Node.js + Express backend
    ├── routes/           # projects.js, contact.js, aiDemo.js
    ├── models.js         # MongoDB schemas
    ├── server.js         # Entry point
    └── .env.example      # Environment variables template
```

---

## 🚀 Quick Start

### 1. Backend
```bash
cd server
npm install
cp .env.example .env        # fill in your values
npm run dev                 # starts on http://localhost:5000
```

### 2. Frontend
```bash
cd client
npm install
npm start                   # starts on http://localhost:3000
```

### 3. MongoDB (optional)
- **Local:** Install MongoDB Community, the server auto-connects
- **Atlas:** Set `MONGO_URI` in `.env` to your connection string
- *The portfolio works without MongoDB — static data is used as fallback*

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/projects` | All projects (supports `?category=RAG System&featured=true`) |
| GET | `/projects/:id` | Single project |
| POST | `/contact` | Submit contact form |
| GET | `/ai-demo` | Available AI tasks |
| POST | `/ai-demo` | Run AI demo (`{ task, input }`) |
| GET | `/health` | Server health check |

### AI Demo Example
```bash
curl -X POST http://localhost:5000/ai-demo \
  -H "Content-Type: application/json" \
  -d '{"task": "rag", "input": "What causes hypertension?"}'
```

---

## 🎨 Customisation Checklist

Before submitting your application, update these placeholders:

- [ ] `[YOUR NAME]` → your real name (in `Home.jsx`, `About.jsx`, `Navbar.jsx`)
- [ ] `your.email@gmail.com` → your email
- [ ] `yourgithub` → your GitHub username
- [ ] `yourlinkedin` → your LinkedIn
- [ ] `yourusername` → your Medium handle
- [ ] GitHub repo links in `projects.js`
- [ ] Add your real photo to `client/public/` and reference it in `About.jsx`

---

## 🧠 Bonus Projects (Planned)

| Project | Tech | Status |
|---------|------|--------|
| Multi-Agent Research Assistant | LangGraph, LangChain, FastAPI | Coming Soon |
| AI Code Review Bot | GitHub API, LangChain, Docker | Coming Soon |
| Agentic Data Analyst | ReAct Agent, Pandas, Plotly | Coming Soon |

---

## 🚢 Deployment

| Service | What |
|---------|------|
| **Vercel** | React frontend (`cd client && vercel`) |
| **Railway / Render** | Express backend |
| **MongoDB Atlas** | Free M0 cluster |
| **HuggingFace Spaces** | AI model demos |

---

*Portfolio by [YOUR NAME] — AI Developer · FAST-NUCES CFD · Pakistan*
