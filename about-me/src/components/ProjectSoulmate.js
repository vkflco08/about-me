import { useEffect } from "react";
import './ProjectDetail.css'

function ProjectSoulmate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = {
    id: 0,
    name: "Soulmate",
    period: "2024. 03 ~ 2024. 06 (4개월)",
    teamMembers: "박규원 : FE, 조승빈 : BE",
    description: "온라인 기숙사 룸메이트 매칭 서비스",
    techStack: {
      languages: ["Kotlin", "Java Script"],
      frameworks: ["Spring Boot", "Node.js"],
      database: ["MySQL"],
      others: ["Docker", "Jenkins", "Nginx"]
    }
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
      <ul>
        <li><strong>Languages:</strong> {project.techStack.languages.join(", ")}</li>
        <li><strong>Frameworks:</strong> {project.techStack.frameworks.join(", ")}</li>
        <li><strong>Databases:</strong> {project.techStack.database.join(", ")}</li>
      </ul>
      <p><strong>What did i do</strong></p>
      <ul className="feature-list">
      <li>
          <h4>JWT를 이용한 로그인 기능 (JWT Authentication)</h4>
          <p>JWT (JSON Web Token) 기반의 인증 방식을 사용하여, 사용자의 로그인 및 세션 관리를 처리했습니다.</p>
          <p>로그인 시 JWT 토큰을 발급하고, 클라이언트는 해당 토큰을 사용하여 인증된 API 요청을 보냅니다.</p>
          <p>Refresh token을 이용하여 안전한 사용자 인증을 보장합니다.</p>
        </li>

        <li>
          <h4>STOMP를 이용한 채팅방 기능 (Real-time Chat Room with STOMP)</h4>
          <p>WebSocket을 기반으로 STOMP 프로토콜을 사용하여 실시간 채팅방 기능을 구현했습니다.</p>
          <p>채팅방에 참여하는 사용자는 실시간으로 메시지를 주고받을 수 있습니다.</p>
        </li>

        <li>
          <h4>GPT Assistance API를 이용한 챗봇 기능 (Chatbot with GPT API)</h4>
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
        <img src="/soulmateERD.png" className="project-image" alt=""/>
        <img src="/soulmate-배포로직.png" className="project-image" alt=""/>
      </div>
    </div>
  );
}

export default ProjectSoulmate;
