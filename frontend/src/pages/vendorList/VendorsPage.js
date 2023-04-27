import React, { useState } from "react";
import { HorizontalSpacer } from "@cred/neopop-web/lib/components";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Radio, Space, Divider } from "antd";

function VendorPage() {
  return (
    <>
      <div>
        <HorizontalSpacer n={1} />
        <img
          src="https://busestoconcerts.com/wp-content/uploads/2017/11/concert-banner.jpg"
          style={{ height: "430px", width: "100%" }}
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
        <div
          className=".vendorTitle"
          style={{ fontFamily: "Tilt Warp", fontSize: "30px" }}
        >
          All Available Vendor's
        </div>
      </div>
    </>
  );
}

export default VendorPage;
