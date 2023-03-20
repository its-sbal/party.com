import "./OptionCard.css";
import { Button, Typography, Column } from "@cred/neopop-web/lib/components";
import { FontVariant } from "@cred/neopop-web/lib/primitives";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Birthday from "../pages/birthday";
import image1 from "../images/party.png";

function Card(props) {
  return (
    <div className="card-main">
      <Column>
        <div className="option-image">
          {/* <img src={image1} style={{ width: "150px", height: "45%" }} /> */}
          {/* <iframe src="https://embed.lottiefiles.com/animation/90504"></iframe> */}
        </div>
        <div className="option-card">
          <div className="option-heading">{props.name}</div>

          <Link to="/birthday">
            <div className="view-button"></div>
          </Link>
        </div>
      </Column>
    </div>
  );
}

export default Card;
