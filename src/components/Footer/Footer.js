import React from "react";
import "./Footer.css";
import footerLogo from "../../assets/footer_logos/footerLogo.png";

const Footer = () => {
  return (
    <div className="barplay__footer">
      <div className="footer-section1">
        <img className="footer_logo" src={footerLogo}></img>
        <div className="footer-info">
          <h4>SOK Matkailu- & ravitsemiskaupan ketjuohjaus</h4>
          <h5>Käyntiosoite:</h5>
          <p>Fleminginkatu 34 00510 Helsinki</p>
          <h5>Postiosoite:</h5>
          <p>PL 1 00088 S-RYHMÄ</p>
          <h5>Y-tunnus:</h5>
          <p>0116323-1</p>
        </div>
        <div className="footer-info">
          <h4>Myyntipalvelu, pääkaupunkiseutu</h4>
          <p>0300 870 020 (arkisin klo 8.00-18.00)</p>
          <p>51 snt/min + pvm/mpm</p>
          <a>Myyntipalveluiden yhteystiedot, koko Suomi</a>
          <h4>SOK:n puhelinvaihde</h4>
          <p>010 76 8011 (arkisin klo 8.00-17.00)</p>
        </div>
        <div className="footer-info">
          <h4>Yleiset tiedot</h4>
          <ul>
            <li>
              <a>Lahjakortit</a>
            </li>
            <li>
              <a>Medialle</a>
            </li>
            <li>
              <a>Tietosuoja</a>
            </li>
            <li>
              <a>Oiva-Työpaikat</a>
            </li>
            <li>
              <a>Evästeinformaatio</a>
            </li>
            <li>
              <a>Muuta evästeasetuksia</a>
            </li>
                 
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

