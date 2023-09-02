import React from "react";
import "./Info.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephoneFill } from "react-icons/bs";

const Info = () => {
  return (
    <div className="barplay__info-section">
      {/* -----info text section------- */}
      <div className="barplay__info-text">
        <h1>MUKANA PELISSÄ!</h1>
        <p>
          Bar Play on kaupungin menevin sporttibaari! Meillä voit katsoa
          urheilua kolmelta jättiscreeniltä sekä kymmenesta muusta televisiosta!
          Lisäksi baaristamme löytyy keittiö, joka tarjoaa herkullista
          pubiruokaa joka päivä aina yöhön saakka. Juomaa luonnollisesti ihan
          jokaiseen makuun! Meillä voit myös pelata biljardia, lautapelejä tai
          vaikka Hohto Beer Pongia!
        </p>
        <br></br>
        <li>
          <a>Tutustu ruokalistaamme ja tee tilauksesi tästä!</a>
        </li>
        <br></br>
        <h2>Asiointi perheille</h2>
        <p>
          Play on viikonloppuisin (pe-su) ja suurten tapahtumien yhteydessä aina
          K18. Alaikäiset ovat kuitenkin tervetulleita vanhempien kanssa
          ruokailemaan ja limulle arkisin (ma-to) ennen klo 18.00.
        </p>
        <br></br>
        <h2>Tilavaraukset</h2>
        <br></br>
        <p>
          Tilavaraukset ja tarjouspyyynnöt myyntipalvelustamme
          sales.karelia@sokoshotels.fi
        </p>
        <br></br>
        <p>
          Muihin kyselyihin vastaamme viikon sisällä ja useimmin parissa
          päivässä parhaiten täältä barplay.joensuu@sok.fi
        </p>
        <br></br>
        <p>Lämpimästi tervetuloa!</p>
      </div>

      {/* -------- schedule info section ------- */}

      <div className="barplay__schedule-section">
        <div className="barplay__schedule-section-text">
          <h1>Bar play Joensuu</h1>
          <div className="barplay__schedule-clock">
            <AiOutlineClockCircle className="barplay__schedule-icon" />
            <div className="barplay__schedule-clock-p">
              <p>Tänään: 12:00 - 02:00</p>
              <p>Keittiö: 12:00 - 01:00</p>
            </div>
          </div>
          <div className="barplay__schedule-location">
            <CiLocationOn className="barplay__schedule-icon" />
            <p>Kauppakatu 23 B, 80100 Joensuu</p>
            <a href="#">Karta</a>
          </div>
          <br></br>
          <div className="barplay__schedule-phone">
            <BsTelephoneFill className="barplay__schedule-icon" />
            <a href="#">010 7623510</a>
            <a href="#">Soita</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
