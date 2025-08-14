import { useEffect } from "react";
import TaskPilotMainImg from "../assets/taskpilot-dashboard.png"
import TaskPilotDeploymentImg from "../assets/MEMO-배포로직.png"
import './ProjectDetail.css'

function ProjectTaskPilot() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = {
    name: "TaskPilot",
    period: "2025. 05 ~ 현재",
    teamMembers: "개인 프로젝트",
    description: "프로젝트와 작업을 관리하는 웹 기반 애플리케이션"
  };

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
      <p>{descriptionWithBreaks}</p>

      <p><a href="https://taskpilot.devjsb.store">TaskPilot</a></p>

      <div className="project-images">
        <img src={TaskPilotMainImg} className="project-image" alt=""/>
      </div>
      
      <p><strong>Tech Stack</strong></p>
      <div className="tech-stack">
        {/* Next.js */}
        <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" />
        {/* React */}
        <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
        {/* TypeScript */}
        <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
        {/* Tailwind CSS */}
        <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
        {/* Docker */}
        <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker" />
        {/* Kubernetes */}
        <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white" alt="Kubernetes" />
        {/* Prometheus */}
        <img src="https://img.shields.io/badge/Prometheus-000000?style=flat-square&logo=prometheus&logoColor=white" alt="Prometheus" />
        {/* Grafana */}
        <img src="https://img.shields.io/badge/Grafana-F56600?style=flat-square&logo=grafana&logoColor=white" alt="Grafana" />
      </div>

      <p><strong>What did i do</strong></p>
      <ul className="feature-list">
        <li>
          <h4>프로젝트 관리 시스템 구현</h4>
          <p>다수의 프로젝트 생성 및 관리 기능을 구현했습니다.</p>
          <p>각 프로젝트는 이름, 설명, 생성/수정 날짜, 연관된 작업들을 포함합니다.</p>
        </li>

        <li>
          <h4>작업 관리 시스템 구현</h4>
          <p>작업 상태 관리 (TODO, DOING, DONE)를 구현했습니다.</p>
          <p>작업 상세 정보 (제목, 설명, 태그, 우선순위)를 관리합니다.</p>
          <p>계층적 작업 구조를 지원하여 상위-하위 작업 관계를 표현합니다.</p>
        </li>

        <li>
          <h4>사용자 인터페이스 구현</h4>
          <p>대시보드 뷰로 작업 상태 필터링 기능을 구현했습니다.</p>
          <p>작업 상태 변경을 위한 드래그 앤 드롭 기능을 구현했습니다.</p>
          <p>작업 생성 및 상세 정보 다이얼로그를 구현했습니다.</p>
        </li>

        <li>
          <h4>LLM 에이전트 기반 챗봇 구현</h4>
          <p>자연어 명령을 통해 프로젝트 및 작업을 관리하는 챗봇 기능을 구현했습니다.</p>
          <p>
            LangGraph 기반의 LLM 에이전트를 활용하여 자연어 명령으로 프로젝트와 태스크를 관리하는 챗봇 기능을 구현했습니다. <br />
            백엔드 API와 연동하여 실제 작업을 처리하는 지능형 비서 역할을 수행합니다.
          </p>
        </li>

        <li>
          <h4>배포 및 모니터링 시스템 구현</h4>
          <p>Kubernetes와 ArgoCD를 사용하여 CI/CD 파이프라인을 구축했습니다.</p>
          <p>Prometheus와 Grafana를 사용하여 모니터링 시스템을 구축했습니다.</p>
        </li>
      </ul>

      <div className="project-images">
        <img src={TaskPilotDeploymentImg} className="project-image" alt=""/>
      </div>
    </div>
  );
}

export default ProjectTaskPilot;