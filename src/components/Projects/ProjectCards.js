import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsEye } from "react-icons/bs";

function ProjectCards(props) {
  const handleViewDetails = (e) => {
    e.preventDefault();
    e.stopPropagation();
    props.onViewDetails(props.project);
  };

  return (
    <Card className="project-card-view" onClick={handleViewDetails}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" className="project-card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        
        <div className="project-card-actions">
          <Button 
            variant="primary" 
            onClick={handleViewDetails}
            className="view-details-btn"
          >
            <BsEye /> &nbsp;
            View Details
          </Button>
          
          <div className="project-quick-actions">
            {!props.isBlog && props.demoLink && (
              <Button
                variant="outline-secondary"
                href={props.demoLink}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                size="sm"
              >
                <CgWebsite />
              </Button>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
