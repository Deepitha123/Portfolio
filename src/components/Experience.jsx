import React, { useState } from 'react';
import './Experience.css';

const experiences = [
  {
    id: 'telkom',
    role: 'Research Intern',
    company: 'Telkom University',
    location: 'Bandung, Indonesia',
    period: 'May 2025 – June 2025',
    type: 'Research',
    logo: '/logos/telkom.png',
    color: '#b43a42ff',
    projects: [
      {
        title: 'Semantic Similarity Detector',
        bullets: [
          'Developed a RAG-inspired hybrid NLP system for semantic similarity detection across 599+ Bahasa Indonesia academic projects, improving originality analysis',
          'Integrated SBERT, IndoBERT, BERTopic, and FAISS with ontology-based mapping for scalable, multilingual (Indonesian + English) and domain-aware retrieval',
          'Built a multi-stage pipeline (embedding + clustering + indexing + LLM-based generation) for high-accuracy top-k retrieval and context-aware project recommendations',
        ],
        stack: ['Python', 'SentenceTransformers', 'FAISS', 'BERTopic', 'LLM APIs'],
      },
    ],
  },
  {
    id: 'dsignz',
    role: 'AI/ML Intern',
    company: 'Dsignz Media',
    location: 'Peelamedu, Coimbatore',
    period: 'July 2025 – April 2026',
    type: 'Industry',
    logo: '/logos/dsignz.png',
    color: '#54c146ff',
    projects: [
      {
        title: 'Taigha Real Estate Chatbot',
        bullets: [
          'Built an AI-powered chatbot using MCP, designing custom tools and schemas for structured interactions in property search, filtering, and personalized recommendations',
          'Implemented NLP-based intent recognition and entity extraction, enabling accurate query understanding and context-aware multi-turn conversations',
          'Developed a database interaction layer using SQLAlchemy, ensuring real-time property retrieval and seamless backend integration',
        ],
        stack: ['Python', 'NLP', 'SQLAlchemy', 'MCP', 'REST APIs'],
      },
      {
        title: 'BatteryBrain',
        bullets: [
          'Developed a full-stack admin dashboard using React, FastAPI, and Supabase to monitor battery performance metrics and track pricing trends across materials and battery types',
          'Built an automated AI-driven newsletter curation pipeline for BESS market intelligence with multi-stage processing (scan → filter → deep research → synthesis → human approval queue)',
          'Implemented noise reduction and relevance filtering on real-world data, and engineered a token-optimized, cost-efficient worflow using Claude MCP tools, deployed via Railway with CI/CD pipeline',
        ],
        stack: ['React.js', 'FastAPI', 'Supabase', 'Claude MCP', 'DuckDuckGoSearch', 'Railway'],
      },
      {
        title: 'Document Validator',
        bullets: [
          'Built an automated document processing pipeline to extract structured information (names, counterparties, signatures, timestamps, duration) from scanned and digital real estate agreements',
          'Developed a FastAPI-based validation service to verify document integrity and signature authenticity, enabling reliable storage and retrieval in a database',
          'Engineered a scalable system supporting 60+ document formats, significantly reducing manual verification effort and improving processing efficiency',
        ],
        stack: ['Python', 'FastAPI', 'EasyOCR', 'Tesseract', 'PyPDF', 'pdfplumber'],
      }
    ],
  },
  {
    id: 'infisum',
    role: 'Graduate Project Trainee',
    company: 'Infinite Sum  Modelling',
    location: 'USA',
    period: 'Dec 2025 – Apr 2026',
    type: 'Blockchain',
    logo: '/logos/infisum.png',
    color: '#1695c3ff',
    projects: [
      {
        title: 'ChainAim - vLEI Digital Trust',
        bullets: [
          'Built a decentralized identity system issuing verifiable credentials (vLEI/GLEIF, KERI) to organizations and AI agents, enabling secure, cryptographically signed invoice exchange without a central authority',
          'Designed the end-to-end trust chain (root authority → organizations → roles → AI agents) and implemented cross-organization credential workflows with a custom schema and secure agent-to-agent handshake',
          'Engineered a containerized multi-service architecture (TypeScript, Node.js, Docker) with reproducible deployment, and resolved schema-resolution failures by building a robust multi-strategy resolver',
        ],
        stack: ['TypeScript', 'Node.js', 'Docker', 'KERI Protocol', 'vLEI (GLEIF)'],
      },
    ],
  },
];

/* Derive bg / border / text theme from any hex color */
const hexToRgb = (hex) => {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `${r},${g},${b}`;
};
const getTheme = (hex) => ({
  text: hex,
  bg: `rgba(${hexToRgb(hex)},0.12)`,
  border: `rgba(${hexToRgb(hex)},0.35)`,
});

const Experience = () => {
  const [activeExp, setActiveExp] = useState('dsignz');
  const [activeProj, setActiveProj] = useState(0);

  const active = experiences.find((e) => e.id === activeExp);
  const tc = getTheme(active.color);
  const proj = active.projects[activeProj] ?? active.projects[0];

  const handleExpChange = (id) => {
    setActiveExp(id);
    setActiveProj(0);
  };

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title animate-fade-in">
          MY <span>EXPERIENCE</span>
        </h2>

        <div className="exp-layout">
          {/* Sidebar */}
          <nav className="exp-sidebar">
            {experiences.map((exp) => {
              const isActive = exp.id === activeExp;
              const tc2 = getTheme(exp.color);
              return (
                <button
                  key={exp.id}
                  className={`exp-tab ${isActive ? 'active' : ''}`}
                  style={isActive ? { borderColor: tc2.text } : {}}
                  onClick={() => handleExpChange(exp.id)}
                >
                  <div className="exp-tab-top">
                    <div className="exp-tab-info">
                      <span className="exp-tab-role">{exp.role}</span>
                      <span className="exp-tab-company">{exp.company}</span>
                      <span className="exp-tab-period">{exp.period}</span>
                    </div>
                    <div className="exp-tab-logo-wrap">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="exp-tab-logo"
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </nav>

          {/* Main content panel */}
          <div className="exp-panel glass animate-fade-in" key={activeExp}>
            {/* Header */}
            <div className="exp-header" style={{ borderBottom: `1px solid ${tc.border}` }}>
              <div className="exp-header-left">
                <h3 className="exp-role" style={{ color: tc.text }}>{active.role}</h3>
                <div className="exp-meta">
                  <span className="exp-company">{active.company}</span>
                  <span className="exp-dot">•</span>
                  <span className="exp-location">{active.location}</span>
                </div>
                <span className="exp-period">{active.period}</span>
              </div>
              <div className="exp-logo-wrap">
                <img
                  src={active.logo}
                  alt={active.company}
                  className="exp-company-logo"
                />
              </div>
            </div>

            {/* Project sub-tabs — only shown when multiple projects exist */}
            {active.projects.length > 1 && (
              <div className="exp-proj-tabs" style={{ borderBottom: `1px solid ${tc.border}` }}>
                {active.projects.map((p, pi) => (
                  <button
                    key={pi}
                    className={`exp-proj-pill ${activeProj === pi ? 'active' : ''}`}
                    style={activeProj === pi
                      ? { background: tc.bg, color: tc.text, borderColor: tc.border }
                      : {}}
                    onClick={() => setActiveProj(pi)}
                  >
                    <span className="exp-proj-pill-num" style={activeProj === pi ? { color: tc.text } : {}}>
                      {String(pi + 1).padStart(2, '0')}
                    </span>
                    <span className="exp-proj-pill-label">{p.title}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Single active project body */}
            <div className="exp-project">
              {active.projects.length === 1 && proj.title && (
                <div className="exp-project-title-row">
                  <span className="exp-project-num" style={{ color: tc.text }}>▹</span>
                  <h4 className="exp-project-title">{proj.title}</h4>
                </div>
              )}

              <ul className="exp-bullets">
                {proj.bullets.map((b, bi) => (
                  <li key={bi} className="exp-bullet">
                    <span className="exp-bullet-dot" style={{ color: tc.text }}>▹</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="exp-stack-row">
                {proj.stack.map((s, si) => (
                  <span
                    key={si}
                    className="exp-stack-tag"
                    style={{ background: tc.bg, color: tc.text, border: `1px solid ${tc.border}` }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
