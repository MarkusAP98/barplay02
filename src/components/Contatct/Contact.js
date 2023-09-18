import React from "react";
import "./Contact.css";
import { AiFillFacebook, AiFillInstagram, AiFillMessage } from "react-icons/ai";
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
            </a>
            Facebook
          </li>
          <li>
            <a>
              <AiFillInstagram className="info_icon-ig" />
            </a>
            Instagram
          </li>
        </div>
        {/*--------karta--------- */}
        <div className="info-karta"></div>
        {/* --------soita------- */}
        <div className="info-soita"></div>
        {/* ------------aikataulu-------- */}
        <div className="info-aikataulu"></div>
      </div>
    </div>
  );
};

export default Contact;
