// src/components/Skills.js
function Skills() {
    return (
      <section id="skills" className="Section skills">
        <h2>Skills</h2>
        <div className="Skill-categories">
          <div className="Skill-category">
            <h3>Language</h3>
            <ul>
              <li>Kotlin</li>
              <li>Java</li>
              <li>C++</li>
            </ul>
          </div>
          <div className="Skill-category">
            <h3>Backend</h3>
            <ul>
              <li>Spring Boot</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div className="Skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
          <div className="Skill-category">
            <h3>DevOps</h3>
            <ul>
              <li>Docker</li>
              <li>Jenkins</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  
  export default Skills;
  