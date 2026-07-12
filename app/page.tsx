"use client";

import { useEffect, useState } from "react";

const skills = [
  "Python", "C++", "Embedded C/C++", "Java", "JavaScript", "PyTorch",
  "Hugging Face", "RAG", "LLMs", "FAISS", "LangChain", "YOLO",
  "ESP32", "Arduino", "Docker", "Linux", "MATLAB", "SolidWorks", "Git"
];

const experiences = [
  {
    year: "2026",
    company: "Veeam Software",
    role: "AI Engineering Intern",
    text: "Improved enterprise RAG retrieval quality through hybrid search, reranking, query expansion, and embedding evaluation across 5,000+ support cases."
  },
  {
    year: "2025",
    company: "D-Wave Quantum",
    role: "Machine Learning Developer Intern",
    text: "Built a PyTorch movie recommendation system using Restricted Boltzmann Machines and quantum-inspired machine learning."
  },
  {
    year: "2023",
    company: "Virginia Tech CPES",
    role: "Research Intern",
    text: "Researched nano-silver sintering and semiconductor packaging for EV power systems; selected as 1 of 4 students nationwide."
  },
  {
    year: "2022",
    company: "Sensoria",
    role: "Product & Technical Intern",
    text: "Explored embedded sensing, Bluetooth-enabled medical devices, and remote patient monitoring systems."
  }
];

const projects = [
  {
    title: "Enterprise RAG Optimization",
    tags: ["Python", "RAG", "Embeddings", "Search"],
    description: "Benchmarked retrieval strategies, analyzed failure modes, and improved relevance for enterprise support workflows.",
    detail: "Evaluated hybrid search, reranking, query expansion, and embedding strategies against production baselines."
  },
  {
    title: "Oscillometric Blood Pressure Monitor",
    tags: ["ESP32", "Embedded C++", "Analog Circuits", "Wi-Fi"],
    description: "Designed a full hardware-software system for non-invasive blood pressure estimation and real-time monitoring.",
    detail: "Combined analog signal conditioning, peak-detection firmware, a Wi-Fi dashboard, and AI-assisted interaction."
  },
  {
    title: "SummaNote Chrome Extension",
    tags: ["JavaScript", "HTML/CSS", "AI APIs"],
    description: "Built an AI-powered browser extension for webpage summarization, note extraction, and text-to-speech.",
    detail: "Implemented content and background scripts to automate extraction and user workflows."
  },
  {
    title: "Deer Detection",
    tags: ["YOLO", "Computer Vision", "Roboflow"],
    description: "Fine-tuned an object-detection model on a custom wildlife dataset.",
    detail: "Optimized detection performance through dataset preparation, training, and iterative evaluation."
  },
  {
    title: "Electric Motorcycle Systems",
    tags: ["ESP32", "Firmware", "Sensors", "SolidWorks"],
    description: "Built embedded and electrical subsystems for Virginia Tech's BOLT electric motorcycle team.",
    detail: "Worked on battery packaging, wiring harnesses, sensors, and a custom push-button locking mechanism."
  },
  {
    title: "Sentiment Analysis",
    tags: ["Hugging Face", "PyTorch", "NLP"],
    description: "Developed and evaluated a transformer-based text classification model.",
    detail: "Applied modern NLP tooling to build an end-to-end sentiment analysis pipeline."
  }
];

export default function Home() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      }),
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <nav className="nav">
        <a className="brand" href="#top">VH</a>
        <div className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#leadership">Leadership</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-resume" href="/Vanesha-Hari-Resume.pdf" target="_blank">Resume</a>
      </nav>

      <section id="top" className="hero">
        <div className="hero-copy reveal visible">
          <p className="eyebrow">COMPUTER ENGINEERING · VIRGINIA TECH</p>
          <h1>Vanesha Hari</h1>
          <h2>AI, embedded systems, and software engineering.</h2>
          <p className="hero-sub">
            Building intelligent systems at the intersection of machine learning,
            embedded software, and hardware.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">View Projects</a>
            <a className="button secondary" href="/Vanesha-Hari-Resume.pdf" target="_blank">View Resume</a>
          </div>
        </div>

        <div className="terminal reveal visible">
          <div className="terminal-top">
            <span /><span /><span />
          </div>
          <pre>
{`> whoami

Vanesha Hari
Computer Engineering @ Virginia Tech

Currently:
• AI Engineering Intern @ Veeam
• Virginia Tech BOLT
• CodePath AI Engineering Fellow

Focus:
• AI / Machine Learning
• Embedded Systems
• Robotics
• Software Engineering

Status:
Available Jan–Aug 2027`}
          </pre>
        </div>
      </section>

      <section className="section reveal">
        <div className="section-heading">
          <p className="eyebrow">ABOUT</p>
          <h3>I build systems that connect software intelligence to the physical world.</h3>
        </div>
        <div className="about-grid">
          <p className="about-copy">
            I am a Computer Engineering student at Virginia Tech with experience across
            enterprise AI, quantum-inspired machine learning, power electronics, embedded
            firmware, and hardware-software integration. I enjoy ambiguous problems that
            require structured experimentation, technical depth, and ownership.
          </p>
          <div className="focus-grid">
            {["AI Engineering", "Embedded Systems", "Software Engineering", "Robotics"].map(item => (
              <div className="focus-card" key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section reveal">
        <div className="section-heading">
          <p className="eyebrow">EXPERIENCE</p>
          <h3>Engineering across AI, machine learning, semiconductors, and connected devices.</h3>
        </div>
        <div className="timeline">
          {experiences.map(exp => (
            <article className="timeline-item" key={exp.company}>
              <div className="timeline-year">{exp.year}</div>
              <div>
                <h4>{exp.company}</h4>
                <p className="role">{exp.role}</p>
                <p>{exp.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section reveal">
        <div className="section-heading">
          <p className="eyebrow">FEATURED PROJECTS</p>
          <h3>Selected work across AI, embedded systems, computer vision, and robotics.</h3>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <button
              className="project-card"
              key={project.title}
              onClick={() => setActiveProject(activeProject === index ? null : index)}
            >
              <div>
                <p className="project-index">0{index + 1}</p>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
              <div>
                <div className="tags">
                  {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
                <p className={`project-detail ${activeProject === index ? "open" : ""}`}>
                  {project.detail}
                </p>
                <span className="project-link">
                  {activeProject === index ? "Close details ↑" : "View details ↗"}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="section reveal">
        <div className="section-heading">
          <p className="eyebrow">TECHNICAL TOOLKIT</p>
          <h3>Tools I use to move from concept to working system.</h3>
        </div>
        <div className="skills-cloud">
          {skills.map(skill => <span key={skill}>{skill}</span>)}
        </div>
      </section>

      <section id="leadership" className="section reveal">
        <div className="section-heading">
          <p className="eyebrow">LEADERSHIP & IMPACT</p>
          <h3>Technical leadership, community service, and sustained execution.</h3>
        </div>
        <div className="impact-grid">
          <article className="impact-card">
            <p className="impact-label">Virginia Tech BOLT</p>
            <h4>Electric Motorcycle Design Team</h4>
            <p>Embedded firmware, battery packaging, wiring harnesses, sensors, and hardware integration.</p>
          </article>
          <article className="impact-card">
            <p className="impact-label">Joys of Giving</p>
            <h4>$20K+ raised</h4>
            <p>Mobilized 15+ volunteers, engaged 1,000+ youth, and helped provide 1,500+ meals.</p>
          </article>
          <article className="impact-card">
            <p className="impact-label">Recognition</p>
            <h4>National & industry honors</h4>
            <p>U.S. Congress Gold Medal, Presidential Volunteer Service Award, 3× SWE Awards, 3× NCWIT Awards, and 425 Magazine 30 Under 30.</p>
          </article>
        </div>
      </section>

      <section id="contact" className="contact reveal">
        <p className="eyebrow">LET'S CONNECT</p>
        <h3>Interested in building intelligent systems with real-world impact?</h3>
        <p>I'm available for Jan–Aug 2027 internships and co-ops.</p>
        <div className="contact-actions">
          <a className="button primary" href="mailto:vaneshahari@gmail.com">Email Me</a>
          <a className="button secondary" href="/Vanesha-Hari-Resume.pdf" target="_blank">Resume</a>
          <a className="button secondary" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="button secondary" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <p className="small-note">Replace the LinkedIn and GitHub URLs in <code>app/page.tsx</code> with your exact profile links.</p>
      </section>

      <footer>
        <span>© 2026 Vanesha Hari</span>
        <span>Built with Next.js · Ready for Vercel</span>
      </footer>
    </main>
  );
}
