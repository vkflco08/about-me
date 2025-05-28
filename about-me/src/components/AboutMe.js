import { Link } from "react-router-dom";
import Footer from "./Footer"
import Skills from "./Skills";
import Projects from "./Projects";
import Career from "./Career";
import Awards from "./Awards";
import githubImg from "../assets/github.png"
import velogImg from "../assets/velog.png"

function AboutMe() {
  // 특정 섹션으로 스크롤 이동하는 함수
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* 네비게이션 바 */}
      <nav className="Nav">
        <ul>
          <li><Link to="#about-me" onClick={(e) => scrollToSection(e, "about-me")}>About Me</Link></li>
          <li><Link to="#skills" onClick={(e) => scrollToSection(e, "skills")}>Skills</Link></li>
          <li><Link to="#projects" onClick={(e) => scrollToSection(e, "projects")}>Projects</Link></li>
          <li><Link to="#career" onClick={(e) => scrollToSection(e, "career")}>Career</Link></li>
        </ul>
      </nav>

      {/* About Me 섹션 */}
      <section id="about-me" className="Section about-me">
        <h2>반갑습니다!</h2>
        <h3>백엔드 개발자 조승빈입니다.</h3>
        <div className="about-info">
          <div className="info-item">
            <h4>희망 직무</h4>
            <p>백엔드 개발자</p> 
            <p>(주요 기술: Java, Spring Boot, Docker)</p>
          </div>
          <div className="info-item">
            <h4>관심 분야</h4>
            <p>DevOps, 서버 최적화, 데이터베이스 설계</p>
          </div>
          <div className="info-item">
            <h4>학력</h4>
            <p>2019 강화고등학교 졸업</p>
            <p>2019 고려대학교 세종캠퍼스 컴퓨터융합소프트웨어학과 입학</p>
            <p>2024 고려대학교 세종캠퍼스 (졸업예정)</p>
          </div>
        </div>

        <div id="contact">
          <div className="contact-links">
            <a href="https://github.com/vkflco08" target="_blank" rel="noopener noreferrer">
              <img src={githubImg} alt="GitHub" width={30} height={30} />
            </a>
            <a href="https://velog.io/@vkflco08/posts" target="_blank" rel="noopener noreferrer">
              <img src={velogImg} alt="Velog" width={30} height={30} />
            </a>
            <strong>Email : vkflco8080@gmail.com</strong>
          </div>
        </div>
      </section>

      {/* Awards 섹션 */}
      <section id="awards">
        <Awards />
      </section>

      {/* Skills 섹션 */}
      <section id="skills">
        <Skills />
      </section>

      {/* Projects 섹션 */}
      <section id="projects">
        <Projects />
      </section>

      {/* Career 섹션 */}
      <section id="career">
        <Career />
      </section>

      <Footer />
    </div>
  );
}

export default AboutMe;
