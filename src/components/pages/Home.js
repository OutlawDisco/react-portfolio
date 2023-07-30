import React from "react";
import Figure from "react-bootstrap/Figure";

export default function Home() {
  return (
    <div>
      <h1>Angela Outlaw-Lyons</h1>
      <p>Full-stack developer & artist</p>
      <Figure class="photo">
        <Figure.Image
          width={171}
          height={180}
          alt="headshot"
          src="/Images/Headshot.jpg"
        />
        <div class="about"></div>
      </Figure>
      <div class="skills">
        I've worked with: Node.js, Express.js, SQL, NoSQL, MongoDB, React
      </div>
    </div>
  );
}
