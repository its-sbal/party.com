import React from "react";
import img1 from "./photo default.jpg";
import "./about.css";

function About() {
  return (
    <div>
      <div className="about-section">
        <h1>About Us</h1>
        <p>
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
            <img src={img1} alt="Jane" style={{ width: "100%" }} />
            <div className="container">
              <h2>Soubhagya</h2>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="card">
            <img src={img1} alt="Mike" style={{ width: "100%" }} />
            <div className="container">
              <h2>Sudhansu</h2>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p>
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
              <p>
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
              <p>
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
