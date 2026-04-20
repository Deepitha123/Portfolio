import React from 'react';
import './Leadership.css';
import { FaUsers, FaLightbulb, FaHandsHelping } from 'react-icons/fa';

const roles = [
  {
    id: 1,
    title: "AI Community Lead",
    organization: "Google Developer Student Clubs",
    period: "2023 - Present",
    description: "Leading a community of 500+ students, organizing workshops on Generative AI and Machine Learning fundamentals.",
    icon: <FaUsers />
  },
  {
    id: 2,
    title: "Technical Mentor",
    organization: "Innovation Lab",
    period: "2022 - 2023",
    description: "Mentored junior developers in Python and Data Science, guiding 5+ projects from ideation to deployment.",
    icon: <FaLightbulb />
  },
  {
    id: 3,
    title: "Open Source Contributor",
    organization: "Various AI Projects",
    period: "Ongoing",
    description: "Contributing to various open-source AI libraries and tools to improve developer accessibility to ML.",
    icon: <FaHandsHelping />
  }
];

const Leadership = () => {
  return (
    <section className="leadership-section" id="leadership">
      <div className="container">
        <h2 className="section-title">Leadership & <span>Impact</span></h2>
        <div className="leadership-grid">
          {roles.map((role) => (
            <div className="leadership-card glass" key={role.id}>
              <div className="leadership-icon">
                {role.icon}
              </div>
              <div className="leadership-content">
                <h3>{role.title}</h3>
                <h4>{role.organization}</h4>
                <p className="period">{role.period}</p>
                <p className="description">{role.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
