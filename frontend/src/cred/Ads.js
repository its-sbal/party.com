import React from "react";
import { Carousel } from "antd";
import adsimg1 from "../images/ads-1.jpg";
import adsimg2 from "../images/weddingpic.jpg";
import adsimg3 from "../images/holi.jpg";

const contentStyle = {
  height: "160px",
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
          src={adsimg1}
          style={{ height: "300px", width: "100%", display: "block" }}
        />
      </div>
      <div className="img1">
        <img
          src={adsimg2}
          style={{ height: "300px", width: "100%", display: "block" }}
        />
      </div>
      <div className="img1">
        <img
          src={adsimg3}
          style={{ height: "300px", width: "100%", display: "block" }}
        />
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
}

export default Ads;
