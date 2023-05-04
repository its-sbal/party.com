import React from "react";
import { HorizontalSpacer } from "@cred/neopop-web/lib/components";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

function Footer() {
  return (
    <>
      <HorizontalSpacer n={5} />

      <MDBFooter className="text-center" color="white" bgColor="black">
        <MDBContainer className="p-4">
          <section className="mb-4">
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://www.facebook.com/MSDhoni/"
              role="button"
            >
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://www.twitter.com/msdhoni/"
              role="button"
            >
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://wwww.google.com/msdhoni/"
              role="button"
            >
              <MDBIcon fab icon="google" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://www.instagram.com/mahi7781/"
              role="button"
            >
              <MDBIcon fab icon="instagram" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://in.linkedin.com/in/ravindrajadeja"
              role="button"
            >
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://github.com/its-sbal/party.com"
              role="button"
            >
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </section>
          <section className="">
            <MDBRow>
              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h4 className="text-uppercase">Consumer Policy</h4>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Return Policy
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Terms of use
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Security
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Privacy
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h4 className="text-uppercase">Help</h4>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Payments
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Shipping
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Cancellation and Returns
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      FAQ
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h4 className="text-uppercase">Mail us</h4>
                <h6>
                  <a href="customersupport.party.com.in">
                    customersupport.party.com.in
                  </a>
                </h6>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h4 className="text-uppercase">Registered Office Address</h4>
                <h6>Silicon Institute Of Technology,Patia,Bhubaneswar</h6>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0,0,0)" }}
        >
          © 2023 Copyright: party.com
        </div>
      </MDBFooter>
    </>
  );
}

export default Footer;
