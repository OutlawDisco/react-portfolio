import React from "react";
import Figure from "react-bootstrap/Figure";

export default function Home() {
  return (
    <div>
      <h1>Angela Outlaw-Lyons</h1>
      <p>Full-stack developer & artist</p>
      <Figure class="about-me">
        <Figure.Image
          width={171}
          height={180}
          alt="Domino"
          src="/Images/IMG_2803.jpg"
        />
        <Figure.Caption>
          I've worked with: Node.js, Express.js, SQL, NoSQL, MongoDB, React
        </Figure.Caption>
      </Figure>
    </div>
  );
}
