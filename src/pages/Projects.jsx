import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
        {
        title: "Lucky Ticket Finder",
        description:
          "A full-stack lucky ticket management application where users can sign up, log in, and redeem tickets securely. It features authentication, ticket operations, and an admin interface, with a scalable backend and a modern frontend designed for responsive user experiences and future feature expansion.",
        image: "https://placehold.co/600x400/171717/06b6d4?text=Lucky+Ticket+Finder",
        tags: ["NestJS", "JavaScript", "MongoDB", "Node.js"],
        demoLink: "lucky-ticket-kohl.vercel.app/login",
        repoLink: "https://github.com/Balasarathi29/Lucky-Ticket",
      },
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
          title: "Time Table Management System",
          description:
          "A timetable management platform that helps institutions organize classes with automated scheduling logic and conflict detection. It provides role-based views for faculty and students, making updates, daily planning, and timetable publishing much more efficient and reliable.",
          image:
          "https://placehold.co/600x400/171717/8b5cf6?text=Time+Table+Management+System",
          tags: ["React", "TypeScript", "Tailwind CSS"],
          demoLink: "https://tms-nu-two.vercel.app",
          repoLink: "https://github.com/Balasarathi29/TMS",
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
        {
          title: "Spotify Clone",
          description:
            "A Spotify-inspired music platform with responsive layouts, playlist creation, and smooth track transitions for an immersive listening flow. It supports real-time playback controls, clean navigation, and reusable components that mirror modern streaming product design patterns.",
          image: "https://placehold.co/600x400/171717/06b6d4?text=Spotify+Clone",
          tags: ["React", "JavaScript", "MongoDB", "CSS3"],
          demoLink: "https://spotify-clone-phi-steel-51.vercel.app/",
          repoLink: "https://github.com/Balasarathi29/Spotify_Clone",
        },
    {
      title: "Weather Forecast App",
      description:
        "A weather forecasting application that delivers current conditions and multi-day insights using trusted external weather APIs. It includes location-aware data fetching, clean visual presentation, and responsive behavior so users can check forecasts quickly from any device.",
      image: "https://placehold.co/600x400/171717/f59e0b?text=Weather+App",
      tags: ["JavaScript", "OpenWeatherMap API", "CSS3"],
      demoLink: "https://weather-application-5vss.vercel.app/",
      repoLink: "https://github.com/Balasarathi29/Weather-Application",
    },
    {
      title: "Quiz Application",
      description:
        "An interactive quiz platform where users answer timed multiple-choice questions and receive immediate score feedback. The app focuses on smooth question flow, state management, and clear result summaries to create an engaging learning and assessment experience.",
      image: "https://placehold.co/600x400/171717/ec4899?text=Quiz+App",
      tags: ["React", "JavaScript", "Tailwind", "MongoDB"],
      demoLink: "https://quiz-application-psi-self.vercel.app/",
      repoLink: "https://github.com/Balasarathi29/Quiz-Application",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="section container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: "center", marginBottom: "4rem" }}
      >
        <h2
          className="text-gradient"
          style={{ fontSize: "2.5rem", marginBottom: "1rem" }}
        >
          Featured Projects
        </h2>
        <p
          style={{
            color: "var(--text-secondary)",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          A collection of projects that showcase my passion for coding and
          design.
        </p>
      </motion.div>

      <motion.div
        className="projects-grid"
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
        }}
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={item} style={{ height: "100%" }}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
