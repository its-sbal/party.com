import React, { useState, useEffect } from "react";
import axios from "axios";
import { HorizontalSpacer } from "@cred/neopop-web/lib/components";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Radio, Space, Divider, Row, Col } from "antd";
import VendorCard from "../../cred/VendorCard";
import "./VendorPage.css";
function VendorPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProduct() {
      const { data } = await axios.get("http://127.0.0.1:8000/service/");
      setProducts(data);
    }
    fetchProduct();
  }, []);
  console.log(products);
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
          <Input className="search-input" />
          <Button
            className="searchIcon"
            type="primary"
            icon={
              <SearchOutlined style={{ position: "relative", bottom: "10%" }} />
            }
            size={"large"}
            style={{
              height: "4rem",
              width: "4rem",
              backgroundColor: "blueviolet",
              boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1) !important",
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
        <div className="list">
          <Row gutter={[16, 16]}>
            {products.map((product) => (
              <Col span={6}>
                <VendorCard product={product} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
}

export default VendorPage;
