import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.6em", paddingBottom: "70px", justifyContent: "center" }}>
              Contact <strong className="purple">Me!</strong>
            </h1>
            <div
              data-tf-live="01HRAHQK5DE0ANZ2A51Z1NR19N"
              style={{ maxWidth: "1024px", margin: "0 auto" }}
            ></div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;