import React from 'react';
import Hero from '../components/Hero';
import SkillCard from '../components/SkillCard';
import ProjectCard from '../components/ProjectCard';
import { Code2, Database, Layout, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    // Preview data
    const skills = [
        { name: 'React', level: 90, icon: Code2, color: '#61DAFB' },
        { name: 'Node.js', level: 80, icon: Server, color: '#339933' },
        { name: 'HTML/CSS', level: 95, icon: Layout, color: '#E34F26' },
        { name: 'MongoDB', level:85, icon: Database, color: '#47A248' },
    ];

    const projects = [
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

    return (
        <div className="home-page">
            <Hero />

            {/* Skills Preview */}
            <section className="section container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h2 className="text-gradient" style={{ fontSize: '2rem' }}>My Skills</h2>
                    <Link to="/skills" className="btn btn-outline">View All</Link>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {skills.map((skill, index) => (
                        <SkillCard key={index} {...skill} />
                    ))}
                </div>
            </section>

            {/* Projects Preview */}
            <section className="section container" style={{ background: 'var(--bg-card)', borderRadius: '20px', padding: '4rem 2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h2 className="text-gradient" style={{ fontSize: '2rem' }}>Featured Projects</h2>
                    <Link to="/projects" className="btn btn-outline">View All</Link>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="section container" style={{ textAlign: 'center', padding: '6rem 0' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to start a project?</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                        Let's collaborate and build something amazing together.
                    </p>
                    <Link to="/contact" className="btn btn-primary">Contact Me</Link>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
