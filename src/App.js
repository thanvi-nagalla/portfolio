import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes, FaStar, FaCode, FaBriefcase, FaGraduationCap, FaCertificate } from 'react-icons/fa';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [emailSent, setEmailSent] = useState(false);

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

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = 'mailto:nagallathanvi@gmail.com';
    setEmailSent(true);
    setTimeout(() => setEmailSent(false), 3000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'certifications', 'contact'];
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
            {['home', 'about', 'skills', 'projects', 'education', 'certifications', 'contact'].map((item) => (
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
                  Currently pursuing Bachelor of Technology in Computer Science at
                  KL University, Hyderabad. I enjoy turning ideas into
                  functional digital solutions and contributing to meaningful
                  projects as an open source contributor.
                </p>

                <div className="achievement-highlight">
                  <FaStar className="icon" />
                  <p><strong>Open Source Contributor</strong> - Contributing to meaningful projects and helping the community</p>
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

        {/* Skills Section */}
        <section id="skills" className="section bg-light">
          <div className="container">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-container">
              <motion.div
                className="skills-grid-main"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {[
                  { name: 'C', level: 'Advanced', icon: 'Code' },
                  { name: 'Java', level: 'Intermediate', icon: 'Code' },
                  { name: 'JavaScript', level: 'Advanced', icon: 'Code' },
                  { name: 'HTML5', level: 'Advanced', icon: 'Code' },
                  { name: 'CSS3', level: 'Advanced', icon: 'Code' },
                  { name: 'React', level: 'Advanced', icon: 'Code' },
                  { name: 'TypeScript', level: 'Intermediate', icon: 'Code' },
                  { name: 'Node.js', level: 'Intermediate', icon: 'Code' },
                  { name: 'Git', level: 'Advanced', icon: 'Code' },
                  { name: 'Responsive Design', level: 'Advanced', icon: 'Code' },
                  { name: 'Firebase', level: 'Intermediate', icon: 'Code' },
                  { name: 'Web APIs', level: 'Advanced', icon: 'Code' },
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="skill-card"
                    whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(99, 102, 241, 0.2)' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-icon"><FaCode /></div>
                    <h4>{skill.name}</h4>
                    <p>{skill.level}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section bg-light">
          <div className="container">
            <h2 className="section-title">My Projects</h2>
            <div className="projects-grid">
              {/* Project 1 */}
              <motion.div
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="project-icon"><FaBriefcase /></div>
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

              {/* Project 2 - VoicePulse */}
              <motion.div
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="project-icon"><FaCode /></div>
                <h3>VoicePulse</h3>
                <p>
                  A voice-based interactive application that explores speech recognition and audio processing technologies. This project demonstrates advanced audio handling and real-time voice processing capabilities using modern web technologies.
                </p>

                <div className="project-tags">
                  {['JavaScript', 'Web APIs', 'HTML/CSS', 'Audio Processing'].map(
                    (tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    )
                  )}
                </div>

                <div className="project-links">
                  <a
                    href="https://github.com/thanvi-nagalla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-small btn-outline"
                  >
                    Source Code
                  </a>
                </div>
              </motion.div>

              {/* Project 3 - UniLink */}
              <motion.div
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="project-icon"><FaBriefcase /></div>
                <h3>UniLink</h3>
                <p>
                  A university-focused social linking platform built with TypeScript and React, connecting students and fostering collaboration. UniLink enables students to network, share resources, and collaborate on academic projects within a dedicated community.
                </p>

                <div className="project-tags">
                  {['TypeScript', 'React', 'Node.js', 'Social Platform'].map(
                    (tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    )
                  )}
                </div>

                <div className="project-links">
                  <a
                    href="https://github.com/thanvi-nagalla"
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

        {/* Education Section */}
        <section id="education" className="section">
          <div className="container">
            <h2 className="section-title">Education</h2>
            <div className="timeline">
              {/* University */}
              <motion.div
                className="timeline-item"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="timeline-icon"><FaGraduationCap /></div>
                <div className="timeline-content">
                  <h3>Bachelor of Technology in Computer Science</h3>
                  <p className="institution">KL University, Hyderabad</p>
                  <p className="duration">2024 – 2028</p>
                  <p className="highlight">CGPA: 9.8</p>
                </div>
              </motion.div>

              {/* Intermediate */}
              <motion.div
                className="timeline-item"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="timeline-icon"><FaGraduationCap /></div>
                <div className="timeline-content">
                  <h3>Intermediate (MPC)</h3>
                  <p className="institution">Narayana Junior College, Telangana</p>
                  <p className="duration">2022 – 2024</p>
                  <p className="highlight">Percentage: 94.8%</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="section bg-light">
          <div className="container">
            <h2 className="section-title">Certifications</h2>
            <div className="certifications-grid">
              <motion.div
                className="certification-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="cert-icon"><FaCertificate /></div>
                <h3>MongoDB Associate Developer</h3>
                <p>Certified in MongoDB database development and best practices</p>
              </motion.div>

              <motion.div
                className="certification-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="cert-icon"><FaCertificate /></div>
                <h3>NPTEL Problem Solving Through C Programming</h3>
                <p>Completed comprehensive course on problem-solving using C</p>
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
                collaborative projects. Feel free to reach out and say hello!
              </p>
              <div className="contact-actions">
                <button
                  onClick={handleEmailClick}
                  className="btn btn-primary"
                >
                  {emailSent ? '✓ Email Opened' : 'Say Hello'}
                </button>
                <p className="contact-email">
                  Or email: <strong>nagallathanvi@gmail.com</strong>
                </p>
              </div>
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
