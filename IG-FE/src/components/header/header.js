import React from "react";
import "./header.css";
import logoImg from "../../image/logo.svg";
import searchImg from "../../image/searchIcon.svg";
import headerImg from "../../image/header_image.svg";
import paypalImg from "../../image/paypal.svg";
import googleImg from "../../image/google.svg";
import dropboxImg from "../../image/Dropbox_logo_2017.svg";
import Rating from "../../utils/rating";
import bgImage from "../../image/sharedImage.png";
import { Container } from "react-bootstrap";

export default function Header() {
  return (
    <div className="headerr">
      <div className="bgImage">
        <img src={bgImage} alt="logo" className="Image" />
      </div>
      <div className={"flexstyle"}>
        <div className="logo">
          <img src={logoImg} alt="logo" />
        </div>
        <div className="header_section">
          <a href="/">Home</a>
          <a href="/">Advertise</a>
          <a href="/">Supports</a>
          <a href="/">Contact</a>
        </div>
        <div className="tryforfree_btn">
          <a>Try for Free</a>
        </div>
      </div>
      <Container>
      <div className="contextt">
        <div className="grad textstyle divideSection">
          <div>
            <div
              style={{ display: "flex", height: "30px", alignItems: "center" }}
              className="title"
            >
              <Rating selectedStar={4}/>
              <p className="feedbackPara">Trused by over 4,332 students</p>
            </div>
            <div>
              <h1 className="heading">
                Learn Design
                <br />
                with Nia Matos
              </h1>
              <br />
              <p className="contentt">
                Get your blood tests delivered at let home collect sample
                <br /> from the victory of the managments that supplies best
                <br />
                design system guidelines ever.
              </p>
            </div>
            <div className="search_box">
              <input
                style={{ border: "none", fontSize: '12px' }}
                className=""
                placeholder="Search Course Name"
              />
              <img src={searchImg} alt={"search"} className="searchImg"/>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: '20px', alignItems: 'center', marginTop: '30px' }}>
              <span >
                <p className="sponsoredText">Sponsored by:</p>
              </span>
              <span>
                <img
                  style={{ height: "20px", width: "70px" }}
                  src={paypalImg}
                  alt="paypal"
                />
              </span>
              <span>
                <img
                  style={{ height: "20px", width: "70px" }}
                  src={googleImg}
                  alt="google"
                />
              </span>
              <span>
                <img
                  style={{ height: "20px", width: "70px" }}
                  src={dropboxImg}
                  alt="dropbox"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="section_img divideSection">
          <img className="section_img" src={headerImg} alt={"img"} />
        </div>
      </div>
      </Container>
    </div>
  );
}
