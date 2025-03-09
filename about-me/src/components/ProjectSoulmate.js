import { useEffect } from "react";
import './ProjectDetail.css'

function ProjectSoulmate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = {
    name: "Soulmate",
    period: "2024. 03 ~ 2024. 06 (4개월)",
    teamMembers: "박규원 : FE, 조승빈 : BE",
    description: "온라인 기숙사 룸메이트 매칭 서비스",
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

      <p><strong>Description</strong></p>
      <p>{descriptionWithBreaks}</p> {/* 개행 적용된 description */}
      <p><strong>Tech Stack</strong></p>
      <div className="tech-stack">
        {/* Spring Boot */}
        <img src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white" alt="Spring Boot" />
        {/* Kotlin */}
        <img src="https://img.shields.io/badge/Kotlin-7F52FF?style=flat-square&logo=kotlin&logoColor=white" alt="Kotlin" />
        {/* Node.js */}
        <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js" />
        {/* JavaScript */}
        <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
        {/* MySQL */}
        <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white" alt="MySQL" />
        {/* Docker */}
        <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker" />
        {/* Jenkins */}
        <img src="https://img.shields.io/badge/Jenkins-D24939?style=flat-square&logo=jenkins&logoColor=white" alt="Jenkins" />
      </div>
      <p><strong>What did i do</strong></p>
      <ul className="feature-list">
      <li>
          <h4>JWT를 이용한 로그인 (JWT Authentication)</h4>
          <p>JWT (JSON Web Token) 기반의 인증 방식을 사용하여, 사용자의 로그인 및 세션 관리를 처리했습니다.</p>
          <p>로그인 시 JWT 토큰을 발급하고, 클라이언트는 해당 토큰을 사용하여 인증된 API 요청을 보냅니다.</p>
          <p>Refresh token을 이용하여 안전한 사용자 인증을 보장합니다.</p>
        </li>

        <li>
          <h4>STOMP를 이용한 채팅방 (Real-time Chat Room with STOMP)</h4>
          <p>WebSocket을 기반으로 STOMP 프로토콜을 사용하여 실시간 채팅방 기능을 구현했습니다.</p>
          <p>채팅방에 참여하는 사용자는 실시간으로 메시지를 주고받을 수 있습니다.</p>
        </li>

        <li>
          <h4>GPT Assistance API를 이용한 챗봇 (Chatbot with GPT API)</h4>
          <p>OpenAI GPT API를 사용하여, 사용자와 상호작용할 수 있는 챗봇 기능을 구현했습니다.</p>
          <p>사용자가 입력한 질문이나 요청에 대해 AI 기반의 응답을 제공합니다.</p>
        </li>

        <li>
          <h4>배포 (Deployment)</h4>
          <p>AWS EC2 환경을 사용하여 Spring Boot 애플리케이션을 클라우드 서버에 배포하였습니다.</p>
          <p>자동화된 배포 프로세스를 구축하여, 코드 변경 시 즉시 배포가 이루어지도록 설정했습니다.</p>
        </li>
      </ul>   
      <div className="project-images">
        <img src="../assets/soulmateERD.png" className="project-image" alt=""/>
        <img src="../assets/soulmate-배포로직.png" className="project-image" alt=""/>
      </div>
    </div>
  );
}

export default ProjectSoulmate;
