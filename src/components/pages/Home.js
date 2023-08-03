import React from "react";
import Figure from "react-bootstrap/Figure";
import headshot from "../../Images/Headshot.jpg";

export default function Home() {
  return (
    <div>
      <h1>Angela Outlaw-Lyons</h1>
      <p>Full-stack developer & artist</p>
      <div class="d-flex justify-content-center">
        <Figure.Image width={271} height={280} alt="headshot" src={headshot} />
      </div>
      <p class="skills">
        I've worked with: Node.js, Express.js, SQL, NoSQL, MongoDB, React
      </p>
    </div>
  );
}
