import React, { useState } from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "MarketPulse AI",
    subtitle: "Agentic Competitive Intelligence Platform",
    description: "A real-time competitive intelligence system aggregating multi-source market signals into predictive insights using a distributed multi-agent architecture (5 AI crews, 23 agents, 19 APIs).",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
    tags: ["FastAPI", "CrewAI", "Multi-Agent", "LLM", "Microservices"],
    github: "https://github.com/Deepitha123/Samsung_Hackathon",
  },
  {
    id: 2,
    title: "Lectura",
    subtitle: "Automated Lecture Video Summarizer",
    description: "An AI-driven system that converts lecture videos into interactive study content by extracting audio, transcribing speech, summarizing key concepts, and auto-generating quiz questions.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    tags: ["Whisper ASR", "T5 Transformer", "NLP", "Python"],
    github: "https://github.com/Deepitha123/DevMate",
  },
  {
    id: 3,
    title: "TinyToes",
    subtitle: "AI-Powered Baby Care Web Platform",
    description: "An AI-powered web platform for infant care, integrating cry analysis, health tracking to provide real-time guidance and support for mothers. Designed cry classification system using CNN for  temporal pattern learning.",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=800",
    tags: ["CNN", "BiLSTM", "Multi-Head Attention", "Deep Learning"],
    github: "https://github.com/Deepitha123/TinyToes",
  },
  {
    id: 4,
    title: "MediVerse",
    subtitle: "AI-Driven Unified Healthcare Ecosystem",
    description: "A multi-modal AI healthcare platform integrating audio, image, text, and wearable data for real-time monitoring and early disease detection providing comprehensive healthcare analytics.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    tags: ["U-Net", "CNN+LSTM", "Medical Imaging", "DNN"],
    github: "https://github.com/Deepitha123/MediVerse",
  },
  {
    id: 5,
    title: "ContractIQ",
    subtitle: "Financial Contract Analytics Platform",
    description: "A platform to convert financial contracts into ACTUS-based structured models for cash flow simulation and predictive risk analysis. Integrated Ethereum-based blockchain for financial decision support.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    tags: ["XGBoost", "Blockchain", "Ethereum", "ACTUS"],
    github: "https://github.com/Deepitha123/ContractIQ",
  },
  {
    id: 6,
    title: "GlucoNav",
    subtitle: "AI-Powered Personalized Diet & Exercise Planner",
    description: "Built a real-time metabolic coaching app using CGM, food, and lifestyle data for personalized diabetes management, featuring ViT-based food classification, LightFM recommendations, and LLM-driven glucose spike prediction.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
    tags: ["ViT", "LightFM", "LLM", "CGM", "Recommender"],
    github: "https://github.com/Deepitha123",
  },
  {
    id: 7,
    title: "FluxMind",
    subtitle: "AI-Powered Dynamic Power Routing for Hybrid Battery Packs",
    description: "Built an AI-powered battery management system using MLP prediction, imitation learning, and LLM explainability for optimized Li-ion and Na-ion power distribution.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800",
    tags: ["MLP", "Imitation Learning", "LLM", "Power Systems"],
    github: "https://github.com/Deepitha123/GlucoNav",
  },
  {
    id: 8,
    title: "SensAI",
    subtitle: "AI-Powered Learning Network Platform",
    description: "Integrated features into an AI-powered learning platform using neural knowledge graphs, reputation-based peer networking, and Hybrid RAG architecture for efficient personalized knowledge retrieval.",
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=800",
    tags: ["RAG", "Knowledge Graph", "Vector DB", "LLM"],
    github: "https://github.com/Deepitha123/Hyperverge_1",
  },
  {
    id: 9,
    title: "DevMate",
    subtitle: "AI-Powered Developer Companion",
    description: "Built an AI-powered platform that converts repositories and videos into summaries, flowcharts, and interactive Q&A using LLM assistants, BART summarization, and Whisper ASR for faster developer onboarding.",
    image: "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?auto=format&fit=crop&q=80&w=800",
    tags: ["BART", "Whisper", "LLM", "React", "FastAPI"],
    github: "https://github.com/Deepitha123/DevMate",
  },
  {
    id: 10,
    title: "EquiShield",
    subtitle: "AI-Driven Gender Bias Detection System",
    description: "Built an NLP-based system to detect and correct gender bias in digital content and rewriting suggestions to promote fair and inclusive content creation.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
    tags: ["NLP", "TF-IDF", "Naïve Bayes", "Bias Detection"],
    github: "https://github.com/Deepitha123/EQUISHIELD",
  },
  {
    id: 11,
    title: "AlcoGuard",
    subtitle: "Smart Engine Lock System",
    description: "Developed an Arduino-based driver safety system that detects alcohol levels in the driver's breath, automatically locks the engine, and sends GPS notifications to officials for real-time monitoring.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
    tags: ["Arduino", "IoT", "GPS", "Embedded Systems"],
    github: "https://github.com/Deepitha123",
  },
  {
    id: 12,
    title: "EduRoots",
    subtitle: "Interactive Learning Platform",
    description: "Built an ed-tech platform for play-based learning with modules for math, vocabulary, current affairs, and quizzes, integrating News APIs for accessible and engaging low-bandwidth learning.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "News API", "Ed-Tech", "Gamification"],
    github: "https://github.com/Deepitha123/EduRoots",
  },
  {
    id: 13,
    title: "NeuroGaze",
    subtitle: "Dyslexia Detection using Eye Tracking",
    description: "Built a real-time eye-tracking system using OpenCV and Random Forest to detect dyslexia patterns from oculomotor features, with a FastAPI dashboard for live analysis and prediction.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800",
    tags: ["OpenCV", "Random Forest", "FastAPI", "Eye Tracking"],
    github: "https://github.com/Deepitha123/Dsylexia_Detection",
  },
  {
    id: 14,
    title: "Code O' Clock 2024",
    subtitle: "Hackathon Event Website",
    description: "Developed and deployed the official Code O' Clock 2024 hackathon website with registration workflows, schedules, and a responsive UI optimized for participant engagement and mobile accessibility.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Responsive UI", "Event Management"],
    github: "https://github.com/Deepitha123/CoC",
  },
  {
    id: 15,
    title: "Intellina 2K25",
    subtitle: "Technical Symposium Website",
    description: "Developed and deployed the official Intellina 2K25 website with event registration, schedules, technical event details, and a responsive mobile-friendly UI for seamless participant interaction.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Responsive Design", "Frontend"],
    github: "https://github.com/Deepitha123/Intellina_events",
  },
  {
    id: 16,
    title: "Tommy AI",
    subtitle: "Image Enhancement & Segmentation Pipeline",
    description: "Worked with Stable Diffusion and ControlNet variants for controlled image generation and enhancement, integrating SAM-based segmentation, refinement, and upscaling for high-quality outputs.",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=800",
    tags: ["Stable Diffusion", "ControlNet", "SAM", "Image Gen"],
    github: "https://github.com/Deepitha123/Tommy_ImageEnhancer",
  },
  {
    id: 17,
    title: "PlagCheck AI",
    subtitle: "Assignment Evaluation System",
    description: "Built an AI-powered plagiarism and AI-content detection platform using TF-IDF, Sentence Transformers, and HuggingFace models, with FastAPI and React pipelines for semantic analysis and explainable detection.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800",
    tags: ["Sentence Transformers", "TF-IDF", "FastAPI", "React"],
    github: "https://github.com/Deepitha123/Plagiarism_Checker",
  },
];

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">Featured <span>Projects</span></h2>
        <p className="projects-subtitle">A collection of AI, ML, and full-stack systems I've built</p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              className="project-card glass"
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View on GitHub"
                      className="github-link"
                    >
                      <FaGithub />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-icon-inline"
                    title="View on GitHub"
                  >
                    <FaGithub />
                  </a>
                </div>
                <p className="project-subtitle-text">{project.subtitle}</p>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
