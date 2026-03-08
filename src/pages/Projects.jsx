import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const projects = [
        {
            title: 'Spotify Clone',
            description: 'A Spotify-style music streaming platform with real-time audio playback, playlist management, responsive UI components, and smooth page transitions. Built to replicate a modern streaming experience.',
            image: 'https://placehold.co/600x400/171717/06b6d4?text=Spotify+Clone',
            tags: ['React', 'JavaScript', 'MongoDB', 'CSS3'],
            demoLink: 'https://spotify-clone-phi-steel-51.vercel.app/',
            repoLink: 'https://github.com/Balasarathi29/Spotify_Clone'
        },
        {
            title: 'Time Table Management System',
            description: 'A streamlined timetable management system that simplifies scheduling with automated subject allocation, conflict detection, and an intuitive web interface for staff and students.',
            image: 'https://placehold.co/600x400/171717/8b5cf6?text=Time+Table+Management+System',
            tags: ['React', 'TypeScript', 'Tailwind CSS'],
            demoLink: 'https://tms-nu-two.vercel.app',
            repoLink: 'https://github.com/Balasarathi29/TMS'
        },
        {
            title: 'Weather Forecast App',
            description: 'Beautiful weather application providing detailed forecasts using external APIs with location detection.',
            image: 'https://placehold.co/600x400/171717/f59e0b?text=Weather+App',
            tags: ['JavaScript', 'OpenWeatherMap API', 'CSS3'],
            demoLink: 'https://weather-application-5vss.vercel.app/',
            repoLink: 'https://github.com/Balasarathi29/Weather-Application'
        },
        {
            title: 'Quiz Application',
            description: 'An interactive quiz application that allows users to answer multiple-choice questions with real-time scoring and instant feedback.',
            image: 'https://placehold.co/600x400/171717/ec4899?text=Quiz+App',
            tags: ['React', 'JavaScript', 'Tailwind',"MongoDB"],
            demoLink: 'https://quiz-application-psi-self.vercel.app/',
            repoLink: 'https://github.com/Balasarathi29/Quiz-Application'
        },
         {
            title: 'Social Media Application',
            description: 'A social media platform for connecting users and sharing content in real-time.',
            image: 'https://placehold.co/600x400/171717/06b6d4?text=Social+Media+App',
            tags: ['NestJS', 'JavaScript', 'MongoDB', 'Node.js'],
            demoLink: 'https://social-media-app.vercel.app/',
            repoLink: 'https://github.com/Balasarathi29/Social-Media-App'
        },
        {
            title: 'Small Scale E-Commerce',
            description: 'A simple e-commerce solution for small businesses to sell their products online.',
            image: 'https://placehold.co/600x400/171717/f59e0b?text=E-Commerce+App',
            tags: ['React', 'Node.js', 'MongoDB', 'Express'],
            demoLink: 'https://e-commerce-app.vercel.app/',
            repoLink: 'https://github.com/Balasarathi29/E-Commerce-App'
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="section container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Featured Projects</h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                    A collection of projects that showcase my passion for coding and design.
                </p>
            </motion.div>

            <motion.div
                className="projects-grid"
                variants={container}
                initial="hidden"
                animate="show"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}
            >
                {projects.map((project, index) => (
                    <motion.div key={index} variants={item} style={{ height: '100%' }}>
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
