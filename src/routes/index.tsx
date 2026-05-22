import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Github, Mail, Linkedin, Download, ExternalLink, Sun, Moon, Sparkles, Terminal,
  Brain, BarChart3, Database, Code2, Wrench, LineChart, Cpu, Bot, FileSpreadsheet,
  GitBranch, MapPin, GraduationCap, Award, Rocket, ArrowUpRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pranav Kumbhar — AI & Data Professional" },
      { name: "description", content: "Portfolio of Pranav Kumbhar — AI Engineer, ML Engineer & Aspiring Data Analyst. Building intelligent systems." },
    ],
  }),
});

// ─── DATA ───────────────────────────────────────────────────────────────
const ROLES = [
  "Pranav Kumbhar",
  "Aspiring AI Engineer",
  "Aspiring ML Engineer",
  "Aspiring Data Analyst",
  "Data Storyteller",
];

const PROJECTS = [
  {
    title: "LLM Agentic Q&A Application",
    category: "AI / LLM",
    description:
      "Hierarchical multi-agent pipeline (Research · Analysis · Editor) with RAG, self-reflection loops, and FastAPI deployment.",
    tools: ["Python", "LangChain", "LangGraph", "FAISS", "Gemini API", "FastAPI"],
    href: "https://github.com/PRANAVK1003/ai-chatbot",
    highlights: [
      "Plan-and-execute orchestration via LangChain + LangGraph",
      "RAG with FAISS vector store — grounded, low-hallucination answers",
      "Self-reflection feedback loops to score & refine LLM outputs",
      "FastAPI backend + Streamlit UI, end-to-end deployment",
    ],
    accent: "from-[oklch(0.7_0.24_275)] to-[oklch(0.78_0.22_295)]",
    metric: "Multi-Agent",
  },
  {
    title: "Qualifruit — Fruit Quality Classifier",
    category: "Computer Vision / ML",
    description:
      "CNN-based fruit quality & price-estimation system trained on 6,000+ images — Best Project Award at institute level.",
    tools: ["Python", "OpenCV", "CNN"],
    href: "https://github.com/PRANAVK1003/Qualifruit",
    highlights: [
      "92% test accuracy across 6,000+ labelled images",
      "End-to-end ML pipeline — preprocessing, augmentation, tuning",
      "+15% performance gain via systematic experimentation",
      "Best Project Award (Institute level)",
    ],
    accent: "from-[oklch(0.78_0.16_200)] to-[oklch(0.7_0.24_275)]",
    metric: "92% Acc",
  },
  {
    title: "SuperStore Sales Performance Dashboard",
    category: "BI / Analytics",
    description:
      "Multi-page interactive Power BI dashboard analyzing $3.93M across 22k+ orders, with forecasting and geo-spatial insights.",
    tools: ["Power BI", "DAX", "Excel", "Azure Maps"],
    href: "https://github.com/PRANAVK1003/superstore-sales-analysis",
    highlights: [
      "KPI cards + YoY trends (2019 vs 2020)",
      "Dynamic slicers across region, category & ship mode",
      "Sales forecasting page + Azure Maps geo analysis",
    ],
    accent: "from-[oklch(0.75_0.26_340)] to-[oklch(0.7_0.24_275)]",
    metric: "$3.93M",
  },
];

const SKILL_GROUPS = [
  { label: "Languages", icon: Code2, items: ["Python", "Java", "SQL"] },
  { label: "AI & Agentic Frameworks", icon: Bot, items: ["LangChain", "LangGraph", "LlamaIndex"] },
  { label: "LLM & GenAI", icon: Brain, items: ["Anthropic Claude", "OpenAI GPT", "Gemini API", "Prompt Engineering", "RAG"] },
  { label: "ML & Deep Learning", icon: Cpu, items: ["PyTorch", "Scikit-learn"] },
  { label: "Data Handling", icon: FileSpreadsheet, items: ["Pandas", "NumPy", "EDA", "Feature Engineering"] },
  { label: "Deployment", icon: Rocket, items: ["FastAPI", "REST APIs", "Streamlit"] },
  { label: "Cloud & Tools", icon: Wrench, items: ["AWS", "GCP Vertex AI", "Git", "GitHub", "Jupyter", "Colab"] },
  { label: "BI & Visualization", icon: BarChart3, items: ["Power BI", "DAX", "Excel", "Azure Maps", "Matplotlib"] },
];

const TIMELINE = [
  { year: "2025", title: "ML Specialization — Stanford / DeepLearning.AI", desc: "Completed Andrew Ng's Machine Learning Specialization.", icon: Award },
  { year: "2025", title: "ChatGPT Prompt Engineering — DeepLearning.AI", desc: "Advanced prompt engineering for LLM-powered apps.", icon: Award },
  { year: "2025", title: "B.Tech AI & Data Science — DKTE", desc: "Graduating May 2025 · CGPA 7.3 · Coursework in ML, DL, CV, NLP.", icon: GraduationCap },
  { year: "2024", title: "SuperStore BI Dashboard", desc: "Shipped a multi-page Power BI dashboard — $3.93M sales, 22k+ orders.", icon: BarChart3 },
  { year: "2024", title: "LLM Agentic Q&A Application", desc: "Built a multi-agent RAG pipeline with LangChain, LangGraph & FastAPI.", icon: Bot },
  { year: "2024", title: "Qualifruit CV Classifier", desc: "CNN reaching 92% accuracy on 6k+ images — Best Project Award.", icon: Cpu },
];

const TERMINAL_CMDS = [
  { cmd: "whoami", out: "pranav.kumbhar — AI & Data Professional" },
  { cmd: "cat about.md", out: "Builder of intelligent systems. Curious about data, models, and the stories they tell." },
  { cmd: "ls projects/", out: "llm-agentic-qa/  qualifruit/  superstore-dashboard/" },
  { cmd: "echo $STACK", out: "Python · SQL · Power BI · LangChain · PyTorch" },
  { cmd: "open contact", out: "→ Opening email & LinkedIn…" },
];

// ─── THEME ──────────────────────────────────────────────────────────────
function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    const initial = (localStorage.getItem("theme") as "light" | "dark") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };
  return { theme, toggle };
}

// ─── COMPONENTS ─────────────────────────────────────────────────────────
function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let rx = 0, ry = 0, x = 0, y = 0;
    const onMove = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      if (dot.current) { dot.current.style.left = x + "px"; dot.current.style.top = y + "px"; }
    };
    const tick = () => {
      rx += (x - rx) * 0.18; ry += (y - ry) * 0.18;
      if (ring.current) { ring.current.style.left = rx + "px"; ring.current.style.top = ry + "px"; }
      raf = requestAnimationFrame(tick);
    };
    let raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", onMove); };
  }, []);
  return (<><div ref={ring} className="cursor-ring hidden md:block" /><div ref={dot} className="cursor-dot hidden md:block" /></>);
}

function BootScreen({ onDone }: { onDone: () => void }) {
  const lines = ["> Initializing AI Systems…", "> Loading neural modules…", "> Synchronizing data streams…", "> Ready."];
  const [i, setI] = useState(0);
  useEffect(() => {
    if (i >= lines.length) { const t = setTimeout(onDone, 400); return () => clearTimeout(t); }
    const t = setTimeout(() => setI(i + 1), 380);
    return () => clearTimeout(t);
  }, [i]);
  return (
    <motion.div
      initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-mesh" />
      <div className="relative font-mono text-sm sm:text-base">
        {lines.slice(0, i).map((l, idx) => (
          <div key={idx} className="text-primary">{l}</div>
        ))}
        {i < lines.length && <div className="text-primary">{lines[i]}<span className="animate-blink">▍</span></div>}
      </div>
    </motion.div>
  );
}

function Particles() {
  const dots = Array.from({ length: 30 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => (
        <span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-primary/40 animate-float-slow"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            animationDelay: `${(i % 10) * 0.7}s`,
            animationDuration: `${8 + (i % 6) * 2}s`,
          }}
        />
      ))}
    </div>
  );
}

function RotatingRole() {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = ROLES[index];
    const speed = deleting ? 40 : 95;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, display.length + 1);
        setDisplay(next);
        if (next === current) setTimeout(() => setDeleting(true), 1500);
      } else {
        const next = current.slice(0, display.length - 1);
        setDisplay(next);
        if (next === "") { setDeleting(false); setIndex((i) => (i + 1) % ROLES.length); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [display, deleting, index]);
  return (
    <span className="text-gradient neon-text">
      {display}<span className="ml-1 inline-block w-[3px] animate-blink bg-primary align-middle" style={{ height: "0.85em" }} />
    </span>
  );
}

function ThemeToggle({ theme, toggle }: { theme: string; toggle: () => void }) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="glass relative grid h-9 w-9 place-items-center rounded-full transition-transform hover:scale-110"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="text-primary"
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

function Navbar({ theme, toggle, active }: { theme: string; toggle: () => void; active: string }) {
  const links = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "terminal", label: "Console" },
    { id: "timeline", label: "Journey" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <header className="fixed inset-x-0 top-3 z-50 mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
      <div className="glass flex w-full items-center justify-between rounded-full px-4 py-2.5 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--gradient-primary)] text-xs font-bold text-white">PK</span>
          <span className="hidden text-sm font-semibold sm:inline">Pranav Kumbhar</span>
        </a>
        <nav className="hidden gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`relative rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                active === l.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {active === l.id && (
                <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-primary/10" transition={{ type: "spring", stiffness: 350, damping: 30 }} />
              )}
              <span className="relative">{l.label}</span>
            </a>
          ))}
        </nav>
        <ThemeToggle theme={theme} toggle={toggle} />
      </div>
    </header>
  );
}

function MagneticButton({ children, href, primary, download }: { children: React.ReactNode; href: string; primary?: boolean; download?: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.15}px, ${y * 0.25}px)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = "translate(0,0)"; };
  const base = "group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";
  const style = primary
    ? `${base} bg-[var(--gradient-primary)] text-white shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)]`
    : `${base} glass text-foreground hover:border-primary/40`;
  return (
    <a
      ref={ref}
      href={href}
      {...(download ? { download: true } : {})}
      {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={style}
      style={{ willChange: "transform" }}
    >
      {children}
    </a>
  );
}

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative mx-auto max-w-6xl px-6 py-20 sm:py-28 ${className}`}
    >
      {children}
    </motion.section>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">// {kicker}</p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
    </div>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 80]);
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 bg-mesh" />
      <Particles />
      <motion.div style={{ y }} className="pointer-events-none absolute -top-32 -right-20 h-[480px] w-[480px] rounded-full bg-primary/30 blur-[120px]" />
      <motion.div style={{ y }} className="pointer-events-none absolute bottom-0 -left-20 h-[420px] w-[420px] rounded-full bg-[var(--accent-cyan)]/25 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium"
        >
          <span className="relative flex h-2 w-2"><span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-60" /><span className="relative h-2 w-2 rounded-full bg-primary" /></span>
          <span className="text-muted-foreground">Available for opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl"
        >
          Hi, I am<br />
          <RotatingRole />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          AI & Data Professional building intelligent systems — from LLM agents and
          computer-vision pipelines to BI dashboards that turn raw data into decisions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="#projects" primary>
            <Rocket size={16} /> View Projects
          </MagneticButton>
          <MagneticButton href="/resume.pdf">
            <ExternalLink size={16} /> View Resume
          </MagneticButton>
          <MagneticButton href="/resume.pdf" download>
            <Download size={16} /> Download
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about">
      <SectionTitle kicker="About" title="Building intelligent systems with curiosity & craft." />
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4 text-lg leading-relaxed text-muted-foreground">
          <p>
            I work at the intersection of <span className="text-foreground font-medium">AI, machine learning, and analytics</span> — designing
            systems that don't just process data, but reason about it. From LLM agents that retrieve and answer,
            to computer-vision models that grade quality, to BI dashboards that drive decisions.
          </p>
          <p>
            I care about <span className="text-foreground font-medium">clean problem framing</span>, honest metrics, and the
            story the data is trying to tell. I'm currently sharpening my craft as an aspiring AI engineer and looking
            for teams building genuinely useful intelligent products.
          </p>
        </div>
        <div className="glass rounded-2xl p-6">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Currently</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3"><Brain size={16} className="mt-0.5 text-primary" /><span>Exploring agentic LLM workflows</span></li>
            <li className="flex gap-3"><BarChart3 size={16} className="mt-0.5 text-primary" /><span>Shipping BI dashboards in Power BI</span></li>
            <li className="flex gap-3"><GitBranch size={16} className="mt-0.5 text-primary" /><span>Open to AI / ML / Data roles</span></li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills">
      <SectionTitle kicker="Skills" title="A modern AI & data toolkit." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((g, i) => (
          <motion.div
            key={g.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="glass group relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
          >
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[var(--gradient-primary)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30" />
            <div className="relative flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                <g.icon size={18} />
              </span>
              <h3 className="font-display text-lg font-semibold">{g.label}</h3>
            </div>
            <div className="relative mt-5 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span key={item} className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-foreground">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const cats = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  return (
    <Section id="projects">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">// Projects</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Selected work.</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                filter === c ? "bg-[var(--gradient-primary)] text-white shadow-[var(--shadow-glow)]" : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.a
              key={p.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group glass relative flex flex-col overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-[0.08]`} />
              <div className="relative flex items-start justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary">{p.category}</span>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-tight">{p.title}</h3>
                </div>
                <span className={`rounded-lg bg-gradient-to-br ${p.accent} px-2.5 py-1 text-[10px] font-bold text-white`}>{p.metric}</span>
              </div>
              <p className="relative mt-3 text-sm text-muted-foreground">{p.description}</p>
              <ul className="relative mt-4 space-y-1.5 text-xs text-muted-foreground">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2"><span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" /><span>{h}</span></li>
                ))}
              </ul>
              <div className="relative mt-5 flex flex-wrap gap-1.5">
                {p.tools.map((t) => (
                  <span key={t} className="rounded-md border border-primary/15 bg-primary/5 px-2 py-0.5 text-[10px] font-medium text-primary">{t}</span>
                ))}
              </div>
              <div className="relative mt-5 flex items-center justify-between border-t border-border/60 pt-4 text-xs">
                <span className="inline-flex items-center gap-1.5 font-medium text-muted-foreground"><Github size={13} /> View on GitHub</span>
                <ArrowUpRight size={16} className="text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}

function TerminalSection() {
  const [shown, setShown] = useState<number[]>([]);
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting && shown.length === 0) setShown([0]); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (shown.length === 0 || shown.length >= TERMINAL_CMDS.length) return;
    const t = setTimeout(() => setShown((s) => [...s, s.length]), 900);
    return () => clearTimeout(t);
  }, [shown]);
  const run = (i: number) => { setActive(i); setShown(Array.from({ length: i + 1 }, (_, k) => k)); };
  return (
    <Section id="terminal">
      <SectionTitle kicker="Console" title="Try the command line." />
      <div ref={ref} className="glass overflow-hidden rounded-2xl border border-primary/20">
        <div className="flex items-center gap-2 border-b border-border/60 bg-background/40 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[oklch(0.7_0.2_25)]" />
          <span className="h-3 w-3 rounded-full bg-[oklch(0.85_0.18_85)]" />
          <span className="h-3 w-3 rounded-full bg-[oklch(0.75_0.18_145)]" />
          <span className="ml-3 flex items-center gap-1.5 font-mono text-xs text-muted-foreground"><Terminal size={12} /> pranav@portfolio:~</span>
        </div>
        <div className="grid gap-0 md:grid-cols-[1fr_220px]">
          <div className="min-h-[280px] p-5 font-mono text-sm">
            {shown.map((i) => (
              <div key={i} className="mb-3">
                <div className="text-primary">$ <span className="text-foreground">{TERMINAL_CMDS[i].cmd}</span></div>
                <div className="mt-1 pl-3 text-muted-foreground">{TERMINAL_CMDS[i].out}</div>
              </div>
            ))}
            <div className="text-primary">$ <span className="animate-blink">▍</span></div>
          </div>
          <div className="border-l border-border/60 bg-background/30 p-4">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Commands</p>
            <div className="flex flex-col gap-1.5">
              {TERMINAL_CMDS.map((c, i) => (
                <button
                  key={c.cmd}
                  onClick={() => run(i)}
                  className={`rounded-md px-2.5 py-1.5 text-left font-mono text-xs transition-colors ${
                    active === i ? "bg-primary/15 text-primary" : "text-muted-foreground hover:bg-primary/5 hover:text-foreground"
                  }`}
                >
                  {c.cmd}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Timeline() {
  return (
    <Section id="timeline">
      <SectionTitle kicker="Journey" title="Milestones along the way." />
      <div className="relative">
        <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:left-1/2 md:-translate-x-1/2" />
        <div className="space-y-12">
          {TIMELINE.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex items-start gap-6 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}
            >
              <div className={`absolute top-1 grid h-7 w-7 place-items-center rounded-full bg-[var(--gradient-primary)] text-white shadow-[var(--shadow-glow)] left-0 md:left-auto ${i % 2 === 0 ? "md:-right-3.5" : "md:-left-3.5"}`}>
                <t.icon size={14} />
              </div>
              <div className="glass ml-12 flex-1 rounded-2xl p-5 md:ml-0">
                <p className="font-mono text-[10px] uppercase tracking-widest text-primary">{t.year}</p>
                <h3 className="mt-1 font-display text-lg font-semibold">{t.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Stats() {
  const stats = [
    { v: "3+", l: "Shipped projects" },
    { v: "5", l: "AI / ML focus areas" },
    { v: "$3.9M", l: "Sales analyzed" },
    { v: "22k+", l: "Records processed" },
  ];
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="glass grid grid-cols-2 gap-4 rounded-2xl p-6 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="font-display text-2xl font-bold text-gradient sm:text-3xl">{s.v}</div>
            <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <Section id="contact">
      <SectionTitle kicker="Contact" title="Let's build something intelligent." />
      <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-12">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--gradient-primary)] opacity-20 blur-3xl animate-pulse-glow" />
        <p className="max-w-xl text-lg text-muted-foreground">
          Open to AI / ML engineering, data analyst, and intelligent-systems roles —
          plus freelance and interesting collaborations.
        </p>
        <div className="relative mt-8 flex flex-wrap gap-3">
          <MagneticButton href="mailto:pranavkumbhar102003@gmail.com" primary>
            <Mail size={16} /> pranavkumbhar102003@gmail.com
          </MagneticButton>
          <MagneticButton href="https://www.linkedin.com/in/pranavk007/">
            <Linkedin size={16} /> LinkedIn
          </MagneticButton>
          <MagneticButton href="https://github.com/PRANAVK1003">
            <Github size={16} /> GitHub
          </MagneticButton>
          <MagneticButton href="/resume.pdf" download>
            <Download size={16} /> Resume
          </MagneticButton>
        </div>
        <p className="relative mt-6 font-mono text-xs text-muted-foreground">
          <MapPin className="mr-1 inline" size={11} /> India · +91 7083512455 · Open to remote
        </p>
      </div>
    </Section>
  );
}

// ─── PAGE ───────────────────────────────────────────────────────────────
function Index() {
  const [booted, setBooted] = useState(false);
  const { theme, toggle } = useTheme();
  const [active, setActive] = useState("top");

  useEffect(() => {
    const ids = ["about", "skills", "projects", "terminal", "timeline", "contact"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [booted]);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <AnimatePresence>{!booted && <BootScreen onDone={() => setBooted(true)} />}</AnimatePresence>
      <CustomCursor />
      <Navbar theme={theme} toggle={toggle} active={active} />
      <main>
        <Hero />
        <About />
        <div className="my-10"><Stats /></div>
        <Skills />
        <Projects />
        <TerminalSection />
        <Timeline />
        <Contact />
      </main>
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Pranav Kumbhar — Built with intent.</span>
          <span className="font-mono text-xs">v2.0 · futuristic</span>
        </div>
      </footer>
    </div>
  );
}