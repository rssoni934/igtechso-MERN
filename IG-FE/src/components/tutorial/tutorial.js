import React, { useState } from "react";
import headerImg from "../../image/header_image.svg";
import { FaEye } from "react-icons/fa";
import Slider from "react-slick";
import "./tutorial.css";
import Rating from "../../utils/rating";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import computerImg from "../../image/computer.png"

export default function Tutorial() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const data = [
    {
      title: "How to work with prototype design with adobe xd featuring tools",
      review: 5,
      watchCount: 2538,
      noOfReview: 392,
    },
    {
      title:
        "Create multiple artboard by using figma prototyping tools development",
      review: 4.5,
      watchCount: 3532,
      noOfReview: 524,
    },
    {
      title:
        "Convert your web layout theming easily with sketch zeplin extension",
      review: 5,
      watchCount: 1037,
      noOfReview: 392,
    },
    {
      title:
        "Convert your web layout theming easily with sketch zeplin extension",
      review: 5,
      watchCount: 2538,
      noOfReview: 392,
    },
    {
      title:
        "Create multiple artboard by using figma prototyping tools development",
      review: 3,
      watchCount: 2538,
      noOfReview: 392,
    },
    {
      title: "How to work with prototype design with adobe xd featuring tools",
      review: 3,
      watchCount: 2538,
      noOfReview: 392,
    },
  ];

  return (
    <div>
    <Container>
    <div className="FeaturesSection">
      <p className="featureheading">Quality features</p>
      <h4 className="mainText">Tutorials that people love most</h4>
      <div > 
        <Slider {...settings}>
          {data.map((d) => {
            return (
              <div >
                <img
                  style={{ height: "150px", width: "100%" }}
                  src={computerImg}
                  alt={"1"}
                />
                <div className="textSection">
                <div className="ratingSection">
                  <Rating selectedStar={d.review} />
                  <p>{`${d.review} (${d.noOfReview} reviews)`}</p>
                </div>
                <h5 style={{fontSize: '17px', padding: '10px 0'}}>{d.title}</h5>
                <div className="student">
                    <FaEye />
                    <p>{`${d.watchCount} students watched`}</p>
                </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
    </Container>
    </div>
  );
}
