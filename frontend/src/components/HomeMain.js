import Card from "../cred/OptionCard";
import "./HomeMain.css";
import Ads from "../cred/Ads";
import { Column, HorizontalSpacer } from "@cred/neopop-web/lib/components";
import birthdayImg from "../images/homeMain/birthdayCard.jpg";
import birthdayImg2 from "../images/homeMain/birthdayCard2.jpg";

import marriageImg from "../images/homeMain/marriageCard.jpg";
import collegeImg2 from "../images/homeMain/collegeCard2.jpg";
import cradleImg from "../images/homeMain/cradleCard.jpg";
import othersImg from "../images/homeMain/othersCard.jpg";

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
          <Card name="birthday" image={birthdayImg2} />
        </div>
        <div>
          <Card name="marriage" image={marriageImg} />
        </div>
        <div>
          <Card name="college events" image={collegeImg2} />
        </div>
        <div>
          <Card name="cradle ceremony" image={cradleImg} />
        </div>
        <div>
          <Card name="Cultural Events" image={othersImg} />
        </div>
      </div>
    </div>
  );
}

export default HomeMain;
