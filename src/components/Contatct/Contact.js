import React from "react";
import "./Contact.css";
import { AiFillFacebook, AiFillInstagram, AiFillMessage } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
const Contact = () => {
  return (
    <div className="barplay__yhteistiedot">
      <h1>YHTEYSTIEDOT</h1>
      <div className="yhteistiedot__info">
        <div className="info-palautetta">
          {/* ------------palautetta---------- */}
          <button className="info-btn">Anna Palautetta</button>
          <li>
            <a classname="info-icon">
              <AiFillFacebook className="info_icon-fb, info-icon" />
            </a>
            <p>
              <a>Facebook</a>
            </p>
          </li>
          <li>
            <a classname="info-icon">
              <AiFillInstagram className="info_icon-ig, info-icon" />
            </a>
            <p>
              <a>Instagram</a>
            </p>
          </li>
        </div>
        {/*--------karta--------- */}
        <div className="info-karta">
          <li>
            <a classname="info-icon">
              <CiLocationOn className="info-icon" />
            </a>
            <p>Kauppakatu 23 B Joensuu</p>
          </li>
        </div>
        {/* --------soita------- */}
        <div className="info-soita">
          <li>
            <a classname="info-icon">
              <BsTelephone className="info-icon" />
            </a>
            <p>010 7623510</p>
          </li>
        </div>
        {/* ------------aikataulu-------- */}
        <div className="info-aikataulu">
          <p>
            Arkisin klo 18 jälkeen K18, viikonloppuisin ja tapahtumissa koko
            päivän K18
          </p>
          <div className="info-aikataulu-koko">
            <li>
              <a classname="info-icon">
                <AiOutlineClockCircle className="info-icon" />
              </a>
            </li>
            <div>
              <div className="info-schedule">
                <div className="info-weekday">
                  <p>ma - to</p>
                </div>
                <div className="info-time">
                  <p>15:00 - 00:30</p>
                  <p>Keittiö: 15:00 - 23:30</p>
                </div>
              </div>
              <div className="info-schedule">
                <div className="info-weekday">
                  <p>pe - la</p>
                </div>
                <div className="info-time">
                  <p>15:00 - 02:00</p>
                  <p>Keittiö: 15:00 - 23:30</p>
                </div>
              </div>
              <div className="info-schedule">
                <div className="info-weekday">
                  <p>Su</p>
                </div>
                <div className="info-time-su">
                  <p>15:00 - 02:00</p>
                  <p>Keittiö: 15:00 - 23:30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
