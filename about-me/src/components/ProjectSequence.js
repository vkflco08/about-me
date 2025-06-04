import { useEffect } from "react";
import './ProjectDetail.css'
import SequenceMainImg from "../assets/Sequence-main.png"

function ProjectSequence() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = {
    name: "Sequence",
    period: "2024. 11 ~ 현재",
    teamMembers: "Underdog Revolution : 7명",
    description: "대학 간 PM / 디자이너 / 개발자 교류 서비스",
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
      <p><strong>Team Members</strong></p>
      <ul>
        <li><strong>{project.teamMembers}</strong></li>
      </ul>

      <div className="project-images">
        <img src={SequenceMainImg} className="project-image" alt=""/>
      </div>

      <p><strong>Description</strong></p>
      <p>{descriptionWithBreaks}</p> {/* 개행 적용된 description */}
      <p><strong>Tech Stack</strong></p>
      <div className="tech-stack">
        {/* Spring Boot */}
        <img src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white" alt="Spring Boot" />
        {/* Java */}
        <img src="https://img.shields.io/badge/Java-007396?style=flat-square&logo=java&logoColor=white" alt="Java" />
        {/* MariaDB */}
        <img src="https://img.shields.io/badge/MariaDB-003545?style=flat-square&logo=mariadb&logoColor=white" alt="MariaDB" />
        {/* Docker */}
        <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker" />
      </div>
      <p><strong>What did i do</strong></p>
      <ul className="feature-list">
      <li>
        <h4>마이페이지 개발 (My Page Development)</h4>
        <p>마이페이지 기능을 담당하여, 관련 데이터베이스 구조를 설계하고 구현했습니다.</p>
        <p>사용자의 정보를 관리하기 위한 기능을 개발하고 있습니다.</p>
      </li>

      <li>
        <h4>소셜 로그인 구현</h4>
        <p>현재 카카오와 구글 로그인 기능 개발을 진행 중입니다.</p>
        <p>OAuth 2.0 프로토콜을 사용하여 안전한 소셜 로그인을 구현 중입니다.</p>
        <p>사용자 정보 관리와 토큰 기반 인증 구현을 진행 중입니다.</p>
      </li>
      </ul>   
      {/* <div className="mt-8">
        <p><strong>배포 사이트</strong></p>
        <a
          href="https://sequence.devjsb.store"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 block"
        >
          sequence.devjsb.store
        </a>
      </div> */}
    </div>
  );
}

export default ProjectSequence;
