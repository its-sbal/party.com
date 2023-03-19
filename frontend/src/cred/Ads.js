import React from "react";
import { Carousel } from "antd";
import ads1 from "../images/ads1.png";
import ads2 from "../images/ads2.png";
import ads3 from "../images/ads3.png";
import ads4 from "../images/ads4.png";

const contentStyle = {
  height: "190px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function Ads() {
  return (
    <Carousel autoplay>
      <div className="img1">
        <img
          src={ads4}
          style={{ height: "320px", width: "100%", display: "block" }}
        />
      </div>
      <div className="img1">
        <img
          src={ads2}
          style={{ height: "320px", width: "100%", display: "block" }}
        />
      </div>
      <div className="img1">
        <img
          src={ads3}
          style={{ height: "320px", width: "100%", display: "block" }}
        />
      </div>

      <div className="img1">
        <img
          src={ads1}
          style={{ height: "320px", width: "100%", display: "block" }}
        />
      </div>
    </Carousel>
  );
}

export default Ads;
