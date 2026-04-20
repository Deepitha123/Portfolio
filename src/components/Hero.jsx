import React from 'react';
import { FaGithub, FaLinkedin, FaMedium, FaFileAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Hero.css';
import heroImg from '../assets/hero-illustration.png';
import DecryptedText from './DecryptedText';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container hero-content">
        <div className="hero-text animate-fade-in">
          <p className="hero-greeting">Hello, I am</p>
          <h1 className="hero-title">
            <DecryptedText 
              text="DEEPITHA" 
              animateOn="view" 
              revealDirection="start" 
              speed={150}
              maxIterations={20}
              className="revealed"
              encryptedClassName="encrypted"
            />
            <br />
            <span className="accent-text">
              <DecryptedText 
                text="AI/ML ENGINEER" 
                animateOn="view" 
                revealDirection="start" 
                speed={150}
                maxIterations={25}
                className="revealed"
                encryptedClassName="encrypted"
              />
            </span>
          </h1>
          <p className="hero-description">
            I am a passionate and curious AI Developer focused on solving challenges and building applications with quality and real-world applicability.
          </p>
          
          <div className="hero-btns">
            <button className="btn btn-primary" onClick={() => window.location.href='/contact'}>Hire me</button>
            <a href="/resume.pdf" target="_blank" className="btn btn-secondary">
              <DecryptedText 
                text="Resume" 
                animateOn="hover"
                revealDirection="end"
              />
              <FaFileAlt size={18} />
            </a>
          </div>
          
          <div className="social-links">
            <a href="https://www.linkedin.com/in/deepitha-m-76961928b/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin size={24} /></a>
            <a href="https://github.com/Deepitha123" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub size={24} /></a>
            <a href="https://leetcode.com/u/6vsddnU5uY/" target="_blank" rel="noopener noreferrer" title="LeetCode"><SiLeetcode size={24} /></a>
            <a href="https://medium.com/@deepithalatha2005" target="_blank" rel="noopener noreferrer" title="Medium"><FaMedium size={24} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" title="Resume"><FaFileAlt size={24} /></a>
          </div>
        </div>
        
        <div className="hero-image animate-fade-in">
          <div className="image-wrapper">
             <img src={heroImg} alt="Creative Illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
