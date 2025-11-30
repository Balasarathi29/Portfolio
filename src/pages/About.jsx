import React from "react";
import { motion } from "framer-motion";
import { Calendar, Briefcase, GraduationCap } from "lucide-react";
import "./About.css";

const About = () => {
  return (
    <section className="section container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="about-header"
      >
        <h2 className="text-gradient">About Me</h2>
        <p className="about-intro">
          I am a passionate Full Stack Developer with a knack for building
          beautiful, functional, and scalable web applications. With a strong
          foundation in both frontend and backend technologies, I enjoy solving
          complex problems and creating intuitive user experiences.
        </p>
      </motion.div>

      <div className="about-content">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="timeline-section"
        >
          <h3 className="section-title">
            <Briefcase size={24} /> Experience
          </h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">June 25 - July 25</div>
              <h4 className="timeline-role">Full Stack Developer</h4>
              <h5 className="timeline-company">MIND IT Intern</h5>
              <p className="timeline-desc">
                Gained hands-on experience in both front-end and back-end technologies, contributing to real-world
                development tasks.
              </p>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2023 Dec - 2024 Jan</div>
              <h4 className="timeline-role">Web Developer</h4>
              <h5 className="timeline-company">TechnoHacks Intern (Remote)</h5>
              <p className="timeline-desc">
               Gained hands-on experience in building responsive websites and understanding core web technologies.Develop and maintained websites, ensuring optimal performance and user experience.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="timeline-section"
        >
          <h3 className="section-title">
            <GraduationCap size={24} /> Education
          </h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2022 - 2026</div>
              <h4 className="timeline-role">Bachelor of Computer Science</h4>
              <h5 className="timeline-company">Jaya Engineering College</h5>
              <p className="timeline-desc">
                Graduated with Honors. Specialized in Software Engineering and
                Web Technologies.
              </p>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2021 - 2022</div>
              <h4 className="timeline-role">+2 Bio-Maths</h4>
              <h5 className="timeline-company">Govt.Hr.Sec.School, Nagercoil</h5>
              <p className="timeline-desc">
                Completed Higher Secondary with a focus on Bio-Maths, strengthening logical reasoning, scientific understanding, and problem-solving abilities.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
