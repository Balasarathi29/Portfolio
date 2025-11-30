import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, image, tags, demoLink, repoLink }) => {
    return (
        <div className="project-card glass">
            <div className="project-image">
                <img src={image} alt={title} />
                <div className="project-overlay">
                    <div className="project-links">
                        <a href={demoLink} target="_blank" rel="noopener noreferrer" className="icon-btn" title="View Demo">
                            <ExternalLink size={24} />
                        </a>
                        <a href={repoLink} target="_blank" rel="noopener noreferrer" className="icon-btn" title="View Code">
                            <Github size={24} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                <div className="project-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
