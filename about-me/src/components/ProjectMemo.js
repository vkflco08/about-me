import { useEffect } from "react";
import './ProjectDetail.css';
import MemoMainPageImg from "../assets/MEMO-main-page.png"
import MemoAllMemosImg from "../assets/MEMO-all-memos.png"
import MemoDeploymentImg from "../assets/MEMO-배포로직.png"

function ProjectMemo() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = {
    name: "ㅈㅇㄴㄹ",
    period: "2024. 9 ~ 현재",
    teamMembers: "개인 프로젝트",
    description: "내가 직접 만드는 개인 메모장",
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
        <img src={MemoMainPageImg} className="project-image" alt=""/>
        <img src={MemoAllMemosImg} className="project-image" alt=""/>
      </div>

      <p><strong>Description</strong></p>
      <p>{descriptionWithBreaks}</p>

      <p><strong>Tech Stack</strong></p>
      <div className="tech-stack">
        {/* Spring Boot */}
        <img src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white" alt="Spring Boot" />
        {/* Kotlin */}
        <img src="https://img.shields.io/badge/Kotlin-7F52FF?style=flat-square&logo=kotlin&logoColor=white" alt="Kotlin" />
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
        {/* Nginx Proxy Manager */}
        <img src="https://img.shields.io/badge/Nginx%20Proxy%20Manager-009639?style=flat-square&logo=nginx&logoColor=white" alt="Nginx Proxy Manager" />
      </div>

      <p><strong>What did I do</strong></p>
      <ul className="feature-list">
        <li>
          <h4>메모 기능 (Custom Note-Taking Feature Development)</h4>
          <p>일일 메모와 sticky note 역할을 하는 유저 노트를 구현하여, 주제별로 메모를 분류하고 관리할 수 있는 기능을 제공합니다.</p>
          <p>사용자는 효율적으로 자신의 생각과 일정을 기록하고 정리할 수 있습니다.</p>
        </li>

        <li>
          <h4>보안 강화 (Security Enhancements)</h4>
          <p>HTTPS 인증을 위해 Cloudflare와 도메인을 사용하여 보안을 강화했습니다.</p>
          <p>이를 통해 사용자는 안전하게 개인 정보를 저장하고, 메모를 관리할 수 있는 환경을 제공받습니다.</p>
        </li>

        <li>
          <h4>지속적인 기능 개선 및 버그 수정 (Continuous Improvement and Bug Fixing)</h4>
          <p>직접 사용하며 발생하는 에러를 수정하고, 기능을 개선해가고 있습니다.</p>
          <p>사용자 경험을 향상시키기 위한 안정성 확보 및 새로운 기능 도입 작업을 진행 중입니다.</p>
        </li>

        <li>
          <h4>배포 및 모니터링 시스템 구현</h4>
          <p>Kubernetes와 ArgoCD를 사용하여 CI/CD 파이프라인을 구축했습니다.</p>
          <p>Prometheus와 Grafana를 사용하여 모니터링 시스템을 구축했습니다.</p>
        </li>
      </ul>

      <div className="project-images">
        <img src={MemoDeploymentImg} className="project-image" alt=""/>
      </div>
    </div>
  );
}

export default ProjectMemo;
