import React from 'react';
import './SkillCard.css';

const SkillCard = ({ icon: Icon, name, level, color }) => {
    return (
        <div className="skill-card glass" style={{ '--skill-color': color }}>
            <div className="skill-icon">
                <Icon size={40} />
            </div>
            <h3 className="skill-name">{name}</h3>
            <div className="skill-bar-container">
                <div className="skill-bar" style={{ width: `${level}%` }}></div>
            </div>
            <span className="skill-level">{level}%</span>
        </div>
    );
};

export default SkillCard;
