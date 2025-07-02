import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tameem Kabbani </span>
            <br />a Computer Science graduate with a focus on AI, automation, and NLP. 
            <br />
            I’ve built practical AI tools across finance, legal, and language sectors, including founding TawjeehAI and contributing to research at QCRI and NYU. I’m passionate about using technology to streamline workflows and solve real-world problems.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring cultures
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
