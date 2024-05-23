import React from "react";
import "./functionSection.css";
import { Col, Container, Row } from "react-bootstrap";
import arrowDown from '../../image/arrowDown.png';
import arrowUp from '../../image/arrowUp.png';

export default function FunctionSection() {
  return (
   <Container>
    <div className="header">
        <h6 style={{color: 'orange'}}>WHATS THE FUNCTION</h6>
        <h3>Let's see how it works</h3>

        <div className="context">
            <Row>
                <Col lg={3} md={3} sm={6}>
                    <div className="mainDiv">
                        <div className="numerical">
                            <h3 className="numericCircle">01</h3>
                            <img src={arrowUp}/>
                        </div>
                        <div className="content">
                            <p className="mainContent">
                                Set disbursment instruction
                            </p>
                            <p className="mainText">
                            Get your tutorials delivered at let home collect sample from the victory of the managments.
                                </p>
                        </div>

                    </div>
                </Col>
                <Col lg={3} md={3} sm={6}>
                    <div className="mainDiv">
                        <div className="numericalDiv">
                            <h3 className="numericCircle">02</h3>
                            <img src={arrowDown}/>
                        </div>
                        <div className="content">
                            <p className="mainContent">
                                Set disbursment instruction
                            </p>
                            <p className="mainText">
                            Get your tutorials delivered at let home collect sample from the victory of the managments.
                                </p>
                        </div>

                    </div>
                </Col>
                <Col lg={3} md={3} sm={6}>
                    <div className="mainDiv">
                        <div className="numerical">
                            <h3 className="numericCircle">03</h3>
                            <img src={arrowUp}/>
                        </div>
                        <div className="content">
                            <p className="mainContent">
                                Set disbursment instruction
                            </p>
                            <p className="mainText">
                            Get your tutorials delivered at let home collect sample from the victory of the managments.
                                </p>
                        </div>

                    </div>
                </Col>
                <Col lg={3} md={3} sm={6}>
                    <div className="mainDiv">
                        <div className="numericalDiv">
                            <h3 className="numericCircle">04</h3>
                            <img src={arrowDown}/>
                        </div>
                        <div className="content">
                            <p className="mainContent">
                                Set disbursment instruction
                            </p>
                            <p className="mainText">
                            Get your tutorials delivered at let home collect sample from the victory of the managments.
                                </p>
                        </div>

                    </div>
                </Col>
            </Row>
            </div>
    </div>
   </Container>
  );
}
