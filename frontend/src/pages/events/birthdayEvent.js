import EventOptionCard from "../../cred/EventOptionCard";
import { HorizontalSpacer } from "@cred/neopop-web/lib/components";
import "./birthdayEvent.css";
import musicImg from "../../images/birthday1.png";

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
          <EventOptionCard
            title="Decoration"
            image="https://rukminim1.flixcart.com/image/832/832/koq33ww0/birthday-combo/m/y/e/happy-birthday-decoration-items-with-led-photo-banner-cake-original-imag34dxsuy8uzh7.jpeg?q=70"
          />
        </div>
        <div>
          <EventOptionCard
            title="Catering"
            image="https://thumbs.dreamstime.com/b/buffet-party-16569264.jpg"
          />
        </div>
        <div>
          <EventOptionCard
            title="Garlands"
            image="https://sc04.alicdn.com/kf/Hc0e29560b91c4dca8e46edb7124c3834G.jpg"
          />
        </div>
        <div>
          <EventOptionCard
            title="Cakes"
            image="data:image/jpeg;base64,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"
          />
        </div>
        <div>
          <EventOptionCard
            title="Celebration Hall"
            image="https://media.weddingz.in/images/5ccc11ff9323aa867c3b4123a10b8211/small-birthday-party-places-in-nagpur-to-host-your-glittering-evening.jpg"
          />
        </div>
        <div>
          <EventOptionCard
            title="Entertainment"
            image="https://i.pinimg.com/originals/03/bc/11/03bc11cf36272b626ec1246e4b8b5ec5.gif"
          />
        </div>
      </div>
    </div>
  );
}

export default Birthday;
