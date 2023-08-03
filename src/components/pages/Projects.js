import React from "react";
import Image from "react-bootstrap/Image";
import PetPal from "../../Images/petPal.png";
import HotTakes from "../../Images/HotTakes.gif";
import Quiz from "../../Images/quiz.png";
import TechBlog from "../../Images/techblog.png";
import Budgie from "../../Images/Screenshot 2023-08-03 133519.png";

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
              <Image class="portfolio" src={PetPal} height={200} width={200} />
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
                src={HotTakes}
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
              <Image class="portfolio" src={Quiz} height={200} width={200} />
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
                src={TechBlog}
                height={200}
                width={200}
              />
            </a>
          </div>
          <div class="d-flex justify-content-around">
            <a
              href="https://budgie-c967e4a5fd01.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Image class="portfolio" src={Budgie} height={200} width={200} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
