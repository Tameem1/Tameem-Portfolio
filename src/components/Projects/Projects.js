import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import map from "../../Assets/Projects/map.png";
import emotion from "../../Assets/Projects/emotion.png";
import student_resources from "../../Assets/Projects/student.png";
import gulf_diac from "../../Assets/Projects/gulf_diac.png";
import suicide from "../../Assets/Projects/suicide.png";
import split_view from "../../Assets/Projects/split_view.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gulf_diac}
              isBlog={false}
              title="Gulf Text Diacritization Model"
              description="Diacritics are marks on the Arabic text that gives a short vowel sound. Diacritics are essential for many applications like: speech recognetion, text to speech, entity recognition and many more. This model won the first position in Sibaq-Lahja compititon organized by Cisco, Ministry of AI and aiXplain"
              ghLink="https://aclanthology.org/2022.wanlp-1.33/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={split_view}
              isBlog={false}
              title="SplitView App"
              description="The idea of this app came after my friend told me you cannot run two apps as a split view on iPhone. This app allows the user to open 6 different web-apps simultaneously on a single screen. The app is build using SwiffUI and Swift."
              ghLink="https://github.com/Tameem1/SplitView"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={student_resources}
              isBlog={false}
              title="Syrian Student Resources App"
              description="This app organizes all resources a high school student could need in one place. The app is built using SwiffUI and Swift."
              ghLink="https://github.com/Tameem1/Syrian-Student-Guide"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={map}
              isBlog={false}
              title="Arabic Book Location Visualizer"
              description="I created this app to help me visualize the locations mentioned in an Arabic book on a map. The app is built using Python, CAMeL-Tools, OpenCage Geocoder, and Folium."
              ghLink="https://github.com/Tameem1/Arabic-Book-Location-Visualizer"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
