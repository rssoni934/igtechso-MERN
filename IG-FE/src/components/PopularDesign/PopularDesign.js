import React from "react";
import Play from "../../image/play.svg";
import "./PopularDesign.css";
import { FaEye } from "react-icons/fa";
import Rating from "../../utils/rating";
import { Button, Container } from "react-bootstrap";

const PopularDesign = () => {
  return (
    <div>
      <Container>
        <div className="featuresSection">
          <p className="qualityText">Quality features</p>
          <h4>Popular designing course</h4>
          <div style={{ padding: 20 , marginTop: '20px'}} className={"playSection"}>
            <div style={{display: 'flex', gap: '20px'}}>
              <img className="Play_img" src={Play} alt={"img"} />
              <div>
                <div className="rating">
                  <Rating selectedStar={4} />
                  <FaEye />
                </div>
                <h2 className="designText">
                  Professional graphic design tutorial full course with exercise
                  file
                </h2>
                <h2 className="briefPara">
                  Get your tutorials delivered at let home collect sample from
                  the victory of the managments.
                </h2>
              </div>
            </div>
            <div style={{width: '250px'}}>
            <Button className="videoBtn">7 Video classes  |  4hrs</Button>
            </div>
          </div>
          <div style={{ padding: 20 , marginTop: '20px'}} className={"playSection"}>
            <div style={{display: 'flex', gap: '20px'}}>
              <img className="Play_img" src={Play} alt={"img"} />
              <div>
                <div className="rating">
                  <Rating selectedStar={4} />
                  <FaEye />
                </div>
                <h2 className="designText">
                  Professional graphic design tutorial full course with exercise
                  file
                </h2>
                <h2 className="briefPara">
                  Get your tutorials delivered at let home collect sample from
                  the victory of the managments.
                </h2>
              </div>
            </div>
            <div style={{width: '250px'}}>
            <Button className="videoBtn">7 Video classes  |  4hrs</Button>
            </div>
          </div>
          <div style={{ padding: 20 , marginTop: '20px'}} className={"playSection"}>
            <div style={{display: 'flex', gap: '20px'}}>
              <img className="Play_img" src={Play} alt={"img"} />
              <div>
                <div className="rating">
                  <Rating selectedStar={4} />
                  <FaEye />
                </div>
                <h2 className="designText">
                  Professional graphic design tutorial full course with exercise
                  file
                </h2>
                <h2 className="briefPara">
                  Get your tutorials delivered at let home collect sample from
                  the victory of the managments.
                </h2>
              </div>
            </div>
            <div style={{width: '250px'}}>
            <Button className="videoBtn">7 Video classes  |  4hrs</Button>
            </div>
          </div>
          <div style={{ padding: 20 , marginTop: '20px'}} className={"playSection"}>
            <div style={{display: 'flex', gap: '20px'}}>
              <img className="Play_img" src={Play} alt={"img"} />
              <div>
                <div className="rating">
                  <Rating selectedStar={4} />
                  <FaEye />
                </div>
                <h2 className="designText">
                  Professional graphic design tutorial full course with exercise
                  file
                </h2>
                <h2 className="briefPara">
                  Get your tutorials delivered at let home collect sample from
                  the victory of the managments.
                </h2>
              </div>
            </div>
            <div style={{width: '250px'}}>
            <Button className="videoBtn"> 7 Video classes  |  4hrs</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PopularDesign;
