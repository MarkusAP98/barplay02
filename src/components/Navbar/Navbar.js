import React from "react";
import "./Navbar.css";
import { AiFillFacebook, AiFillInstagram, AiFillMessage } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
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

        <div className="navbar__smallscreen">
          <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => {}} />

          <div className="barplay__navbar-smallscreen_overlay flex__center slide-bottom">
            <div className="barplay__smallscreen-barplay_joensuu">
              <li className="barplay__links-smallscreen-joensuu">
                <a>
                  <p>Bar Play Joensuu</p>
                </a>
              </li>
              <RxCross2
                fontSize={27}
                className="overlay__close"
                onClick={() => {}}
              />
            </div>

            <div className="navbar__list-icons">
              <ul className="barplay__navbar-smallscreen-links">
                <li className="barplay__links-smallscreen">
                  <a>Kokoustilat</a>
                </li>
                <br/>
                <li className="barplay__links-smallscreen">
                  <a>Ruokalista</a>
                </li>
              </ul>
              <ul className="barplay__navbar-smallscreen-links-icons">
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
          </div>
        </div>
        <button className="barplay__navbar-btn">Varaa aikasi</button>
      </nav>
    </>
  );
};

export default Navbar;
