import React from "react";
import "./Navbar.css";
import { AiFillFacebook, AiFillInstagram, AiFillMessage } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <ul className="barplay__navbar-links">
          <li className="barplay__links">
            <a>Kokoustilat</a>
          </li>
          <li className="barplay__links">
            <a>Bar Play Joensuu</a>
          </li>
          <li className="barplay__links">
            <a>Ruokalista</a>
          </li>
        </ul>
        <div className="navbar_social-media">
          <ul>
            <li>
              <a>
                <AiFillFacebook />
              </a>
            </li>
            <li>
              <a>
                <AiFillInstagram />
              </a>
            </li>
            <li>
              <a>
                <AiFillMessage />
              </a>
            </li>
          </ul>
        </div>
        <button className="barplay_navbar-btn">Varaa aikasi</button>
      </div>
    </>
  );
};

export default Navbar;
