import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import autoServiceHaarlem from "../../Assets/Projects/autoservicehaarlem.png";
import defense from "../../Assets/Projects/defense.png";
import garageduin from "../../Assets/Projects/garageduin.png";
import hollandia from "../../Assets/Projects/hollandia.png";
import hollandiaPremium from "../../Assets/Projects/hollandia-premium.png";
import invoease from "../../Assets/Projects/invoease.png";
import naveco from "../../Assets/Projects/naveco.png";
import nsoj from "../../Assets/Projects/nsoj.png";
import pitshop from "../../Assets/Projects/pitshop.png";
import allpro from "../../Assets/Projects/allpro.png";
import jagerlodge from "../../Assets/Projects/jagerlodge.png"

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
              imgPath={autoServiceHaarlem}
              isBlog={false}
              title="Auto service haarlem"
              description="Auto service haarlem is Car advertising CMS with several API (wheelerdelta, ga-connector etc) which is integrated on ruby on rails."
              ghLink="https://autoservicehaarlem.nl"
              demoLink="https://autoservicehaarlem.nl"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hollandia}
              isBlog={false}
              title="Hollandia Automotive"
              description="Hollandia Automotive is Car advertising CMS with several API (wheelerdelta, ga-connector etc) which is integrated on ruby on rails."
              demoLink="https://hollandiaautomotive.nl"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hollandiaPremium}
              isBlog={false}
              title="Hollandia Premium And Porsche Centre"
              description="Hollandia Premium & Porsche Centre is Car advertising CMS with several API (wheelerdelta, ga-connector etc) which is integrated on ruby on rails."
              demoLink="https://hollandiapremium.nl"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={defense}
              isBlog={false}
              title="Defense.com™"
              description="The most comprehensive security packages available, Detection, protection, compliance and training – all from a single easy-to-use dashboard."
              demoLink="https://www.defense.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={garageduin}
              isBlog={false}
              title="GARAGE DUIN"
              description="GARAGE DUIN is Car advertising CMS with several API (wheelerdelta, ga-connector etc) which is integrated on ruby on rails."
              demoLink="https://garageduin.nl"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nsoj}
              isBlog={false}
              title="NSoJ Bangalore"
              description="National School of Journalism and Public Discourse (NSoJ) is a prestigious college in Bangalore that identifies and trains India's best talents. Our mission is to train a generation of ethical professionals who care about justice, truth and democracy."
              demoLink="https://www.nsoj.in"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={allpro}
              isBlog={false}
              title="All Pro Commercial Services"
              description="The All Pro Client Portal lets us easily log in and quickly view our current and past maintenance jobs with live status updates and real time progress reports. And with the additional data sets about those jobs right at our fingertips, we are finding new ways to reduce our company's maintenance costs and stay on budget."
              demoLink="https://www.allprocstx.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jagerlodge}
              isBlog={false}
              title="Jager Lodge"
              description="Jagerlodge started as an idea in 2017, in the search for a more luxury stay in Ladis, a picturesque village on the Tyrolean Alps. Now, in 2022, we can finally welcome you in our house. A comfortable vacation home for you and your loved ones, directly on the slopes of our beautiful Sunny Plateau. Where you can enjoy the unique experience of Ski-in, Ski-out."
              demoLink="https://jagerlodge.at"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pitshop}
              isBlog={false}
              title="Pit Stop"
              description="The Online Motorsports Superstore sells racing safety equipment, racing Hans Device, racing helmets, racing suits, racing gloves, Racing Helmet, Racing Helmets and more all at our famous low everyday prices."
              demoLink="https://pitstopusa.com"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={naveco}
              isBlog={false}
              title="NAVECO"
              description="NAVECO | Votre Chauffeur Privé VTC- Alternative aux taxis - Chauffeur Privé VTC - Tarifs fixes - réservation en avance."
              demoLink="https://www.nav-eco.fr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={invoease}
              isBlog={false}
              title="Invoease"
              description="Invoease products are geared mainly toward small-sized businesses and offer cloud-based accounting that manage and Invoices."
              demoLink="https://invoease.com"
            />
          </Col>

          

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
