import "./styles/Work.css";

const projects = [
  {
    title: "Career Guidance AI System",
    category: "Machine Learning / Web",
    tools: "Python, Flask, scikit-learn, HTML5/CSS3/JS",
    github: "https://github.com/ManikantaPerla07/AI-Career-Guidance-System",
    demo: "https://manikantaperla07.github.io/AI-Career-Guidance-System/",
  },
  {
    title: "Zerodha Clone",
    category: "Full-Stack Development",
    tools: "JavaScript, Node.js, HTML5/CSS3",
    github: "https://github.com/ManikantaPerla07/Zerodha",
    demo: "#",
  },
  {
    title: "Diabetes Risk Assessment System",
    category: "Deep Learning",
    tools: "Python, TensorFlow, Keras, Flask",
    github: "https://github.com/ManikantaPerla07/healthcare",
    demo: "https://manikantaperla07.github.io/healthcare/",
  },
  {
    title: "Automated Teller Machine (ATM)",
    category: "Backend System",
    tools: "Python, OOP, Data Structures",
    github: "https://github.com/ManikantaPerla07",
    demo: "#",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">

        <h2>
          My <span>Work</span>
        </h2>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-number">
                0{index + 1}
              </div>

              <h4>{project.title}</h4>

              <p className="project-category">
                {project.category}
              </p>

              <div className="project-tools">
                <span>TOOLS & FEATURES</span>
                <p>{project.tools}</p>
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>

                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Work;