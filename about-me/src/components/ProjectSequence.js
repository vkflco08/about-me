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
    teamMembers: "Underdog Revolution : 10명",
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
        <h4>MSA 아키텍처 학습 (Microservices Architecture)</h4>
        <p>초기 프로젝트 기획 단계에서 MSA 구조를 고려하여, 관련 개념과 구현 방식을 학습했습니다.</p>
        <p>Spring Boot 및 데이터베이스 이미지를 Docker Hub에 업로드하고, Docker Compose를 이용하여 컨테이너를 생성하는 방식을 구현해보았습니다.</p>
        <p>API Gateway 및 Eureka 도입의 필요성을 검토하며, 마이크로서비스 환경에서 서비스 디스커버리와 라우팅 방식을 실험했습니다.</p>
        <p>안타깝게도 이후 프로젝트 방향 변경으로 MSA 방식이 취소되었습니다.</p>
      </li>

      <li>
        <h4>마이페이지 개발 (My Page Development)</h4>
        <p>마이페이지 기능을 담당하여, 관련 데이터베이스 구조를 설계하고 구현했습니다.</p>
        <p>사용자의 정보를 관리하기 위한 CRUD 기능을 개발하고 있습니다.</p>
      </li>
      </ul>   
    </div>
  );
}

export default ProjectSequence;
