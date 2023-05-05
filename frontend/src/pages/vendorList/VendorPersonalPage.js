import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

function VendorPersonalPage() {
  const { vendorId } = useParams();
  const [product, setproduct] = useState(null);

  useEffect(() => {
    async function fetchVendorDetails() {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/service/${vendorId}`
      );
      setproduct(data);
    }
    fetchVendorDetails();
  }, [vendorId]);
  console.log(product);
  return (
    <div style={{ paddingLeft: "2rem" }}>
      {product ? (
        <div>
          <Row>
            <div
              className=".vendorTitle"
              style={{ fontFamily: "Tilt Warp", fontSize: "30px" }}
            >
              {product.vendorName}
            </div>
          </Row>
          <Row>
            <Col xs={8}>
              <Row>
                <div
                  className=".vendorTitle"
                  style={{ fontFamily: "Tilt Warp", fontSize: "20px" }}
                >
                  Description
                </div>
              </Row>
              <Row>
                <div
                  className=".vendorTitle"
                  style={{ fontFamily: "Tilt ", fontSize: "20px" }}
                >
                  {product.description}
                </div>
              </Row>
            </Col>
            <Col xs={4}>
              <Row>
                <div
                  className=".vendorTitle"
                  style={{ fontFamily: "Tilt Warp", fontSize: "20px" }}
                >
                  Address
                </div>
              </Row>
              <Row>
                <div
                  className=".vendorTitle"
                  style={{ fontFamily: "", fontSize: "20px" }}
                >
                  {product.address}
                </div>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <div
                  className=".vendorTitle"
                  style={{
                    fontFamily: "Tilt Warp",
                    fontSize: "20px",
                    paddingTop: "2rem",
                  }}
                >
                  Hours Available
                </div>
              </Row>
              <Row>
                <div
                  className=".vendorTitle"
                  style={{ fontFamily: " ", fontSize: "17px" }}
                >
                  Weekday Hours :
                  <strong style={{ fontFamily: "Tilt Warp", fontSize: "17px" }}>
                    9 AM to 11 PM
                  </strong>
                </div>
              </Row>
              <Row>
                <div
                  className=".vendorTitle"
                  style={{ fontFamily: " ", fontSize: "17px" }}
                >
                  Sunday Hours :{" "}
                  <strong style={{ fontFamily: "Tilt Warp", fontSize: "17px" }}>
                    3 PM to 8 PM
                  </strong>
                </div>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs={8} style={{ paddingTop: "2rem" }}>
              <Row>
                <div
                  className=".vendorTitle"
                  style={{ fontFamily: "Tilt Warp", fontSize: "20px" }}
                >
                  How can I contact the Organizer with any questions ?
                </div>
              </Row>
              <Row>
                <div
                  className=".vendorTitle"
                  style={{ fontFamily: "", fontSize: "17px" }}
                >
                  Email :{" "}
                  <strong style={{ color: "blueviolet" }}>
                    {product.email}
                  </strong>
                </div>
              </Row>
              <Row>
                <div
                  className=".vendorTitle"
                  style={{ fontFamily: "", fontSize: "17px" }}
                >
                  Phone No. : <strong>{product.mobile}</strong>
                </div>
              </Row>
            </Col>
            <Col>
              <Row>
                <div
                  className=".vendorTitle"
                  style={{ fontFamily: "Tilt Warp", fontSize: "20px" }}
                >
                  Services
                </div>
              </Row>
              <Row>
                <div
                  className=".vendorTitle"
                  style={{ fontFamily: "", fontSize: "20px" }}
                >
                  Cakes, Decoration, Music
                </div>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs={8}></Col>
            <Col>
              <Row>
                <div
                  className=".vendorTitle"
                  style={{ fontFamily: "Tilt Warp", fontSize: "20px" }}
                >
                  Share with Friends
                </div>
              </Row>

              <Row style={{ position: "relative", marginTop: "1rem" }}>
                <Col>
                  <SocialIcon
                    url="https://twitter.com/jaketrent"
                    style={{ height: 40, width: 40 }}
                  />
                </Col>
                <Col style={{ position: "relative", left: "-7rem" }}>
                  <SocialIcon
                    url="https://facebook.com/jaketrent"
                    style={{ height: 40, width: 40 }}
                  />
                </Col>
                <Col style={{ position: "relative", left: "-14rem" }}>
                  <SocialIcon
                    url="https://tiktok.com/jaketrent"
                    style={{ height: 40, width: 40 }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      ) : (
        <p>Fetching Details. Please Wait ...</p>
      )}
    </div>
  );
}

export default VendorPersonalPage;
