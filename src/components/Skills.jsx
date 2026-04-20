import React from 'react';
import { 
  FaPython, FaJs, FaReact, FaGitAlt, FaDatabase, FaRobot, 
  FaLanguage, FaEye, FaJava, FaHtml5, FaCss3Alt, FaBootstrap,
  FaPlug, FaMicrochip, FaChartBar, FaCode, FaMicrophone, FaGlobe
} from 'react-icons/fa';
import { 
  SiPytorch, SiTensorflow, SiScikitlearn, SiOpenai, SiLangchain, 
  SiDocker, SiFastapi, SiPandas, SiNumpy, 
  SiTailwindcss, SiFlutter, SiFirebase, SiSupabase, SiSelenium,
  SiDatabricks, SiR
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Generative AI & ML",
      skills: [
        { name: "Machine Learning", icon: <FaRobot /> },
        { name: "Deep Learning", icon: <FaBrain /> },
        { name: "NLP", icon: <FaLanguage /> },
        { name: "Computer Vision", icon: <FaEye /> },
        { name: "LLMs", icon: <SiOpenai /> },
        { name: "LangChain, CrewAI", icon: <SiLangchain /> },
        { name: "RAG Pipelines", icon: <FaDatabase /> },
        { name: "ChromaDB & FAISS", icon: <FaDatabase /> },
        { name: "Sentence Transformers", icon: <FaBrain /> },
        { name: "Whisper ASR", icon: <FaMicrophone /> },
        { name: "Transformer Models (T5)", icon: <FaRobot /> },
        { name: "MCP", icon: <FaPlug /> }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "PyTorch", icon: <SiPytorch /> },
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "Scikit-learn", icon: <SiScikitlearn /> },
        { name: "Pandas", icon: <SiPandas /> },
        { name: "NumPy", icon: <SiNumpy /> },
        { name: "Matplotlib", icon: <FaChartBar /> },
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "Selenium", icon: <SiSelenium /> },
        { name: "BeautifulSoup", icon: <FaGlobe /> },
        { name: "EasyOCR & Tesseract", icon: <FaEye /> }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "C", icon: <FaCode /> },
        { name: "R", icon: <SiR /> },
        { name: "Dart", icon: <SiFlutter /> }
      ]
    },
    {
      title: "Web & App Development",
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React.js", icon: <FaReact /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Flutter", icon: <SiFlutter /> }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "MySQL", icon: <FaDatabase /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Supabase", icon: <SiSupabase /> },
        
        { name: "Power BI", icon: <FaChartBar /> },
        { name: "Tableau", icon: <SiDatabricks /> },
        { name: "VS Code", icon: <VscCodeIcon /> },
        { name: "Cursor AI", icon: <CursorIcon /> },
        { name: "Railway", icon: <FaGlobe /> },
        { name: "REST APIs", icon: <FaPlug /> },
        { name: "API Integration", icon: <FaPlug /> }
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title animate-fade-in">TECHNICAL <span>SKILLS</span></h2>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category-row animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3>{category.title}</h3>
              <div className="marquee-wrapper">
                <div className={`marquee-track ${index % 2 === 1 ? 'reverse' : ''}`}>
                  {[...category.skills, ...category.skills, ...category.skills].map((skill, sIndex) => (
                    <div key={sIndex} className="skill-item">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
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

// SVG Fallback Components
const FaBrain = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 112c-15.65 0-30.82 2.66-44.93 7.5a64 64 0 0 0-111.45-31.11L256 91.13l-3.62-2.74A64 64 0 0 0 140.93 119.5c-14.11-4.84-29.28-7.5-44.93-7.5a112 112 0 0 0 0 224c15.65 0 30.82-2.66 44.93-7.5a64 64 0 0 0 111.45 31.11L256 356.87l3.62 2.74A64 64 0 0 0 371.07 328.5c14.11 4.84 29.28 7.5 44.93 7.5a112 112 0 0 0 0-224zm-160 32a16 16 0 1 1 16-16 16 16 0 0 1-16 16z"></path></svg>;

const VscCodeIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.15 2.587L17.21.033c-.363-.156-.77-.03-1.008.303L8.143 11.334 3.125 7.05a.8.8 0 0 0-1.127.054L.23 9.283a.8.8 0 0 0 .044 1.133l4.28 3.583-4.28 3.583a.8.8 0 0 0-.044 1.133l1.768 2.179a.8.8 0 0 0 1.127.054l5.018-4.284 8.059 10.998c.238.333.645.459 1.008.303l5.94-2.554a.8.8 0 0 0 .47-.73V3.317a.8.8 0 0 0-.47-.73zm-6.723 3.513l4.316 1.855V16.04l-4.316 1.856V6.1z"></path>
  </svg>
);

const CursorIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 2l12 11.2L12 14.5l-2 7.5L7 2z" fill="var(--accent)"></path>
  </svg>
);

export default Skills;
