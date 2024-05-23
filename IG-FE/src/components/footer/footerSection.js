import React from "react";
import { Col, Row } from "react-bootstrap";

export default function FooterSection() {
  return (
    <div style={{padding: "50px"}}>
      <Row>
        <Col lg={3}>
          <h5>About Us</h5>
          <p>Support Center</p>
          <p>Customer Support</p>
          <p>About Us</p>
          <p>Copyright</p>
          <p>Popular Campaign</p>
        </Col>
        <Col lg={3}>
          <h5>Our Information</h5>
          <p>Return Policy</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Site Map</p>
          <p>Store Hours</p>
        </Col>
        <Col lg={3}>
          <h5>My Account</h5>
          <p>Press inquiries</p>
          <p>Social media </p>
          <p>directories</p>
          <p>Images & B-roll</p>
          <p>Permissions</p>
        </Col>
        <Col lg={3}>
          <h5>Policy</h5>
          <p>Application security</p>
          <p>Software principles</p>
          <p>Unwanted software policy</p>
          <p>Copyright</p>
          <p>Responsible supply chain</p>
        </Col>
      </Row>
    </div>
  );
}
