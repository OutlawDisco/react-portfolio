import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>

      <div className="row">
        <div class="socials d-flex justify-content-center">
          <a
            href="https://www.linkedin.com/in/angela-outlaw-lyons-544071288/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon sx={{ fontSize: 100 }} />
          </a>
          <a
            href="https://github.com/OutlawDisco"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon sx={{ fontSize: 100 }} />
          </a>
          <a href="mailto:aoutlaw00@gmail.com" target="_blank" rel="noreferrer">
            <EmailIcon sx={{ fontSize: 100 }} />
          </a>
        </div>
      </div>
    </div>
  );
}
