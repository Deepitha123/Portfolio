import React from 'react';
import './Contact.css';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">Get In <span>Touch</span></h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-item">
              <div className="icon-box">
                <FaEnvelope />
              </div>
              <div>
                <h4>Email</h4>
                <p>deepitha@example.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon-box">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>Location</h4>
                <p>Hyderabad, India</p>
              </div>
            </div>

            <div className="contact-socials">
              <a href="#" className="social-icon"><FaLinkedin /></a>
              <a href="#" className="social-icon"><FaGithub /></a>
            </div>
          </div>

          <div className="contact-form-container glass">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
