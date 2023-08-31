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
        <button className="barplay__navbar-btn">Varaa pöytä</button>

        {/* --------START for smallscreen---------- */}

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
                className="overlay__close-btn"
                onClick={() => {}}
              />
            </div>

            {/* --------start of links and socialmedia------- */}

            <div className="navbar__list-icons">
              <ul className="barplay__navbar-smallscreen-links">
                <li className="barplay__links-smallscreen">
                  <a>Kokoustilat</a>
                </li>
                <br />
                <li className="barplay__links-smallscreen">
                  <a>Ruokalista</a>
                </li>
              </ul>

              {/* ---------- The start of the Icons --------- */}

              <ul className="barplay__navbar-smallscreen-links-icons">
                <li className="navbar-icons">
                  <a>
                    <AiFillFacebook />
                  </a>
                  <p>Facebook</p>
                </li>
                <li className="navbar-icons">
                  <a>
                    <AiFillInstagram />
                  </a>
                    <p>Instagram</p>
                </li>
                <li className="navbar-icons">
                  <a>
                    <AiFillMessage />
                  </a>
                    <p>Palaute</p>
                </li>
              </ul>
              <button className="barplay__navbar-smallscreen-btn">
              Varaa pöytä
            </button>
            </div>

            {/* ------ Smallscreen Buttom --------- */}

            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
