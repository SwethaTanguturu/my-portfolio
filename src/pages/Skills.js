// src/components/Skills.js
import React from 'react';
import '../skills.css'; 

const skills = [
  { name: "React.js", level: 90 },
  { name: "Node.js", level: 85 },
  {name: "Express.js", level: 85},
  { name: "Spring Boot", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "AWS", level: 70 },
  { name: "UI/UX", level: 88 }
];

const Skills = () => (
  <section id="skills" className="skills-section">
    <h2>Skills Overview</h2>
    <div className="skills-container">
      {skills.map(skill => (
        <div key={skill.name} className="skill-bar-wrapper">
          <div className="skill-title">{skill.name}</div>
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: `${skill.level}%` }}>
              <span className="skill-percent">{skill.level}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
