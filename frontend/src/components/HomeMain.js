import Card from "../cred/OptionCard";
import "./HomeMain.css";
import Ads from "../cred/Ads";
import { Column, HorizontalSpacer } from "@cred/neopop-web/lib/components";
import birthdayImg from "../images/homeMain/birthdayCard.jpg";
import birthdayImg2 from "../images/homeMain/birthdayCard2.jpg";

import marriageImg from "../images/homeMain/marriageCard.jpg";
import collegeImg2 from "../images/homeMain/collegeCard2.jpg";
import cradleImg from "../images/homeMain/cradleCard.jpg";
import cradleImg2 from "../images/homeMain/cradleCard2.jpg";
import othersImg from "../images/homeMain/othersCard.jpg";

function HomeMain() {
  return (
    <div>
      <HorizontalSpacer n={1} />
      <div className="ads-card">
        <Ads />
      </div>
      <HorizontalSpacer n={2} />
      <div className="tab1">
        <p style={{ fontSize: "1rem" }}>
          <span style={{ fontWeight: "bold" }}>Special Events</span>
        </p>
      </div>
      <div className="flex-home">
        <div>
          <Card name="birthda" image={birthdayImg2} color="#ffa43c" />
        </div>
        <div>
          <Card name="marriage" image={marriageImg} color="#ff493c" />
        </div>
        <div>
          <Card name="college events" image={collegeImg2} color="#8200cd" />
        </div>
        <div>
          <Card name="cradle ceremony" image={cradleImg2} color="#cd43ff" />
        </div>
        <div>
          <Card name="Cultural Events" image={othersImg} color="#ffbd43" />
        </div>
      </div>
    </div>
  );
}

export default HomeMain;
