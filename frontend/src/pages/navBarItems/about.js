import React from "react";
import img1 from "./photo default.jpg";
import "./about.css";
import img2 from "./happu.png";
import img10 from "./about.jpg";
import img20 from "./about2.jpg";
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
              src={img20}
              alt="Jane"
              style={{ height: "14rem", width: "100%" }}
            />
            <div className="container">
              <h1 style={{ marginTop: "0.3rem" }}>Sudhansu</h1>
              <p></p>
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
            <img
              src={img10}
              alt="sudhansu"
              style={{ height: "14rem", width: "100%" }}
            />
            <div className="container">
              <h1 style={{ marginTop: "0.3rem" }}>Soubhagya</h1>
              <p className="odi1">
                <button
                  onClick={() =>
                    (window.location = "mailto:saubhagyabal2001.com")
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
            <img
              src={img10}
              alt="John"
              style={{ height: "14rem", width: "100%" }}
            />
            <div className="container">
              <h1 style={{ marginTop: "0.3rem" }}>Priyadarshi</h1>
              <p className="odi1">
                <button
                  onClick={() =>
                    (window.location = "mailto:p.satyaprakash99@gmail.com")
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
            <img
              src={img20}
              alt="Mike"
              style={{ height: "14rem", width: "100%" }}
            />
            <div className="container">
              <h1 style={{ marginTop: "0.3rem" }}>Ayush Kumar</h1>

              <p className="odi1">
                <button
                  onClick={() =>
                    (window.location = "mailto:cse.190310026@silicon.ac.in")
                  }
                >
                  Contact Me
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
