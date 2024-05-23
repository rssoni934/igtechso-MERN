import React, { useState } from "react";
import "./pricingSection.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import tickImg from "../../image/tick.png";
import crossImg from "../../image/cross.png";

export default function PricingSection() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (n) => setSelectedTab(n);

  const freePlan = [
    {
      check: true,
      title: "Ultimate access to all course, exercises and assessments",
    },
    {
      check: true,
      title: "Free acess for all kind of exercise corrections with downloads.",
    },
    {
      check: true,
      title: "Total assessment corrections with free download access system",
    },
    {
      check: false,
      title: "Unlimited download of courses on the mobile app contents",
    },
    {
      check: false,
      title: "Download and print courses and exercises in PDF",
    },
  ];

  return (
    <Container>
      <div className="header">
        <h6 style={{ color: "orange" }}>PRICING PLAN</h6>
        <h3>Choose your pricing policy</h3>

        <div className="contexttt">
          <Row>
            <div style={{ backgroundColor: "#F7F8FB", padding: "10px", width: "fit-content" }}>
              <Button
                className={`tabs ${selectedTab === 0 ? "selected-tab" : ""}`}
                onClick={() => handleTabChange(0)}
              >
                Monthly Plan
              </Button>
              <Button
                className={`tabs ${selectedTab === 1 ? "selected-tab" : ""}`}
                onClick={() => handleTabChange(1)}
              >
                Annual Plan
              </Button>
            </div>
          </Row>
          <br />
          <Row>
            <Col lg={6}>
              <div style={{ textAlign: "start" }}>
                <h5>Free Plan</h5>
                <p>For Small teams or office</p>
                {freePlan.map((d) => (
                  <Row>
                    <Col lg={2}>
                      <img
                        style={{ height: "24px", width: "24px" }}
                        src={d.check ? tickImg : crossImg}
                        alt="tick"
                      />
                    </Col>
                    <Col lg={10}>
                      <p>{d.title}</p>
                    </Col>
                  </Row>
                ))}
                <Button className="trailBtn">Start free trail</Button>
              </div>
            </Col>
            <Col lg={6}>
              <div style={{ textAlign: "start" }}>
                <h5>Premium</h5>
                <p>For startup enterprise</p>
                {freePlan.map((d) => (
                  <Row>
                    <Col lg={2}>
                      <img
                        style={{ height: "24px", width: "24px" }}
                        src={tickImg}
                        alt="tick"
                      />
                    </Col>
                    <Col lg={10}>
                      <p>{d.title}</p>
                    </Col>
                  </Row>
                ))}
                <Button className="trailBtn">Subscribe Now</Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}
