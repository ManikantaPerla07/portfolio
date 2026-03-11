import "./styles/TechStack.css";

const frontendSkills = [
  { name: "Python" },
  { name: "C" },
  { name: "C++" },
  { name: "Java" },
  { name: "HTML5/CSS3" },
  { name: "JavaScript" },
];

const backendSkills = [
  { name: "NumPy" },
  { name: "Pandas" },
  { name: "scikit-learn" },
  { name: "Matplotlib" },
  { name: "Seaborn" },
  { name: "Flask" },
];

const toolsSkills = [
  { name: "Git & GitHub" },
  { name: "VS Code" },
  { name: "MySQL" },
  { name: "Data Structures" },
  { name: "Prompt Engineering" },
  { name: "AI/ML" },
];

const TechStack = () => {
  return (
    <div className="techstack section-container" id="techstack">
      <h2>My Skills</h2>
      
      <div className="skills-container">
        <div className="skill-category">
          <h3>Languages</h3>
          <ul className="skill-list">
            {frontendSkills.map((skill, index) => (
              <li key={index} className="skill-item">{skill.name}</li>
            ))}
          </ul>
        </div>
        
        <div className="skill-category">
          <h3>Libraries & Frameworks</h3>
          <ul className="skill-list">
            {backendSkills.map((skill, index) => (
              <li key={index} className="skill-item">{skill.name}</li>
            ))}
          </ul>
        </div>

        <div className="skill-category">
          <h3>Tools & Platforms</h3>
          <ul className="skill-list">
            {toolsSkills.map((skill, index) => (
              <li key={index} className="skill-item">{skill.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
