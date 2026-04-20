import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: "AI Innovation Lab",
      role: "Senior AI Developer",
      period: "2023 - Present",
      description: "Leading the development of generative AI applications and RAG systems using LangChain and OpenAI. Optimized model inference performance by 40%.",
      points: [
        "Architected end-to-end AI pipelines for automated document analysis.",
        "Mentored junior developers in deep learning best practices.",
        "Collaborated with product teams to integrate AI features into core products."
      ]
    },
    {
      company: "Tech Solutions Corp",
      role: "Machine Learning Engineer",
      period: "2021 - 2023",
      description: "Designed and implemented computer vision models for real-time object detection and tracking in industrial environments.",
      points: [
        "Deployed models on edge devices using TensorRT and ONNX.",
        "Improved model accuracy by 15% through advanced data augmentation techniques.",
        "Built automated CI/CD pipelines for model retraining and validation."
      ]
    },
    {
      company: "Future AI Systems",
      role: "Data Scientist Intern",
      period: "2020 - 2021",
      description: "Conducted exploratory data analysis and developed predictive models for customer churn using Scikit-Learn.",
      points: [
        "Analyzed large-scale datasets to identify key user behavior patterns.",
        "Presented technical findings to non-technical stakeholders with clear visualizations.",
        "Built internal dashboards for real-time monitoring of model metrics."
      ]
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title animate-fade-in">MY <span>EXPERIENCE</span></h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} animate-fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="timeline-content glass">
                <span className="period">{exp.period}</span>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
                <ul>
                  {exp.points.map((point, pIndex) => (
                    <li key={pIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
