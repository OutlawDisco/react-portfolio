import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <div className="socials">
        <LinkedInIcon href="" />
        <GitHubIcon href="https://github.com/OutlawDisco" />
        <EmailIcon href="" />
      </div>
    </div>
  );
}
