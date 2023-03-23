import "./OptionCard.css";
import { Button, Typography, Column } from "@cred/neopop-web/lib/components";
import { FontVariant } from "@cred/neopop-web/lib/primitives";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";

import Birthday from "../pages/events/birthdayEvent";
import image1 from "../images/wedding.png";

function Card(props) {
  return (
    <Tilt
      glareEnable={false}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={500}
      glareColor={"rgb(255,0,0,0)"}
    >
      <div className="card-main" style={{ backgroundColor: props.color }}>
        <Column>
          <div className="option-image">
            <img src={props.image} className="image" />
          </div>
          <div className="option-card">
            <div className="option-heading">{props.name}</div>
            <Link to="/birthday">
              <div className="view-button"></div>
            </Link>
          </div>
        </Column>
      </div>
    </Tilt>
  );
}

export default Card;
