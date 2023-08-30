import React from "react";
import "./Navbar.css";
import { AiFillFacebook, AiFillInstagram, AiFillMessage } from "react-icons/ai";
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <ul className="barplay__navbar-links">
          <li className="barplay__links">
            <a>Kokoustilat</a>
          </li>
          <li className="barplay__links">
            <a>
              <p>Bar Play Joensuu</p>
              <p id="barplay-joensuu">joensuu</p>
            </a>
          </li>
          <li className="barplay__links">
            <a>Ruokalista</a>
          </li>
        </ul>
        <div className="navbar_social-media">
          <ul>
            <li>
              <a className="navbar-icons">
                <AiFillFacebook />
              </a>
            </li>
            <li>
              <a className="navbar-icons">
                <AiFillInstagram />
              </a>
            </li>
            <li>
              <a className="navbar-icons">
                <AiFillMessage />
              </a>
            </li>
          </ul>
        </div>
        <button className="barplay__navbar-btn">Varaa aikasi</button>
      </div>
    </>
  );
};

export default Navbar;
