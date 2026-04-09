import React from "react";
import Hero from "../components/Hero";
import SkillCard from "../components/SkillCard";
import ProjectCard from "../components/ProjectCard";
import { Code2, Database, Layout, Server, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  // Preview data
  const skills = [
    { name: "React", level: 90, icon: Code2, color: "#61DAFB" },
    { name: "Node.js", level: 80, icon: Server, color: "#339933" },
    { name: "HTML/CSS", level: 95, icon: Layout, color: "#E34F26" },
    { name: "MongoDB", level: 85, icon: Database, color: "#47A248" },
  ];

  const projects = [
    {
      title: "Social Media Application",
      description:
        "A full-stack social media application where users can create posts, engage with content, and connect in real time. It includes authentication, feed updates, and a scalable backend structure designed to support responsive interactions and ongoing feature growth.",
      image: "https://placehold.co/600x400/171717/06b6d4?text=Social+Media+App",
      tags: ["NestJS", "JavaScript", "MongoDB", "Node.js"],
      demoLink: "https://social-media-app.vercel.app/",
      repoLink: "https://github.com/Balasarathi29/Social-Media-App",
    },
    {
      title: "Small Scale E-Commerce",
      description:
        "An e-commerce solution tailored for small businesses to list products, manage orders, and handle core checkout workflows. It combines a user-friendly storefront with backend inventory handling, giving businesses a practical foundation for online sales.",
      image: "https://placehold.co/600x400/171717/f59e0b?text=E-Commerce+App",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      demoLink: "https://e-commerce-app.vercel.app/",
      repoLink: "https://github.com/Balasarathi29/E-Commerce-App",
    },
  ];

  return (
    <div className="home-page">
      <Hero />

      <section className="section container home-about" id="home-about">
        <motion.div
          className="home-about-image"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="profile-shell glass">
            <img
              src="/Image.jpeg"
              alt="Bala Sarathi"
              onError={(event) => {
                event.currentTarget.src =
                  "https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Bala%20Sarathi";
              }}
            />
          </div>
        </motion.div>

        <motion.div
          className="home-about-content"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="home-about-label">About Me</p>
          <h2>
            Bala Sarathi{" "}
            <span className="text-gradient">Full Stack Developer</span>
          </h2>
          <p>
            I craft digital interfaces that balance beauty and function, shaping
            ideas into seamless user experiences. My work reflects clarity,
            consistency, and a strong eye for detail.
          </p>
          <p>
            I enjoy turning complex requirements into clean solutions using
            React, Node.js, Express, and MongoDB. My focus is creating fast,
            scalable, and accessible products that feel modern.
          </p>
          <div className="home-about-actions">
            <Link to="/about" className="btn btn-outline">
              More About Me
            </Link>
            <a href="/FS Resume.pdf" className="btn btn-primary" download>
              Resume <Download size={18} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Skills Preview */}
      <section className="section container home-preview-section">
        <div className="home-section-header">
          <div>
            <p className="home-section-kicker">Core Expertise</p>
            <h2 className="text-gradient">Skills That Drive Results</h2>
            <p className="home-section-subtext">
              Modern stack capabilities focused on performance, clean
              architecture, and scalable product delivery.
            </p>
          </div>
          <Link to="/skills" className="btn btn-outline">
            View Full Skillset
          </Link>
        </div>
        <div className="home-skills-grid">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </section>

      {/* Projects Preview */}
      <section className="section container home-projects-panel">
        <div className="home-section-header">
          <div>
            <p className="home-section-kicker">Selected Work</p>
            <h2 className="text-gradient">Featured Projects</h2>
            <p className="home-section-subtext">
              Product-focused builds with polished interfaces, practical backend
              logic, and measurable user value.
            </p>
          </div>
          <Link to="/projects" className="btn btn-outline">
            Browse All Projects
          </Link>
        </div>
        <div className="home-projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section container home-cta">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Ready to start a project?</h2>
          <p>Let's collaborate and build something amazing together.</p>
          <Link to="/contact" className="btn btn-primary">
            Contact Me
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
