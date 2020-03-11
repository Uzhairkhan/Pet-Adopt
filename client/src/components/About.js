import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialMedia from "./Socialmedia";

export default function About() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>About</h3>
        </Col>
      </Row>
      <Row>
        <Col
          className=" border border-sm shadow p-3   rounded"
          style={{ fontFamily: "Calisto MT", fontSize: "19px" }}
        >
          {
            "Pet@dopt is a non-profit organization. Hundreds of pets are abandoned and rescued in India everyday. Although there are many wonderful souls across the nation who work extra hours and put in efforts beyond their capacity, there is always a shortage of funding and communication across the animal activist circuit."
          }
          <p></p>
          {
            "Keeping this issue in mind, we have launched the Adoption section at Pet@dopt. This pan-India online portal aims to establish a database of pet animals pets that are available in many cities such as Bangalore and others across the country. We are here to not just display these pets but assist in the process by having a streamlined process in place which includes filling up of the adoption form as well as mediating between the two parties, namely the current foster/shelter of the pet and the potential adopting entity."
          }
          <p></p>

          {
            " Our ultimate goal is reduce pets over-population by providing loving homes for all the homeless pets , and at the same time helping every human share their lives with a furry companion that they so dearly want."
          }
        </Col>
      </Row>
      <p></p>
      <SocialMedia />
    </Container>
  );
}
