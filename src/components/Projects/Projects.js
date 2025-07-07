import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProjectDetail from "./ProjectDetail";
import Particle from "../Particle";
import map from "../../Assets/Projects/map.png";
import emotion from "../../Assets/Projects/emotion.png";

import gulf_diac from "../../Assets/Projects/gulf_diac.png";
import suicide from "../../Assets/Projects/suicide.png";

import carpool_img from "../../Assets/Projects/readme-img.png";
import carpoolProject from "./data/carpool";
import appointmentProject from "./data/appointment-system";
import martProject from "./data/mart";
import tawjeehaiProject from "./data/tawjeehai";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Enhanced project data with detailed information
  const projectsData = [
    tawjeehaiProject,
    carpoolProject,
    appointmentProject,
    martProject,
    {
      id: 6,
      title: "Arabic Book Location Visualizer",
      description: "An intelligent text analysis tool that extracts geographical locations from Arabic literature and visualizes them on interactive maps. Built with advanced NLP techniques including named entity recognition for location extraction, geocoding services, and dynamic map generation.",
      fullDescription: "An innovative text analysis and visualization tool that extracts geographical locations mentioned in Arabic literature and displays them on an interactive map. The application uses advanced Natural Language Processing techniques specifically designed for Arabic text, including named entity recognition for location extraction. The tool processes Arabic books, identifies place names using CAMeL-Tools, geocodes them using OpenCage Geocoder, and creates beautiful interactive maps using Folium. This tool is particularly useful for literary analysis, historical research, and educational purposes.",
      imgPath: map,
      ghLink: "https://github.com/Tameem1/Arabic-Book-Location-Visualizer",
      technologies: ["Python", "CAMeL-Tools", "OpenCage Geocoder", "Folium", "NLP", "Geospatial Analysis"],
      features: [
        "Arabic text processing and analysis",
        "Named Entity Recognition for locations",
        "Interactive map visualization",
        "Support for multiple Arabic dialects",
        "Export maps as HTML/PDF",
        "Batch processing for multiple books",
        "Statistical analysis of location mentions"
      ],
      workflow: [
        {
          step: 1,
          title: "Arabic Text Processing",
          description: "Input Arabic literary text and preprocess it for location extraction using CAMeL-Tools",
          screenshot: {
            src: map,
            alt: "Arabic Text Processing",
            caption: "Advanced NLP processing pipeline for Arabic text analysis"
          }
        },
        {
          step: 2,
          title: "Location Entity Recognition",
          description: "Extract geographical locations using named entity recognition techniques",
          screenshot: {
            src: map,
            alt: "Location Extraction",
            caption: "AI-powered location identification from Arabic literature"
          }
        },
        {
          step: 3,
          title: "Geocoding & Mapping",
          description: "Convert location names to coordinates and create interactive visualizations",
          screenshot: {
            src: map,
            alt: "Interactive Map Visualization",
            caption: "Beautiful interactive maps showing extracted locations from Arabic books"
          }
        }
      ],
      achievements: [
        "📖 Processed 100+ Arabic literary works",
        "🗺️ Mapped 10,000+ unique locations",
        "🎯 95% accuracy in location extraction",
        "👨‍🎓 Used in university Arabic literature course"
      ],
      screenshots: [
        {
          src: map,
          alt: "Arabic Book Location Visualizer",
          caption: "Interactive map showing locations extracted from Arabic literature"
        }
      ],
      isBlog: false
    },
    {
      id: 2,
      title: "Gulf Text Diacritization Model",
      description: "A state-of-the-art neural network model for Arabic text diacritization that predicts short vowel marks (harakat) essential for proper pronunciation and meaning disambiguation. This advanced transformer-based system achieved first place in the prestigious Sibaq-Lahja competition, organized by Cisco, Ministry of AI, and aiXplain, demonstrating exceptional accuracy in processing Gulf Arabic dialects.",
      fullDescription: "This project focuses on developing an advanced neural network model for Arabic text diacritization, specifically targeting Gulf Arabic dialects. The model uses state-of-the-art transformer architecture to predict diacritical marks (harakat) for Arabic text, which is crucial for proper pronunciation and meaning disambiguation. The project involved extensive data preprocessing, model architecture design, training on large-scale Arabic corpora, and evaluation using standard metrics. The model achieved state-of-the-art performance and won first place in the prestigious Sibaq-Lahja competition.",
      imgPath: gulf_diac,
      ghLink: "https://aclanthology.org/2022.wanlp-1.33/",
      technologies: ["Python", "PyTorch", "Transformers", "Arabic NLP", "BERT", "Deep Learning"],
      features: [
        "State-of-the-art transformer-based architecture",
        "Support for Gulf Arabic dialects",
        "High accuracy diacritization",
        "Optimized for speed and memory efficiency",
        "Comprehensive evaluation metrics"
      ],
      achievements: [
        "🏆 First Place in Sibaq-Lahja Competition 2022",
        "📄 Published in ACL Anthology",
        "🎯 Achieved 94.2% accuracy on test set",
        "🌍 Supports multiple Gulf Arabic dialects"
      ],
      screenshots: [
        {
          src: gulf_diac,
          alt: "Gulf Diacritization Model Architecture",
          caption: "Model architecture and performance metrics"
        }
      ],
      isBlog: false
    }
  ];

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently. Click on any project to view detailed information.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }} className="project-cards-row">
          {projectsData.map((project) => (
            <Col md={4} className="project-card" key={project.id}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                project={project}
                onViewDetails={handleViewDetails}
              />
            </Col>
          ))}
        </Row>
      </Container>

      <ProjectDetail
        show={showModal}
        onHide={handleCloseModal}
        project={selectedProject}
      />
    </Container>
  );
}

export default Projects;
