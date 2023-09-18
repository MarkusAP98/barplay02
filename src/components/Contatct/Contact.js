import React from "react";
import "./Contact.css";
import { AiFillFacebook, AiFillInstagram, AiFillMessage } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
const Contact = () => {
  return (
    <div className="barplay__yhteistiedot">
      <h1>YHTEISTIEDOT</h1>
      <div className="yhteistiedot__info">
        <div className="info-palautetta">
          {/* ------------palautetta---------- */}
          <button className="info-btn">Anna Palautetta</button>
          <li>
            <a>
              <AiFillFacebook className="info_icon-fb" />
            Facebook
            </a>
          </li>
          <li>
            <a>
              <AiFillInstagram className="info_icon-ig" />
            </a>
            Instagram
          </li>
        </div>
        {/*--------karta--------- */}
        <div className="info-karta">
          <li>
            <a>
              <CiLocationOn />
            Kauppakatu 23 B Joensuu
            </a>
          </li>
        </div>
        {/* --------soita------- */}
        <div className="info-soita">
          <li>
            <a>
              <BsTelephone />
              010 7623510
            </a>
          </li>
        </div>
        {/* ------------aikataulu-------- */}
        <div className="info-aikataulu"></div>
      </div>
    </div>
  );
};

export default Contact;
