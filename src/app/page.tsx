"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  FileText,
  Search,
  Filter,
  Moon,
  Sun,
  Copy,
  X,
  Code2,
  Database,
  Brain,
  Terminal,
} from "lucide-react";

type Project = {
  name: string;
  category: "AI/ML" | "Data" | "Backend/Apps" | "Databases" | "DevOps/Linux";
  tag: string;
  bullets: string[];
  tech: string[];
  links: {
    code?: string;
    demo?: string;
  };
  impact?: string; // short “so what” line
};

const PROFILE = {
  name: "Sadaqat Ali Shaker",
  title: "Computer Science Undergraduate | Software & Data Engineering",
  location: "Pakistan",
  email: "sadaqatalishakir786@gmail.com",
  github: "https://github.com/sadaqat-ali-shaker",
  linkedin: "https://www.linkedin.com/in/sadaqatalishaker/",
  resumeUrl: "/Sadaqat-Ali-Shaker-CV.pdf", // put PDF inside /public
};

const QUICK_PITCH = [
  "I build practical software & data systems: desktop apps, databases, ML prototypes, and automation.",
  "Currently focusing on Software/Data Engineering roles and packaging projects with strong documentation.",
];

const PROJECTS: Project[] = [
  {
    name: "Fake Signature Detection (AI)",
    category: "AI/ML",
    tag: "Computer Vision + Classification",
    impact: "Built an ML pipeline to detect forged signatures using feature engineering and model training.",
    bullets: [
      "Designed preprocessing + feature extraction workflow for signature images.",
      "Trained and evaluated classification models on labeled datasets; improved robustness via normalization/augmentation.",
      "Documented experiments and evaluation to support reproducibility.",
    ],
    tech: ["Python", "Machine Learning", "Computer Vision"],
    links: { code: "" },
  },
  {
    name: "Attendance Management System",
    category: "Backend/Apps",
    tag: "Tkinter + MySQL Desktop App",
    impact: "A complete CRUD system with validation + persistence for student attendance workflows.",
    bullets: [
      "Built a desktop GUI with role-friendly flows (add/update/search records).",
      "Connected to MySQL backend for data persistence with input validation.",
      "Structured code for maintainability (modules, reusable components).",
    ],
    tech: ["Python", "Tkinter", "MySQL", "SQL"],
    links: { code: "" },
  },
  {
    name: "Library Management System (MongoDB)",
    category: "Databases",
    tag: "NoSQL + GUI",
    impact: "NoSQL library operations tool: issue/return/catalog with MongoDB-backed storage.",
    bullets: [
      "Modeled collections and relationships for books, members, and transactions.",
      "Integrated MongoDB (PyMongo) with a Tkinter frontend for daily operations.",
      "Implemented search + status tracking to support smooth workflows.",
    ],
    tech: ["Python", "Tkinter", "MongoDB", "PyMongo"],
    links: { code: "" },
  },
  {
    name: "Movie Knowledge Graph",
    category: "Databases",
    tag: "Neo4j + Cypher",
    impact: "Graph database modeling + interactive querying for actor/director/title relationships.",
    bullets: [
      "Created graph schema and ran Cypher queries for relationship exploration.",
      "Built a Python interface for interactive lookups and query execution.",
    ],
    tech: ["Neo4j", "Cypher", "Python"],
    links: { code: "" },
  },
  {
    name: "E-commerce Data Cleaner",
    category: "Data",
    tag: "Scraping + Pandas Cleaning",
    impact: "Scraped and transformed messy product data into analysis-ready datasets.",
    bullets: [
      "Collected raw product data and standardized fields for downstream analysis.",
      "Removed duplicates, handled missing values, and produced structured outputs.",
      "Wrote reusable scripts for repeatable cleaning runs.",
    ],
    tech: ["Python", "Pandas", "Web Scraping"],
    links: { code: "" },
  },
  {
    name: "Linux Automation Scripts",
    category: "DevOps/Linux",
    tag: "Bash Automation",
    impact: "Reusable scripts for log monitoring, backups, and automation tasks on Linux.",
    bullets: [
      "Built scripts for log monitoring and automated backups.",
      "Improved reliability with parameterization and error handling patterns.",
    ],
    tech: ["Linux", "Bash", "Automation"],
    links: { code: "" },
  },
];

const EXPERIENCE = [
  {
    title: "Final Year Project (FYP) — Research & Development",
    org: "FAST NUCES",
    date: "2025 — Present",
    bullets: [
      "Replace this with your exact FYP problem + outcome (1 line).",
      "Mention dataset/pipeline/DB integration/evaluation briefly (1 line).",
    ],
    icon: Brain,
  },
  {
    title: "Freelance Software Developer (Self-Employed)",
    org: "Local / Remote",
    date: "2023 — Present",
    bullets: [
      "Delivered small software solutions for clients (CRUD apps, scripts, APIs, DB work).",
      "Gathered requirements, implemented features, and provided documentation/support.",
    ],
    icon: Code2,
  },
];

const SKILLS = [
  { group: "Core", items: ["Python", "C/C++", "SQL", "OOP", "DSA"] },
  { group: "Databases", items: ["MySQL", "SQLite", "MongoDB", "Neo4j/Cypher"] },
  { group: "Data/ML", items: ["Pandas", "Machine Learning", "Computer Vision"] },
  { group: "DevOps/Linux", items: ["Linux", "Bash", "Automation"] },
  { group: "Big Data (in progress)", items: ["Hadoop", "Airflow", "Spark (Learning)"] },
  { group: "Desktop/.NET", items: [".NET", "C#", "WinForms"] },
];

function classNames(...xs: Array<string | false | undefined | null>) {
  return xs.filter(Boolean).join(" ");
}

function useDarkMode() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    setDark((d) => {
      const next = !d;
      localStorage.setItem("theme", next ? "dark" : "light");
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  };

  return { dark, toggle };
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 dark:text-white/80">
      {children}
    </span>
  );
}

function Chip({ children, active, onClick }: { children: React.ReactNode; active?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "rounded-full px-3 py-1 text-sm transition border",
        active
          ? "border-white/30 bg-white/10 text-white"
          : "border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10"
      )}
      type="button"
    >
      {children}
    </button>
  );
}

function IconButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 hover:bg-white/10 hover:text-white transition"
    >
      {children}
    </button>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <h2 className="text-xl font-semibold tracking-tight text-white">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm text-white/60">{subtitle}</p> : null}
      </div>
    </div>
  );
}

export default function Page() {
  const { dark, toggle } = useDarkMode();

  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"All" | Project["category"]>("All");
  const [activeTech, setActiveTech] = useState<string>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(PROJECTS.map((p) => p.category)));
    return ["All", ...cats] as const;
  }, []);

  const techOptions = useMemo(() => {
    const all = PROJECTS.flatMap((p) => p.tech);
    const uniq = Array.from(new Set(all)).sort((a, b) => a.localeCompare(b));
    return ["All", ...uniq];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter((p) => {
      const matchQ =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.tag.toLowerCase().includes(q) ||
        p.tech.join(" ").toLowerCase().includes(q) ||
        p.bullets.join(" ").toLowerCase().includes(q);

      const matchCat = activeCategory === "All" || p.category === activeCategory;
      const matchTech = activeTech === "All" || p.tech.includes(activeTech);

      return matchQ && matchCat && matchTech;
    });
  }, [query, activeCategory, activeTech]);

  const featured = useMemo(() => PROJECTS.slice(0, 4), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
    } catch {
      // ignore
    }
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-[-220px] right-[-220px] h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{PROFILE.name}</h1>
            <p className="mt-1 text-white/70">{PROFILE.title}</p>
            <p className="mt-1 text-sm text-white/50">{PROFILE.location}</p>
          </div>

          <div className="flex items-center gap-2">
            <IconButton label="Toggle theme" onClick={toggle}>
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </IconButton>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 hover:bg-white/10 hover:text-white transition"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 hover:bg-white/10 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <Link
              href={PROFILE.resumeUrl}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition"
            >
              <FileText size={16} /> Resume
            </Link>
          </div>
        </div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-white/80">
                {QUICK_PITCH[0]} <span className="text-white/60">{QUICK_PITCH[1]}</span>
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>Python</Badge>
                <Badge>SQL</Badge>
                <Badge>ML / CV</Badge>
                <Badge>Neo4j</Badge>
                <Badge>Linux</Badge>
                <Badge>Hadoop / Airflow</Badge>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href="mailto:sadaqatalishakir786@gmail.com?subject=Hello%20Sadaqat&body=Hi%20Sadaqat%2C%0A%0A"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-zinc-950 hover:opacity-90"
                  >
                        Email me
              </a>

              <IconButton label="Copy email" onClick={copyEmail}>
                <Copy size={18} />
              </IconButton>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition"
              >
                View LinkedIn <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Featured projects */}
        <div className="mt-10">
          <SectionTitle title="Featured Projects" subtitle="Click a project to view details. Keep only your strongest 5–6 publicly." />

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {featured.map((p) => (
              <motion.button
                key={p.name}
                onClick={() => setSelected(p)}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.99 }}
                className="group text-left rounded-3xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
                type="button"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="mt-1 text-sm text-white/60">{p.tag}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    {p.category}
                  </span>
                </div>

                {p.impact ? <p className="mt-3 text-sm text-white/75">{p.impact}</p> : null}

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.slice(0, 4).map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                      {t}
                    </span>
                  ))}
                  {p.tech.length > 4 ? (
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50">
                      +{p.tech.length - 4}
                    </span>
                  ) : null}
                </div>

                <div className="mt-4 text-sm text-white/60 group-hover:text-white/80 transition">
                  Open details →
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* All Projects with search/filters */}
        <div className="mt-10">
          <SectionTitle title="All Projects" subtitle="Search + filter to quickly show recruiters what matters." />

          <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="relative w-full md:max-w-lg">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" size={18} />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search projects by name, tech, or keywords..."
                  className="w-full rounded-2xl border border-white/10 bg-zinc-950/30 px-10 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
                />
              </div>

              <div className="flex items-center gap-2 text-white/70">
                <Filter size={18} />
                <span className="text-sm">Filters</span>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <Chip key={c} active={activeCategory === c} onClick={() => setActiveCategory(c)}>
                    {c}
                  </Chip>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {techOptions.slice(0, 12).map((t) => (
                  <Chip key={t} active={activeTech === t} onClick={() => setActiveTech(t)}>
                    {t}
                  </Chip>
                ))}
                {techOptions.length > 12 ? (
                  <span className="text-xs text-white/50 self-center">
                    (Tip: use search for more tech)
                  </span>
                ) : null}
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {filtered.map((p) => (
                <motion.button
                  key={p.name}
                  onClick={() => setSelected(p)}
                  whileHover={{ y: -3 }}
                  className="text-left rounded-3xl border border-white/10 bg-zinc-950/20 p-5 hover:bg-white/5 transition"
                  type="button"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold">{p.name}</h3>
                      <p className="mt-1 text-sm text-white/60">{p.tag}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                      {p.category}
                    </span>
                  </div>

                  {p.impact ? <p className="mt-3 text-sm text-white/75">{p.impact}</p> : null}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 text-sm text-white/60">Open details →</div>
                </motion.button>
              ))}

              {filtered.length === 0 ? (
                <div className="md:col-span-2 rounded-3xl border border-white/10 bg-zinc-950/20 p-6 text-white/70">
                  No projects match your search/filters. Try removing filters.
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mt-10">
          <SectionTitle title="Experience" subtitle="Make this section real: remove placeholders, keep bullets short, outcome-driven." />

          <div className="mt-4 grid gap-4">
            {EXPERIENCE.map((e) => {
              const Icon = e.icon;
              return (
                <div key={e.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-start gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-2">
                      <Icon size={18} className="text-white/80" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                        <h3 className="text-lg font-semibold">{e.title}</h3>
                        <span className="text-sm text-white/50">{e.date}</span>
                      </div>
                      <p className="text-sm text-white/60">{e.org}</p>

                      <ul className="mt-3 list-disc pl-5 text-sm text-white/75">
                        {e.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick icons row */}
          <div className="mt-4 flex flex-wrap gap-2 text-sm text-white/70">
            <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
              <Database size={16} /> DB Systems
            </span>
            <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
              <Brain size={16} /> ML / CV
            </span>
            <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
              <Terminal size={16} /> Linux Automation
            </span>
            <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
              <Code2 size={16} /> Apps & APIs
            </span>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-10">
          <SectionTitle title="Skills" subtitle="Grouped skills look more senior than a long random list." />

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {SKILLS.map((g) => (
              <div key={g.group} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold">{g.group}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 border-t border-white/10 pt-6 text-sm text-white/50">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} {PROFILE.name}. Built with Next.js.</p>
            <div className="flex flex-wrap gap-3">
              <a className="hover:text-white/80" href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="hover:text-white/80" href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="hover:text-white/80" href={`mailto:${PROFILE.email}`}>Email</a>
            </div>
          </div>
        </footer>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="w-full max-w-2xl rounded-3xl border border-white/10 bg-zinc-950 p-6"
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 18, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{selected.name}</h3>
                  <p className="mt-1 text-sm text-white/60">{selected.tag}</p>
                </div>
                <button
                  type="button"
                  className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/70 hover:bg-white/10 hover:text-white transition"
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              {selected.impact ? <p className="mt-4 text-white/80">{selected.impact}</p> : null}

              <ul className="mt-4 list-disc pl-5 text-sm text-white/75">
                {selected.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {selected.tech.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {selected.links.code ? (
                  <a
                    href={selected.links.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-zinc-950 hover:opacity-90"
                  >
                    <Github size={16} /> Code
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60">
                    <Github size={16} /> Add GitHub link
                  </span>
                )}

                {selected.links.demo ? (
                  <a
                    href={selected.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60">
                    <ExternalLink size={16} /> Demo optional
                  </span>
                )}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </main>
  );
}
