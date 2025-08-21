"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Mail, MapPin, Phone, Download, Link as LinkIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const RESUME_URL = "/Michael-Resume.pdf"; // place file in /public

const skills: Record<string, string[]> = {
  Frontend: ["JavaScript (ES6+)", "TypeScript", "React", "React Native", "Redux", "HTML5", "CSS3", "SCSS", "Tailwind CSS", "Next.js", "Expo", "Jest"],
  Backend: ["Node.js", "Express", "GraphQL", "ASP.NET Core", "Java EE"],
  Database: ["PostgreSQL", "MongoDB", "SQL Server"],
  Tools: ["Git", "AWS", "Jira", "SourceTree", "Figma"],
};

const projects = [
  { name: "DataPeak AI", summary: "A cutting-edge automated SaaS solution for transforming data into simplified information and insights.", tags: ["React", "Node.js", "Flask(Python)", "Openai", "Postgres", "AWS", "Stripe Payment"], href: "https://www.factr.me/datapeak" },
  { name: "Linkify AI", summary: "Automated LinkedIn lead-generation system with scheduling, analytics and reporting for marketing campaigns.", tags: ["PhantomBuster Automation", "React", "Node.js", "Chat-GPT", "Postgres", "AWS", "Stripe Payment"], href: "https://www.factr.me/" },
  { name: "Enovis CapEx Workflow", summary: "Multilingual solution for tracking and reporting of capital expenditure evaluation and approvals, as well as presence declarations between medical practitioners.", tags: ["React", "Node.js", "Postgres", "AWS"], href: "https://enovis.com/" },
  { name: "Amico Safetynet", summary: "SaaS for construction, health & safety management and compliance tracking.", tags: ["React", "Node.js", "Postgres", "AWS"], href: "https://amico.build/health-safety/" },
  { name: "ConstructR", summary: "Real-time tracking and invoicing solution for construction logistics.", tags: ["React", "Node.js", "Typescript", "Postgres", "GraphQL", "AWS", "Google maps & geofencing"], href: "#" },
  { name: "Tasttlig", summary: "Mobile/web app for discovering and booking local festivals and experiences.", tags: ["React", "Node.js", "Postgres", "React Native", "Expo", "AWS", "Stripe Payment"], href: "https://tasttlig.com/" },
  { name: "Athletics Ontario", summary: "A web and mobile application that provides real-time performance analytics for athletes through their reported results on events", tags: ["React", "SQL Server", "React Native", "Wordpress", "Firebase Cloud", "Laravel(PHP)", "Google Cloud VM"], href: "https://athleticsontario.ca/" },
];

const experience = [
  {
    role: "Software Developer", company: "FactR Limited", location: "Paris, Ontario", period: "Sep 2021 – Aug 2024", bullets: [
      "Increased user satisfaction by 60% by delivering scalable web apps.",
      "Improved performance metrics by 30% using data-driven insights.",
      "Achieved 80% WCAG 2.0 AA accessibility compliance.",
      "Integrated external cloud platforms to expand functionality.",
      "Enhanced RESTful services for seamless data integration.",
      "Provided client IT support via chat and virtual platforms.",
    ],
  },
  {
    role: "Software Developer", company: "Tasttlig Corporation", location: "Toronto, Ontario", period: "Jan 2021 – Sep 2021", bullets: [
      "Improved UI responsiveness by 40% through performance tuning.",
      "Developed high-performance REST APIs and boosted efficiency.",
      "Supported Agile delivery and sprint outcomes.",
    ],
  },
  {
    role: "Software Developer Co-op", company: "Athletics Ontario", location: "Toronto, Ontario", period: "May 2020 – Aug 2020", bullets: [
      "Built mobile and web apps; improved functionality measurably.",
      "Reached 90% unit test coverage with Jest.",
      "Delivered weekly demos with high stakeholder satisfaction.",
    ],
  },
  {
    role: "Web Developer", company: "Skylift Wireless", location: "Nigeria", period: "Aug 2017 – Sep 2018", bullets: [
      "Redesigned corporate website for significant UX uplift.",
      "Implemented database-backed features for scalability.",
    ],
  },
];

const education = [
  { title: "Postgraduate Diploma, Information Technology Solutions (Honours)", org: "Humber College", location: "Toronto, ON", period: "Jan 2019 – Aug 2020" },
  { title: "B.Sc. Computer Science", org: "Houdegbe North American University", location: "Porto-Novo, Benin", period: "Aug 2011 – Dec 2014" },
];

const certs = [
  "Ethics Exam Certificate – CIPS, 2024",
  "Building Flexible Android Apps with Java – 2020",
  "Learning ECMAScript 6 – 2020",
  "Project Management Academy – 2015",
];

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <motion.h2
        className="text-2xl md:text-3xl font-semibold tracking-tight mb-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {title}
      </motion.h2>
      {children}
    </section>
  );
}

export default function Page() {
  const [query, setQuery] = useState("");

  const filteredProjects = useMemo(() => {
    if (!query) return projects;
    const q = query.toLowerCase();
    return projects.filter(
      (p) => p.name.toLowerCase().includes(q) || p.summary.toLowerCase().includes(q) || p.tags.join(" ").toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="min-h-screen">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-slate-900 dark:bg-white flex items-center justify-center shadow">
              <img src="/favicon-32x32.png" alt="Profile Picture" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Software Developer</p>
              <h1 className="text-lg md:text-xl font-semibold">Michael Anetor</h1>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#education" className="hover:underline">Education</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="secondary" className="rounded-2xl">
              <a href={RESUME_URL} download='Michael_Anetor_Resume.pdf' type="application/pdf">
                <Download className="w-4 h-4 mr-2" /> Resume
              </a>
            </Button>
            <Button asChild className="rounded-2xl">
              <a href="mailto:michellanet@gmail.com" target="_blank">
                <Mail className="w-4 h-4 mr-2" /> Contact
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-10 pb-6">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="grid md:grid-cols-3 gap-6 items-start">
          <Card className="col-span-2">
            <CardContent className="p-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Builder of scalable web and mobile experiences</h2>
              <p className="mt-3 text-slate-600 dark:text-slate-300">4+ years delivering production-ready software across Agile teams. Passionate about clean architecture, accessibility, and thoughtful UX.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["React", "TypeScript", "Node.js", "Javascript", "PostgreSQL", "GraphQL", "React Native", "MongoDB", "Flask(Python)", "Tailwind", "Jest", "ASP.Net"].map((t) => (
                  <Badge key={t} variant="secondary" className="rounded-xl py-1 px-3">
                    {t}
                  </Badge>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="rounded-2xl">
                  <a href="mailto:michellanet@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />Hire me
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-2xl">
                  <a href="https://github.com/michellanet" target="_blank" rel="noreferrer">
                    <Github className="w-4 h-4 mr-2" /> GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg">Based in Toronto, ON</h3>
              <div className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Open to remote or Ontario-based roles
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> 647-562-3739
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> michellanet@gmail.com
                </p>
                <a className="flex items-center gap-2 hover:underline" href="https://github.com/michellanet" target="_blank" rel="noreferrer">
                  <LinkIcon className="w-4 h-4" /> github.com/michellanet
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <main className="max-w-6xl mx-auto px-4 pb-20 space-y-14">
        <Section id="about" title="About">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Results-driven Software Developer with a track record of delivering scalable solutions across the full development lifecycle. Comfortable across the stack, experienced in collaborating with cross-functional teams, and committed to accessibility and performance.
          </p>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(skills).map(([group, list]) => (
              <Card key={group}>
                <CardContent className="p-5">
                  <h4 className="font-semibold mb-3">{group}</h4>
                  <div className="flex flex-wrap gap-2">
                    {list.map((s) => (
                      <Badge key={s} variant="outline" className="rounded-xl">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="space-y-5">
            {experience.map((job) => (
              <Card key={job.company + job.role}>
                <CardContent className="p-5">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-semibold">
                        {job.role} · {job.company}
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{job.location}</p>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{job.period}</p>
                  </div>
                  <ul className="mt-3 list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                    {job.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="mb-4 flex items-center gap-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or tags"
              className="w-full md:w-1/2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
            <Badge variant="secondary" className="rounded-xl">{filteredProjects.length} shown</Badge>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((p) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }}>
                <Card className="group h-full">
                  <CardContent className="p-5 flex flex-col h-full">
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg group-hover:underline flex items-center gap-2"
                        onClick={() => window.open(p.href, '_blank')}>

                        {p.name} <ArrowUpRight className="w-4 h-4" />
                      </h4>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.summary}</p>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <Badge key={p.name + t} variant="outline" className="rounded-xl">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="grid md:grid-cols-2 gap-4">
            {education.map((e) => (
              <Card key={e.title}>
                <CardContent className="p-5">
                  <h4 className="font-semibold">{e.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {e.org} · {e.location}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{e.period}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h4 className="font-semibold text-lg">Let’s build something great</h4>
                  <p className="text-slate-600 dark:text-slate-300">Open to remote or Ontario-based roles. Available for contract or full-time.</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button asChild className="rounded-2xl">
                    <a href="mailto:michellanet@gmail.com" target="_blank">
                      <Mail className="w-4 h-4 mr-2" />Email
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-2xl">
                    <a href="tel:+16475623739">
                      <Phone className="w-4 h-4 mr-2" />Call
                    </a>
                  </Button>
                  <Button asChild variant="secondary" className="rounded-2xl">
                    <a href="https://github.com/michellanet" target="_blank" rel="noreferrer">
                      <Github className="w-4 h-4 mr-2" />GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </Section>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Michael Anetor. All rights reserved.</div>
      </footer>
    </div>
  );
}