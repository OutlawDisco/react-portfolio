import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

export default function Projects() {
  return (
    <Container fluid class="d-flex justify-content-center">
      <Container>
        <h1>Werk!</h1>
        <p>Here are a few of my projects!</p>
        <Row class="d-flex justify-content-around">
          <Col lg={3}>
            <a href="https://outlawdisco.github.io/Pet-Pal/">
              <Image
                class="portfolio"
                src="/Images/petPal.png"
                height={200}
                width={200}
              />
            </a>
          </Col>
          <Col lg={3}>
            <a href="https://hot-takes-reviews-b29812e3e846.herokuapp.com/">
              <Image
                class="portfolio"
                src="/Images/HotTakes.gif"
                height={200}
                width={200}
              />
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
