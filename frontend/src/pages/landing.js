import "./landing.css";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import photo1 from "../images/landing1.png";
import { Button, Space } from "antd";
function Landing() {
  return (
    <div>
      <div className="left">
        <div className="insideleft">
          <div>Name</div>
          <Input placeholder="Your Name" prefix={<UserOutlined />} />
          <div>Number</div>
          <Input placeholder="Mobile Number" prefix="+91" />
          <div>Location</div>
          <Input placeholder="Your Location" prefix={<UserOutlined />} />
          <div className="buttonin">
            <Button type="primary" danger>
              Submit
            </Button>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={photo1} />
      </div>
    </div>
  );
}

export default Landing;
