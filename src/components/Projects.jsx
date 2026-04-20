import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "NeuralScan AI",
    description: "Deep Learning system for early detection of neurological disorders using MRI spectral analysis.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "PyTorch", "OpenCV"],
    github: "https://github.com",
    live: "https://demo.com"
  },
  {
    id: 2,
    title: "Sentience Engine",
    description: "Large Language Model fine-tuned for empathetic conversation and mental health support. Built with Transformers and RAG architecture.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tags: ["NLP", "LLMs", "LangChain"],
    github: "https://github.com",
    live: "https://demo.com"
  },
  {
    id: 3,
    title: "EcoVision Pro",
    description: "Real-time object detection system for environmental monitoring using custom YOLOv8 models.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
    tags: ["YOLOv8", "Computer Vision", "Docker"],
    github: "https://github.com",
    live: "https://demo.com"
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">Featured <span>Projects</span></h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card glass" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                   <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>
                   </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
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
