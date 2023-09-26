import React from 'react';
import Stack from '@mui/material/Stack';
import Image from 'react-bootstrap/Image';
import PetPal from '../../Images/petPal.png';
import HotTakes from '../../Images/HotTakes.gif';
import Quiz from '../../Images/quiz.png';

export default function Projects() {
  return (
    <div className="container-fluid">
      <div>
        <h1>Here are a few of my projects</h1>
        <div class="d-flex justify-content-around">
          <Stack spacing={2}>
            <div class="d-flex justify-content-around">
              <a
                href="https://outlawdisco.github.io/Pet-Pal/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  class="portfolio"
                  src={PetPal}
                  height={200}
                  width={200}
                />
              </a>
              <p>
                A minimal App designed to assist pet parents with tracking
                essentials like food, activities, and grooming.
              </p>
              <p>HTML,CSS, JavaScript</p>
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
              <p>
                A interactive Movie-Review site where average movie goers can
                add their critiques and rate others
              </p>
              <p> JavaScript, Handlebars, MySQL, Express</p>
            </div>
            <div class="d-flex justify-content-around">
              <a
                href="https://outlawdisco.github.io/Quiz-Me/"
                target="_blank"
                rel="noreferrer"
              >
                <Image class="portfolio" src={Quiz} height={200} width={200} />
              </a>
              <p>
                A basic interactive quiz that challenges the users Fraggle Rock
                knowledge
              </p>
              <p>HTML, CSS, JavaScript</p>
            </div>
          </Stack>
        </div>
      </div>
    </div>
  );
}
