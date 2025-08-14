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
        <h3>새로운 기술로 사용자의 문제를 해결하는 것을 즐기는 개발자 조승빈입니다.</h3>
        <div className="about-me-intro">
          <p>
            다양한 개인 프로젝트와 두 번의 산학 협력 프로젝트를 통해 아이디어를 실제 서비스로 구현하는 경험을 쌓았습니다. <br></br>
            특히 실시간 협업 기능, AI 기반 콘텐츠 생성, LLM 에이전트 개발 등 기술적 깊이가 있는 도전을 즐깁니다. <br></br>
            Java와 Spring Boot를 기반으로 안정적이고 확장 가능한 시스템을 구축하고, Docker와 Kubernetes를 활용한 DevOps 환경 개선에 관심이 많습니다.
          </p>
        </div>
        <div className="about-info">
          <div className="info-item">
            <h4>희망 직무</h4>
            <p>백엔드 개발자</p> 
            <p>(주요 기술: Java, Spring Boot, Docker)</p>
          </div>
          <div className="info-item">
            <h4>관심 분야</h4>
            <p>LLM 에이전트 및 AI 기반 서비스 개발</p>
            <p>Kubernetes를 활용한 Cloud Native DevOps</p>
            <p>실시간 협업 시스템 아키텍처 설계</p>
            <p>안정적이고 확장 가능한 백엔드 시스템 구축</p>
          </div>
          <div className="info-item">
            <h4>학력</h4>
            <p>2019 강화고등학교 졸업</p>
            <p>2019 고려대학교 세종캠퍼스 컴퓨터융합소프트웨어학과 입학</p>
            <p>2025 고려대학교 세종캠퍼스 (졸업예정)</p>
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

      {/* Projects 섹션 */}
      <section id="projects">
        <Projects />
      </section>

      {/* Career 섹션 */}
      <section id="career">
        <Career />
      </section>

      {/* Skills 섹션 */}
      <section id="skills">
        <Skills />
      </section>

      {/* Awards 섹션 */}
      <section id="awards">
        <Awards />
      </section>
      <Footer />
    </div>
  );
}

export default AboutMe;
