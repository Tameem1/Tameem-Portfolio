import React, { useState } from "react";
import { Modal, Button, Row, Col, Badge } from "react-bootstrap";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

function ProjectDetail({ show, onHide, project }) {
  const [imageViewer, setImageViewer] = useState({
    show: false,
    image: null,
    caption: ""
  });

  const openImageViewer = (imageSrc, caption) => {
    setImageViewer({
      show: true,
      image: imageSrc,
      caption: caption
    });
  };

  const closeImageViewer = () => {
    setImageViewer({
      show: false,
      image: null,
      caption: ""
    });
  };

  if (!project) return null;

  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        size="xl"
        centered
        className="project-detail-modal"
      >
        <Modal.Header className="project-detail-header">
          <Modal.Title className="project-detail-title">
            {project.title}
          </Modal.Title>
          <Button
            variant="outline-light"
            className="project-detail-close"
            onClick={onHide}
          >
            <AiOutlineClose />
          </Button>
        </Modal.Header>
        
        <Modal.Body className="project-detail-body">
          <Row>
            <Col lg={6}>
              {/* Single Project Image */}
              {project.imgPath ? (
                <div className="single-image-container">
                  <img
                    className="d-block w-100 project-detail-img"
                    src={project.imgPath}
                    alt={project.title}
                    style={{ 
                      maxHeight: '400px', 
                      objectFit: 'contain',
                      backgroundColor: '#f8f9fa',
                      cursor: 'pointer',
                      borderRadius: '10px'
                    }}
                    onClick={() => openImageViewer(project.imgPath, `${project.title} overview`)}
                  />
                  <div className="text-center mt-2">
                    <small className="text-muted">{project.title} overview</small>
                  </div>
                </div>
              ) : (
                /* No Image Available */
                <div className="no-images-placeholder" style={{ 
                  height: '400px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '10px',
                  color: '#6c757d'
                }}>
                  <p>No image available</p>
                </div>
              )}
            </Col>
            
            <Col lg={6}>
              <div className="project-detail-content">
                {/* Project Description */}
                <div className="project-description">
                  <h5 className="purple">Overview</h5>
                  <p>{project.fullDescription || project.description}</p>
                </div>

                {/* Technologies Used */}
                {project.technologies && (
                  <div className="project-technologies">
                    <h5 className="purple">Technologies Used</h5>
                    <div className="tech-badges">
                      {project.technologies.map((tech, index) => (
                        <Badge 
                          key={index} 
                          bg="secondary" 
                          className="tech-badge"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Features */}
                {project.features && (
                  <div className="project-features">
                    <h5 className="purple">Key Features</h5>
                    <ul className="features-list">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Workflow Section - Updated */}
                {project.workflow && (
                  <div className="project-workflow">
                    <h5 className="purple">How It Works</h5>
                    <div className="workflow-steps">
                      {project.workflow.map((step, index) => (
                        <div key={index} className="workflow-step">
                          <div className="step-number">{step.step}</div>
                          <div className="step-content">
                            <h6>{step.title}</h6>
                            <p>{step.description}</p>
                          </div>
                          {step.screenshot && (
                            <div className="step-screenshot">
                              <img
                                src={step.screenshot.src}
                                alt={step.screenshot.alt}
                                className="workflow-screenshot clickable-image"
                                onClick={() => openImageViewer(step.screenshot.src, step.screenshot.caption)}
                              />
                              <div className="screenshot-caption">
                                {step.screenshot.caption}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Highlights - Updated */}
                {project.keyHighlights && (
                  <div className="project-achievements">
                    <h5 className="purple">Key Highlights</h5>
                    <ul className="achievements-list">
                      {project.keyHighlights.map((highlight, index) => (
                        <li key={index} className="achievement-item">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Legacy Achievements Support */}
                {project.achievements && !project.keyHighlights && (
                  <div className="project-achievements">
                    <h5 className="purple">Achievements</h5>
                    <ul className="achievements-list">
                      {project.achievements.map((achievement, index) => (
                        <li key={index} className="achievement-item">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Modal.Body>
        
        <Modal.Footer className="project-detail-footer">
          <div className="project-actions">
            {project.demoLink && (
              <Button
                variant="primary"
                href={project.demoLink}
                target="_blank"
                className="project-action-btn"
              >
                <BsArrowUpRightSquare /> &nbsp;
                Live Demo
              </Button>
            )}
          </div>
        </Modal.Footer>
      </Modal>

      {/* Image Viewer Modal */}
      <Modal
        show={imageViewer.show}
        onHide={closeImageViewer}
        size="xl"
        centered
        className="image-viewer-modal"
      >
        <Modal.Header className="image-viewer-header">
          <Modal.Title>Project Image</Modal.Title>
          <Button
            variant="outline-light"
            className="image-viewer-close"
            onClick={closeImageViewer}
          >
            <AiOutlineClose />
          </Button>
        </Modal.Header>
        <Modal.Body className="image-viewer-body">
          <img
            src={imageViewer.image}
            alt="Project screenshot"
            className="image-viewer-img"
            style={{ width: '100%', height: 'auto', maxHeight: '80vh', objectFit: 'contain' }}
          />
          {imageViewer.caption && (
            <p className="image-viewer-caption mt-3 text-center">{imageViewer.caption}</p>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectDetail; 