import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import "./vendorlog.css";
import OtpInput from "otp-input-react";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "./firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import image1 from "./master5.jpg";
import image2 from "./master4.jpg";
import image3 from "./master3.jpg";
import { Link } from "react-router-dom";
import vendorReg from "./vendorReg";

const Vendorlog = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sent successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }
  const shoot = () => {};

  return (
    <div className="bg-emerald-300 flex items-center justify-center ">
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <h2 className="text-center text-white font-medium text-2xl">
            👍Login Success
            {"\n"}
            <Link style={{ color: "green" }} to="/vendorReg">
              Register
            </Link>
          </h2>
        ) : (
          <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
            <h1 className="text-center leading-normal text-white font-medium text-1xl mb-6">
              <br /> Lunch Your Business in 10 minutes
            </h1>
            {showOTP ? (
              <>
                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                  <BsFillShieldLockFill size={10} />
                </div>
                <label
                  htmlFor="otp"
                  className="font-bold text-xl text-white text-center"
                >
                  Enter your OTP
                </label>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="opt-container "
                ></OtpInput>
                <button
                  onClick={onOTPVerify}
                  className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                >
                  {loading && (
                    <CgSpinner size={10} className="mt-1 animate-spin" />
                  )}
                  <span>Verify OTP</span>
                </button>
              </>
            ) : (
              <>
                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                  <BsTelephoneFill size={20} />
                </div>
                <label
                  htmlFor=""
                  className="font-bold text-xl text-white text-center"
                >
                  Verify your phone number
                </label>
                <PhoneInput country={"in"} value={ph} onChange={setPh} />
                <button
                  onClick={onSignup}
                  className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                >
                  {loading && (
                    <CgSpinner size={15} className="mt-1 animate-spin" />
                  )}
                  <span>Send code via SMS</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={image1} />
          <Card.Body>
            <Card.Text>
              "BBD and BDS sales compounded the consumer demand which led to a
              milestone of 150% YoY revenue growth from party.com"
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Odisha</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={image2} />
          <Card.Body>
            <Card.Text>
              "Starting with 1, party.com helped me expand to 6 categories with
              5x growth year on year!"
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Mumbai</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={image3} />
          <Card.Body>
            <Card.Text>
              "With part.com, we went from Rs.20,000 to Rs.2 Cr in sales per
              annum!"
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Bangalore</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Vendorlog;
