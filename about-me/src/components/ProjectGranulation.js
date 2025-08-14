import { useEffect } from "react";
import './ProjectDetail.css';
import JudoDeploymentImg from "../assets/JUDO-배포로직.png"
import GranulationMainImg from "../assets/granulation-daily.png"
import GranulationClassImg from "../assets/granulation-class.png"

function ProjectGranulation() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = {
    name: "!육아",
    period: "2024. 07 ~ 2024. 08 (2개월)",
    teamMembers: "4명",
    description: "신생아 부모님들을 위한 커뮤니티 및 정보 공유 플랫폼",
  };

  // description의 개행을 <br /> 태그로 변환
  const descriptionWithBreaks = project.description.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  return (
    <div className="ProjectDetail">
      <h2>{project.name}</h2>
      <p><strong>Period</strong> {project.period}</p>
      <p><strong>Team Members</strong> {project.teamMembers}</p>

      <div className="project-images">
        <img src={GranulationMainImg} className="project-image" alt=""/>
        <img src={GranulationClassImg} className="project-image" alt=""/>
      </div>

      <p><strong>Description</strong></p>
      <p>{descriptionWithBreaks}</p>

      <p><strong>Tech Stack</strong></p>
      <div className="tech-stack">
        {/* Node.js */}
        <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js" />
        {/* JavaScript */}
        <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
        {/* MySQL */}
        <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white" alt="MySQL" />
        {/* React */}
        <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
        {/* Nginx */}
        <img src="https://img.shields.io/badge/Nginx-009639?style=flat-square&logo=nginx&logoColor=white" alt="Nginx" />
        {/* Docker */}
        <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker" />
        {/* Jenkins */}
        <img src="https://img.shields.io/badge/Jenkins-D24939?style=flat-square&logo=jenkins&logoColor=white" alt="Jenkins" />
        {/* AWS */}
        <img src="https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazonaws&logoColor=white" alt="AWS" />
      </div>

      <p><strong>What did I do</strong></p>
      <ul className="feature-list">
        <li>
          <h4>팀 리딩 및 기능 배분 (Team Leadership & Feature Allocation)</h4>
          <p>팀장으로서 각 팀원들의 역량에 맞는 기능을 배분하고, 개발 과정에서 피드백을 제공하여 프로젝트의 품질을 높였습니다.</p>
          <p>각자의 역할에 맞는 기술적 문제 해결을 지원하고, 팀원 간 협업을 통해 프로젝트 목표를 달성했습니다.</p>
        </li>

        <li>
          <h4>커뮤니티 (Community)</h4>
          <p>메인 페이지에 '오늘의 미션'과 '설문조사' 기능을 추가하여 사용자 참여를 유도했습니다.</p>
          <p>사용자는 일일 미션과 수행 결과를 공유하여 다른 사용자와 소통할 수 있습니다.</p>
          <p>모임을 만들거나 참여하는 기능 구현했습니다.</p>
          <p>채팅방과 게시판을 활용하여 실시간 소통 및 정보 공유가 가능한 커뮤니티 기능을 구현했습니다.</p>
        </li>

        <li>
          <h4>지도 기반 리뷰 (Map-based Review)</h4>
          <p>구글 지도 API를 활용하여, 사용자가 특정 장소에 대한 리뷰를 추가하고 조회할 수 있도록 구현했습니다.</p>
          <p>사용자는 지도를 통해 장소를 선택하고, 해당 장소에 대한 의견을 공유할 수 있습니다.</p>
        </li>
      </ul>

      <div className="project-images">
        <img src={JudoDeploymentImg} className="project-image" alt=""/>
      </div>
    </div>
  );
}

export default ProjectGranulation;
