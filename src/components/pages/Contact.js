import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Reach Out!</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="secondary">Sumbmit</Button>{" "}
      </Form>
      <div className="row">
        <div class="socials d-flex justify-content-center">
          <a href="" target="_blank" rel="noreferrer">
            <LinkedInIcon sx={{ fontSize: 70 }} />
          </a>
          <a
            href="https://github.com/OutlawDisco"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon sx={{ fontSize: 70 }} />
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <EmailIcon sx={{ fontSize: 70 }} />
          </a>
        </div>
      </div>
    </div>
  );
}
