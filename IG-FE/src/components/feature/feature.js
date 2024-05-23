import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./feature.css";

export default function Feature() {
  return (
    <div style={{height: '600px'}}>
      <Container>
        <div style={{marginTop: '60px'}}>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <Row>
                <Col style={{paddingTop: '80px'}}>
                  <Card>
                    <h2 style={{ color: "#EF9E48" }}>80k+</h2>
                    <p>We have more than students</p>
                  </Card>

                  <Card style={{marginTop: '30px'}}>
                  <h2 style={{ color: "#FA578E" }}>90+</h2>
                    <p>Daily updated blog post maintain</p>
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <h2 style={{ color: "#FF753A" }}>150+</h2>
                    <p>Free online tutorials videos available</p>
                  </Card>

                  <Card style={{marginTop: '30px'}}>
                    <h2 style={{ color: "#E682FF" }}>& 3M</h2>
                    <p>Job posted everydays with qualification</p>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="Coresection">
                <h2 className="coreText">CORE FEATURES</h2>
                <h2 className="content">
                  Smart Jackpots that you may love this anytime & anywhere
                </h2>
                <h2 className="corePara">
                  Get your tests delivered at let home collect sample from the
                  victory of the managments that supplies best design system
                  guidelines ever. Get your tests delivered at let home collect
                  sample.
                </h2>
                <div
                  style={{ backgroundColor: "#FCF2E8", width: "fit-content" , padding: '10px'}}
                >
                  <a
                    className="exploreBtn"
                  >
                    Explore details
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
