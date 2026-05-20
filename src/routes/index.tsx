import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Github, Mail, Linkedin, Download, Database, FileSpreadsheet, Code2, BarChart3, LineChart, ArrowUpRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pranav Kumbhar — Aspiring Data Analyst" },
      { name: "description", content: "Portfolio of Pranav Kumbhar, an aspiring data analyst. Projects, skills, and contact." },
    ],
  }),
});

const projects = [
  {
    title: "Sales Dashboard",
    tools: ["Python", "Tableau"],
    description: "Analyzed 12 months of sales data to surface regional trends.",
    href: "https://github.com/yourusername/sales-dashboard",
  },
  {
    title: "Customer Churn Analysis",
    tools: ["SQL", "Python", "Power BI"],
    description: "Identified top churn drivers across 50k customer records.",
    href: "https://github.com/yourusername/churn-analysis",
  },
  {
    title: "SuperStore Sales Performance Dashboard",
    tools: ["Power BI", "DAX", "Excel", "Azure Maps"],
    description: "Multi-page Power BI dashboard analyzing $3.93M across 22k+ orders with forecasting and geo-spatial insights.",
    href: "https://github.com/yourusername/superstore-dashboard",
    highlights: [
      "KPI cards, YoY trends (2019 vs 2020), category breakdowns",
      "Dynamic slicers for region, category, ship & payment mode",
      "Sales forecasting page with time-series projections",
      "Azure Maps geo-spatial state-level revenue analysis",
    ],
  },
];

const skills = [
  { name: "SQL", icon: Database },
  { name: "Excel", icon: FileSpreadsheet },
  { name: "Python", icon: Code2 },
  { name: "Power BI", icon: BarChart3 },
  { name: "Tableau", icon: LineChart },
];

const roles = ["Pranav Kumbhar", "Data Analyst", "AI Engineer", "ML Engineer", "Power BI Developer"];

function RotatingRole() {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const speed = deleting ? 50 : 110;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, display.length + 1);
        setDisplay(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, display.length - 1);
        setDisplay(next);
        if (next === "") {
          setDeleting(false);
          setIndex((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [display, deleting, index]);

  return (
    <span className="bg-gradient-to-r from-primary via-[oklch(0.62_0.24_295)] to-[oklch(0.72_0.18_210)] bg-clip-text text-transparent">
      {display}
      <span className="ml-1 inline-block w-[3px] animate-pulse bg-primary align-middle" style={{ height: "0.9em" }} />
    </span>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[var(--gradient-primary)] opacity-20 blur-3xl" />
      <div className="pointer-events-none absolute top-[40%] -left-40 h-[400px] w-[400px] rounded-full bg-[var(--accent-cyan)] opacity-15 blur-3xl" />

      <header className="relative mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <span className="bg-gradient-to-r from-primary to-[oklch(0.62_0.24_295)] bg-clip-text text-sm font-bold tracking-tight text-transparent">
          Pranav Kumbhar
        </span>
        <nav className="hidden gap-6 text-sm text-muted-foreground sm:flex">
          <a href="#projects" className="story-link transition-colors hover:text-primary">Projects</a>
          <a href="#skills" className="story-link transition-colors hover:text-primary">Skills</a>
          <a href="#contact" className="story-link transition-colors hover:text-primary">Contact</a>
        </nav>
      </header>

      <main className="relative mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="animate-fade-in py-20 sm:py-28">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
            <Sparkles size={12} /> Aspiring Data Analyst
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I am <RotatingRole />
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I turn raw data into clear, actionable insights. I'm comfortable with SQL, Python,
            and BI tools like Power BI and Tableau, and I love building dashboards that help
            teams make better decisions. I'm currently looking for my first full-time data analyst role.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--gradient-primary)] px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-all hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-all hover:border-primary hover:bg-accent hover:-translate-y-0.5"
            >
              View Projects
            </a>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="border-t border-border py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Projects</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[var(--gradient-primary)] opacity-0 transition-opacity duration-300 group-hover:opacity-[0.04]" />
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold leading-tight">{p.title}</h3>
                  <ArrowUpRight size={18} className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.description}</p>
                {p.highlights && (
                  <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <span key={t} className="rounded-full border border-primary/15 bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <Github size={14} /> View on GitHub
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="border-t border-border py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Skills</h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((s) => (
              <span
                key={s.name}
                className="hover-scale inline-flex cursor-default items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium transition-all hover:border-primary/50 hover:shadow-[var(--shadow-glow)]"
              >
                <s.icon size={16} className="text-primary" />
                {s.name}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-border py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Get in touch</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Open to data analyst roles, freelance projects, and interesting conversations.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="mailto:your@email.com"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              <Mail size={16} /> your@email.com
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Pranav Kumbhar
        </div>
      </footer>
    </div>
  );
}
