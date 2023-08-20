import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
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
      <div className="navbar_icons">
        <ul>
          <li>
            <a>Fb</a>
          </li>
          <li>
            <a>Ig</a>
          </li>
          <li>
            <a>Viesti</a>
          </li>
        </ul>
      </div>
      <button>Varaa aikasi</button>
    </div>
  );
}

export default Navbar