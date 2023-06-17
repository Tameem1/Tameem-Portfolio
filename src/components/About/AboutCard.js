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
            from <span className="purple"> Sharjah, UAE</span>
            <br /> I am a senior year student pursuing a Bachelor's in Computer Science at the American University of Sharjah.
            <br />
            Additionally, I am currently employed as a Machine Learning Intern at
            CAMeL Lab, New York University Abu Dhabi.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Discovering new cultures
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Towards building a better world!"{" "}
          </p>
          <footer className="blockquote-footer">Tameem</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
