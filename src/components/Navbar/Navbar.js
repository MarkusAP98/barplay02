import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { AiFillFacebook, AiFillInstagram, AiFillMessage } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  // ------scroll color change system-----

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        // Change the scroll threshold as needed
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ------ Navbar --------

  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <ul className="barplay__navbar-links">
          <li className="barplay__links">
            <a>Kokoustilat</a>
          </li>
          <li className="barplay__links" id="barplay__link-joensuu">
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

        {/* --------START for smallscreen HamburgerMenu---------- */}

        <div className="navbar__smallscreen">
          <div className="navbar__smallscreen-hamburgermenu">
            <div className="smallscreen-header">
              <li>Barplay Joensuu</li>
            </div>

            <GiHamburgerMenu
              className="hamburger"
              color="#fff"
              fontSize={27}
              onClick={() => setToggleMenu(true)}
            />
          </div>

          {/* --------After Clicked what will be Toggled------ */}

          {toggleMenu && (
            <div className="barplay__navbar-smallscreen_overlay flex__center slide-bottom">
              <div className="barplay__smallscreen-barplay_joensuu">
                <li className="barplay__links-smallscreen-joensuu">
                  <a>Bar Play Joensuu</a>
                </li>

                {/* ------The cross/exit Btn------- */}

                <RxCross2
                  fontSize={27}
                  className="overlay__close-btn"
                  onClick={() => setToggleMenu(false)}
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
                  <li className="navbar-icons-smallscreen">
                    <a>
                      <AiFillFacebook />
                    </a>
                    <p>Facebook</p>
                  </li>
                  <li className="navbar-icons-smallscreen">
                    <a>
                      <AiFillInstagram />
                    </a>
                    <p>Instagram</p>
                  </li>
                  <li className="navbar-icons-smallscreen">
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
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
