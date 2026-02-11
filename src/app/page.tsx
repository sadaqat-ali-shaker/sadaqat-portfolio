"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  ExternalLink,
  FileText,
  Moon,
  Sun,
  Copy,
  X,
} from "lucide-react";

type Project = {
  name: string;
  category: string;
  tag: string;
  bullets: string[];
  tech: string[];
  links?: {
    code?: string;
    demo?: string;
  };
  impact?: string;
};

const PROFILE = {
  name: "Sadaqat Ali Shaker",
  title: "Computer Science Undergraduate | Software & Data Engineering",
  location: "Pakistan",
  email: "sadaqatalishakir786@gmail.com",
  github: "https://github.com/sadaqat-ali-shaker",
  linkedin: "https://www.linkedin.com/in/sadaqatalishaker/",
  resumeUrl: "/Sadaqat-Ali-Shaker-CV.pdf",
};

const PROJECTS: Project[] = [
  {
    name: "Fake Signature Detection (AI)",
    category: "AI/ML",
    tag: "Computer Vision + Classification",
    impact:
      "Built an ML pipeline to detect forged signatures using feature engineering and model training.",
    bullets: [
      "Designed preprocessing + feature extraction workflow.",
      "Trained and evaluated classification models.",
      "Documented experiments for reproducibility.",
    ],
    tech: ["Python", "Machine Learning", "Computer Vision"],
  },
  {
    name: "Attendance Management System",
    category: "Backend/Apps",
    tag: "Tkinter + MySQL Desktop App",
    impact:
      "Complete CRUD system with validation + persistence for student attendance.",
    bullets: [
      "Built GUI with structured flows.",
      "Connected to MySQL backend.",
      "Modular and maintainable code structure.",
    ],
    tech: ["Python", "Tkinter", "MySQL"],
  },
];

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

export default function Page() {
  const { dark, toggle } = useDarkMode();
  const [selected, setSelected] = useState<Project | null>(null);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(PROFILE.email);
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold">{PROFILE.name}</h1>
            <p className="text-white/70">{PROFILE.title}</p>
            <p className="text-white/50 text-sm">{PROFILE.location}</p>
          </div>

          <div className="flex gap-3 items-center">
            <button
              onClick={toggle}
              className="p-2 border border-white/10 rounded-lg"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a href={PROFILE.github} target="_blank">
              <Github />
            </a>

            <a href={PROFILE.linkedin} target="_blank">
              <Linkedin />
            </a>

            <a
              href={PROFILE.resumeUrl}
              className="flex items-center gap-2 border border-white/10 px-3 py-2 rounded-lg"
            >
              <FileText size={16} /> Resume
            </a>
          </div>
        </div>

        {/* Hero */}
        <div className="mt-8 border border-white/10 rounded-2xl p-6">
          <p className="text-white/80">
            I build practical software & data systems: desktop apps,
            databases, ML prototypes, and automation.
          </p>

          <div className="mt-4 flex gap-3 flex-wrap">

            {/* FIXED EMAIL BUTTON */}
            <a
              href={`mailto:${PROFILE.email}`}
              className="bg-white text-black px-4 py-2 rounded-lg font-medium"
            >
              Email me
            </a>

            <button
              onClick={copyEmail}
              className="border border-white/10 px-4 py-2 rounded-lg"
            >
              <Copy size={16} />
            </button>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              className="border border-white/10 px-4 py-2 rounded-lg"
            >
              View LinkedIn
            </a>
          </div>
        </div>

        {/* Projects */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold">Projects</h2>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            {PROJECTS.map((p) => (
              <motion.button
                key={p.name}
                whileHover={{ y: -4 }}
                onClick={() => setSelected(p)}
                className="text-left border border-white/10 rounded-2xl p-5 bg-white/5"
              >
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-sm text-white/60">{p.tag}</p>
                <p className="text-sm mt-2 text-white/70">{p.impact}</p>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-sm text-white/50 border-t border-white/10 pt-6">
          © {new Date().getFullYear()} {PROFILE.name}
        </footer>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-zinc-900 p-6 rounded-2xl max-w-xl w-full border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold">{selected.name}</h3>
                <button onClick={() => setSelected(null)}>
                  <X />
                </button>
              </div>

              <p className="mt-3 text-white/80">{selected.impact}</p>

              <ul className="mt-4 list-disc pl-5 text-white/70 text-sm">
                {selected.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="mt-4 flex gap-3 flex-wrap">
                {selected.links?.code && (
                  <a
                    href={selected.links.code}
                    target="_blank"
                    className="bg-white text-black px-4 py-2 rounded-lg"
                  >
                    <Github size={16} /> Code
                  </a>
                )}

                {selected.links?.demo && (
                  <a
                    href={selected.links.demo}
                    target="_blank"
                    className="border border-white/10 px-4 py-2 rounded-lg"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
