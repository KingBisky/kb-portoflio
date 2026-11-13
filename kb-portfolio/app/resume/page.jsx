import { Header, Footer } from "../../components/site";

export const metadata = { title: "Resume | Kang Bin Wong" };

const skills = {
  "Programming": ["Python", "SQL", "JavaScript", "HTML", "CSS"],
  "Data science": ["Scikit-learn", "Pandas", "NLP", "Flask"],
  "Tools": ["Power BI", "Excel", "Tableau", "KNIME", "SAS Viya", "Jupyter Notebook", "VS Code", "PyCharm"]
};

export default function ResumePage() {
  return <><Header/><main className="section-shell resume-page">
    <div className="eyebrow">RESUME / PROFESSIONAL PROFILE</div>
    <div className="resume-head"><div><h1>Wong Kang Bin</h1><p>Year 3 Applied AI & Analytics Student · Aspiring Data Analyst / Data Scientist</p></div><a className="button button-dark" href="https://597ef98e-cb28-46c1-bb5a-2c3a51019a14.filesusr.com/ugd/e115ba_7e43f8947e56443c832ad01c78a6b2a7.pdf" target="_blank" rel="noreferrer">Download CV PDF ↗</a></div>
    <section className="resume-section"><div className="eyebrow">01 / PROFILE</div><p className="resume-intro">Final-year Applied AI & Analytics student at Nanyang Polytechnic, aspiring to pursue a career in data analytics and data science. Interested in uncovering insights, building predictive models and solving real-world problems through data.</p><p>Experience spans visual analytics, predictive analytics, deep learning, MLOps, AI services for analytics, natural language processing and big-data processing.</p></section>
    <section className="resume-section"><div className="eyebrow">02 / EXPERIENCE</div><div className="resume-entry"><div><h2>Digital Transformation Intern</h2><strong>TOPPAN ECQUARIA</strong><span>Sep 2026 – Feb 2027</span></div><ul><li>Supporting digitalisation projects through e-services, application workflows and system functionality.</li><li>Assisting with UAT, workflow validation and document migration checks.</li><li>Identifying and documenting discrepancies, missing documents, layout inconsistencies and functional issues.</li><li>Gaining exposure to the KAIZEN low-code platform, including workflows, interfaces and backend functionality.</li></ul></div><div className="resume-entry"><div><h2>Retail Intern</h2><strong>SMS MOBILES PTE LTD</strong><span>Sep 2023 – Feb 2024</span></div><ul><li>Provided front-line customer service and assisted Chinese-speaking customers with translation during SIM registration and top-up processes.</li><li>Supported inventory management, stock replenishment and daily store operations.</li></ul></div></section>
    <section className="resume-section"><div className="eyebrow">03 / EDUCATION</div><div className="resume-entry"><div><h2>Diploma in Applied AI & Analytics</h2><strong>Nanyang Polytechnic</strong><span>Apr 2024 – Mar 2027</span></div><p>Year 3 student</p></div><div className="resume-entry"><div><h2>Higher Nitec in IT Applications Development</h2><strong>ITE College Central</strong><span>Jan 2022 – Feb 2024</span></div></div></section>
    <section className="resume-section"><div className="eyebrow">04 / SKILLS</div><div className="resume-skills">{Object.entries(skills).map(([group,items])=><div key={group}><h3>{group}</h3><div className="stack-tags">{items.map(x=><span key={x}>{x}</span>)}</div></div>)}</div></section>
    <section className="resume-section"><div className="eyebrow">05 / CERTIFICATIONS & RECOGNITION</div><ul className="resume-list"><li>SnowPro Associate: Platform Certification</li><li>Basic Proficiency in KNIME Analytics Platform</li><li>Certified Entry-Level Python Programmer</li><li>Literacy in AI</li><li>NYP Director's List Award — AY26/27 Semester 1</li><li>Top 10 Finalist — NTU CCDS Tech For Good Hackathon 2026</li></ul></section>
    <div className="resume-footer"><a className="button button-dark" href="https://597ef98e-cb28-46c1-bb5a-2c3a51019a14.filesusr.com/ugd/e115ba_7e43f8947e56443c832ad01c78a6b2a7.pdf" target="_blank" rel="noreferrer">Open downloadable CV ↗</a><p>For the latest version of the CV, replace the linked PDF with your updated file before publishing.</p></div>
  </main><Footer/></>;
}
