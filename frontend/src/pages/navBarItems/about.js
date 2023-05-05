import React from "react";
import img1 from "./photo default.jpg";
import "./about.css";
import img2 from "./happu.png";

function About() {
  return (
    <div>
      <div className="about-section">
        <h1 className="odi2">About Us</h1>
        <p className="odi2">
          Welcome to our party and event organizing app! We are a team of
          passionate event planners who understand the importance of creating
          memorable experiences for our clients. With years of experience in the
          industry, we've seen it all and are dedicated to making sure that your
          event is nothing short of exceptional. Our app is designed to simplify
          the event planning process, making it easier for you to create the
          perfect celebration. From weddings to birthdays, corporate events to
          baby showers, our app has everything you need to plan and execute a
          successful event. We're excited to be a part of your special day and
          can't wait to help you bring your vision to life!
        </p>
      </div>

      <h2 style={{ textAlign: "center" }}>Our Team</h2>
      <div className="row">
        <div className="col-sm">
          <div className="card">
            <img
              src={img1}
              alt="Jane"
              style={{ height: "14rem", width: "100%" }}
            />
            <div className="container">
              <h2 style={{ marginTop: "0.3rem" }}>Sudhansu</h2>
              <p></p>
              <p>sitsekhar@example.com</p>
              <p className="odi1">
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card">
            <img
              src={img1}
              alt="sudhansu"
              style={{ height: "14rem", width: "100%" }}
            />
            <div className="container">
              <h2 style={{ marginTop: "0.3rem" }}>Soubhagya</h2>
              <p>mike@example.com</p>
              <p className="odi1">
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm">
          <div className="card">
            <img
              src={img1}
              alt="John"
              style={{ height: "14rem", width: "100%" }}
            />
            <div className="container">
              <h2 style={{ marginTop: "0.3rem" }}>Priyadarshi</h2>
              <p>john@example.com</p>
              <p className="odi1">
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm">
          <div className="card">
            <img
              src={img1}
              alt="Mike"
              style={{ height: "14rem", width: "100%" }}
            />
            <div className="container">
              <h2 style={{ marginTop: "0.3rem" }}>Ayush Kumar</h2>
              <p>mike@example.com</p>
              <p className="odi1">
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
