import React from 'react';
import Figure from 'react-bootstrap/Figure';
import headshot from '../../Images/backyard.jpg';

export default function Home() {
  return (
    <div>
      <h1>Angela Outlaw-Lyons</h1>
      <h5>Solutions-oriented full stack web developer</h5>
      <div class="d-flex justify-content-center">
        <Figure.Image
          width={271}
          height={280}
          border={5}
          alt="headshot"
          src={headshot}
        />
      </div>
      <p class="skills">
        Angela came to Denver via Boston in 2015 and is a recent graduate from
        the University of Denver's Full-Stack Flex Bootcamp. Experience
        utilizing a combination of strong collaboration, creativity, and
        analytical skills. Adaptive and able to work in a fast-paced and diverse
        team environment.
      </p>
    </div>
  );
}
