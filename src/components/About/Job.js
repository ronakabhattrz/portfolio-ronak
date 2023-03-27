import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Bulletproof from "../../Assets/company/bulletproof.svg";
import Crest from "../../Assets/company/crest.png";
import Mainstreet from "../../Assets/company/mainstreet.svg";
import Upwork from "../../Assets/company/upwork.png";


function Job() {
  return (
    <Container>
      <Row className="justify-content-md-center" style={{ justifyContent: "center", paddingBottom: "50px", paddingTop: "50px" }}>
        <Col md="3" className="tech-icons1">
          <img
            src={Bulletproof}
            alt="home pic"
            className="img-fluid"
            style={{ justifyContent: "center", padding: "20px", width: "70%" }}
          />
        </Col>
        <Col md="3" className="tech-icons1">
          <img
            src={Crest}
            alt="home pic"
            className="img-fluid"
            style={{ justifyContent: "center", padding: "20px", width: "70%" }}
          />
        </Col>
        <Col md="3" className="tech-icons1">
          <img
            src={Mainstreet}
            alt="home pic"
            className="img-fluid"
            style={{ justifyContent: "center", padding: "20px", width: "70%" }}
          />
        </Col>
        <Col md="3" className="tech-icons1">
          <img
            src={Upwork}
            alt="home pic"
            className="img-fluid"
            style={{ justifyContent: "center", padding: "20px", width: "70%" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Job;
