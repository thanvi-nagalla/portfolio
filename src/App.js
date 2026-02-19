import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <motion.div
            className="logo"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span>NT</span>
          </motion.div>

          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={activeSection === item ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>
                Hi, I'm <span className="highlight">Nagalla Thanvi</span>
              </h1>
              <h2>Computer Science & Engineering Student</h2>
              <p>
                Passionate about building user-friendly and impactful web
                applications
              </p>
              <div className="cta-buttons">
                <a href="#contact" className="btn btn-primary">
                  Get In Touch
                </a>
                <a href="#projects" className="btn btn-secondary">
                  View My Work
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <motion.div
                className="about-text"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p>
                  Enthusiastic and quick-learning CSE student with a strong
                  foundation in core computing concepts and problem-solving.
                  Passionate about developing user-friendly applications and
                  continuously improving technical skills.
                </p>

                <p>
                  Currently pursuing 2nd Year Computer Science & Engineering at
                  KL University, Hyderabad. I enjoy turning ideas into
                  functional digital solutions and contributing to meaningful
                  projects.
                </p>

                <h3>Technical Skills</h3>
                <div className="skills-grid">
                  {[
                    'C',
                    'Java',
                    'HTML5',
                    'CSS3',
                    'JavaScript',
                    'React',
                    'Git',
                    'Responsive Design',
                  ].map((skill) => (
                    <div key={skill} className="skill-item">
                      {skill}
                    </div>
                  ))}
                </div>

                <div className="social-links">
                  <a
                    href="https://github.com/thanvi-nagalla"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/thanvi-nagalla-162804368/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>

                  <a href="mailto:nagallathanvi@gmail.com">
                    <FaEnvelope />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section bg-light">
          <div className="container">
            <h2 className="section-title">My Project</h2>
            <div className="projects-grid">
              <motion.div
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3>ASSISTLY – Community Assistance Platform</h3>
                <p>
                  Assistly is a web-based community assistance platform designed
                  to connect individuals in need with volunteers and
                  contributors. Users can post requests, offer help, and
                  collaborate efficiently. The platform focuses on creating a
                  supportive digital ecosystem for real-world community impact.
                </p>

                <div className="project-tags">
                  {['React', 'HTML', 'CSS', 'JavaScript', 'Firebase'].map(
                    (tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    )
                  )}
                </div>

                <div className="project-links">
                  <a
                    href="https://assistly-oojv.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-small"
                  >
                    View Project
                  </a>

                  <a
                    href="https://github.com/nikhilkumarpanigrahi/ASSISTLY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-small btn-outline"
                  >
                    Source Code
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <motion.div
              className="contact-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p>
                I am currently looking for internship opportunities and
                collaborative projects. Feel free to reach out!
              </p>
              <a
                href="mailto:nagallathanvi@gmail.com"
                className="btn btn-primary"
              >
                Say Hello
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span>NT</span>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/thanvi-nagalla"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/thanvi-nagalla-162804368/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>

              <a href="mailto:nagallathanvi@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} Nagalla Thanvi. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
