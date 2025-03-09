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
        <p>2023년도 9월부터 백엔드와 관련된 다양한 프로젝트를 진행했습니다. 
          주로 백엔드 설계 및 개발 역할을 맡았지만, 때로는 프런트나 기획처럼 팀을 위해 필요한 역할도 해왔습니다.</p>
        <p>프로젝트 학기 때 룸메이트 서비스 개발을 위해 이론으로만 배운 내용들을 처음 프로젝트를 위해 사용해봤고, docker와 AWS를 이용해 배포해본 경험이 있습니다. 이 경험을 계기로 5번의 해커톤과 다양한 외부활동에 참여하여 다양한 성공과 실패를 경험했습니다.</p>
        <p>저는 다른 사람에게 피해를 주는 것에 민감한 사람이기 때문에, 활동을 하면서 다양한 문제들을 해결할 때 책임감 있게 행동하여 저에게 주어진 일은 최대한 기간 내 완료하도록 최선을 다했습니다. 또한, 빠르고 정확한 프로젝트 진행을 위해서 다른 사람들과 소통하는 것이 중요하다고 생각하기에 적극적인 커뮤니케이션을 위해 노력해왔습니다.
          프로젝트가 끝난 후에는 스스로 부족한 점을 찾아 보안하기 위해 노력했습니다.</p> 
        <p>앞으로도 꾸준히 성장하는 개발자가 되겠습니다.</p>

        <div className="about-info">
          <div className="info-item">
            <h4>희망 직무</h4>
            <p>백엔드 개발자</p> 
            <p>(주요 기술: Java, Spring Boot, Redis, Docker)</p>
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
