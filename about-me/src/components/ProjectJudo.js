import { useEffect } from "react";
import './ProjectDetail.css'
import JudoFirstImg from "../assets/JUDO-1.png"
import JudoSecondImg from "../assets/JUDO-2.png"
import JudoDeploymentImg from "../assets/JUDO-배포로직.png"
import JudoERDImg from "../assets/JUDO-ERD.png"

function ProjectJudo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = {
    name: "JUDO",
    period: "2024. 10 ~ 2024. 12 (3개월)",
    teamMembers: "박병영 : PM, 조승빈 : 기획, Backend & Frontend 개발",
    description: "2030을 대상으로 하는 주류 추천 서비스",
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
        <img src={JudoFirstImg} className="project-image" alt=""/>
        <img src={JudoSecondImg} className="project-image" alt=""/>
      </div>

      <p><strong>Description</strong></p>
      <p>{descriptionWithBreaks}</p> {/* 개행 적용된 description */}
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
      <p><strong>What did i do</strong></p>
      <ul className="feature-list">
        <li>
          <h4>주소 찾기 (Address Search)</h4>
          <p>React와 Daum Postcode API를 사용하여 주소를 검색하고 선택하는 기능을 구현했습니다.</p>
          <p>사용자는 주소를 선택하면, 해당 주소와 우편번호가 실시간으로 화면에 반영됩니다.</p>
        </li>

        <li>
          <h4>결제 시스템 (Payment System)</h4>
          <p>PortOne API를 활용하여 온라인 결제 기능을 구현하였습니다.</p>
          <p>카드 결제, 계좌이체, 간편결제 등 다양한 결제 수단을 지원합니다.</p>
          <p>Spring Boot와 연동하여 결제 요청, 승인 및 취소 프로세스를 처리할 수 있도록 설계하였습니다.</p>
        </li>

        <li>
          <h4>음료 추천 시스템 (Drink Recommendation System)</h4>
          <p>Kotlin, Spring Boot, KNN (K-Nearest Neighbor) 알고리즘을 사용하여 사용자의 맛 프로필을 기반으로 음료를 추천하는 시스템을 구축했습니다.</p>
          <p>코사인 유사도를 사용해 비슷한 음료를 추천하며, 사용자의 찜 목록, 장바구니, 구매 내역을 반영하여 개인화된 추천을 제공합니다.</p>
        </li>

        <li>
          <h4>배포 (Deployment)</h4>
          <p>직접 ubuntu 서버를 구축하여 Spring Boot 애플리케이션을 클라우드 서버에 배포했습니다.</p>
          <p>자동화된 배포 프로세스를 구축하여 코드 변경 시 즉시 배포가 이루어지도록 설정했습니다.</p>
        </li>
      </ul>   
      <div className="project-images">
        <img src={JudoERDImg} className="project-image" alt=""/>
        <img src={JudoDeploymentImg} className="project-image" alt=""/>
      </div>
    </div>
  );
}

export default ProjectJudo;
