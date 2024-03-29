import React from "react";
import "./concertTicket.css";

function Concert() {
  return (
    <div className="body1">
      <div className="ticket">
        <div className="left">
          <div className="image">
            <p className="admit-one">
              <span>ADMIT ONE</span>
              <span>ADMIT ONE</span>
              <span>ADMIT ONE</span>
            </p>
            <div className="ticket-number">
              <p>#20030220</p>
            </div>
          </div>
          <div className="ticket-info">
            <p className="date">
              <span>TUESDAY</span>
              <span className="june-29">March 29TH</span>
              <span>2023</span>
            </p>
            <div className="show-name">
              <h1>SOUR Prom</h1>
              <h2>Olivia Rodrigo</h2>
            </div>
            <div className="time">
              <p>
                8:00 PM <span>TO</span> 11:00 PM
              </p>
              <p>
                DOORS <span>@</span> 7:00 PM
              </p>
            </div>
            <p className="location">
              <span>SIT BBSR</span>
              <span className="separator">
                <i className="far fa-smile"></i>
              </span>
              <span>Near Dlf, Patia</span>
            </p>
          </div>
        </div>
        <div className="right">
          <p className="admit-one">
            <span>ADMIT ONE</span>
            <span>ADMIT ONE</span>
            <span>ADMIT ONE</span>
          </p>
          <div className="right-info-container">
            <div className="show-name"></div>
            <div className="time">
              <p>
                8:00 PM <span>TO</span> 11:00 PM
              </p>
              <p>
                DOORS <span>@</span> 7:00 PM
              </p>
            </div>
            <div className="barcode">
              <img src="https://external-preview.redd.it/cg8k976AV52mDvDb5jDVJABPrSZ3tpi1aXhPjgcDTbw.png?auto=webp&s=1c205ba303c1fa0370b813ea83b9e1bddb7215eb" />
            </div>
            <p className="ticket-number">#20030220</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Concert;
