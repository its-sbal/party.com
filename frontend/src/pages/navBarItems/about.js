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
            <img src={img2} alt="Jane" style={{ width: "80%" }} />
            <div className="container">
              <h2>Sudhansu</h2>
              <p></p>
              <p>sitsekhar@example.com</p>
              <p className="odi1">
                <button
                  onClick={() =>
                    (window.location = "mailto:sitsekhar@gmail.com")
                  }
                >
                  Contact Me
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card">
            <img src={img1} alt="sudhansu" style={{ width: "100%" }} />
            <div className="container">
              <h2>Soubhagya</h2>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p className="odi1">
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm">
          <div className="card">
            <img src={img1} alt="John" style={{ width: "100%" }} />
            <div className="container">
              <h2>Priyadarshi</h2>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p className="odi1">
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm">
          <div className="card">
            <img src={img1} alt="Mike" style={{ width: "100%" }} />
            <div className="container">
              <h2>Ayush Kumar</h2>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
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
