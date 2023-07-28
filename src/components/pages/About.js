import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

// function ShapeExample() {
//   return (
//     <Container>
//       <Row>
//         <Col xs={6} md={4}>
//           <Image src="holder.js/171x180" rounded />
//         </Col>

//         <Col xs={6} md={4}>
//           <Image src="holder.js/171x180" thumbnail />
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default ShapeExample;

export default function About() {
  return (
    <div>
      <h1>About Page</h1>

      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src="holder.js/171x180" roundedCircle />
          </Col>
        </Row>
      </Container>

      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
}
