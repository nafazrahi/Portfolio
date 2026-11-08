import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Copy, Check } from "lucide-react";
import "./style.css";

const email = "nafazrahi2003@gmail.com";
const projects = [
  ,
  {
  number: "01",
  type: "WEB APP · FINANCE MANAGEMENT",
  title: "Center Point Management",
  description: "Built a web app to track property income, rent collection, and monthly expenses with role-based access.",
  stack: ["React", "Supabase", "Vite"],
  href: "https://github.com/nafazrahi/CenterPoint-Finance-Dashboard",
  mark: "03 / MANAGEMENT"
},
  {
    number: "02",
    type: "AUTOMATION · AI",
    title: "AI Food Nutrition Bot",
    description: "An n8n workflow that identifies food items from images and returns calorie and nutritional information through a Telegram bot.",
    stack: ["n8n", "AI services", "Image processing"],
    href: "https://github.com/nafazrahi/Calorie-Counter-Bot",
    mark: "02 / AUTOMATION"
  },
  {
  number: "03",
  type: "DESKTOP APP · MANAGEMENT SYSTEM",
  title: "Audit Firm Management System",
  description: "Built a role based system to manage audit projects, assign tasks, and review auditor reports.",
  stack: ["C#", "Windows Forms", ".net", "SQL Server"],
  href: "https://github.com/nafazrahi/Audit-Firm-Management-System",
  mark: "04 / AUDIT"
},
{
    number: "04",
    type: "DATA ANALYSIS · PYTHON",
    title: "Patient Data Analysis",
    description: "Exploring public healthcare data through cleaning, sorting and visualisation to surface patterns in structured datasets.",
    stack: ["Python", "Pandas", "Matplotlib"],
    href: "https://github.com/nafazrahi/Cancer-data-analysis",
    mark: "01 / DATA"
  }
  
];

const skills = [
  ["Programming", "Python", "Java", "C#"],
  ["AI & ML", "PyTorch", "LLM evaluation", "AI data annotation", "Local LLMs"],
  ["Data", "Pandas", "NumPy", "Matplotlib"],
  ["Computer Science", "OOP", "OOAD", "Data structures", "Algorithms"],
  ["Databases", "MySQL", "PostgreSQL"]
];

function Reveal({ children, delay = 0, className = "" }) {
  const reduce = useReducedMotion();
  return <motion.div className={className}
    initial={reduce ? false : { opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.18 }}
    transition={{ duration: reduce ? 0 : 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
    {children}
  </motion.div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [["About", "#about"], ["Work", "#work"], ["Skills", "#skills"], ["Contact", "#contact"]];
  return <header className="header">
    <a className="wordmark" href="#top" aria-label="Nafaz Rahi home">NR<span>®</span></a>
    <nav className={open ? "nav nav-open" : "nav"}>
      {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
    </nav>
    <a className="header-cta" href={`mailto:${email}`}>LET'S TALK <ArrowUpRight size={14}/></a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
  </header>;
}

function App() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat("en", { timeZone: "Asia/Dhaka", hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date()));
    update();
    const timer = setInterval(update, 60000);
    return () => clearInterval(timer);
  }, []);
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(email); setCopied(true); setTimeout(() => setCopied(false), 1800); }
    catch { window.location.href = `mailto:${email}`; }
  };

  return <div id="top">
    <div className="noise" aria-hidden="true"/>
    <Header/>
    <main>
      <section className="hero section-wrap">
        <div className="hero-meta mono"><span><i className="status-dot"/> AVAILABLE FOR OPPORTUNITIES</span><span>BASED IN DHAKA, BD · {time || "—"} GMT+6</span></div>
        <div className="hero-title-wrap">
          <motion.p className="eyebrow" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.2}}>COMPUTER SCIENCE / MACHINE LEARNING</motion.p>
          <motion.h1 initial={{opacity:0, y:45}} animate={{opacity:1, y:0}} transition={{duration:.9, delay:.25, ease:[.22,1,.36,1]}}>
            Curious by<br/><span>nature.</span>
          </motion.h1>
          <motion.div className="hero-bottom" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.75}}>
            <p className="hero-intro">I’m <strong>Nafaz Rahi</strong> — a CSE undergraduate interested in machine learning, AI evaluation and building useful software.</p>
            <a className="round-link" href="#about" aria-label="Scroll to about"><ArrowDownRight size={22}/></a>
          </motion.div>
        </div>
        
      </section>

      <section id="about" className="about section-wrap section-pad">
        <Reveal><div className="section-kicker mono"><span>01 — ABOUT</span><span></span></div></Reveal>
        <div className="about-grid">
          <Reveal><h2>Learning how<br/>things <em>think.</em></h2></Reveal>
          <Reveal delay={.12}><div className="about-copy">
            <p className="lead">I’m a Computer Science and Engineering undergraduate at American International University–Bangladesh, majoring in Machine Learning.</p>
            <p>My interests sit at the intersection of analytical problem-solving, AI systems and software development. I’ve worked on AI response evaluation and data annotation, and I enjoy understanding why a system behaves the way it does — not just whether it works.</p>
            <p>Outside that, I’m building a stronger foundation in Python, data analysis and machine learning, one project at a time.</p>
            <a className="text-link" href="https://github.com/nafazrahi" target="_blank" rel="noreferrer">MORE ON GITHUB <ArrowUpRight size={15}/></a>
          </div></Reveal>
        </div>
        <div className="facts">
          <div><span className="mono">CURRENTLY</span><strong>BSc, Computer Science & Engineering</strong><small>AIUB · 2023 — PRESENT</small></div>
          <div><span className="mono">FOCUS</span><strong>Machine Learning & AI evaluation</strong><small>ALWAYS LEARNING</small></div>
          <div><span className="mono">LANGUAGES</span><strong>Bengali / English / Hindi</strong><small>NATIVE · PROFESSIONAL · CONVERSATIONAL</small></div>
        </div>
      </section>

      <section id="work" className="work section-wrap section-pad">
        <Reveal><div className="section-kicker mono"><span>02 — WORK</span><span></span></div></Reveal>
        <div className="work-heading"><Reveal><h2><br/><em>projects.</em></h2></Reveal><Reveal delay={.1}><p></p></Reveal></div>
        <div className="project-list">
          {projects.map((p, i) => <Reveal key={p.number} delay={i * .08}>
            <a className="project" href={p.href} target="_blank" rel="noreferrer">
              <div className="project-top mono"><span>{p.number} / {p.type}</span><span>{p.mark}</span></div>
              <div className="project-main"><div><h3>{p.title}</h3><p>{p.description}</p></div><div className="project-arrow"><ArrowUpRight size={23}/></div></div>
              <div className="project-bottom"><div className="tags">{p.stack.map(s => <span key={s}>{s}</span>)}</div><span className="mono view-link">VIEW PROJECT <ArrowUpRight size={13}/></span></div>
            </a>
          </Reveal>)}
        </div>
      </section>

      <section id="skills" className="skills section-wrap section-pad">
        <Reveal><div className="section-kicker mono"><span>03 — TOOLKIT</span><span></span></div></Reveal>
        <div className="skills-layout">
          <Reveal><h2>Things I<br/><em>work with.</em></h2></Reveal>
          <div className="skill-list">
            {skills.map(([title, ...items], i) => <Reveal key={title} delay={i * .05}><div className="skill-row"><span className="skill-name mono">{title}</span><div className="skill-items">{items.map(item => <span key={item}>{item}</span>)}</div></div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="education section-wrap section-pad">
        <Reveal><div className="section-kicker mono"><span>04 — EDUCATION</span><span></span></div></Reveal>
        <div className="education-list">
          <Reveal><div className="education-row"><div><h3>American International University – Bangladesh</h3><p>BSc in Computer Science & Engineering · Major in Machine Learning</p></div><span className="mono">2023 — PRESENT</span></div></Reveal>
          <Reveal><div className="education-row"><div><h3>BISC Nirjhor</h3><p>Higher Secondary Certificate</p></div><span className="mono">2022</span></div></Reveal>
          <Reveal><div className="education-row"><div><h3>Cambrian School</h3><p>Secondary School Certificate</p></div><span className="mono">2020</span></div></Reveal>
        </div>
      </section>

      <section id="contact" className="contact section-wrap">
        <Reveal><div className="section-kicker mono"><span>05 — CONTACT</span><span></span></div></Reveal>
        <Reveal><h2>Let's make<br/><em>something matter.</em></h2></Reveal>
        <Reveal delay={.12}><div className="contact-bottom">
          <a className="email-link" href={`mailto:${email}`}>{email}<ArrowUpRight size={20}/></a>
          <button className="copy-button mono" onClick={copyEmail}>{copied ? <Check size={14}/> : <Copy size={14}/>} {copied ? "COPIED" : "COPY EMAIL"}</button>
        </div></Reveal>
      </section>
    </main>
    <footer className="footer section-wrap">
      <a className="wordmark" href="#top">NR<span>®</span></a>
      <span className="mono footer-note"></span>
      <div className="socials">
        <a href="https://github.com/nafazrahi" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a>
        <a href="https://linkedin.com/in/nafaz-mohammad-77361234a" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a>
        <a href={`mailto:${email}`} aria-label="Email"><Mail size={17}/></a>
      </div>
    </footer>
  </div>;
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App/></React.StrictMode>);
