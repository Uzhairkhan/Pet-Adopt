import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function Show() {
  return (
    <div>
      <h2>Types Of Pets</h2>
      <Container>
        <Row>
          <Col md={4} className=" border border-sm shadow p-3   rounded"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Show;
