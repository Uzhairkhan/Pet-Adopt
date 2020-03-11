import React from "react";
import { Row, Col } from "react-bootstrap";

function SocialMedia() {
  return (
    <Row>
      <Col>
        <span className="text">Connect with us:</span> &nbsp;
        <a href="https://www.facebook.com" target="_blank">
          <img
            src="fbooklogo.svg"
            alt="facebook"
            width="25"
            height="25"
            border="0"
          />
        </a>
        &nbsp;
        <a href="https://twitter.com" target="_blank">
          <img
            src="twitterlogo.svg"
            alt="twitter"
            width="25"
            height="25"
            border="0"
          />
        </a>
        &nbsp;
        <a href="https://www.pinterest.com" target="_blank">
          <img
            src="pintrestlogo.svg"
            alt="pinterest"
            width="25"
            height="25"
            border="0"
          />
        </a>
        &nbsp;
        <a href="http://www.youtube.com" target="_blank">
          <img
            src="ytubelogo.svg"
            alt="pinterest"
            width="25"
            height="30"
            border="0"
          />
        </a>
        &nbsp;
        <a href="http://instagram.com" target="_blank">
          <img
            src="instalogo.svg"
            alt="pinterest"
            width="25"
            height="25"
            border="0"
          />
        </a>
      </Col>
    </Row>
  );
}
export default SocialMedia;
