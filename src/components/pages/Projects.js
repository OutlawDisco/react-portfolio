import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

export default function Projects() {
  return (
    <div className="container-fluid">
      <div>
        <h1>Werk!</h1>
        <p>Here are a few of my projects!</p>
        <div className="row">
          <div class="d-flex justify-content-around">
            <a
              href="https://outlawdisco.github.io/Pet-Pal/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                class="portfolio"
                src="/Images/petPal.png"
                height={200}
                width={200}
              />
            </a>
          </div>
          <div class="d-flex justify-content-around">
            <a
              href="https://hot-takes-reviews-b29812e3e846.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                class="portfolio"
                src="/Images/HotTakes.gif"
                height={200}
                width={200}
              />
            </a>
          </div>
          <div class="d-flex justify-content-around">
            <a
              href="https://outlawdisco.github.io/Quiz-Me/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                class="portfolio"
                src="/Images/quiz.png"
                height={200}
                width={200}
              />
            </a>
          </div>
          <div class="d-flex justify-content-around">
            <a
              href="https://adol-mvc-tech-blog-97325c0ed57f.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                class="portfolio"
                src="/Images/techblog.png"
                height={200}
                width={200}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
