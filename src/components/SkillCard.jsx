import React from "react";
import "./SkillCard.css";

const SkillCard = ({ icon: Icon, name, level, color }) => {
  return (
    <div className="skill-card glass" style={{ "--skill-color": color }}>
      <div className="skill-top-row">
        <div className="skill-icon">
          <Icon size={28} />
        </div>
        <span className="skill-pill">
          {level >= 90 ? "Expert" : "Advanced"}
        </span>
      </div>
      <h3 className="skill-name">{name}</h3>
      <div className="skill-bar-container">
        <div className="skill-bar" style={{ width: `${level}%` }}></div>
      </div>
      <div className="skill-meta">
        <span className="skill-level">{level}%</span>
        <span>Proficiency</span>
      </div>
    </div>
  );
};

export default SkillCard;
