import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import SocialMedia from "./Socialmedia";
import jumboImg from "../img/jeffrey-buchbinder-aKwozKwSBgA-unsplash.jpg";

function Home() {
  return (
    <div
    // style={{
    //   backgroundImage: `url(${jumboImg})`,
    //   backgroundSize: "cover"
    // }}
    >
      <Container>
        <Row>
          <Col
            align="center"
            style={{ fontFamily: "Calisto MT", color: "	#F8F8FF" }}
          >
            <h3>Welcome to Pet@dopt</h3>
            <p></p>
            <p></p>
          </Col>
        </Row>
        <Row>
          <Col className=" border border-sm shadow p-3   rounded">
            <p>If you can't adopt, FOSTER</p>
            <p>If you can't foster, VOLUNTEER</p>
            <p>If you can't volunteer, DONATE</p>
            <p>If you can't donate, EDUCATE, NETWORK, & SHARE</p>
            <p>EVERYONE can do something large or small,</p>
            <p>to save a life</p>
          </Col>
        </Row>
        <p></p>
        <Row>
          <Col>
            <SocialMedia />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
