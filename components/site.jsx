"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import projects from "../data/projects.json";

const categories = ["All", "Data Analytics", "AI & Machine Learning", "Web Applications", "Data Engineering"];

function Mark({ children }) { return <span className="mark">{children}</span>; }

export function Header() {
  const [open,setOpen] = useState(false);
  return <header className="header"><div className="nav-wrap">
    <Link className="brand" href="/"><span className="brand-mark">KB</span><span>KANG BIN<span className="brand-sub">DATA · AI · ANALYTICS</span></span></Link>
    <button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open ? "✕" : "☰"}</button>
    <nav className={open ? "nav open" : "nav"}>
      <Link href="/#work" onClick={()=>setOpen(false)}>Work</Link><Link href="/#about" onClick={()=>setOpen(false)}>About</Link><Link href="/resume" onClick={()=>setOpen(false)}>Resume</Link><Link href="/#certifications" onClick={()=>setOpen(false)}>Credentials</Link><Link href="/#contact" onClick={()=>setOpen(false)}>Contact</Link>
      <a className="nav-cta" href="https://github.com/KingBisky" target="_blank" rel="noreferrer">GitHub ↗</a>
    </nav>
  </div></header>;
}

function CoverArt({ project, large=false }) {
  const cls = "cover-art art-" + (project.category === "Data Analytics" ? "data" : project.category === "Web Applications" ? "web" : project.category === "Data Engineering" ? "eng" : "ai");
  return <div className={cls + (large ? " cover-large" : "")}>
    <div className="art-grid"></div><div className="art-orbit orbit-one"></div><div className="art-orbit orbit-two"></div>
    <div className="art-label">{project.category.toUpperCase()}</div>
    <div className="art-code">{project.slug === "financequest" ? "01 / FINANCE" : project.slug === "waste-news-classification" ? "02 / CLASSIFY" : project.slug === "hdb-resale-dashboard" ? "03 / VISUALISE" : "KB / PROJECT"}</div>
    <div className="art-title">{project.title}</div>
    <div className="art-lines"><i></i><i></i><i></i></div>
  </div>;
}

function ProjectCard({ project, index }) {
  return <Link href={"/projects/"+project.slug} className="project-card">
    <div className="project-image"><CoverArt project={project}/><span className="card-index">{String(index+1).padStart(2,"0")}</span><span className="card-arrow">↗</span></div>
    <div className="project-meta"><span>{project.category}</span><span>{project.year}</span></div>
    <h3>{project.title}</h3><p>{project.summary}</p>
    <div className="tag-row">{project.stack.slice(0,3).map(t=><span key={t}>{t}</span>)}</div>
    <div className="card-link">Explore project <span>↗</span></div>
  </Link>;
}

export function ProjectExplorer() {
  const [category,setCategory] = useState("All");
  const [query,setQuery] = useState("");
  const filtered = useMemo(()=>projects.filter(p=>(category==="All"||p.category===category) && (p.title+" "+p.summary+" "+p.stack.join(" ")).toLowerCase().includes(query.toLowerCase())),[category,query]);
  return <div className="explorer">
    <div className="filter-top"><div className="filters">{categories.map(c=><button key={c} onClick={()=>setCategory(c)} className={category===c?"filter active":"filter"}>{c}</button>)}</div>
    <label className="search-box"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search projects..." /></label></div>
    <div className="results-line"><span>{filtered.length} PROJECT{filtered.length===1?"":"S"}</span><span>SELECTED WORK · 2024—2026</span></div>
    <div className="project-grid">{filtered.map((p,i)=><ProjectCard key={p.slug} project={p} index={projects.indexOf(p)}/>)}</div>
    {filtered.length===0 && <div className="empty-state">No projects match that search. Try another keyword.</div>}
  </div>;
}

export function Footer() {
  return <footer className="footer"><div className="footer-top"><div><div className="footer-kicker">HAVE A PROJECT IN MIND?</div><h2>Let's make data<br/><em>make sense.</em></h2></div><a className="round-link" href="https://github.com/KingBisky" target="_blank" rel="noreferrer">↗</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Kang Bin Wong</span><span>BUILT WITH CURIOSITY · SINGAPORE</span><a href="https://github.com/KingBisky" target="_blank" rel="noreferrer">GITHUB ↗</a></div></footer>;
}

export function HomePage() {
  const featured = [projects[0],projects[8],projects[9]];
  return <><Header/><main>
    <section className="hero section-shell"><div className="hero-copy"><div className="eyebrow"><span className="status-dot"></span> APPLIED AI & ANALYTICS · SINGAPORE</div><h1>Turning data<br/>into <em>direction.</em></h1><p className="hero-lede">I'm Kang Bin — an Applied AI & Analytics student interested in data analytics, machine learning and building useful things with data.</p><div className="hero-actions"><a className="button button-dark" href="#work">Explore my work <span>↘</span></a><a className="text-link" href="https://github.com/KingBisky" target="_blank" rel="noreferrer">GitHub profile ↗</a></div><div className="hero-footnote"><span>01 / INTRODUCTION</span><span>SCROLL TO EXPLORE ↓</span></div></div>
      <div className="hero-visual"><div className="visual-top"><span>DATA / VISUAL / INSIGHT</span><span>01—03</span></div><div className="visual-canvas"><div className="visual-orbit o1"></div><div className="visual-orbit o2"></div><div className="visual-cross">×</div><div className="visual-center"><span>KB</span><small>ANALYTICS<br/>PORTFOLIO</small></div><div className="visual-chip chip-a">PYTHON</div><div className="visual-chip chip-b">MACHINE LEARNING</div><div className="visual-chip chip-c">DATA STORYTELLING</div><div className="visual-axis">01&nbsp;&nbsp; 10&nbsp;&nbsp; 11&nbsp;&nbsp; 01&nbsp;&nbsp; 00</div></div><div className="visual-bottom"><span>CURIOUS BY DEFAULT.</span><span>BUILT TO EXPLORE.</span></div></div>
    </section>
    <section className="ticker"><div>DATA ANALYTICS <b>✳</b> MACHINE LEARNING <b>✳</b> VISUAL STORYTELLING <b>✳</b> APPLIED AI <b>✳</b> DATA ENGINEERING <b>✳</b> </div></section>
    <section className="section-shell section-pad" id="work"><div className="section-heading"><div><div className="eyebrow">02 / SELECTED WORK</div><h2>Projects with<br/><em>purpose.</em></h2></div><p>A collection of experiments, applications and analytical projects — from predictive modelling to interactive dashboards.</p></div><ProjectExplorer/></section>
    <section className="about-band" id="about"><div className="section-shell about-layout"><div><div className="eyebrow light">03 / A LITTLE ABOUT ME</div><h2>Curiosity first.<br/><em>Evidence always.</em></h2></div><div className="about-text"><p>I'm currently pursuing a Diploma in Applied AI & Analytics. I enjoy exploring how data can explain patterns, support decisions and solve practical problems.</p><p>My interests sit around analytics, statistics, machine learning and communicating findings clearly. I like understanding not only what a model predicts, but why its results matter.</p><div className="about-stats"><div><strong>13</strong><span>PROJECTS</span></div><div><strong>3+</strong><span>CORE DOMAINS</span></div><div><strong>∞</strong><span>QUESTIONS</span></div></div></div></div></section>
    <section className="section-shell section-pad" id="experience"><div className="section-heading"><div><div className="eyebrow">04 / EXPERIENCE & TOOLKIT</div><h2>Learning by<br/><em>building.</em></h2></div><p>Experience across application development, testing, analytics and applied machine learning.</p></div><div className="experience-grid"><article className="experience-card"><div className="exp-date">2026 · INTERNSHIP</div><h3>TOPPAN Ecquaria</h3><p className="exp-role">Intern · Project / UAT Support</p><p>Supporting user acceptance testing for an eLitigation document migration project, validating workflows, comparing expected and actual behaviour, documenting defects and retesting fixes.</p><span className="exp-note">QUALITY · VALIDATION · COLLABORATION</span></article><article className="experience-card"><div className="exp-date">EARLIER EXPERIENCE</div><h3>SMS Mobiles</h3><p className="exp-role">ITE Internship · Customer Service</p><p>Gained experience in customer-facing support, communication and day-to-day retail operations.</p><span className="exp-note">COMMUNICATION · SERVICE</span></article></div><div className="skills-wrap"><div className="eyebrow">TOOLS & TECHNOLOGIES</div><div className="skill-cloud">{["Python","SQL","Power BI","Pandas","NumPy","Scikit-learn","TensorFlow / Keras","NLP","Flask","D3.js","Snowflake","Git","Excel","Matplotlib"].map(s=><span key={s}>{s}</span>)}</div></div></section>
    <section className="section-shell section-pad" id="certifications"><div className="section-heading"><div><div className="eyebrow">05 / CREDENTIALS</div><h2>Proof of<br/><em>progress.</em></h2></div><p>Certifications and recognition earned through academic work, technical learning and project experience.</p></div><div className="credential-grid"><article><span>APR 2026</span><h3>SnowPro Associate</h3><p>Platform Certification · Snowflake</p></article><article><span>JUL 2025</span><h3>KNIME Analytics Platform</h3><p>Basic Proficiency · Level 1</p></article><article><span>2026</span><h3>NTU CCDS Tech For Good</h3><p>Top 10 Finalist · Hackathon</p></article><article><span>AY26/27 S1</span><h3>NYP Director's List</h3><p>Year 3 Semester 1 recognition</p></article><article><span>OTHER CREDENTIALS</span><h3>Python & AI</h3><p>Certified Entry-Level Python Programmer · Literacy in AI</p></article><article><span>OTHER CREDENTIALS</span><h3>Analytics Foundations</h3><p>Business Analytics Foundations · Advanced Data Analytics</p></article></div><div className="credentials-link"><a className="text-link" href="https://wongkangbin.wixsite.com/kb_portfolio/certifications" target="_blank" rel="noreferrer">View original certificates page ↗</a></div></section>
    <section className="contact-band" id="contact"><div className="section-shell contact-layout"><div><div className="eyebrow light">05 / GET IN TOUCH</div><h2>Have a good<br/><em>question?</em></h2><p>I'm always open to conversations about data, analytics, projects and opportunities.</p></div><div className="contact-links"><a href="mailto:wongkangbin@gmail.com">Email <span>↗</span></a><a href="https://github.com/KingBisky" target="_blank" rel="noreferrer">GitHub <span>↗</span></a><a href="https://wongkangbin.wixsite.com/kb_portfolio" target="_blank" rel="noreferrer">Original Wix portfolio <span>↗</span></a></div></div></section>
  </main><Footer/></>;
}

export function ProjectPage({ project }) {
  const [copied,setCopied] = useState(false);
  const copy = async()=>{try{await navigator.clipboard.writeText(window.location.href);setCopied(true);setTimeout(()=>setCopied(false),1600)}catch(e){}};
  const related = projects.filter(p=>p.slug!==project.slug && p.category===project.category).slice(0,3);
  return <><Header/><main className="project-detail"><div className="section-shell"><Link className="back-link" href="/#work">← BACK TO PROJECTS</Link>
    <div className="detail-hero"><div><div className="eyebrow">{project.category.toUpperCase()} · {project.year}</div><h1>{project.title}</h1><p>{project.summary}</p><div className="detail-actions"><a className="button button-dark" href={project.github} target="_blank" rel="noreferrer">GitHub profile <span>↗</span></a><button className="button button-outline" onClick={copy}>{copied?"Link copied ✓":"Share project ↗"}</button></div></div><div className="detail-art"><CoverArt project={project} large/></div></div>
    <div className="detail-meta"><div><span>PROJECT TYPE</span><strong>{project.category}</strong></div><div><span>YEAR</span><strong>{project.year}</strong></div><div><span>CASE STUDY</span><strong>{project.status}</strong></div></div>
    <div className="detail-content"><aside><div className="eyebrow">ON THIS PAGE</div><a href="#overview">Overview</a><a href="#approach">Approach</a><a href="#outcomes">Outcomes</a><a href="#stack">Technology</a></aside><div className="detail-main">
      <section id="overview"><div className="eyebrow">01 / OVERVIEW</div><h2>The thinking<br/><em>behind the work.</em></h2><p>{project.long}</p><div className="problem-box"><span>THE CHALLENGE</span><p>{project.problem}</p></div></section>
      <section id="approach"><div className="eyebrow">02 / APPROACH</div><h2>From question<br/><em>to execution.</em></h2><div className="approach-list">{project.approach.map((a,i)=><div className="approach-item" key={a}><span>{String(i+1).padStart(2,"0")}</span><p>{a}</p></div>)}</div></section>
      <section id="outcomes"><div className="eyebrow">03 / OUTCOMES & NOTES</div><h2>What came<br/><em>out of it.</em></h2><div className="outcome-list">{project.results.map((r,i)=><div key={r}><span>↗</span>{r}</div>)}</div></section>
      <section id="stack"><div className="eyebrow">04 / TECHNOLOGY</div><h2>The toolkit.</h2><div className="stack-tags">{project.stack.map(s=><span key={s}>{s}</span>)}</div></section>
      {project.status.includes("detail page") && <div className="notice"><strong>Case study in progress</strong><p>This project is listed using the information currently available on the original portfolio. More detailed methodology, screenshots and verified results can be added when the project materials are ready.</p></div>}
      <div className="detail-bottom"><a className="button button-dark" href={project.github} target="_blank" rel="noreferrer">Explore GitHub profile <span>↗</span></a><Link className="text-link" href="/#work">Back to all projects ↗</Link></div>
    </div></div>
    {related.length>0&&<section className="related"><div className="eyebrow">KEEP EXPLORING</div><h2>More in {project.category.toLowerCase()}.</h2><div className="related-grid">{related.map((p,i)=><ProjectCard key={p.slug} project={p} index={projects.indexOf(p)}/>)}</div></section>}
  </div></main><Footer/></>;
}
