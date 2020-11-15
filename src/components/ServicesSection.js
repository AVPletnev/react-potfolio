import React from "react";
// Import icons

import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

function ServicesSection() {
  return (
    <div>
      <div className="services">
        <div className="description">
          <h2>
            Hight <span>quality</span> services
          </h2>
          <div className="cards">
            <div className="card">
              <div className="icon">
                <img src={clock} alt="img" />
                <h3>Efficient</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={diaphragm} alt="img" />
                <h3>Efficient</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={money} alt="img" />
                <h3>Efficient</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={teamwork} alt="img" />
                <h3>Efficient</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="img" />
      </div>
    </div>
  );
}

export default ServicesSection;