import Card from "../cred/OptionCard";
import "./HomeMain.css";
import Ads from "../cred/Ads";
import { Column, HorizontalSpacer } from "@cred/neopop-web/lib/components";
import birthdayImg from "../images/birthdayvector3.png";
import marriagevector from "../images/wedding.png";
import holivector from "../images/holinew1.png";
import annivector from "../images/anniversary.png";
import christvector from "../images/christmas1.png";

function HomeMain() {
  return (
    <div>
      <HorizontalSpacer n={1} />
      <div className="ads-card">
        <Ads />
      </div>
      <HorizontalSpacer n={2} />

      <div className="flex-home">
        <div>
          <Card name="birthday" image={birthdayImg} />
        </div>
        <div>
          <Card name="holi party" image={holivector} />
        </div>
        <div>
          <Card name="Christmas" image={christvector} />
        </div>
        <div>
          <Card name="anniversary" image={annivector} />
        </div>
        <div>
          <Card name="marriage" image={marriagevector} />
        </div>
      </div>
    </div>
  );
}

export default HomeMain;
