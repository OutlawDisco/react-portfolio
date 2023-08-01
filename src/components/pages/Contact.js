import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
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
