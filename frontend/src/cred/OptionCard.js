import "./OptionCard.css";
import { Button, Typography, Column } from "@cred/neopop-web/lib/components";
import { FontVariant } from "@cred/neopop-web/lib/primitives";

import image1 from "../images/party.png";
function Card(props) {
  return (
    <div className="card-main">
      <Column>
        <div className="option-image">
          <img src={image1} style={{ width: "150px", height: "45%" }} />
        </div>
        <div className="option-card">
          <div className="option-heading">{props.name}</div>
          <div className="view-button"></div>
        </div>
      </Column>
    </div>
  );
}

export default Card;
