import Card from "../cred/OptionCard";
import "./HomeMain.css";
import Ads from "../cred/Ads";
import { Column, HorizontalSpacer } from "@cred/neopop-web/lib/components";

function HomeMain() {
  return (
    <div>
      <HorizontalSpacer n={1} />
      <div className="ads-card">
        <Ads />
      </div>
      <div className="flex-home">
        <div>
          <Card name="birthday" />
        </div>
        <div>
          <Card name="holi party" />
        </div>
        <div>
          <Card name="credle ceremony" />
        </div>
        <div>
          <Card name="anniversary" />
        </div>
        <div>
          <Card name="marriage" />
        </div>
      </div>
    </div>
  );
}

export default HomeMain;
