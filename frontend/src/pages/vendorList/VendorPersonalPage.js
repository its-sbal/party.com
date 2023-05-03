import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

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
                  style={{ fontFamily: "Tilt Warp", fontSize: "20px" }}
                >
                  {product.address}
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
                <Col>
                  <Row>
                    <div
                      className=".vendorTitle"
                      style={{ fontFamily: "Tilt Warp", fontSize: "20px" }}
                    >
                      Email :
                    </div>
                  </Row>
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
