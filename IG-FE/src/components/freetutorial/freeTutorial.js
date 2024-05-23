import React, { useState } from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import pic1 from "../../image/pic1.png";
import pic2 from "../../image/pic2.png";
import pic3 from "../../image/pic3.png";
import "./freeTutorial.css"
import SliderUtil from "../crousal/Carousel";

export default function FreeTutorial() {

  const [items, setItems] = useState([
    { src: pic1 },
    { src: pic2 },
    { src: pic3 },
  ]);
  return (
    <div className="midtutorial">
      <Row>
        <Col lg={8} md={8} className="mapp">
          <SliderUtil setItems={setItems} items={items}/>
            {/* <Carousel>
              <Carousel.Item>
                <img className="carouselImg" src={pic1} alt="carousel" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="carouselImg" src={pic1} alt="carousel" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="carouselImg" src={pic1} alt="carousel" />
              </Carousel.Item>
            </Carousel> */}
        </Col>

        <Col lg={4} md={4}>
          <h5>Free tutorial</h5>
          <h2>
            More than thousand
            <br /> of free tutorial upload
            <br /> every weeks
          </h2>
        </Col>
      </Row>
    </div>
  );
}
