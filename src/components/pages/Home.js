import React from 'react';
import Figure from 'react-bootstrap/Figure';
import headshot from '../../Images/Headshot.jpg';

export default function Home() {
  return (
    <div>
      <h1>Angela Outlaw-Lyons</h1>
      <p>Full-stack Web Developer</p>
      <div class="d-flex justify-content-center">
        <Figure.Image width={271} height={280} alt="headshot" src={headshot} />
      </div>
      <p class="skills">
        Recent graduate of the University of Denver coding bootcamp. Technical
        skills in HTML, CSS, JavaScript, OOP & MVC, MySQL, MongoDB, Node.js,
        Express.js and React
      </p>
    </div>
  );
}
