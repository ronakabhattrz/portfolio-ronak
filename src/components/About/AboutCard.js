import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ronak Bhatt </span>
            from <span className="purple"> Gujarat, India.</span>
            <br />I'm a Full Stack software engineer with solid experience with Ruby on Rails and Javascripts Frameworks. I've worked in applications in several business areas and with several technologies.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Produce Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing, Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ronak</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
