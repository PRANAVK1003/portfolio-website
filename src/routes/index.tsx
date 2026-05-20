import { createFileRoute } from "@tanstack/react-router";
import { Github, Mail, Linkedin, Download, Database, FileSpreadsheet, Code2, BarChart3, LineChart, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Your Name — Aspiring Data Analyst" },
      { name: "description", content: "Portfolio of Your Name, an aspiring data analyst. Projects, skills, and contact." },
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
    title: "Marketing KPI Report",
    tools: ["Excel", "Power BI"],
    description: "Automated weekly KPI reporting for marketing leadership.",
    href: "https://github.com/yourusername/marketing-kpi",
  },
];

const skills = [
  { name: "SQL", icon: Database },
  { name: "Excel", icon: FileSpreadsheet },
  { name: "Python", icon: Code2 },
  { name: "Power BI", icon: BarChart3 },
  { name: "Tableau", icon: LineChart },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <span className="text-sm font-semibold tracking-tight">Your Name</span>
        <nav className="hidden gap-6 text-sm text-muted-foreground sm:flex">
          <a href="#projects" className="hover:text-foreground">Projects</a>
          <a href="#skills" className="hover:text-foreground">Skills</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="py-20 sm:py-28">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Aspiring Data Analyst</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I'm Your Name.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I turn raw data into clear, actionable insights. I'm comfortable with SQL, Python,
            and BI tools like Power BI and Tableau, and I love building dashboards that help
            teams make better decisions. I'm currently looking for my first full-time data analyst role.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
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
                className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <ArrowUpRight size={18} className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <span key={t} className="rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
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
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium"
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
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
            >
              <Mail size={16} /> your@email.com
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Your Name
        </div>
      </footer>
    </div>
  );
}
