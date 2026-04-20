import React from 'react';
import './Awards.css';
import { FaTrophy, FaAward, FaMedal } from 'react-icons/fa';

const awards = [
  {
    id: 1,
    title: "Global AI Hackathon Winner",
    organization: "OpenAI & Microsoft",
    date: "2024",
    description: "First place for developing an AI-driven disaster response system using real-time satellite imagery.",
    icon: <FaTrophy />
  },
  {
    id: 2,
    title: "Outstanding AI Research Award",
    organization: "University Tech Summit",
    date: "2023",
    description: "Recognized for innovative research in 'Explainable AI for Healthcare Systems'.",
    icon: <FaAward />
  },
  {
    id: 3,
    title: "National Merit Scholar",
    organization: "Department of Education",
    date: "2022",
    description: "Top 1% in national level competitive examination for technical studies.",
    icon: <FaMedal />
  }
];

const Awards = () => {
  return (
    <section className="awards-section" id="awards">
      <div className="container">
        <h2 className="section-title">Honors & <span>Awards</span></h2>
        <div className="awards-grid">
          {awards.map((award) => (
            <div className="award-card glass" key={award.id}>
              <div className="award-icon">
                {award.icon}
              </div>
              <div className="award-content">
                <span className="award-date">{award.date}</span>
                <h3>{award.title}</h3>
                <h4>{award.organization}</h4>
                <p>{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
