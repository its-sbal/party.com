import EventOptionCard from "../../cred/EventOptionCard";
import Card from "../../cred/OptionCard";
import { HorizontalSpacer } from "@cred/neopop-web/lib/components";
import "./birthdayEvent.css";
import musicImg from "../../images/birthday1.png";
import catering1 from "../../images/birthday/catering1.jpg";
import cakes1 from "../../images/birthday/cakes1.png";
import cakes2 from "../../images/birthday/cakes2.jpg";

import hall1 from "../../images/birthday/hall1.jpg";
import enter1 from "../../images/birthday/enter1.jpg";
import decoration1 from "../../images/birthday/decor1.jpg";
import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Radio, Space, Divider } from "antd";

function Birthday() {
  return (
    <div>
      <HorizontalSpacer n={1} />
      <img
        src="https://busestoconcerts.com/wp-content/uploads/2017/11/concert-banner.jpg"
        style={{ height: "300px", width: "100%" }}
      />
      <HorizontalSpacer n={1} />
      <div className="searchbar">
        <Button
          className="searchIcon"
          type="primary"
          icon={
            <SearchOutlined style={{ position: "relative", bottom: "10%" }} />
          }
          size={"large"}
          style={{
            height: "56px",
            width: "56px",
            backgroundColor: "blueviolet",
          }}
        />
      </div>
      <HorizontalSpacer n={4} />

      <div className="flex-event">
        <div>
          <Card name="Decoration" image={decoration1} color="#f5a15d" />
        </div>
        <div>
          <Card name="Catering" image={catering1} color="#bd3e08" />
        </div>
        <div>
          <Card
            name="Garlands"
            image="https://sc04.alicdn.com/kf/Hc0e29560b91c4dca8e46edb7124c3834G.jpg"
            color="#ff493c"
          />
        </div>
        <div>
          <Card name="Cakes" image={cakes2} color="#8348e8" />
        </div>
        <div>
          <Card name="Celebration Hall" image={hall1} color="#e8a848" />
        </div>
        <div>
          <Card name="Entertainment" image={enter1} color="#ff493c" />
        </div>
      </div>
    </div>
  );
}

export default Birthday;
