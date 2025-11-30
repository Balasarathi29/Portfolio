import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg">
                <div className="hero-blob blob-1"></div>
                <div className="hero-blob blob-2"></div>
            </div>

            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hero-text"
                >
                    <span className="hero-greeting">Hello, I'm</span>
                    <h1 className="hero-title">
                        Bala Sarathi <br />
                        <span className="text-gradient">Full Stack Developer</span>
                    </h1>
                    <p className="hero-description">
                        I craft digital interfaces that balance beauty and function,
                        shaping ideas into seamless user experiences. My work reflects
                        clarity, consistency, and a strong eye for detail.
                    </p>

                    <div className="hero-buttons">
                        <Link to="/projects" className="btn btn-primary">
                            View Work <ArrowRight size={18} />
                        </Link>
                        <a href="/ATS Resume.pdf" className="btn btn-outline" download>
                            Resume <Download size={18} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="hero-visual"
                >
                    {/* Abstract visual representation or 3D element could go here */}
                    <div className="code-block glass">
                        <div className="code-header">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <pre>
                            <code>
                                <span className="keyword">const</span> <span className="variable">developer</span> = {'{'}
                                {'\n'}  <span className="property">name</span>: <span className="string">'Bala Sarathi'</span>,
                                {'\n'}  <span className="property">skills</span>: [<span className="string">'React'</span>, <span className="string">'Node'</span>, <span className="string">'Express'</span> , <span className="string">'MongoDB'</span>],
                                {'\n'}  <span className="property">hardWorker</span>: <span className="boolean">true</span>,
                                {'\n'}  <span className="property">quickLearner</span>: <span className="boolean">true</span>
                                {'\n'}{'}'}
                            </code>
                        </pre>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
